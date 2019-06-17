import React, { Component } from 'react'
import { Input, Tag } from 'antd';


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

                </div>
            </div>
        )
    }
}
