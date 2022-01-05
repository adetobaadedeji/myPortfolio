import React from 'react'
import { BadgeCheckIcon, CodeIcon } from '@heroicons/react/solid'
import { projects } from '../data'

const Projects = () => {
	return (
		<section
			id='projects'
			className='md:h-(screen-16) text-gray-400 bg-gray-900 body-font p-4 md:p-0 animate-fadeIn'
		>
			<div className='container flex flex-col items-center px-3 py-10 mx-auto text-center'>
				<div className='flex flex-col w-full mb-8'>
					<CodeIcon className='mx-auto inline-block w-10 mb-4' />
					<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
						My Projects
					</h1>
				</div>
				<div className='flex flex-col items-center max-w-lg lg:max-w-none -mt-4 lg:-mt-0'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='sm:w-9/12 xl:w-7/12 mx-auto mb-10 lg:mb-20 '
						>
							<div
								className={`flex flex-col lg:flex-row ${
									index % 2 === 0 && 'lg:flex-row-reverse'
								} relative `}
							>
								<div className='w-full p-4'>
									<img
										alt='gallery'
										className=' w-full h-full object-contain object-center'
										src={project.image}
									/>
								</div>

								<div className='flex flex-col w-full px-2 md:px-4 pt-4 pb-5 border-4 border-gray-800 bg-gray-900 '>
									<h1 className='title-font text-lg text-green-400 tracking-widest font-medium mb-3'>
										{project.title}
									</h1>
									<p className='leading-relaxed text-justify text-sm sm:text-base  tracking-wide'>
										{project.description}
									</p>
									<h2 className='tracking-widest text-lg title-font font-medium text-green-400 my-4'>
										Technologies Used
									</h2>
									<div className='flex flex-wrap mb-8'>
										{project.techs.map((tech) => (
											<div key={tech} className='pb-2 w-1/2'>
												<div className='flex items-center'>
													<BadgeCheckIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-2' />
													<span className='title-font text-sm sm:text-base  font-medium '>
														{tech}
													</span>
												</div>
											</div>
										))}
									</div>
									<div className='flex justify-center mt-auto'>
										<a
											href={project.link.live}
											target='_blank'
											rel='noreferrer'
											className='inline-flex text-white bg-green-500 border-0 py-1.5 px-3 sm:px-6 focus:outline-none hover:bg-green-600 rounded text-base sm:text-lg'
										>
											View Live
										</a>
										<a
											href={project.link.code}
											target='_blank'
											rel='noreferrer'
											className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-1.5 px-3  sm:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base sm:text-lg'
										>
											View Code
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects

// import { CodeIcon } from '@heroicons/react/solid'
// import React from 'react'
// import { projects } from '../data'

// const Projects = () => {
// 	return (
// 		<section
// 			id='projects'
// 			className='md:h-(screen-16) text-gray-400 bg-gray-900 body-font mb-10 md:mb-0 animate-fadeIn'
// 		>
// 			<div className='container px-5 py-10 mx-auto text-center lg:px-40'>
// 				<div className='flex flex-col w-full mb-8'>
// 					<CodeIcon className='mx-auto inline-block w-10 mb-4' />
// 					<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
// 						Apps I've Built
// 					</h1>
// 				</div>
// 				<div className='flex flex-wrap -m-4'>
// 					{projects.map((project) => (
// 						<a
// 							href={project.link}
// 							key={project.image}
// 							className='sm:w-1/2 w-100 p-4'
// 						>
// 							<div className='flex relative'>
// 								<img
// 									alt='gallery'
// 									className='absolute inset-0 w-full h-full object-cover object-center'
// 									src={project.image}
// 								/>
// 								<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
// 									<h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
// 										{project.subtitle}
// 									</h2>
// 									<h1 className='title-font text-lg font-medium text-white mb-3'>
// 										{project.title}
// 									</h1>
// 									<p className='leading-relaxed'>{project.description}</p>
// 								</div>
// 							</div>
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default Projects
