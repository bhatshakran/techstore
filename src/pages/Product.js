import styled from 'styled-components';
import React, { useEffect } from 'react';
import { ProductConsumer } from '../context';
import productbg from '../images/productbg.jpg';
import _ from 'lodash';
import { FiPlus } from 'react-icons/fi';
import { FaCartPlus, FaReact } from 'react-icons/fa';

const Product = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ProductConsumer>
			{value => {
				if (value.loading) {
					return <div>Loading...</div>;
				} else {
					const { singleProduct } = value;

					const { features } = singleProduct;

					const mainImg = singleProduct.images[0].fields.file.url;
					// convert object to array
					const featuresArray = Object.keys(features).map(k => ({
						[k]: features[k],
					}));

					// get pics
					const pics = singleProduct.images.map(pic => {
						return (
							<img key={pic.fields.title} src={pic.fields.file.url} alt='' />
						);
					});

					const featuresList = featuresArray.map(feature => {
						return (
							<li key={_.uniqueId('Key_')}>
								{JSON.stringify(feature).slice(1, -1).replace(/"/g, '')}
							</li>
						);
					});

					return (
						<ProductWrapper
							style={{
								background: `url(${productbg})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundAttachment: 'fixed',
							}}>
							<div className='img-container'>
								<img src={mainImg} alt='' />
							</div>
							<div className='circles'>
								<div className='circle-outer'>
									<FiPlus className='icon' />
									<FaReact className='center-icon' />
									<p>{singleProduct.name}</p>
									<div className='circle-inner'>
										<p>{singleProduct.category}</p>
										<FiPlus className='icon icon-2' />
									</div>
								</div>
							</div>
							<div className='properties'>
								<div className='prop-img-container'>
									<img src={singleProduct.images[1].fields.file.url} alt='' />
								</div>
								<div className='features'>
									<h3>{singleProduct.name}</h3>
									<div className='line'></div>

									<ul>{featuresList}</ul>
								</div>
								<h4>Price: ${singleProduct.price}</h4>
							</div>
							<div className='picture-container'>
								<h3>Pictures</h3>
								<div className='line'></div>
								<div className='pictures'>{pics}</div>
								<div className='cta'>
									<button
										className='btn-cart'
										onClick={() => value.addToCart(singleProduct.id)}>
										<FaCartPlus className='cart-i' />
										Add to cart
									</button>
								</div>
							</div>
						</ProductWrapper>
					);
				}
			}}
		</ProductConsumer>
	);
};

export default Product;
const ProductWrapper = styled.section`
	position: relative;
	top: 70px;
	width: 100%;
	height: 100%;

	.img-container {
		width: 100%;
		height: 100vh;
		text-align: center;
		background: rgba(255, 255, 255, 0.1);
		position: relative;
	}

	.img-container img {
		margin-top: 100px;
		width: 100%;
		height: 250px;
	}

	.properties {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-row-gap: 2rem;
		background: #fff;
		align-items: center;
		justify-content: center;
		padding-top: 3rem;
	}
	.prop-img-container {
		width: 100%;
		height: 100%;
	}
	.prop-img-container img {
		width: 100%;
	}
	.features {
		padding: 1rem 0;
		position: relative;
	}

	h3 {
		text-align: center;
	}
	.features p {
		grid-row: 2/3;
		text-orientation: upright;
		writing-mode: vertical-rl;
		font-size: 3rem;
		padding-right: 60%;
		text-align: center;
	}
	.line {
		width: calc(100% / 4);
		height: 8px;
		background: hotpink;
		margin: 0 auto;
	}
	.features ul {
		list-style: none;
		color: black;
		font-family: 'Poppins';
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
		z-index: 333;
	}
	.features ul li {
		margin: 1rem;
		padding: 5px;
	}
	.picture-container {
		background: white;
		margin: 100vh 0;
		margin-bottom: 30vh;
		width: 100%;
		background: linear-gradient(to right, #c31432, #240b36);
		padding-top: 1rem;
		color: #fff;
	}
	.pictures {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gri-template-rows: repeat(4, 1fr);
		grid-row-gap: 1rem;

		padding-top: 3rem;
	}
	.pictures img {
		width: 100%;
	}
	.circles {
		width: 100%;
		height: 60vh;
		background: white;
		padding-top: 3rem;
	}
	.circle-outer {
		width: 210px;
		height: 210px;
		border: 1px solid #ececec;
		margin: 0 auto;
		border-radius: 50%;
		position: relative;
		box-shadow: 4px 4px 50px #ececec, -4px -4px 50px #ececec;
	}
	.circle-inner {
		width: 150px;
		height: 150px;
		border: 1px solid #ececec;
		margin: 0 auto;
		border-radius: 50%;
		margin-top: 3rem;
		box-shadow: 4px 4px 5px #ececec, -4px -4px 5px #ececec;
	}
	.icon {
		position: absolute;
		top: 20px;
		font-size: 4rem;
		background: #2bff95;
		border-radius: 50%;
		color: #fff;
		box-shadow: 4px 4px 4px #ececec, -4px -4px 4px #ececec;
	}
	.icon-2 {
		top: 90px;
		right: 10px;
	}
	.circle-outer p {
		position: absolute;
		font-size: 1.8rem;
		top: -5px;
		font-family: 'Poppins';
	}
	.circle-inner p {
		right: -5px;
		top: 65px;
	}
	.center-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 4rem;
	}
	.cta {
		text-align: center;
	}
	.btn-cart {
		background: #fff;
		color: #4169e1;
		border: none;
		padding: 1.4rem;
		margin: 4rem auto;
		box-shadow: 0px 2px 2px black;
		outline: none;
		opacity: 0.9;
		transition: all 0.3s linear;
	}
	.cart-icon {
		margin-right: 7px;
	}

	.btn-cart:hover {
		opacity: 1;
		box-shadow: 0px 4px 4px black;
	}
	// ipad
	@media screen and (min-width: 600px) {
		.img-container img {
			margin-top: 120px;
			height: 500px;
		}
		.circles {
			height: 40vh;
		}
		.picture-container {
			text-align: center;
		}
		.picture-container h3 {
			font-size: 4rem;
		}
		.pictures {
			grid-template-columns: repeat(2, 45%);
			gri-template-rows: repeat(2, 1fr);
			grid-column-gap: 5%;
		}
		.features ul {
			font-size: 2rem;
		}
		h4 {
			font-size: 2rem;
			margin-left: 1rem;
		}
	}
	// desktop
	@media screen and (min-width: 1025px) {
		.img-container {
			height: 70vh;
			background: #fff;
		}
		.img-container img {
			margin: 3rem 0;
			height: 90%;
			width: 60%;
		}
		.properties {
			grid-template-columns: repeat(2, 50%);
		}
		h4 {
			text-align: center;
			font-size: 4rem;
		}
		.btn-cart {
			padding: 2rem;
			font-size: 1.9rem;
		}
		.pictures {
			grid-template-columns: repeat(4, 24%);
			grid-template-rows: repeat(1, 200px);
			grid-column-gap: 1%;
			align-items: Center;
		}
		.pictures img {
			height: 100%;
		}
		.circles {
			margin-bottom: 70vh;
		}
	}
`;
