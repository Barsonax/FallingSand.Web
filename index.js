!function(e){function n(n){for(var t,_,o=n[0],i=n[1],a=0,u=[];a<o.length;a++)_=o[a],r[_]&&u.push(r[_][0]),r[_]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(s&&s(n);u.length;)u.shift()()}var t={},r={0:0};var _={};var o={2:function(){return{"./falling_sand":{__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__widl_f_document_Window:function(e){return t[1].exports.__widl_f_document_Window(e)},__widl_f_get_element_by_id_Document:function(e,n,r){return t[1].exports.__widl_f_get_element_by_id_Document(e,n,r)},__widl_instanceof_HTMLCanvasElement:function(e){return t[1].exports.__widl_instanceof_HTMLCanvasElement(e)},__widl_f_set_width_HTMLCanvasElement:function(e,n){return t[1].exports.__widl_f_set_width_HTMLCanvasElement(e,n)},__widl_f_set_height_HTMLCanvasElement:function(e,n){return t[1].exports.__widl_f_set_height_HTMLCanvasElement(e,n)},__widl_f_get_context_HTMLCanvasElement:function(e,n,r,_){return t[1].exports.__widl_f_get_context_HTMLCanvasElement(e,n,r,_)},__widl_instanceof_CanvasRenderingContext2D:function(e){return t[1].exports.__widl_instanceof_CanvasRenderingContext2D(e)},__wbindgen_cb_drop:function(e){return t[1].exports.__wbindgen_cb_drop(e)},__widl_f_request_animation_frame_Window:function(e,n,r){return t[1].exports.__widl_f_request_animation_frame_Window(e,n,r)},__wbg_newnoargs_a172f39151049128:function(e,n){return t[1].exports.__wbg_newnoargs_a172f39151049128(e,n)},__wbg_call_8a9c8b0a32a202ff:function(e,n,r){return t[1].exports.__wbg_call_8a9c8b0a32a202ff(e,n,r)},__wbindgen_object_clone_ref:function(e){return t[1].exports.__wbindgen_object_clone_ref(e)},__widl_instanceof_Window:function(e){return t[1].exports.__widl_instanceof_Window(e)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)},__widl_f_new_with_u8_clamped_array_and_sh_ImageData:function(e,n,r,_,o){return t[1].exports.__widl_f_new_with_u8_clamped_array_and_sh_ImageData(e,n,r,_,o)},__widl_f_put_image_data_CanvasRenderingContext2D:function(e,n,r,_,o){return t[1].exports.__widl_f_put_image_data_CanvasRenderingContext2D(e,n,r,_,o)},__wbindgen_closure_wrapper25:function(e,n,r){return t[1].exports.__wbindgen_closure_wrapper25(e,n,r)}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,_){t=r[e]=[n,_]});n.push(t[2]=a);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=function(e){return i.p+""+e+".index.js"}(e);var s=new Error;u=function(n){f.onerror=f.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var _=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+_+": "+o+")",s.name="ChunkLoadError",s.type=_,s.request=o,t[1](s)}r[e]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return({1:[2]}[e]||[]).forEach(function(e){var t=_[e];if(t)n.push(t);else{var r,a=o[e](),u=fetch(i.p+""+{2:"4c6e3d9d2cdab663441c"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(u),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(u,a);else{r=u.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,a)})}n.push(_[e]=r.then(function(n){return i.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var s=u;i(i.s=0)}([function(e,n,t){t.e(1).then(t.bind(null,1)).catch(console.error)}]);