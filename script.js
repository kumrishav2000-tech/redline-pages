/* STORIES DATABASE */
const stories = [
  {
    category: "Machines",
    title: "The Anatomy of the Thumper: Why Single Cylinders Endure",
    desc: "From British singles to modern counterbalanced motors, the low-end mechanical rhythm of a big single has a character multi-cylinders simply cannot replicate.",
    img: "assets/classic-350-detail.webp",
    link: "#blueprint"
  },
  {
    category: "Touring",
    title: "1,400 Kilometres in 20 Hours: Lessons from Saddle Time",
    desc: "Pushing limits across the northern plains and into the mountains. When exhaustion sets in, physical rhythm and focus take over.",
    img: "assets/jatayiu-classic-350-rider.webp",
    link: "#touring"
  },
  {
    category: "Engineering",
    title: "Torque Over Horsepower: Real World Usability in the Hills",
    desc: "Why dyno sheets mislead, and why low-down torque spread between 2,500 and 4,000 RPM matters more on mountain hairpins than top-end speed.",
    img: "assets/classic-350-forest-stop.webp",
    link: "#engineering"
  },
  {
    category: "Culture",
    title: "Wrenching as Meditation: Maintaining What You Ride",
    desc: "Understanding valve tappets, drive chain slack, and cable lubrication creates an unbreakable psychological bond between machine and pilot.",
    img: "assets/jatayiu-rider-portrait.webp",
    link: "#rider"
  },
  {
    category: "Machines",
    title: "The Twin-Cylinder Renaissance: Interceptor & GT 650",
    desc: "How Royal Enfield redefined accessible middleweight motorcycling across international borders with its 270-degree parallel twin platform.",
    img: "assets/classic-350-mountain-overlook.webp",
    link: "#archive"
  },
  {
    category: "Engineering",
    title: "Chassis Flex vs Rigid Spars: Finding Feel Over Bumps",
    desc: "Ultra-stiff track frames often fail on real-world Indian tarmac. Here is how controlled flex preserves rider stamina and traction.",
    img: "assets/himalayan-peak-landscape.webp",
    link: "#engineering"
  }
];

/* RENDER STORIES */
const storyGrid = document.getElementById("story-grid");
function renderStories(filter = "All") {
  const filtered = filter === "All" ? stories : stories.filter(s => s.category === filter);
  storyGrid.innerHTML = filtered.map(s => `
    <article class="story-card">
      <div style="overflow:hidden;">
        <img class="story-card-img" src="${s.img}" alt="${s.title}" loading="lazy">
      </div>
      <div class="story-card-content">
        <span class="eyebrow">${s.category}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="${s.link}">READ STORY <span>↗</span></a>
      </div>
    </article>
  `).join("");
}
renderStories();

/* STORIES FILTERS */
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderStories(btn.dataset.filter);
});

