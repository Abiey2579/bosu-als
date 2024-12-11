import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        Headings: "League Spartan",
        "league-spartan": "League Spartan",
      },
      colors: {
        dominance: "#101727",
        success: "#ADFF14",
        shade: "#F5F5F5",
        wealth: "#F4A261",
        peace: "#FFFFFF",
      },
    },
  },
  plugins: [flowbite.content()],
};
