import React, { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Switch, Route, useLocation } from 'react-router-dom'

export function Content() {
	const location = useLocation()
	const [displayLocation, setDisplayLocation] = useState(location)
	const [transitionStage, setTransistionStage] = useState('fadeIn')

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage('fadeOut')
	}, [location])

	return (
		<div
			key={location.key}
			className={`animate-${transitionStage}`}
			onAnimationEnd={() => {
				if (transitionStage === 'fadeOut') {
					setTransistionStage('fadeIn')
					setDisplayLocation(location)
				}
			}}
		>
			<Switch location={displayLocation}>
				<Route exact path='/' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/skills' component={Skills} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</div>
	)
}

const App = () => {

	return (
		<main className='relative lg:h-screen font-mulish text-gray-400 bg-gray-900 body-font overflow-x-hidden'>
			<Navbar />
			<Content />
		</main>
	)
}

export default App

// import React from 'react'
// import About from './components/About'
// import Contact from './components/Contact'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Skills from './components/Skills'
// import { Switch, Route } from 'react-router-dom'

// const App = () => {
// 	return (
// 		<main className='relative lg:h-screen font-mulish text-gray-400 bg-gray-900 body-font overflow-x-hidden'>
// 			<Navbar />
// 			<Switch>
// 				<Route exact path='/' component={About} />
// 				<Route path='/projects' component={Projects} />
// 				<Route path='/skills' component={Skills} />
// 				<Route path='/contact' component={Contact} />
// 			</Switch>
// 		</main>
// 	)
// }

// export default App
