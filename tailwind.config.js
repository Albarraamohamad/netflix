module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "6rem",
    },
    extend: {
      screens: {
        xs: "430px", // Custom Extra Small screen (Mobile)
        sm: "640px", // Small screens (Tablets)
        md: "768px", // Medium screens (Larger Tablets)
        lg: "1024px", // Large screens (Laptops)
        xl: "1280px", // Extra Large screens (Desktops)
        lgl: "1536px", // Ultra Large screens (Big Monitors)
      },
    },
  },
  plugins: [],
};
