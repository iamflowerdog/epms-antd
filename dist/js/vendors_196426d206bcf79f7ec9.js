(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){t.exports=n(5)(0)},function(t,e,n){t.exports=n(5)(823)},function(t,e,n){t.exports=n(5)(1)},function(t,e,n){t.exports=n(5)(11)},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var o=n(0),r=n.n(o);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){return function(e){function n(){var t,e;c(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return y(l(e=f(this,(t=p(n)).call.apply(t,[this].concat(r)))),"state",{time:new Date}),e}var o,i,b;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,e),o=n,(i=[{key:"componentDidMount",value:function(){var t=this;this.timeID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return r.a.createElement(t,u({time:this.state.time},this.props))}}])&&a(o.prototype,i),b&&a(o,b),n}(r.a.Component)}},,function(t,e,n){}]]);