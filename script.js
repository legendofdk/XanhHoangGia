const data = window.XANH_HOANG_GIA_DATA;

const navItems = [
  { id: "hero", label: "Trang đầu" },
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "su-menh-tam-nhin", label: "Sứ mệnh / Tầm nhìn" },
  { id: "to-chuc-nang-luc", label: "Tổ chức / Năng lực" },
  { id: "chung-nhan", label: "Chứng nhận" },
  { id: "quy-trinh", label: "Quy trình" },
  { id: "san-pham", label: "Sản phẩm" },
  { id: "doi-tac", label: "Đối tác / Nhà cung cấp" },
  { id: "khach-hang", label: "Đối tác khác" },
  { id: "nha-may-kho", label: "Nhà máy / Kho" },
  { id: "contact", label: "Liên hệ" },
];

const flowSections = [
  {
    id: "gioi-thieu",
    eyebrow: "Phần 01",
    title: "Giới thiệu doanh nghiệp",
    intro:
      "Phần mở đầu giới thiệu doanh nghiệp, thông tin pháp lý và lời ngỏ của Hoàng Gia Foods.",
    pages: [2],
  },
  {
    id: "su-menh-tam-nhin",
    eyebrow: "Phần 02",
    title: "Sứ mệnh, tầm nhìn và giá trị cốt lõi",
    intro:
      "Những định hướng cốt lõi thể hiện cách doanh nghiệp xây dựng dịch vụ, chất lượng và niềm tin với khách hàng.",
    pages: [3],
  },
  {
    id: "to-chuc-nang-luc",
    eyebrow: "Phần 03",
    title: "Tổ chức và năng lực vận hành",
    intro:
      "Cơ cấu tổ chức, lĩnh vực hoạt động và năng lực vận hành của doanh nghiệp trong chuỗi cung ứng thực phẩm.",
    pages: [4, 6],
  },
  {
    id: "chung-nhan",
    eyebrow: "Phần 04",
    title: "Giấy tờ pháp lý và chứng nhận",
    intro:
      "Các nội dung liên quan đến hồ sơ pháp lý, chứng nhận và những trang chuyển mục trong tài liệu gốc.",
    pages: [5, 11, 13, 15],
  },
  {
    id: "quy-trinh",
    eyebrow: "Phần 05",
    title: "Quy trình nhập hàng và bảo quản",
    intro:
      "Tiêu chí nhập hàng, kiểm soát chất lượng đầu vào và nguyên tắc bảo quản thực phẩm tại Hoàng Gia Foods.",
    pages: [7, 8],
  },
  {
    id: "san-pham",
    eyebrow: "Phần 06",
    title: "Các sản phẩm chính",
    intro:
      "Danh mục sản phẩm mà Hoàng Gia Foods đang cung ứng cho khách hàng và bếp ăn công nghiệp.",
    pages: [9],
  },
  {
    id: "doi-tac",
    eyebrow: "Phần 07",
    title: "Nhà cung cấp và đối tác",
    intro:
      "Các nhà cung cấp mục tiêu, đối tác chiến lược và các đơn vị liên kết xuất hiện trong tài liệu.",
    pages: [10, 12, 14, 16],
  },
  {
    id: "khach-hang",
    eyebrow: "Phần 08",
    title: "Các đối tác khác",
    intro:
      "Danh sách các đơn vị đối tác, khách hàng và hệ thống bếp ăn đang đồng hành cùng Hoàng Gia Foods.",
    pages: [17],
  },
  {
    id: "nha-may-kho",
    eyebrow: "Phần 09",
    title: "Nhà máy và kho",
    intro:
      "Phần nội dung cuối của tài liệu liên quan đến chủ đề nhà máy, kho và vận hành hậu cần.",
    pages: [18],
  },
];

const sectionMedia = {
  "gioi-thieu": [
    {
      src: "assets/pdf-images-clean/gioi-thieu-01.jpeg",
      alt: "Hình ảnh doanh nghiệp Hoàng Gia Foods",
      caption: "Hình ảnh công ty",
      variant: "background",
    },
    {
      src: "assets/pdf-images-clean/gioi-thieu-02.jpeg",
      alt: "Hình ảnh giám đốc Hoàng Gia Foods",
      caption: "Giám đốc",
      variant: "corner",
    },
  ],
  "su-menh-tam-nhin": [
    {
      src: "assets/pdf-images-clean/su-menh-tam-nhin-01.jpeg",
      alt: "Hình ảnh minh họa phần sứ mệnh và tầm nhìn của Hoàng Gia Foods",
      eyebrow: "Giá trị cốt lõi",
      caption: "Giá trị cốt lõi",
      quote: "Cung cấp thực phẩm bằng cái tâm, khách hàng là trọng tâm, chỉ có chất lượng dịch vụ mới là khác biệt.",
      summary:
        "Hoàng Gia lấy sự tận tâm, chất lượng và niềm tin khách hàng làm nền tảng để xây dựng uy tín bền vững trên thị trường.",
    },
    {
      src: "assets/pdf-images-clean/su-menh-tam-nhin-05.jpeg",
      alt: "Hình ảnh minh họa định hướng phát triển của Hoàng Gia Foods",
      eyebrow: "Sứ mệnh",
      caption: "Sứ mệnh",
      quote:
        "Sức khỏe của Người Lao động là sức khỏe của chúng tôi, mang đến nguồn thực phẩm tốt có giá trị cao về dinh dưỡng và chất lượng.",
      summary:
        "Sứ mệnh này là kim chỉ nam cho cách Hoàng Gia lựa chọn sản phẩm, kiểm soát chất lượng và đồng hành cùng khách hàng mỗi ngày.",
    },
    {
      src: "assets/pdf-images-clean/su-menh-tam-nhin-06.jpeg",
      alt: "Hình ảnh minh họa tầm nhìn phát triển của Hoàng Gia Foods",
      eyebrow: "Tầm nhìn",
      caption: "Tầm nhìn",
      quote:
        "Trở thành doanh nghiệp hàng đầu tại Việt Nam trong việc chế biến và cung cấp thực phẩm cho khách hàng và bếp ăn công nghiệp.",
      summary:
        "Doanh nghiệp hướng tới phát triển bền vững, nâng cao năng lực vận hành và khẳng định vị thế dẫn đầu trong ngành thực phẩm.",
    },
  ],
};

