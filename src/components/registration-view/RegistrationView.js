import React, { Component } from 'react'
import { WrappedRegistrationForm } from './registration-form/RegistrationForm'
import './RegistrationView.css'
export class RegistrationView extends Component {
    render() {
        return (
            <div className="registration-from-wrapper">
                <div className="registration-from-body">
                    <WrappedRegistrationForm />
                </div>
            </div>
        )
    }
}