import React from 'react';
import styled from 'styled-components';
const CartItem = ({ item }) => {
	return (
		<CartItemWrapper>
			<div className='img-container'>
				<img src={item.images[0].fields.file.url} alt='' />
			</div>
			<h3>Product name:{item.name}</h3>
			<h5>Amount: {item.count}</h5>
		</CartItemWrapper>
	);
};

export default CartItem;

const CartItemWrapper = styled.div`
	width: 100%;
	height: 100%;

	img {
		height: 30px;
	}
	h3 {
		margin: 0;
		font-size: 1rem;
	}
	h5 {
		font-size: 0.7rem;
	}
`;
