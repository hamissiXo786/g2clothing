(function () {
  "use strict";

  var P = window.G2_PRODUCTS || [];
  var CATS = window.G2_CATEGORIES || [];
  var STORES = window.G2_STORES || [];
  var C = window.G2_CONTACT || {};

  /* ---------- helpers ---------- */
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    insta: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
    fb: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
    tiktok: '<path d="M16 3c.5 2.5 2 4 5 4.3v3.3c-1.9 0-3.6-.6-5-1.6V16a6 6 0 1 1-6-6v3.4a2.6 2.6 0 1 0 2.6 2.6V3Z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8Z"/><circle cx="7" cy="7" r="1.5"/>',
    store: '<path d="M3 9 4.5 3h15L21 9M3 9v12h18V9M3 9h18M9 21v-6h6v6"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.4 8.4 0 1 1 21 11.5Z"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    shirt: '<path d="M20.4 6.6 16 4a4 4 0 0 1-8 0L3.6 6.6a1 1 0 0 0-.4 1.3l1.6 3.3a1 1 0 0 0 1.3.5L8 11v10h8V11l1.9.7a1 1 0 0 0 1.3-.5l1.6-3.3a1 1 0 0 0-.4-1.3Z"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    truck: '<path d="M10 17h4V5H2v12h3M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    fire: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.6 1.6 2.8 2.5 2.8Z"/>',
  };
  function icon(name, cls) {
    var fill = name === "fb" || name === "tiktok" ? "currentColor" : "none";
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="' + fill + '" stroke="' + (fill === "none" ? "currentColor" : "none") +
      '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + "</svg>";
  }
  var WA_SVG = '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function catName(id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i].name;
    return id;
  }
  function byId(id) {
    for (var i = 0; i < P.length; i++) if (P[i].id === id) return P[i];
    return null;
  }
  function waLink(text) {
    return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(text);
  }
  function orderLink(p) {
    return waLink("Hi G2! I'd like to order: " + p.name + " (R" + p.price + "). Is it available?");
  }
  function mapsLink(addr) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("G2 Clothing " + addr);
  }
  var BADGES = { best: ["Best seller", "badge"], new: ["New in", "badge badge-new"], deal: ["Deal", "badge badge-deal"] };
  var page = document.body.getAttribute("data-page") || "";

  /* ---------- header & footer ---------- */
  function logo(light) {
    return '<a class="logo' + (light ? " logo-light" : "") + '" href="index.html" aria-label="G2 Clothing & Homeware home">' +
      '<span class="logo-mark">G2</span><span class="logo-sub">CLOTHING · HOMEWARE</span></a>';
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var nav = [["shop.html", "All Products", "shop"]].concat(CATS.map(function (c) {
      return ["shop.html?cat=" + c.id, c.name, "cat-" + c.id];
    })).concat([["shop.html?deals=1", "Deals", "deals"], ["stores.html", "Stores", "stores"], ["contact.html", "Contact", "contact"]]);
    var params = new URLSearchParams(location.search);
    var current = page === "shop" ? (params.get("deals") ? "deals" : params.get("cat") ? "cat-" + params.get("cat") : "shop") : page;

    el.innerHTML =
      '<div class="topbar"><div class="container">' +
        '<div class="topbar-links">' +
          '<a href="stores.html">' + icon("pin") + "8 stores in Durban &amp; PMB</a>" +
          '<a href="' + waLink("Hi G2!") + '" target="_blank" rel="noopener">' + icon("chat") + "Order on WhatsApp</a>" +
          '<a href="contact.html">' + icon("phone") + "Need help?</a>" +
        "</div>" +
        '<div class="topbar-links">' +
          '<a href="' + C.instagram + '" target="_blank" rel="noopener">' + icon("insta") + C.instagramHandle + "</a>" +
          '<a href="' + C.facebook + '" target="_blank" rel="noopener">' + icon("fb") + "Facebook</a>" +
        "</div>" +
      "</div></div>" +
      '<header class="site-header"><div class="container header-main">' +
        logo() +
        '<form class="search" action="shop.html" role="search">' + icon("search") +
          '<label class="sr-only" for="q">Search products</label>' +
          '<input id="q" name="q" type="search" placeholder="Search (e.g. dresses, sandals)…" value="' + esc(params.get("q") || "") + '"></form>' +
        '<a class="header-cta" href="' + waLink("Hi G2!") + '" target="_blank" rel="noopener">' +
          '<span class="bubble">' + WA_SVG + "</span><span><small>WhatsApp to order</small><strong>" + C.phone + "</strong></span></a>" +
        '<button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">' + icon("menu") + "</button>" +
      "</div>" +
      '<nav class="main-nav" id="main-nav" aria-label="Main"><div class="container">' +
        '<form class="search mobile-search" action="shop.html" role="search">' + icon("search") +
          '<label class="sr-only" for="q2">Search products</label><input id="q2" name="q" type="search" placeholder="Search products…"></form>' +
        "<ul>" + nav.map(function (n) {
          var cls = n[2] === "deals" ? ' class="nav-deals"' : "";
          var cur = n[2] === current ? ' aria-current="page"' : "";
          var pre = n[2] === "deals" ? icon("fire") : "";
          return "<li><a" + cls + cur + ' href="' + n[0] + '">' + pre + n[1] + "</a></li>";
        }).join("") + "</ul>" +
      "</div></nav></header>";

    var btn = el.querySelector(".menu-toggle");
    var navEl = el.querySelector(".main-nav");
    btn.addEventListener("click", function () {
      var open = navEl.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.innerHTML = icon(open ? "close" : "menu");
    });
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<section class="social-band"><div class="container">' +
        "<div><h2>Follow " + C.instagramHandle + " for new drops</h2><p>New stock lands weekly. Be first to see it, then come grab it in store.</p></div>" +
        '<div class="social-actions">' +
          '<a class="btn btn-white" href="' + C.instagram + '" target="_blank" rel="noopener">' + icon("insta") + "Instagram</a>" +
          '<a class="btn btn-black" href="' + C.facebook + '" target="_blank" rel="noopener">' + icon("fb") + "Facebook</a>" +
        "</div></div></section>" +
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-about">' + logo() +
            "<p>Branded items for less. Clothing, footwear and accessories for the whole family, at prices that make sense.</p>" +
            '<div class="socials">' +
              '<a href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icon("insta") + "</a>" +
              '<a href="' + C.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + icon("fb") + "</a>" +
              '<a href="' + C.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok">' + icon("tiktok") + "</a>" +
              '<a href="' + waLink("Hi G2!") + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + WA_SVG + "</a>" +
            "</div></div>" +
          "<div><h4>Shop</h4><ul>" + CATS.map(function (c) {
            return '<li><a href="shop.html?cat=' + c.id + '">' + c.name + "</a></li>";
          }).join("") + '<li><a href="shop.html?deals=1">Deals</a></li></ul></div>' +
          '<div><h4>Help</h4><ul><li><a href="contact.html">Contact us</a></li><li><a href="stores.html">Store locations</a></li>' +
            '<li><a href="' + waLink("Hi G2!") + '" target="_blank" rel="noopener">Order on WhatsApp</a></li><li><a href="tel:+' + C.whatsapp + '">' + C.phone + "</a></li></ul></div>" +
          "<div><h4>Our stores</h4><ul>" + STORES.map(function (s) {
            return '<li><a href="' + mapsLink(s.address) + '" target="_blank" rel="noopener">' + esc(s.address) + "</a></li>";
          }).join("") + "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " G2 Clothing &amp; Homeware. All rights reserved.</span><span>Prices in Rand (ZAR). Subject to stock availability.</span></div>" +
      "</div></footer>" +
      '<a class="wa-float" href="' + waLink("Hi G2!") + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + WA_SVG + "</a>";
  }

  /* ---------- product card ---------- */
  function card(p) {
    var b = p.badge && BADGES[p.badge];
    return '<article class="card">' +
      '<a class="card-media" href="product.html?id=' + p.id + '">' +
        (b ? '<span class="' + b[1] + '">' + b[0] + "</span>" : "") +
        '<img src="assets/img/products/' + p.id + '.webp" alt="' + esc(p.name) + '" loading="lazy" width="800" height="652"></a>' +
      '<div class="card-body">' +
        '<span class="card-cat">' + catName(p.category) + " · " + esc(p.type) + "</span>" +
        '<h3 class="card-title"><a href="product.html?id=' + p.id + '">' + esc(p.name) + "</a></h3>" +
        '<div class="card-price">R' + p.price + "</div>" +
        '<div class="card-actions">' +
          '<a class="btn btn-black btn-sm" href="' + orderLink(p) + '" target="_blank" rel="noopener">' + WA_SVG + "Order</a>" +
          '<a class="btn-icon" href="product.html?id=' + p.id + '" aria-label="View ' + esc(p.name) + '">' + icon("arrow") + "</a>" +
        "</div></div></article>";
  }

  /* ---------- home ---------- */
  function initHome() {
    var tiles = document.getElementById("cat-tiles");
    if (tiles) {
      var picks = { mens: "mens-plain-tees-r50", ladies: "ladies-floral-flutter-dress", boys: "boys-basketball-vest-shorts",
        girls: "girls-bow-tee", footwear: "ladies-v-band-sandals", accessories: "ladies-hair-bow", deals: "boys-outline-vest" };
      var html = '<a class="cat-tile cat-lead" href="shop.html"><h3>Browse<br>G2 by<br>Category</h3><span class="arrow">' + icon("arrow") + "</span></a>";
      CATS.forEach(function (c) {
        html += '<a class="cat-tile" href="shop.html?cat=' + c.id + '"><img src="assets/img/products/' + picks[c.id] + '.webp" alt="" loading="lazy"><span class="pill">' + c.name + "</span></a>";
      });
      html += '<a class="cat-tile" href="shop.html?deals=1"><img src="assets/img/products/' + picks.deals + '.webp" alt="" loading="lazy"><span class="pill">Deals under R50</span></a>';
      tiles.innerHTML = html;
    }

    var grid = document.getElementById("hot-grid");
    var tabs = document.querySelectorAll("#hot-tabs .tab");
    function show(kind) {
      var list = P.filter(function (p) {
        if (kind === "best") return p.badge === "best";
        if (kind === "new") return p.badge === "new";
        return p.price <= 40;
      });
      // top up to a full two rows
      P.forEach(function (p) { if (list.length < 8 && list.indexOf(p) === -1) list.push(p); });
      list = list.slice(0, 8);
      grid.innerHTML = list.map(card).join("");
      tabs.forEach(function (t) { t.setAttribute("aria-pressed", t.dataset.kind === kind); });
    }
    if (grid) {
      tabs.forEach(function (t) { t.addEventListener("click", function () { show(t.dataset.kind); }); });
      show("best");
    }
    var count = document.getElementById("stat-products");
    if (count) count.textContent = P.length + "+";
  }

  /* ---------- shop ---------- */
  function initShop() {
    var params = new URLSearchParams(location.search);
    var state = { cat: params.get("cat") || "all", q: (params.get("q") || "").trim().toLowerCase(), deals: !!params.get("deals"), sort: "featured" };
    var grid = document.getElementById("shop-grid");
    var list = document.getElementById("filter-cats");
    var countEl = document.getElementById("result-count");
    var titleEl = document.getElementById("shop-title");
    var sortEl = document.getElementById("sort");

    function buildFilters() {
      var items = [{ id: "all", name: "All products", n: P.length }].concat(CATS.map(function (c) {
        return { id: c.id, name: c.name, n: P.filter(function (p) { return p.category === c.id; }).length };
      }));
      items.push({ id: "deals", name: "Deals (R40 & under)", n: P.filter(function (p) { return p.price <= 40; }).length });
      list.innerHTML = items.map(function (i) {
        var on = i.id === "deals" ? state.deals : !state.deals && state.cat === i.id;
        return '<li><button type="button" data-cat="' + i.id + '" aria-pressed="' + on + '">' + i.name + '<span class="count">' + i.n + "</span></button></li>";
      }).join("");
      list.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          var id = b.dataset.cat;
          state.deals = id === "deals";
          state.cat = state.deals ? "all" : id;
          var u = new URL(location.href);
          u.searchParams.delete("cat"); u.searchParams.delete("deals");
          if (state.deals) u.searchParams.set("deals", "1"); else if (id !== "all") u.searchParams.set("cat", id);
          history.replaceState(null, "", u);
          buildFilters(); render();
        });
      });
    }

    function render() {
      var out = P.filter(function (p) {
        if (state.deals && p.price > 40) return false;
        if (state.cat !== "all" && p.category !== state.cat) return false;
        if (state.q) {
          var hay = (p.name + " " + p.type + " " + catName(p.category)).toLowerCase();
          return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w.replace(/s$/, "")) !== -1; });
        }
        return true;
      });
      if (state.sort === "low") out.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "high") out.sort(function (a, b) { return b.price - a.price; });
      grid.innerHTML = out.length ? out.map(card).join("") :
        '<div class="empty"><h3>No products found</h3><p>Try another search, or <a href="' + waLink("Hi G2! Do you have: " + state.q) + '" style="color:var(--red);font-weight:700">ask us on WhatsApp</a>. New stock lands weekly.</p></div>';
      countEl.textContent = out.length + (out.length === 1 ? " product" : " products");
      var t = state.deals ? "Deals" : state.cat === "all" ? "All Products" : catName(state.cat);
      if (state.q) t = "Results for “" + params.get("q") + "”";
      titleEl.textContent = t;
      document.title = t + " | G2 Clothing & Homeware";
    }

    sortEl.addEventListener("change", function () { state.sort = sortEl.value; render(); });
    buildFilters();
    render();
  }

  /* ---------- product ---------- */
  function initProduct() {
    var id = new URLSearchParams(location.search).get("id");
    var p = byId(id);
    var root = document.getElementById("product-root");
    if (!p) {
      root.innerHTML = '<div class="empty"><h2>Product not found</h2><p><a class="btn btn-red" href="shop.html">Back to shop</a></p></div>';
      return;
    }
    document.title = p.name + " – R" + p.price + " | G2 Clothing & Homeware";
    document.getElementById("crumb-cat").innerHTML = '<a href="shop.html?cat=' + p.category + '">' + catName(p.category) + "</a>";
    document.getElementById("crumb-name").textContent = p.name;

    var imgs = ["assets/img/products/" + p.id + ".webp", "assets/flyers/" + p.id + ".webp"];
    root.innerHTML =
      '<div class="product-detail">' +
        '<div class="gallery"><div class="gallery-main"><img id="main-img" src="' + imgs[0] + '" alt="' + esc(p.name) + '"></div>' +
          '<div class="gallery-thumbs">' + imgs.map(function (src, i) {
            return '<button type="button" data-src="' + src + '" aria-pressed="' + (i === 0) + '" aria-label="' + (i ? "View in-store flyer" : "View product") + '"><img src="' + src + '" alt=""></button>';
          }).join("") + "</div></div>" +
        '<div class="detail-info">' +
          '<span class="eyebrow">' + catName(p.category) + " · " + esc(p.type) + "</span>" +
          "<h1>" + esc(p.name) + "</h1>" +
          '<p class="detail-price">R' + p.price + "</p>" +
          '<p class="note">Available in G2 stores across Durban and Pietermaritzburg while stock lasts. Message us on WhatsApp to check sizes and colours, or to reserve one for collection.</p>' +
          '<div class="detail-actions">' +
            '<a class="btn btn-red btn-block" href="' + orderLink(p) + '" target="_blank" rel="noopener">' + WA_SVG + "Order on WhatsApp</a>" +
            '<a class="btn btn-outline btn-block" href="stores.html">' + icon("store") + "Find a store</a>" +
          "</div>" +
          '<ul class="detail-list">' +
            "<li>" + icon("tag") + "Branded items for less: our everyday low price</li>" +
            "<li>" + icon("pin") + STORES.length + " stores in Durban Central, Umlazi &amp; PMB</li>" +
            "<li>" + icon("chat") + "Quick replies on WhatsApp: " + C.phone + "</li>" +
          "</ul>" +
        "</div></div>";

    root.querySelectorAll(".gallery-thumbs button").forEach(function (b) {
      b.addEventListener("click", function () {
        document.getElementById("main-img").src = b.dataset.src;
        root.querySelectorAll(".gallery-thumbs button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      });
    });

    var related = P.filter(function (x) { return x.category === p.category && x.id !== p.id; }).slice(0, 4);
    if (related.length < 4) related = related.concat(P.filter(function (x) { return x.category !== p.category && x.badge === "best"; }).slice(0, 4 - related.length));
    document.getElementById("related-grid").innerHTML = related.map(card).join("");
  }

  /* ---------- stores ---------- */
  function initStores() {
    var el = document.getElementById("store-grid");
    el.innerHTML = STORES.map(function (s) {
      return '<article class="store-card">' + icon("store") + "<h3>" + esc(s.name) + "</h3><p>" + esc(s.address) + "</p>" +
        '<a href="' + mapsLink(s.address) + '" target="_blank" rel="noopener">Get directions →</a></article>';
    }).join("");
  }

  /* ---------- contact links (any page) ---------- */
  function fillContactLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = waLink(a.getAttribute("data-wa") || "Hi G2!"); a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = C.instagram; a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-fb]").forEach(function (a) { a.href = C.facebook; a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = "tel:+" + C.whatsapp; });
    document.querySelectorAll("[data-icon]").forEach(function (s) { s.outerHTML = s.getAttribute("data-icon") === "wa" ? WA_SVG : icon(s.getAttribute("data-icon")); });
  }

  renderHeader();
  renderFooter();
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
  if (page === "stores") initStores();
  fillContactLinks();
})();
