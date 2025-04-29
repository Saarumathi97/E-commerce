import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/Homepage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter basename={'/'}>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path='/product-page' element={<ProductPage />}>
						<Route path='cart-page' element={<CartPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
