/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FC4747',
      'surface': '#10141E',
      'container': '#161D2F',
      'on-surface': '#FFFFFF',
      'on-container': '#FFFFFF',
      'on-container-variant': '#5A698F',
      'outline': '#5A698F',
      'error': '#FC4747',
    },
    extend: {},
  },
  plugins: [],
}

