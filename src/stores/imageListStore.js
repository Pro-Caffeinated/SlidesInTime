import { EventEmitter } from 'events';

import dispatcher from '../dispatcher'

class ImageListStore extends EventEmitter{
	constructor(){
		super()
		this.content = {
			'title': 'Enter title here', 
			'items': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						'Fusce rutrum lectus non tortor fringilla molestie.'],
			'src': 'http://via.placeholder.com/1920x1080'
		}
	}
	getContent(){
		return this.content;
	}

	createTitle(title){
		this.content.title = title;
		this.emit('change')
	}

	updateList(item){
		this.content.items.push(item)
		this.emit('change')
	}

	createImage(src){
		this.content.src = src
		this.emit('change')
	}

	clearContent(){
		this.content.title = '';
		this.content.items = []
		this.content.src = null
		this.emit('change')
	}

	handleActions(action){
		switch(action.type){
			case 'CREATE_TITLE':{
				this.createTitle(action.content)
				break;
			}
			
			case 'CREATE_IMAGE':{
				this.createImage(action.content)
				break;
			}

			case 'UPDATE_LIST':{
				this.updateList(action.content)
				break;
			}

			case 'CLEAR_CONTENT':{
				this.clearContent()
				break;
			}
		}
	}
} 

const imageListStore = new ImageListStore;
dispatcher.register(imageListStore.handleActions.bind(imageListStore))
window.dispatcher = dispatcher
export default imageListStore;