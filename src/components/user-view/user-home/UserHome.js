import React, { Component } from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export class UserHome extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Restaurants" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="My Requests" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        )
    }
}
