/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "hsl(263, 55%, 52%)",
        grayish_blue: "hsl(217, 19%, 35%)",
        blackish_blue: "hsl(219, 29%, 14%)",
        Light_gray: "hsl(0, 0%, 81%)",
        Light_grayish_blue: "hsl(210, 46%, 95%)",
      },
      
    },
  },
  plugins: [],
};
