import React from 'react';
import {  Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const Headers = () => {
    return (                  
        <div>
            {/* <Row type="flex">
                <Col span={6} order={4}>{props.title}</Col>
                <Col span={6} order={3}>2 col-order-3</Col>
                <Col span={6} order={2}>3 col-order-2</Col>
                <Col span={6} order={1}>4 col-order-1</Col>
            </Row> */}
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Students List</Menu.Item>
                        <Menu.Item key="2">Home</Menu.Item>
                        
                    </Menu>
                </Header>   
            </Layout>
            
        </div>
    );
}
 
// Headers.defaultProps = {
//     title: "Student List"
// }

// const StylingHeaders = {
//     color : 'pink',
//     fontSize : '20px',
// }   


export default Headers;