/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        polly: "#001C30",
      },
      colors: {
        "font-primary": "#FFFFFF",
      },
      fontFamily: {
        body: ["Droid Sans Mono", "monospace"],
      },
    },
  },
  plugins: []
};
