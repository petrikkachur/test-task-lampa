import {
	addAllToCartAction,
	addGoodToCartAction,
	changeCountGoodCartAction,
	removeGoodFromCartAction,
} from '../redux/goodsReducer';
import { TApi } from '../shared/consts';


export const fetchCart = () => (dispatch) => {
	fetch(TApi.CART)
		.then((res) => res.json())
		.then((v) => dispatch(addAllToCartAction(v)));
};
export const postAddToCart = (data) => (dispatch) => {
	fetch(TApi.CART, {
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((v) => dispatch(addGoodToCartAction(v)));
};
export const putCountToCart = (index, data) => (dispatch) => {
	fetch(TApi.CART, {
		method: 'PUT',
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok)
			dispatch(changeCountGoodCartAction({ index, count: data.count }));
	});
};
export const postRemoveFormCart = (data) => (dispatch) => {
	fetch(TApi.CART, {
		method: 'POST',
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok) dispatch(removeGoodFromCartAction(data.index));
	});
};
