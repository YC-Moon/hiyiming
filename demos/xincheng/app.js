const app = document.getElementById("app");
const toastEl = document.getElementById("toast");

const car = (name) => `./assets/cars/${name}`;
const ref = (name) => `./assets/ref/${name}`;
const services = ["附检测报告", "支持物流", "手续齐全", "可开发票"];

const bannerSlides = [
  {
    title: "专业的「运营」二手车平台",
    desc: "整包车源 · 整包打包 · 高效交易 · 平台保障",
    tags: ["整包车源", "品质保障", "手续齐全"],
    image: car("ev450-white.png"),
  },
  {
    title: "企业采购高效撮合",
    desc: "收藏比选 · 购物车报价 · 商务协同",
    tags: ["批量采购", "报价确认", "物流支持"],
    image: car("a6l-black.png"),
  },
  {
    title: "标准化车况分级",
    desc: "检测报告 · 等级清晰 · 价格透明",
    tags: ["车况标签", "检测认证", "可开发票"],
    image: car("ei5-white.png"),
  },
];

const filterOptions = {
  city: ["全部城市", "上海", "西安", "成都", "武汉", "北京"],
  brand: ["全部品牌", "吉利汽车", "奥迪", "荣威", "本田", "特斯拉"],
  price: ["全部价格", "10万以下", "10-30万", "30-60万", "60万以上"],
  age: ["全部", "3年以内", "5年以内", "3万公里以内", "5万公里以内", "10万公里以内"],
};

const filterLabels = {
  city: "城市",
  brand: "品牌",
  price: "价格",
  age: "车龄/里程",
};

const merchants = {
  jingju: { name: "京桔", logo: "京", tone: "orange" },
  fengju: { name: "丰桔", logo: "丰", tone: "orange" },
  yadi: { name: "亚滴", logo: "亚", tone: "blue" },
  shengdi: { name: "车胜惠迪", logo: "S", tone: "gray" },
};

const bundleProducts = [
  {
    id: "b1",
    type: "bundle",
    merchantId: "jingju",
    name: "吉利汽车 帝豪新能源 2018款 EV450 进取型",
    city: "西安",
    totalCount: 6,
    cartUnits: 3,
    price: 30.4,
    image: car("ev450-white.png"),
    hero: car("detail-hero.png"),
    qualities: [
      { fresh: "99新", grade: "S", count: "1台" },
      { fresh: "95新", grade: "A", count: "3台" },
      { fresh: "85新", grade: "C", count: "2台" },
    ],
    cars: [
      vehicle("b1-1", "吉利汽车 帝豪新能源 2018款 EV450 进取型", "西安", "白色", "3.8万公里", "2018年上牌", "99新", "S", "9.98", car("ev450-white.png"), "外观瑕疵"),
      vehicle("b1-2", "吉利汽车 帝豪新能源 2018款 EV450 进取型", "西安", "白色", "4.5万公里", "2018年上牌", "95新", "A", "10.20", car("ev450-single.png"), "内饰瑕疵"),
      vehicle("b1-3", "吉利汽车 帝豪新能源 2018款 EV450 进取型", "西安", "白色", "5.6万公里", "2018年上牌", "85新", "C", "10.22", car("ev450-white.png"), "后保喷漆"),
      vehicle("b1-4", "2018款 宝马5系新能源 改款", "西安", "白色", "4.8万公里", "2018年上牌", "95新", "B", "9.60", car("ev450-single.png"), "轻微划痕"),
      vehicle("b1-5", "大众 途观L 330TSI 两驱舒适版", "西安", "白色", "6.2万公里", "2018年上牌", "85新", "B", "8.80", car("ev450-white.png"), "外观补漆"),
    ],
  },
  {
    id: "b2",
    type: "bundle",
    merchantId: "fengju",
    name: "奥迪A6L 2020款 40 TFSI 豪华致雅型",
    city: "上海",
    totalCount: 4,
    cartUnits: 3,
    price: 58.8,
    image: car("a6l-black.png"),
    qualities: [
      { fresh: "95新", grade: "A", count: "2台" },
      { fresh: "85新", grade: "B", count: "2台" },
    ],
    cars: [
      vehicle("b2-1", "奥迪A6L 2020款 40 TFSI 豪华致雅型", "上海", "黑色", "3.2万公里", "2020年上牌", "95新", "A", "18.80", car("a6l-black.png"), "精品车况"),
      vehicle("b2-2", "奥迪A6L 2020款 40 TFSI 豪华致雅型", "上海", "黑色", "4.2万公里", "2020年上牌", "85新", "B", "17.20", car("a6l-black.png"), "外观瑕疵"),
      vehicle("b2-3", "奥迪A6L 2020款 40 TFSI 豪华致雅型", "上海", "黑色", "6.0万公里", "2020年上牌", "8新", "D", "15.10", car("a6l-black.png"), "局部钣喷"),
    ],
  },
  {
    id: "b3",
    type: "bundle",
    merchantId: "yadi",
    name: "荣威Ei5 2021款 舒适版",
    city: "成都",
    totalCount: 3,
    cartUnits: 2,
    price: 22.9,
    image: car("ei5-white.png"),
    qualities: [
      { fresh: "85新", grade: "C", count: "2台" },
      { fresh: "8新", grade: "D", count: "1台" },
    ],
    cars: [
      vehicle("b3-1", "荣威Ei5 2021款 舒适版", "成都", "白色", "5.6万公里", "2021年上牌", "85新", "C", "7.70", car("ei5-white.png"), "内饰磨损"),
      vehicle("b3-2", "荣威Ei5 2021款 舒适版", "成都", "白色", "6.1万公里", "2021年上牌", "8新", "D", "7.20", car("ei5-white.png"), "外观瑕疵"),
    ],
  },
  {
    id: "b4",
    type: "bundle",
    merchantId: "fengju",
    name: "本田 CR-V 2019款 240TURBO 两驱风尚版",
    city: "成都",
    totalCount: 4,
    cartUnits: 4,
    price: 22.3,
    image: car("crv-black.png"),
    qualities: [
      { fresh: "9新", grade: "S", count: "1台" },
      { fresh: "95新", grade: "A", count: "1台" },
      { fresh: "8新", grade: "B", count: "2台" },
    ],
    cars: [
      vehicle("b4-1", "本田 CR-V 2019款 240TURBO 两驱风尚版", "成都", "黑色", "5.6万公里", "2019年上牌", "9新", "S", "8.20", car("crv-black.png"), "外观瑕疵"),
      vehicle("b4-2", "日产 轩逸 2018款 1.6XE CVT舒适版", "成都", "黑色", "4.9万公里", "2018年上牌", "95新", "A", "7.50", car("crv-black.png"), "精品车况"),
      vehicle("b4-3", "丰田 凯美瑞 2020款 2.0G 豪华版", "成都", "黑色", "4.0万公里", "2020年上牌", "8新", "B", "6.60", car("crv-black.png"), "轻微划痕"),
    ],
  },
];

