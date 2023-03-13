import { NavButton } from "../common/NavButton";
import { RoomList } from "./RoomList";
import { TreatmentList } from "./TreatmentList";
import { DUMMY_TEXT_SHORT, DUMMY_TEXT_LONG } from "../constants/constants";
import { treatmentIcon1, treatmentIcon2, treatmentIcon3 } from "../assets";

const treatments = [
  { name: "Biczowanie kablem od myszy", url: treatmentIcon2 },
  { name: "Masaż rozgrzanym monitorem", url: treatmentIcon3 },
  { name: "Kąpiel w gorącej kawie", url: treatmentIcon1 },
];

export function Home() {
  const div = document.createElement("div");

  // ==================== HERO SECTION ====================

  const hero = document.createElement("section");
  hero.classList.add("home-hero");

  const heroImage = document.createElement("img");
  heroImage.src = require("../assets/hero.jpg");

  const heroContainer = document.createElement("div");
  heroContainer.innerHTML = `
    <h1>The essence of health & vitality in one place</h1>
    <p>${DUMMY_TEXT_SHORT}</p>
  `;

  heroContainer.append(NavButton("Book a room", RoomList));
  heroContainer.append(NavButton("Book a treatment", TreatmentList));

  hero.append(heroImage);
  hero.append(heroContainer);

  // ==================== ABOUT SECTION ====================

  const about = document.createElement("section");
  about.classList.add("home-about");

  const aboutImage = document.createElement("img");
  aboutImage.src = require("../assets/home_about.jpg");

  const aboutContainer = document.createElement("div");
  aboutContainer.innerHTML = `
    <h2>Welcome to IT SPA</h2>
    <p>${DUMMY_TEXT_LONG}</p>
    `;
  aboutContainer.append(NavButton("Read more", RoomList));
  about.append(aboutImage);
  about.append(aboutContainer);

  // ==================== TREATMENTS SECTION ====================

  const treatmentsSection = document.createElement("section");
  treatmentsSection.classList.add("home-treatments");
  treatmentsSection.innerHTML = `
  <h2>Treatments Menu</h2>`;

  const treatmentsContainer = document.createElement("div");

  treatments.forEach((treatment) => {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = treatment.url;

    const p = document.createElement("p");
    p.innerHTML = treatment.name;

    div.append(img);
    div.append(p);

    treatmentsContainer.append(div);
  });

  treatmentsSection.append(treatmentsContainer);
  treatmentsSection.append(NavButton("See all treatments", TreatmentList));

  // ==================== ROOMS SECTION ====================
  const roomsSection = document.createElement("section");
  roomsSection.classList.add("home-rooms");

  const roomsImage = document.createElement("img");
  roomsImage.src = require("../assets/home-rooms.jpg");

  const roomsContainer = document.createElement("div");
  roomsContainer.innerHTML = `
    <h2>Luxury Suites</h2>
    <p>${DUMMY_TEXT_LONG}</p>
    `;
  roomsContainer.append(NavButton("See all rooms", RoomList));

  roomsSection.append(roomsImage);
  roomsSection.append(roomsContainer);

  // ========================================

  div.append(hero);
  div.append(about);
  div.append(treatmentsSection);
  div.append(roomsSection);

  return div;
}
