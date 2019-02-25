import React, { Component } from 'react';
import Category from './Category.jsx';
import {Consumer} from '../context'
class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <Consumer>
                {value =>{
                    return(
                        <div>
                            <Category
                                fashions = {value.datafashion}
                                
                            />
                        </div>
                    )}}
                    
            </Consumer>
            
        );
    }
}

 
export default Categories;
