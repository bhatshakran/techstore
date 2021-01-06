import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
	const liVariant = {
		visible: {
			opacity: 0.7,
		},
		hover: {
			opacity: 1,
			x: [0, 30, 0],
			transition: {
				duration: 1,
				type: 'spring',
			},
		},
	};

	return (
		<ProductConsumer>
			{value => {
				const { links, sidebarOpen, handleSidebar } = value;

				return (
					<SideWrapper show={sidebarOpen}>
						<motion.ul>
							{links.map(link => {
								return (
									<motion.li
										key={link.id}
										variants={liVariant}
										animate='visible'
										whileHover='hover'>
										<Link
											to={link.path}
											className='sidebar-link'
											onClick={handleSidebar}>
											{link.text}
										</Link>
									</motion.li>
								);
							})}
						</motion.ul>
					</SideWrapper>
				);
			}}
		</ProductConsumer>
	);
};

export default Sidebar;

const SideWrapper = styled.section`
	position: absolute;
	top: 70px;
	width: 100%;
	left: 0;
	background: white;
	padding: 1rem;
	z-index: 999;
	transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
	height: 100%;
	ul {
		display: flex;
		flex-direction: column;
		list-style-type: none;
		margin: 0 !important;
	}
	li {
		padding: 1rem;
		text-transform: capitalize;
		font-size: 2rem;
		list-style-type: none;
	}
	a {
		text-decoration: none;
		color: black;
	}
`;
