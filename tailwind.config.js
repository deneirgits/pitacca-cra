module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "GoogleSansRegular",
      medium: "GoogleSansMedium",
      bold: "GoogleSansBold",
    },
    extend: {
      colors: {
        primary: "#80cbc4",
        primlight: "#b2fef7",
        primdark: "#4f9a94",
        primtext: "#263238",
        secondary: "#ff8a65",
        seclight: "#ffbb93",
        secdark: "#c75b39",
        sectext: "#fafafa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
