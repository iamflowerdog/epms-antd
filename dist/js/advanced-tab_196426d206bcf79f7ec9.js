!function(e){function n(n){for(var r,u,l=n[0],c=n[1],i=n[2],f=0,s=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(n);s.length;)s.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={1:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var i=0;i<l.length;i++)n(l[i]);var p=c;a.push([18,0]),t()}([,,,,,function(e,n){e.exports=library_c3d82f7d24868e72620b},,,,function(e,n,t){var r={"./cow.png":19,"./elephant.png":20,"./mama.png":21,"./nuan.png":22,"./papa.png":23,"./tiger.png":24};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=9},,,,,,,,,function(e,n,t){"use strict";t.r(n),t.d(n,"AdvancedSelector",(function(){return d}));var r=t(0),o=t.n(r),a=t(2),u=t.n(a),l=t(3),c=t.n(l);t(8);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n,t){return n&&f(e.prototype,n),t&&f(e,t),e}function m(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?b(e):n}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e){function n(){return p(this,n),m(this,h(n).apply(this,arguments))}return y(n,e),s(n,[{key:"render",value:function(){var e=this,n=this.props.options;return o.a.createElement("div",{className:"tab-selector"},o.a.createElement("ul",null,n.map((function(n){return o.a.createElement("li",{key:n.value,className:"tab-item ".concat(n.value===e.props.value?"selected":""),onClick:function(){return e.props.onChange(n.value)}},n.name)}))),o.a.createElement("br",null),o.a.createElement("br",null),this.props.value&&this.props.children(this.props.value))}}]),n}(o.a.PureComponent);g(d,"propType",{value:u.a.string,options:u.a.array,onChange:u.a.func,children:u.a.func}),g(d,"defaultProps",{value:null,options:[],onChange:function(){},children:function(){}});var E=[{name:"Red",value:"red"},{name:"Blue",value:"blue"},{name:"Orange",value:"orange"}],w=[{name:"暖暖",value:"nuan"},{name:"妈妈",value:"mama"},{name:"爸爸",value:"papa"}],O=[{name:"Tiger",value:"tiger"},{name:"Elephant",value:"elephant"},{name:"Cow",value:"cow"}],j=function(e){function n(){var e,t;p(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return g(b(t=m(this,(e=h(n)).call.apply(e,[this].concat(o)))),"state",{color:null,person:null,animal:null}),t}return y(n,e),s(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Selected color:"),o.a.createElement(d,{options:E,value:this.state.color,onChange:function(n){return e.setState({color:n})}},(function(e){return o.a.createElement("span",{style:{display:"inline-block",backgroundColor:e,width:"40px",height:"40px"}})})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h3",null,"Selected Person:"),o.a.createElement(d,{options:w,value:this.state.person,onChange:function(n){return e.setState({person:n})}},(function(e){return o.a.createElement("img",{width:"100px",src:t(9)("./".concat(e,".png"))})})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h3",null,"Selected Person:"),o.a.createElement(d,{options:O,value:this.state.animal,onChange:function(n){return e.setState({animal:n})}},(function(e){return o.a.createElement("img",{width:"100px",src:t(9)("./".concat(e,".png"))})})))}}]),n}(r.PureComponent);c.a.render(o.a.createElement(j,null),document.getElementById("root"))},function(e,n,t){e.exports=t.p+"img/cow.png"},function(e,n,t){e.exports=t.p+"img/elephant.png"},function(e,n,t){e.exports=t.p+"img/mama.png"},function(e,n,t){e.exports=t.p+"img/nuan.png"},function(e,n,t){e.exports=t.p+"img/papa.png"},function(e,n,t){e.exports=t.p+"img/tiger.png"}]);