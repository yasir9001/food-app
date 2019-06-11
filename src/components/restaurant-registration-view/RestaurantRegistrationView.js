import React, { Component } from 'react'
import { WrappedRestuarantRegistrationForm } from './restaurant-registration-form/RestaurantRegistrationForm'

export class RestaurantRegistrationView extends Component {
    render() {
        return (
            <div className="registration-from-wrapper">
                <div className="registration-from-body">
                    <WrappedRestuarantRegistrationForm />
                </div>
            </div>
        )
    }
}