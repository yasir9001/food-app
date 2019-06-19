import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { UserHome } from './user-home/UserHome';

class UserRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/user/home" render={(props) => <UserHome {...props} />} />
                </div>
            </BrowserRouter>
        )
    }
}

export { UserRoutes }