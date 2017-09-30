import { EventEmitter } from 'events';

import dispatcher from '../dispatcher'

class QuoteViewStore extends EventEmitter{
	constructor(){
		super();
		this.content = {
			'quote': 'Enter quote here'
		};
	}

	getContent(){
		return this.content;
	}

	createQuote(quote){
		this.content.quote = quote;
		this.emit('change');
	}

	clearContent(){
		this.content.quote = '';
		this.emit('change');
	}

	handleActions(action){
		switch(action.type){
			case 'CREATE_QUOTE':{
				this.createQuote(action.content.quote)
				break;
			}

			case 'CLEAR_CONTENT':{
				this.clearContent()
				break;
			}
		}
	}
} 

const quoteViewStore = new QuoteViewStore;
dispatcher.register(quoteViewStore.handleActions.bind(quoteViewStore))
export default quoteViewStore;