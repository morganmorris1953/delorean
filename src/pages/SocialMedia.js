import React from 'react';



const SocialMedia = () => {
	return (
		<div id='overall-container' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
			<div id='header' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '100px', marginBottom: '50px'}}>
			</div>

			<div id="main-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', maxWidth: '100%', overflow: 'hidden'}}>
				<div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
					<img src='../assets/mountain.jpeg' alt='' width='100' height='100' />
					<h3>&nbsp; &nbsp; &nbsp; Instagram</h3>
				</div>
				<div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
					<img src='../assets/mountain.jpeg' alt='' width='100' height='100' />
					<h3>&nbsp; &nbsp; &nbsp; Facebook</h3>
				</div>
				<div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
					<img src='../assets/mountain.jpeg' alt='' width='100' height='100' />
					<h3>&nbsp; &nbsp; &nbsp; Twitter</h3>

				</div>
			</div>
		</div>


	)
}


export default SocialMedia;
