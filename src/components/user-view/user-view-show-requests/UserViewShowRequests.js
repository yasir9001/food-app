import React, { Component } from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export class UserViewShowRequests extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    this.props.data.filter((e) => {
                        if (this.props.type === 'all') return true
                        else {
                            return e.status === this.props.type
                        }
                    }).map((e, i) => {
                        return (
                            <Card
                            key={i}
                                style={{ width: 300, margin: '10px 10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={e.title}
                                    description={e.description}
                                />
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}