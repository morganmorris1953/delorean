import React from 'react';
import service_dress from "../assets/CCT_MSgt_Delorean_Sheridan.jpg"
import couple_pic1 from "../assets/IMG_4892.jpeg"
import couple_pic2 from "../assets/IMG_6308.jpeg"
import mountain_pic from "../assets/mountain.jpeg"

const HomePage = () => {
	return (
		<div id='overall-container' style={{display: 'flex', flexDirection: 'column'}}>
			<div id='header' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '100px', marginBottom: '50px'}}>
			</div>

			<div id="main-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', maxWidth: '100%', overflow: 'hidden'}}>

				{/*<div id='first-picture' style={{width: '100%', height: '900px', display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundImage: `url(${couple_pic2})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
					{/* <img src={couple_pic2} alt='' width='80%' height='80%' /> 
				</div> */}

				<div id='banner-picture' style={{width: '100%', height: '900px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
					<img src={couple_pic2} alt='' style={{objectFit: 'cover', width: '90%', height: '800px'}}/>
				</div>



				<div id='left-side' style={{}}>
					<h2 style={{fontSize: '4.4em'}}>Meet Delorean Sheridan</h2>
					<h4>I’m running for County Board of Supervisors “Occoquan” District</h4>


				</div>

				<div id='bottom-two-pics' style={{display: 'flex', flexDirection: 'row'}}>

					<div id='left-picture' style={{margin: '100px', size: '650px'}}>
						<div>
							<img src={couple_pic1} alt='' style={{size: '650px'}} />
						</div>
					</div>

					<div id='right-picture' style={{margin: '100px'}}>
						<div>
							<img src={mountain_pic} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}


export default HomePage;
