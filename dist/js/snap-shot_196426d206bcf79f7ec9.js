!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={7:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;a.push([48,0]),n()}({48:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a);n(49);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?y(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return d(y(n=f(this,(e=p(t)).call.apply(e,[this].concat(o)))),"state",{messages:[],amount:0}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"handleNewMessage",value:function(e){this.setState((function(t){return{messages:["msg ".concat(t.messages.length)].concat(c(t.messages)),amount:e?t.amount+1:t.amount}}))}},{key:"componentDidMount",value:function(){for(var e=this,t=0;t<20;t++)this.handleNewMessage();this.timerId=window.setInterval((function(){e.state.messages.length>30?window.clearInterval(e.interval):e.handleNewMessage(1)}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"getSnapshotBeforeUpdate",value:function(){return this.rootNode.scrollHeight}},{key:"componentDidUpdate",value:function(e,t,n){var r=this.rootNode.scrollTop;r<5||(this.rootNode.scrollTop=r+(this.rootNode.scrollHeight-n))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"snap-shot",ref:function(t){return e.rootNode=t}},this.state.messages.map((function(e,t){return o.a.createElement("div",{key:t},e)})),o.a.createElement("div",{className:"snap-pop"},"有",this.state.amount,"条消息"))}}])&&s(n.prototype,r),a&&s(n,a),t}(r.PureComponent);i.a.render(o.a.createElement(h,null),document.getElementById("root"))},49:function(e,t,n){},5:function(e,t){e.exports=library_c3d82f7d24868e72620b}});