const singleProducts = [
  {
    id: "s1",
    type: "single",
    merchantId: "jingju",
    name: "吉利汽车 帝豪新能源 2018款 EV450 进取型",
    city: "西安",
    color: "白色",
    mileage: "3.8万公里",
    license: "2018年上牌",
    flaws: "外观0处  |  内饰3处  |  机械结构0处",
    price: 9.98,
    image: car("ev450-single.png"),
    quality: { fresh: "99新", grade: "S", count: "1台" },
  },
  {
    id: "s2",
    type: "single",
    merchantId: "jingju",
    name: "吉利汽车 博瑞GE 2020款 1.5T 耀智版",
    city: "上海",
    color: "黑色",
    mileage: "4.2万公里",
    license: "2020年上牌",
    flaws: "外观3处  |  内饰1处  |  机械结构0处",
    price: 8.98,
    image: car("ge-black.png"),
    quality: { fresh: "95新", grade: "A", count: "1台" },
  },
  {
    id: "s3",
    type: "single",
    merchantId: "yadi",
    name: "本田 CR-V 2019款 240TURBO 两驱风尚版",
    city: "成都",
    color: "白色",
    mileage: "5.6万公里",
    license: "2019年上牌",
    flaws: "外观2处  |  内饰2处  |  机械结构1处",
    price: 7.68,
    image: car("crv-white.png"),
    quality: { fresh: "85新", grade: "B", count: "1台" },
  },
  {
    id: "s4",
    type: "single",
    merchantId: "yadi",
    name: "奥迪 Q5L 2021款 40 TFSI 豪华动感型",
    city: "上海",
    color: "黑色",
    mileage: "4.6万公里",
    license: "2021年上牌",
    flaws: "外观1处  |  内饰0处  |  机械结构0处",
    price: 12.8,
    image: car("q5-black.png"),
    quality: { fresh: "85新", grade: "C", count: "1台" },
  },
  {
    id: "s5",
    type: "single",
    merchantId: "shengdi",
    name: "特斯拉 Model 3 2021款 标准续航后驱版",
    city: "杭州",
    color: "黑色",
    mileage: "3.1万公里",
    license: "2021年上牌",
    flaws: "外观0处  |  内饰1处  |  机械结构0处",
    price: 15.6,
    image: car("ge-black.png"),
    quality: { fresh: "9新", grade: "S", count: "1台" },
  },
];

const orders = [
  {
    id: "o1",
    status: "contact",
    merchantId: "shengdi",
    orderNo: "CG20240521000123",
    sourceTypes: ["整包车源", "单台车源"],
    bundles: ["b1"],
    singles: ["s5"],
    note: "已提交咨询，等待商务联系",
  },
  {
    id: "o2",
    status: "quote",
    merchantId: "jingju",
    orderNo: "CG20240515004567",
    sourceTypes: ["单台车源"],
    bundles: [],
    singles: ["s2"],
    quote: 16.8,
  },
  {
    id: "o3",
    status: "payment",
    merchantId: "shengdi",
    orderNo: "CG20240518000218",
    sourceTypes: ["整包车源"],
    bundles: ["b1"],
    singles: [],
    payable: 15.6,
  },
  {
    id: "o4",
    status: "progress",
    merchantId: "fengju",
    orderNo: "CG20240514007890",
    sourceTypes: ["整包车源"],
    bundles: ["b4"],
    singles: [],
    amount: 16.8,
    step: 2,
  },
  {
    id: "o5",
    status: "completed",
    merchantId: "jingju",
    orderNo: "CG20240515004567",
    sourceTypes: ["单台车源"],
    bundles: [],
    singles: ["s2"],
    amount: 16.8,
  },
  {
    id: "o6",
    status: "completed",
    merchantId: "yadi",
    orderNo: "CG20240512003321",
    sourceTypes: ["整包车源"],
    bundles: ["b3"],
    singles: [],
    amount: 12.8,
  },
  {
    id: "o7",
    status: "cancelled",
    merchantId: "yadi",
    orderNo: "CG20240512003321",
    sourceTypes: ["单台车源"],
    bundles: [],
    singles: ["s4"],
    amount: 12.8,
    cancelReason: "买家主动取消",
  },
  {
    id: "o8",
    status: "cancelled",
    merchantId: "jingju",
    orderNo: "CG20240515004567",
    sourceTypes: ["整包车源"],
    bundles: ["b1"],
    singles: [],
    amount: 18.6,
    cancelReason: "报价超时未确认",
  },
];

const state = {
  favorites: readStoredObject("xincheng:favorites", {
    bundle: ["b1", "b2", "b3"],
    single: ["s1", "s2", "s3"],
  }),
  favoriteMarks: readStoredObject("xincheng:favoriteMarks", { bundle: [], single: [] }),
  cart: {
    bundle: [
      { id: "b1", selected: true },
      { id: "b2", selected: true },
    ],
    single: [
      { id: "s1", selected: true },
      { id: "s2", selected: true },
      { id: "s3", selected: true },
    ],
  },
  detailSelected: new Set(["b1-1", "b1-2"]),
  filters: { bundle: {}, single: {} },
  activeFilter: null,
  bannerIndex: 0,
};

function vehicle(id, name, city, color, mileage, license, fresh, grade, price, image, flaw) {
  return { id, name, city, color, mileage, license, quality: { fresh, grade, count: "1台" }, price, image, flaw };
}

function icon(name) {
  const icons = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4.2-4.2"></path>',
    home: '<path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10.5V21h13V10.5"></path>',
    cart: '<path d="M4 5h2l2 11h10l2-7H8"></path><circle cx="10" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle>',
    order: '<path d="M7 3h10l2 3v15H5V6l2-3Z"></path><path d="M8 8h8M8 12h8M8 16h5"></path>',
    user: '<circle cx="12" cy="8" r="4"></circle><path d="M4.5 21a7.5 7.5 0 0 1 15 0"></path>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>',
    check: '<path d="m5 12 4 4 10-10"></path>',
    plus: '<path d="M12 5v14M5 12h14"></path>',
    heart: '<path d="M20.5 8.5c0 6.2-8.5 11-8.5 11s-8.5-4.8-8.5-11A4.7 4.7 0 0 1 12 5.4a4.7 4.7 0 0 1 8.5 3.1Z"></path>',
    back: '<path d="m15 5-7 7 7 7"></path>',
    shield: '<path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z"></path><path d="m9 12 2 2 4-5"></path>',
    truck: '<path d="M3 7h11v9H3z"></path><path d="M14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"></path><path d="M9 8h6M9 12h6"></path>',
    file: '<path d="M7 3h7l4 4v14H7z"></path><path d="M14 3v5h5M9 13h6M9 17h5"></path>',
    message: '<path d="M4 5h16v11H8l-4 4V5Z"></path><path d="M8 10h.1M12 10h.1M16 10h.1"></path>',
    up: '<path d="m6 15 6-6 6 6"></path>',
    yen: '<circle cx="12" cy="12" r="9"></circle><path d="m8 8 4 5 4-5M12 13v5M9 14h6"></path>',
    clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v6l4 2"></path>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"></path><path d="m3 12 9 5 9-5"></path>',
    ban: '<circle cx="12" cy="12" r="9"></circle><path d="M5.7 5.7 18.3 18.3"></path>',
    wallet: '<path d="M4 7h16v12H4z"></path><path d="M17 12h4v4h-4a2 2 0 0 1 0-4Z"></path>',
    phone: '<path d="M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"></path>',
    building: '<path d="M4 21V5l8-3 8 3v16"></path><path d="M8 9h2M14 9h2M8 13h2M14 13h2M9 21v-4h6v4"></path>',
    pin: '<path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle>',
    help: '<circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.8 2.8 0 1 1 4.5 2.2c-1 .7-2 1.2-2 2.8M12 17h.1"></path>',
    info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7h.1"></path>',
    tool: '<path d="m14 7 3-3 3 3-3 3"></path><path d="M4 20 14 10"></path><path d="M8 4h4v4H8z"></path>',
    car: '<path d="M5 16h14l-1.5-5h-11L5 16Z"></path><path d="m7 11 1.5-4h7L17 11"></path><circle cx="8" cy="18" r="2"></circle><circle cx="16" cy="18" r="2"></circle>',
    invoice: '<path d="M7 3h10v18l-2-1.5-3 1.5-3-1.5L7 21V3Z"></path><path d="M10 8h4M10 12h4M12 12v6M10 15h4"></path>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ""}</svg>`;
}

