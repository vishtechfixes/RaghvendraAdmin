// ============================================================
//  shared/constants.js — Shri Raghvendra Sweets
//  Admin aur Customer DONO mein yeh same file rakho
// ============================================================

export const SHOP = {
  id:           "raghvendra-sweets",
  name:         "Shri Raghvendra Sweets",
  tagline:      "Meetha Khao, Khush Raho!",
  location:     "Balnath Nagar, Jaipur",
  logoEmoji:    "🪄",
  primaryColor: "#8B0000",
  accentColor:  "#FFD700",

  whatsapp:     "919929013680",
  instagram:    "",
  zomato:       "",
  googleReview: "https://maps.app.goo.gl/w8mk2qrZWuEFs1Xp7",
  appLink:      "https://raghvendra.vishtechfixes.com",
};

// ── ADMIN ──────────────────────────────────────────────────
export const ADMIN = {
  defaultPassword: "rs2025",
};

// ── POINTS CONFIG ───────────────────────────────────────────
export const POINTS = {
  welcome:       200,
  perVisit:      5,
  instagram:     25,
  googleReview:  30,
  whatsapp:      20,
  zomato:        20,
};

// ── OFFER DEFAULTS ──────────────────────────────────────────
export const DEFAULTS = {
  welcomeDiscPct:  10,
  visitGoal:       5,
  visitReward:     "FREE Mithai 250g",
  refSteps:        [50, 120, 200],
  winbackDays:     30,
  lowStockAlert:   5,
  billPointsMsg:   true,
};

// ── COUPON PREFIXES ─────────────────────────────────────────
export const COUPON = {
  welcome:  "RS",
  birthday: "RSBDAY",
  visit:    "RSVIS",
  special:  "RSSPEC",
};

// ── MENU CATEGORIES ─────────────────────────────────────────
export const CATEGORIES = [
  "Mithai",
  "Namkeen",
  "Fast Food",
  "Cold Drinks",
  "Gift Packs",
  "Snacks",
  "Sharbat & Lassi",
  "Seasonal Special",
];

// ── FIRESTORE COLLECTION NAMES ──────────────────────────────
export const COLLECTIONS = {
  users:    "users",
  bills:    "bills",
  menu:     "menu",
  settings: "settings",
  shop:     "shop",
  feedback: "feedback",
};

// ── LOCALSTORAGE KEYS (offline fallback) ────────────────────
export const LS = {
  users:    "rs_users",
  bills:    "rs_bills",
  menu:     "rs_menu",
  settings: "rs_settings",
  shop:     "rs_shop",
  feedback: "rs_feedback",
  theme:    "rs_theme",
  adminPw:  "rs_admin_pass",
  current:  "rs_current",
};















