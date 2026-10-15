// ============================================================
//  EDIT HERE: your links and your artwork list.
// ============================================================
const LINKS = {
  instagram: "https://instagram.com/scottedwinartist",
  ebay: "",   // paste your eBay store link between the quotes
  email: "scotty@scottehoran.com",
  venmo: "https://venmo.com/u/Scott-Horan-2"
};

// Add section: "body" to a line to put it on the Body Parts page instead of the Gallery.
// Add a painting: copy one line, change the file name, title, and details.
// Put the image file in the assets/art folder.
const ART = [
  {"src": "assets/art/blue-mahogany.svg", "title": "Blue Mahogany", "details": ""},
  {"src": "assets/art/painting-22.jpg", "title": "The Request", "details": "ink pen, pastels, watercolor pencils", "description": ["The body folded around itself, drawn in scribble with intention in its form. Head down on crossed arms, resting. Seated at a desk, with a chaotic mind in need of rest."], "hashtags": "#figurativedrawing #watercolorpencils #contemporarydrawing #shadowwork #worksonpaper #introspection #sfartist #expressiveart #friendportrait #mechanicmark"},
  {"src": "assets/art/painting-04.jpg", "title": "Lilith, Kali, The Morrigan", "details": "", "description": ["Reposting this 'because I didn't do pic size right. I thought you would see the correct size when you clicked on it. I am going to have redo a few of these I think.", "Women in mythology who weren't created to make everyone else comfortable.", "The ones who destroy, punish, transform, protect, avenge, and basically say fuck your rules.", "Maybe that's what happens when you give paint, anger, and a little bit of chaos enough room to do whatever the hell they want."], "hashtags": "#Lilith #Kali #TheMorrigan #GoddessArt #DarkFeminine #MythologyArt #MythologicalArt #AbstractArt #AbstractPainting #ContemporaryArt #MixedMediaArt"},
  {"src": "assets/art/painting-05.jpg", "title": "Emergence", "details": "Ink pens, acrylic, and charcoal on raw canvas\n35 x 50 in", "description": ["The eyes that once guided the wreck now light the way out. Opened, they see."]},
  {"src": "assets/art/painting-01.jpg", "title": "Two Moons, One Argument", "details": "Mixed Media on Fabriano 1264 Watercolor paper 18x24in", "description": ["One gesture, made fast, before the thinking could ruin it. The two circles are the only calm thing in the frame and they know it."], "hashtags": "#gesturalabstraction #abstractart #actionpainting #mixedmedia #contemporarypainting #instinct #boldcolor #sfartist #worksonpaper #abstractexpressionism"},
  { src: "assets/art/painting-02.jpg", title: "Untitled", details: "" },
  {"src": "assets/art/painting-03.jpg", "title": "The Big One", "details": "43\"x25\" Acrylic on Canvas, Molding Paste on a Cork drink coaster & Mahogany shaved thin", "description": ["We all keep a go-bag and pretend we don't think about this.", "So I painted it. The Golden Gate mid-shake, going into the bay, under a sun that isn't going to help. International orange all the way down. They picked that color so we'd see the bridge in the fog.", "Turns out it photographs well on the way out too."]},
  {"src": "assets/art/painting-08.jpg", "title": "Bouquet for No Occasion", "details": "acrylic on paper", "description": ["A still life that would not sit still. The flowers kept dying and reblooming under the brush and I let them. Yellow because the room needed the lie of sunlight."]},
  {"src": "assets/art/painting-07.jpg", "title": "First painting I ever sold", "details": "Acrylic on canvas, 18 x 24 in. Private collection", "description": ["She was the first person I ever showed my work to. I wasn't trying to sell anything. She offered me a thousand dollars for it.", "I said no. Told her I'd just give it to her. She insisted. It took me a couple days to even say yes, because the whole time I felt like an impostor. We settled on half.", "She made me sign it. My hand didn't know how yet, so the signature came out awful. That was the first time I thought maybe I actually was an artist.", "It hangs in her dining room now."]},
  { src: "assets/art/painting-06.jpg", title: "Untitled", details: "" },
  {"src": "assets/art/painting-11.jpg", "title": "No Pictures", "details": "charcoal and soft pastel on paper", "description": ["A portrait of being seen before you are ready. Charcoal wants to bury it, the color refuses to dim its glow."]},
  { src: "assets/art/painting-10.jpg", title: "Untitled", details: "" },
  {"src": "assets/art/painting-09.jpg", "title": "Who the Hell Are You?", "details": "Derwent Inktense, Derwent watercolor pencil, carbon black, and chalk on 11x15\" Fabriano watercolor paper.", "description": ["A bird mostly eye trying to figure you out. It hasn't blinked since I finished it."]},
  { src: "assets/art/painting-13.jpg", title: "Untitled", details: "" },
  {"src": "assets/art/painting-12.jpg", "title": "She's come Undone", "details": "Colored pens on paper", "description": ["I have not been doing this long and maybe you are think \"obviously\" but not even 3 years ago could I have done something like this with different colored pens nor did I paint, have a sketchbook/journal that was not more blank pages than actual entries and now I only have a blank page here and there to add to something that I want to revisit later or a couple at the very end that will have there time but a new journal to a hold of my need to touch and draw on the new paper I have yet to try. They all get filled up with wet or dry & scribbly lines but nothing says more than what change in me as a person and what I have now can SEE that I didn't SEE before than than the eyes that will never be able to unSee the in which they have now Seen."]},
  { src: "assets/art/painting-14.jpg", title: "Untitled", details: "" },
  { src: "assets/art/painting-17.jpg", title: "Untitled", details: "" },
  { src: "assets/art/painting-16.jpg", title: "Untitled", details: "" },
  { src: "assets/art/painting-15.jpg", title: "Untitled", details: "" },
  { src: "assets/art/painting-19.jpg", title: "Untitled", details: "" },
  { src: "assets/art/painting-18.jpg", title: "Untitled", details: "" },
  { src: "assets/art/painting-21.jpg", title: "Untitled", details: "", section: "body" },
  { src: "assets/art/painting-20.jpg", title: "Untitled", details: "", section: "body" }
];

