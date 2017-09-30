import dispatcher from "../dispatcher";

export function createImageList(content){
	dispatcher.dispatch({
		type: "CREATE_IMAGELIST",
		content: content,
	});
}

export function clearImageList(){
	dispatcher.dispatch({
		type: "CLEAR_IMAGELIST"
	});
}