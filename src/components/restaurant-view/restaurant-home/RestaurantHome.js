import React, { Component } from 'react'
import { Tabs } from 'antd';
import { RestaurantViewRequests } from '../restaurant-view-requests/RestaurantViewRequests';

const { TabPane } = Tabs;

class RestaurantHome extends Component {

    render() {
        return (
            <div>
                <RestaurantViewRequests />
            </div>
        )
    }
}

export { RestaurantHome }   