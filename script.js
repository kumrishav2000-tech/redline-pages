
/* =========================================
   REDLINE PAGES — MAIN JAVASCRIPT
   Stories • Motorcycle Archive • Interactions
========================================= */

/* -----------------------------------------
   1. STORIES
----------------------------------------- */

const stories = [
  {
    category: "Machines",
    title: "The Royal Enfield Classic 350: An Indian Icon",
    excerpt: "From its origins and early production to the modern J-Series Classic. Explore the motorcycle's journey through history.",
    image: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/revamp/gallery/thumbnail/desktop/gallery_1.jpg",
    tag: "MOTORCYCLE HISTORY",
    read: "12 MIN READ",
    link: "articles/classic-350.html"
  },
  {
    category: "Machines",
    title: "The middleweight adventure question",
    excerpt: "What makes a motorcycle genuinely capable beyond the spec sheet? A look at the choices that shape the modern ADV.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    tag: "MACHINE NOTES",
    read: "6 MIN READ",
    link: "#"
  },
  {
    category: "Engineering",
    title: "Torque, power and the feel of an engine",
    excerpt: "Two numbers appear on every spec sheet. Here's what they mean on the road, and why neither tells the whole story.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    tag: "TECHNICAL EXPLAINER",
    read: "5 MIN READ",
    link: "#"
  },
  {
    category: "Touring",
    title: "The art of planning a long motorcycle ride",
    excerpt: "Distance is only one part of the plan. Think fuel, fatigue, weather, road conditions and the space to adapt.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    tag: "RIDE JOURNAL",
    read: "8 MIN READ",
    link: "#"
  },
  {
    category: "Industry",
    title: "Reading the Indian motorcycle market",
    excerpt: "A practical guide to understanding segments, positioning, pricing and the shifts worth watching.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    tag: "INDUSTRY WATCH",
    read: "7 MIN READ",
    link: "#"
  },
  {
    category: "Machines",
    title: "What makes a motorcycle touring-worthy?",
    excerpt: "Ergonomics, range, wind protection, luggage and service support: the details that matter after 300 kilometres.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    tag: "BUYER'S NOTE",
    read: "7 MIN READ",
    link: "#"
  },
  {
    category: "Engineering",
    title: "Suspension: the conversation between road and rider",
    excerpt: "A clear introduction to forks, shock absorbers, damping and why setup changes the ride.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    tag: "ENGINEERING",
    read: "6 MIN READ",
    link: "#"
  }
];

const storyGrid = document.querySelector("#story-grid");

function renderStories(filter = "All") {
  if (!storyGrid) return;

  const items = filter === "All"
    ? stories
    : stories.filter(story => story.category === filter);

  storyGrid.innerHTML = items.map(story => `
    <article class="story-card">
      <div
        class="story-image"
        style="background-image:url('${story.image}')"
        role="img"
        aria-label="${story.title}">
      </div>

      <div class="story-body">
        <div class="story-meta">
          ${story.tag} &nbsp; / &nbsp; ${story.read}
        </div>

        <h3>${story.title}</h3>
        <p>${story.excerpt}</p>

        <a class="read-link" href="${story.link}">
          READ THE STORY ↗
        </a>
      </div>
    </article>
  `).join("");
}

renderStories();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderStories(button.dataset.filter || "All");
  });
});


/* -----------------------------------------
   2. MOTORCYCLE ARCHIVE
----------------------------------------- */