const legalDocsData = {
  sections: [
    {
      title: "Vì sao cần HACCP",
      text: "Thị trường thực phẩm ngày càng phức tạp, rủi ro mất an toàn vệ sinh thực phẩm ngày càng gia tăng, đồng thời nhu cầu của khách hàng trong và ngoài nước như Nhật Bản, Hàn Quốc, Trung Quốc và Đài Loan cũng ngày càng cao. Vì vậy, Hoàng Gia chú trọng xây dựng hệ thống kiểm soát chất lượng rõ ràng, đáp ứng các tiêu chuẩn khắt khe trong sản xuất và cung ứng thực phẩm.",
    },
    {
      title: "Vai trò của HACCP",
      text: "HACCP là hệ thống phân tích mối nguy và kiểm soát điểm tới hạn, giúp nhận diện, đánh giá và kiểm soát các rủi ro trọng yếu trong quá trình chế biến thực phẩm. Tiêu chuẩn này tập trung nguồn lực kỹ thuật vào những công đoạn có ảnh hưởng trực tiếp đến an toàn và chất lượng sản phẩm.",
    },
    {
      title: "Cam kết của Hoàng Gia",
      text: "Hoàng Gia luôn lấy chất lượng và vệ sinh an toàn thực phẩm làm cốt lõi, đặt sức khỏe người lao động và khách hàng ở vị trí trọng tâm. HACCP là nền tảng để doanh nghiệp thực hiện sứ mệnh của mình và tiếp tục phát triển thành đơn vị uy tín trong lĩnh vực kinh doanh, cung ứng và bán lẻ thực phẩm.",
    },
  ],
  documents: [
    "assets/pdf-images-clean/chung-nhan-03.jpeg",
    "assets/pdf-images-clean/chung-nhan-04.jpeg",
    "assets/pdf-images-clean/chung-nhan-01.jpeg",
    "assets/pdf-images-clean/HACCP.png",
    "assets/pdf-images-clean/chung-nhan-02.png",
    "assets/pdf-images-clean/chung-nhan-07.jpeg",
    "assets/pdf-images-clean/chung-nhan-11.jpeg",
    "assets/pdf-images-clean/chung-nhan-15.jpeg",
    "assets/pdf-images-clean/chung-nhan-17.jpeg",
    "assets/pdf-images-clean/chung-nhan-19.jpeg",
  ],
};

const partnerData = window.XANH_HOANG_GIA_PARTNER_DATA;
const mainSuppliers = partnerData.mainSuppliers;
const otherPartners = partnerData.otherPartners;

function rememberProfileScroll(targetHash) {
  sessionStorage.setItem(
    "xanhHoangGiaReturnPosition",
    JSON.stringify({
      hash: targetHash,
      scrollY: window.scrollY,
    }),
  );
}

