import React from 'react';
import styled from 'styled-components';
import banner from '../images/productsbg.jpg';
import provec from '../images/provec.jpg';
import { ProductConsumer } from '../context';

const Products = () => {
	return (
		<ProductConsumer>
			{value => {
				const {
					search,
					company,
					price,
					min,
					max,
					handleChange,
					shipping,
				} = value;
				return (
					<ProductsWrapper>
						<div className='banner'>
							<img src={banner} alt='' />
						</div>
						<div className='products-title'>
							<h3>Products</h3>
						</div>

						<section className='restpart'>
							<section className='filter'>
								{/* text search */}

								<label htmlFor='search'>Search Products</label>
								<input
									type='text'
									name='search'
									id='search'
									value={search}
									className='form-control'
									placeholder='Name'
									onChange={handleChange}
								/>
								{/* company */}
								<label htmlFor='company'>Company </label>
								<select
									type='text'
									name='company'
									id='company'
									value={company}
									onChange={handleChange}
									className='form-control'>
									<option value='all'>All</option>
									<option value='acer'>Acer</option>
									<option value='nikon'>Nikon</option>
									<option value='blackberry'>Blackberry</option>
								</select>
								{/* price range */}
								<label htmlFor='price'>Product Price: $ {price} </label>
								<input
									type='range'
									name='price'
									id='price'
									min={min}
									max={max}
									className='form-control'
									onChange={handleChange}
									value={price}
								/>
								{/* shipping */}
								<label htmlFor='shipping'>Free Shipping</label>
								<input
									type='checkbox'
									name='shipping'
									id='shipping'
									onChange={handleChange}
									value={shipping && true}
								/>
							</section>
						</section>
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
   
	.banner {
		width: 100%;
		height: 250px;
	}
	.banner img {
		width: 100%;
		height: 100%;
	}
	.products-title {
		font-family: 'Poppins';
		margin: 2rem auto;
		text-align: center;

		width: 150px;
	}
	h3 {
		position: relative;
		font-weight: 800;
	}

	.restpart {
		background: url(${provec});
		background-position: center;
		background-attachment: fixed;
		background-size: cover;
		width: 100%;
		color: #fff;
        text-align: center;
        padding-top: 50vh;
    }
    .filter{
       
        background:#fff;
    }
	label {
        margin: 4rem 0;
        margin-bottom: 0;
		font-size: 2rem;
		font-family: 'Poppins';
        color: black;
        padding: 1rem;
        width:calc(100% - 2rem);
		
	}
	input, select {
        height: 40px;
        width:calc(100% - 2rem);
		border: 1px solid #ececec;
        margin: 1rem auto;
        font-weight:bold;
        outline:none;
        border-radius:0;
       
`;
