import React, { Component } from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class RestaurantHome extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="2" tabPosition="top"  >
                    <TabPane tab="Restaurants" key="1" >
                        sdsd
                    </TabPane>
                    <TabPane tab="My Requests" key="2">
                        sdsd
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export { RestaurantHome }   