function make(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function normalizeText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function extractCompanyInfo(lines) {
  const labels = [
    "Tên doanh nghiệp:",
    "Tên tiếng anh:",
    "Mã số thuế:",
    "Địa chỉ:",
    "Số điện thoại:",
    "E-Mail:",
  ];

  const start = lines.findIndex((line) => line === labels[0]);
  if (start === -1) return null;

  const block = lines.slice(start, start + labels.length * 2);
  if (block.length < labels.length * 2) return null;

  const pairs = [];
  for (let i = 0; i < labels.length; i += 1) {
    const label = block[i];
    const value = block[i + labels.length];
    if (label !== labels[i] || !value) return null;
    pairs.push({ label: label.replace(":", ""), value });
  }

  return { start, end: start + labels.length * 2, pairs };
}

function renderCompanyInfoCard(pairs) {
  const card = make("div", "company-info-card");
  card.append(make("h4", "company-info-title", "Thông tin doanh nghiệp"));

  const list = make("div", "company-info-list");
  pairs.forEach((pair) => {
    const row = make("div", "company-info-row");
    if (pair.label.toLowerCase().includes("tiếng anh")) {
      row.classList.add("company-info-row-english");
    }
    row.append(make("div", "company-info-label", pair.label));
    row.append(make("div", "company-info-value", pair.value));
    list.append(row);
  });

  card.append(list);
  return card;
}

function extractIntroPageContent(lines) {
  const companyInfo = extractCompanyInfo(lines);
  const infoStart = companyInfo ? companyInfo.start : lines.length;
  const rawIntroLines = lines
    .slice(0, infoStart)
    .map((line) => line.trim())
    .filter((line) => line && !/^\d+$/.test(line));

  const cleanedIntroLines = [];
  const signatureLines = [];
  let inSignature = false;

  rawIntroLines.forEach((line) => {
    if (line === "Trân trọng,") {
      inSignature = true;
      signatureLines.push(line);
      return;
    }

    if (inSignature) {
      if (line === "HỌ TÊN") return;
      if (line === "CÔNG TY TNHH KINH DOANH & SẢN XUẤT THƯƠNG MẠI THỰC PHẨM HOÀNG GIA") {
        return;
      }
      signatureLines.push(line);
      return;
    }

    cleanedIntroLines.push(line);
  });

  const markerIndexes = [
    cleanedIntroLines.findIndex((line) => line.startsWith("Được thành lập")),
    cleanedIntroLines.findIndex((line) => line.startsWith("Với triết lý kinh doanh")),
    cleanedIntroLines.findIndex((line) => line.startsWith("Chúng tôi tự hào")),
    cleanedIntroLines.findIndex((line) => line.startsWith("Xin chân thành cảm ơn")),
  ].filter((index) => index > 0);

  const paragraphs = [];
  let start = 0;

  markerIndexes.forEach((index) => {
    paragraphs.push(normalizeText(cleanedIntroLines.slice(start, index).join(" ")));
    start = index;
  });

  if (start < cleanedIntroLines.length) {
    paragraphs.push(normalizeText(cleanedIntroLines.slice(start).join(" ")));
  }

  return {
    companyInfo,
    paragraphs: paragraphs.filter(Boolean),
    signatureLines: signatureLines.filter(Boolean),
  };
}

function renderIntroPage(text) {
  const lines = text.split("\n").map((line) => line.trim());
  const { companyInfo, paragraphs, signatureLines } = extractIntroPageContent(lines);

  const wrapper = make("div", "intro-layout");
  const main = make("div", "intro-letter");
  const side = make("aside", "intro-sidebar");

  const letterCard = make("div", "intro-letter-card");
  letterCard.append(make("p", "intro-kicker", "Thư ngỏ từ Ban Giám đốc"));

  const introHeading = make("h4", "intro-heading", "Đồng hành cùng chất lượng thực phẩm an toàn");
  letterCard.append(introHeading);

  const quote = make("blockquote", "intro-quote");
  quote.textContent = "“Sức khỏe của Người Lao động là sức khỏe của chúng tôi.”";
  letterCard.append(quote);

  paragraphs.forEach((paragraph) => {
    letterCard.append(make("p", "page-paragraph", paragraph));
  });

  if (signatureLines.length) {
    const signature = make("div", "intro-signature");
    signatureLines.forEach((line) => {
      signature.append(make("p", "intro-signature-line", line));
    });
    letterCard.append(signature);
  }

  main.append(letterCard);

  if (companyInfo) {
    const infoCard = renderCompanyInfoCard(companyInfo.pairs);
    infoCard.classList.add("company-info-card-featured");
    side.append(infoCard);
  }

  wrapper.append(main);
  if (companyInfo) wrapper.append(side);

  return wrapper;
}

function renderStrategyPage() {
  const wrapper = make("div", "strategy-layout");

  const intro = make("div", "strategy-intro");
  intro.append(make("p", "strategy-section-kicker", "Định hướng phát triển"));
  intro.append(make("h4", "strategy-section-heading", "Tôn chỉ hoạt động, sứ mệnh và tầm nhìn"));
  intro.append(
    make(
      "p",
      "strategy-section-lead",
      "Ba nền tảng này thể hiện cách Hoàng Gia xây dựng chất lượng dịch vụ, định hướng vận hành và phát triển bền vững cùng khách hàng.",
    ),
  );

  const mediaItems = sectionMedia["su-menh-tam-nhin"] ?? [];
  const pillars = [
    {
      title: "Giá trị cốt lõi",
      image: mediaItems[0],
      quote:
        "Cung cấp thực phẩm bằng cái tâm, khách hàng là trọng tâm, chỉ có chất lượng dịch vụ mới là khác biệt.",
      summary:
        "Hoàng Gia đặt khách hàng ở vị trí trung tâm để xây dựng uy tín, tạo nên quan hệ hợp tác bền vững và giữ vững sự khác biệt bằng chất lượng cùng sự tận tâm.",
    },
    {
      title: "Sứ mệnh",
      image: mediaItems[1],
      quote:
        "Sức khỏe của Người Lao động là sức khỏe của chúng tôi, mang đến cho con người nguồn thực phẩm tốt có giá trị cao về dinh dưỡng và chất lượng bằng sự trân trọng sâu sắc và trách nhiệm.",
      summary:
        "Sứ mệnh là kim chỉ nam cho mọi hoạt động, từ lựa chọn sản phẩm, kiểm soát chất lượng đến cách doanh nghiệp đồng hành với khách hàng và cộng đồng.",
    },
    {
      title: "Tầm nhìn",
      image: mediaItems[2],
      quote:
        "Trở thành doanh nghiệp hàng đầu tại Việt Nam trong việc chế biến và cung cấp thực phẩm đáp ứng mọi nhu cầu cho tất cả các khách hàng và bếp ăn công nghiệp tại Việt Nam.",
      summary:
        "Doanh nghiệp hướng đến phát triển bền vững, nâng cao năng lực cung ứng và khẳng định vị thế hàng đầu trong lĩnh vực thực phẩm tại Việt Nam.",
    },
  ];

  const grid = make("div", "strategy-pillars");
  pillars.forEach((pillar) => {
    const card = make("article", "strategy-pillar");
    if (pillar.image) {
      const image = make("img", "strategy-pillar-image");
      image.src = pillar.image.src;
      image.alt = pillar.image.alt;
      image.loading = "lazy";
      card.append(image);
    }

    const body = make("div", "strategy-pillar-body");
    body.append(make("p", "strategy-pillar-title", pillar.title));
    body.append(make("p", "strategy-pillar-quote", pillar.quote));
    body.append(make("p", "strategy-pillar-summary", pillar.summary));
    card.append(body);
    grid.append(card);
  });

  wrapper.append(intro);
  wrapper.append(grid);

  return wrapper;
}

function renderOrganizationPage(text) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !/^\d+$/.test(line));

  const orgStart = lines.findIndex((line) => line === "GIÁM ĐỐC");
  const fieldStart = lines.findIndex((line) => line === "LĨNH VỰC HOẠT ĐỘNG");

  const introLines =
    orgStart > -1
      ? lines.slice(0, orgStart).filter((line) => line !== "SƠ ĐỔ TỔ CHỨC LĨNH VỰC KINH DOANH")
      : lines;

  const introText = normalizeText(introLines.join(" "));
  const highlightText =
    "đảm bảo cung ứng liên tục và ổn định, đáp ứng các tiêu chuẩn khắt khe về an toàn vệ sinh thực phẩm";
  const fields =
    fieldStart > -1
      ? lines.slice(fieldStart + 1).filter((line) => line && line !== "LĨNH VỰC HOẠT ĐỘNG")
      : [];

  const wrapper = make("div", "organization-layout");

  const chartSection = make("section", "organization-block");
  chartSection.append(make("p", "organization-kicker", "Sơ đồ tổ chức"));

  const chart = make("div", "org-chart");
  const top = make("div", "org-chart-top");
  top.append(make("div", "org-node org-node-primary", "GIÁM ĐỐC"));
  top.append(make("div", "org-chart-connector org-chart-connector-vertical"));
  top.append(make("div", "org-node org-node-primary", "PHÓ GIÁM ĐỐC"));

  const branches = make("div", "org-branches");
  [
    "TRƯỞNG PHÒNG MUA HÀNG",
    "KẾ TOÁN TRƯỞNG",
    "TRƯỞNG PHÒNG KINH DOANH",
    "PHÒNG QUẢN LÝ CHẤT LƯỢNG",
  ].forEach((label) => {
    const branch = make("div", "org-branch");
    branch.append(make("div", "org-branch-connector"));
    branch.append(make("div", "org-node org-node-secondary", label));
    branches.append(branch);
  });

  chart.append(top);
  chart.append(make("div", "org-chart-connector org-chart-connector-vertical org-chart-connector-mid"));
  chart.append(branches);

  chartSection.append(chart);

  wrapper.append(chartSection);

  if (fields.length || introText) {
    const sectors = make("section", "organization-sectors organization-block");
    sectors.append(make("p", "organization-kicker", "Lĩnh vực kinh doanh"));
    const businessLayout = make("div", "organization-business-layout");

    const businessContent = make("div", "organization-business-content");
    if (introText) {
      const lead = make("p", "organization-lead");
      const highlightIndex = introText.indexOf(highlightText);

      if (highlightIndex > -1) {
        lead.append(document.createTextNode(introText.slice(0, highlightIndex)));
        lead.append(make("strong", "organization-highlight", highlightText));
        lead.append(
          document.createTextNode(introText.slice(highlightIndex + highlightText.length)),
        );
      } else {
        lead.textContent = introText;
      }

      businessContent.append(lead);
    }

    const fieldCards = make("div", "organization-field-cards");
    const fieldImages = [
      "assets/pdf-images-clean/linhvuckinhdoanh1.jpeg",
      "assets/pdf-images-clean/linhvuckinhdoanh2.jpeg",
      "assets/pdf-images-clean/linhvuckinhdoanh3.jpeg",
    ];

    fields.slice(0, 3).forEach((field, index) => {
      const card = make("article", "organization-field-card");
      const image = make("img", "organization-field-image");
      image.src = fieldImages[index];
      image.alt = `Hình ảnh lĩnh vực ${field.toLowerCase()} của Hoàng Gia Foods`;
      image.loading = "lazy";

      const title = make("h4", "organization-field-title", field);

      card.append(image);
      card.append(title);
      fieldCards.append(card);
    });

    businessLayout.append(businessContent);
    businessLayout.append(fieldCards);
    sectors.append(businessLayout);
    wrapper.append(sectors);
  }

  return wrapper;
}

