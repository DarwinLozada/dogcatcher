module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryGray: "#DDDDDD",
        primaryWhite: "#FFFCFC",
        softPink: "#F7D9D9",
        hardPink: "#EA2A69",
        redWine: "#A7224E",
        mediumPink: "#F25287",
        softBrown: "#E5D8D8",
        lightBrown: "#EFE7E7",
        primaryBlack: "#111010",
        darkBg: "#242222",
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
