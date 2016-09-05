import React 			from 'react';
import LovStore 		from '../stores/lovStore.jsx';
import LovActions 		from '../actions/lovActions.jsx';
import DropdownCity 	from './component/dropdownCity.jsx';
import DropdownDistrict from './component/dropdownDistrict.jsx';

class App extends React.Component {

	constructor(props){
		super(props);
		this.onCityChange = this.onCityChange.bind(this);
		this.onChangeCity = this.onChangeCity.bind(this);
		this.state={
			city : '',
			selectedCity:'',
			district:''
		}
	}

	componentDidMount(){
		this.unsubscribe = LovStore.listen(this.onCityChange.bind(this));
		console.log("componentDidMount {}");
		LovActions.loadCity();
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	onCityChange(data){
		if(typeof data.city != 'undefined' && !data.city.loading){
			console.log("onCityChange if {}",data.city.data);
			this.setState({
				city:data.city.data
			});
		}else if(typeof data.district != 'undefined' && !data.district.loading){
			console.log("onCityChange if {}",data.district.data);
			this.setState({
				district:data.district.data
			});
		}
	}
	onChangeCity(e){
		console.log("on change city listener",e.target.value);
		let city = e.target.value;
		LovActions.loadDistrict(city);
	}

   render() {
      return (
      	<div>
         	<div>
            	<DropdownCity value={this.state.city} onChange={this.onChangeCity}/>
         	</div>
         	<div>
         		<DropdownDistrict value={this.state.district}/>
         	</div>
         </div>
      );
   }
}

export default App;
