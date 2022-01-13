export const projects = [
	{
		title: 'Audiophile',
		subtitle: 'React Project',
		description:
			"This is a multipage e-commerce project challenge from frontendmentor.io. It's an interactive and responsive on multiple devices. Some of it's features include: Add, Edit, and Remove products from cart. Total amount of Cart Items are calculated, together with shipping fee and VAT. Form fields are validated in checkout. Order confirmation after checkout, with order an summary. Cart is also persisted after refreshing the browser.",
		image: './audiophile.png',
		link: {
			live: 'https://audiophile-gadgets.vercel.app/',
			code: 'https://github.com/adetobaadedeji/audiophile',
		},
		techs: [
			// 'React',
			// 'React Hooks',
			// 'Firebase',
			// 'Redux Toolkit',
			// 'Yup',
			// 'React Router',
			// 'React Hook Form',
			// 'Styled-Component',
			// 'Redux-Persist',

			'React',
			'React Hooks',
			// 'Firebase',
			'Redux Toolkit',
			'Yup',
			'React Router',
			'Redux-Persist',
			'React Hook Form',
			'Styled-Component',
		],
	},
	{
		title: 'Would You Rather',
		subtitle: 'React Project',
		description:
			'Would You Rather is a polling game that presents the user with a series of questions that can be answered one of two ways. The user can post questions and also vote on questions posted by other users. There is also a leaderboard to show users with the highest scores. This project is the second prerequisite project for the completion of the Udacity React Nanodegree Program. This project is to solidify the understanding of students on Redux as a state management tool. Other features include Login and Logout functionalities, Protected route to deny unauthorized user.',
		image: './would-you.png',
		link: {
			live: 'https://would-you-rather-this-or-that.vercel.app/',
			code: 'https://github.com/adetobaadedeji/would-you-rather',
		},
		techs: ['React', 'React-Router', 'Redux', 'Redux-Thunk', 'Tailwind'],
	},
	{
		title: 'WindBnb',
		subtitle: 'React Project',
		description:
			'This is a frontend project challenge from devchallenges.io. This project requires to list apartments from a given data and be able to filter available apartment(s) based on location and number of guests. This project helped sharpened my State Management skill in React using React Hooks and Context API.',
		image: './wind.png',
		link: {
			live: 'https://adetobaadedeji.github.io/windbnb/',
			code: 'https://github.com/adetobaadedeji/windbnb',
		},
		techs: ['React', 'SCSS', 'React Hooks', 'Context API'],
	},

	{
		title: 'My Reads',
		subtitle: 'React Project',
		description:
			'This project is a bookshelf (Cataloguing) App that allows user to select and categorize books they have read, are currently reading, or want to read. Key feature is, information is persisted between page refreshes; when the browser is refreshed, the same information is displayed on the page in other to keep track of books a user have read, currently reading and want to read. This project is one of the prerequisite projects for the completion of the Udacity React Nanodegree Program. This project was to test my understanding of State Management in React',
		image: './reads.png',
		link: {
			live: 'https://adetobaadedeji.github.io/myReads/#/',
			code: 'https://github.com/adetobaadedeji/myReads',
		},
		techs: ['React', 'React-Router'],
	},
	{
		title: 'SendFreight',
		subtitle: 'React Project',
		description:
			'This is a UI design implementation project I took as a test for sendfreight frontend Internship position. This is responsive on all devices and was built with first-mobile approach.',
		image: './freight.png',
		link: {
			live: 'https://adetoba-sendfreight.netlify.app/',
			code: 'https://github.com/adetobaadedeji/sendFreight',
		},
		techs: ['React', 'Tailwind', 'Headless UI'],
	},
	{
		title: 'Tip Calculator',
		subtitle: 'React Project',
		description:
			'This is a project from frontendmentor.io. The Tip Calculator calculates tip amount for various percentages of the cost of service, and also provides a total amount that includes the tip. It also includes the ability to split the cost between any number of people.',
		image: './tip.png',
		link: {
			live: 'https://adetoba-tips-calculator.netlify.app/',
			code: 'https://github.com/adetobaadedeji/tips-calculator',
		},
		techs: ['React', 'React Hooks', 'Tailwind'],
	},
]

export const skills = [
	'JavaScript',
	'React',
	'Redux (Redux ToolKit)',
	'Next.js',
	'TypeScript',
	'Firebase',
	'SCSS (Sass)',
	'Styled Components',
	'Tailwind',
	'Material UI',
]
