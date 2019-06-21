import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { UserHome } from './user-home/UserHome';

class UserRoutes extends Component {
    render() {
        return (
            <Route exact path="/user/home" render={(props) => <UserHome {...props} />} />
        )
    }
}

export { UserRoutes }