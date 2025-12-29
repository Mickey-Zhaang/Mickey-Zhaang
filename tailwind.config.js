import {
  baseColors,
  colors,
} from './portfolio/components/tools/color/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './portfolio/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
