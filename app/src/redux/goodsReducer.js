const SET_LOADING = 'SET_LOADING';
const ADD_ALL_GOOD_TO_CART = 'ADD_ALL_GOOD_TO_CART';
const ADD_GOOD_TO_CART = 'ADD_GOOD_TO_CART';
const REMOVE_GOOD_FROM_CART = 'REMOVE_GOOD_FROM_CART';
const CHANGE_COUNT_CART_GOOD = 'CHANGE_COUNT_CART_GOOD';

const defaultState = {
	cart: [
		{
			id: Date.now(),
			title: 'Asus',
			description: 'sakdkasdasdmakfmksamdsakdmsa',
			price: 1000,
			count: 2,
		},
	],
	isLoading: false,
};

export const goodsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_GOOD_TO_CART:
			return {
				...state,
				cart: [...action.payload],
			};
		case ADD_GOOD_TO_CART:
			return {
				...state,
				cart: [...state.cart, ...action.payload],
			};
		case REMOVE_GOOD_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((v, i) => i !== action.payload),
			};
		case CHANGE_COUNT_CART_GOOD:
			return {
				...state,
				cart: state.cart.map((v, i) =>
					i === action.payload.index
						? {
								...v,
								count: action.payload.count,
						  }
						: v
				),
			};
		default:
			return state;
	}
};
export const addAllToCartAction = (payload) => ({
	type: ADD_ALL_GOOD_TO_CART,
	payload,
});
export const addGoodToCartAction = (payload) => ({
	type: ADD_GOOD_TO_CART,
	payload,
});

export const removeGoodFromCartAction = (payload) => ({
	type: REMOVE_GOOD_FROM_CART,
	payload,
});
export const changeCountGoodCartAction = (payload) => ({
	type: CHANGE_COUNT_CART_GOOD,
	payload,
});

export const setLoadingAction = (payload) => ({ type: SET_LOADING, payload });
