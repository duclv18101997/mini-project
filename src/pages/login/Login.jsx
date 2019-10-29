import React, { Component } from "react";
import "./login.css";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
class Login extends Component {
    state = {
        firstName: "",
        password: "",
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs);
    };

    render() {
        return (
            <div className='login containerfluid'>
                <div className='form-validate'>
                    <ValidationForm
                        onSubmit={this.handleSubmit}
                        onErrorSubmit={this.handleErrorSubmit}
                    >
                        <div className='form-group'>
                            <label htmlFor='firstName'>User name</label>
                            <TextInput
                                name='firstName'
                                id='firstName'
                                required
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <TextInput
                                name='password'
                                id='password'
                                type='password'
                                required
                                errorMessage={{
                                    required: "Password is required",

                                }}
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </ValidationForm>
                </div>
            </div>
        );
    }
}

export default Login;
