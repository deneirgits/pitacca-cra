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
        primtext: "#004d40",
        primbg: "#e0f2f1",
        primselected: "#4db6ac",

        secondary: "#ffab91",
        seclight: "#ffddc1",
        secdark: "#c97b63",
        sectext: "#bf360c",
        secgb: "#fbe9e7",
        secselected: "#ff8a65",

        "acc-red": "#ef9a9a",
        "acc-pink": "#f48fb1",
        "acc-purple": "#ce93d8",
        "acc-deep-purple": "#b39ddb",
        "acc-indigo": "#9fa8da",
        "acc-blue": "#90caf9",
        "acc-light-blue": "#81d4fa",
        "acc-cyan": "#81d4fa",
        "acc-teal": "#80cbc4",
        "acc-green": "#a5d6a7",
        "acc-light-green": "#c5e1a5",
        "acc-lime": "#e6ee9c",
        "acc-yellow": "#fff59d",
        "acc-amber": "#ffe082",
        "acc-orange": "#ffcc80",
        "acc-deep-orange": "#ffab91",
        "acc-brown": "#bcaaa4",
        "acc-grey": "#eeeeee",
        "acc-blue-grey": "#b0bec5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
