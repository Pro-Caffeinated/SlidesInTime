import React, { Component } from 'react';

class ListView extends Component{
	constructor() {
		super();
		this.state = {'title': 'Enter title here', 
					  'items': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					  			'Fusce rutrum lectus non tortor fringilla molestie.']};
	}

	renderList() {
		return this.state.items.map(item => (
		    <li key={item} name={item}>{item}</li>
		  ));
	}

	render() {
		return (
			<div className='ListView'>
				<h2>{this.state['title']}</h2>
				<hr/>
				<ul>
					{this.renderList()}
		    		<br/>
				</ul>
			</div>
		)
	}
}

export default ListView;