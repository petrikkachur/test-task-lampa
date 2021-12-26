import Btn from '../Btn';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function CardCart(props) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src='' alt='' />
			<div className={styles.textContainer}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.price}>Price: {props.price}</p>
			</div>
			<div className={styles.btnContainer}>
				<Btn className={styles.btn} title='-' onClick={props.minus} />
				<span>{props.count}</span>
				<Btn className={styles.btn} title='+' onClick={props.plus} />
			</div>
		</div>
	);
}
CardCart.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	count: PropTypes.number,
	plus: PropTypes.func,
	minus: PropTypes.func,
};
