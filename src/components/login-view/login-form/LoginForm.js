import React from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd';
import { connect } from 'react-redux'
import { saveLoginData } from './../../../redux-config/actions/action'
import firebase from './../../../firebaseConfig'
class LoginForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                    .then((res) => {
                        firebase.firestore().collection('users').doc(res.user.uid).get()
                            .then((blob) => {
                                this.props.saveLoginData({ ...res.user, ...blob.data() })
                                // this.props.history.push('/user/home')
                                window.location = '/user/home'
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
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
        // const { autoCompleteResult } = this.state;
        console.log(this.props)

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
console.log('loginform',this.props)
        return (
            <div className="registration-form-wrapper">
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >

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

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Signin
                        </Button>
                    </Form.Item>
                </Form>

                <div className="footer-link">
                    <span>Don't have an account!
                        <a onClick={() => this.props.history.push('/register')}>Register Now</a></span>
                </div>

            </div>
        );
    }
}


const matchStateToProps = (state) => {
    return ({
        userLoginData: state.mainReducer.userLoginData,
    })
}

const matchDispatchToProps = (dispatch) => {
    return {
        saveLoginData: (data) => {
            dispatch(saveLoginData(data))
        }
    }
}




let WrappedLoginForm = Form.create({ name: 'signin' })(LoginForm);
WrappedLoginForm = connect(matchStateToProps, matchDispatchToProps)(WrappedLoginForm)

export { WrappedLoginForm }
