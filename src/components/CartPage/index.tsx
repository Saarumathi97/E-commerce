import React from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import styles from '../CartPage/cartpage.module.css';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NoProductFound from '../NoProductFound';
const CartPage = () => {
	const { cartProduct } = useSelector((state: RootState) => state.product);
	const navigate = useNavigate();
	const totalPrice = () => {
		const total = cartProduct.reduce((acc, item) => acc + item.price, 0);
		return total.toFixed(2);
	};
	return (
		<>
			{cartProduct.length ? (
				<div className={styles.cartContainer}>
					<Close
						onClick={() => {
							navigate(-1);
						}}
						sx={{
							color: '#fff',
							position: 'absolute',
							top: '3px',
							right: '4px',
							cursor: 'pointer',
						}}
					/>
					{cartProduct.map((item) => {
						return (
							<div className={styles.productCart}>
								<img src={item.image} alt={item.name} />
								<div className={styles.productDetails}>
									<div className={styles.brand}>{item.brand}</div>
									<div className={styles.title}>{item.name}</div>
									<div className={styles.brand}>Size {item.sizes[0]}</div>
									<div className={styles.brand}>Price ${item.price}</div>
								</div>
							</div>
						);
					})}
					<Button
						variant='contained'
						sx={{
							backgroundColor: '#f5e8dd',
							color: '#764c52',
							'&:hover': {
								backgroundColor: '#764c52',
								color: '#fff', // Change background color on hover
							},
						}}>
						Buy Now . ${totalPrice()}
					</Button>
				</div>
			) : (
				<div className={styles.cartContainer}>
					<Close
						onClick={() => {
							navigate(-1);
						}}
						sx={{
							color: '#fff',
							position: 'absolute',
							top: '3px',
							right: '4px',
							cursor: 'pointer',
						}}
					/>
					<NoProductFound />
				</div>
			)}
		</>
	);
};

export default CartPage;
