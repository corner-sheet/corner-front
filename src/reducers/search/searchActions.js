import { NAVER_API_KEY_ID, NAVER_API_KEY } from "../../utils/Config";
import { timeoutPromise } from '../../utils/Tools';
export const SEARCH_LOADING = 'SEARCH_LOADING';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_ADD = 'SEARCH_ADD';
export const SEARCH_REMOVE = 'SEARCH_REMOVE';
export const SEARCH_GEOCODE = 'SEARCH_GEOCODE';
export const SEARCH_REVERSE_GEOCODE = 'SEARCH_REVERSE_GEOCODE';

export const geocode = (keyword) => {
	console.log('keyword', keyword);
	return async (dispatch) => {
		dispatch({
			type: SEARCH_LOADING,
		});
		try {
			console.log('hahaha')
			const response = await timeoutPromise(
				fetch(`https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${keyword}`,
					{
						headers: {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"X-NCP-APIGW-API-KEY-ID": NAVER_API_KEY_ID,
							"X-NCP-APIGW-API-KEY": NAVER_API_KEY,
						},
						method: "GET",
					})
			);
			if (!response.ok) {
				dispatch({
					type: SEARCH_FAILURE,
				});
				throw new Error("geocoding을 실패했습니다.");
			}
			const resData = await response.json();
			console.log('resData');
			console.log('wpwww', resData);
			await dispatch({
				type: SEARCH_GEOCODE,
				latitude: parseFloat(resData.addresses[0].y),
				longitude: parseFloat(resData.addresses[0].x),
				roadAddress: keyword,
				alias: "",
			});
			await dispatch({
				type: SEARCH_ADD,
				latitude: parseFloat(resData.addresses[0].y),
				longitude: parseFloat(resData.addresses[0].x),
				roadAddress: keyword,
				alias: "",
			});
		} catch (err) {
			throw err;
		}
		return;
	}
}

export const reverseGeocode = (location) => {
	const { latitude, longitude } = location;
	return async (dispatch) => {
		dispatch({
			type: SEARCH_LOADING,
		});
		try {
			const response = await timeoutPromise(
				fetch(`https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&output=json&orders=roadaddr`,
					{
						headers: {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"X-NCP-APIGW-API-KEY-ID": NAVER_API_KEY_ID,
							"X-NCP-APIGW-API-KEY": NAVER_API_KEY,
						},
						method: "GET",
					})
			);
			if (!response.ok) {
				dispatch({
					type: SEARCH_FAILURE,
				});
				throw new Error("reverse geocoding을 실패했습니다.");
			}
			const resData = await response.json();
			let address;
			if (resData.results.length === 0)
				address = "";
			else
				address = await resData.results[0].region.area1.name + ' '
					+ resData.results[0].region.area2.name + ' '
					+ resData.results[0].land.name + ' '
					+ resData.results[0].land.number1 + ' '
					+ resData.results[0].land.addition0.value;
			await dispatch({
				type: SEARCH_REVERSE_GEOCODE,
				latitude: latitude,
				longitude: longitude,
				roadAddress: address,
				alias: "",
			});
			await dispatch({
				type: SEARCH_ADD,
				latitude: latitude,
				longitude: longitude,
				roadAddress: address,
				alias: "",
			});
		} catch (err) {
			console.log('err', err)
			throw err;
		}
		return;
	};
}

export const removeRecentSearch = (index) => {
	return {
		type: SEARCH_REMOVE,
		index,
	}
}