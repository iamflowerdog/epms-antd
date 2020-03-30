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
import FormBuilders from './FormBuilders';

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

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    {
      key: "userName",
      label: "User name",
      tooltip: "user name",
      initialValue: "Nate",
      widget: Input,
      required: true
    },
    {
      key: "password",
      label: "Password",
      widget: Input,
      type: "password"
    },
    {
      key: "date",
      label: "Birth date",
      widget: DatePicker,
      widgetProps: { style: { width: "100%" } }
    },
    {
      key: "gender",
      label: "Gender",
      initialValue: "female",
      widget: Select,
      children: genderOptions
    },
    {
      key: "phone",
      label: "Phone",
      widget: Input,
      required: true,
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
    },
    {
      key: "email",
      label: "Email",
      widget: Input,
      rules: [
        {
          type: "email",
          message: "Please input valid email address."
        }
      ]
    },
    {
      key: "age",
      label: "Age",
      initialValue: 10,
      widget: InputNumber
    }
  ]
};

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
    return (
      <Form 
        onSubmit={this.handleSearch}
      >
        <FormBuilders 
          meta={formMeta}
          form={this.props.form}
        />
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