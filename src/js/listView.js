import React, { Component } from 'react';
import ListViewStore from '../stores/ListViewStore'
import * as Actions from '../actions'

class ListView extends Component{
	constructor() {
		super();
		this.state={
			content: ListViewStore.getContent()
		};
	}
	componentWillMount(){
		ListViewStore.on('change', () =>{
			this.setState({
				content: ListViewStore.getContent()
			})
		})
	}
	renderList() {
		return this.state.content.items.map((item, i) => (
		    <li key={i} name={item}>{item}</li>
		  ));
	}

	render() {
		const { content } = this.state;
		return (
			<div className='ListView'>
				<h2>{content['title']}</h2>
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