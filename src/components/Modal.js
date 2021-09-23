import React from 'react'
import { Link } from 'react-router-dom'
import { MailOpenIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'
import { BriefcaseIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'

const Modal = ({ modal, toggleModal }) => {
	return (
		<div
			className={`${modal ? 'block animate-modalIn' : 'hidden animate-modalOut'} shadow-box rounded-t-3xl z-20`}
		>
			<div className='w-full grid grid-cols-2 gap-y-5 pt-5 '>
				<Link
					to='/'
					onClick={toggleModal}
					className='flex flex-col items-center mx-auto hover:opacity-50'
				>
					<UserIcon className='w-6 h-6 ml-1 text-green-600' />
					<h3 className='text-sm text-white'>About</h3>
				</Link>
				<Link
					to='/projects'
					onClick={toggleModal}
					className='flex flex-col items-center mx-auto hover:opacity-50'
				>
					<BriefcaseIcon className='w-6 h-6 ml-1 text-green-600' />
					<h3 className='text-sm text-white'>Portfolio</h3>
				</Link>
				<Link
					to='/skills'
					onClick={toggleModal}
					className='flex flex-col items-center mx-auto hover:opacity-50'
				>
					<CogIcon className='w-6 h-6 ml-1 text-green-600' />
					<h3 className='text-sm text-white '>Skills</h3>
				</Link>
				<Link
					to='/contact'
					onClick={toggleModal}
					className='flex flex-col items-center mx-auto hover:opacity-50'
				>
					<MailOpenIcon className='w-6 h-6 ml-1 text-green-600' />
					<h3 className='text-sm text-white'>Contact</h3>
				</Link>
			</div>
			<div className='w-full flex'>
				<XIcon
					onClick={toggleModal}
					className='w-6 h-6 ml-auto my-4 mr-5 text-gray-400'
				/>
			</div>
		</div>
	)
}

export default Modal
