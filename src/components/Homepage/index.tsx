import React from 'react';
import styles from './homepage.module.css';

import Dress1 from '../../assets/dress1.png';
import Dress2 from '../../assets/dress2.png';
import Dress3 from '../../assets/dress3.png';
import Dress4 from '../../assets/dress4.png';
import Shirt1 from '../../assets/shirt1.png';
import Shirt2 from '../../assets/shirt2.png';
import Shirt3 from '../../assets/shirt3.png';
import Shirt4 from '../../assets/shirt4.png';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.homepageContainer}>
			<h1 className={`ecom-title ${styles.title}`}>Welcome to ClosetSpace</h1>
			<h2 className='ecom-sub-title '>Dress smart, live smart</h2>

			<div style={{ marginTop: '16px' }}>
				<img className={styles.flyingImage} src={Dress1} alt='Dress1' />
				<img className={styles.flyingImage} src={Dress2} alt='Dress2' />
				<img className={styles.flyingImage} src={Dress3} alt='Dress3' />
				<img className={styles.flyingImage} src={Dress4} alt='Dress4' />
				<img className={styles.flyingImage} src={Shirt1} alt='Shirt1' />
				<img className={styles.flyingImage} src={Shirt2} alt='Shirt2' />
				<img className={styles.flyingImage} src={Shirt4} alt='Shirt4' />
				<img className={styles.flyingImage} src={Shirt3} alt='Shirt3' />
			</div>
			<div style={{ marginTop: '24px' }}>
				<Button
					variant='contained'
					startIcon={<ShoppingCartIcon />}
					sx={{
						backgroundColor: '#f5e8dd',
						color: '#764c52',
						'&:hover': {
							backgroundColor: '#764c52',
							color: '#fff', // Change background color on hover
						},
					}}
					onClick={() => {
						navigate('/product-page');
					}}>
					Shop Now
				</Button>
			</div>
		</div>
	);
};

export default HomePage;
