import {
	SEARCH_LOADING,
	SEARCH_GEOCODE,
	SEARCH_ADD,
	SEARCH_REMOVE,
	SEARCH_REVERSE_GEOCODE,
	SEARCH_FAILURE,
} from "./searchActions";

const initialState = {
	current: {
		latitude: 37.566,
		longitude: 126.978,
		roadAddress: "",
		alias: "",
	},
	recent: [],
}

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case SEARCH_GEOCODE:
			console.log('action', action);
			return {
				...state,
				current: {
					latitude: action.latitude,
					longitude: action.longitude,
					roadAddress: action.roadAddress,
					alias: action.alias,
				},
				isLoading: false,
			};
		case SEARCH_ADD:
			return {
				...state,
				recent: [
					...state.recent,
					{
						latitude: action.latitude,
						longitude: action.longitude,
						roadAddress: action.roadAddress,
						alias: action.alias,
					}
				]
			};
		case SEARCH_REMOVE:
			return {
				...state,
				recent: state.recent.filter((item, index) => index !== action.index)
			};
		case SEARCH_REVERSE_GEOCODE:
			return {
				...state,
				current: {
					latitude: action.latitude,
					longitude: action.longitude,
					roadAddress: action.roadAddress,
					alias: action.alias,
				},
				isLoading: false,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};