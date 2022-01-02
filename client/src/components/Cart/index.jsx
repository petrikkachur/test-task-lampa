import { useEffect, useState } from 'react';
import Btn from '../UI/Btn';
import CardCart from '../UI/CardCart';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCart,
	postRemoveFormCart,
	putCountToCart,
} from '../../asyncAction';
import TextField from '../UI/TextField';
import { validate } from '../../shared/middleware';
import { TApi } from '../../shared/consts';
import { setLoadingAction } from '../../redux/goodsReducer';

const orderSchema = {
	name: (v) => {
		if (!v.trim()) return 'not allowed to be empty';
		if (v.length < 2) return 'string length must be grather than 2';
		if (v.length > 255) return 'string length must be less than 255';
		return false;
	},
	surname: (v) => {
		if (!v.trim()) return 'not allowed to be empty';
		if (v.length < 2) return 'string length must be grather than 2';
		if (v.length > 255) return 'string length must be less than 255';
		return false;
	},
	address: (v) => {
		if (!v.trim()) return 'not allowed to be empty';
		if (v.length < 2) return 'string length must be grather than 2';
		if (v.length > 255) return 'string length must be less than 255';
		return false;
	},
	phone: (v) => {
		if (!v.trim()) return 'not allowed to be empty';
		if (v.slice(0, 4) !== '+380') return 'number must start from code +380';
		if (v.length !== 13) return 'number must have 13 characters';
		if (v.length < 2) return 'string length must be grather than 2';
		if (v.length > 255) return 'string length must be less than 255';

		return false;
	},
};

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		name: '',
		surname: '',
		address: '',
		phone: '',
	});
	const [errors, setError] = useState({});

	const handlerPlus = (v) => {
		const data = {
			id: v.id,
			count: v.count + 1,
		};

		dispatch(putCountToCart(data));
	};
	const handlerMinus = (v) => {
		const data = {
			id: v.id,
			count: v.count - 1,
		};
		if (data.count !== 0) {
			return dispatch(putCountToCart(data));
		}
		return dispatch(postRemoveFormCart(data.id));
	};

	const inputHandler = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });

		const err = orderSchema[name](value);

		setError({
			...errors,
			[name]: err,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();

		const valid = validate(orderSchema, form);
		if (valid) return setError(valid);
		dispatch(setLoadingAction(true));

		fetch(TApi.CART_ORDER, {
			method: 'POST',
			body: JSON.stringify(form),
		}).then((res) => {
			if (res.ok) {
				setForm({
					name: '',
					surname: '',
					address: '',
					phone: '',
				});
				dispatch(setLoadingAction(false));
				dispatch(fetchCart());
			}
		});
	};

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.cardContainer}>
					{cart.rows.map((v, i) => (
						<CardCart
							key={i}
							src={v.Goods.image}
							title={v.Goods.title}
							description={v.Goods.description}
							price={v.totalPrice}
							count={v.count}
							plus={() => handlerPlus(v)}
							minus={() => handlerMinus(v)}
						/>
					))}
				</div>
				<form className={styles.orderForm} onSubmit={submitHandler}>
					<TextField
						label='Name'
						name='name'
						placeholder='Input your name'
						value={form.name}
						error={errors.name}
						onChange={inputHandler}
					/>
					<TextField
						label='Surname'
						name='surname'
						placeholder='Input your surname'
						value={form.surname}
						error={errors.surname}
						onChange={inputHandler}
					/>
					<TextField
						label='Address'
						name='address'
						placeholder='Input your address'
						value={form.address}
						error={errors.address}
						onChange={inputHandler}
					/>
					<TextField
						label='Phone'
						name='phone'
						placeholder='Input your phone'
						value={form.phone}
						error={errors.phone}
						onChange={inputHandler}
					/>

					<Btn type='submit' className={styles.btn} title='ORDER' />
				</form>
			</div>
			<p className={styles.total}>TOTAL: ${cart.total}</p>
		</div>
	);
}
