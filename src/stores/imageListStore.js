import { EventEmitter } from 'events';

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
} 

const imageListStore = new ImageListStore;
export default imageListStore;