import React, { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { ViewGridAddIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import Modal from './Modal'

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
						<Link to='/' className='mr-5 hover:text-white'>
							About
						</Link>
						<Link to='/projects' className='mr-5 hover:text-white'>
							Past Works
						</Link>
						<Link to='/skills' className='mr-5 hover:text-white'>
							Skills
						</Link>
					</nav>
					<Link
						to='/contact'
						className='hidden md:inline-flex items-center py-1 px-3 mt-1 sm:mt-0 rounded bg-green-500 border-0 focus:outline-none hover:bg-green-600 text-white text-base'
					>
						Hire Me
						<ArrowRightIcon className='w-4 h-4 ml-1' />
					</Link>
					<div onClick={toggleModal} className=' md:hidden text-green-600'>
						<ViewGridAddIcon className='w-8 h-8 ml-1' />
					</div>
				</div>
			</header>
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