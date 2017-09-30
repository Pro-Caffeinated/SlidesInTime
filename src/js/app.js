import React, { Component } from 'react';
import ImageList from './imageList.js';
import ImageView from './imageView.js';
import ListView from './listView.js';
import QuoteView from './quoteView.js';
import TitleView from './titleView.js';
import '../css/style.css';

const Templates = [<ImageList/>, <ImageView/>, <ListView/>, <QuoteView/>, <TitleView/>]

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {'template': Templates[4], 'theme': 'dark'};
	}

	render() {
		let bgTheme = 'dark';
		if (this.state['theme'] == 'dark' || this.state['theme'] == 'blue' || this.state['theme'] == 'black'){
			bgTheme = 'light'
		}
		return (
			<div className={'MainApp ' + bgTheme}>
				<div className={'SlideView ' + this.state['theme']}>
					<div className={'SlideContent ' + this.state['theme']}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default App;
