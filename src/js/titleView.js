import React, { Component } from 'react';
import TitleViewStore from '../stores/titleViewStore';
import * as Actions from '../actions'

class TitleView extends Component{
	constructor() {
		super();
		this.state={
			content: TitleViewStore.getContent()
		};
	}

	componentWillMount(){
		TitleViewStore.on('change', () =>{
			this.setState({
				content: TitleViewStore.getContent()
			})
		})
	}

	render() {
		const { content } = this.state;
		return (
			<div className='TitleView'>
				<h1>{content['title']}</h1>
				<h3>{content['subTitle']}</h3>
			</div>
		)
	}
}

export default TitleView;