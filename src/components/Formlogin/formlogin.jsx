import React, { Component } from 'react';
import { Form, Icon, Input, Button, } from 'antd';
import {authLogin} from '../../store/actions/authAction'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './login.css'

class formlogin extends Component {
    state = {}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);            
              const success = await this.props.authLogin(values);

               if(success){ 
                this.props.history.push('/');
            }
          }
        });
      }
    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </Form.Item>
            <Form.Item>                    
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            <Link to={`/register`}><Icon type="edit" theme="filled" />Register</Link>           
            </Form.Item>
      </Form>
         );
    }
}
 
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(formlogin)
export default connect(null, { authLogin })(WrappedNormalLoginForm);