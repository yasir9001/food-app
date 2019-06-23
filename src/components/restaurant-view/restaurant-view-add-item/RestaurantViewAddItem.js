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
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            console.log('return e', e)
            return e;
        }
        return e && e.fileList;
    };

    handleChange = info => {
        let fileList = [...info.fileList];
        console.log(info)
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        // fileList = fileList.slice(-2);

        // // 2. Read from response and show file link
        // fileList = fileList.map(file => {
        //     if (file.response) {
        //         // Component will show file.url as link
        //         file.url = file.response.url;
        //     }
        //     return file;
        // });

        // this.setState({ fileList });
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
                                // getValueFromEvent: this.normFile,
                            })(
                                <Upload onChange={(e) => this.handleChange(e)} fileList={this.state.fileList} multiple={true} listType="picture">
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


// let storageRef = firebase.storage().ref('photos/myPictureName')
// let fileUpload = document.getElementById("cameraInput")

// fileUpload.addEventListener('change', function(evt) {
//     let firstFile = evt.target.files[0] // upload the first file only
//     let uploadTask = storageRef.put(firstFile)
// })




// const fileList = [
//     {
//         uid: '-1',
//         name: 'xxx.png',
//         status: 'done',
//         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//         uid: '-2',
//         name: 'yyy.png',
//         status: 'done',
//         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
// ];

// const props = {
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     listType: 'picture',
//     defaultFileList: [...fileList],
// };

// const props2 = {
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     listType: 'picture',
//     defaultFileList: [...fileList],
//     className: 'upload-list-inline',
// };
