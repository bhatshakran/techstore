import React from 'react';
import styled from 'styled-components';
import { BsArrowClockwise } from 'react-icons/bs';
import { FcCustomerSupport } from 'react-icons/fc';
import { RiInstallLine } from 'react-icons/ri';
import { GoDeviceDesktop } from 'react-icons/go';

const Services = () => {
	return (
		<>
			<h2 className='title'>Services</h2>
			<div className='line'></div>
			<ServicesWrapper>
				<article className='item'>
					<GoDeviceDesktop className='icon' />
					<p>
						We offer a huge range of gadgets, hardware items and 'off the shelf'
						softwares.
					</p>
				</article>
				<article className='item'>
					<RiInstallLine className='icon' />
					<p>
						We own expertise in supplying installing all types of hardware
						including server machines, client terminals, network cabling,
						routers and data storage equipment etc.
					</p>
				</article>
				<article className='item'>
					<FcCustomerSupport className='icon' />
					<p>
						We offer 24x7 dedicated support. Our customer care service is
						specially set up to take care of the needs of our valuable
						customers. Our goal is to make our client happy with our services.
					</p>
				</article>
				<article className='item'>
					<BsArrowClockwise className='icon' />
					<p>We offer minimum 1year guarantee on our products.</p>
				</article>
			</ServicesWrapper>
		</>
	);
};

export default Services;

const ServicesWrapper = styled.section`
	width: 100%;
	margin: 5rem 0;
	text-align: center;
	display: grid;
	justify-content: center;
	padding: 3rem 0;
	grid-template-columns: repeat(1, minmax(120px, 250px));
	grid-row-gap: 2rem;
	background: #9966cc;
	color: #fff;

	.item {
		padding: 1rem;
	}
	.icon {
		transform: scale(3);
	}
	p {
		margin: 2rem 0;
	}
	// ipad
	@media screen and (min-width: 500px) {
		grid-template-columns: repeat(2, minmax(180px, 400px));
		grid-column-gap: 1rem;
	}
	// desktop
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(4, minmax(220px, 400px));
		grid-column-gap: 3rem;
	}
	.item {
		padding: 3rem;
	}
	.icon {
		transform: scale(5);
	}
	p {
		margin: 4rem 0;
		font-size: 1.5rem;
	}
`;
