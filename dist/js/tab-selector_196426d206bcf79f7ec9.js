!function(e){function t(t){for(var r,a,l=t[0],c=t[1],i=t[2],p=0,s=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);s.length;)s.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={8:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=c;u.push([50,0]),n()}({5:function(e,t){e.exports=library_c3d82f7d24868e72620b},50:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(0),o=n.n(r),u=n(3),a=n.n(u),l=n(2),c=n.n(l),i=n(6);n(8);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return d(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.value,r=e.onChange;return o.a.createElement("div",{className:"tab-selector"},o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e.value,className:"tab-item ".concat(e.value===n?"selected ".concat(e.value):""),onClick:function(){return r(e.value)}},e.name)}))))}}]),t}(r.PureComponent);g(O,"propTypes",{value:c.a.string,options:c.a.array,onChange:c.a.func}),g(O,"defaultProps",{value:null,options:[],onChange:function(){}});var w=[{name:"Red",value:"red"},{name:"Blue",value:"blue"},{name:"Orange",value:"orange"}],j=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return g(v(n=y(this,(e=m(t)).call.apply(e,[this].concat(o)))),"state",{color:null}),n}return d(t,e),b(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,"Select color:"," ",o.a.createElement(O,{options:w,value:this.state.color,onChange:function(t){return e.setState({color:t})}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("hr",null),this.props.time.toLocaleString())}}]),t}(r.PureComponent),P=Object(i.a)(j);a.a.render(o.a.createElement(P,null),document.getElementById("root"))}});