import { EventEmitter } from 'events';

import dispatcher from '../dispatcher'

class ListViewStore extends EventEmitter{
	constructor(){
		super()
		this.content = {'title': 'Enter title here', 
					  'items': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					  			'Fusce rutrum lectus non tortor fringilla molestie.']}
	}
	getContent(){
		return this.content;
	}

	createContent(title,list,src){
		this.content.title = title;
		this.content.items = list
		this.content.src = src
		this.emit('change')
	}

	createTitle(title){
		this.content.title = title;
		this.emit('change')
	}

	updateList(item){
		this.content.items.push(item)
		this.emit('change')
	}

	clearContent(){
		this.content.title = '';
		this.content.items = []
		this.emit('change')
	}

	handleActions(action){
		switch(action.type){
			case 'CREATE_TITLE':{
				this.createTitle(action.content.title)
				break;
			}

			case 'UPDATE_LIST':{
				this.updateList(action.content.item)
				break;
			}

			case 'CLEAR_CONTENT':{
				this.clearContent()
				break;
			}
		}
	}
} 

const listViewStore = new ListViewStore;
dispatcher.register(listViewStore.handleActions.bind(listViewStore))
window.dispatcher = dispatcher
export default listViewStore;