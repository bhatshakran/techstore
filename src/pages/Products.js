import React from 'react';
import styled from 'styled-components';
import banner from '../images/productsbg.webp';
import provec from '../images/provec.webp';
import { ProductConsumer } from '../context';
import Filter from '../components/Filter';
import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<ProductConsumer>
			{value => {
				const { setSingleProduct, filteredProducts } = value;

				return (
					<ProductsWrapper>
						<div className='banner'>
							<img src={banner} alt='' />
						</div>
						<div className='pro-container'>
							<div className='products-title'>
								<h3>Products</h3>
							</div>
						</div>
						<Filter />
						{/* products */}
						<div className='products-holder'>
							<h3>Result:</h3>
							<div className='products'>
								{filteredProducts.map(product => {
									return (
										<div className='product-card' key={product.id}>
											<img src={product.images[0].fields.file.url} alt='' />
											<div className='info-holder'>
												{' '}
												{product.name}
												<br />
												Price: $ {product.price} <br />
												<Link to={`/products/${product.name}`}>
													<button
														className='btn-details'
														onClick={() => setSingleProduct(product.id)}>
														Details
													</button>
												</Link>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</ProductsWrapper>
				);
			}}
		</ProductConsumer>
	);
};

export default Products;

const ProductsWrapper = styled.div`
	position: relative;
	top: 70px;
	background: url(${provec});
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	.banner {
		width: 100%;
		height: 250px;
	}
	.banner img {
		width: 100%;
		height: 100%;
	}
	.pro-container {
		background: white;
		margin: 0;
		padding: 2rem;
	}
	.products-title {
		font-family: 'Poppins';
		margin: 0 auto;
		text-align: center;
		width: 150px;
	}
	h3 {
		position: relative;
		font-weight: 800;
		margin: 0;
	}
	.products-holder{
		
		background: #fff;
		padding-top: 4rem;
		text-align:Center;
		font-family: 'Poppins';
		
	}
	.products-holder h3{
		font-size: 4rem;
	}
	.products {
		
		margin-top: 2rem;
		display: grid;
		width: 100%;
		grid-template-columns: repeat(1, 270px);
		grid-template-rows: repeat(auto-fit, 250px);
		justify-content: center;
		text-align: center;
		grid-row-gap: 3rem;
		padding-bottom: 3rem;
	}
	
	.product-card {
		display: grid;
		grid-template-columns: repeat(1, 100%);
		grid-template-rows: repeat(2, 120px);
		text-align:center;
		padding-top: 2rem;
		
		box-shadow: 0px 2px 7px rgba(0,0,0,0.4), 0px -2px 7px rgba(0,0,0,0.4);

	}

	.product-card img {
		height: 90px;
        width: 50px
		grid-row: 1/2;
		margin: 0 auto;
	}
.info-holder{
	color: maroon;
	font-size: 1.8rem;
	font-family: 'Poppins';
	
}
	.btn-details{
		padding: 1rem;
		border: 0;
		background: cornflowerblue;
		color: #fff;
		margin-top: 1rem;
		opacity: 0.8;
		transition: all 0.3s linear;
	}
	.btn-details:hover{
		background: darkblue;
		opacity: 1;
	}
	//  ipad
	@media screen and (min-width: 700px){
		.banner{
			height: 400px;
		}
		.products{
			grid-template-columns: repeat(2, 300px);
			grid-template-rows: repeat(2, 300px);
			grid-column-gap: 3rem;
		}
	}
	// desktop
	@media screen and (min-width: 1025px){
		.banner{
			height: 600px;
		}
		.products{
			
			grid-template-columns: repeat(auto-fit, 300px);
			grid-template-rows: repeat(auto-fit, 300px);
			grid-column-gap: 3rem;
		}
	}
`;
