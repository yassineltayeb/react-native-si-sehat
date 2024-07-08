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
        'gray-50': '#D2D6DB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D2D6DB',
        'gray-400': '#9DA4AE',
        'gray-500': '#6C737F',
        'gray-600': '#4D5761',
        'gray-700': '#384250',
        'gray-800': '#1F2A37',
        'gray-900': '#111927',
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
        'dark': '#020E22',
        'dark-50': '#D2D6DB',
        'dark-100': '#F2F4F7',
        'dark-200': '#E4E7EC',
        'dark-300': '#D0D5DD',
        'dark-400': '#98A2B3',
        'dark-500': '#667085',
        'dark-600': '#344054',
        'dark-700': '#344054',
        'dark-800': '#1D2939',
        'dark-900': '#101828',
      }
    },
  },
  plugins: [],
}

