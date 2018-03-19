import { EventEmitter } from 'events';

import dispatcher from '../dispatcher'

class TitleViewStore extends EventEmitter{
	constructor(){
		super();
		this.content = {
			'title': 'Enter title here',
			'subTitle': 'Enter subtitle here'
		};
	}

	getContent(){
		return this.content;
	}

	createTitle(title){
		title = title.charAt(0).toUpperCase() + title.substr(1);
		console.log(title);
		this.content.title = title;
		this.emit('change');
	}

	createSubTitle(subTitle){
		subTitle = subTitle.charAt(0).toUpperCase() + subTitle.substr(1);
		console.log(subTitle);
		this.content.subTitle = subTitle;
		this.emit('change');
	}

	clearContent(){
		this.content.title = '';
		this.content.subTitle = '';
		this.emit('change');
	}

	handleActions(action){
		switch(action.type){
			case 'CREATE_TITLE':{
				this.createTitle(action.content)
				break;
			}

			case 'CREATE_SUBTITLE':{
				this.createSubTitle(action.content)
				break;
			}

			case 'CLEAR_CONTENT':{
				this.clearContent()
				break;
			}
		}
	}
} 

const titleViewStore = new TitleViewStore;
dispatcher.register(titleViewStore.handleActions.bind(titleViewStore))
export default titleViewStore;