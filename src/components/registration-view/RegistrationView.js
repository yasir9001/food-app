import React, { Component } from 'react'
import {WrappedRegistrationForm} from './registration-form/RegistrationForm'
export class RegistrationView extends Component {
    render() {
        return (
            <div>
                <WrappedRegistrationForm />
            </div>
        )
    }
}