!function(e){function t(t){for(var r,l,u=t[0],c=t[1],i=t[2],f=0,s=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);s.length;)s.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={4:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var p=c;a.push([27,0]),n()}({27:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),l=n.n(a),u=n(2),c=n.n(u);n(28);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){return function(t){function n(t){var r;return f(this,n),r=y(this,d(n).call(this,t)),console.log(e+" is created."),r}return b(n,t),m(n,[{key:"componentDidMount",value:function(){console.log(e+" did mount.")}},{key:"componentWillUnmount",value:function(){console.log(e+" will unmount.")}},{key:"componentDidUpdate",value:function(){console.log(e+" is updated.")}},{key:"render",value:function(){return o.a.createElement("div",{className:"node "+e,"data-name":e},this.props.children)}}]),n}(o.a.Component)}var k=E("R"),g=E("A"),O=E("B"),w=E("C"),S=E("D"),j=function(e){function t(){return f(this,t),y(this,d(t).apply(this,arguments))}return b(t,e),m(t,[{key:"shape1",value:function(){return o.a.createElement(k,null,o.a.createElement(g,null,o.a.createElement(O,null),o.a.createElement(w,null)),o.a.createElement(S,null))}},{key:"shape2",value:function(){return o.a.createElement(k,null,o.a.createElement(g,null,o.a.createElement(O,null)),o.a.createElement(S,null,o.a.createElement(w,null)))}},{key:"shape3",value:function(){return o.a.createElement(k,null,o.a.createElement(g,null,o.a.createElement(O,null,o.a.createElement(w,null))),o.a.createElement(S,null))}},{key:"shape4",value:function(){return o.a.createElement(k,null,o.a.createElement(g,null,o.a.createElement(O,null),o.a.createElement(S,null,o.a.createElement(w,null))))}},{key:"shape5",value:function(){return o.a.createElement(k,null,o.a.createElement(g,null,o.a.createElement(O,{key:"B"}),o.a.createElement(w,{key:"C"})))}},{key:"shape6",value:function(){return o.a.createElement(k,null,o.a.createElement(g,null,o.a.createElement(w,{key:"C"}),o.a.createElement(O,{key:"B"})))}},{key:"render",value:function(){return this[this.props.shape]?this[this.props.shape]():o.a.createElement(k,null)}}]),t}(o.a.Component);j.propTypes={shape:c.a.string};var _=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return p(h(n=y(this,(e=d(t)).call.apply(e,[this].concat(o)))),"state",{shape:""}),n}return b(t,e),m(t,[{key:"myRender",value:function(e){this.setState({shape:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"react-root"},o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.myRender("shape1")}},"Shape 1"),o.a.createElement("button",{onClick:function(){return e.myRender("shape2")}},"Shape 2"),o.a.createElement("button",{onClick:function(){return e.myRender("shape3")}},"Shape 3"),o.a.createElement("button",{onClick:function(){return e.myRender("shape4")}},"Shape 3"),o.a.createElement("button",{onClick:function(){return e.myRender("shape5")}},"Shape 3"),o.a.createElement("button",{onClick:function(){return e.myRender("shape6")}},"Shape 3"),o.a.createElement("a",{href:"https://sprit.vip",style:{marginLeft:"20px",fontSize:"12px",color:"red"}},"Fork me")),o.a.createElement(j,{shape:this.state.shape}))}}]),t}(o.a.Component);l.a.render(o.a.createElement(_,null),document.getElementById("root"))},28:function(e,t,n){},5:function(e,t){e.exports=library_c3d82f7d24868e72620b}});