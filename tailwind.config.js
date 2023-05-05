module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', 
  theme: {
    extend: {
      colors: {
        'oriental-pink': '#c3948d',
        'tuna': '#3b3a46',
        'downy': '#7bcbd3',
        'fedora': '#7d6d78',
        'mid-gray': '#63646c',
        'trendy-pink': '#8d669b',
        'don-juan': '#5d5354',
        'smoky': '#5f506e',
        'wisteria': '#9c64ac',
      },
    },
  },
  variants: {
    extend: {
      // Add any variants you need here
    },
  },
  plugins: [],
}
