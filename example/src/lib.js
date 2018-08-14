'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),exports.connect=void 0;var _inferno=require('inferno'),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_createInfernoContext=require('create-inferno-context'),_createInfernoContext2=_interopRequireDefault(_createInfernoContext);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},StoreContext=(0,_createInfernoContext2.default)(),connect=function(a,b){return function(c){return function(d){function e(){var d,f,g;_classCallCheck(this,e);for(var h,i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];return g=(h=(f=_possibleConstructorReturn(this,(d=e.__proto__||Object.getPrototypeOf(e)).call.apply(d,[this].concat(j))),f),f.dispatcher=function(a,b,c){return function(){for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c.apply(void 0,[{state:_extends({},b),updateStore:a}].concat(e))}},f.mapStateToProps=function(b){return a?a(_extends({},b)):{}},f.mapActionsToProps=function(a,c){return b?Object.keys(b).reduce(function(d,e){return _extends({},d,_defineProperty({},e,f.dispatcher(a,c,b[e])))},{}):{}},f.render=function(){return(0,_inferno.createComponentVNode)(2,StoreContext.Consumer,{children:function(a){return(0,_inferno.normalizeProps)((0,_inferno.createComponentVNode)(2,c,_extends({},f.mapStateToProps(a.state),f.mapActionsToProps(a.updateStore,a.state),f.props)))}})},h),_possibleConstructorReturn(f,g)}return _inherits(e,d),e}(_inferno.Component)}},Provider=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));if(c.persist=function(){!1!==c.props.persist&&(c.props.persist.storage.removeItem(c.props.persist.key||'inferno-context-api-store'),c.props.persist.storage.setItem(c.props.persist.key||'inferno-context-api-store',JSON.stringify(c.state)))},c.render=function(){return(0,_inferno.createComponentVNode)(2,StoreContext.Provider,{value:{state:_extends({},c.state),updateStore:function(a,b){c.setState(_extends({},c.state,a),function(){c.persist(),b&&b(c.state)})}},children:c.props.children})},!1!==c.props.persist){var d=c.props.persist.storage.getItem(c.props.persist.key||'inferno-context-api-store');c.state=_extends({},c.props.store,c.props.persist.statesToPersist(JSON.parse(d)||{})),c.persist()}else c.state=_extends({},c.props.store);return c}return _inherits(b,a),b}(_inferno.Component);Provider.propTypes={children:_propTypes2.default.element.isRequired,store:_propTypes2.default.object.isRequired,persist:_propTypes2.default.oneOfType([_propTypes2.default.shape({storage:_propTypes2.default.object.isRequired,statesToPersist:_propTypes2.default.func.isRequired,saveInitialState:_propTypes2.default.bool,key:_propTypes2.default.string}),_propTypes2.default.oneOf([!1])])},Provider.defaultProps={persist:!1},exports.connect=connect,exports.default=Provider;