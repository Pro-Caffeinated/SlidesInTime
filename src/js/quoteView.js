import React, { Component } from 'react';
import QuoteViewStore from '../stores/quoteViewStore';
import FaQuoteLeft from 'react-icons/lib/fa/quote-left';

class QuoteView extends Component{
	constructor() {
		super();
		this.state={
			content: QuoteViewStore.getContent()
		};
	}

	componentWillMount(){
		QuoteViewStore.on('change', () =>{
			this.setState({
				content: QuoteViewStore.getContent()
			})
		})
	}

	render() {
		const { content } = this.state;
		return (
			<div className='QuoteView'>
				<h3><FaQuoteLeft/></h3>
				<h3>{content['quote']}</h3>
			</div>
		)
	}
}

export default QuoteView;