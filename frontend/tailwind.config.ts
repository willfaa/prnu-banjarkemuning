import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-amiri)', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};

export default config;

