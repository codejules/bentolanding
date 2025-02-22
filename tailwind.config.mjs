/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/home-background.webp')",
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
