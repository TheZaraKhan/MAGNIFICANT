module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      "gray-400": theme("colors.gray.400"),
      "gray-500": theme("colors.gray.500"),
    }),
    extend: {
      backgroundImage: (theme) => ({
        hero1: "url('images/hero-1.png')",
        hero2: "url('images/hero-4.png')",
        hero3: "url('images/hero-3.png')",
        store_link: "url('images/store-link.jpeg')",
      }),
      colors: {
        blush: "#DDBEBE",
        neutral: "#E7E6E4",
        nude: "#E1DDD9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
