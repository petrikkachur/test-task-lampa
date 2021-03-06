/* eslint-disable array-callback-return */
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function Pagination(props) {
	const pageCount = Math.ceil(props.count / props.limit);

	const handleClick = (e) => {
		const { target } = e;

		if (target.nodeName !== 'BUTTON') return;
		if (target.innerText === '<' && props.page !== 0)
			return props.setPage(props.page - 1);
		if (target.innerText === '>' && props.page !== pageCount)
			return props.setPage(props.page + 1);

		if (!isNaN(Number(target.innerText)))
			return props.setPage(target.innerText - 1);
	};
	return (
		<div
			className={[styles.root, props.className].join(' ')}
			onClick={handleClick}
		>
			<button className={styles.btn}>{'<'}</button>
			{[...Array(pageCount)].map((v, i) => {
				if (
					i === 0 ||
					i === pageCount - 1 ||
					(props.page > i - 2 && props.page < i + 2) ||
					(pageCount - 4 < i && i < props.page)
				)
					return (
						<button
							key={i}
							className={
								i === props.page
									? [styles.btn, styles.selected].join(' ')
									: styles.btn
							}
						>
							{i + 1}
						</button>
					);
			})}

			<button className={styles.btn}>{'>'}</button>
		</div>
	);
}
Pagination.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	limit: PropTypes.number,
	page: PropTypes.number,
	setPage: PropTypes.func,
};
