import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<div className='footer-logo'>
				Tech <span>Buddy</span>
				<p>Copyright 2021&#169;</p>
				<p> Bhat Shaqran</p>
			</div>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.footer`
	width: 100%;
	margin-top: 2rem;
	border-top: 3px solid grey;
	padding: 1rem;
	.footer-logo {
		text-align: center;
		font-size: 2rem;
	}
	span {
		color: orange;
	}
	.footer-logo p {
		font-size: 1rem;
		margin: 0;
	}
`;
