module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			vietnam: ['"Be Vietnam Pro"'],
			mulish: ['Mulish'],
		},
		extend: {
			height: {
				'(screen-16)': 'calc(100vh - 4rem)',
				'(screen-18)': 'calc(100vh - 3rem)',
				'(screen-20)': 'calc(100vh - 2rem)',
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in',
				fadeOut: 'fadeOut 0.5s ease-out',
				modalIn: 'modalIn 0.75s ease-in',
				modalOut: 'modalOut 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: '0', transform: 'translate(-30%, 0)' },
					to: { opacity: '1', transform: 'translate(0px, 0px)' },
				},
				fadeOut: {
					from: { opacity: '1', transform: 'translate(0px, 0px)' },
					to: { opacity: '0', transform: 'translate(30%, 0px)' },
				},
				modalIn: {
					from: { opacity: '0', transform: 'translateY(-100%, 0)' },
					to: { opacity: '1', transform: 'translateY(0px, 0px)' },
				},
				modalOut: {
					from: { opacity: '1', transform: 'translateY(0px, 0px)' },
					to: { opacity: '0', transform: 'translateY(100%, 0px)' },
				},
			},
			boxShadow: {
				box: '0 -1px 4px 0 rgba(0, 0, 0, 1.5)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
