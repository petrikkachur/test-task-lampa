import Btn from '../Btn';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import cart from '../../../assets/icons/shopping-cart.png';

export default function GoodCard(props) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={props.src} alt='' />
			<div className={styles.container}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.description}>{props.description}</p>
				<p>Price: {props.price}$</p>
				{props.ordered ? (
					<Btn
						className={styles.addToCart}
						title='Add to cart'
						onClick={props.onAdd}
					/>
				) : (
					<Btn
						className={styles.addToCart}
						image={cart}
						title='Remove'
						onClick={props.onRemove}
					/>
				)}
			</div>
		</div>
	);
}
GoodCard.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	ordered: PropTypes.bool,
};
