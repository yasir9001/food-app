import React, { Component } from 'react'
import { WrappedLoginForm } from './login-form/LoginForm'

export class LoginView extends Component {
    render() {
        return (
            <div className="login-from-wrapper">
                <div className="login-from-body">
                    <WrappedLoginForm />
                </div>
            </div>
        )
    }
}