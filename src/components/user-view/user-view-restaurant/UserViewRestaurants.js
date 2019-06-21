import React, { Component } from 'react'
import { Input, Tag } from 'antd';
import { List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const Search = Input.Search;
const CheckableTag = Tag.CheckableTag;




export class UserViewRestaurants extends Component {
    constructor() {
        super()
        this.state = {
            selectedTags: [],
            tagsFromServer: [
                'Chinese',
                'BBQ',
                'Italian',
                'Fastfood',
                'Desi',
                'Sweets',
            ]
        }
    }
    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    render() {
        const { selectedTags, tagsFromServer } = this.state;

        return (
            <div className="user-view-restaurants-wrapper">
                <div>
                    <div className="user-view-restaurant-search-box">
                        <div>
                            <Search
                                placeholder="search..."
                                onSearch={value => console.log(value)}
                            />
                        </div>
                        <div>
                            <div>
                                <h5>Select categories:</h5>
                                {tagsFromServer.map(tag => (
                                    <CheckableTag
                                        key={tag}
                                        checked={selectedTags.indexOf(tag) > -1}
                                        onChange={checked => this.handleChange(tag, checked)}
                                    >
                                        {tag}
                                    </CheckableTag>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <InfiniteListExample {...this.props} />
                    </div>



                </div>
            </div>
        )
    }
}












const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
        stopData: false
    };

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
            });
        });

        window.addEventListener('scroll', (event) => {
            if (document.body.scrollHeight <= document.documentElement.scrollTop + window.innerHeight) this.handleInfiniteOnLoad()
        });
    }

    fetchData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length > 20) {
            message.warning('End of search result');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData(res => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    };

    render() {
        return (
            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item key={item.id} onClick={()=> this.props.history.push('/restaurant/detail_view')} >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a>{item.name.last}</a>}
                                    description={item.email}
                                />
                            </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className="demo-loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div>
        );
    }
}
