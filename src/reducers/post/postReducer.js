import {
	FETCH_POSTS,
	POST_LOADING,
	POST_FAILURE,
} from "./postActions";
import { FIRST_OPEN } from "./checkFirstTimeActions";

const initialState = {
	posts: [],
	isFirstOpen: false,
	isLoading: false,
};
export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case POST_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		case FETCH_POSTS:
			return {
				...state,
				posts: [...action.posts],
				isLoading: false,
			};
		case FIRST_OPEN: {
			return {
				...state,
				isFirstOpen: true,
			};
		}
		default:
			return state;
	}
};
