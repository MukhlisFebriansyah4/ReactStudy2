import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import { connect } from 'http2';
import { deleteStudent } from '../../store/actions/studentAction'
import {connect} from 'react-redux'

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
    onDelete = (id) => {        
        console.log(id);
        this.props.deleteStudent(id)
    }
    render() { 
        const{student} = this.props
        const{istoggleon} = this.state                    
                    return(
                        <div>
                            <Card>               
                                <div style={{display:'flex'}}>
                                    <h1>{student.name}</h1>
                                    <Icon onClick={this.onShowClick} type="caret-down" theme="filled" />
                                    <Icon onClick={this.onDelete.bind(this, student.id)}type="delete" theme="filled" />
                                    <Link to={`student/edit/${student.id}`}><Icon type="edit" theme="filled" /></Link>                                    
                                </div>
                                    { istoggleon ? (
                                <div>
                                    <p>{student.email}</p>
                                    <p>{student.phone}</p>
                                </div>
                                ):null}
                            </Card>                                    
                        </div>
                                    
            
        );
    }
}
 
// export default Student;

export default connect(null, { deleteStudent})(Student)