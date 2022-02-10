// import * as SupportNavigator from "../navigation/SupportNavigator";

// //Handle Deep Link
// export const urlRedirect = (url) => {
// 	if (!url) return;
// 	let urlParts = url.split('://');
// 	if (urlParts.length > 1) {
// 		let scheme = urlParts[0];
// 		let path = urlParts[1];
// 		if (scheme !== 'corner') return;
// 		let pathParts = path.split('/');
// 		let routeName = pathParts[0];
// 		let params = {};
// 		// if (pathParts.length > 2) {
// 		//     params = pathParts.slice(2).reduce((params, part) => {
// 		//         let parts = part.split('=');
// 		//         params[parts[0]] = parts[1];
// 		//         return params;
// 		//     }, {});
// 		// }
// 		SupportNavigator.navigate(routeName, params);
// 	}
// 	return;
// };

//Handle Fetching timeout
export const timeoutPromise = (url) => {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			reject(new Error("Timeout, Server is not responding"));
		}, 20 * 1000);
		url.then(
			(res) => {
				clearTimeout(timeoutId);
				resolve(res);
			},
			(err) => {
				clearTimeout(timeoutId);
				reject(err);
			}
		);
	});
};

