import Btn from '../Btn';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function GoodCard(props) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src='' alt='' />
			<div className={styles.container}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.description}>{props.description}</p>
				<Btn
					className={styles.addToCart}
					title='Add to cart'
					onClick={props.onClick}
				/>
			</div>
		</div>
	);
}
GoodCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	onClick: PropTypes.func,
};
