/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"], // Add index.html to content for PurgeCSS to detect classes in HTML files
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        dark: "#03031B",
        primary: "#63C796",
        firefly: "#0B1426",
        danger: "#FF2100",
        royalBlue: "#3D3DF4",
        haiti: "#08081F",
      },
      fontSize: {
        "custom-xl": "120px",
      },
      backgroundImage: {
        "white-gradient":
          "linear-gradient(to right, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.24) 100%)",
      },
      screens: {
        "custom-xs": { max: "374.98px" },
      },
    },
  },
  plugins: [],
};
