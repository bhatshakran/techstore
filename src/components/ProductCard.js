import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
	const { images, name, price } = product;
	return (
		<ProductWrapper>
			<img src={images[0].fields.file.url} alt={name} />
			<p>{name}</p>

			<p className='price-tag'>{price}$</p>
			<div className='icons'>
				<FaSearch className='a' />
				<FaCartPlus className='b' />
			</div>
		</ProductWrapper>
	);
};

export default ProductCard;
const ProductWrapper = styled.article`
	width: 100%;
	height: 100%;
	position: relative;
	background: white;
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
`;
