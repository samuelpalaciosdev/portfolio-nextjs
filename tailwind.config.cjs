// eslint-disable-next-line @typescript-eslint/no-var-requires
const headlessUi = require('@headlessui/tailwindcss');

/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [headlessUi],
};

module.exports = config;
