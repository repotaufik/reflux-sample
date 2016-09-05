'use strict'

import React from 'react'
import SelectionData from '../component/selectionData.jsx'

class DropdownCity extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            city :''
        }
    }
    componentWillReceiveProps(newProps) {

        if(this.state.city != newProps.value) {
            console.log("new props city ",newProps.value);
            this.setState({
                city : newProps.value,
            });
        }
    }

    handleChange(e){
    
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    renderListItems() {
        let items = [];
        let parent = '';

        if(this.state.city!= "" && this.state.city!= null ) {

            for (var key in Object.keys(this.state.city)) {
                items.push(<SelectionData key={Object.keys(this.state.city)[key]}
                                          data={Object.keys(this.state.city)[key]}>
                </SelectionData>);
            }

            parent = (
                <select id="Day"
                        onChange={this.handleChange}>
                    <optgroup label="Day">
                        <option value="-1"> -- Please Select -- </option>
                        {items}
                    </optgroup>
                </select>
            );
        }
        return parent;
    }

    render(){
        return(
            <div className="drop-down">
                {this.renderListItems()}
            </div>
        );
    }
}

export default DropdownCity;