function renderLegalDocsSection() {
  const wrapper = make("div", "legal-docs-layout");

  const content = make("div", "legal-docs-content");
  content.append(make("p", "legal-docs-kicker", "Tiêu chuẩn và chứng nhận"));
  content.append(make("h3", "legal-docs-heading", "Giấy tờ pháp lý và chứng nhận HACCP"));
  legalDocsData.sections.forEach((section) => {
    const block = make("div", "legal-docs-text-block");
    block.append(make("h4", "legal-docs-subheading", section.title));
    block.append(make("p", "legal-docs-paragraph", section.text));
    content.append(block);
  });

  const gallery = make("div", "legal-docs-gallery");
  legalDocsData.documents.forEach((src, index) => {
    const card = make("figure", "legal-docs-card");
    const image = make("img", "legal-docs-image");
    image.src = src;
    image.alt = `Giấy tờ pháp lý ${index + 1} của Hoàng Gia Foods`;
    image.loading = "lazy";
    card.append(image);
    gallery.append(card);
  });

  wrapper.append(content);
  wrapper.append(gallery);

  return wrapper;
}

function renderStorageProcessPage() {
  const storageItems = [
    {
      label: "01",
      title: "Thực phẩm khô đóng gói",
      image: "assets/pdf-images-clean/quy-trinh-10.jpeg",
      text: "Tất cả thực phẩm khô phải được bảo quản trong bao bì hoặc đóng gói cẩn thận, có tem dán nhãn ghi chú ngày đóng gói và thời hạn sử dụng. Kho chứa phải thoáng mát, sạch sẽ, có kệ hoặc pallet xếp hàng cách mặt đất và mặt tường tối thiểu 25cm.",
      highlight: "Kho khô, sạch, phân khu rõ ràng",
    },
    {
      label: "02",
      title: "Sản phẩm thịt, cá, gà",
      image: "assets/pdf-images-clean/quy-trinh-11.jpeg",
      text: "Khi vận chuyển phải được giữ lạnh ở nhiệt độ cần thiết và lưu vào kho đông lạnh. Trước khi bảo quản, hàng hóa cần được phân loại, đóng gói hoặc dùng dụng cụ chuyên biệt để ngăn cách đúng quy định và đảm bảo vệ sinh ATTP.",
      highlight: "Giữ lạnh trong vận chuyển",
    },
    {
      label: "03",
      title: "Thực phẩm rau củ quả",
      image: "assets/pdf-images-clean/quy-trinh-12.jpeg",
      text: "Rau củ quả phải được sơ chế làm sạch dị vật, bùn đất và các cọng rau úa hỏng, sau đó để nơi khô ráo, thoáng mát. Hàng hóa được xếp ngay ngắn vào dụng cụ chuyên dụng để tránh ứ nước và giữ độ khô thoáng trong suốt quá trình bảo quản.",
      highlight: "Sơ chế sạch, khô thoáng",
    },
    {
      label: "04",
      title: "Hàng hóa đông lạnh nhập khẩu",
      image: "assets/pdf-images-clean/quy-trinh-13.jpeg",
      text: "Các nhóm hàng đông lạnh nhập khẩu như thịt, cá, gà bắt buộc phải được bảo quản trong kho đông. Nhiệt độ bảo quản là -20°C đối với các loại cá và -18°C đối với các loại thịt.",
      highlight: "Kho đông -20°C / -18°C",
    },
  ];

  const wrapper = make("div", "storage-process");
  const intro = make("div", "storage-process-intro");
  intro.append(make("p", "storage-process-kicker", "Quy trình bảo quản"));
  intro.append(make("h3", "storage-process-heading", "Bảo quản thực phẩm tại Hoàng Gia"));
  intro.append(
    make(
      "p",
      "storage-process-lead",
      "Mỗi nhóm thực phẩm được bảo quản theo điều kiện riêng về bao bì, nhiệt độ, dụng cụ chứa và khu vực lưu kho nhằm đảm bảo chất lượng, vệ sinh an toàn thực phẩm trong suốt quá trình vận hành.",
    ),
  );

  const grid = make("div", "storage-process-grid");
  storageItems.forEach((item) => {
    const card = make("article", "storage-card");
    const image = make("img", "storage-card-image");
    image.src = item.image;
    image.alt = `Hình ảnh bảo quản ${item.title.toLowerCase()} tại Hoàng Gia`;
    image.loading = "lazy";

    card.append(image);
    const head = make("div", "storage-card-head");
    head.append(make("span", "storage-card-label", item.label));
    head.append(make("h4", "storage-card-title", item.title));
    card.append(head);
    card.append(make("p", "storage-card-text", item.text));
    card.append(make("p", "storage-card-highlight", item.highlight));
    grid.append(card);
  });

  wrapper.append(intro);
  wrapper.append(grid);

  return wrapper;
}

