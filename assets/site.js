// ============================================================
//  EDIT HERE: your links and your artwork list.
// ============================================================
const LINKS = {
  instagram: "https://instagram.com/scottedwinartist",
  ebay: "",   // paste your eBay store link between the quotes
  email: ""   // paste your email between the quotes
};

// Add a painting: copy one line, change the file name, title, and details.
// Put the image file in the assets/art folder.
const ART = [
  { src: "assets/art/painting-01.jpg", title: "Untitled", details: "Acrylic and spray on paper" }
];

// ============================================================
//  Sidebar (shared by every page)
// ============================================================
const PAGES = [
  ["index.html", "Gallery"],
  ["hair.html", "Hair"],
  ["story.html", "Story"],
  ["contact.html", "Contact"]
];

const icons = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  ebay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1.2 11H6.2z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
};

function buildSidebar() {
  const here = location.pathname.split("/").pop() || "index.html";
  const nav = PAGES.map(([href, label]) =>
    `<li><a href="${href}"${href === here ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");
  const foot = [
    LINKS.instagram && `<a href="${LINKS.instagram}" target="_blank" rel="noopener">${icons.instagram}@scottedwinartist</a>`,
    LINKS.ebay && `<a href="${LINKS.ebay}" target="_blank" rel="noopener">${icons.ebay}Shop on eBay</a>`,
    LINKS.email && `<a href="mailto:${LINKS.email}">${icons.email}Email</a>`
  ].filter(Boolean).join("");

  const aside = document.createElement("aside");
  aside.className = "sidebar";
  aside.innerHTML = `
    <div>
      <a class="logo aura-text" href="index.html">SCOTTeHORAN</a>
      <p class="tagline">Artist &middot; Hairstylist &middot; SF</p>
    </div>
    <button class="menu-btn" aria-expanded="false">Menu</button>
    <ul class="nav">${nav}</ul>
    <div class="sidebar-foot">${foot}<div class="copy">&copy; ${new Date().getFullYear()} Scott Horan</div></div>`;
  document.body.prepend(aside);
  const btn = aside.querySelector(".menu-btn");
  btn.addEventListener("click", () => {
    const open = aside.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

// ============================================================
//  Gallery + lightbox
// ============================================================
function buildGallery() {
  const g = document.getElementById("gallery");
  if (!g) return;
  g.innerHTML = ART.map((a, i) => `
    <figure class="piece" data-i="${i}">
      <img src="${a.src}" alt="${a.title}" loading="lazy">
      <figcaption><b>${a.title}</b><span>${a.details || ""}</span></figcaption>
    </figure>`).join("");

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `<button aria-label="Close">&times;</button><div><img alt=""><p></p></div>`;
  document.body.append(lb);
  const close = () => lb.classList.remove("open");
  lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "BUTTON") close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  g.addEventListener("click", e => {
    const f = e.target.closest(".piece[data-i]");
    if (!f) return;
    const a = ART[f.dataset.i];
    lb.querySelector("img").src = a.src;
    lb.querySelector("p").textContent = a.title;
    lb.classList.add("open");
  });
}

// Contact page cards
function buildContact() {
  const c = document.getElementById("contact-links");
  if (!c) return;
  const rows = [
    ["Instagram", "@scottedwinartist", LINKS.instagram],
    ["Email", LINKS.email || "Coming soon", LINKS.email && "mailto:" + LINKS.email],
    ["Shop", LINKS.ebay ? "eBay store" : "Coming soon", LINKS.ebay]
  ];
  c.innerHTML = rows.map(([k, v, href]) => href
    ? `<a class="contact-card" href="${href}" target="_blank" rel="noopener"><span>${k}</span><b class="aura-text">${v}</b></a>`
    : `<div class="contact-card"><span>${k}</span><b style="color:var(--mist)">${v}</b></div>`).join("");
}

buildSidebar();
buildGallery();
buildContact();
