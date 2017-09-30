import { EventEmitter } from 'events';

import dispatcher from "../dispatcher"

class ImageViewStore extends EventEmitter{
	constructor(){
		super()
		this.content = {'title': 'Enter title here', 
						'src': 'http://via.placeholder.com/1920x1080'};
	}
	getContent(){
		return this.content;
	}

	createTitle(title){
		this.content.title = title;
		this.emit("change")
	}

	createImage(src){
		this.content.src = src
		this.emit("change")
	}

	clearContent(){
		this.content.title = "";
		this.content.items = []
		this.content.src = null
		this.emit("change")
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TITLE":{
				this.createTitle(action.content.title)
				break;
			}
			
			case "CREATE_IMAGE":{
				this.createImage(action.content.src)
				break;
			}

			case "CLEAR_CONTENT":{
				this.clearContent()
				break;
			}
		}
	}
} 

const imageViewStore = new ImageViewStore;
dispatcher.register(imageViewStore.handleActions.bind(imageViewStore))
window.dispatcher = dispatcher
export default imageViewStore;