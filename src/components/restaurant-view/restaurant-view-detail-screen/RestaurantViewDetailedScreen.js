import React, { Component } from 'react'
import { Carousel, Tag } from 'antd';

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

class RestaurantViewDetailedScreen extends Component {

    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    render() {
        const { selectedTags } = this.state;

        return (
            <div className="restaurant-view-detail-screen-wrapper">
                <div>
                    <Carousel autoplay>
                        <div className="carousel-item">
                            <div style={{ background: `url(https://picsum.photos/1000/500?random=1) no-repeat center center`, backgroundSize: 'cover', height: '50vh' }}></div>
                        </div>

                        <div className="carousel-item">
                            <div style={{ background: `url(https://picsum.photos/1000/500?random=2) no-repeat center center`, backgroundSize: 'cover', height: '50vh' }}></div>
                        </div>

                        <div className="carousel-item">
                            <div style={{ background: `url(https://picsum.photos/1000/500?random=3) no-repeat center center`, backgroundSize: 'cover', height: '50vh' }}></div>
                        </div>

                        <div className="carousel-item">
                            <div style={{ background: `url(https://picsum.photos/1000/500?random=4) no-repeat center center`, backgroundSize: 'cover', height: '50vh' }}></div>
                        </div>
                    </Carousel>
                </div>

                <div className="short-info-wrapper">
                    <div className="short-info">
                        <div className="short-info-image"><img src="https://picsum.photos/500/300?random" /></div>
                        <div className="short-info-text">
                            <h1>Our Story</h1>
                            <p>Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they. Stuff at avoid of sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now. Separate screened he outweigh of distance landlord. </p>
                        </div>
                    </div>
                </div>

                <div className="food-items-wrapper">
                    <div className="food-items">
                        <div className="food-tags">
                            <h1>Today's Special</h1>
                            <div>
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

export { RestaurantViewDetailedScreen }