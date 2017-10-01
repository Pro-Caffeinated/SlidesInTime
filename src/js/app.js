import React, { Component } from 'react';
import ImageList from './imageList.js';
import ImageView from './imageView.js';
import ListView from './listView.js';
import QuoteView from './quoteView.js';
import TitleView from './titleView.js';
import '../css/style.css';

import * as Actions from '../actions';

// import socketIOClient from 'socket.io-client';
// const socket = socketIOClient('http://localhost:8000');

class App extends Component{
	constructor(props) {
		super(props);
		var socket = props.route.ioSocket
		this.firstSpeech = true
		socket.on('speech', (payload) => {   
	      this.updateSpeech(payload);
	    });
	    socket.on('template', (payload) => {   
	      this.updateTemplate(payload);
	    });
	    socket.on('image', (payload) => {   
	      this.updateSrc(payload);
	    });

	}

	updateSpeech(payload) {
		console.log(payload)
		if(this.firstSpeech == true){

			Actions.createTitle({title: payload})
			this.firstSpeech = false
		}else{
			Actions.createSubTitle({subTitle: payload})
			Actions.updateList({item: payload})
		}
	}
	updateTemplate(payload) {
		if(payload=="next"){
			Actions.clearContent()
			this.firstSpeech = true;
		}
	}
	updateSrc(payload) {
		console.log(payload)
	    Actions.createImage({src: payload})
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