// Add a note: copy the example below, remove the // at the start of
// each line, and type your own date, title, and words. Newest goes on top.
// Each item in "text" is one paragraph.
const NOTES = [
  // {
  //   date: "September 2026",
  //   title: "Your title here",
  //   text: [
  //     "First paragraph.",
  //     "Second paragraph."
  //   ]
  // },
];

// ============================================================
//  Top bar and footer (shared by every page)
// ============================================================
const PAGES = [
  ["index.html", "Gallery"],
  ["hair.html", "Hair"],
  ["story.html", "Story"],
  ["notes.html", "Notes"],
  ["contact.html", "Contact"]
];

const icons = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  ebay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1.2 11H6.2z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  venmo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 9.5v5M17.5 9.5v5"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
};

function buildHeader() {
  let here = location.pathname.split("/").pop() || "index.html";
  if (here === "body.html") here = "index.html";
  const nav = PAGES.map(([href, label]) =>
    `<li><a href="${href}"${href === here ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");

  const header = document.createElement("header");
  header.className = "sidebar";
  header.innerHTML = `
    <div class="brand">
      <a class="logo aura-text" href="index.html">SCOTTeHORAN</a>
      <p class="tagline">Artist &middot; Hairstylist &middot; SF</p>
    </div>
    <button class="menu-btn" aria-expanded="false">Menu</button>
    <ul class="nav">${nav}</ul>`;
  document.body.prepend(header);
  const btn = header.querySelector(".menu-btn");
  btn.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });

  const links = [
    LINKS.instagram && `<a href="${LINKS.instagram}" target="_blank" rel="noopener">${icons.instagram}@scottedwinartist</a>`,
    LINKS.ebay && `<a href="${LINKS.ebay}" target="_blank" rel="noopener">${icons.ebay}Shop on eBay</a>`,
    LINKS.email && `<a href="mailto:${LINKS.email}">${icons.email}Email</a>`,
    LINKS.venmo && `<a href="${LINKS.venmo}" target="_blank" rel="noopener">${icons.venmo}Venmo</a>`
  ].filter(Boolean).join("");
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `<div class="footer-links">${links}</div><div>&copy; ${new Date().getFullYear()} Scott Horan</div>`;
  document.querySelector(".main").after(footer);
}

// ============================================================
//  Gallery + lightbox
// ============================================================
function buildGallery() {
  const g = document.getElementById("gallery");
  if (!g) return;
  const section = g.dataset.section || "";
  g.innerHTML = ART.map((a, i) => (a.section || "") !== section ? "" : `
    <figure class="piece" data-i="${i}" style="--r:0.8">
      <div class="frame"><img src="${a.src}" alt="${a.title}" loading="lazy"></div>
    </figure>`).join("");
  // Each piece's width follows its picture's shape, so every row lines up evenly.
  g.querySelectorAll(".piece img").forEach(img => {
    const fit = () => img.naturalWidth && img.closest(".piece").style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(3));
    img.complete ? fit() : img.addEventListener("load", fit);
  });

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `<button aria-label="Close">&times;</button><div class="lightbox-content"><img alt=""><div class="art-caption"></div></div>`;
  document.body.append(lb);
  const close = () => lb.classList.remove("open");
  lb.addEventListener("click", e => { if (e.target === lb || e.target.closest("button")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  g.addEventListener("click", e => {
    const f = e.target.closest(".piece[data-i]");
    if (!f) return;
    const a = ART[f.dataset.i];
    lb.querySelector("img").src = a.src;
    lb.querySelector("img").alt = a.title;
    const cap = lb.querySelector(".art-caption");
    cap.replaceChildren();
    const title = document.createElement("h2");
    title.textContent = a.title;
    cap.append(title);
    (a.description || []).forEach(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      cap.append(paragraph);
    });
    if (a.details) {
      const materials = document.createElement("p");
      materials.className = "art-materials";
      materials.textContent = a.details;
      cap.append(materials);
    }
    if (a.hashtags) {
      const tags = document.createElement("p");
      tags.className = "art-tags";
      tags.textContent = a.hashtags;
      cap.append(tags);
    }
    colorWords(cap);
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
    ["Venmo", "@Scott-Horan-2", LINKS.venmo],
    ["Shop", LINKS.ebay ? "eBay store" : "Coming soon", LINKS.ebay]
  ];
  c.innerHTML = rows.map(([k, v, href]) => href
    ? `<a class="contact-card" href="${href}" target="_blank" rel="noopener"><span>${k}</span><b>${v}</b></a>`
    : `<div class="contact-card"><span>${k}</span><b style="color:var(--mist)">${v}</b></div>`).join("");
}

// ============================================================
//  Word colors: each word gets all of Logo One's colors or all of
//  Logo Two's, taking turns. Skips the logo itself and parchment pages.
// ============================================================
let turn = 0;
function colorWords(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.nodeValue.trim() &&
      !n.parentElement.closest(".logo, .parchment, script, style, .w1, .w2")
      ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const frag = document.createDocumentFragment();
    node.nodeValue.split(/(\s+)/).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.append(part); return; }
      const s = document.createElement("span");
      s.className = turn++ % 2 ? "w2" : "w1";
      s.textContent = part;
      frag.append(s);
    });
    node.replaceWith(frag);
  });
}

function buildNotes() {
  const n = document.getElementById("notes");
  if (!n) return;
  n.innerHTML = NOTES.length
    ? NOTES.map(note => `
      <article class="note">
        <p class="eyebrow">${note.date}</p>
        <h2>${note.title}</h2>
        ${note.text.map(t => `<p>${t}</p>`).join("")}
      </article>`).join("")
    : `<div class="note empty"><p>Notes coming soon</p></div>`;
}

buildHeader();
buildNotes();
buildGallery();
buildContact();
colorWords(document.body);
