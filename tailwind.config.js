/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        xmed: "900px",
        lg: "1024px",
        "mar-tablet": "1200px",
        xl: "1280px",
        "2xl": "1536px",
        "mar-desktop":
          "2600px",
      },
      gridTemplateColumns: {
        "3-min-min": "repeat(3, min-content)",
        "3-fill-fill-min": "1fr 1fr min-content",
        "2-min-fill": "min-content 1fr",
        "2-fill-min": "1fr min-content",
        "2-max-auto": "max-content auto",
        "40-60": "2fr 3fr",
        "60-40": "3fr 2fr",
      },
    },
  },
  plugins: [],
};
