const partnerDetailData = window.XANH_HOANG_GIA_PARTNER_DATA;

function make(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function getDetailItem() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type") || "supplier";
  const id = params.get("id");
  const collection = type === "partner" ? partnerDetailData.otherPartners : partnerDetailData.mainSuppliers;
  const item = collection.find((entry) => entry.id === id);

  return { item, type };
}

function renderImageGallery(item, options = {}) {
  const images = options.images || item.images || [];
  const galleryClassName = options.variant === "documents" ? "detail-page-gallery detail-page-document-gallery" : "detail-page-gallery";
  const imageClassName = options.variant === "documents" ? "detail-page-image detail-page-document-image" : "detail-page-image";
  const gallery = make("div", images.length ? galleryClassName : "detail-page-empty");

  if (!images.length) {
    gallery.append(make("p", "", options.emptyText || "Chưa có hình ảnh sản phẩm cho đối tác này."));
    return gallery;
  }

  images.forEach((src, index) => {
    const image = make("img", index === 0 ? `${imageClassName} detail-page-image-main` : imageClassName);
    image.src = src;
    image.alt = `${options.altPrefix || "Hình ảnh"} ${item.name} ${index + 1}`;
    image.loading = "lazy";
    gallery.append(image);
  });

  return gallery;
}

function renderListCard(title, items) {
  const card = make("section", "detail-page-list-card");
  card.append(make("h3", "detail-page-list-title", title));

  if (!items || !items.length) {
    return card;
  }

  const list = make("ul", "detail-page-list");
  items.forEach((item) => {
    list.append(make("li", "", item));
  });
  card.append(list);

  return card;
}

function renderDetailPage() {
  const app = document.getElementById("partner-detail-app");
  const { item, type } = getDetailItem();
  const backLink = document.getElementById("detail-back-link");
  if (backLink) {
    const targetId = type === "partner" ? "khach-hang" : "doi-tac";
    backLink.href = `index.html?restore=1&target=${targetId}`;
    backLink.addEventListener("click", (event) => {
      const saved = sessionStorage.getItem("xanhHoangGiaReturnPosition");
      if (!saved || window.history.length <= 1) return;

      event.preventDefault();
      window.history.back();
    });
  }

  if (!item) {
    const empty = make("section", "detail-page-card detail-page-not-found");
    empty.append(make("p", "eyebrow", "Không tìm thấy"));
    empty.append(make("h1", "", "Không tìm thấy thông tin đối tác"));
    empty.append(make("p", "", "Bạn có thể quay lại hồ sơ năng lực để chọn lại nhà cung cấp hoặc đối tác khác."));
    const back = make("a", "detail-page-primary-link", "Quay lại hồ sơ");
    back.href = "index.html#doi-tac";
    empty.append(back);
    app.append(empty);
    return;
  }

  const page = make("article", "detail-page-card");
  const hero = make("section", "detail-page-hero");
  const label = type === "partner" ? "Đối tác khác" : `Nhà cung cấp chính ${item.number || ""}`.trim();
  hero.append(make("p", "eyebrow", label));
  hero.append(make("h1", "detail-page-title", item.name));
  hero.append(make("p", "detail-page-category", item.category || "Thông tin đối tác"));
  hero.append(make("p", "detail-page-summary", item.summary));
  hero.append(make("p", "detail-page-description", item.details));

  const content = make("section", "detail-page-content");
  const productSide = make("div", "detail-page-side detail-page-products");
  productSide.append(make("h2", "", "Sản phẩm / phạm vi cung cấp"));
  productSide.append(renderImageGallery(item));
  productSide.append(renderListCard("Danh mục liên quan", item.products || [item.category]));

  const documentSide = make("div", "detail-page-side detail-page-documents");
  documentSide.append(make("h2", "", "Giấy tờ nhà cung cấp"));
  if (item.documentImages?.length) {
    documentSide.append(
      renderImageGallery(item, {
        images: item.documentImages,
        variant: "documents",
        altPrefix: "Giấy tờ",
        emptyText: "Chưa có hình ảnh giấy tờ cho đối tác này.",
      }),
    );
  }

  content.append(productSide);
  content.append(documentSide);

  page.append(hero);
  page.append(content);
  app.append(page);
}

renderDetailPage();
