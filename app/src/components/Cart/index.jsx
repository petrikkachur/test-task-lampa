import { useEffect } from 'react';
import Btn from '../UI/Btn';
import CardCart from '../UI/CardCart';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCart,
	postRemoveFormCart,
	putCountToCart,
} from '../../asyncAction';

export default function Cart() {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

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

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.cardContainer}>
					{cartItems.map((v) => (
						<CardCart
							title={v.title}
							description={v.description}
							price={v.price}
							count={v.count}
							plus={() => handlerPlus(v)}
							minus={() => handlerMinus(v)}
						/>
					))}
				</div>
				<form className={styles.orderForm}>
					<label>
						Name
						<input placeholder='Input your name' type='text' />
					</label>
					<label>
						Surname
						<input placeholder='Input your surname' type='text' />
					</label>
					<label>
						Address
						<input placeholder='Input your address' type='text' />
					</label>
					<label>
						Phone
						<input placeholder='Input your phone' type='text' />
					</label>
					<Btn className={styles.btn} title='ORDER' />
				</form>
			</div>
			<p className={styles.total}>TOTAL: $10000</p>
		</div>
	);
}
