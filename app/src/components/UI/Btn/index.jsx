import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function Btn(props) {
	return (
		<button
			className={[styles.btn, props.className].join(' ')}
			onClick={props.onClick}
		>
			{props.title}
		</button>
	);
}
Btn.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};
