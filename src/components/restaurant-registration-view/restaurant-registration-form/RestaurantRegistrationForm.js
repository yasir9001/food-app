import React from 'react'
import {
    Form,
    Input,
    Icon,
    Button,
    message,
    Upload,
} from 'antd';
import firebase from './../../../firebaseConfig'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/png';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class RestaurantRegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                    .then((res) => {

                        firebase.database().ref().child('foodapp/users').child(res.user.uid)
                            .set({ ...values, type: 'restaurant' })
                            .then(() => {
                                message.success("Account Created")
                                this.props.history.push('/restaurant/detail_view')
                                // firebase.auth().currentUser.sendEmailVerification()
                                //     .then(function () {
                                //         alert('email sent')
                                //     }, function (err) {
                                //         console.log(err)
                                //     });
                            })
                    })
                    .catch((err) => {
                        message.error(err.message)
                    })
            }
        });
    };
    handleChangeimage = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
                console.log(this.state.imageUrl)
            );
        }
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className="registration-form-wrapper">
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >

                    <Form.Item label="Restaurant  Name" >
                        {getFieldDecorator('restaurantName', {
                            rules: [
                                {
                                    // type: 'text',
                                    message: 'This is not a valid name',
                                },
                                {
                                    required: true,
                                    message: 'Please enter your  restaurant name!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>


                    <Form.Item label="Owner Name" >
                        {getFieldDecorator('fullname', {
                            rules: [
                                {
                                    // type: 'text',
                                    message: 'This is not a valid name',
                                },
                                {
                                    required: true,
                                    message: 'Please enter your full name!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>

                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>


                    <Form.Item label="Country">
                        {getFieldDecorator('country', {
                            rules: [
                                {
                                    // type: 'text',
                                    message: 'Enter a valid country name',
                                },
                                {
                                    // required: true,
                                    message: 'Please enter your country name!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>


                    <Form.Item label="City">
                        {getFieldDecorator('city', {
                            rules: [
                                {
                                    // type: 'text',
                                    message: 'Please provide a valid city name!',
                                },
                                {
                                    // required: true,
                                    message: 'Please enter your  city name!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>

                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>

                    {/* <Form.Item label="Upload liscence" extra="Upload a scanned copy of your restaurant liscence">
                            <div>
                                <Upload 
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChangeimage}
                                    >
                                    <Button>
                                        <Icon type="upload" /> Click to upload
                                    </Button>
                                </Upload>
                            </div>
                    </Form.Item> */}



                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
let WrappedRestuarantRegistrationForm = Form.create({ name: 'register' })(RestaurantRegistrationForm);
export { WrappedRestuarantRegistrationForm }