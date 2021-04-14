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
    position: absolute;
    top: 20%;
    left: 25%;
    width: 50%;
    height: 52rem;
    padding: 60px 35px 35px 35px;
    border-radius: 20px;
    background: #ecf0f3;
    
    box-shadow: 5px 5px 10px #cbced1, -5px -5px 10px #cbced1 ;

    @media screen and (max-width: 950px) {
        top: 15%;
        left: 13%;
        width: 75%;
    }  
    
    @media screen and (max-width: 550px) {
        top: 5%;
        left: 8%;
        width: 85%;
    }  

    
`;

const FormTitle = styled.div`
    text-align: center;
    font-size: 28px;
    letter-spacing: .5px;
`;

const FormSubtitle = styled.div`
    text-align: center;
    font-size: 15px;
    padding-top: 7px;
    padding-bottom: 7px;

    letter-spacing: 3px;
`;

const Form = styled.form`
    width: 100%;

    @media screen and (max-width: 950px) {
        width: 100%;
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
                    placeholder: 'Johnny Walker',
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
                elementType: 'textarea',
                elementConfig: {
                    name: "message",
                    label: 'Message',
                    type: 'textarea',
                    placeholder: 'We want to hire you.',
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
                    <FormTitle>Contact Me!</FormTitle>
                    <FormSubtitle>Just Send a Message.</FormSubtitle>
                <Form onSubmit={this.submitform}>
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
                    <Button type="normal" label="Send Message" />
                </Form>
                <div className="link">
                    or <br />
                    <a href='https://linkedin.com/in/samrat-kunwar-4491b814a'>LinkedIn </a>
                </div>
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

