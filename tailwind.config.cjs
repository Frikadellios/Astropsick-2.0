const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
				blob: 'blob 10s infinite',
				border: 'background ease infinite',
			},
			keyframes: {
				background: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				blob: {
				  '0%, 100%': {
					transform: 'translate(0, 0) scale(1)',
				  },
				  '25%': {
					transform: 'translate(20px, -50px) scale(1.1)',
				  },
				  '50%': {
					transform: 'translate(0, 20px) scale(1)',
				  },
				  '75%': {
					transform: 'translate(-20px, -15px) scale(0.9)',
				  },
				},
				
			  },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [nextui()],
};