function parseRoute() {
  let raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw) raw = "home?type=bundle";
  const [path, query = ""] = raw.split("?");
  return {
    segments: path.split("/").filter(Boolean),
    params: Object.fromEntries(new URLSearchParams(query)),
  };
}

function go(path) {
  window.location.hash = path.startsWith("/") ? `#${path}` : `#/${path}`;
}

function money(value) {
  return Number(value).toFixed(Number(value) % 1 ? 1 : 0);
}

function readStoredObject(key, fallback) {
  try {
    const raw = window.localStorage?.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveStoredObject(key, value) {
  try {
    window.localStorage?.setItem(key, JSON.stringify(value));
  } catch {
    // Storage is optional for this static demo.
  }
}

function miniProgramStatus(time = "9:41") {
  return `
    <div class="status-bar">
      <span>${time}</span>
      <span class="system-icons">
        <span class="signal"><span></span><span></span><span></span><span></span></span>
        <span class="wifi"></span>
        <span class="battery">100</span>
      </span>
    </div>
  `;
}

function capsule() {
  return `
    <div class="mini-capsule" aria-hidden="true">
      <span class="dots"><i></i><i></i><i></i></span>
      <span class="split"></span>
      <span class="circle"></span>
    </div>
  `;
}

function appHeader(title, options = {}) {
  const {
    back = false,
    home = false,
    showCapsule = true,
    searchText = "",
    searchPlaceholder = "",
    searchRoute = "/search?type=bundle&q=吉利",
    time = "9:41",
    className = "",
  } = options;
  const left = back
    ? `<button class="nav-back" data-back aria-label="返回">${icon("back")}</button>`
    : home
      ? `<button class="nav-home" data-route="/home?type=bundle" aria-label="首页">${icon("home")}</button>`
      : `<span></span>`;
  const right = showCapsule ? capsule() : `<span></span>`;
  const rowClass = showCapsule ? "nav-row" : "nav-row no-capsule";
  const search = searchPlaceholder
    ? SearchBar({ className: "header-search", text: searchText || searchPlaceholder, route: searchRoute })
    : "";

  return `
    <header class="app-header ${className}">
      ${miniProgramStatus(time)}
      <div class="${rowClass}">
        ${left}
        <div class="nav-title">${title}</div>
        ${right}
      </div>
      ${search}
    </header>
  `;
}

function MiniProgramHeader(title, options = {}) {
  return appHeader(title, options);
}

function AppShell(activeNav, pageHtml, options = {}) {
  const classes = ["page"];
  if (activeNav) classes.push("with-tabbar");
  if (options.actionbar) classes.push("with-actionbar");
  if (options.quotebar) classes.push("with-quotebar");
  if (options.cartbar) classes.push("with-cartbar");
  const showBackTop = Boolean(activeNav || options.backtop);
  return `
    <div class="phone">
      <div class="${classes.join(" ")}">${pageHtml}</div>
      ${renderFilterPanel()}
      ${activeNav ? bottomNav(activeNav) : ""}
      ${showBackTop ? BackTopButton() : ""}
    </div>
  `;
}

function layout(activeNav, pageHtml, options = {}) {
  return AppShell(activeNav, pageHtml, options);
}

function bottomNav(active) {
  const items = [
    ["home", "首页", "home", "/home?type=bundle"],
    ["purchase", "采购", "cart", "/purchase?tab=favorite&type=bundle"],
    ["orders", "订单", "order", "/orders?status=all"],
    ["mine", "我的", "user", "/mine"],
  ];
  return `
    <nav class="tabbar">
      ${items
        .map(([key, label, ico, route]) => `
          <button class="${active === key ? "active" : ""}" data-route="${route}">
            ${icon(ico)}
            <span>${label}</span>
          </button>
        `)
        .join("")}
    </nav>
  `;
}

function SearchBar({ className = "plain-search", text = "", route = "", toast = "", clear = false }) {
  const attrs = route ? `data-route="${route}"` : toast ? `data-toast="${toast}"` : "";
  if (clear) {
    return `
      <div class="${className}">
        ${icon("search")}
        <span class="search-value">${text}</span>
        <button class="close" data-clear-search aria-label="清除搜索">×</button>
      </div>
    `;
  }
  return `
    <button class="${className}" ${attrs}>
      ${icon("search")}
      <span class="search-value">${text}</span>
    </button>
  `;
}

function BottomNav(active) {
  return bottomNav(active);
}

function BackTopButton() {
  return `<button class="back-top" data-back-top aria-label="返回顶部">${icon("up")}</button>`;
}

function StickyControls(content, className = "") {
  return `<div class="sticky-controls ${className}">${content}</div>`;
}

function ConditionTag(q, options = {}) {
  const freshNumber = q.fresh.replace("新", "");
  const sIsOrange = q.grade === "S" && ["99", "95", "9"].includes(freshNumber);
  const tone = q.grade === "D" ? "gray" : sIsOrange ? "orange" : "green";
  const mini = options.mini ? " mini" : "";
  const two = options.noCount || !q.count ? " two" : "";
  const count = options.noCount || !q.count ? "" : `<span>${q.count}</span>`;
  return `<span class="quality ${tone}${mini}${two}"><span>${q.fresh}</span><span>${q.grade}</span>${count}</span>`;
}

function qualityTag(q, options = {}) {
  return ConditionTag(q, options);
}

function ServiceTags(items = services) {
  return `<div class="service-tags">${items.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function merchantLogo(id) {
  const merchant = merchants[id];
  const tone = merchant.tone === "blue" ? "blue" : merchant.tone === "gray" ? "gray" : "";
  return `<span class="merchant-logo ${tone}">${merchant.logo}</span>`;
}

function merchantPill(id) {
  return `<span class="merchant-pill">${merchantLogo(id)}${merchants[id].name}</span>`;
}

function MerchantBadge(id) {
  return merchantPill(id);
}

function sourceSwitch(current, base, extra = {}) {
  const badgeBundle = extra.bundleBadge ? `<span class="switch-badge">${extra.bundleBadge}</span>` : "";
  const badgeSingle = extra.singleBadge ? `<span class="switch-badge">${extra.singleBadge}</span>` : "";
  return `
    <div class="source-switch">
      <button class="${current === "bundle" ? "active" : ""}" data-route="${base}type=bundle">
        整包车源${badgeBundle}
      </button>
      <button class="${current === "single" ? "active" : ""}" data-route="${base}type=single">
        单台车源${badgeSingle}
      </button>
    </div>
  `;
}

function SourceTypeTabs(current, base, extra = {}) {
  return sourceSwitch(current, base, extra);
}

function filterBar(type) {
  const disabled = type === "bundle";
  const filters = state.filters[type] || {};
  const label = (kind) => filters[kind] || filterLabels[kind];
  return `
    <div class="filter-bar">
      <button class="${filters.city ? "selected" : ""}" data-filter="city" data-filter-type="${type}">${label("city")} <i class="chev-down"></i></button>
      <button class="${filters.brand ? "selected" : ""}" data-filter="brand" data-filter-type="${type}">${label("brand")} <i class="chev-down"></i></button>
      <button class="${filters.price ? "selected" : ""}" data-filter="price" data-filter-type="${type}">${label("price")} <i class="chev-down"></i></button>
      <button class="${disabled ? "disabled" : filters.age ? "selected" : ""}" ${disabled ? 'data-filter-disabled="true"' : `data-filter="age" data-filter-type="${type}"`}>
        ${label("age")} <i class="chev-down"></i>
      </button>
    </div>
  `;
}

function FilterBar(type) {
  return filterBar(type);
}

function renderFilterPanel() {
  if (!state.activeFilter) return "";
  const { kind, type } = state.activeFilter;
  const options = filterOptions[kind] || [];
  const selected = state.filters[type]?.[kind] || options[0];
  return `
    <div class="filter-mask" data-filter-close>
      <section class="filter-panel" role="dialog" aria-label="${filterLabels[kind]}筛选">
        <header>
          <strong>${filterLabels[kind]}</strong>
          <button data-filter-close>完成</button>
        </header>
        <div class="filter-options">
          ${options
            .map((option, index) => `
              <button class="${selected === option || (!state.filters[type]?.[kind] && index === 0) ? "active" : ""}" data-filter-value="${option}" data-filter-kind="${kind}" data-filter-type="${type}">
                ${option}
                ${selected === option || (!state.filters[type]?.[kind] && index === 0) ? icon("check") : ""}
              </button>
            `)
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function NoticeBanner(text, actionText = "说明 ›", iconName = "shield") {
  return `
    <div class="notice-banner">
      <span>${icon(iconName)}${text}</span>
      <button data-toast="${text}">${actionText}</button>
    </div>
  `;
}

function noticeBanner(text, actionText = "说明 ›", iconName = "shield") {
  return NoticeBanner(text, actionText, iconName);
}

function productById(type, id) {
  return (type === "bundle" ? bundleProducts : singleProducts).find((item) => item.id === id);
}

function renderProductList(type, products, mode = "normal") {
  if (!products.length) {
    return `<div class="empty-state">暂无车源<br />可切换分类继续查看</div>`;
  }
  return `<div class="list">${products.map((item) => renderProductCard(item, type, mode)).join("")}</div>`;
}

function ProductCard(product, type, mode = "normal") {
  const isBundle = type === "bundle";
  const route = `/detail/${type}/${product.id}`;
  const qualities = isBundle
    ? product.qualities.map((q) => qualityTag(q)).join("")
    : qualityTag(product.quality);
  const meta = isBundle
    ? `<div class="line-meta"><span>${product.city}</span><span>共${product.totalCount}台</span></div>`
    : `<div class="line-meta"><span>${product.city}</span><span>${product.color}</span><span>${product.mileage}</span><span>${product.license}</span></div>
       <div class="sub-meta"><span>${product.flaws}</span></div>`;
  const priceLabel = isBundle ? "打包总价" : "售价";
  const action =
    mode === "favorite"
      ? `<button class="plus-btn" data-add-cart="${type}:${product.id}" aria-label="加入购物车">${icon("plus")}</button>`
      : mode === "normal"
        ? `<button class="heart-btn ${isFavorite(type, product.id) ? "on" : ""}" data-favorite-toggle="${type}:${product.id}" aria-label="收藏" aria-pressed="${isFavorite(type, product.id)}">${icon("heart")}</button>`
        : "";
  const cardClass = `product-card ${isBundle ? "bundle-card" : "single-card"} ${mode === "cart" ? "cart-card" : ""} ${mode === "favorite" ? "compact" : ""}`;

  if (mode === "cart") {
    const cartItem = state.cart[type].find((item) => item.id === product.id);
    return `
      <article class="${cardClass}" data-route="${route}">
        <button class="select-cell" data-cart-toggle="${type}:${product.id}" aria-label="选择车源">
          <span class="check ${cartItem?.selected ? "checked" : ""}">${cartItem?.selected ? icon("check") : ""}</span>
        </button>
        <div class="product-image"><img src="${product.image}" alt="${product.name}" /></div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <div class="quality-row">${qualities}</div>
          ${meta}
          ${ServiceTags()}
          <div class="price-row"><strong>${money(product.price)}</strong><span class="unit">万</span></div>
        </div>
      </article>
    `;
  }

  return `
    <article class="${cardClass}" data-route="${route}">
      <div class="product-image"><img src="${product.image}" alt="${product.name}" /></div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="quality-row">${qualities}</div>
        ${meta}
        ${ServiceTags()}
        <div class="price-row">
          ${!isBundle ? `<span class="label">${priceLabel}</span>` : ""}
          <strong>${money(product.price)}</strong><span class="unit">万</span>
          ${isBundle ? `<span class="suffix">${priceLabel}</span>` : ""}
        </div>
      </div>
      ${action}
    </article>
  `;
}

function renderProductCard(product, type, mode = "normal") {
  return ProductCard(product, type, mode);
}

function renderHeroBanner() {
  const slide = bannerSlides[state.bannerIndex % bannerSlides.length];
  return `
    <div class="hero-banner" data-banner-touch style="--hero-car:url('${slide.image}')">
      <div class="hero-copy">
        <h2>${slide.title}</h2>
        <p>${slide.desc}</p>
        <div class="hero-features">
          ${slide.tags.map((tag) => `<span>${icon("shield")}${tag}</span>`).join("")}
        </div>
        <div class="hero-dots">
          ${bannerSlides.map((_, index) => `<button class="${index === state.bannerIndex ? "active" : ""}" data-banner-index="${index}" aria-label="切换到第${index + 1}张"></button>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderHome(params) {
  const type = params.type || "bundle";
  const products = type === "bundle" ? bundleProducts : singleProducts;
  const header = appHeader("新橙二手车", {
    className: "header-home",
    searchPlaceholder: type === "bundle" ? "搜索" : "搜索品牌 / 车系 / 车型 / 车源",
    searchRoute: `/search?type=${type}&q=吉利`,
    time: type === "bundle" ? "17:45" : "9:41",
  });
  const body = `
    ${header}
    <section class="content">
      ${renderHeroBanner()}
      ${StickyControls(`${SourceTypeTabs(type, "/home?")}${FilterBar(type)}`, "home-controls")}
      ${renderProductList(type, products)}
    </section>
  `;
  return layout("home", body);
}

function renderSearch(params) {
  const type = params.type || "bundle";
  const q = params.q || "吉利";
  const products = type === "bundle" ? bundleProducts : singleProducts;
  const body = `
    ${appHeader("搜索结果", { home: true, time: "14:39" })}
    <section class="search-page-head">
      ${SearchBar({ className: "search-input-display", text: q || "请输入关键词", clear: true })}
    </section>
    <section class="content no-top">
      ${StickyControls(`${SourceTypeTabs(type, `/search?q=${encodeURIComponent(q)}&`)}${FilterBar(type)}`, "search-controls")}
      ${renderProductList(type, products)}
    </section>
  `;
  return layout(null, body, { backtop: true });
}

function renderDetail(segments) {
  const type = segments[1] || "bundle";
  const id = segments[2] || (type === "bundle" ? "b1" : "s1");
  const product = productById(type, id) || productById("bundle", "b1");
  const isBundle = type === "bundle";
  const selectedCount = isBundle ? product.cars.filter((item) => state.detailSelected.has(item.id)).length : 1;
  const body = `
    ${appHeader(isBundle ? "整包车源" : "单台车源", { back: true })}
    <section class="detail-hero">
      <img src="${product.hero || product.image}" alt="${product.name}" />
      <span class="page-count">1/6</span>
    </section>
    <section class="detail-main">
      <div class="detail-card price-panel">
        <div class="price-panel-top">
          <div class="big-price"><span>${isBundle ? "打包总价" : "售价"}</span><strong>${money(product.price)}</strong><span>万</span></div>
          <span>共${isBundle ? product.totalCount : 1}台车</span>
          <span class="source-tag">直营</span>
        </div>
        <div class="feature-grid">
          ${services.map((tag, index) => `<div>${icon(["receipt", "truck", "shield", "file"][index])}${tag}</div>`).join("")}
        </div>
      </div>
      <h1 class="detail-title">${product.name}</h1>
      <div class="detail-card info-list">
        <div class="row"><b>整备情况</b><span>车辆已完成基础整备</span></div>
        <div class="row"><b>检测认证</b><span>本批车辆已通过检测认证</span></div>
      </div>
      <section class="detail-card condition-standard">
        <div class="condition-standard-head">
          <b>车况标签标准</b>
          <span>新度 / 等级 / 台数</span>
        </div>
        <img src="${ref("condition-label-standard.png")}" alt="车况标签标准图" />
      </section>
      ${noticeBanner("交强险需补缴 3420 元")}
      <div class="section-title">
        <span>${isBundle ? `车辆清单（${product.cars.length}台）` : "车辆信息"}</span>
        ${isBundle ? `<button data-detail-all><span class="check ${selectedCount === product.cars.length ? "checked" : ""}">${selectedCount === product.cars.length ? icon("check") : ""}</span> 全选</button>` : ""}
      </div>
      <div class="vehicle-list">
        ${(isBundle ? product.cars : [singleToVehicle(product)]).map((item) => renderVehicleRow(item, isBundle)).join("")}
      </div>
    </section>
    <div class="bottom-action">
      <button class="favorite-mini ${isFavorite(type, product.id) ? "on" : ""}" data-favorite-toggle="${type}:${product.id}">${icon("heart")}<span>收藏</span></button>
      <button class="outline-btn" data-toast="商务会在工作时间联系您">${icon("phone")} 联系商务</button>
      <button class="primary-btn" data-add-cart="${type}:${product.id}">加入购物车</button>
    </div>
  `;
  return layout(null, body, { actionbar: true });
}

function singleToVehicle(product) {
  return {
    id: product.id,
    name: product.name,
    city: product.city,
    color: product.color,
    mileage: product.mileage,
    license: product.license,
    quality: product.quality,
    image: product.image,
    flaw: product.flaws.split("|")[0].trim(),
  };
}

function renderVehicleRow(item, selectable) {
  const checked = !selectable || state.detailSelected.has(item.id);
  return `
    <article class="detail-card vehicle-row" data-toast="单车明细已打开">
      <button class="select-cell" ${selectable ? `data-detail-toggle="${item.id}"` : ""} aria-label="选择车辆">
        <span class="check ${checked ? "checked" : ""}">${checked ? icon("check") : ""}</span>
      </button>
      <img src="${item.image}" alt="${item.name}" />
      <div>
        ${qualityTag(item.quality)}
        <h4>${item.name}</h4>
        <div class="sub-meta"><span>${item.city}</span><span>${item.color}</span><span>${item.mileage}</span><span>${item.license}</span></div>
        <span class="flaw">${item.flaw}</span>
      </div>
    </article>
  `;
}

function renderPurchase(params) {
  const tab = params.tab || "favorite";
  const type = params.type || "bundle";
  const isCart = tab === "cart";
  const base = `/purchase?tab=${tab}&`;
  const bundleSelected = state.cart.bundle.filter((item) => item.selected).length;
  const singleSelected = state.cart.single.filter((item) => item.selected).length;
  const body = `
    ${appHeader("采购", { className: "header-home" })}
    <section class="purchase-header-block">
      <div class="purchase-panel">
        <div class="primary-tabs">
          <button class="${!isCart ? "active" : ""}" data-route="/purchase?tab=favorite&type=${type}">${icon("star")}收藏</button>
          <button class="${isCart ? "active" : ""}" data-route="/purchase?tab=cart&type=${type}">${icon("cart")}购物车</button>
        </div>
        <div class="purchase-search">
          ${SearchBar({ className: "plain-search", text: `搜索${isCart ? "购物车" : "收藏"}车源`, toast: isCart ? "购物车搜索" : "收藏搜索" })}
        </div>
      </div>
    </section>
    <section class="content purchase-list-content">
      ${StickyControls(SourceTypeTabs(type, base, isCart ? { bundleBadge: bundleSelected, singleBadge: singleSelected } : {}), "purchase-controls")}
      ${isCart ? renderCartList(type) : renderFavoriteList(type)}
    </section>
    ${isCart ? renderCartSummary(type) : ""}
  `;
  return layout("purchase", body, { cartbar: isCart });
}

function renderFavoriteList(type) {
  const ids = state.favorites[type];
  const products = ids.map((id) => productById(type, id)).filter(Boolean);
  if (!products.length) return `<div class="empty-state">暂无收藏车源</div>`;
  return `<div class="list">${products.map((item) => SwipeDeleteCard(renderProductCard(item, type, "favorite"), `favorite:${type}:${item.id}`)).join("")}</div>`;
}

function renderCartList(type) {
  const rows = state.cart[type].map((row) => productById(type, row.id)).filter(Boolean);
  if (!rows.length) return `<div class="empty-state">购物车暂无车源</div>`;
  return `<div class="list">${rows.map((item) => SwipeDeleteCard(renderProductCard(item, type, "cart"), `cart:${type}:${item.id}`)).join("")}</div>`;
}

function SwipeDeleteCard(inner, token) {
  return `
    <div class="swipe-shell">
      <button class="swipe-delete" data-swipe-delete="${token}">删除</button>
      <div class="swipe-row">${inner}</div>
    </div>
  `;
}

function swipeWrap(inner, token) {
  return SwipeDeleteCard(inner, token);
}

function cartStats() {
  const selectedBundles = state.cart.bundle.filter((item) => item.selected).map((item) => productById("bundle", item.id)).filter(Boolean);
  const selectedSingles = state.cart.single.filter((item) => item.selected).map((item) => productById("single", item.id)).filter(Boolean);
  const bundleCars = selectedBundles.reduce((sum, item) => sum + (item.cartUnits || item.totalCount), 0);
  const singleCars = selectedSingles.length;
  const total = [...selectedBundles, ...selectedSingles].reduce((sum, item) => sum + Number(item.price), 0);
  return {
    bundleCount: selectedBundles.length,
    singleCount: selectedSingles.length,
    totalCars: bundleCars + singleCars,
    total,
  };
}

function CartSummaryBar(type) {
  const allCurrent = state.cart[type].length > 0 && state.cart[type].every((item) => item.selected);
  const stats = cartStats();
  return `
    <div class="cart-summary">
      <button class="all" data-cart-all="${type}">
        <span class="check ${allCurrent ? "checked" : ""}">${allCurrent ? icon("check") : ""}</span>全选
      </button>
      <div class="summary-text">
        已选 <em>${stats.bundleCount}个整包</em> + <em>${stats.singleCount}台单车</em>，共<em>${stats.totalCars}台</em>
        <div class="summary-price">预估总价 <strong>${money(stats.total)}</strong><em>万</em></div>
      </div>
      <button class="outline-btn" data-toast="商务会在工作时间联系您">联系商务</button>
      <button class="primary-btn" data-route="/quote">我要报价</button>
    </div>
  `;
}

function renderCartSummary(type) {
  return CartSummaryBar(type);
}

function renderQuote() {
  const stats = cartStats();
  const selectedBundles = state.cart.bundle.filter((item) => item.selected).map((item) => productById("bundle", item.id)).filter(Boolean);
  const selectedSingles = state.cart.single.filter((item) => item.selected).map((item) => productById("single", item.id)).filter(Boolean);
  const body = `
    ${appHeader("报价详情", { back: true })}
    <section class="quote-section">
      ${QuoteDetailList(selectedBundles, selectedSingles)}
    </section>
    <div class="quote-bottom">
      <div class="quote-bottom-top">
        <div class="quote-total">
          已选 <em>${stats.bundleCount}个整包</em> + <em>${stats.singleCount}台单车</em>，共 <em>${stats.totalCars}台</em>
          <span>预估总价</span>
          <span class="total-price">${money(stats.total)}万</span>
        </div>
        <div class="quote-input-wrap">
          <label>我的报价 <small>仅支持输入数字和小数点</small></label>
          <div class="quote-input"><strong>¥</strong><input data-quote-input inputmode="decimal" placeholder="请输入报价金额" /></div>
        </div>
      </div>
      <div class="quote-bottom-actions">
        <button class="outline-btn" data-toast="商务会在工作时间联系您">${icon("phone")} 联系商务</button>
        <button class="primary-btn" data-confirm-quote>确认报价</button>
      </div>
    </div>
  `;
  return layout(null, body, { quotebar: true });
}

function QuoteDetailList(selectedBundles, selectedSingles) {
  return `
    ${selectedBundles.map((item, index) => renderQuoteBundle(item, index + 1)).join("")}
    ${renderQuoteSingles(selectedSingles)}
  `;
}

function renderQuoteBundle(product, index) {
  return `
    <article class="quote-group">
      <header class="quote-group-head">
        <div>
          <h3>整包车源 ${index} <span>（${Math.min(product.cars.length, 3)}个包）</span></h3>
          <strong>${product.name}</strong>
        </div>
        ${merchantPill(product.merchantId)}
      </header>
      ${product.cars.slice(0, 3).map((item) => renderQuoteRow(item, true)).join("")}
    </article>
  `;
}

function renderQuoteSingles(products) {
  if (!products.length) return "";
  return `
    <article class="quote-group">
      <header class="quote-group-head">
        <div><h3>单台车源 <span>（${products.length}台）</span></h3></div>
      </header>
      ${products.map((item) => renderQuoteRow(singleToVehicleWithPrice(item), false, item.merchantId)).join("")}
    </article>
  `;
}

function singleToVehicleWithPrice(product) {
  return { ...singleToVehicle(product), price: money(product.price), merchantId: product.merchantId };
}

function renderQuoteRow(item, fromBundle, merchantId = "") {
  return `
    <div class="quote-row">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        ${!fromBundle && merchantId ? `<div style="margin-bottom:5px">${merchantPill(merchantId)}</div>` : ""}
        ${qualityTag(item.quality)}
        <h4>${item.name}</h4>
        <div class="sub-meta"><span>${item.city}</span><span>${item.color}</span><span>${item.mileage}</span><span>${item.license}</span></div>
      </div>
      <div class="q-price">${item.price}<span>万</span></div>
      <span style="color:#aab0b8">›</span>
    </div>
  `;
}

const orderCategories = [
  ["all", "全部", "layers", 14],
  ["contact", "联系中", "message", 3],
  ["quote", "报价中", "yen", 3],
  ["payment", "待确认", "wallet", 2],
  ["progress", "进行中", "order", 4],
  ["completed", "已完成", "check", 2],
  ["cancelled", "已取消", "ban", 2],
];

const statusText = {
  contact: "联系中",
  quote: "报价中",
  payment: "待确认",
  progress: "进行中",
  completed: "已完成",
  cancelled: "已取消",
};

function renderOrders(params) {
  const status = params.status || "all";
  const filtered = status === "all" ? orders : orders.filter((item) => item.status === status);
  const body = `
    ${appHeader("订单", { showCapsule: false, searchPlaceholder: "搜索订单号 / 商品 / 商家", searchRoute: "/orders?status=all" })}
    <section class="content">
      ${StickyControls(OrderStatusGrid(status), "order-controls")}
      <div>${filtered.map(renderOrderCard).join("")}</div>
    </section>
  `;
  return layout("orders", body);
}

function OrderStatusGrid(status) {
  return `
    <div class="order-categories">
      ${orderCategories
        .map(([key, label, ico, count]) => `
          <button class="order-cat ${status === key ? "active" : ""}" data-route="/orders?status=${key}">
            ${icon(ico)}<span>${label}</span><span class="badge">${count}</span>
          </button>
        `)
        .join("")}
    </div>
  `;
}

function OrderCard(order) {
  const merchant = merchants[order.merchantId];
  const statusClass = order.status === "progress" ? "progress" : order.status === "completed" ? "done" : order.status === "cancelled" ? "cancelled" : "";
  return `
    <article class="order-card">
      <header class="order-head">
        <div class="merchant-head">
          ${merchantLogo(order.merchantId)}
          <div>
            <h3>${merchant.name}</h3>
            <div class="order-no">订单号：${order.orderNo}</div>
          </div>
        </div>
        <span class="order-status ${statusClass}">${statusText[order.status]}</span>
      </header>
      <div class="order-tags">${order.sourceTypes.map((tag) => `<span class="source-tag">${tag}</span>`).join("")}</div>
      ${order.bundles.map((id) => renderOrderBundle(productById("bundle", id))).join("")}
      ${order.singles.length ? renderOrderSingles(order.singles.map((id) => productById("single", id)).filter(Boolean)) : ""}
      ${renderOrderState(order)}
      ${renderOrderActions(order)}
    </article>
  `;
}

function renderOrderCard(order) {
  return OrderCard(order);
}

function renderOrderBundle(product) {
  if (!product) return "";
  return `
    <div class="order-package-box">
      <div class="order-section-head"><strong>整包车源</strong><span>共${product.totalCount}台</span><span class="hint">左右滑动查看全部 ›</span></div>
      <div class="mini-scroll">
        ${product.cars.map((item) => renderMiniCar(item)).join("")}
      </div>
    </div>
  `;
}

function renderOrderSingles(products) {
  return `
    <div class="single-order-list">
      <div class="order-section-head"><strong>单台车源</strong><span>共${products.length}台</span></div>
      <div class="mini-scroll">
        ${products.map((item) => renderMiniCar(singleToVehicle(item))).join("")}
      </div>
    </div>
  `;
}

function renderMiniCar(item) {
  return OrderMiniVehicleCard(item);
}

function OrderMiniVehicleCard(item) {
  return `
    <div class="mini-car" data-toast="横向车源卡片">
      <img src="${item.image}" alt="${item.name}" />
      <h4>${item.name}</h4>
      ${qualityTag(item.quality, { mini: true, noCount: true })}
    </div>
  `;
}

function renderOrderState(order) {
  if (order.status === "contact") {
    return `<div class="contact-note">${order.note}</div>`;
  }
  if (order.status === "quote") {
    return `<div class="amount-box"><span>我的报价</span><strong>${money(order.quote)}<em>万</em></strong></div>`;
  }
  if (order.status === "payment") {
    return `
      <div class="amount-box amount-stack">
        <div class="order-reminder">${icon("wallet")} 商务已反馈报价，请尽快完成付款</div>
        <div class="amount-line"><span>待付款金额</span><strong>${money(order.payable)}<em>万</em></strong></div>
      </div>
    `;
  }
  if (order.status === "progress") {
    const progress = order.step === 3 ? "66%" : order.step === 2 ? "50%" : "0";
    return `
      <div class="amount-box"><span>预计成交金额</span><strong>${money(order.amount)}<em>万</em></strong></div>
      <div class="stepper" style="--progress:${progress}">
        ${["报价已确认", "手续处理中", "待提车"].map((label, index) => `
          <div class="step ${index < order.step ? "active" : ""}"><span class="dot">${index < order.step - 1 ? "✓" : index + 1}</span>${label}<br /><small>${index < 2 ? "05-14 " + (index === 0 ? "10:30" : "14:20") : ""}</small></div>
        `).join("")}
      </div>
    `;
  }
  if (order.status === "completed") {
    return `<div class="amount-box"><span>成交金额</span><strong>${money(order.amount)}<em>万</em></strong></div>`;
  }
  if (order.status === "cancelled") {
    return `
      <div class="amount-box"><span>成交金额</span><strong>${money(order.amount)}<em>万</em></strong></div>
      <div class="cancel-reason">取消原因：${order.cancelReason}</div>
    `;
  }
  return "";
}

function renderOrderActions(order) {
  const map = {
    contact: [
      ["ghost-btn", "查看详情", "/quote"],
      ["outline-btn", "联系商务", "toast"],
    ],
    quote: [
      ["ghost-btn", "查看详情", "/quote"],
      ["outline-btn", "修改报价", "/quote"],
      ["danger-outline", "撤回报价", "toast"],
    ],
    payment: [
      ["outline-btn", "联系商务", "toast"],
      ["primary-btn", "付款", "pay"],
    ],
    progress: [
      ["ghost-btn", "查看进度", "toast"],
      ["outline-btn", "联系商务", "toast"],
    ],
    completed: [
      ["ghost-btn", "查看详情", "/quote"],
      ["green-outline", "再次采购", "/home?type=bundle"],
    ],
    cancelled: [
      ["ghost-btn", "查看详情", "/quote"],
      ["outline-btn", "再次采购", "/home?type=bundle"],
    ],
  };
  return `
    <div class="order-actions">
      ${map[order.status]
        .map(([cls, text, action]) => {
          if (action === "toast") return `<button class="${cls}" data-toast="${text}已触发">${text}</button>`;
          if (action === "pay") return `<button class="${cls}" data-toast="付款演示已打开">${text}</button>`;
          return `<button class="${cls}" data-route="${action}">${text}</button>`;
        })
        .join("")}
    </div>
  `;
}

function renderMine() {
  const body = `
    ${appHeader("我的", { time: "14:32" })}
    <section class="mine-content">
      ${UserProfileCard()}
      <section class="panel-card mine-section">
        <div class="mine-title"><span>采购概览</span><button data-route="/purchase?tab=cart&type=bundle">查看全部 ›</button></div>
        <div class="stats-grid">
          ${mineStat("cart", "8", "台", "购物车", "/purchase?tab=cart&type=bundle")}
          ${mineStat("receipt", "2", "单", "报价中", "/orders?status=quote")}
          ${mineStat("wallet", "1", "单", "待确认", "/orders?status=payment")}
        </div>
      </section>
      <section class="panel-card mine-section">
        <div class="quick-grid">
          ${quickItem("shield", "企业认证")}
          ${quickItem("invoice", "发票管理")}
          ${quickItem("phone", "联系商务")}
        </div>
      </section>
      <section class="panel-card mine-section">
        <div class="mine-title"><span>账户与服务</span></div>
        <div class="account-list">
          ${accountRow("pin", "收货 / 提车信息")}
          ${accountRow("help", "常见问题")}
          ${accountRow("info", "关于平台")}
        </div>
      </section>
    </section>
  `;
  return layout("mine", body);
}

function UserProfileCard() {
  return `
    <article class="panel-card profile-card">
      <div class="company-logo"><span class="mark">${icon("car")}</span></div>
      <div class="profile-info">
        <h2>上海新橙汽车贸易有限公司</h2>
        <span class="cert">${icon("shield")} 已认证采购商</span>
        <p>联系人：陈女士</p>
        <p>手机号：138****2689</p>
      </div>
      <span class="arrow">›</span>
    </article>
  `;
}

function mineStat(ico, number, unit, label, route) {
  return `
    <button class="stat-item" data-route="${route}">
      ${icon(ico)}
      <strong>${number}<small>${unit}</small></strong>
      <span>${label}</span>
    </button>
  `;
}

function quickItem(ico, label) {
  return `
    <button class="quick-item" data-toast="${label}演示">
      ${icon(ico)}
      <span>${label}</span>
    </button>
  `;
}

function accountRow(ico, label) {
  return `
    <button class="account-row" data-toast="${label}演示">
      ${icon(ico)}
      <span>${label}</span>
      <span>›</span>
    </button>
  `;
}

function isFavorite(type, id) {
  return state.favoriteMarks[type].includes(id);
}

function toggleFavorite(type, id) {
  const marks = state.favoriteMarks[type];
  const favoriteList = state.favorites[type];
  const index = marks.indexOf(id);
  if (index >= 0) {
    marks.splice(index, 1);
    state.favorites[type] = favoriteList.filter((item) => item !== id);
    toast("已取消收藏");
  } else {
    marks.unshift(id);
    if (!favoriteList.includes(id)) favoriteList.unshift(id);
    toast("已加入收藏");
  }
  saveStoredObject("xincheng:favoriteMarks", state.favoriteMarks);
  saveStoredObject("xincheng:favorites", state.favorites);
  render();
}

function addToCart(type, id) {
  if (!state.cart[type].some((item) => item.id === id)) {
    state.cart[type].push({ id, selected: true });
  } else {
    const item = state.cart[type].find((row) => row.id === id);
    item.selected = true;
  }
  toast("已加入购物车");
  render();
}

function deleteSwipe(token) {
  const [scope, type, id] = token.split(":");
  if (scope === "favorite") {
    state.favorites[type] = state.favorites[type].filter((item) => item !== id);
    state.favoriteMarks[type] = state.favoriteMarks[type].filter((item) => item !== id);
    saveStoredObject("xincheng:favoriteMarks", state.favoriteMarks);
    saveStoredObject("xincheng:favorites", state.favorites);
    toast("已从收藏移除");
  }
  if (scope === "cart") {
    state.cart[type] = state.cart[type].filter((item) => item.id !== id);
    toast("已从购物车删除");
  }
  render();
}

function selectFilter(kind, type, value) {
  const defaultValue = filterOptions[kind]?.[0];
  if (!state.filters[type]) state.filters[type] = {};
  if (value === defaultValue) delete state.filters[type][kind];
  else state.filters[type][kind] = value;
  state.activeFilter = null;
  toast(value);
  render();
}

function toggleCart(type, id) {
  const item = state.cart[type].find((row) => row.id === id);
  if (item) item.selected = !item.selected;
  render();
}

function toggleCartAll(type) {
  const allSelected = state.cart[type].length > 0 && state.cart[type].every((item) => item.selected);
  state.cart[type].forEach((item) => {
    item.selected = !allSelected;
  });
  render();
}

function toggleDetailVehicle(id) {
  if (state.detailSelected.has(id)) state.detailSelected.delete(id);
  else state.detailSelected.add(id);
  render();
}

function toggleDetailAll() {
  const route = parseRoute();
  const product = productById(route.segments[1] || "bundle", route.segments[2] || "b1");
  if (!product?.cars) return;
  const allSelected = product.cars.every((item) => state.detailSelected.has(item.id));
  product.cars.forEach((item) => {
    if (allSelected) state.detailSelected.delete(item.id);
    else state.detailSelected.add(item.id);
  });
  render();
}

let toastTimer;
function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1600);
}

function enableSwipe() {
  document.querySelectorAll(".swipe-row").forEach((row) => {
    let sx = 0;
    let sy = 0;
    let moved = false;
    row.addEventListener("pointerdown", (event) => {
      sx = event.clientX;
      sy = event.clientY;
      moved = false;
    });
    row.addEventListener("pointerup", (event) => {
      const dx = event.clientX - sx;
      const dy = event.clientY - sy;
      if (Math.abs(dx) > 34 && Math.abs(dx) > Math.abs(dy)) {
        moved = true;
        document.querySelectorAll(".swipe-row.swiped").forEach((item) => {
          if (item !== row) item.classList.remove("swiped");
        });
        row.classList.toggle("swiped", dx < 0);
      }
      if (moved) event.preventDefault();
    });
  });
}

function enableBannerSwipe() {
  if (typeof document.querySelector !== "function") return;
  const banner = document.querySelector("[data-banner-touch]");
  if (!banner) return;
  let sx = 0;
  let sy = 0;
  banner.addEventListener("pointerdown", (event) => {
    sx = event.clientX;
    sy = event.clientY;
  });
  banner.addEventListener("pointerup", (event) => {
    const dx = event.clientX - sx;
    const dy = event.clientY - sy;
    if (Math.abs(dx) < 38 || Math.abs(dx) < Math.abs(dy)) return;
    state.bannerIndex = (state.bannerIndex + (dx < 0 ? 1 : -1) + bannerSlides.length) % bannerSlides.length;
    render();
  });
}

function render() {
  const route = parseRoute();
  const page = route.segments[0] || "home";
  let html;
  if (page === "home") html = renderHome(route.params);
  else if (page === "search") html = renderSearch(route.params);
  else if (page === "detail") html = renderDetail(route.segments);
  else if (page === "purchase") html = renderPurchase(route.params);
  else if (page === "quote") html = renderQuote();
  else if (page === "orders") html = renderOrders(route.params);
  else if (page === "mine") html = renderMine();
  else html = renderHome({ type: "bundle" });
  app.innerHTML = html;
  enableSwipe();
  enableBannerSwipe();
}

document.addEventListener("click", (event) => {
  const backTop = event.target.closest("[data-back-top]");
  if (backTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const filterValue = event.target.closest("[data-filter-value]");
  if (filterValue) {
    event.stopPropagation();
    selectFilter(filterValue.dataset.filterKind, filterValue.dataset.filterType, filterValue.dataset.filterValue);
    return;
  }

  const filterClose = event.target.closest("[data-filter-close]");
  if (filterClose) {
    state.activeFilter = null;
    render();
    return;
  }

  const filterDisabled = event.target.closest("[data-filter-disabled]");
  if (filterDisabled) {
    toast("整包车源暂不支持按车龄/里程筛选");
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.activeFilter = { kind: filter.dataset.filter, type: filter.dataset.filterType };
    render();
    return;
  }

  const bannerDot = event.target.closest("[data-banner-index]");
  if (bannerDot) {
    state.bannerIndex = Number(bannerDot.dataset.bannerIndex);
    render();
    return;
  }

  const clearSearch = event.target.closest("[data-clear-search]");
  if (clearSearch) {
    event.stopPropagation();
    const route = parseRoute();
    const type = route.params.type || "bundle";
    go(`/search?type=${type}&q=`);
    return;
  }

  const back = event.target.closest("[data-back]");
  if (back) {
    if (history.length > 1) history.back();
    else go("/home?type=bundle");
    return;
  }

  const favorite = event.target.closest("[data-favorite-toggle]");
  if (favorite) {
    event.stopPropagation();
    const [type, id] = favorite.dataset.favoriteToggle.split(":");
    toggleFavorite(type, id);
    return;
  }

  const add = event.target.closest("[data-add-cart]");
  if (add) {
    event.stopPropagation();
    const [type, id] = add.dataset.addCart.split(":");
    addToCart(type, id);
    return;
  }

  const swipeDelete = event.target.closest("[data-swipe-delete]");
  if (swipeDelete) {
    deleteSwipe(swipeDelete.dataset.swipeDelete);
    return;
  }

  const cartToggle = event.target.closest("[data-cart-toggle]");
  if (cartToggle) {
    event.stopPropagation();
    const [type, id] = cartToggle.dataset.cartToggle.split(":");
    toggleCart(type, id);
    return;
  }

  const cartAll = event.target.closest("[data-cart-all]");
  if (cartAll) {
    toggleCartAll(cartAll.dataset.cartAll);
    return;
  }

  const detailToggle = event.target.closest("[data-detail-toggle]");
  if (detailToggle) {
    event.stopPropagation();
    toggleDetailVehicle(detailToggle.dataset.detailToggle);
    return;
  }

  const detailAll = event.target.closest("[data-detail-all]");
  if (detailAll) {
    toggleDetailAll();
    return;
  }

  const confirm = event.target.closest("[data-confirm-quote]");
  if (confirm) {
    toast("报价已提交，等待商务确认");
    return;
  }

  const toastTarget = event.target.closest("[data-toast]");
  if (toastTarget) {
    toast(toastTarget.dataset.toast);
    return;
  }

  const route = event.target.closest("[data-route]");
  if (route) {
    const target = route.dataset.route;
    if (target) go(target);
  }
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-quote-input]")) return;
  const parts = event.target.value.replace(/[^\d.]/g, "").split(".");
  event.target.value = parts.length > 1 ? `${parts.shift()}.${parts.join("")}` : parts[0];
});

window.addEventListener("hashchange", render);

if (!window.location.hash) {
  go("/home?type=bundle");
} else {
  render();
}

if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const page = parseRoute().segments[0] || "home";
    if (page !== "home") return;
    state.bannerIndex = (state.bannerIndex + 1) % bannerSlides.length;
    render();
  }, 3800);
}
