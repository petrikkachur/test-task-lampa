import styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function Loading(props) {
	return (
		<div className={[styles.root, props.className].join(' ')}>
			<div className={styles.loader}>Loading...</div>
		</div>
	);
}
Loading.propTypes = {
	className: PropTypes.string,
};
