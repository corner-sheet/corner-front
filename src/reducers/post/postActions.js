import { API_URL } from "../../utils/Config";
import { timeoutPromise } from "../../utils/Tools";
export const FETCH_POSTS = "FETCH_POSTS";
export const POST_LOADING = "POST_LOADING";
export const POST_FAILURE = "POST_FAILURE";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchPost = () => {
	return async (dispatch, getState) => {
		const user = getState().auth.user;
		if (user.userid != undefined) {
			dispatch({
				type: POST_LOADING,
			});
			try {
				const response = await timeoutPromise(
					fetch(`${API_URL}/postList`, {
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						method: "GET",
					})
				);
				if (!response.ok) {
					dispatch({
						type: POST_FAILURE,
					});
					throw new Error("게시글 불러오기를 실패했습니다.");
				}
				const resData = await response.json();

				dispatch({
					type: FETCH_POSTS,
					postList: resData,
				});
			} catch (err) {
				throw err;
			}
		}
		return;
	};
};
//Add post
export const addPost = (item) => {
	return async (dispatch, getState) => {
		dispatch({
			type: POST_LOADING,
		});
		const user = getState().auth.user;
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/postList/post`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify({
						userId: user.userid,
						items: [
							{
								item: item._id,
							},
						],
					}),
				})
			);
			if (!response.ok) {
				dispatch({
					type: POST_FAILURE,
				});
				throw new Error("게시글 작성하기를 실패했습니다.");
			}
			dispatch({
				type: ADD_POST,
				addItem: item,
			});
		} catch (err) {
			throw err;
		}
	};
};
export const removePost = (id) => {
	return async (dispatch, getState) => {
		dispatch({
			type: POST_LOADING,
		});
		const user = getState().auth.user;
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/postList/${user.userid}`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					method: "PATCH",
					body: JSON.stringify({
						item: id,
					}),
				})
			);
			if (!response.ok) {
				dispatch({
					type: POST_FAILURE,
				});
				throw new Error("게시글 삭제하기를 실패했습니다.");
			}
			dispatch({
				type: REMOVE_POST,
				itemId: id,
			});
		} catch (err) {
			throw err;
		}
	};
};