function renderImportProcessPage() {
  const steps = [
    {
      code: "B01",
      title: "Phân công người chuyên trách nhập thực phẩm",
      text: "Người nhập thực phẩm là người chuyên trách do doanh nghiệp chỉ định, được đào tạo, tập huấn và có kiến thức cơ bản về thực phẩm cũng như vệ sinh an toàn thực phẩm.",
    },
    {
      code: "B02",
      title: "Kiểm tra hồ sơ nhà cung ứng",
      text: "Nhà cung ứng thứ cấp, nhà sản xuất phải xuất trình đầy đủ hóa đơn, chứng từ, nguồn gốc, xuất xứ của hàng hóa. Sau khi nhập hàng phải vào sổ sách đầy đủ và có ký xác nhận của hai bên.",
    },
    {
      code: "B03",
      title: "Kiểm tra chất lượng hàng hóa",
      text: "Chỉ nhập hàng đủ tiêu chuẩn, kiên quyết trả về hàng hóa không đảm bảo chất lượng, ôi thiu, dịch bệnh hoặc quá hạn sử dụng.",
    },
    {
      code: "B04",
      title: "Nhập hàng theo tiêu chuẩn",
      text: "Hàng được nhập sau khi được kiểm tra kỹ về mặt giấy tờ, đảm bảo đầy đủ hồ sơ theo quy định đối với từng loại mặt hàng và đáp ứng các tiêu chí nhập hàng riêng biệt theo tiêu chuẩn của Hoàng Gia.",
    },
    {
      code: "B05",
      title: "Bảo quản thực phẩm trong kho",
      text: "Thực phẩm sau khi nhập phải được sơ chế, rửa sạch và bảo quản theo quy trình. Kho bảo quản phải khô ráo, ngăn nắp, sạch sẽ, thoáng mát và có các ngăn riêng biệt cho từng loại thực phẩm.",
    },
  ];

  const criteria = [
    {
      type: "Thịt tươi",
      image: "assets/pdf-images-clean/quy-trinh-01.jpeg",
      text: "Thịt tươi có màng ngoài khô, không bị nhớt, mùi và màu sắc bình thường, khối thịt rắn chắc, có độ đàn hồi cao. Phần mỡ màu trong hoặc màu đặc trưng của từng loại thịt, bì không có lấm chấm xuất huyết màu đỏ tím, tủy xương trong, không có mùi ôi.",
    },
    {
      type: "Cá và các loại thủy hải sản",
      image: "assets/pdf-images-clean/quy-trinh-02.jpeg",
      text: "Cá đang sống hoặc đã chết nhưng phải tươi: thân cá co cứng, mắt cá trong suốt, giác mạc đàn hồi, miệng ngậm cứng, mang màu đỏ tươi, vẩy tươi óng ánh dính chặt vào thân, thịt rắn chắc và đàn hồi. Các loại thủy hải sản khác phải tươi, màu sắc bình thường và không có mùi ươn.",
    },
    {
      type: "Trứng",
      image: "assets/pdf-images-clean/quy-trinh-03.jpeg",
      text: "Vỏ trứng màu sáng, không có vệt xám đen, không bị dập và có màu hồng trong suốt khi soi qua ánh sáng; có giấy kiểm dịch của cơ quan vệ sinh dịch tễ địa phương nếu có.",
    },
    {
      type: "Rau, củ, quả, nông sản",
      image: "assets/pdf-images-clean/quy-trinh-04.jpeg",
      text: "Chọn rau quả tươi, không bị dập nát, héo, úa hoặc sâu bệnh. Không nhập các loại rau quả có màu sắc khác thường, mùi lạ hoặc mùi thuốc sâu. Nếu phát hiện vấn đề phải báo cáo người có trách nhiệm để xử lý hoặc trả lại nhà cung cấp.",
    },
    {
      type: "Thực phẩm khô và hàng nhập khẩu đóng gói",
      image: "assets/pdf-images-clean/quy-trinh-05.jpeg",
      text: "Thực phẩm đóng hộp, đóng gói phải ghi đầy đủ nhãn mác, tên sản phẩm, trọng lượng, thành phần, cách bảo quản và sử dụng, nơi sản xuất chế biến. Sản phẩm phải do nhà sản xuất được phép của cơ quan y tế, được đăng ký chất lượng và ghi rõ thời hạn sử dụng.",
    },
  ];

  const wrapper = make("div", "import-process");
  const intro = make("div", "import-process-intro");
  intro.append(make("p", "import-process-kicker", "Quy trình nhập thực phẩm"));
  intro.append(make("h3", "import-process-heading", "Kiểm soát đầu vào từ chứng từ đến chất lượng"));
  intro.append(
    make(
      "p",
      "import-process-lead",
      "Mỗi lô hàng khi nhập về Hoàng Gia đều được kiểm tra theo từng bước: người phụ trách, hồ sơ nguồn gốc, chất lượng thực phẩm và điều kiện bảo quản sau nhập kho.",
    ),
  );

  const stepsGrid = make("div", "import-steps");
  steps.forEach((step) => {
    const card = make("article", "import-step-card");
    card.append(make("span", "import-step-code", `${step.code}.`));
    card.append(make("h4", "import-step-title", step.title));
    card.append(make("p", "import-step-text", step.text));
    stepsGrid.append(card);
  });

  const criteriaSection = make("div", "import-criteria");
  criteriaSection.append(make("p", "import-process-kicker", "Tiêu chí nhập hàng"));
  criteriaSection.append(make("h3", "import-process-heading", "Tại Công ty Hoàng Gia"));

  const criteriaList = make("div", "import-criteria-list");
  criteria.forEach((item) => {
    const card = make("article", "import-criteria-card");
    const image = make("img", "import-criteria-image");
    image.src = item.image;
    image.alt = `Hình ảnh tiêu chí nhập hàng ${item.type.toLowerCase()}`;
    image.loading = "lazy";

    const body = make("div", "import-criteria-body");
    body.append(make("h4", "import-criteria-title", `Loại hàng: ${item.type}`));
    body.append(make("p", "import-criteria-text", item.text));

    card.append(image);
    card.append(body);
    criteriaList.append(card);
  });

  criteriaSection.append(criteriaList);
  wrapper.append(intro);
  wrapper.append(stepsGrid);
  wrapper.append(criteriaSection);

  return wrapper;
}

