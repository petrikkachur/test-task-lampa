import { useEffect, useState } from 'react';
import { postAddToCart } from '../../asyncAction';
import { TApi } from '../../shared/consts';
import GoodCard from '../UI/GoodCard';
import Pagination from '../UI/Pagination';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { setLoadingAction } from '../../redux/goodsReducer';

export default function Goods() {
	const dispatch = useDispatch();
	const [goods, setGoods] = useState([]);
	const [page, setPage] = useState(0);
	const limit = 10;

	const fetchGoods = () => {
		const params = new URLSearchParams({ limit, offset: page * limit });

		dispatch(setLoadingAction(true));

		fetch(TApi.GOODS + `?${params}`)
			.then((data) => data.json())
			.then((v) => setGoods(v))
			.finally(() => dispatch(setLoadingAction(false)));
	};

	const addToCartHandler = (id) => {
		dispatch(postAddToCart(id));
	};

	useEffect(() => {
		fetchGoods();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={styles.root}>
			<div className={styles.cardsContainer}>
				{goods.map((v) => (
					<GoodCard
						title={v.title}
						description={v.description}
						onClick={() => addToCartHandler(v)}
					/>
				))}
			</div>
			<Pagination
				className={styles.pagination}
				count={goods.length}
				limit={10}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
}
