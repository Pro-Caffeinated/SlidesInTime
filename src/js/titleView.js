import React, { Component } from 'react';

class TitleView extends Component{
	constructor() {
		super();
		this.state = {'title': 'Enter title here', 'subTitle': 'Enter subtitle here'};
	}

	render() {
		return (
			<div className='TitleView'>
				<h1>{this.state['title']}</h1>
				<h3>{this.state['subTitle']}</h3>
			</div>
		)
	}
}

export default TitleView;