import {
	FETCH_LIKE,
	ADD_LIKE,
	REMOVE_LIKE,
	LIKE_LOADING,
	LIKE_FAILURE,
} from "./likeActions";

const initialState = {
	likeList: [],
	isLoading: false,
};
export const likeReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIKE_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case LIKE_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		case FETCH_LIKE:
			return {
				...state,
				likeList: action.likeList,
				isLoading: false,
			};
		case ADD_LIKE:
			const newItem = action.addItem;
			state.likeList.push(newItem);
			return {
				...state,
				isLoading: false,
			};
		case REMOVE_LIKE:
			const id = action.itemId;
			const newList = state.likeList.filter((item) => item._id !== id);
			return {
				...state,
				likeList: newList,
				isLoading: false,
			};
		default:
			return state;
	}
};