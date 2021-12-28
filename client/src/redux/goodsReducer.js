const SET_LOADING = 'SET_LOADING';
const ADD_ALL_GOOD_TO_CART = 'ADD_ALL_GOOD_TO_CART';
const ADD_GOOD_TO_CART = 'ADD_GOOD_TO_CART';
const REMOVE_GOOD_FROM_CART = 'REMOVE_GOOD_FROM_CART';
const CHANGE_COUNT_CART_GOOD = 'CHANGE_COUNT_CART_GOOD';

const defaultState = {
	cart: { rows: [], total: 0 },
	isLoading: false,
};

export const goodsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_GOOD_TO_CART:
			return {
				...state,
				cart: {
					rows: [...action.payload.rows],
					total: action.payload.total,
				},
			};
		case ADD_GOOD_TO_CART:
			return {
				...state,
				cart: {
					...state.cart,
					rows: [...state.cart.rows, ...action.payload],
				},
			};
		case REMOVE_GOOD_FROM_CART:
			return {
				...state,
				cart: {
					rows: state.cart.rows.filter(
						(v) => v.id !== action.payload
					),
					total:
						state.cart.total -
						state.cart.rows.find((v) => v.id === action.payload)
							.totalPrice,
				},
			};
		case CHANGE_COUNT_CART_GOOD:
			const { totalPrice, Goods } = state.cart.rows.find(
				(v) => v.id === action.payload.id
			);

			return {
				...state,
				cart: {
					rows: state.cart.rows.map((v) =>
						v.id === action.payload.id
							? {
									...v,
									totalPrice:
										action.payload.count * v.Goods.price,
									count: action.payload.count,
							  }
							: v
					),
					total:
						state.cart.total +
						action.payload.count * Goods.price -
						totalPrice,
				},
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
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
