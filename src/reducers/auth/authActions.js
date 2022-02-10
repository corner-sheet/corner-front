import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTH_LOADING = 'AUTH_LOADING';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const EDIT_INFO = 'EDIT_INFO ';
export const UPLOAD_PROFILEPIC = 'UPLOAD_PROFILEPIC';

//Create dataStorage
const saveDataToStorage = (name, data) => {
	AsyncStorage.setItem(
		name,
		JSON.stringify({
			data,
		}),
	);
};

export const SignUp = (email, password) => {
	return async (dispatch) => {
		dispatch({
			type: AUTH_LOADING,
		});
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/user/register`, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({
						email,
						password,
					}),
				}),
			);
			if (!response.ok) {
				const errorResData = await response.json();
				dispatch({
					type: AUTH_FAILURE,
				});
				throw new Error(errorResData.err);
			}
			dispatch({
				type: SIGN_UP,
			});
		} catch (err) {
			throw err;
		}
	};
};

//Login
export const Login = (email, password) => {
	return async (dispatch) => {
		dispatch({
			type: AUTH_LOADING,
		});
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/user/login`, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({
						email,
						password,
					}),
				}),
			);
			if (!response.ok) {
				const errorResData = await response.json();
				dispatch({
					type: AUTH_FAILURE,
				});
				throw new Error(errorResData.err);
			}
			const resData = await response.json();
			saveDataToStorage('user', resData);
			dispatch({
				type: LOGIN,
				user: resData,
			});
		} catch (err) {
			throw err;
		}
	};
};

export const EditInfo = (name) => {
	return async (dispatch, getState) => {
		const user = getState().auth.user;
		dispatch({
			type: AUTH_LOADING,
		});
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/user/${user.userid}`, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					method: 'PATCH',
					body: JSON.stringify({
						name,
					}),
				}),
			);
			if (!response.ok) {
				const errorResData = await response.json();
				dispatch({
					type: AUTH_FAILURE,
				});
				Error(errorResData.err);
			}

			dispatch({
				type: EDIT_INFO,
				name
			});
		} catch (err) {
			throw err;
		}
	};
};

export const UploadProfilePic = (imageUri, filename, type) => {
	return async (dispatch, getState) => {
		dispatch({
			type: AUTH_LOADING,
		});
		const user = getState().auth.user;
		let formData = new FormData();
		// Infer the type of the image
		formData.append('profilePic', {
			uri: imageUri,
			name: filename,
			type,
		});
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/user/photo/${user.userid}`, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'multipart/form-data',
						'auth-token': user.token,
					},
					method: 'PATCH',
					body: formData,
				}),
			);
			if (!response.ok) {
				const errorResData = await response.json();
				dispatch({
					type: AUTH_FAILURE,
				});
				throw new Error(errorResData.err);
			}

			dispatch({
				type: UPLOAD_PROFILEPIC,
				profilePic: imageUri,
			});
		} catch (err) {
			throw err;
		}
	};
};

//Logout
export const Logout = () => {
	return (dispatch) => {
		AsyncStorage.removeItem('user');
		dispatch({
			type: LOGOUT,
			user: {},
		});
	};
};