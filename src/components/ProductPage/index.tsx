import { RootState } from '../../app/store';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './product.module.css';
import { useNavigate, Outlet } from 'react-router-dom';
import { Button, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {
	handleSearchedProduct,
	handleProduct,
	handleCartProduct,
} from '../../features/ProductSlice';
import { Mic, ShoppingBasket } from '@mui/icons-material';
import SpeechConvert from '../SpeechConvert';
const ProductPage = () => {
	const { productArray, searchedProduct, cartProduct } = useSelector(
		(state: RootState) => state.product
	);
	const navigate = useNavigate();
	const [filterProducts, setFilterProducts] = useState(productArray);
	const [showHoverProduct, setShowHoverProduct] = useState<Number>(-1);
	const dispatch = useDispatch();
	useEffect(() => {
		if (searchedProduct.length) {
			const lowerQuery = searchedProduct.toLowerCase();

			setFilterProducts(
				productArray.filter((productArray) => {
					return (
						productArray.name.toLowerCase().includes(lowerQuery) ||
						productArray.brand.toLowerCase().includes(lowerQuery) ||
						productArray.color.toLowerCase().includes(lowerQuery) ||
						productArray.category.toLowerCase().includes(lowerQuery) ||
						productArray.description.toLowerCase().includes(lowerQuery)
					);
				})
			);
		} else {
			setFilterProducts(productArray);
		}
	}, [searchedProduct]);

	return (
		<>
			<div className={styles.productParent}>
				<div className={styles.header}>
					<InputBase
						multiline
						placeholder='Find your next favorite item...'
						aria-label='Find your next favorite item...'
						autoFocus
						onChange={(ev) => {
							dispatch(handleSearchedProduct(ev.target.value));
						}}
						value={searchedProduct}
						startAdornment={
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						}
						endAdornment={
							<InputAdornment position='end'>
								<SpeechConvert />
							</InputAdornment>
						}
						sx={{
							padding: 1,
							border: '2px solid #aa9195',
							borderRadius: '25px',
							width: '80%',
						}}
					/>
					<div
						className={styles.cartContent}
						onClick={() => {
							navigate('cart-page');
						}}>
						<div className={styles.cartCount}>{cartProduct.length}</div>
						<ShoppingBasket sx={{ color: '#7f746a', marginLeft: '10px' }} />
					</div>
				</div>
				<div className={styles.productContent}>
					{filterProducts.map((item, index) => (
						<div
							key={item.id}
							className={styles.productCard}
							onMouseEnter={() => {
								setShowHoverProduct(index);
							}}>
							<div className={styles.imageContainer}>
								<img
									src={item.image}
									alt={item.name}
									className={styles.productImage}
								/>
							</div>
							<div className={styles.productDetails}>
								<>
									{showHoverProduct === index ? (
										<div>
											<Button
												variant='contained'
												onClick={() => {
													dispatch(handleCartProduct(item));
												}}
												sx={{
													backgroundColor: '#f5e8dd',
													color: '#764c52',
													fontSize: '0.8rem',
													whiteSpace: 'nowrap',
													'&:hover': {
														backgroundColor: '#764c52',
														color: '#fff', // Change background color on hover
													},
												}}
												startIcon={<ShoppingBasket />}>
												Add to Cart
											</Button>
											{/* <Button
											variant='contained'
											sx={{
												backgroundColor: '#f5e8dd',
												color: '#764c52',
												'&:hover': {
													backgroundColor: '#764c52',
													color: '#fff', // Change background color on hover
												},
											}}>
											Buy Now
										</Button> */}
										</div>
									) : (
										<>
											<div className={styles.brand}>{item.brand}</div>
											<div className={styles.name}>{item.name}</div>
											<div className={styles.price}>$ {item.price}</div>
										</>
									)}
								</>
							</div>
						</div>
					))}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default ProductPage;
