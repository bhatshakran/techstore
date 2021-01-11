import React from 'react';
import { ProductConsumer } from '../context';
import heroPic from '../images/pexels-sound-on-3756853.jpg';
import styled from 'styled-components';
import comp from '../images/a.jpg';
import ear from '../images/b.jpg';
import tech from '../images/c.jpg';
import Footer from '../components/Footer';
import Featured from '../components/Featured';
import Services from '../components/Services';

export default function Home() {
	return (
		<>
			<ProductConsumer>
				{value => {
					return (
						<HomeWrapper>
							<div className='banner'>
								<img src={heroPic} alt='' />
								<h2>Cool Gadgets and Techy stuff</h2>
								<div className='line'></div>
							</div>
							<div className='banner2'>
								<div className='images'>
									<img src={comp} alt='' className='a' />
									<img src={tech} alt='' className='c' />
									<img src={ear} alt='' className='b' />
								</div>
							</div>
							<Services />
							<Featured />
							<Footer />
						</HomeWrapper>
					);
				}}
			</ProductConsumer>
		</>
	);
}

const HomeWrapper = styled.section`
	width: 100%;
	position: relative;
	top: 70px;

	.banner {
		width: 100%;
		height: 300px;
	}
	.banner img {
		width: 100%;
		height: 250px;
	}
	.banner h2 {
		width: calc(100% - 4rem);

		margin: 1rem 2rem;
		margin-bottom: 0;
		font-size: 2rem;
		padding: 1rem;
		font-family: 'Bungee';
		color: black;
		text-align: center;

		text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}
	.line {
		height: 5px;
		width: 30%;
		background: orange;
		margin: 0 auto;
	}
	.banner2 {
		width: calc(100% - 2rem);
		margin: 7rem 1rem;
	}
	.banner2 .images {
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(1, 100%);
		grid-template-rows: repeat(3, 180px);
		grid-column-gap: 10%;
		grid-row-gap: 10px;
		justify-content: center;
		align-items: center;
	}
	.banner2 img {
		height: 100%;
		width: 100%;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px -4px 4px rgba(0, 0, 0, 0.3);
	}
	@media screen and (min-width: 500px) {
		.banner {
			height: 400px;
		}
		.banner img {
			height: 350px;
		}
		.banner2 .images {
			grid-template-rows: repeat(3, 250px);
		}
	}
	// ipad
	@media screen and (min-width: 700px) {
		.banner {
			height: 700px;
		}
		.banner img {
			height: 90%;
		}
		.banner2 .images {
			grid-template-columns: repeat(2, 25%);
			grid-template-rows: repeat(2, 200px);
			grid-column-gap: 1rem;
		}
		.b {
			grid-column: 1/3;
		}
	}
	// desktop
	@media screen and (min-width: 1024px) {
		.banner {
			height: 1000px;
		}
		.banner img {
			height: 90%;
		}
		.banner h2 {
			width: 70%;
			margin: 3rem auto;
			font-size: 2.5rem;
			padding: 1rem;
			height: 30px;
		}
		.line {
			width: 20%;
		}
		.banner2 .images {
			grid-template-columns: repeat(2, 25%);
			grid-template-rows: repeat(2, 200px);
			grid-column-gap: 1rem;
		}
		.b {
			grid-row: 1/3;
			grid-column: 1/2;
		}
	}
`;