/* MACHINES DATABASE (30 MACHINES WITH CDN IMAGES) */
const machines = [
  {brand:"Royal Enfield",name:"Classic 350",engine:"349 cc",config:"Single cylinder",type:"Roadster",category:"Royal Enfield",image:"assets/classic-350-detail.webp",description:"An enduring icon. The J-series Classic 350 balances traditional design with balanced smoothness and relaxed cruising ergonomics."},
  {brand:"Royal Enfield",name:"Bullet 350",engine:"349 cc",config:"Single cylinder",type:"Roadster",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",description:"The longest continuous running motorcycle model in history, bringing pure nostalgia and timeless simplicity."},
  {brand:"Royal Enfield",name:"Hunter 350",engine:"349 cc",config:"Single cylinder",type:"Urban roadster",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",description:"A nimble roadster tuned for flickability in dense urban streets without losing low-end punch."},
  {brand:"Royal Enfield",name:"Interceptor 650",engine:"648 cc",config:"Parallel twin",type:"Roadster",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",description:"A modern interpretation of 1960s British parallel twins featuring a 270-degree crossplane crank."},
  {brand:"Royal Enfield",name:"Continental GT 650",engine:"648 cc",config:"Parallel twin",type:"Cafe racer",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",description:"Clip-ons, rearsets, and a sculpted fuel tank create an authentic cafe racer profile."},
  {brand:"Royal Enfield",name:"Himalayan 450",engine:"452 cc",config:"Liquid-cooled single",type:"Adventure",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",description:"The Sherpa 450 engine marks Royal Enfield's technological evolution into DOHC liquid cooling."},
  {brand:"Royal Enfield",name:"Super Meteor 650",engine:"648 cc",config:"Parallel twin",type:"Cruiser",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",description:"Low-slung touring cruiser built on a dedicated chassis with upside-down Showa forks."},
  {brand:"Royal Enfield",name:"Shotgun 650",engine:"648 cc",config:"Parallel twin",type:"Custom roadster",category:"Royal Enfield",image:"https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",description:"Neo-retro custom bobber aesthetic built around the versatile 648cc twin-cylinder heart."},
  {brand:"Bajaj",name:"Pulsar NS200",engine:"199.5 cc",config:"Single cylinder",type:"Street naked",category:"Bajaj",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",description:"Perimeter chassis and high-revving triple-spark motor that set Indian streetfighter standards."},
  {brand:"Bajaj",name:"Pulsar N250",engine:"249 cc",config:"Single cylinder",type:"Street naked",category:"Bajaj",image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",description:"Refined quarter-litre oil-cooled roadster built for predictable commuting and torque delivery."},
  {brand:"Bajaj",name:"Dominar 400",engine:"373 cc",config:"Single cylinder",type:"Sport tourer",category:"Bajaj",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",description:"Heavyweight highway tourer with factory touring accessories and beam chassis stability."},
  {brand:"Bajaj",name:"Pulsar RS200",engine:"199.5 cc",config:"Single cylinder",type:"Sports",category:"Bajaj",image:"https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",description:"Aerodynamic fairing with projector lamps tailored for wind protection on highways."},
  {brand:"Honda",name:"H'ness CB350",engine:"348.36 cc",config:"Single cylinder",type:"Classic roadster",category:"Honda",image:"https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",description:"Japanese precision applied to the classic retro roadster genre with assist-and-slipper clutch."},
  {brand:"Honda",name:"CB350RS",engine:"348.36 cc",config:"Single cylinder",type:"Sport roadster",category:"Honda",image:"https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",description:"Tucked tail light, block-pattern rubber, and aggressive ergonomics for a modern scrambler look."},
  {brand:"Honda",name:"CB650R",engine:"649 cc",config:"Inline four",type:"Naked sports",category:"Honda",image:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",description:"Neo Sports Café design showcasing cascading exhaust headers and an screaming inline-four."},
  {brand:"Honda",name:"Africa Twin",engine:"1084 cc",config:"Parallel twin",type:"Adventure",category:"Honda",image:"https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",description:"Dakar-tested globe trotter featuring rugged long-travel suspension and DCT gearbox option."},
  {brand:"KTM",name:"390 Duke",engine:"398.7 cc",config:"Single cylinder",type:"Street naked",category:"KTM",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",description:"Uncompromising naked hooligan with class-leading power-to-weight and aggressive geometry."},
  {brand:"KTM",name:"390 Adventure",engine:"398.7 cc",config:"Single cylinder",type:"Adventure",category:"KTM",image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",description:"Cornering ABS, off-road traction control, and WP Apex suspension ready for trail duty."},
  {brand:"KTM",name:"RC 390",engine:"373 cc",config:"Single cylinder",type:"Sports",category:"KTM",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",description:"Track weapon with full Moto3 ergonomics, adjustable clip-ons, and razor-sharp flickability."},
  {brand:"Yamaha",name:"R15",engine:"155 cc",config:"Single cylinder",type:"Sports",category:"Yamaha",image:"https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",description:"Variable Valve Actuation and Deltabox aluminum swingarm make it a supreme supersport learner."},
  {brand:"Yamaha",name:"MT-15",engine:"155 cc",config:"Single cylinder",type:"Street naked",category:"Yamaha",image:"https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",description:"Dark Side of Japan styling distilled into a featherweight, punchy street fighter."},
  {brand:"Yamaha",name:"R3",engine:"321 cc",config:"Parallel twin",type:"Sports",category:"Yamaha",image:"https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",description:"High-revving parallel twin with tractable daily usability and confidence-inspiring chassis."},
  {brand:"Other",name:"Hayabusa",engine:"1340 cc",config:"Inline four",type:"Hyper sport",category:"Other",image:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",description:"Legendary hyperbike engineered for aerodynamic stability beyond 300 km/h."},
  {brand:"Other",name:"Ninja ZX-10R",engine:"998 cc",config:"Inline four",type:"Superbike",category:"Other",image:"https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",description:"WorldSBK championship-winning liter class machine with comprehensive electronic aids."},
  {brand:"Other",name:"BMW S1000RR",engine:"999 cc",config:"Inline four",type:"Superbike",category:"Other",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",description:"ShiftCam variable valve timing delivers ferocious pull right up to the 14,000 RPM ceiling."},
  {brand:"Other",name:"Aprilia RS 457",engine:"457 cc",config:"Parallel twin",type:"Sports",category:"Other",image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",description:"Twin-cylinder Italian precision engineered specifically around A2 license power thresholds."},
  {brand:"Other",name:"Triumph Speed 400",engine:"398 cc",config:"Single cylinder",type:"Modern classic",category:"Other",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",description:"Hinckley design pedigree packed into an accessible, beautifully finished roadster."},
  {brand:"Other",name:"Ducati Panigale V4",engine:"1103 cc",config:"V4",type:"Superbike",category:"Other",image:"https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",description:"Desmosedici Stradale V4 engine directly derived from Ducati MotoGP racing prototypes."},
  {brand:"Other",name:"TVS Apache RTR 310",engine:"312 cc",config:"Single cylinder",type:"Street naked",category:"Other",image:"https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",description:"Technology powerhouse featuring climate-controlled seats and dynamic race telemetry."},
  {brand:"Other",name:"Hero XPulse 200 4V",engine:"199.6 cc",config:"Single cylinder",type:"Adventure",category:"Other",image:"https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",description:"The everyman trail explorer with 21-inch front spoke rim and long-travel offroad suspension."}
];

/* RENDER ARCHIVE */
const machineGrid = document.getElementById("machine-grid");
const machineCount = document.getElementById("machine-count");

function renderMachines(category = "All") {
  const filtered = category === "All" ? machines : machines.filter(m => m.category === category);
  machineCount.textContent = filtered.length;
  machineGrid.innerHTML = filtered.map(m => {
    const idx = machines.indexOf(m);
    return `
      <article class="machine-card" data-index="${idx}" tabindex="0" role="button" aria-label="Explore ${m.name}">
        <div class="machine-art">
          <span class="machine-placeholder">ARCHIVE REF: ${m.name.toUpperCase()}</span>
          <img src="${m.image}" alt="${m.brand} ${m.name}" loading="lazy">
          <span class="machine-arrow">↗</span>
        </div>
        <div class="machine-info">
          <p class="machine-brand">${m.brand}</p>
          <h3 class="machine-name">${m.name}</h3>
          <div class="machine-meta">
            <span>${m.engine}</span>
            <span>${m.type.toUpperCase()}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}
renderMachines();

/* ARCHIVE FILTER LISTENER */
document.getElementById("archive-filters").addEventListener("click", e => {
  const btn = e.target.closest(".archive-filter");
  if (!btn) return;
  document.querySelectorAll(".archive-filter").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderMachines(btn.dataset.brand);
});

/* MODAL DETAILS */
const dialog = document.getElementById("machine-dialog");
function openMachine(idx) {
  const m = machines[idx];
  if (!m) return;
  document.getElementById("dialog-brand").textContent = m.brand.toUpperCase() + " / SPECIFICATION SHEET";
  document.getElementById("dialog-title").textContent = m.name;
  document.getElementById("dialog-image").src = m.image;
  document.getElementById("dialog-engine").textContent = m.engine;
  document.getElementById("dialog-config").textContent = m.config;
  document.getElementById("dialog-class").textContent = m.type;
  document.getElementById("dialog-description").textContent = m.description;
  dialog.showModal();
}

machineGrid.addEventListener("click", e => {
  const card = e.target.closest(".machine-card");
  if (card) openMachine(Number(card.dataset.index));
});

machineGrid.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".machine-card");
    if (card) { e.preventDefault(); openMachine(Number(card.dataset.index)); }
  }
});

document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

/* DUAL VIEW SKETCH / PHOTO TOGGLE */
const btnSketch = document.getElementById("btn-show-sketch");
const btnPhoto = document.getElementById("btn-show-photo");
const layerSketch = document.getElementById("layer-sketch");
const layerPhoto = document.getElementById("layer-photo");

btnSketch.addEventListener("click", () => {
  btnSketch.classList.add("active");
  btnPhoto.classList.remove("active");
  layerSketch.classList.add("active");
  layerPhoto.classList.remove("active");
});

btnPhoto.addEventListener("click", () => {
  btnPhoto.classList.add("active");
  btnSketch.classList.remove("active");
  layerPhoto.classList.add("active");
  layerSketch.classList.remove("active");
});

/* BRAND TICKER DUPLICATION */
const brandTrack = document.getElementById("brand-track");
brandTrack.innerHTML += brandTrack.innerHTML;

/* MOBILE MENU */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.textContent = open ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

/* PROGRESS BAR */
window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
  document.getElementById("progress").style.width = pct + "%";
}, { passive: true });

/* INTERSECTION REVEALS */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* YEAR & FORM */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Newsletter registrations are opening soon. Thank you for subscribing!";
});
