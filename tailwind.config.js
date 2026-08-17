/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'lol-pink': "#FF3EB5", // 255,62,181
        'lol-purple': "#8B35FF",
        'lol-lightblue':'#00DCFF',
        'lol-lavender': '#9B85C0',
        'lol-blue': "#1E1435",
        'lol-darkblue': "#160F28",
        'lol-black': "#0D0A18"
      }
    },
    fontSize: {
      xs: "9px",
      sm: "12px",
      base: "14px",
      lg: "15px",
      xl: "18px",
      "2xl": "21px",
      "3xl": "32px",
      "4xl": "42px",
      "5xl": "64px",
    },
  },
  plugins: [],
  darkMode: 'class'
}