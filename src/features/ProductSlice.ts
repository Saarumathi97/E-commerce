import { createSlice } from '@reduxjs/toolkit';
type State = {
	productArray: {
		id: number;
		category: string;
		name: string;
		price: number;
		color: string;
		sizes: string[];
		image: string;
		description: string;
		brand: string;
		availability: string;
	}[];
	searchedProduct: string;
	cartProduct: {
		id: number;
		category: string;
		name: string;
		price: number;
		color: string;
		sizes: string[];
		image: string;
		description: string;
		brand: string;
		availability: string;
	}[];
};
const initialState: State = {
	productArray: [
		{
			id: 1,
			category: 'men',
			name: 'Slim Fit Shirt',
			price: 39.99,
			color: 'Green',
			sizes: ['S', 'M', 'L', 'XL'],
			image:
				'https://image.hm.com/assets/hm/7f/50/7f50c8434e3a176e552ea97c36e055bbc38c42f3.jpg?imwidth=1260',
			description:
				'A stylish slim-fit shirt, perfect for casual or semi-formal occasions.',
			brand: 'Fashion Co.',
			availability: 'In Stock',
		},
		{
			id: 2,
			category: 'men',
			name: 'Chinos Pants',
			price: 49.99,
			color: 'White',
			sizes: ['M', 'L', 'XL'],
			image:
				'https://image.hm.com/assets/hm/83/05/83053d2a1a603c0a1994a98d352a0ba858f3b20e.jpg?imwidth=1260',
			description: 'Comfortable chinos with a modern fit for casual wear.',
			brand: 'TrendSetters',
			availability: 'In Stock',
		},
		{
			id: 3,
			category: 'men',
			name: 'Leather Jacket',
			price: 129.99,
			color: 'Black',
			sizes: ['S', 'M', 'L'],
			image:
				'https://image.hm.com/assets/hm/72/bc/72bc20040dbba21bd671431f17fc7e959759b12f.jpg?imwidth=396',
			description:
				'Classic leather jacket, perfect for chilly weather and stylish looks.',
			brand: 'Iconic Wear',
			availability: 'Out of Stock',
		},
		{
			id: 4,
			category: 'women',
			name: 'Maxi Dress',
			price: 79.99,
			color: 'Red',
			sizes: ['XS', 'S', 'M', 'L', 'XL'],
			image:
				'https://image.hm.com/assets/hm/ff/55/ff552baf4ff20ec3da498f1519ff1b91697d572c.jpg?imwidth=1260',
			description:
				'Elegant red maxi dress with a flowy design for formal occasions.',
			brand: 'Elegant Styles',
			availability: 'In Stock',
		},
		{
			id: 5,
			category: 'women',
			name: 'Floral Blouse',
			price: 34.99,
			color: 'Black',
			sizes: ['S', 'M', 'L'],
			image:
				'https://image.hm.com/assets/hm/99/16/9916191688707c5c36c0d38200c44d3bb48e0d67.jpg?imwidth=264',
			description:
				'Soft and stylish floral blouse, perfect for summer outings.',
			brand: 'Flora Designs',
			availability: 'In Stock',
		},
		{
			id: 6,
			category: 'women',
			name: 'A-Line Skirt',
			price: 49.99,
			color: 'Blue',
			sizes: ['S', 'M', 'L'],
			image:
				'https://image.hm.com/assets/hm/87/1b/871b494c25c63369fda606df8d4f3603d3f5e376.jpg?imwidth=1260',
			description:
				'A classic A-line skirt, suitable for both casual and formal wear.',
			brand: 'Chic Couture',
			availability: 'In Stock',
		},
	],
	searchedProduct: '',
	cartProduct: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		handleSearchedProduct: (state, action) => {
			state.searchedProduct = action.payload;
		},

		handleCartProduct: (state, action) => {
			const exists = state.cartProduct.find((p) => p.id === action.payload.id);
			if (!exists) {
				state.cartProduct.push(action.payload);
			}
		},
	},
});
export const { handleSearchedProduct, handleCartProduct } =
	productSlice.actions;
export default productSlice.reducer;
