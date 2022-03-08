module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=bumblebee]"],
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
