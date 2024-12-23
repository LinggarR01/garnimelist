/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Primary and secondary color schemes
        primary: '#001A6E', // Example primary color (blue)
        secondary: '#181C14', // Example secondary color (green)
        background: '#f8f9fa', // Light background
        darkBackground: '#1a202c', // Dark background
        cardBackground: '#ffffff', // Light card background
        darkCardBackground: '#2d3748', // Dark card background
      },
    },
  },
  plugins: [],
}
