import { useEffect, useRef, useState } from 'react';
import { postAddToCart, postRemoveFormCart } from '../../asyncAction';
import { TApi } from '../../shared/consts';
import GoodCard from '../UI/GoodCard';
import Pagination from '../UI/Pagination';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { setLoadingAction } from '../../redux/goodsReducer';

export default function Goods() {
	const ref = useRef(null);
	const dispatch = useDispatch();
	const [goods, setGoods] = useState([]);
	const [goodsCount, setGoodsCount] = useState(0);
	const [page, setPage] = useState(0);
	const [windowSize, setWindowSize] = useState({ width: 0, heigth: 0 });
	const [limit, setLimit] = useState(10);

	const fetchGoods = () => {
		const params = new URLSearchParams({ limit, offset: page * limit });

		dispatch(setLoadingAction(true));

		fetch(TApi.GOODS + `?${params}`)
			.then((data) => data.json())
			.then((v) => {
				setGoods(v.rows);
				setGoodsCount(v.count);
			})
			.finally(() => dispatch(setLoadingAction(false)));
	};

	const addToCartHandler = (id) => {
		dispatch(postAddToCart(id, fetchGoods));
	};
	const removeFromCart = (id) => {
		dispatch(postRemoveFormCart(id, fetchGoods));
	};
	const resizeHandler = (e) => {
		setWindowSize({
			width: e.target.innerWidth,
			heigth: e.target.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	useEffect(() => {
		if (ref.current && ref.current.offsetWidth !== 0)
			setLimit(Math.floor((ref.current.offsetWidth - 30) / 230) * 2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref.current, windowSize]);

	useEffect(() => {
		fetchGoods();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, limit, setLimit]);

	return (
		<div className={styles.root}>
			<div className={styles.cardsContainer} ref={ref}>
				{goods.map((v, i) => (
					<GoodCard
						key={i}
						src={v.image}
						title={v.title}
						description={v.description}
						price={v.price}
						ordered={v.Cart?.[0]?.ordered === false ? false : true}
						onAdd={() => addToCartHandler(v.id)}
						onRemove={() => removeFromCart(v.Cart?.[0]?.id)}
					/>
				))}
			</div>
			<Pagination
				className={styles.pagination}
				count={goodsCount}
				limit={limit}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
}
