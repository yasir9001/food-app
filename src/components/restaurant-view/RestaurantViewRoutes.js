import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { RestaurantHome } from './restaurant-home/RestaurantHome'

function RestaurantRoutes() {
    return (
        <BrowserRouter>
            <>
                <Route exact path="/restaurant/home" render={() => <RestaurantHome />} />
            </>
        </BrowserRouter>
    )
}

export { RestaurantRoutes }