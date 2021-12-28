import {
	addAllToCartAction,
	addGoodToCartAction,
	changeCountGoodCartAction,
	removeGoodFromCartAction,
	setLoadingAction,
} from '../redux/goodsReducer';
import { TApi } from '../shared/consts';

export const fetchCart = () => (dispatch) => {
	dispatch(setLoadingAction(true));
	fetch(TApi.CART)
		.then((res) => res.json())
		.then((v) => {
			dispatch(addAllToCartAction(v));
			dispatch(setLoadingAction(false));
		});
};
export const postAddToCart =
	(id, callback = () => {}) =>
	(dispatch) => {
		dispatch(setLoadingAction(true));
		fetch(TApi.CART, {
			method: 'POST',
			body: JSON.stringify({ id }),
		})
			.then((res) => {
				if (res.ok) return res.json();
			})
			.then((v) => {
				callback();
				dispatch(addGoodToCartAction(v.cart));
				dispatch(setLoadingAction(false));
			});
	};
export const putCountToCart =
	({ id, count }) =>
	(dispatch) => {
		dispatch(setLoadingAction(true));
		fetch(TApi.CART, {
			method: 'PUT',
			body: JSON.stringify({ id, count }),
		}).then((res) => {
			if (res.ok) {
				dispatch(changeCountGoodCartAction({ id, count }));
				dispatch(setLoadingAction(false));
			}
		});
	};
export const postRemoveFormCart =
	(id, callback = () => {}) =>
	(dispatch) => {
		dispatch(setLoadingAction(true));
		fetch(TApi.CART, {
			method: 'DELETE',
			body: JSON.stringify({ id }),
		}).then((res) => {
			if (res.ok) {
				callback();
				dispatch(removeGoodFromCartAction(id));
				dispatch(setLoadingAction(false));
			}
		});
	};
