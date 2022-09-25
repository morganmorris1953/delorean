import React, {
	useState,
	useEffect,
	Fragment
} from 'react';
import {
	useNavigate,
	NavLink,
	Link
} from 'react-router-dom'
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button
} from 'react-bootstrap';
import page from '../data/pages.json'
import "./AppNav.css"
import left from '../data/left.json'
import center from '../data/center.json'
import right from '../data/right.json'
import {
	Menu,
	Image,
	Icon
} from 'semantic-ui-react';

function AppNav(props) {
	const [navItems, setNavItems] = useState(page)
	const [leftNavItems, setLeftNavItems] = useState(left)
	const [centerNavItems, setCenterNavItems] = useState(center)
	const [rightNavItems, setRightNavItems] = useState(right)



	// router props
	const navigate = useNavigate()
	let toggle = 'underline'
	// handlers
	const handleNavClick = (page) => {
		if (page === 'home') {
			navigate(`/`)
		}
		else {
			navigate(`/pages/${page}`)
		}
	}


	const callFunctions = (navItemValue) => {
		handleNavClick(navItemValue)
	}



	return (

		// encompasses the entire navbar
		<div className='top-row' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%', height: '5%'}} >

			<div className='left-side' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', borderWidth: '5px', borderColor: 'white', fontColor: 'white', width: '33%', alignItems: 'bottom'}} >
				<Navbar className="bar" >

					<Nav style={{
						display: 'flex', justifyContent: 'space-around'
					}} > {
							leftNavItems.map((navItem, index) => {
								return (
									<Nav.Link style={{margin: '25px', color: 'white', textDecoration: 'none'}} key={index} onClick={() => callFunctions(navItem.value)} >
										{navItem.label}
									</Nav.Link>

								)
							})
						}
					</Nav>
				</ Navbar >
			</div>





			<div id='center' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', borderWidth: '5px', borderColor: 'white', fontColor: 'white', width: '33%', alignItems: 'bottom'}}>
				{/*  This still wants to make it look like 'localhost:3000/pages/www.twitter.com' */}

				<Navbar className="bar"  >
					<Nav style={{
						display: 'flex', justifyContent: 'space-around'
					}}> {
							centerNavItems.map((navItem, index) => {
								return (
									<Nav.Link style={{margin: '25px', color: 'white', textDecoration: 'none'}} key={index} onClick={() => callFunctions(navItem.value)} >
										{navItem.label}
									</Nav.Link>

								)
							})
						}
					</Nav>
				</ Navbar >
			</div>





			<div id='right-side' style={{width: '33%', display: 'flex', justifyContent: 'center'}}>
				<Navbar className="bar" style={{display: 'flex', flexDirection: 'row', color: 'white', borderWidth: '5px', borderColor: 'white', fontColor: 'white'}} >

					<Nav style={{
						display: 'flex', justifyContent: 'space-around'
					}}> {
							rightNavItems.map((navItem, index) => {
								return (
									<Nav.Link style={{margin: '25px', color: 'white', textDecoration: 'none'}} key={index} onClick={() => callFunctions(navItem.value)} >
										{navItem.label}
									</Nav.Link>

								)
							})
						}
					</Nav>
				</ Navbar >

			</div>
			<hr />
		</div >
	)

}

export default AppNav;