function renderProductsSection() {
  const products = [
    {
      name: "Rau củ quả tươi",
      image: "assets/pdf-images-clean/san-pham-19.jpeg",
    },
    {
      name: "Thịt gia súc",
      image: "assets/pdf-images-clean/san-pham-02.jpeg",
    },
    {
      name: "Các loại sữa",
      image: "assets/pdf-images-clean/san-pham-07.jpeg",
    },
    {
      name: "Ngũ cốc",
      image: "assets/pdf-images-clean/san-pham-09.jpeg",
    },
    {
      name: "Gia cầm tươi",
      image: "assets/pdf-images-clean/san-pham-18.jpeg",
    },
    {
      name: "Thủy, hải sản tươi sống",
      image: "assets/pdf-images-clean/san-pham-20.jpeg",
    },
    {
      name: "Thực phẩm bao gói sẵn",
      image: "assets/pdf-images-clean/san-pham-15.jpeg",
    },
    {
      name: "Thịt gia súc, gia cầm đông lạnh",
      image: "assets/pdf-images-clean/san-pham-11.jpeg",
    },
    {
      name: "Gạo",
      image: "assets/pdf-images-clean/san-pham-22.jpeg",
    },
    {
      name: "Bánh tráng miệng",
      image: "assets/pdf-images-clean/san-pham-05.jpeg",
    },
    {
      name: "Thủy hải sản đông lạnh nhập khẩu",
      image: "assets/pdf-images-clean/san-pham-16.jpeg",
    },
  ];

  const wrapper = make("div", "products-layout");
  const intro = make("div", "products-intro");
  intro.append(make("p", "products-kicker", "Danh mục sản phẩm"));
  intro.append(make("h3", "products-heading", "Các sản phẩm chính của Hoàng Gia Foods"));
  intro.append(
    make(
      "p",
      "products-lead",
      "Danh mục sản phẩm được xây dựng để đáp ứng nhu cầu đa dạng của bếp ăn công nghiệp, trường học, nhà hàng và các đơn vị sản xuất.",
    ),
  );

  const grid = make("div", "products-grid");
  products.forEach((product) => {
    const card = make("article", product.featured ? "product-card product-card-featured" : "product-card");
    const image = make("img", "product-card-image");
    image.src = product.image;
    image.alt = `Hình ảnh ${product.name.toLowerCase()} của Hoàng Gia Foods`;
    image.loading = "lazy";

    card.append(image);
    card.append(make("h4", "product-card-title", product.name));
    grid.append(card);
  });

  wrapper.append(intro);
  wrapper.append(grid);

  return wrapper;
}

