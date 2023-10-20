import { DATA_LOADING, DATA_SUCCESS, ERROR } from "./shopActions";

export function dataLoading() {
	return { type: DATA_LOADING };
}
export function dataComing(data) {
	return { type: DATA_SUCCESS, payload: data };
}
export function dataNotCame(err) {
	return { type: ERROR, payload: err };
}

export function Products() {
	return function (dispatch) {
		const URL = "https://fakestoreapi.com/products";
		dispatch(dataLoading());
		fetch(URL)
			.then(res => res.json().then(data => dispatch(dataComing(data))))
			.catch(error => dataNotCame(error.err));
	};
}
