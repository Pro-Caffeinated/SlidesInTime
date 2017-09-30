import React, { Component } from 'react';
import ImageListStore from '../stores/imageListStore';
import * as Actions from '../actions'

class ImageList extends Component{
	constructor() {
		super();
		this.state={
			content: ImageListStore.getContent()
		};
	}
	componentWillMount(){
		ImageListStore.on('change', () =>{
			this.setState({
				content: ImageListStore.getContent()
			})
		})
	}

	renderList() {
		return this.state.content.items.map(item => (
		    <li key={item} name={item}>{item}</li>
		  ));
	}

	render() {
		const { content } = this.state;
		let image = ''
		if (content.src != null){
			image = <img src={content['src']} />;
		}
		return (
			<div className='ImageList'>
				<h2>{content['title']}</h2>
				<hr/>
				<div className='TwoColumn'>
					<div className='ColumnLeft'>
						<ul>
							{this.renderList()}
						</ul>
					</div>
					<div className='ColumnRight'>
						<br/>
						{image}
					</div>
				</div>
			</div>
		)
	}
}

export default ImageList;