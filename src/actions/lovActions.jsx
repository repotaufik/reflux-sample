import Reflux from 'reflux';

const LovActions = Reflux.createActions([
     {'loadCity': {children: ['completed', 'failed']}},
     {'loadDistrict': {children: ['completed', 'failed']}}
]);

LovActions.loadCity.listenAndPromise(function(){
    return $.ajax({
        type: "GET",
        url: "https://sayurbox.firebaseio.com/areas/DKI%20Jakarta.json"
    });

});
LovActions.loadDistrict.listenAndPromise(function(city){
    return $.ajax({
        type: "GET",
        url: "https://sayurbox.firebaseio.com/areas/DKI%20Jakarta/"+city+".json"
    });

});
export default LovActions;
