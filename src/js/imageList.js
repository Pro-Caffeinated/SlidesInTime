import React, { Component } from 'react';

class ImageList extends Component{
	constructor(props) {
		super(props);
		this.state = {'title': 'Enter title here', 
					  'items': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					  			'Fusce rutrum lectus non tortor fringilla molestie.'],
					  'src': 'http://via.placeholder.com/1920x1080'};
	}

	renderList() {
		return this.state.items.map(item => (
		    <li key={item} name={item}>{item}</li>
		  ));
	}

	render() {
		return (
			<div className='ImageList'>
				<h2>{this.state['title']}</h2>
				<hr/>
				<div className="TwoColumn">
					<div className='ColumnLeft'>
						<ul>
							{this.renderList()}
						</ul>
					</div>
					<div className='ColumnRight'>
						<br/>
						<img src={this.state['src']} />
					</div>
				</div>
			</div>
		)
	}
}

export default ImageList;