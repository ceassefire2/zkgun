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
        scarlet: "#FF2100",
        royalBlue: "#3D3DF4",
        haiti: "#08081F",
        gold: "rgb(189 175 111);",
        whiteBlue: "#9a9aa4",
        mirage: "#1E2637",
        lightBlue: "#8F20EF",
        neonCarrot: "#FD9834",
        lightPink: "#AC3764",
        finn: "#5C2854",
        funBlue: "#1952A8",
        fireBush: "#E59E2B",
        racingGreen: "#0A140F",
        blackPearl: "#030621",
      },
      fontSize: {
        "custom-sm": "22px",
        "custom-2sm": "28px",
        "custom-md": "40px",
        "custom-2md": "52px",
        "custom-lg": "56px",
        "custom-xl": "100px",
        "custom-2xl": "120px",
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
        "scarlet-gradient":
          "linear-gradient(180deg, rgba(255, 33, 0, 0.00) -23.62%, #FF2100 55.73%)",
        "doucmentation": "linear-gradient(180deg, rgba(255, 33, 0, 0) -23.62%, #FF2100 55.73%)",
      },
      screens: {
        "custom-2xs": { max: "401.98px" },
        "custom-xs": { max: "374.98px" },
        "custom-sm": { max: "479.98px" },
        "custom-2xl": { min: "1536px" },
        "custom-3xl": { min: "1700px" },
      },
    },
  },
  plugins: [],
};
