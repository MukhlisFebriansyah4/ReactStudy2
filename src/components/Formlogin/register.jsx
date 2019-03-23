import React from 'react';
import {
  Form, Input, Select, Button, AutoComplete,
} from 'antd';
import axios from 'axios';


class Registerstudent extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
        const ex_link = "https://cors-anywhere.herokuapp.com/";
        axios.post(ex_link + 'https://node-student.herokuapp.com/api/student/signup', {
        email: values.email,
        password: values.password,
        name: values.name,
        handphone: values.phone,
        address: values.address
      })
        .then((res) => {
          this.props.history.push('/login');
          alert('Berhasil Register')
        })

    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }



  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input type="password" placeholder="Password" />
            )}
            </Form.Item>
        <Form.Item
          label= "Name" 
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </Form.Item>
        <Form.Item
          label= "Address" 
        >
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your address!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegisterstudent = Form.create({ name: 'register' })(Registerstudent);

export default WrappedRegisterstudent