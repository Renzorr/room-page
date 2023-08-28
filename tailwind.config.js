/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "san-serif"],
    },

    screens: {
      xl: { max: "1453px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "820px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      height: {
        custom: "calc(100% - 535px)",
      },
      gridTemplateColumns: {
        custom: "2fr 3fr 2fr",
      },
      fontSize: {
        sm: "15px",
        xl: "clamp(28px, 4cqw, 50px)",
      },
      colors: {
        gray: "#a1a1a1",
        "dark-gray": "#454545",
        overlay: "#00000080",
      },
    },
  },
  plugins: [],
};

// 1330
