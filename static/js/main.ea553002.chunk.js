(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_Result__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_components_Keyboard__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_Component){Object(C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Users_greta_Desktop_programming_react_calculator_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Keyboard__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var a=_(1),r=_(2),n=_(4),c=_(3),o=_(0),s=_.n(o),l=function(e){Object(n.a)(_,e);var t=Object(c.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){var e=this.props.result;return s.a.createElement("div",{className:"result"},s.a.createElement("p",{className:"calcul"},e))}}]),_}(o.Component);t.a=l},function(e,t,_){"use strict";var a=_(1),r=_(2),n=_(4),c=_(3),o=_(0),s=_.n(o),l=function(e){Object(n.a)(_,e);var t=Object(c.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"button"},s.a.createElement("button",{name:"(",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"("),s.a.createElement("button",{name:"CE",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),s.a.createElement("button",{name:")",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},")"),s.a.createElement("button",{name:"C",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),s.a.createElement("br",null),s.a.createElement("button",{name:"1",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),s.a.createElement("button",{name:"2",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),s.a.createElement("button",{name:"3",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),s.a.createElement("button",{name:"+",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),s.a.createElement("br",null),s.a.createElement("button",{name:"4",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),s.a.createElement("button",{name:"5",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),s.a.createElement("button",{name:"6",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),s.a.createElement("button",{name:"-",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),s.a.createElement("br",null),s.a.createElement("button",{name:"7",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),s.a.createElement("button",{name:"8",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),s.a.createElement("button",{name:"9",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),s.a.createElement("button",{name:"*",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),s.a.createElement("br",null),s.a.createElement("button",{name:".",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"."),s.a.createElement("button",{name:"0",className:"number",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),s.a.createElement("button",{name:"=",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"="),s.a.createElement("button",{name:"/",className:"operator",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),s.a.createElement("br",null))}}]),_}(o.Component);t.a=l},function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),r=_.n(a),n=_(6),c=_.n(n),o=(_(15),_(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ea553002.chunk.js.map