function renderSuppliersSection() {
  const wrapper = make("div", "suppliers-layout");
  const intro = make("div", "suppliers-intro");
  intro.append(make("p", "suppliers-kicker", "Các nhà cung cấp mục tiêu"));
  intro.append(make("h3", "suppliers-heading", "Nhà cung cấp chính"));
  intro.append(
    make(
      "p",
      "suppliers-lead",
      "Hoàng Gia Foods hợp tác với các nhà cung cấp đầu vào uy tín nhằm đảm bảo nguồn nguyên liệu chất lượng cao, ổn định và đáp ứng các tiêu chuẩn nghiêm ngặt về an toàn thực phẩm.",
    ),
  );

  const grid = make("div", "suppliers-grid");

  function openSupplierDetail(supplier) {
    rememberProfileScroll("#doi-tac");
    window.location.href = `partner-detail.html?type=supplier&id=${encodeURIComponent(supplier.id)}`;
  }

  mainSuppliers.forEach((supplier) => {
    const card = make("article", "supplier-card supplier-card-clickable");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Chi tiết ${supplier.name}`);
    const media = make("div", "supplier-media");
    const mainImage = make("img", "supplier-image-main");
    mainImage.src = supplier.images[0];
    mainImage.alt = `Hình ảnh ${supplier.name}`;
    mainImage.loading = "lazy";
    media.append(mainImage);

    const thumbs = make("div", "supplier-thumbs");
    supplier.images.slice(1).forEach((src, index) => {
      const image = make("img", "supplier-thumb");
      image.src = src;
      image.alt = `Hình ảnh ${supplier.name} ${index + 2}`;
      image.loading = "lazy";
      thumbs.append(image);
    });
    media.append(thumbs);

    const body = make("div", "supplier-body");
    body.append(make("span", "supplier-number", `${supplier.number}.`));
    body.append(make("h4", "supplier-name", supplier.name));
    body.append(make("p", "supplier-summary", supplier.summary));
    body.append(make("p", "supplier-details", supplier.details));
    const detailButton = make("button", "supplier-detail-link", "Chi tiết");
    detailButton.type = "button";
    body.append(detailButton);

    card.append(media);
    card.append(body);
    const handleOpen = () => openSupplierDetail(supplier);
    card.addEventListener("click", handleOpen);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    });
    detailButton.addEventListener("click", (event) => {
      event.stopPropagation();
      handleOpen();
    });

    grid.append(card);
  });

  wrapper.append(intro);
  wrapper.append(grid);

  return wrapper;
}

function renderWarehouseSection() {
  const images = Array.from({ length: 11 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      src: `assets/pdf-images-clean/nha-may-kho-${number}.jpeg`,
      label: `Hình ảnh ${index + 1}`,
    };
  });

  const wrapper = make("div", "warehouse-layout");
  const intro = make("div", "warehouse-intro");
  intro.append(make("p", "warehouse-kicker", "Nhà máy và kho"));
  intro.append(make("h3", "warehouse-heading", "Không gian vận hành và lưu kho"));
  intro.append(
    make(
      "p",
      "warehouse-lead",
      "Hình ảnh nhà máy, kho và khu vực vận hành thể hiện năng lực lưu trữ, bảo quản và hậu cần của Hoàng Gia Foods trong quá trình cung ứng thực phẩm.",
    ),
  );

  const grid = make("div", "warehouse-grid");
  images.forEach((item, index) => {
    const figure = make("figure", index === 0 ? "warehouse-card warehouse-card-featured" : "warehouse-card");
    const image = make("img", "warehouse-image");
    image.src = item.src;
    image.alt = `${item.label} nhà máy và kho Hoàng Gia Foods`;
    image.loading = "lazy";

    figure.append(image);
    grid.append(figure);
  });

  wrapper.append(intro);
  wrapper.append(grid);

  return wrapper;
}

function renderOtherPartnersSection() {
  const wrapper = make("div", "partners-layout");
  const grid = make("div", "partners-grid");
  otherPartners.forEach((partner) => {
    const card = make("article", "partner-card partner-card-clickable");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Chi tiết ${partner.name}`);

    const body = make("div", "partner-body");
    body.append(make("h4", "partner-name", partner.name));
    body.append(make("p", "partner-address", partner.category));
    const detailButton = make("button", "partner-detail-link", "Chi tiết");
    detailButton.type = "button";
    body.append(detailButton);

    card.append(body);
    const handleOpen = () => {
      rememberProfileScroll("#khach-hang");
      window.location.href = `partner-detail.html?type=partner&id=${encodeURIComponent(partner.id)}`;
    };
    card.addEventListener("click", handleOpen);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    });
    detailButton.addEventListener("click", (event) => {
      event.stopPropagation();
      handleOpen();
    });
    grid.append(card);
  });

  wrapper.append(grid);

  return wrapper;
}

function isUpperHeading(line) {
  const hasLetters = /[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯẠ-ỹ]/.test(line);
  return hasLetters && line.length <= 72 && line === line.toUpperCase();
}

function formatPageText(text) {
  const wrapper = make("div", "page-text");
  const lines = text.split("\n").map((line) => line.trim());
  const companyInfo = extractCompanyInfo(lines);
  const filteredLines = companyInfo
    ? [...lines.slice(0, companyInfo.start), ...lines.slice(companyInfo.end)]
    : lines;
  let buffer = [];

  function flushParagraph() {
    if (!buffer.length) return;
    wrapper.append(make("p", "page-paragraph", normalizeText(buffer.join(" "))));
    buffer = [];
  }

  filteredLines.forEach((line) => {
    if (!line || /^\d+$/.test(line)) {
      flushParagraph();
      return;
    }

    if (/^B\d+\.$/.test(line)) {
      flushParagraph();
      wrapper.append(make("span", "page-chip", line));
      return;
    }

    if (/^(LOẠI HÀNG:|Tiêu Chí Nhập Hàng:)/i.test(line)) {
      flushParagraph();
      wrapper.append(make("p", "page-emphasis", line));
      return;
    }

    if (isUpperHeading(line)) {
      flushParagraph();
      wrapper.append(make("h4", "page-subheading", line));
      return;
    }

    buffer.push(line);
  });

  flushParagraph();

  if (companyInfo) {
    wrapper.append(renderCompanyInfoCard(companyInfo.pairs));
  }

  return wrapper;
}

function getPage(pageNumber) {
  return data.pages.find((page) => page.page === pageNumber);
}

