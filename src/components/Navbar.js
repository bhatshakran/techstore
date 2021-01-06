import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHamburger, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../context';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
	useState(() => {
		AOS.init({
			duration: 2000,
		});
	});
	const iconVariant = {
		visible: {
			opacity: 0.8,
		},
		hover: {
			opacity: 1,
			x: [0, 5, -5, 5, -5, 0],
			textShadow: '0px 0px 8px rgb(255, 255, 255) ',
			transition: {
				delay: 0.2,
			},
		},
	};
	return (
		<ProductConsumer>
			{value => {
				const { cartItems, handleSidebar, handleCart } = value;
				return (
					<NavWrapper data-aos='fade-down'>
						<motion.div
							variants={iconVariant}
							whileHover='hover'
							animate='visible'>
							<FaHamburger className='nav-icon' onClick={handleSidebar} />
						</motion.div>
						<div className='nav-bran'>
							Tech <span>Buddy</span>{' '}
						</div>
						<motion.div
							variants={iconVariant}
							whileHover='hover'
							animate='visible'
							className='nav-icon'>
							<FaCartPlus onClick={handleCart} />
							<p>{cartItems}</p>
						</motion.div>
					</NavWrapper>
				);
			}}
		</ProductConsumer>
	);
}

const NavWrapper = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0 !important;
	background: white;
	padding: 2rem !important;
	color: black;
	font-size: 3rem;
	font-family: 'Poppins';
	display: flex;
	align-items: center;
	justify-content: center;
	.nav-bran {
		font-size: 4rem;
		font-family: 'Bungee';
		margin: 0 auto;
		color: black;
		text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.7);
	}
	.nav-icon {
		margin: 0 4rem;
		font-size: 3rem;
		cursor: pointer;
		position: relative;
	}

	.nav-icon p {
		position: absolute;
		top: -5px;
		right: -10px;
		background: #800020;
		border-radius: 50%;
		font-size: 1rem;
		color: white;
		padding: 4px;
	}
	span {
		color: orange;
		text-shadow: none;
	}
	@media screen and (max-width: 800px) {
		.nav-bran {
			font-size: 2rem;
		}
	}
`;
