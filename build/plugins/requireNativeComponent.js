


var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function requireNativeComponent(viewName,componentInterface,extraConfig){
return(0,_createReactClass2['default'])({
displayName:viewName,
render:function(){function render(){
return null;
}return render;}()});

}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */module.exports=requireNativeComponent;