import React, { Component } from 'react'
import { Tabs, Card, Icon, Avatar } from 'antd';
import { RestaurantViewShowRequest } from './../restaurant-view-show-request/RestaurantViewShowRequest'

const { Meta } = Card;
const { TabPane } = Tabs;

class RestaurantViewRequests extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'delivered',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'pending',
                },
                {
                    title: 'Rnfom22',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },

                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'delivered',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'delivered',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'delivered',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'delivered',
                },

            ]
        }
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="2">
                    {/* <TabPane tab="All Requests" key="1">
                        <RestaurantViewShowRequest type="all" data={this.state.data} />
                    </TabPane> */}
                    <TabPane tab="In Progress" key="2">
                        <RestaurantViewShowRequest type="inprogress" data={this.state.data} />
                    </TabPane>
                    <TabPane tab="Pending" key="3">
                        <RestaurantViewShowRequest type="pending" data={this.state.data} />
                    </TabPane>
                    <TabPane tab="Delivered" key="4">
                        <RestaurantViewShowRequest type="delivered" data={this.state.data} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export { RestaurantViewRequests }
