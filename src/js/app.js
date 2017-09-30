import React, { Component } from 'react';
import ImageList from './imageList.js';
import ImageView from './imageView.js';
import ListView from './listView.js';
import QuoteView from './quoteView.js';
import TitleView from './titleView.js';
import '../css/style.css';

import * as Actions from '../actions';

import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:8000');

class App extends Component{
	constructor(props) {
		super(props);
		socket.on('news', (payload) => {   
	      this.updateCodeFromSockets(payload);
	    });
	}

	updateCodeFromSockets(payload) {
	    Actions.createTitle({title: payload})
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
