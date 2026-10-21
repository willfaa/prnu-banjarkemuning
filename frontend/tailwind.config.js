/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        nu: {
          green: '#008744',
          deep: '#00562b',
          darker: '#002e17',
          tint: '#eaf5ee',
          soft: '#f2f9f4',
          gold: '#c59b27',
          goldLight: '#f5df8e',
          goldBg: '#fffbf0'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Amiri', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
