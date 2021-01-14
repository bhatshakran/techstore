import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import ProductCard from './ProductCard';

const Featured = () => {
	return (
		<FeaturedWrapper>
			<h2>Featured Products</h2>
			<div className='line'></div>
			<div className='grid full'>
				<ProductConsumer>
					{value => {
						const { featuredProducts } = value;

						return featuredProducts.map(item => {
							return <ProductCard product={item} key={item.id} />;
						});
					}}
				</ProductConsumer>
			</div>
		</FeaturedWrapper>
	);
};

export default Featured;

const FeaturedWrapper = styled.section`
	margin: 2rem auto;
	width: calc(100% - 4rem);
	text-align: center;

	.line {
		width: 70px;
		height: 5px;
		background: orange;
		margin: 0 auto;
	}
	.grid {
		display: grid;
		margin-top: 2rem;
		padding-top: 1rem;

		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-row-gap: 3rem;
		justify-content: center;
	}

	// ipad view
	@media screen and (min-width: 500px) {
		.grid {
			width: 100%;
			grid-template-columns: repeat(2, 230px);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 2rem;
		}
		h3 {
			font-size: 4rem;
		}
	}
	// desktop view
	@media screen and (min-width: 1024px) {
		margin-top: 8rem;
		margin-bottom: 20vh;
		.grid {
			width: 100%;
			grid-template-columns: repeat(3, 300px);
			grid-template-rows: repeat(1, 1fr);
			grid-column-gap: 3rem;
		}

		h2 {
			font-size: 5rem;
		}
	}
`;
