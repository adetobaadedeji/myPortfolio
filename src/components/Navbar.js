import React, { useState } from 'react'
import { DownloadIcon } from '@heroicons/react/solid'
import { ViewGridAddIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
import Modal from './Modal'
import LinkedIn from '../logos/LinkedIn'
import Email from '../logos/Email'
import Twitter from '../logos/Twitter'

const Navbar = () => {
	const [modal, setModal] = useState(false)

	const toggleModal = () => setModal(!modal)

	return (
		<div className='relative z-20'>
			<header className='bg-gray-800 block fixed inset-x-0 bottom-0 md:sticky md:top-0 z-20 shadow-box md:shadow-none md:border-0 rounded-t-xl md:rounded-none'>
				<div className='container mx-auto flex flex-wrap justify-between p-2 sm:p-3 md:p-4 flex-row items-center'>
					<div className='title-font font-medium text-white'>
						<span className='ml-3 font-medium text-sm md:text-xl'>
							Adetoba Adedeji
						</span>
					</div>
					<nav className='hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	md:flex flex-wrap items-center text-base justify-center'>
						<NavLink
							to='/'
							exact
							activeClassName='text-white'
							className='mr-5 hover:text-white'
						>
							About
						</NavLink>
						<NavLink
							to='/projects'
							activeClassName='text-white'
							className='mr-5 hover:text-white'
						>
							Past Works
						</NavLink>
						<NavLink
							to='/skills'
							activeClassName='text-white'
							className='mr-5 hover:text-white'
						>
							Skills
						</NavLink>
						<NavLink
							to='/contact'
							activeClassName='text-white'
							className='mr-5 hover:text-white'
						>
							Contact
						</NavLink>
					</nav>
					<div className='hidden md:flex space-x-5 mr-4'>
						<a
							href='https://www.linkedin.com/in/adetoba-adedeji/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkedIn />
						</a>
						<a
							href='mailto:Adedeji006@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Email />
						</a>
						{/* <a
							href='https://www.linkedin.com/in/adetoba-adedeji/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Twitter />
						</a> */}
					</div>
					<a
						download
						href='/Resume-ADETOBA-ADEDEJI.pdf'
						className='hidden md:inline-flex items-center py-1 px-3 mt-1 ml-4 sm:mt-0 rounded bg-green-500 border-0 focus:outline-none hover:bg-green-600 text-white text-base animate-pulse'
					>
						Resume
						<DownloadIcon className='w-4 h-4 ml-1' />
					</a>

					<div onClick={toggleModal} className=' md:hidden text-green-600'>
						<ViewGridAddIcon className='w-8 h-8 ml-1' />
					</div>
				</div>
			</header>

			{/* mobile top nav */}
			<div className='flex fixed top-0 inset-x-0 mt-5 md:hidden z-50 '>
				<div className='flex space-x-3 mx-4'>
					<a
						href='https://www.linkedin.com/in/adetoba-adedeji/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<LinkedIn />
					</a>
					<a
						href='mailto:Adedeji006@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Email />
					</a>
					{/* <a
						href='https://www.linkedin.com/in/adetoba-adedeji/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Twitter />
					</a> */}
				</div>
				<a
					href='/Resume-ADETOBA-ADEDEJI.pdf'
					className='flex flex-row items-center ml-auto mr-5 py-1 px-3 rounded bg-green-500 border-0 focus:outline-none hover:bg-green-600 text-white text-sm animate-bounce'
				>
					<span>Resume</span>
					<DownloadIcon className='w-4 h-4 ml-1' />
				</a>
			</div>

			{/* mobile modal */}
			<div
				className={` ${
					modal ? 'block animate-modalIn' : 'hidden animate-modalOut'
				} block md:hidden fixed bottom-0 inset-x-0 w-full bg-gray-800 z-30 rounded-t-3xl`}
			>
				<Modal modal={modal} toggleModal={toggleModal} />
			</div>
		</div>
	)
}

export default Navbar