const motorcycles = [
  {
    brand: "Royal Enfield",
    name: "Classic 350",
    slug: "classic-350",
    engine: "349 cc",
    config: "Single-cylinder, 4-stroke",
    class: "Modern Classic",
    description: "The modern expression of a timeless silhouette. The Classic 350 carries forward the unmistakable proportions, relaxed character and unmistakable identity that have defined generations of Royal Enfield motorcycles."
  },
  {
    brand: "Royal Enfield",
    name: "Bullet 350",
    slug: "bullet-350",
    engine: "349 cc",
    config: "Single-cylinder, 4-stroke",
    class: "Roadster",
    description: "One of motorcycling's longest-running nameplates. The Bullet remains rooted in a simple philosophy: a recognisable silhouette, a steady thump and an unhurried riding experience."
  },
  {
    brand: "Royal Enfield",
    name: "Hunter 350",
    slug: "hunter-350",
    engine: "349 cc",
    config: "Single-cylinder, 4-stroke",
    class: "Urban Roadster",
    description: "A compact and contemporary roadster built around the J-series platform, with a shorter wheelbase and a more agile personality for urban riding."
  },
  {
    brand: "Royal Enfield",
    name: "Interceptor 650",
    slug: "interceptor-650",
    engine: "648 cc",
    config: "Parallel twin",
    class: "Roadster",
    description: "A modern interpretation of the classic British twin-cylinder roadster. Its accessible performance and clean design helped bring the middleweight twin back into the spotlight."
  },
  {
    brand: "Royal Enfield",
    name: "Continental GT 650",
    slug: "continental-gt-650",
    engine: "648 cc",
    config: "Parallel twin",
    class: "Cafe Racer",
    description: "Inspired by the café racer culture of the 1960s, the Continental GT combines a committed riding position with a distinctive tank, clip-on-style ergonomics and twin-cylinder character."
  },
  {
    brand: "Royal Enfield",
    name: "Himalayan 450",
    slug: "himalayan-450",
    engine: "452 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Adventure Tourer",
    description: "A new-generation Himalayan developed around long-distance travel and changing terrain, with a liquid-cooled engine and a purpose-built adventure platform."
  },
  {
    brand: "Royal Enfield",
    name: "Super Meteor 650",
    slug: "super-meteor-650",
    engine: "648 cc",
    config: "Parallel twin",
    class: "Cruiser",
    description: "A laid-back cruiser built around Royal Enfield's 650 twin platform, with a low stance, forward-set foot controls and a relaxed touring character."
  },
  {
    brand: "Royal Enfield",
    name: "Shotgun 650",
    slug: "shotgun-650",
    engine: "648 cc",
    config: "Parallel twin",
    class: "Custom Roadster",
    description: "A factory custom-inspired motorcycle with a modular design language, distinctive proportions and the familiar 650 twin-cylinder engine."
  },
  {
    brand: "Bajaj",
    name: "Pulsar NS200",
    slug: "pulsar-ns200",
    engine: "199.5 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Streetfighter",
    description: "A key motorcycle in the evolution of the Indian performance commuter. The NS200 brought liquid cooling, a perimeter frame and aggressive streetfighter styling to its segment."
  },
  {
    brand: "Bajaj",
    name: "Pulsar N250",
    slug: "pulsar-n250",
    engine: "249 cc",
    config: "Oil-cooled single-cylinder",
    class: "Naked Street",
    description: "A contemporary Pulsar designed around accessible torque, everyday usability and a muscular naked-bike stance."
  },
  {
    brand: "Bajaj",
    name: "Dominar 400",
    slug: "dominar-400",
    engine: "373 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Sport Tourer",
    description: "Bajaj's performance-oriented touring machine, combining a powerful single-cylinder engine with a substantial chassis and long-distance equipment."
  },
  {
    brand: "Bajaj",
    name: "Pulsar RS200",
    slug: "pulsar-rs200",
    engine: "199.5 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Fully-faired Sport",
    description: "The fully-faired member of the NS family, designed to bring an aggressive sportbike silhouette and everyday performance together."
  },
  {
    brand: "Honda",
    name: "H'ness CB350",
    slug: "hness-cb350",
    engine: "348.36 cc",
    config: "Air-cooled single-cylinder",
    class: "Modern Classic",
    description: "Honda's modern classic roadster, blending traditional proportions with contemporary engineering and a refined single-cylinder character."
  },
  {
    brand: "Honda",
    name: "CB350RS",
    slug: "cb350rs",
    engine: "348.36 cc",
    config: "Air-cooled single-cylinder",
    class: "Sport Roadster",
    description: "A sportier interpretation of Honda's 350 platform, with revised styling and a more contemporary roadster identity."
  },
  {
    brand: "Honda",
    name: "CB650R",
    slug: "cb650r",
    engine: "649 cc",
    config: "Inline-four",
    class: "Neo Sports Café",
    description: "Honda's middleweight naked motorcycle pairs a compact neo-retro design with the distinctive sound and character of an inline-four engine."
  },
  {
    brand: "Honda",
    name: "Africa Twin",
    slug: "africa-twin",
    engine: "1084 cc",
    config: "Parallel twin",
    class: "Adventure Tourer",
    description: "A flagship adventure motorcycle carrying forward the Africa Twin name through long-distance capability, off-road intent and a versatile parallel-twin platform."
  },
  {
    brand: "KTM",
    name: "390 Duke",
    slug: "390-duke",
    engine: "399 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Naked Streetfighter",
    description: "A sharp-edged lightweight streetfighter known for its aggressive design, responsive performance and distinctive orange identity."
  },
  {
    brand: "KTM",
    name: "390 Adventure",
    slug: "390-adventure",
    engine: "399 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Adventure Tourer",
    description: "A compact adventure platform designed to bring accessible performance and touring versatility to riders looking beyond the city."
  },
  {
    brand: "KTM",
    name: "RC 390",
    slug: "rc-390",
    engine: "373 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Fully-faired Sport",
    description: "A track-inspired single-cylinder sport motorcycle with committed ergonomics, full fairing and a strong connection to KTM's racing identity."
  },
  {
    brand: "Yamaha",
    name: "R15",
    slug: "yamaha-r15",
    engine: "155 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Sport",
    description: "A lightweight sportbike that introduced many Indian riders to supersport-inspired design, liquid cooling and a high-revving engine character."
  },
  {
    brand: "Yamaha",
    name: "MT-15",
    slug: "mt-15",
    engine: "155 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Hyper Naked",
    description: "A compact naked motorcycle from Yamaha's MT family, built around an upright riding position and an aggressive street-focused design."
  },
  {
    brand: "Yamaha",
    name: "R3",
    slug: "yamaha-r3",
    engine: "321 cc",
    config: "Parallel twin",
    class: "Sport",
    description: "A lightweight twin-cylinder sportbike with a supersport-inspired silhouette and an approachable performance character."
  },
  {
    brand: "Suzuki",
    name: "Hayabusa",
    slug: "hayabusa",
    engine: "1340 cc",
    config: "Inline-four",
    class: "Hyperbike",
    description: "An icon of high-speed motorcycling. The Hayabusa became famous for its aerodynamic design and extraordinary straight-line performance."
  },
  {
    brand: "Kawasaki",
    name: "Ninja ZX-10R",
    slug: "ninja-zx10r",
    engine: "998 cc",
    config: "Inline-four",
    class: "Superbike",
    description: "A litre-class superbike developed with a strong connection to WorldSBK competition, combining aerodynamic design and track-focused engineering."
  },
  {
    brand: "BMW Motorrad",
    name: "S 1000 RR",
    slug: "bmw-s1000rr",
    engine: "999 cc",
    config: "Inline-four",
    class: "Superbike",
    description: "BMW Motorrad's high-performance superbike, recognised for its asymmetric design heritage, advanced electronics and racing-derived engineering."
  },
  {
    brand: "Aprilia",
    name: "RS 457",
    slug: "aprilia-rs457",
    engine: "457 cc",
    config: "Parallel twin",
    class: "Sport",
    description: "A modern lightweight sportbike carrying Aprilia's racing design language into the middleweight entry segment."
  },
  {
    brand: "Triumph",
    name: "Speed 400",
    slug: "triumph-speed-400",
    engine: "398 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Modern Roadster",
    description: "A modern roadster that brings Triumph's classic design cues into a compact, accessible motorcycle platform."
  },
  {
    brand: "Ducati",
    name: "Panigale V4",
    slug: "ducati-panigale-v4",
    engine: "1103 cc",
    config: "90-degree V4",
    class: "Superbike",
    description: "Ducati's flagship V4 superbike, bringing racing-derived aerodynamics, advanced electronics and Italian design into a road-going package."
  },
  {
    brand: "TVS",
    name: "Apache RTR 310",
    slug: "tvs-apache-rtr-310",
    engine: "312.12 cc",
    config: "Liquid-cooled single-cylinder",
    class: "Streetfighter",
    description: "A technology-focused naked motorcycle from TVS, with a distinctive design and a platform developed with performance in mind."
  },
  {
    brand: "Hero",
    name: "XPulse 200 4V",
    slug: "hero-xpulse-200-4v",
    engine: "199.6 cc",
    config: "Oil-cooled single-cylinder",
    class: "Dual Sport",
    description: "An accessible dual-sport motorcycle built around practical off-road ability, long-travel suspension and everyday usability."
  }
];

