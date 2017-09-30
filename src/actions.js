import dispatcher from './dispatcher';

export function createTitle(content){
	console.log('def', content)
	dispatcher.dispatch({
		type: 'CREATE_TITLE',
		content: content.title,
	});
}

export function createSubTitle(content){
	dispatcher.dispatch({
		type: 'CREATE_SUBTITLE',
		content: content.subTitle,
	});
}

export function createImage(content){
	dispatcher.dispatch({
		type: 'CREATE_IMAGE',
		content: content.src,
	});
}

export function updateList(content){
	dispatcher.dispatch({
		type: 'UPDATE_LIST',
		content: content.item,
	});
}

export function createQuote(content){
	dispatcher.dispatch({
		type: 'CREATE_QUOTE',
		content: content.quote,
	});
}

export function clearContent(){
	dispatcher.dispatch({
		type: 'CLEAR_CONTENT',
		content: null,
	});
}