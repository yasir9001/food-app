import React from 'react'
import {
    Form,
    Input,
    Select,
    Button,
    InputNumber
} from 'antd';

import firebase from './../../../firebaseConfig';

const { Option } = Select;

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        number: {
            value: 11,
        },
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                .then((res)=>{
                    firebase.firestore().collection('users')
                    .add({...values})
                })
                .catch((err)=> console.log(err))
                console.log('Received values of form: ', values);
            }
        });
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

    render() {
        const { getFieldDecorator } = this.props.form;
        const number = this.state.number;
        const tips =
            'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';

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

        console.log(this.props.form)

        return (
            <div className="registration-form-wrapper">
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >

                    <Form.Item label="Full Name" >
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


                    <Form.Item label="Gender">
                        {getFieldDecorator('gender', {
                            rules: [{ required: false, message: 'Please select your gender!' }],
                        })(
                            <Select
                                placeholder="select you gender"
                            // onChange={this.handleSelectChange}
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                            </Select>,
                        )}
                    </Form.Item>
                            
                    <Form.Item label="Age"

                        // validateStatus={number.validateStatus}
                        // help={number.errorMsg}
                    >
                        {getFieldDecorator('age', {
                            rules: [
                                {
                                    type: 'number',
                                    message: 'Enter your valid age',
                                },
                                {
                                    required: true,
                                    message: 'Please enter your age',   
                                },
                            ],
                        })(<InputNumber min={10} max={100} />)}
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
let WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export { WrappedRegistrationForm }