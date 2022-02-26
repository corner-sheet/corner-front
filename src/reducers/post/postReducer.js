import {
	FETCH_POSTS,
	POST_LOADING,
	POST_FAILURE,
	ADD_PHOTOS,
	REMOVE_PHOTO,
	ADD_POST,
	REMOVE_POST,
	EDIT_POST,
} from "./postActions";
import { FIRST_OPEN } from "./checkFirstTimeActions";

const initialState = {
	posts: [],
	draft: {
		photos: [{
			fileName: "",
			fileSize: 0,
			height: 0,
			type: "",
			width: 0,
			uri: "",
		},],
		description: "",
	},
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
		case ADD_PHOTOS:
			if (state.draft.photos)
				return {
					...state,
					draft: {
						...state.draft,
						photos: [...state.draft.photos, ...action.photos],
					},
				};
		case REMOVE_PHOTO:
			return {
				...state,
				draft: {
					...state.draft,
					photos: state.draft.photos.filter(
						(photo, index) => index !== action.index
					),
				},
			};
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, action.post],
				draft: {
					image: [{
						fileName: "",
						fileSize: 0,
						height: 0,
						type: "",
						width: 0,
						uri: "",
					},],
					description: "",
				},
			};
		default:
			return state;
	}
};
