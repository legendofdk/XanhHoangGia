from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
MD_PATH = ROOT / "XanhHoangGia.md"
OUTPUT_PATH = ROOT / "site" / "data.js"
PAGES_DIR = ROOT / "site" / "assets" / "pages"
EXTRACTED_DIR = ROOT / "site" / "assets" / "extracted"


SECTION_MAP = {
    1: "cover",
    2: "gioi-thieu",
    3: "su-menh",
    4: "nang-luc",
    5: "chung-nhan",
    6: "nang-luc",
    7: "quy-trinh",
    8: "quy-trinh",
    9: "san-pham",
    10: "nha-cung-cap",
    11: "chung-nhan",
    12: "nha-cung-cap",
    13: "chung-nhan",
    14: "nha-cung-cap",
    15: "chung-nhan",
    16: "nha-cung-cap",
    17: "khach-hang",
    18: "nha-may",
}


SECTION_META = {
    "cover": {
        "label": "Trang Bìa",
        "headline": "Company Profile",
        "description": "Trang mở đầu và thông tin nhận diện của Hoàng Gia Foods.",
    },
    "gioi-thieu": {
        "label": "Giới Thiệu",
        "headline": "Lời ngỏ và thông tin doanh nghiệp",
        "description": "Phần mở đầu, lời chào, sứ mệnh ban đầu và dữ liệu doanh nghiệp.",
    },
    "su-menh": {
        "label": "Sứ Mệnh",
        "headline": "Tôn chỉ, giá trị cốt lõi, sứ mệnh và tầm nhìn",
        "description": "Các tuyên ngôn cốt lõi định hình cách Hoàng Gia vận hành và phát triển.",
    },
    "nang-luc": {
        "label": "Năng Lực",
        "headline": "Cơ cấu vận hành và năng lực đảm bảo chất lượng",
        "description": "Sơ đồ tổ chức, lĩnh vực kinh doanh và định hướng vận hành theo HACCP.",
    },
    "quy-trinh": {
        "label": "Quy Trình",
        "headline": "Quy trình nhập hàng và bảo quản",
        "description": "Hệ tiêu chí nhập thực phẩm và nguyên tắc bảo quản tại Hoàng Gia.",
    },
    "san-pham": {
        "label": "Sản Phẩm",
        "headline": "Danh mục sản phẩm chính",
        "description": "Các nhóm thực phẩm đang được Hoàng Gia cung ứng.",
    },
    "nha-cung-cap": {
        "label": "Nhà Cung Cấp",
        "headline": "Đối tác chiến lược và mạng lưới phân phối",
        "description": "Các nhà cung cấp mục tiêu cùng nội dung đối tác xuất hiện trong profile.",
    },
    "chung-nhan": {
        "label": "Chứng Nhận",
        "headline": "Giấy tờ pháp lý và chứng nhận",
        "description": "Các trang chuyển mục và chứng nhận được giữ lại nguyên trạng từ PDF.",
    },
    "khach-hang": {
        "label": "Khách Hàng",
        "headline": "Lời kết và danh sách khách hàng",
        "description": "Lời kết của doanh nghiệp cùng hệ khách hàng xuất hiện trong hồ sơ.",
    },
    "nha-may": {
        "label": "Nhà Máy",
        "headline": "Nhà máy và kho",
        "description": "Trang kết thúc với chủ đề nhà máy, kho và vận hành hậu cần.",
    },
}


PAGE_TITLES = {
    1: "Trang bìa company profile",
    2: "Lời ngỏ và thông tin doanh nghiệp",
    3: "Tôn chỉ hoạt động, sứ mệnh và tầm nhìn",
    4: "Sơ đồ tổ chức và lĩnh vực kinh doanh",
    5: "Trang chuyển mục giấy tờ pháp lý và chứng nhận",
    6: "Định hướng HACCP và năng lực đảm bảo an toàn thực phẩm",
    7: "Quy trình nhập thực phẩm và tiêu chí nhập hàng",
    8: "Quy trình bảo quản thực phẩm tại Hoàng Gia",
    9: "Danh mục sản phẩm chính",
    10: "Nhà cung cấp mục tiêu: HTX Nông sản sạch Bảo An",
    11: "Giấy chứng nhận HTX Nông sản sạch Bảo An",
    12: "Nhà cung cấp mục tiêu: Công ty CP Nông sản Phú Gia",
    13: "Giấy chứng nhận Công ty CP Nông sản Phú Gia",
    14: "Nhà cung cấp mục tiêu: Vinh Anh Food",
    15: "Chứng nhận Công ty CP Công nghệ Thực phẩm Vinh Anh",
    16: "Các nhà phân phối khác",
    17: "Khách hàng và lời kết",
    18: "Nhà máy và kho",
}


def infer_title(page_number: int, text: str) -> str:
    if page_number in PAGE_TITLES:
        return PAGE_TITLES[page_number]
    clean_lines = [line.strip() for line in text.splitlines() if line.strip()]
    if not clean_lines:
        return f"Trang {page_number}"
    lines = [line for line in clean_lines if not re.fullmatch(r"[\d&.\- ]+", line)]
    if not lines:
        return f"Trang {page_number}"
    return " / ".join(lines[:2])[:120]


def parse_pages(md_text: str) -> list[dict]:
    pattern = re.compile(
        r"### Trang (\d+)\n\n(?:(Ghi chú:.*)\n\n)?```text\n(.*?)\n```",
        re.DOTALL,
    )
    pages = []
    for match in pattern.finditer(md_text):
        page_number = int(match.group(1))
        note = match.group(2) or ""
        text = match.group(3).rstrip()
        pages.append(
            {
                "page": page_number,
                "title": infer_title(page_number, text),
                "note": note,
                "text": text,
                "image": f"assets/pages/page-{page_number:02}.jpg",
                "section": SECTION_MAP.get(page_number, "cover"),
            }
        )
    return pages


def main() -> None:
    md_text = MD_PATH.read_text(encoding="utf-8")
    pages = parse_pages(md_text)
    extracted_images = sorted(
        f"assets/extracted/{path.name}"
        for path in EXTRACTED_DIR.iterdir()
        if path.is_file()
    )
    page_images = sorted(
        f"assets/pages/{path.name}"
        for path in PAGES_DIR.iterdir()
        if path.is_file()
    )
    data = {
        "site": {
            "title": "Xanh Hoàng Gia",
            "subtitle": "Website profile thuần HTML, CSS, JS dựng từ nội dung Markdown và toàn bộ visual của PDF gốc.",
        },
        "sections": SECTION_META,
        "pages": pages,
        "pageImages": page_images,
        "extractedImages": extracted_images,
    }
    OUTPUT_PATH.write_text(
        "window.XANH_HOANG_GIA_DATA = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
