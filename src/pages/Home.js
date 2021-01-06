import React from 'react';
import { ProductConsumer } from '../context';
import heroPic from '../pexels-garrett-morrow-682933.jpg';
import styled from 'styled-components';
import watch from '../ssss.png';
import airpod from '../airpod.png';
import iphone from '../iphone-.png';

export default function Home() {
	return (
		<>
			<ProductConsumer>
				{value => {
					return (
						<HomeWrapper>
							<div className='banner'>
								<h2>Cool Gadgets and Techy stuff</h2>
							</div>
							<div className='banner2'>
								<div className='images'>
									<img src={watch} alt='' className='a' />
									<img src={airpod} alt='' className='b' />
									<img src={iphone} alt='' className='c' />
								</div>
							</div>
						</HomeWrapper>
					);
				}}
			</ProductConsumer>
		</>
	);
}

const HomeWrapper = styled.section`
	height: 100vh;
	background: url(${heroPic});
	background-size: cover;
	background-position: center;
	overflow: hidden;

	.container {
		position: relative;
		background: rgba(0, 0, 0, 0.3);
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.banner {
		padding: 2rem;
		color: orange;
		background: black;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: skew(0, -30deg);
		position: absolute;
		bottom: -150px;
		right: -160px;
		height: 600px;
		width: 800px;
		z-index: 1;
	}
	.banner h2 {
		font-family: 'Bungee';
		font-size: 6rem;
		margin: 12rem;
	}
	.banner2 {
		position: absolute;
		bottom: 0;
		height: 600px;
		width: 800px;
		transform: skew(0, 30deg);
		background: white;
		bottom: -150px;
		left: -160px;
		padding: 4rem;
		display: flex;
		align-item: center;
		justify-content: center;
		z-index: 1;
	}
	.images {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		margin: 2rem;
		height: 400px;
		transform: skew(0, -20deg);
	}
	img {
		height: 100%;
	}
	.a,
	.b {
		grid-row-start: 1;
		grid-row-end: 2;
	}

	.c {
		grid-row-start: 2;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	@media screen and (max-width: 1300px) {
		.banner {
			background: none;
			height: 200px;
			width: 200px;
			position: absolute;
			bottom: 50%;
			right: 50%;
			transform: skew(0, 0);
			color: #fff;
			padding: 0;
			margin: 0;
		}
		.banner h2 {
			font-size: 5rem;
			letter-spacing: 5px;
		}
		.banner2 {
			display: none;
		}
	}
`;
