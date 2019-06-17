import React, { Component } from 'react'
import { Tabs } from 'antd';
import { UserViewRestaurants } from './../user-view-restaurant/UserViewRestaurants'
import { UserViewRequests } from './../user-view-requests/UserViewRequests'
const { TabPane } = Tabs;

export class UserHome extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="2" tabPosition="left"  >
                <TabPane tab="Restaurants" key="1" >
                    <UserViewRestaurants />
                </TabPane>
                <TabPane tab="My Requests" key="2">
                    <UserViewRequests />
                </TabPane>
            </Tabs>
        )
    }
}
