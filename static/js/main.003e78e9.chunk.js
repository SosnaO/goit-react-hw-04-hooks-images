(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{30:function(t,e,n){},71:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),u=(n(30),n(8)),i=n(4),s=n(10),l=n.n(s),j=n(20),b=n(11),h=n.n(b);h.a.defaults.baseURL="https://pixabay.com/api/";var f={fetchHits:function(){var t=Object(j.a)(l.a.mark((function t(e){var n,c,a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.searchQuery,c=void 0===n?"":n,a=e.currentPage,r=void 0===a?1:a,t.abrupt("return",h.a.get("?q=".concat(c,"&page=").concat(r,"&key=").concat("21803950-62f4c86011510fd15fe85c0d2","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.data.hits})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=n(1);function m(t){var e=t.onChangeQuery,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],u=function(t){t.preventDefault(),0!==r.length&&e(r)};return Object(O.jsx)("header",{className:"Searchbar",children:Object(O.jsxs)("form",{className:"SearchForm",onSubmit:u,children:[Object(O.jsx)("button",{type:"submit",onSubmit:u,className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(t){o(t.currentTarget.value)}})]})})}var d=function(t){var e=t.children;return Object(O.jsx)("ul",{className:"ImageGallery",children:e})},g=function(t){var e=t.alt,n=t.src,c=t.url,a=t.onClick;return Object(O.jsx)("li",{className:"ImageGalleryItem",children:Object(O.jsx)("img",{className:"ImageGalleryItem-image",onClick:a,src:n,alt:e,url:c})})},p=n(21),v=n(22),y=n(25),x=n(24),S=function(t){Object(y.a)(n,t);var e=Object(x.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(O.jsx)("button",{type:"button",className:"Button",onClick:this.props.onfetchHits,children:"Load more"})}}]),n}(c.Component),w=document.querySelector("#modal-root");function C(t){var e=t.onClose,n=t.src,a=t.alt,o=function(t){"Escape"===t.code&&e()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}})),Object(r.createPortal)(Object(O.jsx)("div",{className:"Overlay",onClick:function(t){t.currentTarget===t.target&&e()},children:Object(O.jsx)("div",{className:"Modal",children:Object(O.jsx)("img",{src:n,alt:a})})}),w)}var k=n(23),F=n.n(k);n(71);function N(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(1),o=Object(i.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)([]),b=Object(i.a)(j,2),h=b[0],p=b[1],v=Object(c.useState)(""),y=Object(i.a)(v,2),x=y[0],w=y[1],k=Object(c.useState)(!1),N=Object(i.a)(k,2),I=N[0],L=N[1],T=Object(c.useState)(null),E=Object(i.a)(T,2),P=E[0],H=E[1],B=Object(c.useState)(!1),Q=Object(i.a)(B,2),q=Q[0],A=Q[1],G=Object(c.useState)(""),R=Object(i.a)(G,2),U=R[0],D=R[1],J=Object(c.useState)(""),M=Object(i.a)(J,2),_=M[0],z=M[1];Object(c.useEffect)((function(){x&&V()}),[x]);var K=function(){A(!q)},V=function(){var t={searchQuery:x,currentPage:s};L(!0),f.fetchHits(t).then((function(t){a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),l((function(t){return t+1})),p(Object(u.a)(t)),0===t.length&&H("Nothing was find by your query. Try again.")})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return H(t)})).finally((function(){return L(!1)}))},W=function(t){D(t.currentTarget.getAttribute("url")),z(t.currentTarget.getAttribute("alt")),K()};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m,{onChangeQuery:function(t){w(t),l(1),a([]),H(null)}}),P&&Object(O.jsx)("p",{children:P}),Object(O.jsx)(d,{children:n.map((function(t){var e=t.id,n=t.tags,c=t.webformatURL,a=t.largeImageURL;return Object(O.jsx)(g,{alt:n,src:c,url:a,onClick:W},e)}))}),I&&Object(O.jsx)(F.a,{style:{textAlign:"center"},type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),!(h.length<12)&&!I&&Object(O.jsx)(S,{onfetchHits:V}),q&&Object(O.jsx)(C,{src:U,alt:_,onClose:K})]})}var I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};n(72);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),I()}},[[73,1,2]]]);
//# sourceMappingURL=main.003e78e9.chunk.js.map