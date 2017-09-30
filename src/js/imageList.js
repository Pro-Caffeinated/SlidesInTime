import React, { Component } from 'react';
import ImageListStore from "../stores/imageListStore";
class ImageList extends Component{
	constructor(props) {
		super(props);
		this.state={
			content: ImageListStore.getContent()
		};
	}
	componentWillMount(){
		ImageListStore.on("change", () =>{
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
		return (
			<div className='ImageList'>
				<h2>{content["title"]}</h2>
				<hr/>
				<div className="TwoColumn">
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