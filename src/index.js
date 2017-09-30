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

ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="slides" path="/slides/:theme" component={App}>
			<IndexRoute component={ImageList}></IndexRoute>
			<Route name="imageList" path="imageList" component={ImageList}></Route>
			<Route path="imageView" component={ImageView}></Route>
			<Route path="listView" component={ListView}></Route>
			<Route path="quoteView" component={QuoteView}></Route>
		</Route>
		<Route path="/" component={Start}></Route>
	</Router>, 
root);
