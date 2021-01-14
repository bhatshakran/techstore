import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import CartItem from './CartItem';
import { GrClear } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const SideCart = () => {
	return (
		<ProductConsumer>
			{value => {
				const { cartOpen, closeCart, cart, cartTotal } = value;
				return (
					<CartWrapper show={cartOpen} onClick={closeCart}>
						{cart.map(item => {
							return (
								<CartItem key={item.id} item={item} cartTotal={cartTotal} />
							);
						})}
						<h4>Cart Total: {cartTotal}$</h4>
						<Link to='/cartpage'>
							<button className='btn-cart-pg'>Cart Page</button>
						</Link>
						<button className='btn-clear' style={{ padding: '0.8rem' }}>
							<GrClear />
							Clear Cart
						</button>
					</CartWrapper>
				);
			}}
		</ProductConsumer>
	);
};

export default SideCart;

const CartWrapper = styled.div`
	position: fixed;
	top: 70px;
	right: 0;
	color: black;
	height: 100%;
	background: white;
	z-index: 150;
	font-size: 3rem;
	width: 50%;
	transform: ${props => (props.show ? 'translateX(0)' : 'translate(-100vw)')};
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(auto-fit, 80px);
	grid-row-gap: 1rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	h4 {
		font-size: 1.3rem;
		color: cornflowerblue;
	}

	.btn-cart-pg {
		border: none;
		background: orange;
		color: white;
		padding: 1rem;
		opacity: 0.8;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		transition: all 0.3s linear;
		font-size: 1.7rem;
	}
	.btn-cart-pg:hover {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
		opacity: 1;
	}
`;
