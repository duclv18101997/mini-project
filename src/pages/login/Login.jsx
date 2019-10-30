import React, { Component } from "react";
import "./login.css";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
import { withRouter } from 'react-router' 
class Login extends Component {
    state = {
        userName: "",
        password: "",
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
       this.props.history.push('/test')
    };

    render() {
        return (
            <div className='login containerfluid'>
                <div>
                    <div className='logo-login'> 
                    <img src={require('./image/computer.png')}/>
                    </div>
                    <div className='form-validate'>
                        <ValidationForm
                            onSubmit={this.handleSubmit}
                            onErrorSubmit={this.handleErrorSubmit}
                        >
                            <div className='form-group'>
                                <label className='title'>User name</label>
                                <TextInput
                                    name='userName'
                                    required
                                    errorMessage={{
                                        required: "Username is required",
                                    }}
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='title'>Password</label>
                                <TextInput
                                    name='password'
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
                                <button className='btn btn-primary'>Login</button>
                            </div>
                        </ValidationForm>
                    </div>
                </div>

            </div>
        );
    }
}
Login = withRouter(Login)
export default Login;
