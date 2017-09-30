import React, { Component } from 'react';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

class QuoteView extends Component{
	constructor(props) {
		super(props);
		this.state = {'quote': 'This is a sample quote'};
	}

	render() {
		return (
			<div className='QuoteView'>
				<h3><FaQuoteRight/></h3>
				<h3>{this.state['quote']}</h3>
			</div>
		)
	}
}

export default QuoteView;