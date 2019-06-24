import React, { Component } from 'react'
import {
    Form,
    Input,
    Button,
    InputNumber,
    message,
    Upload,
    Icon
} from 'antd';
import firebase from './../../../firebaseConfig'

class RestaurantViewAddItem extends Component {
    state = {
        fileList: []
    };
    path = firebase.database().ref().child('foodapp');

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const uid = localStorage.getItem('uid')
                const pushKey = this.path.child(`users/${uid}/foodIems`).push().key
                this.path.child(`users/${uid}/foodIems/${pushKey}`).set({
                    ...values,
                    image: values.image[0].thumbUrl,
                    id: pushKey
                })
                    .then(() => {
                        message.success("Food item added successfully")
                        this.props.form.resetFields()
                    })
            }
        });
    };

    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="add-item-wrapper">
                <div>
                    <h1>Enter the details of food item</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item >
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Name is required',
                                    },
                                ],
                            })(<Input placeholder="Name of food" />)}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('type', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Type of food item is required',
                                    },
                                ],
                            })(<Input placeholder="Type of food" />)}
                        </Form.Item>


                        <Form.Item label="">
                            {getFieldDecorator('price', {
                                rules: [
                                    {
                                        type: 'number',
                                        message: (<span>Enter a valid price<br /></span>)
                                    },
                                    {
                                        required: true,
                                        message: 'Price of item is required'
                                    },
                                ],
                            })(<InputNumber placeholder="Price of food" />)}
                        </Form.Item>

                        <Form.Item label="">
                            {getFieldDecorator('description', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Description of item is required'
                                    },
                                ],
                            })(<Input placeholder="Short description of food" />)}
                        </Form.Item>

                        <Form.Item extra="Upload an image of food item">
                            {getFieldDecorator('image', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload name="image" listType="picture">
                                    <Button>
                                        <Icon type="upload" /> Click to upload
                                    </Button>
                                </Upload>,
                            )}
                        </Form.Item>

                        <Form.Item  >
                            <Button type="primary" htmlType="submit" block>
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const RestaurantViewAddItemWrapper = Form.create({ name: 'addItem' })(RestaurantViewAddItem);

export { RestaurantViewAddItemWrapper as RestaurantViewAddItem }
