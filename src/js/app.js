import React, { Component } from 'react';
import ImageList from './imageList.js';
import ImageView from './imageView.js';
import ListView from './listView.js';
import QuoteView from './quoteView.js';
import TitleView from './titleView.js';
import '../css/style.css';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {'template': TitleView, 'theme': 'light'};
	}

	render() {
		let bgTheme = 'dark';
		if (this.state['theme'] == 'dark'){
			bgTheme = 'light'
		}
		return (
			<div className={'MainApp ' + bgTheme}>
				<div className={'SlideView ' + this.state['theme']}>
					<div className={'SlideContent ' + this.state['theme']}>
					<h1>Heading</h1>
					Body
					</div>
				</div>
			</div>
		)
	}
}

export default App;
