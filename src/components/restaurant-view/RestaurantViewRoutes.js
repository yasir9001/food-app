import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';

import { RestaurantHome } from './restaurant-home/RestaurantHome'
import { RestaurantViewDetailedScreen } from './restaurant-view-detail-screen/RestaurantViewDetailedScreen';

function RestaurantRoutes(props) {
    return (
        <BrowserRouter>
            <>
                <Route exact path="/restaurant/home" render={(props) => <RestaurantHome {...props}/>} />
                <Route exact path="/restaurant/detail_view" render={(props) => <RestaurantViewDetailedScreen  {...props}/>} />
            </>
        </BrowserRouter>
    )
}

export { RestaurantRoutes }