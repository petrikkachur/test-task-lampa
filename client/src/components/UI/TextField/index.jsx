import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function TextField(props) {
	return (
		<label className={styles.label}>
			{props.label}
			<input
				className={styles.input}
				name={props.name}
				placeholder={props.placeholder}
				type='text'
				value={props.value}
				onChange={props.onChange}
			/>
			<span className={styles.error}>{props.error}</span>
		</label>
	);
}
TextField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,

	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
};
