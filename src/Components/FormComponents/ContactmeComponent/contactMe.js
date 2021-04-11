import React, {Component} from 'react'
import styled from 'styled-components';
import {FontStyle} from '../../../Css/globalStyle';
import Button from '../../ElementComponent/Button/Button';
import Input from '../../ElementComponent/InputField/inputField';
import './contactMe.css';

import {AiFillMessage} from 'react-icons/ai';
import {sendEmail} from '../../../Services/services';

const Section = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(31, 29, 29, .7);
    backdrop-filter: blur(5px);
    z-index: 9999;
    ${FontStyle}
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
`;

const ContactMeButton = styled.a`
    position: fixed;
    height: 7rem; 
    width: 7rem;
    border-radius: 50%;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
    background: rgba(255, 255, 255, .1);
    box-shadow: 20px 20px 20px rgba(0, 0, 0, .5);
    backdrop-filter: blur(5px);
    border-top: .5px solid rgba(225, 225, 225, .2);
    border-left: 1px solid rgba(225, 225, 225, .2);

`;

const ContactButtonIcon = styled(AiFillMessage)`
    
    margin-top: 1.4rem;
    font-size: 4rem;
    color: var(--color-white);
    cursor: pointer;
    user-select: none;
    transform: translateY(20px);
    opacity: 0;
    transition: .5s;
       
    ${ContactMeButton}:hover & {
        transform: translateY(0px);
        opacity: 1;
    }

    @media screen and (max-width: 360px) {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const FormSection = styled.div`

    background-size: cover;
    width: 75%;
    height: 50rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 2rem 4rem rgba(var(--color-black), .2); 
    object-fit: cover;
    
    @media screen and (max-width: 950px) {
        height: 30rem;
        width: 85%;
    } 

    
`;

const FormLabel = styled.h1`
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transform: all .2s;
    @media screen and (max-width: 950px) {
        font-size: 1.3rem;
    } 
`;

const Form = styled.form`
    width: 50%;

    @media screen and (max-width: 950px) {
        width: 45%;
    } 

`;


class ContactMe extends Component {

    state = {
        contactform: {
            from_name: {
                elementType: 'input',
                elementConfig: {
                    name: "from_name",
                    label: 'Full Name',
                    type: 'text',
                    placeholder: 'Johnny Deep',
                    required: true
                },
                value: ''
            },
            from_email: {
                elementType: 'input',
                elementConfig: {
                    name: "from_email",
                    label: 'Email',
                    type: 'email',
                    placeholder: 'johnny@eportfolio.com',
                    required: true
                },
                value: ''
            },
            message: {
                elementType: 'input',
                elementConfig: {
                    name: "message",
                    label: 'Message',
                    type: 'text',
                    placeholder: 'Message',
                    required: true
                },
                value: ''
            },
        }
    }

    onChangeHandeller = (event, inputFieldIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactform
        }
        const updatedFormElement = {
            ...updatedContactForm[inputFieldIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedContactForm[inputFieldIdentifier] = updatedFormElement;
        this.setState({contactform: updatedContactForm});
    }

    submitform = (event) => {
        event.preventDefault();
        sendEmail(event);
    }

    render () {

        const formElementArray = [];
        for (let key in this.state.contactform) {
            formElementArray.push({
                id: key,
                config: this.state.contactform[key]
            });
        }

        let form = (
            <FormSection className="FormSection">
                <a href="#" className="section_close">&times;</a>
                <Form onSubmit={this.submitform}>
                    <FormLabel>Contact Me!</FormLabel>
                    {formElementArray.map(formElement => (
                        <Input 
                        key={formElement.id}
                        name = {formElement.config.elementConfig.name}
                        label={formElement.config.elementConfig.label}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.onChangeHandeller(event, formElement.id)}
                        />   
                    ))}
                    <Button type="success" label="Send" />
                </Form>
            </FormSection>
        )

        return (
            <div>
                <ContactMeButton href="#Section">
                    <ContactButtonIcon />
                </ContactMeButton>
                <Section className="Section" id="Section">
                    {form}
                </Section>
            </div>

        )
    }
}

export default ContactMe
