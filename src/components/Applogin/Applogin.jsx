import React, { Component } from 'react';
import { Row, Col ,Form, Icon, Input, Button, } from 'antd';
import gambarregister from '../../assets/img/login.jpg'
import gambarlogo from '../../assets/img/logo.jpg'
import Buttons from '../Button.jsx'
import './Applogin.css'
// import ColumnGroup from 'antd/lib/table/ColumnGroup';
class Container extends Component {    
    render() { 
        
        return (  
            <div>
                <Row>
                    <Col span={14}><img src={gambarregister} alt="" style={{width:'100%'}}/></Col>
                    <Col span={10}>
                        <div style={{display:'flex',flexDirection:'column',padding:'36px',alignItems:'center'}} >
                            <div>   
                                <img src={gambarlogo} alt=""/>
                            </div>
                            <div style={{marginTop:'64px'}}>
                                <h3 style={{color:'#007E80'}}>Daftar Sekarang</h3>
                            </div>

                            <Form onSubmit={this.handleSubmit} style={{width: '360px',marginTop:'16px'}} className="login-form">
                                <Form.Item >                                
                                    <Input style={{height:'48px',}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />                                
                                </Form.Item>
                                <Form.Item >                                
                                    <Input style={{height:'48px',}} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />                                
                                </Form.Item>                       
                                <Form.Item>                                
                                    <Input.Password style={{height:'48px',}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="input password" />
                                    {/* <Input  type="password" placeholder="Password" />                                 */}
                                </Form.Item>                                        
                                <h3>
                                    Dengan melakukan perdaftaran. Saya setuju dengan <span style={{color:'red'}}>Kebijakan Privasi</span> dan <span style={{color:'red'}}>Syarat & Ketentuan</span> monggopesan.com
                                </h3>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'360px',height:'48px',backgroundColor:'#007E80',marginTop:'16px',color:'White'}}>
                                    Daftar
                                </Button>
                                <div style={{display:'flex',alignItems:'center',padding: '16px 0px 16px 24px'}}>
                                    <div style={{height:'2px',width:'100px',backgroundColor:'grey'}}>

                                    </div>
                                        <span>atau dengan daftar</span>
                                    <div style={{height:'2px',width:'100px',backgroundColor:'grey'}}>

                                    </div>
                                </div>
                                <Row gutter={8} style={{marginTop:'16px'}}>
                                    <Buttons />
                                </Row>
                                <h3 style={{marginTop:'32px'}}> Sudah Punya akun monggopesan? <span style={{color:'red'}}>Masuk.</span></h3>                                
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
 
export default Container;