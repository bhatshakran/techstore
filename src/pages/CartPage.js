import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import CartRow from '../components/CartRow';
import Cart from '../images/cart.jpg';
import { GrClear } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const CartPage = () => {
	return (
		<CartPageWrapper>
			<ProductConsumer>
				{value => {
					const { cart } = value;
					if (cart.length === 0) {
						return (
							<>
								<div className='banner'>
									<img src={Cart} alt='' />
								</div>
								<p className='banner-txt'>Your Cart</p>
								<div className='line'></div>
								<div className='empty'>
									<h2>Your cart is empty</h2>

									<Link to='/'>
										<button className='btn-back'>Go Back</button>
									</Link>
								</div>
							</>
						);
					} else {
						return (
							<>
								<div className='banner'>
									<img src={Cart} alt='' />
								</div>
								<p className='banner-txt'>Your Cart</p>
								<div className='line'></div>
								<div className='cart-grid'>
									<div className='row-head'>
										<div className='col-1'>Products</div>
										<div className='col-2'>Name</div>
										<div className='col-3'>Price</div>
										<div className='col-4'>Quantity</div>
										<div className='col-5'>Remove</div>
										<div className='col-6'>Total</div>
									</div>

									{cart.map(item => {
										return (
											<div
												className={`cart-row ${
													cart.indexOf(item) % 2 === 0 ? 'even' : 'odd'
												}`}
												key={item.id}>
												<CartRow item={item} />
											</div>
										);
									})}
								</div>
								<div className='totals'>
									<h4>Cart Subtotal: {value.cartSubtotal}$</h4>
									<h4>Cart Tax: {value.cartTax}$</h4>
									<h3>Total: {value.cartTotal}$</h3>
								</div>
								<button className='btn-clear' onClick={() => value.clearCart()}>
									<GrClear />
									Clear Cart
								</button>
							</>
						);
					}
				}}
			</ProductConsumer>
		</CartPageWrapper>
	);
};

export default CartPage;
const CartPageWrapper = styled.section`
	position: relative;
	top: 70px;
	width: 100%;
	.banner {
        width 100%;
       
    }
    
    .banner img{
        width: 100%;
    }

    .banner-txt{
        font-size: 2rem;    
        padding: 1rem 2rem;
        text-align:center;
        font-family: 'Poppins';
        margin: 0;
        font-weight: bold;
    }

    .line{
        margin: 0 auto;
        width: 70px;
        height: 8px;
        background: orange;
    }
    .odd{
		background:#dee3de;
		padding: 1rem;
    }
	.totals{
		width: 100%;
		text-align:Center;
		margin: 25vh auto;
		margin-bottom: 4rem;
		
	}
	.totals > h3, .totals > h4{
	margin:1rem;
	font-family: 'Poppins';
	}
	.totals > h4{
		font-size: 1.5rem;
	}
	.totals > h3{
		font-size: 2rem;
	}
	button{
		font-family: 'Poppins';
		outline:none;
	}
	.empty{
		text-align:center;
		margin: 0 auto;
		font-family:'poppins';
	}
	@media screen and (min-width: 500px){
		.banner{
			height:350px;
		}
		.banner img{
			height: 100%;
		}
		
		.totals > h4{
			font-size: 2.3rem;
		}
		.totals > h3{
			font-size:3rem;
			font-weight:bolder;
			margin: 3rem;
		}
	}
	/* desktop */
@media screen and (min-width: 1025px) {
	.banner{
		height:500px;
	}
	.totals{
		margin-top: 10vh;
	}
}
`;
