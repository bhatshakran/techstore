import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

const SideCart = () => {
	return (
		<ProductConsumer>
			{value => {
				const { cartOpen, closeCart, cart } = value;
				return (
					<CartWrapper show={cartOpen} onClick={closeCart}>
						<p>Cart item</p>
					</CartWrapper>
				);
			}}
		</ProductConsumer>
	);
};

export default SideCart;

const CartWrapper = styled.div`
	position: fixed;
	top: 91px;
	right: 0;
	color: #fff;
	height: 100%;
	background: transparent;
	z-index: 1;
	font-size: 3rem;
	transform: ${props => (props.show ? 'translateX(0)' : 'translate(-100vw)')};
`;
