import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
		<section
			id='about'
			className='h-(screen-16) bg-gray-900 mt-8 md:mt-0 animate-fadeIn'
		>
			<div className='container mx-auto flex px-5 py-5 md:px-12 md:py-16 md:max-h-full lg:flex-row flex-col justify-between items-center'>
				<div className='lg:w-1/2 lg:pr-4 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center'>
					<h1 className='title-font text-xl sm:text-2xl mb-2 font-medium text-white'>
						Hi, there!
						<br className='inline-block' /> You want to build amazing Apps ?
					</h1>
					<h2 className='text-xl sm:text-2xl  mb-2 font-medium text-green-400'>
						You've come to the right place.
					</h2>
					<p className='mb-8 text-sm sm:text-base xl:text-lg text-justify  leading-relaxed tracking-wide'>
						I'm <span className='text-white'> Adetoba Adedeji</span>, a creative
						and result-oriented developer with experience in web applications.
						My primary focus is on the frontend in other to build Apps that
						create greats experience for users. Responsive web design in
						software development is my favorite and as a result, I create
						responsive and interactive websites. My design approach follows the
						mobile-first principle so as to give access and create better
						experiences for all users irrespective of their devices. I love
						technology and I love to contribute to the tech world.
					</p>
					<div className='flex justify-center'>
						<Link
							to='/contact'
							href='#contact'
							className='inline-flex text-white bg-green-500 border-0 py-3 px-3 sm:px-6 focus:outline-none hover:bg-green-600 rounded text-base sm:text-lg'
						>
							Work With Me
						</Link>
						<Link
							to='/projects'
							href='#projects'
							className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-3 px-3  sm:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base sm:text-lg'
						>
							See My Past Works
						</Link>
					</div>
				</div>
				<div className='lg:pl-4 md:mt-10 md:w-3/5 w-4/6 sm:w-5/6 lg:w-1/2 animate-pulse'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src='./coding.svg'
					/>
				</div>
			</div>
		</section>
	)
}

export default About
