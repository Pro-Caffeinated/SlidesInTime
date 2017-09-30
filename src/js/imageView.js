import React, { Component } from 'react';

class ImageView extends Component{
	constructor() {
		super();
		this.state = {'title': 'Enter title here', 'src': 'http://via.placeholder.com/1920x1080'};
	}

	render() {
		return (
			<div className='ImageView'>
				<h2>{this.state['title']}</h2>
				<hr/>
				<br/>
				<img src={this.state['src']} />
			</div>
		)
	}
}

export default ImageView;