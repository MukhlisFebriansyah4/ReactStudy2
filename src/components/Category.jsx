import React, { Component } from 'react';
import {Card, Menu, Dropdown, Icon } from 'antd';
import {Consumer} from '../context'
class Category extends Component {
    constructor(props) {
        super(props); 
    }
    menu = () => {
    const SubMenu = Menu.SubMenu;
    const dummyfashion  =  this.props.fashions;
        return (

            <Menu>
                {dummyfashion.map(data => 
                    <SubMenu title={data.name}>
                        {data.categorySub.map(data2 =>
                            <SubMenu title={data2.name}>
                                {data2.categorySubChild.map(data3 =>
                                    <Menu.Item>{data3.name}</Menu.Item>
                                )}
                            </SubMenu>
                        )}
                    </SubMenu>
                )}                                    
            </Menu>            
        )
    }

    render() {
        return (  
            <Consumer>
                {value =>{
                    return(
                        <Card title="Data Fashion Students"                        
                        style={{ width: '100%' }}>
                        <Dropdown overlay={this.menu}>
                            <a className="ant-dropdown-link" href="#">
                              Menu Category Fashion <Icon type="down" />
                            </a>
                        </Dropdown>
                        </Card>
                    )
                }}
            </Consumer>
            
        );
    }
}
 
export default Category;