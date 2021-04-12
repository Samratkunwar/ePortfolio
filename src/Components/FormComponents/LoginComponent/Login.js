import React, {Component} from 'react';
import Input from '../../ElementComponent/InputField/inputField';
import './login.css';
import Button from '../../ElementComponent/Button/Button';

import {login} from '../../../Services/user.service';

class Login extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'tim@claimapp.com',
                    required: true
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '**********',
                    required: true
                },
                value: ''
            }
        }
    }

    onChangeHandeller = (event, inputFieldIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        }
        const updatedFormElement = {
            ...updatedLoginForm[inputFieldIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedLoginForm[inputFieldIdentifier] = updatedFormElement;
        this.setState({loginForm: updatedLoginForm});

    }

    login = (event) => {
        event.preventDefault();
        this.setState( {loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value
        } 
        let email       = formData["email"],
            password    = formData["password"];
        login(
            email, password, this.loginStatus
        );
    }

    loginStatus = (status, message) => {
        if (status) {
            this.props.history.replace('/loginRedirect')
        }
    }


    render () {

        const formElementArray = [];
        for (let key in this.state.loginForm) {
            formElementArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = (
            <div className="form__box">
                <h1 className="form__heading" >Login</h1>
                <form onSubmit={this.login}>
                    {formElementArray.map(formElement => (
                        <Input 
                        key={formElement.id}
                        label={formElement.config.elementConfig.label}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.onChangeHandeller(event, formElement.id)}
                        />   
                        ))}
                    <Button type="success" label="Login" />
                </form>
                <p className="form__parahraph">Don't have an account! <strong><a href="/userSignup" className="form__link">Signup</a></strong></p>
            </div>
        )

        
        return (
            <div className="container">
           
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        {form}
                    </div>
                    <div className="col-lg-3"></div>
                </div>
        </div>
        )
    }
}


export default Login;