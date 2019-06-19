import React, { Component } from 'react'
import { WrappedLoginForm } from './login-form/LoginForm'

export class LoginView extends Component {
    render() {
        console.log('LoginView',this.props)
        return (
            <div className="login-from-wrapper">
                <div className="login-from-body">
                    <WrappedLoginForm {...this.props}/>
                </div>
            </div>
        )
    }
}