const machineGrid = document.querySelector("#machine-grid");
const archiveFilters = document.querySelector("#archive-filters");

function renderMachines(filter = "All") {
  if (!machineGrid) return;

  const filteredMachines = filter === "All"
    ? motorcycles
    : motorcycles.filter(bike => bike.brand === filter);

  machineGrid.innerHTML = filteredMachines.map(bike => {
    const index = motorcycles.indexOf(bike);

    return `
      <article class="machine-card" data-index="${index}">
        <button
          class="machine-open"
          type="button"
          aria-label="Explore ${bike.brand} ${bike.name}">

          <div class="machine-art">
            <img
              src="assets/sketches/${bike.slug}.webp"
              alt="${bike.brand} ${bike.name} technical illustration"
              loading="lazy"
              onerror="this.style.display='none'; this.parentElement.classList.add('sketch-missing');">

            <span class="machine-art-label">REDLINE ARCHIVE / ${String(index + 1).padStart(2, "0")}</span>
            <span class="machine-art-fallback">ILLUSTRATION<br>COMING SOON</span>
          </div>

          <div class="machine-info">
            <span class="machine-brand">${bike.brand}</span>
            <h3>${bike.name}</h3>
            <div class="machine-spec">
              <span>${bike.engine}</span>
              <span>${bike.class}</span>
            </div>
            <span class="machine-explore">EXPLORE MACHINE ↗</span>
          </div>
        </button>
      </article>
    `;
  }).join("");

  const count = document.querySelector("#machine-count");
  if (count) count.textContent = String(filteredMachines.length);

  machineGrid.querySelectorAll(".machine-card").forEach(card => {
    card.addEventListener("click", () => {
      const bike = motorcycles[Number(card.dataset.index)];
      openMachineDialog(bike);
    });
  });
}

