'use strict'

import React from 'react';

class SelectionData extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <option value={this.props.data}>{this.props.data}</option>
        );
    }
}

export default SelectionData;