import React, { Component } from 'react';
import ImageViewStore from '../stores/ImageViewStore';
import * as Actions from '../actions'

class ImageView extends Component{
	constructor() {
		super();
		this.state = {
			content: ImageViewStore.getContent()
		};
	}

	componentWillMount(){
		ImageViewStore.on('change', () =>{
			this.setState({
				content: ImageViewStore.getContent()
			})
		})
	}

	render() {
		const { content } = this.state;
		let image = ''
		if (content.src != null){
			image = <img src={content['src']} />;
		}
		return (
			<div className='ImageView'>
				<h2>{content['title']}</h2>
				<hr/>
				<br/>
				{image}
			</div>
		)
	}
}

export default ImageView;