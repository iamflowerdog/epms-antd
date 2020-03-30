import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Tooltip,
  Icon
} from 'antd';

import './index.less';

const Option = Select.Option;

const genderOptions = [
  { value: "male", displayName: "Male" },
  { value: "female", displayName: "Female" }
].map(item => (
  <Option key={item.value} value={item.value}>
    {item.displayName}
  </Option>
))

// 表单组件
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '123',
        password: null,
        birthday: null,
        gender: null,
      }
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  
  handleSearch(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(
      (errors, values) => {
        if (errors) {
          return;
        }
        console.log("Ok", values)
      }
    )
  }

  resetForm() {
    this.props.form.resetFields();
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    let { formData } = this.state;
    return (
      <Form 
        onSubmit={this.handleSearch}
        style={{ width: "400px", margin: 'auto' }}
      >
        <Form.Item 
          label={
            <span>
              User name&nbsp;
              <Tooltip title="name">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          } 
        >
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
            initialValue: formData.name
          })(<Input placeholder="请输入房间编号" autoComplete="off" />)}
        </Form.Item>
        <Form.Item
          label='Password'
        >
          {getFieldDecorator('password', {
            rules: [
              {
                required: false,
                message: 'Input password!',
              },
            ]
          })(<Input placeholder="请输入password" type="password" autoComplete="off" />)}
        </Form.Item>
        <Form.Item
          label='Birth Date'
        >
          {getFieldDecorator('birthday', {
            rules: [
              {
                required: false,
                message: 'Input birthday!',
              },
            ]
          })(<DatePicker style={{ width: "100%" }} placeholder="birthday" />)}
        </Form.Item>
        <Form.Item
          label='Gender'
        >
          {getFieldDecorator('gender', {
            rules: [
              {
                required: false,
                message: 'Input gender!',
              },
            ]
          })(
             <Select placeholder="gender">
               {genderOptions}
             </Select>
            )}
        </Form.Item>
        <Form.Item
          label='Phone'
        >
          {getFieldDecorator('phone', {
            rules: [
              {
                pattern: /^\d+$/,
                message: "Phone must only contain numbers."
              },
              {
                min: 11,
                message: "Phone number at least lenght of 11"
              }
            ]
          })(<Input placeholder="Phone" />)}
        </Form.Item>
        <Form.Item
          label='Email'
        >
          {getFieldDecorator('email', {
            rules: [
              {
                type: "email",
                message: "Please input valid email address."
              }
            ]
          })(<Input placeholder="email" />)}
        </Form.Item>
        <Form.Item
          label='Age'
        >
          {getFieldDecorator('age', {
            rules: [],
            initialValue: 10
          })(<InputNumber placeholder="age" />)}
        </Form.Item>
        <div style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>&nbsp; &nbsp;
          <Button onClick={this.resetForm}>Reset</Button>
        </div>
      </Form>
    )
  }
}

const App = Form.create({name: 'search'})(SearchForm);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)