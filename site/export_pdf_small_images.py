from __future__ import annotations

import hashlib
import json
import unicodedata
from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parent
PDF_PATH = ROOT / "XanhHoanGia.pdf"
RAW_DIR = ROOT / "assets" / "pdf-small-images"
CLEAN_DIR = ROOT / "assets" / "pdf-images-clean"
MAP_MD = ROOT / "pdf-images-clean-map.md"
MAP_JSON = ROOT / "pdf-images-clean-map.json"

PAGE_SECTION = {
    1: "Trang đầu",
    2: "Giới thiệu",
    3: "Sứ mệnh / Tầm nhìn",
    4: "Tổ chức / Năng lực",
    5: "Chứng nhận",
    6: "Tổ chức / Năng lực",
    7: "Quy trình",
    8: "Quy trình",
    9: "Sản phẩm",
    10: "Đối tác / Nhà cung cấp",
    11: "Chứng nhận",
    12: "Đối tác / Nhà cung cấp",
    13: "Chứng nhận",
    14: "Đối tác / Nhà cung cấp",
    15: "Chứng nhận",
    16: "Đối tác / Nhà cung cấp",
    17: "Khách hàng",
    18: "Nhà máy / Kho",
}

SECTION_SLUG = {
    "Trang đầu": "trang-dau",
    "Giới thiệu": "gioi-thieu",
    "Sứ mệnh / Tầm nhìn": "su-menh-tam-nhin",
    "Tổ chức / Năng lực": "to-chuc-nang-luc",
    "Chứng nhận": "chung-nhan",
    "Quy trình": "quy-trinh",
    "Sản phẩm": "san-pham",
    "Đối tác / Nhà cung cấp": "doi-tac-nha-cung-cap",
    "Khách hàng": "khach-hang",
    "Nhà máy / Kho": "nha-may-kho",
}


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = "".join(ch.lower() if ch.isalnum() else "-" for ch in ascii_text)
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug.strip("-")


def should_export(page_area: float, placement_area: float, width: int, height: int) -> bool:
    ratio = placement_area / page_area if page_area else 0
    if width < 40 or height < 40:
        return False
    if width * height < 1200:
        return False
    if ratio > 0.65:
        return False
    return True


def clean_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)
    for file in path.iterdir():
        if file.is_file():
            file.unlink()


def main() -> None:
    clean_dir(RAW_DIR)
    clean_dir(CLEAN_DIR)

    pdf = fitz.open(PDF_PATH)
    raw_exported: list[dict] = []

    for page_index in range(pdf.page_count):
        page_number = page_index + 1
        page = pdf.load_page(page_index)
        page_area = page.rect.width * page.rect.height
        images = page.get_images(full=True)

        image_counter = 0
        for image in images:
            xref = image[0]
            rects = page.get_image_rects(xref)
            if not rects:
                continue

            info = pdf.extract_image(xref)
            width = int(info["width"])
            height = int(info["height"])
            ext = info.get("ext", "bin")
            image_bytes = info["image"]
            placement_area = sum(rect.width * rect.height for rect in rects)

            if not should_export(page_area, placement_area, width, height):
                continue

            image_counter += 1
            raw_name = f"page-{page_number:02}-img-{image_counter:02}-xref-{xref}.{ext}"
            raw_path = RAW_DIR / raw_name
            raw_path.write_bytes(image_bytes)

            raw_exported.append(
                {
                    "raw_file": f"assets/pdf-small-images/{raw_name}",
                    "page": page_number,
                    "section": PAGE_SECTION.get(page_number, ""),
                    "xref": xref,
                    "width": width,
                    "height": height,
                    "ext": ext,
                    "placement_area": round(placement_area, 2),
                    "page_area_ratio": round(placement_area / page_area, 4),
                    "sha1": hashlib.sha1(image_bytes).hexdigest(),
                    "image_bytes": image_bytes,
                }
            )

    unique_map: dict[str, dict] = {}
    section_counts: dict[str, int] = {}

    for item in raw_exported:
        sha1 = item["sha1"]
        if sha1 not in unique_map:
            section = item["section"]
            section_slug = SECTION_SLUG.get(section, slugify(section))
            section_counts[section_slug] = section_counts.get(section_slug, 0) + 1
            readable_name = f"{section_slug}-{section_counts[section_slug]:02}.{item['ext']}"
            clean_path = CLEAN_DIR / readable_name
            clean_path.write_bytes(item["image_bytes"])

            unique_map[sha1] = {
                "file": f"assets/pdf-images-clean/{readable_name}",
                "section": section,
                "section_slug": section_slug,
                "width": item["width"],
                "height": item["height"],
                "uses": [],
            }

        unique_map[sha1]["uses"].append(
            {
                "page": item["page"],
                "section": item["section"],
                "xref": item["xref"],
                "page_area_ratio": item["page_area_ratio"],
                "raw_file": item["raw_file"],
            }
        )

    deduped = list(unique_map.values())
    deduped.sort(key=lambda x: (x["section_slug"], x["file"]))

    MAP_JSON.write_text(json.dumps(deduped, ensure_ascii=False, indent=2), encoding="utf-8")

    lines = [
        "# Danh sách ảnh nhỏ đã đổi tên và loại bỏ trùng",
        "",
        f"- Nguồn: `{PDF_PATH.name}`",
        f"- Ảnh thô đã xuất: `{len(raw_exported)}`",
        f"- Ảnh sau khi loại trùng: `{len(deduped)}`",
        f"- Thư mục ảnh thô: `{RAW_DIR.as_posix()}`",
        f"- Thư mục ảnh đã làm sạch: `{CLEAN_DIR.as_posix()}`",
        "",
        "Quy ước tên mới: `ten-muc-so-thu-tu.ext`.",
        "",
    ]

    grouped: dict[str, list[dict]] = {}
    for item in deduped:
        grouped.setdefault(item["section"], []).append(item)

    for section, items in grouped.items():
        lines.append(f"## {section}")
        lines.append("")
        for item in items:
            use_summary = ", ".join(f"trang {use['page']}" for use in item["uses"])
            lines.append(
                f"- `{item['file']}` - {item['width']}x{item['height']} - xuất hiện ở: {use_summary}"
            )
        lines.append("")

    MAP_MD.write_text("\n".join(lines), encoding="utf-8")

    print(f"Raw exported: {len(raw_exported)}")
    print(f"Deduped: {len(deduped)}")
    print(MAP_MD.as_posix())
    print(MAP_JSON.as_posix())


if __name__ == "__main__":
    main()
