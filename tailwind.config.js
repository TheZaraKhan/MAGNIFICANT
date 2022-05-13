module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      "gray-100": theme("colors.gray.100"),
      "gray-500": theme("colors.gray.500"),
      "gray-400": theme("colors.gray.400"),
      white: theme("colors.white"),
    }),
    fontFamily: {
      sans: ["Montserrat,Helvetica"],
      serif: ["Georgia"],
      mono: ["ui-monospace", "ui-monospace"],
    },
    extend: {
      backgroundImage: (theme) => ({
        head: "url('images/header2.jpg')",
        header: "url('images/header.jpg')",
        pebbled: "url('images/a.png')",
        store_link: "url('images/store-link.jpeg')",
        section: "url('images/section.png')",
      }),
      colors: {
        beige: "#F1E1D5",
        blush: "#DDBEBE",
        neutral: "#E7E6E4",
        nude: "#E1DDD9",
        neutral2: "#EBDACC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