function renderSectionMedia(sectionId) {
  const items = sectionMedia[sectionId];
  if (!items || !items.length) return null;

  if (sectionId === "gioi-thieu") {
    const backgroundItem = items.find((item) => item.variant === "background") ?? items[0];
    const cornerItem = items.find((item) => item.variant === "corner") ?? items[1];

    const spotlight = make("div", "section-media section-media-spotlight");

    const backgroundFigure = make("figure", "section-media-stage");
    const backgroundImage = make("img", "section-media-stage-image");
    backgroundImage.src = backgroundItem.src;
    backgroundImage.alt = backgroundItem.alt;
    backgroundImage.loading = "lazy";
    backgroundFigure.append(backgroundImage);
    backgroundFigure.append(
      make("figcaption", "section-media-stage-caption", backgroundItem.caption),
    );

    spotlight.append(backgroundFigure);

    if (cornerItem) {
      const cornerFigure = make("figure", "section-media-card section-media-corner");
      const cornerImage = make("img", "section-media-image");
      cornerImage.src = cornerItem.src;
      cornerImage.alt = cornerItem.alt;
      cornerImage.loading = "lazy";
      cornerFigure.append(cornerImage);
      cornerFigure.append(make("figcaption", "section-media-caption", cornerItem.caption));
      spotlight.append(cornerFigure);
    }

    return spotlight;
  }

  if (sectionId === "su-menh-tam-nhin") return null;

  const gallery = make("div", "section-media");

  items.forEach((item) => {
    const figure = make("figure", "section-media-card");
    const image = make("img", "section-media-image");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";

    figure.append(image);
    figure.append(make("figcaption", "section-media-caption", item.caption));
    gallery.append(figure);
  });

  return gallery;
}

function renderNav() {
  const nav = document.getElementById("main-nav");
  navItems.forEach((item) => {
    const link = make("a", "", item.label);
    link.href = `#${item.id}`;
    nav.append(link);
  });
}

function renderSections() {
  const container = document.getElementById("sections");

  flowSections.forEach((sectionData) => {
    const section = make("section", "doc-section");
    section.id = sectionData.id;

    const header = make("div", "doc-section-header");
    header.append(make("p", "eyebrow", sectionData.eyebrow));
    header.append(make("h2", "", sectionData.title));
    header.append(make("p", "doc-intro", sectionData.intro));
    section.append(header);

    const media = renderSectionMedia(sectionData.id);
    if (media) {
      section.append(media);
    }

    if (sectionData.id === "chung-nhan") {
      const article = make("article", "page-card page-card-legal");
      article.append(renderLegalDocsSection());
      section.append(article);
      container.append(section);
      return;
    }

    if (sectionData.id === "quy-trinh") {
      const importArticle = make("article", "page-card page-card-import");
      importArticle.append(renderImportProcessPage());
      section.append(importArticle);

      const storageArticle = make("article", "page-card page-card-storage");
      storageArticle.append(renderStorageProcessPage());
      section.append(storageArticle);

      container.append(section);
      return;
    }

    if (sectionData.id === "san-pham") {
      const article = make("article", "page-card page-card-products");
      article.append(renderProductsSection());
      section.append(article);
      container.append(section);
      return;
    }

    if (sectionData.id === "doi-tac") {
      const article = make("article", "page-card page-card-suppliers");
      article.append(renderSuppliersSection());
      section.append(article);
      container.append(section);
      return;
    }

    if (sectionData.id === "nha-may-kho") {
      const article = make("article", "page-card page-card-warehouse");
      article.append(renderWarehouseSection());
      section.append(article);
      container.append(section);
      return;
    }

    if (sectionData.id === "khach-hang") {
      const article = make("article", "page-card page-card-partners");
      article.append(renderOtherPartnersSection());
      section.append(article);
      container.append(section);
      return;
    }

    sectionData.pages.forEach((pageNumber) => {
      const page = getPage(pageNumber);
      if (!page) return;

      const article = make("article", "page-card");
      const shouldHidePageTitle = sectionData.id === "su-menh-tam-nhin" && page.page === 3;
      if (!shouldHidePageTitle) {
        article.append(make("h3", "page-title", page.title));
      }

      if (page.note) {
        article.append(make("p", "page-note", page.note));
      }

      if (sectionData.id === "gioi-thieu" && page.page === 2) {
        article.classList.add("page-card-intro");
        article.append(renderIntroPage(page.text));
      } else if (sectionData.id === "su-menh-tam-nhin" && page.page === 3) {
        article.classList.add("page-card-strategy");
        article.append(renderStrategyPage());
      } else if (sectionData.id === "to-chuc-nang-luc" && page.page === 4) {
        article.classList.add("page-card-organization");
        article.append(renderOrganizationPage(page.text));
      } else {
        article.append(formatPageText(page.text));
      }
      section.append(article);
    });

    container.append(section);
  });
}

function setActiveNav() {
  const links = [...document.querySelectorAll(".main-nav a")];
  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0.05 },
  );

  sections.forEach((section) => observer.observe(section));
}

function restoreProfileScroll() {
  const params = new URLSearchParams(window.location.search);
  const shouldRestore = params.get("restore") === "1";
  if (!shouldRestore) return;

  const saved = sessionStorage.getItem("xanhHoangGiaReturnPosition");
  const target = params.get("target");

  sessionStorage.removeItem("xanhHoangGiaReturnPosition");
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  requestAnimationFrame(() => {
    try {
      const { scrollY, hash } = saved ? JSON.parse(saved) : {};
      if (Number.isFinite(scrollY)) {
        window.scrollTo(0, scrollY);
      } else if (hash) {
        document.querySelector(hash)?.scrollIntoView({ block: "start" });
      } else if (target) {
        document.getElementById(target)?.scrollIntoView({ block: "start" });
      }
    } catch {
      const fallback = document.getElementById(target || "doi-tac");
      fallback?.scrollIntoView({ block: "start" });
    }

    window.history.replaceState(null, "", `${window.location.pathname}${target ? `#${target}` : ""}`);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  });
}

function init() {
  renderNav();
  renderSections();
  setActiveNav();
  restoreProfileScroll();
}

init();
