
const stories = [
  {
    category:"Machines",
    title:"The Royal Enfield Classic 350: An Indian Icon",
    excerpt:"From its origins and early production to the modern J-Series Classic. Explore the motorcycle's journey through history.",
    image:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/revamp/gallery/thumbnail/desktop/gallery_1.jpg",
    tag:"MOTORCYCLE HISTORY",
    read:"12 MIN READ",
    link:"articles/classic-350.html"
  },
  {
    category:"Machines",
    title:"The middleweight adventure question",
    excerpt:"What makes a motorcycle genuinely capable beyond the spec sheet? A look at the choices that shape the modern ADV.",
    image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    tag:"MACHINE NOTES",
    read:"6 MIN READ",
    link:"#"
  },
  {
    category:"Engineering",
    title:"Torque, power and the feel of an engine",
    excerpt:"Two numbers appear on every spec sheet. Here's what they mean on the road, and why neither tells the whole story.",
    image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    tag:"TECHNICAL EXPLAINER",
    read:"5 MIN READ",
    link:"#"
  },
  {
    category:"Touring",
    title:"The art of planning a long motorcycle ride",
    excerpt:"Distance is only one part of the plan. Think fuel, fatigue, weather, road conditions and the space to adapt.",
    image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    tag:"RIDE JOURNAL",
    read:"8 MIN READ",
    link:"#"
  },
  {
    category:"Industry",
    title:"Reading the Indian motorcycle market",
    excerpt:"A practical guide to understanding segments, positioning, pricing and the shifts worth watching.",
    image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    tag:"INDUSTRY WATCH",
    read:"7 MIN READ",
    link:"#"
  },
  {
    category:"Machines",
    title:"What makes a motorcycle touring-worthy?",
    excerpt:"Ergonomics, range, wind protection, luggage and service support: the details that matter after 300 kilometres.",
    image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    tag:"BUYER'S NOTE",
    read:"7 MIN READ",
    link:"#"
  },
  {
    category:"Engineering",
    title:"Suspension: the conversation between road and rider",
    excerpt:"A clear introduction to forks, shock absorbers, damping and why setup changes the ride.",
    image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    tag:"ENGINEERING",
    read:"6 MIN READ",
    link:"#"
  }
];

const grid = document.querySelector("#story-grid");

function renderStories(filter = "All") {
  const items = filter === "All"
    ? stories
    : stories.filter(s => s.category === filter);

  grid.innerHTML = items.map(s => `
    <article class="story-card">
      <div class="story-image"
        style="background-image:url('${s.image}')">
      </div>
      <div class="story-body">
        <div class="story-meta">${s.tag} &nbsp; / &nbsp; ${s.read}</div>
        <h3>${s.title}</h3>
        <p>${s.excerpt}</p>
        <a class="read-link" href="${s.link}">
          READ THE STORY ↗
        </a>
      </div>
    </article>
  `).join("");
}

renderStories();

document.querySelectorAll(".filter").forEach(btn =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b =>
      b.classList.remove("active")
    );
    btn.classList.add("active");
    renderStories(btn.dataset.filter);
  })
);

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

document.querySelector("#year").textContent =
  new Date().getFullYear();

document.querySelector("#newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#form-message").textContent =
    "Demo only: no email was stored. Connect a mailing-list service before launch.";
});
