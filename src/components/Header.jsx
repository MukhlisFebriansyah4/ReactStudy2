import React from 'react';
import { Row, Col } from 'antd';

const Headers = (props) => {
    return (                  
        <div>
            <Row type="flex">
                <Col span={6} order={4}>{props.title}</Col>
                <Col span={6} order={3}>2 col-order-3</Col>
                <Col span={6} order={2}>3 col-order-2</Col>
                <Col span={6} order={1}>4 col-order-1</Col>
            </Row>
            
        </div>
    );
}
 
Headers.defaultProps = {
    title: "Student List"
}

const StylingHeaders = {
    color : 'pink',
    fontSize : '20px',
}   


export default Headers;