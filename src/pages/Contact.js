import React from 'react';
import styled from 'styled-components';
import contact from '../images/contact.webp';

const Contact = () => {
	return (
		<ContactWrapper>
			<div className='contact-banner'>
				<img src={contact} alt='' />
			</div>
			<h3>Contact Us</h3>
			<div className='line'></div>
			<form className='form-group'>
				<input
					type='text'
					className='form-control'
					name='name'
					placeholder='Name'
				/>

				<input
					type='email'
					className='form-control'
					name='email'
					placeholder='Email'
				/>
				<input
					type='text'
					name='subject'
					className='form-control'
					placeholder='Subject'
				/>
				<textarea
					name='message'
					className='txt-area'
					placeholder='Your Message Here'
				/>
			</form>
		</ContactWrapper>
	);
};

export default Contact;

const ContactWrapper = styled.div`
	position: relative;
	top: 70px;
    width: 100%;
   
    .contact-banner{
        width: 100%;
        height: 250px;
    }
    .contact-banner img{
        width: 100%;
        height: 100%;
    }
	h3 {
		text-align: center;
		font-family: 'Poppins';
        font-size:2.8rem;
	}
	.line {
		height: 3px;
		width: 150px;
		border-bottom: 5px solid orange;
        margin 0rem auto;
        margin-bottom: 2rem;
	
    }
    
    .form-group{
        width: calc(100% - 2rem);
        margin: 2rem auto;
        padding: 1rem 0;
        font-family: 'Poppins';
    }

    .form-control{
        margin: 1rem 0;
        width: 100%;
        border: 1px solid #ececec;
        border-radius: 0;
        height: 40px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }

    .txt-area{
        resize: none;
        width: 100%;
        height: 400px;
        border: 1px solid #ececec;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        padding: 0.5rem;
    }

    // ipad
    @media screen and (min-width: 720px) {
        .contact-banner{
            height: 350px;
        }
       
    }

    // desktop
    @media screen and (min-width: 1024px) {
        .contact-banner{
            height: 500px;
            opacity: 0.9;
        }
        .form-control{
            height: 50px;
        }
    }
`;
