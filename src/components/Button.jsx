import React, { Component } from 'react';
import { Button , Col} from 'antd';
import './Applogin/Applogin.css'

class Buttons extends Component {    
    render() { 
        return (  
            <div>
                <Col span={12}>
                    <Button style={{width:'160px',height:'48px',border:'1px solid #007E80'}} icon="google">Google</Button>
                </Col>
                <Col span={12}>
                    <Button style={{width:'160px',height:'48px',border:'1px solid #007E80'}} icon="facebook">Facebook</Button>
                </Col>
            </div>
        );
    }
}
 
export default Buttons;