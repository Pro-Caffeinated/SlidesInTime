import React, { Component } from 'react';
import ImageListStore from '../stores/imageListStore';
import * as ImageListAction from '../actions/imageListAction'

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
	create(){
		ImageListAction.createImageList({title:'Current Time',
										list:[Date.now(), Date.now()],
										src:'https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/DatesAndTimes/Art/iCal.png'})
	}
	renderList() {
		return this.state.content.items.map(item => (
		    <li key={item} name={item}>{item}</li>
		  ));
	}

	render() {
		const { content } = this.state;
		return (
			<div className='ImageList'>
				<button onClick={this.create.bind(this)}>Create!</button>
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
						<img src={content['src']} />
					</div>
				</div>
			</div>
		)
	}
}

export default ImageList;