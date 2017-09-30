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
	}

	render() {
		let theme = this.props.params.theme;
		let bgTheme = 'dark';
		if (theme == 'dark' || theme == 'blue' || theme == 'black'){
			bgTheme = 'light'
		}
		return (
			<div className={'MainApp ' + bgTheme}>
				<div className={'SlideView ' + theme}>
					<div className={'SlideContent ' + theme}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default App;
