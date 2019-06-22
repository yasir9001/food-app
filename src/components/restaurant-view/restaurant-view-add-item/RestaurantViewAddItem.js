import React, { Component } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

class RestaurantViewAddItem extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            // labelCol: {
            //     xs: { span: 24 },
            //     sm: { span: 8 },
            // },
            // wrapperCol: {
            //     xs: { span: 24 },
            //     sm: { span: 16 },
            // },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                // xs: {
                //     span: 24,
                //     offset: 0,
                // },
                // sm: {
                //     span: 16,
                //     offset: 8,
                // },
            },
        };
        return (
            <div className="add-item-wrapper">
                <div>
                    <h1>Enter the details of food item</h1>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
                            {getFieldDecorator('description', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Description of item is required'
                                    },
                                ],
                            })(<Input placeholder="Short description of food" />)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout} >
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
