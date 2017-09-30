import React, { Component } from 'react';
import FaQuoteLeft from 'react-icons/lib/fa/quote-left';

class QuoteView extends Component{
	constructor() {
		super();
		this.state = {'quote': 'This is a sample quote'};
	}

	render() {
		return (
			<div className='QuoteView'>
				<h3><FaQuoteLeft/></h3>
				<h3>{this.state['quote']}</h3>
			</div>
		)
	}
}

export default QuoteView;