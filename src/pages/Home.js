import React from 'react';
import { ProductConsumer } from '../context';
import heroPic from '../images/pexels-sound-on-3756853.jpg';
import styled from 'styled-components';
import comp from '../images/a.jpg';
import ear from '../images/b.jpeg';
import tech from '../images/c.jpg';

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
							</div>
							<div className='banner2'>
								<div className='images'>
									<img src={comp} alt='' className='a' />
									<img src={tech} alt='' className='c' />
									<img src={ear} alt='' className='b' />
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
	width: 100%;
	.banner {
		width: 100%;
		height: 300px;
	}
	.banner img {
		width: 100%;
		height: 250px;
	}
	.banner h2 {
		width: calc(100% - 2rem);
		margin: 1rem 1rem;
		font-size: 1.5rem;
		padding: 1rem;
		font-family: 'Bungee';
		color: orange;
		text-align: center;
		border: 3px solid #f2a3bd;
		text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}
	.banner2 {
		width: calc(100% - 2rem);
		// background: #e0218a;
		margin: 3rem 1rem;
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
		background: #0000aa;
		height: 100%;
		width: 100%;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px -4px 4px rgba(0, 0, 0, 0.3);
	}
	// .b {
	// 	grid-row: 1/3;
	// }
`;
