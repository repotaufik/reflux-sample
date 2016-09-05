import Reflux from 'reflux';
import LovActions from '../actions/lovActions.jsx';

const LovStore = Reflux.createStore({
    listenables: LovActions,

    init() {

    },

    onLoadCity() {
        this.trigger({
            city : {
                loading : true
            }
        });
    },

    onLoadCityCompleted(data) {
        this.trigger({
            city : {
                data   : data,
                loading : true
            }
        });
    },

    onLoadCityFailed(error){
        this.trigger({
            city : {
            error : error,
            loading: false,
            hasError : true
            }
        });
    },


    onLoadDistrict() {
        this.trigger({
            district : {
                loading : true
            }
        });
    },
    onLoadDistrictCompleted(data) {
        this.trigger({
            district : {
                data   : data,
                loading : false
            }
        });
    },

    onLoadDistrictFailed(error){
        this.trigger({
            district : {
            error : error,
            loading: false,
            hasError : true
            }
        });
    },
});
export default LovStore;
