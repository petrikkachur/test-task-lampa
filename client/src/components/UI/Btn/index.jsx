import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function Btn(props) {
	return (
		<button
			type={props.type}
			className={[styles.btn, props.className].join(' ')}
			onClick={props.onClick}
		>
			{props.image && (
				<img className={styles.img} src={props.image} alt='' />
			)}
			<span>{props.title}</span>
		</button>
	);
}
Btn.defaultProps = {
	type: 'button',
};
Btn.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	image: PropTypes.string,
};
