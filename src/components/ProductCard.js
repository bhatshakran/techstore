import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../context';

const ProductCard = props => {
	const { product } = props;

	const { images, name, price, id } = product;

	return (
		<ProductWrapper className={product.id === 1 ? 'full' : ''}>
			<img src={images[0].fields.file.url} alt={name} />
			<p>{name}</p>

			<p className='price-tag'>{price}$</p>
			<ProductConsumer>
				{value => {
					return (
						<div className='icons'>
							<Link
								to={`/products/${product.name}`}
								onClick={() => {
									value.setSingleProduct(id);
									value.getSingleProduct(id);
								}}>
								<FaSearch className='a' />
							</Link>
							<FaCartPlus className='b' />
						</div>
					);
				}}
			</ProductConsumer>
		</ProductWrapper>
	);
};

export default ProductCard;
const ProductWrapper = styled.article`
	width: 100%;
	height: 100%;
	position: relative;
	background: white;
	transition: all 0.3s linear;
	box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.3), 0px -3px 3px rgba(0, 0, 0, 0.3);

	img {
		width: 100%;
	}
	p {
		margin: 0.5rem;
		font-size: 2rem;
		color: orange;
	}
	.icons {
		position: absolute;
		top: 50%;
		width: 100%;
		display: none;
	}
	.a,
	.b {
		transform: scale(2);
		margin: 0 2rem;
		cursor: pointer;
	}

	.price-tag {
		margin: 1rem auto;
		background: orange;
		color: #fff;
		border-radius: 50%;
		width: 70px;
	}
	:hover {
		z-index: 99;
		transform: scale(1.09);
		img {
			opacity: 0.5;
		}

		.glow {
			display: block;
		}

		.icons {
			display: block;
		}
	}

	// ipad
	@media screen and (min-width: 500px) {
		.icons {
			position: absolute;
			top: 70%;
			width: 100%;
			display: none;
		}
	}
	// desktop
	@media screen and (min-width: 1024px) {
		.icons {
			position: absolute;
			top: 50%;
			width: 100%;
			display: none;
		}
	}
`;
