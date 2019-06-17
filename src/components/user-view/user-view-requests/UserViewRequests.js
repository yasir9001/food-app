import React, { Component } from 'react'
import { Tabs, Card, Icon, Avatar } from 'antd';
import { UserViewShowRequests } from '../user-view-show-requests/UserViewShowRequests';

const { Meta } = Card;
const { TabPane } = Tabs;

export class UserViewRequests extends Component {
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

            ]
        }
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="All Requests" key="1">
                        <UserViewShowRequests type="all" data={this.state.data} />
                    </TabPane>
                    <TabPane tab="In Progress" key="2">
                        <UserViewShowRequests type="inprogress" data={this.state.data} />
                    </TabPane>
                    <TabPane tab="Pending" key="3">
                        <UserViewShowRequests type="pending" data={this.state.data} />
                    </TabPane>
                    <TabPane tab="Delivered" key="4">
                        <UserViewShowRequests type="delivered" data={this.state.data} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}