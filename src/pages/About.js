import React from 'react';

const About = () => {
	return (
		<div id='overall-container' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
			< div id='header' style={{
				display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '100px', marginBottom: '50px'
			}}>
			</div >

			<div id="main-body" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
				<div id='left-side' style={{margin: '100px'}}>
					<h2 style={{fontSize: '4.4em'}}>Let's talk about Delorean.</h2>
					<h4>He's a good dude.</h4>


				</div>
				<div id='right-side' style={{margin: '100px'}}>
					<div>
					</div>
				</div>
			</div>
		</div >

	)
}


export default About;
