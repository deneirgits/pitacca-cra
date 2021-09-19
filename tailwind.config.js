module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "GoogleSansRegular",
      medium: "GoogleSansMedium",
      bold: "GoogleSansBold",
      italic: "GoogleSansItalic",
    },
    extend: {
      height: {
        17: "68px",
      },
      colors: {
        primary: "#80cbc4",
        primlight: "#e0f2f1",
        primdark: "#4db6ac",
        primtext: "#005644",
        primbg: "#f0fcfc",

        secondary: "#ffab91",
        seclight: "#fbe9e7",
        secdark: "#ff8a65",
        sectext: "#bf360c",
        secbg: "#fbe9e7",

        "rec-inc": "#66bb6a",
        "rec-dec": "#ef5350",

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
      boxShadow: {
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.5)",
        "t-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "t-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
