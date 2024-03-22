/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
      body: ["Oswald"],
    },

    extend: {
      backgroundImage: {
        "Naftal-pattern": "url('/assets/bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },

  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
};
