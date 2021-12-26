import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TRoutes } from './shared/consts';
import Goods from './components/Goods';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Routes>
					<Route path={TRoutes.GOODS} exact element={<Goods />} />
					<Route path={TRoutes.CART} exact element={<Cart />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
