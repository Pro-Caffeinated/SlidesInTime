import React, { Component } from 'react';
import '../css/style.css';
import { Link } from 'react-router'

class Start extends Component{
	constructor() {
		super()
	}
	render() {	
		return (
			<div className={'MainApp light'}>
				<div className={'SlideView dark'}>
					<div className={'SlideContent dark'}>
						<div className='TitleView'>
							<h1>Slides In Time</h1>
							<h3>Literally reading off the slides</h3>
							<Link to="slides/dark">Start</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Start;
