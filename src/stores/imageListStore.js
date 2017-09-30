import { EventEmitter } from 'events';

import dispatcher from "../dispatcher"

class ImageListStore extends EventEmitter{
	constructor(){
		super()
		this.content = {
			'title': 'Enter loser here', 
			'items': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						'Fusce rutrum lectus non tortor fringilla molestie.'],
			'src': 'http://via.placeholder.com/1920x1080'
		}
	}
	getContent(){
		return this.content;
	}
	createContent(title,list,src){
		this.content.title = title;
		this.content.items = list
		this.content.src = src
		this.emit("change")
	}
	handleActions(action){
		// console.log("ImageListStore received an action", action)
		switch(action.type){
			case "CREATE_IMAGELIST":{
				this.createContent(action.content.title, action.content.list, action.content.src)
			}
		}
	}
} 

const imageListStore = new ImageListStore;
dispatcher.register(imageListStore.handleActions.bind(imageListStore))
export default imageListStore;