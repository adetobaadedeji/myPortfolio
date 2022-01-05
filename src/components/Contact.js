import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const formRef = useRef()
	const [done, setDone] = useState(false)
	const [formValues, setFormValues] = useState({
		name: '',
		subject: '',
		email: '',
		message: '',
	})

	const onChangeFormValues = (e) =>
		setFormValues({ ...formValues, [e.target.name]: e.target.value })

	useEffect(() => {
		setTimeout(function () {
			setDone(false)
		}, 5000)
	}, [])

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_opnz8zb',
				'template_hsoqk7q',
				formRef.current,
				'user_VtrmjHkwBS6z6fCEIrm4K'
			)
			.then(
				(result) => {
					console.log(result.text)
					setDone(true)
					setFormValues({ name: '', subject: '', email: '', message: '' })
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	// function encode(data) {
	// 	return Object.keys(data)
	// 		.map(
	// 			(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
	// 		)
	// 		.join('&')
	// }

	// function reset(){
	// 	setName('')
	// 	setEmail('')
	// 	setMessage('')
	// }

	// function handleSubmit(e) {
	// 	e.preventDefault()
	// 	fetch('https://formsubmit.co/adedeji006@gmail.com', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 		body: encode({ 'form-name': 'contact', name, email, message }),
	// 	})
	// 		.then(() => alert('Message sent!'))
	// 		.catch((error) => alert(error))

	// 		reset()
	// }

	return (
		<section
			id='contact'
			className='h-full sm:h-(screen-16) mb-12 md:mb-0 bg-gray-900 animate-fadeIn'
		>
			<div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
				<div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
					<iframe
						width='100%'
						height='100%'
						title='map'
						className='absolute inset-0'
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
						style={{ filter: 'opacity(0.7)' }}
						src='https://www.google.com/maps/embed/v1/place?q=ketu-Ikosi,+Lagos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
					/>
					<div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
						<div className='lg:w-1/2 px-6'>
							<h2 className='title-font font-medium text-white tracking-widest text-xs'>
								ADDRESS
							</h2>
							<address className='mt-1'>
								Ikosi-Ketu <br />
								Lagos State, Nigeria
							</address>
						</div>
						<div className='lg:w-1/2 px-6 mt-4 lg:mt-0 space-y-2'>
							<h2 className='title-font font-medium text-white tracking-widest text-xs'>
								EMAIL
								<p className='text-gray-400 leading-relaxed text-sm'>
									adedeji006@gmail.com
								</p>
							</h2>
							<h2 className='title-font font-medium text-white tracking-widest text-xs mt-4'>
								PHONE
								<p className='leading-relaxed text-gray-400'>
									+234-706-393-5898
								</p>
							</h2>
							<a
								href='https://www.linkedin.com/in/adetoba-adedeji/'
								target='_blank'
								rel='noopener noreferrer'
								className='title-font font-medium text-indigo-500 tracking-widest text-sm cursor-pointer'
							>
								LinkedIn
								<p className='leading-relaxed text-gray-400'>Adetoba Adedeji</p>
							</a>
							<a
								href='https://github.com/adetobaadedeji/'
								target='_blank'
								rel='noopener noreferrer'
								className='title-font font-medium text-indigo-500 tracking-widest text-sm mt-4 cursor-pointer'
							>
								GitHub
								<p className='leading-relaxed text-gray-400'>Adetoba Adedeji</p>
							</a>
						</div>
					</div>
				</div>
				<form
					netlify='true'
					name='contact'
					ref={formRef}
					onSubmit={sendEmail}
					className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full  mt-8 md:mt-0'
				>
					<h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
						Hire Me
					</h2>
					<p className='leading-relaxed mb-5'>
						Kindly fill and submit the form if you would like to work with me.
						Thanks
					</p>
					<div className='relative mb-4'>
						<label htmlFor='name' className='leading-7 text-sm text-gray-400'>
							Name
						</label>
						<input
							required
							type='text'
							id='name'
							name='name'
							value={formValues.name}
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={onChangeFormValues}
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='subject'
							className='leading-7 text-sm text-gray-400'
						>
							Subject
						</label>
						<input
							required
							type='text'
							id='subject'
							value={formValues.subject}
							name='subject'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={onChangeFormValues}
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='email' className='leading-7 text-sm text-gray-400'>
							Email
						</label>
						<input
							required
							type='email'
							id='email'
							name='email'
							value={formValues.email}
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={onChangeFormValues}
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-400'
						>
							Message
						</label>
						<textarea
							required
							id='message'
							value={formValues.message}
							name='message'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
							onChange={onChangeFormValues}
						/>
					</div>
					<button
						type='submit'
						className='text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg'
					>
						Submit
					</button>
					{done ? (
						<p
							className={`${
								done ? 'flex' : 'hidden'
							} w-40 mt-5 bg-white font-medium text-green-600 p-3 text-base rounded animate-bounce`}
						>
							{' '}
							Thank you...{' '}
						</p>
					) : (
						<p></p>
					)}
				</form>
			</div>
		</section>
	)
}

export default Contact
