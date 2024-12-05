module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"GT-Zirkon"', "sans-serif"], // Add your custom font
      },
      fontWeight: {
        thin: 100, // Ensure 'thin' weight is available
      },
    },
  },
  plugins: [],
};
