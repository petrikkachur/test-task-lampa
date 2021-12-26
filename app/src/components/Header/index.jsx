import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { TRoutes } from '../../shared/consts';

export default function Header() {
	return (
		<nav className={styles.root}>
			<ul className={styles.menu}>
				<li>
					<Link className={styles.link} to={TRoutes.GOODS}>
						GOODS
					</Link>
				</li>
				<li>
					<Link className={styles.link} to={TRoutes.CART}>
						CART
					</Link>
				</li>
			</ul>
		</nav>
	);
}
