const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "320px", // new breakpoint for smallest phones
      },
    },
  },
};

