/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-50': '#D2D6DB',
        'primary-100': '#C6D4F1',
        'primary-200': '#A0B6EA',
        'primary-300': '#7896E4',
        'primary-400': '#4F73DF',
        'primary-500': '#254EDB',
        'primary-600': '#2145BF',
        'primary-700': '#1C3BA4',
        'primary-800': '#183188',
        'primary-900': '#13286D',
        'typography-50': '#D2D6DB',
        'typography-100': '#F7F7F7',
        'typography-200': '#F4F4F5',
        'typography-300': '#F4F4F5',
        'typography-400': '#A1A1AA',
        'typography-500': '#71717A',
        'typography-600': '#52525B',
        'typography-700': '#3F3F46',
        'typography-800': '#27272A',
        'typography-900': '#18181B',
      }
    },
  },
  plugins: [],
}

