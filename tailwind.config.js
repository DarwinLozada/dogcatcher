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
        mediumPink: "#F25287",
        softBrown: "#E5D8D8",
        lightBrown: "#EFE7E7",
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
      },

      borderRadius: {
        card: "10px",
      },

      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
