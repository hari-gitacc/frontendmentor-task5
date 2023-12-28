/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        dark: " url(./assets/images/bg-desktop-dark.jpg)",
        light: " url(./assets/images/bg-desktop-light.jpg)",
        check: "url(./assets/images/icon-check.svg)",
        gradcheck:"linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      },
      backgroundColor: {
        bottom: "#161722",
        primary: "#25273c",
      
      },
      
      fontFamily: {
        custom: "Josefin Sans",

      },
      colors: {
        primary: "#777a92",
        secondary: "#b0b2cb",
        shade: "#575971",
        litshade: "#6d7088"
      },
      boxShadow: {
        back: "rgba(13, 38, 76, 0.19) 0px 9px 20px"
    },
  },


},
  plugins: [],
};
