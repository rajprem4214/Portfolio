module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      allb: "#0b0c10",
      allgry: "#1f2833",
      lghtbl: "#66fcf1",
      lghtgry: "#c5c6c7",
      dimbl: "#45a29e",
      xx: "#e7dfdd",
    }),
    textColor: {
      allb: "#0b0c10",
      allgry: "#1f2833",
      lghtbl: "#66fcf1",
      lghtgry: "#c5c6c7",
      dimbl: "#45a29e",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
