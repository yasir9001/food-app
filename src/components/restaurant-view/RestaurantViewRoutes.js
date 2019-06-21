import React from 'react'
import { Route } from 'react-router-dom';

import { RestaurantHome } from './restaurant-home/RestaurantHome'
import { RestaurantViewDetailedScreen } from './restaurant-view-detail-screen/RestaurantViewDetailedScreen';

function RestaurantRoutes() {
    return (
        <>
            <Route exact path="/restaurant/home" render={(props) => <RestaurantHome {...props} />} />
            <Route exact path="/restaurant/detail_view" render={(props) => <RestaurantViewDetailedScreen  {...props} />} />
        </>
    )
}

export { RestaurantRoutes }