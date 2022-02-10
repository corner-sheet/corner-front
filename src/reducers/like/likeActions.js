import { API_URL } from "../../utils/Config";
import { timeoutPromise } from "../../utils/Tools";
export const LIKE_LOADING = "LIKE_LOADING";
export const LIKE_FAILURE = "LIKE_FAILURE";
export const FETCH_LIKE = "FETCH_LIKE";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const fetchLike = () => {
	return async (dispatch, getState) => {
		const user = getState().auth.user;
		if (user.userid != undefined) {
			dispatch({
				type: LIKE_LOADING,
			});
			try {
				const response = await timeoutPromise(
					fetch(`${API_URL}/likeList`, {
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						method: "GET",
					})
				);
				if (!response.ok) {
					dispatch({
						type: LIKE_FAILURE,
					});
					throw new Error("좋아요 불러오기를 실패했습니다.");
				}
				const resData = await response.json();

				const filterUserlike = resData.content.filter(
					(userlike) => userlike.userId === user.userid
				);
				let items = [];
				if (filterUserlike.length > 0) {
					items = filterUserlike[0].items;
				}
				dispatch({
					type: FETCH_LIKE,
					likeList: items,
				});
			} catch (err) {
				throw err;
			}
		}
		return;
	};
};
//Add like
export const addLike = (item) => {
	return async (dispatch, getState) => {
		dispatch({
			type: LIKE_LOADING,
		});
		const user = getState().auth.user;
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/likeList/post`, {
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
					type: LIKE_FAILURE,
				});
				throw new Error("좋아요를 실패했습니다.");
			}
			dispatch({
				type: ADD_LIKE,
				addItem: item,
			});
		} catch (err) {
			throw err;
		}
	};
};
export const removeLike = (id) => {
	return async (dispatch, getState) => {
		dispatch({
			type: LIKE_LOADING,
		});
		const user = getState().auth.user;
		try {
			const response = await timeoutPromise(
				fetch(`${API_URL}/likeList/${user.userid}`, {
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
					type: LIKE_FAILURE,
				});
				throw new Error("좋아요 취소하기를 실패했습니다.");
			}
			dispatch({
				type: REMOVE_LIKE,
				itemId: id,
			});
		} catch (err) {
			throw err;
		}
	};
};