import React, { Component } from 'react'
import { Tabs } from 'antd';
import { UserViewRestaurants } from './../user-view-restaurant/UserViewRestaurants'
const { TabPane } = Tabs;

export class UserHome extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Restaurants" key="1">
                    <UserViewRestaurants />
                </TabPane>
                <TabPane tab="My Requests" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        )
    }
}
