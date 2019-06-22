import React from 'react'
import { Route } from 'react-router-dom';

import { RestaurantHome } from './restaurant-home/RestaurantHome'
import { RestaurantViewDetailedScreen } from './restaurant-view-detail-screen/RestaurantViewDetailedScreen';
import { RestaurantViewTopNav } from './restaurant-view-top-Nav/RestaurantViewTopNav';
import { RestaurantViewAddItem } from './restaurant-view-add-item/RestaurantViewAddItem';

function RestaurantRoutes() {
    return (
        <>
            <Route path="/restaurant" render={(props) => <RestaurantViewTopNav {...props} />} />
            <Route exact path="/restaurant/home" render={(props) => <RestaurantHome {...props} />} />
            <Route exact path="/restaurant/detail_view" render={(props) => <RestaurantViewDetailedScreen  {...props} />} />
            <Route exact path="/restaurant/add" render={(props) => <RestaurantViewAddItem  {...props} />} />
        </>
    )
}

export { RestaurantRoutes }