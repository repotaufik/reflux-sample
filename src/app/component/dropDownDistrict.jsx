'use strict';

import React from 'react';
import SelectionData from '../component/selectionData.jsx';

class DropDownDistrict extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.renderListItems = this.renderListItems.bind(this)
        this.state = {
            district :"",
            city : ""
        };
    }

    componentDidMount(){
        
        
    }

    componentWillReceiveProps(newProps) {
        console.log("new props",newProps);
        if(this.state.district != newProps.value) {
            this.setState({
                district : newProps.value,
            });
        }
    }

    handleChange(e){
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    componentWillUnmount() {
        
    }

    renderListItems() {
        var items = [];
        if(this.state.district!= "" && this.state.district != null && typeof (this.state.district) != 'undefined') {
            for (var key in Object.keys(this.state.district)) {
                items.push(<SelectionData key={Object.keys(this.state.district)[key]}
                                          data={Object.keys(this.state.district)[key]}>
                </SelectionData>);
            }
        }
        return items;
    }
    render(){
        return(
            <div className="personal-data">
                <select id="district"
                        onChange={this.handleChange}>
                    <optgroup label="Kecamatan">
                        <option value="-1"> -- Please Select -- </option>
                        {this.renderListItems()}
                    </optgroup>
                </select>
            </div>
        );
    }
}

export default DropDownDistrict;
