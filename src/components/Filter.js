import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import provec from '../images/provec.webp';

const Filter = () => {
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
					storeProducts,
					filteredProducts,
				} = value;
				let companies = new Set();
				companies.add('All');
				for (let product in storeProducts) {
					companies.add(storeProducts[product]['company']);
				}
				companies = [...companies];
				return (
					<FilterWrapper>
						<section className='filter'>
							{/* text search */}
							<div className='each'>
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
							</div>
							{/* company */}
							<div className='each'>
								<label htmlFor='company'>Company </label>
								<select
									type='text'
									name='company'
									id='company'
									value={company}
									onChange={handleChange}
									className='form-control'>
									{companies.map((company, index) => {
										return (
											<option value={company} key={index}>
												{company}
											</option>
										);
									})}
								</select>
							</div>
							{/* price range */}
							<div className='each price'>
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
							</div>
							{/* shipping */}
							<div className='each'>
								<label htmlFor='shipping'>Free Shipping</label>
								<input
									type='checkbox'
									name='shipping'
									id='shipping'
									onChange={handleChange}
									value={shipping && true}
								/>
							</div>
						</section>
					</FilterWrapper>
				);
			}}
		</ProductConsumer>
	);
};

export default Filter;

const FilterWrapper = styled.section`
 
	background: url(${provec});
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	width: 100%;
	color: #fff;
	text-align: center;
	padding-top: 50vh;

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
}
.price{
	border: none;
}
	// ipad
	@media screen and (min-width: 700px){
		.filter{
			padding:3rem;
			display:grid;
			grid-template-columns: repeat(2, 300px);
			grid-template-rows: repeat(2, 150px);
			grid-column-gap: 3rem;
			justify-content:Center;
		}
	// desktop
	@media screen and (min-width: 1025px){
		.filter{
			grid-template-columns: repeat(auto-fit, 300px);
			grid-template-rows: repeat(auto-fit, 150px);
		}
	}
	
	`;
