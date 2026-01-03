export const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How it's going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working hard.", isSent: true },
];

export const BASE_BACKEND_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";
