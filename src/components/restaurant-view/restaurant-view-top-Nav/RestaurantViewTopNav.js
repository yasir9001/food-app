import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
// const { SubMenu } = Menu;

class RestaurantViewTopNav extends Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="restaurant-view-top-nav-wrapper">
                <div className="logo">
                    <div>
                        <img src={require('./../../../assets/images/logo.png')} />
                        <span>Food Experts</span>
                    </div>
                </div>
                <div className="nav-bar">
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" theme="filled" />
                            <Link style={{ display: 'inline' }} to='/restaurant/detail_view'>Home</Link>
                        </Menu.Item>

                        <Menu.Item key="order">
                            <Icon type="appstore" theme="filled" />
                            <Link style={{ display: 'inline' }} to='/restaurant/home'>Orders</Link>
                        </Menu.Item>

                        <Menu.Item key="upload">
                            <Icon type="plus-circle" />
                            <Link style={{ display: 'inline' }} to='/restaurant/add'>Add</Link>
                        </Menu.Item>

                        <Menu.Item key="logout">
                            <span>Logout</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

export { RestaurantViewTopNav }