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
        "white-gradient-card":
          "linear-gradient(to right, rgba(255, 255, 255, 0) 0.18%, rgba(255, 255, 255, 0.08) 100.43%)",
        "primary-color-gradient":
          "linear-gradient(180deg, rgba(99, 199, 150, 0) -23.62%, #63C796 55.73%)",
        "primary-border-gradient":
          "linear-gradient(270deg, rgba(99, 199, 150, 0.0768) 0%, rgba(99, 199, 150, 0.32) 49.63%, rgba(99, 199, 150, 0.0768) 100%)",

      },
      screens: {
        "custom-xs": { max: "374.98px" },
      },
    },
  },
  plugins: [],
};