if (archiveFilters) {
  archiveFilters.querySelectorAll("[data-brand]").forEach(button => {
    button.addEventListener("click", () => {
      archiveFilters.querySelectorAll("[data-brand]").forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderMachines(button.dataset.brand || "All");
    });
  });
}

renderMachines();


/* -----------------------------------------
   3. MOTORCYCLE DETAIL DIALOG
----------------------------------------- */

const machineDialog = document.querySelector("#machine-dialog");

function openMachineDialog(bike) {
  if (!machineDialog || !bike) return;

  const setText = (selector, value) => {
    const element = machineDialog.querySelector(selector);
    if (element) element.textContent = value;
  };

  setText("#dialog-brand", bike.brand);
  setText("#dialog-title", bike.name);
  setText("#dialog-engine", bike.engine);
  setText("#dialog-config", bike.config);
  setText("#dialog-class", bike.class);
  setText("#dialog-description", bike.description);

  const dialogImage = machineDialog.querySelector("#dialog-image");

  if (dialogImage) {
    dialogImage.src = `assets/sketches/${bike.slug}.webp`;
    dialogImage.alt = `${bike.brand} ${bike.name} technical illustration`;
    dialogImage.onerror = () => {
      dialogImage.style.display = "none";
    };
    dialogImage.onload = () => {
      dialogImage.style.display = "block";
    };
  }

  if (typeof machineDialog.showModal === "function") {
    machineDialog.showModal();
  } else {
    machineDialog.setAttribute("open", "");
  }
}

const dialogClose = document.querySelector("#dialog-close");

if (dialogClose) {
  dialogClose.addEventListener("click", () => {
    if (machineDialog && typeof machineDialog.close === "function") {
      machineDialog.close();
    } else if (machineDialog) {
      machineDialog.removeAttribute("open");
    }
  });
}

if (machineDialog) {
  machineDialog.addEventListener("click", event => {
    if (event.target === machineDialog) {
      machineDialog.close();
    }
  });
}


/* -----------------------------------------
   4. MANUFACTURER MARQUEE
----------------------------------------- */

const brandTrack = document.querySelector("#brand-track");

if (brandTrack && !brandTrack.dataset.cloned) {
  brandTrack.innerHTML += brandTrack.innerHTML;
  brandTrack.dataset.cloned = "true";
}


/* -----------------------------------------
   5. MOBILE NAVIGATION
----------------------------------------- */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });

  document.addEventListener("click", event => {
    if (
      navigation.classList.contains("open") &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}


/* -----------------------------------------
   6. FOOTER YEAR
----------------------------------------- */

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* -----------------------------------------
   7. NEWSLETTER DEMO
----------------------------------------- */

const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", event => {
    event.preventDefault();

    if (formMessage) {
      formMessage.textContent =
        "Demo only: no email was stored. Connect a mailing-list service before launch.";
    }
  });
}


/* -----------------------------------------
   8. SCROLL PROGRESS BAR
----------------------------------------- */

const progressBar = document.querySelector("#rl-progress");

function updateScrollProgress() {
  if (!progressBar) return;

  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollableHeight > 0
    ? (window.scrollY / scrollableHeight) * 100
    : 0;

  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();


/* -----------------------------------------
   9. SCROLL REVEAL ANIMATIONS
----------------------------------------- */

const revealElements = document.querySelectorAll(".rl-reveal");

if ("IntersectionObserver" in window && revealElements.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("is-visible");
  });
}


/* -----------------------------------------
   10. PAGE INTRO / LOADER
----------------------------------------- */

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");

  const loader = document.querySelector(".rl-loader");

  if (loader) {
    loader.classList.add("loader-finished");

    window.setTimeout(() => {
      loader.remove();
    }, 900);
  }
});


/* -----------------------------------------
   11. ACCESSIBILITY: ESCAPE CLOSES DIALOG
----------------------------------------- */

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && machineDialog?.open) {
    machineDialog.close();
  }
});


/* -----------------------------------------
   12. REDLINE CONSOLE SIGNATURE
----------------------------------------- */

console.log(
  "%c REDLINE PAGES ",
  "background:#c65b42;color:#fff;font-weight:800;padding:8px 12px;font-size:14px;"
);

console.log(
  "%c MACHINES. ROADS. STORIES. ",
  "color:#c65b42;font-weight:700;letter-spacing:3px;"
);
