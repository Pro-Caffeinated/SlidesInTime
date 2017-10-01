import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './js/app';
import Start from './js/start';
import ImageList from './js/imageList';
import ImageView from './js/imageView';
import ListView from './js/listView';
import QuoteView from './js/quoteView';
import TitleView from './js/titleView';

const root = document.getElementById('root')
var lastPayload = ""
import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:8000');
socket.on('template', (payload) => {   
 	updateTemplate(payload);
});
function updateTemplate(payload) {
	var location = window.location.href;
	console.log(payload, location)
	var first = location.indexOf("slides")-1;
	var last = location.lastIndexOf("/")+1

	var ext = payload
	switch(payload){
		case 'image':{
			var lastItem = location.substring(last)
			console.log(lastItem)
			if(lastItem == "listView" && lastPayload != "next"){
				ext = "imageList"
			}
			else{
				ext = "imageView"
			}
			break;
		}
			
		case 'list':{
			ext = "listView"
			break;
		}

		case 'quote':{
			ext = "quoteView"
			break;
		}
	}
	if(payload != "next"){
		var newPath = location.substring(first, last)+ext;

		console.log(newPath)
		// browserHistory.push("/slides/dark/quoteView")
		browserHistory.replace(newPath)
	}
	lastPayload=payload
}
ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="slides" path="/slides/:theme/" component={App} ioSocket={socket}>
			<IndexRoute component={TitleView}></IndexRoute>
			<Route name="imageList" path="imageList" component={ImageList}></Route>
			<Route name="imageView" path="imageView" component={ImageView}></Route>
			<Route name="listView" path="listView" component={ListView}></Route>
			<Route name="quoteView" path="quoteView" component={QuoteView}></Route>
		</Route>
		<Route path="/" component={Start}></Route>
	</Router>, 
root);
