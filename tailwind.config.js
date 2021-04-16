module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryGray: "#DDDDDD",
        primaryWhite: "#F9F3F3",
        softPink: "#F7D9D9",
        hardPink: "#EA2A69",
        softBrown: "#E5D8D8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
