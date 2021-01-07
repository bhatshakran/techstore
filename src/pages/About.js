import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import pic from '../images/bady-abbas-IXvt-iL1Qlk-unsplash.jpg';

const About = () => {
	return (
		<AboutWrap>
			<div className='about-banner'>
				<img src={pic} alt='' />
				<p className='lead'>ABOUT US</p>
			</div>
			<div className='about-text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
				voluptas dicta asperiores eos, accusamus delectus aliquam nisi
				voluptatem tempore obcaecati veritatis neque nostrum animi, nemo
				distinctio eligendi modi libero. Fugit minus non dolorum modi,
				distinctio illo cupiditate fugiat tempore, hic, placeat at. Numquam aut
				quibusdam, natus pariatur vero rerum, iusto, culpa deleniti repellendus
				ipsam totam odit quisquam. Laudantium eum modi doloribus hic amet
				consectetur ratione accusamus et repudiandae quasi natus, odit, quam
				nemo sit dolor sint deserunt impedit error. Assumenda.
			</div>
			<div className='social-follow'>
				<div className='follow-txt'>
					<h3 className='title'>Follow us on</h3>
					<p>Social Media</p>
				</div>

				<ul>
					<li>
						<a href='https://www.facebook.com/drippimnnda.faucet.5/'>
							<FaFacebookF />
						</a>
					</li>
					<li>
						<a href='http://www.instagram.com/shakran._.bhat'>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a href='whatsapp:9149659818'>
							<FaWhatsapp />
						</a>
					</li>
				</ul>
			</div>
		</AboutWrap>
	);
};
export default About;

const AboutWrap = styled.div`
	width: 100%;
	height: 100%;

	.about-banner {
		width: 100%;
		height: 300px;
		position: relative;
	}

	.about-banner img {
		width: 100%;
		height: 100%;
	}
	.lead {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1.5rem;
		color: #fff;
		text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.3);
		font-family: 'poppins';
		padding: 1rem 3rem;
		border: 3px solid white;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
	}
	.about-text {
		margin: 3rem 2rem;
		line-height: 23px;
	}
	.social-follow {
		margin-top: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0.7rem;
		background: #333399;
	}
	.title {
		font-size: 1rem;
		margin: 0;
	}
	.social-follow .follow-txt {
		color: #fff;
	}
	.follow-txt p {
		font-size: 1.5rem;
		color: #ff9096;
		text-transform: uppercase;
		font-family: 'Poppins';
		font-weight: 800;
	}

	ul {
		margin-top: 1rem;
		display: flex;
		list-style: none;
		justify-content: center;
	}
	ul li {
		margin-right: 5rem;
		transform: scale(2);
	}
	li a {
		color: #fff;
	}

	// ipad && desktop
	@media screen and (min-width: 750px) {
		.about-banner {
			height: 600px;
		}
		.about-text {
			max-width: 750px;
			margin: 3rem auto;
		}
		.social-follow {
			padding: 2rem;
		}
		.follow-txt .title {
			font-size: 2.5rem;
		}

		.follow-txt p {
			font-size: 3.5rem;
		}
	}
`;
