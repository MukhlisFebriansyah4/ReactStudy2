import React, { Component } from 'react';
import { Card , Icon } from 'antd';
import {Consumer} from '../context'

class Student extends Component {
    constructor(props) {
        super(props);
        this.onShowClick = this.onShowClick.bind(this);
        this.state = {  
            istoggleon:false
        }
    }    
    onShowClick = e => {
        this.setState({
            istoggleon: !this.state.istoggleon
        })
    } 
    onDelete = (id, dispatch) => {
        dispatch({type:'DELETE_STUDENT', payload: id})
    }
    render() { 
        const{student} = this.props
        const{istoggleon} = this.state
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return(
                        <div>
                            <Card>               
                                <div style={{display:'flex'}}>
                                    <h1>{student.name}</h1>
                                    <Icon onClick={this.onShowClick} type="caret-down" theme="filled" />
                                    <Icon onClick={this.onDelete.bind(this, student.id, dispatch)} type="delete" theme="filled" />
                                </div>
                                    { istoggleon ? (
                                <div>
                                    <p>{student.email}</p>
                                    <p>{student.phone}</p>
                                </div>
                                ):null}
                            </Card>                                    
                        </div>
                    )
                }}
            </Consumer> 
            
        );
    }
}
 
export default Student;