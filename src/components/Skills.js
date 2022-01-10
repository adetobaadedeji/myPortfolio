import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'
import React from 'react'
import { skills } from '../data'

const Skills = () => {
	return (
		<section
			id='skills'
			className='h-full sm:h-(screen-16) bg-gray-900 mt-8 md:mt-0 mb-8 md:mb-0 animate-fadeIn'
		>
			<div className='container px-5 py-10 mx-auto'>
				<div className='text-center mb-10'>
					<ChipIcon className='w-10 inline-block mb-4' />
					<h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
						Skills &amp; Technologies
					</h1>
				</div>
				<div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
					{skills.map((skill) => (
						<div key={skill} className='p-2 sm:w-1/2 w-full'>
							<div className='bg-gray-800 rounded flex p-4 h-full items-center'>
								<BadgeCheckIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-4' />
								<span className='title-font font-medium text-white'>
									{skill}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
