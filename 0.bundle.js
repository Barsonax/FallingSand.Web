(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./crate/pkg/falling_sand.js":
/*!***********************************!*\
  !*** ./crate/pkg/falling_sand.js ***!
  \***********************************/
/*! exports provided: main, __wbg_error_4bb6c2a97407129a, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __widl_f_log_1_, __widl_instanceof_CanvasRenderingContext2D, __widl_f_put_image_data_CanvasRenderingContext2D, __widl_f_set_image_smoothing_enabled_CanvasRenderingContext2D, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_with_context_options_HTMLCanvasElement, __widl_f_set_width_HTMLCanvasElement, __widl_f_set_height_HTMLCanvasElement, __widl_f_new_with_u8_clamped_array_and_sh_ImageData, __widl_f_now_Performance, __widl_instanceof_Window, __widl_f_request_animation_frame_Window, __widl_f_document_Window, __widl_f_performance_Window, __wbg_newnoargs_a172f39151049128, __wbg_call_8a9c8b0a32a202ff, __wbindgen_string_new, __wbindgen_debug_string, __wbindgen_cb_drop, __wbindgen_rethrow, __wbindgen_throw, __wbindgen_closure_wrapper54, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_log_1_", function() { return __widl_f_log_1_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_instanceof_CanvasRenderingContext2D", function() { return __widl_instanceof_CanvasRenderingContext2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_put_image_data_CanvasRenderingContext2D", function() { return __widl_f_put_image_data_CanvasRenderingContext2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_set_image_smoothing_enabled_CanvasRenderingContext2D", function() { return __widl_f_set_image_smoothing_enabled_CanvasRenderingContext2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_get_element_by_id_Document", function() { return __widl_f_get_element_by_id_Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_instanceof_HTMLCanvasElement", function() { return __widl_instanceof_HTMLCanvasElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_get_context_with_context_options_HTMLCanvasElement", function() { return __widl_f_get_context_with_context_options_HTMLCanvasElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_set_width_HTMLCanvasElement", function() { return __widl_f_set_width_HTMLCanvasElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_set_height_HTMLCanvasElement", function() { return __widl_f_set_height_HTMLCanvasElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_new_with_u8_clamped_array_and_sh_ImageData", function() { return __widl_f_new_with_u8_clamped_array_and_sh_ImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_now_Performance", function() { return __widl_f_now_Performance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_instanceof_Window", function() { return __widl_instanceof_Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_request_animation_frame_Window", function() { return __widl_f_request_animation_frame_Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_document_Window", function() { return __widl_f_document_Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__widl_f_performance_Window", function() { return __widl_f_performance_Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_a172f39151049128", function() { return __wbg_newnoargs_a172f39151049128; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_8a9c8b0a32a202ff", function() { return __wbg_call_8a9c8b0a32a202ff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return __wbindgen_cb_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_rethrow", function() { return __wbindgen_rethrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper54", function() { return __wbindgen_closure_wrapper54; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony import */ var _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./falling_sand_bg */ "./crate/pkg/falling_sand_bg.wasm");


/**
* @returns {void}
*/
function main() {
    return _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["main"]();
}

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbg_error_4bb6c2a97407129a(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1 * 1);

    console.error(varg0);
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function __wbg_new_59cb74e423758ede() {
    return addHeapObject(new Error());
}

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory = new Uint32Array(_falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory;
}

function __wbg_stack_558ba5917b466edd(ret, arg0) {

    const retptr = passStringToWasm(getObject(arg0).stack);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

}

function __widl_f_log_1_(arg0) {
    console.log(getObject(arg0));
}

function __widl_instanceof_CanvasRenderingContext2D(idx) { return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0; }

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

function __widl_f_put_image_data_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, exnptr) {
    try {
        getObject(arg0).putImageData(getObject(arg1), arg2, arg3);
    } catch (e) {
        handleError(exnptr, e);
    }
}

function __widl_f_set_image_smoothing_enabled_CanvasRenderingContext2D(arg0, arg1) {
    getObject(arg0).imageSmoothingEnabled = arg1 !== 0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = getObject(arg0).getElementById(varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

function __widl_instanceof_HTMLCanvasElement(idx) { return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0; }

function __widl_f_get_context_with_context_options_HTMLCanvasElement(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = getObject(arg0).getContext(varg1, getObject(arg3));
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        handleError(exnptr, e);
    }
}

function __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}

function __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}

let cachegetUint8ClampedMemory = null;
function getUint8ClampedMemory() {
    if (cachegetUint8ClampedMemory === null || cachegetUint8ClampedMemory.buffer !== _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8ClampedMemory = new Uint8ClampedArray(_falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8ClampedMemory;
}

function getClampedArrayU8FromWasm(ptr, len) {
    return getUint8ClampedMemory().subarray(ptr / 1, ptr / 1 + len);
}

function __widl_f_new_with_u8_clamped_array_and_sh_ImageData(arg0, arg1, arg2, arg3, exnptr) {
    let varg0 = getClampedArrayU8FromWasm(arg0, arg1);
    try {
        return addHeapObject(new ImageData(varg0, arg2 >>> 0, arg3 >>> 0));
    } catch (e) {
        handleError(exnptr, e);
    }
}

function __widl_f_now_Performance(arg0) {
    return getObject(arg0).now();
}

function __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }

function __widl_f_request_animation_frame_Window(arg0, arg1, exnptr) {
    try {
        return getObject(arg0).requestAnimationFrame(getObject(arg1));
    } catch (e) {
        handleError(exnptr, e);
    }
}

function __widl_f_document_Window(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

function __widl_f_performance_Window(arg0) {

    const val = getObject(arg0).performance;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

function __wbg_newnoargs_a172f39151049128(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

function __wbg_call_8a9c8b0a32a202ff(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

function __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }

function __wbindgen_debug_string(i, len_ptr) {
    const debug_str =
    val => {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debug_str(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debug_str(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
        return `${val.name}: ${val.message}
        ${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
;
const toString = Object.prototype.toString;
const val = getObject(i);
const debug = debug_str(val);
const ptr = passStringToWasm(debug);
getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
return ptr;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function __wbindgen_cb_drop(i) {
    const obj = takeObject(i).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

function __wbindgen_rethrow(idx) { throw takeObject(idx); }

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

function __wbindgen_closure_wrapper54(a, b, _ignored) {
    const f = _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbg_function_table"].get(17);
    const d = _falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbg_function_table"].get(18);
    const cb = function() {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b);

        } finally {
            if (--this.cnt === 0) d(a, b);
            else this.a = a;

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

function __wbindgen_object_drop_ref(i) { dropObject(i); }

_falling_sand_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_start"]();



/***/ }),

/***/ "./crate/pkg/falling_sand_bg.wasm":
/*!****************************************!*\
  !*** ./crate/pkg/falling_sand_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, main, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free, __wbindgen_start, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./falling_sand */ "./crate/pkg/falling_sand.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jcmF0ZS9wa2cvZmFsbGluZ19zYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQzs7QUFFMUM7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQLFdBQVcscURBQVM7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSx1REFBVztBQUNsRiw2Q0FBNkMsdURBQVc7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0EsSUFBSSxnRUFBb0I7O0FBRXhCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLGtFQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtRUFBdUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLGtCQUFrQixrRUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsdURBQVc7QUFDcEYsK0NBQStDLHVEQUFXO0FBQzFEO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTywwREFBMEQsbUVBQW1FOztBQUVwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRU8sbURBQW1ELDREQUE0RDs7QUFFL0c7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRkFBcUYsdURBQVc7QUFDaEcsMkRBQTJELHVEQUFXO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTyx3Q0FBd0MsaURBQWlEOztBQUV6RjtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPLHNDQUFzQywrQ0FBK0M7O0FBRXJGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGlDQUFpQyxZQUFZO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLElBQUk7QUFDL0IsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxrQ0FBa0MsdUJBQXVCOztBQUV6RDtBQUNQO0FBQ0E7O0FBRU87QUFDUCxjQUFjLHFFQUF5QjtBQUN2QyxjQUFjLHFFQUF5QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPLHdDQUF3QyxlQUFlOztBQUU5RCxpRUFBcUIiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vZmFsbGluZ19zYW5kX2JnJztcblxuLyoqXG4qIEByZXR1cm5zIHt2b2lkfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICAgIHJldHVybiB3YXNtLm1haW4oKTtcbn1cblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2Vycm9yXzRiYjZjMmE5NzQwNzEyOWEoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuXG4gICAgdmFyZzAgPSB2YXJnMC5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKGFyZzAsIGFyZzEgKiAxKTtcblxuICAgIGNvbnNvbGUuZXJyb3IodmFyZzApO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKTtcblxuaGVhcC5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfNTljYjc0ZTQyMzc1OGVkZSgpIHtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChuZXcgRXJyb3IoKSk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgcGFzc1N0cmluZ1RvV2FzbTtcbmlmICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhc3NTdHJpbmdUb1dhc20gPSBmdW5jdGlvbihhcmcpIHtcblxuXG4gICAgICAgIGxldCBzaXplID0gYXJnLmxlbmd0aDtcbiAgICAgICAgbGV0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2Moc2l6ZSk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeSgpO1xuICAgICAgICAgICAgZm9yICg7IG9mZnNldCA8IGFyZy5sZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgICAgIHB0ciA9IHdhc20uX193YmluZGdlbl9yZWFsbG9jKHB0ciwgc2l6ZSwgc2l6ZSA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgc2l6ZSk7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG5cbiAgICAgICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICAgICAgfVxuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgcGFzc1N0cmluZ1RvV2FzbSA9IGZ1bmN0aW9uKGFyZykge1xuXG5cbiAgICAgICAgbGV0IHNpemUgPSBhcmcubGVuZ3RoO1xuICAgICAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhzaXplKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5KCk7XG4gICAgICAgICAgICBmb3IgKDsgb2Zmc2V0IDwgYXJnLmxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICAgICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQgIT09IGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcuc2xpY2Uob2Zmc2V0KSk7XG4gICAgICAgICAgICBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyhwdHIsIHNpemUsIHNpemUgPSBvZmZzZXQgKyBidWYubGVuZ3RoKTtcbiAgICAgICAgICAgIGdldFVpbnQ4TWVtb3J5KCkuc2V0KGJ1ZiwgcHRyICsgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSBidWYubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufVxuXG5sZXQgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQzMk1lbW9yeSA9IG5ldyBVaW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50MzJNZW1vcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zdGFja181NThiYTU5MTdiNDY2ZWRkKHJldCwgYXJnMCkge1xuXG4gICAgY29uc3QgcmV0cHRyID0gcGFzc1N0cmluZ1RvV2FzbShnZXRPYmplY3QoYXJnMCkuc3RhY2spO1xuICAgIGNvbnN0IHJldGxlbiA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCBtZW0gPSBnZXRVaW50MzJNZW1vcnkoKTtcbiAgICBtZW1bcmV0IC8gNF0gPSByZXRwdHI7XG4gICAgbWVtW3JldCAvIDQgKyAxXSA9IHJldGxlbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2ZfbG9nXzFfKGFyZzApIHtcbiAgICBjb25zb2xlLmxvZyhnZXRPYmplY3QoYXJnMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2luc3RhbmNlb2ZfQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKGlkeCkgeyByZXR1cm4gZ2V0T2JqZWN0KGlkeCkgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPyAxIDogMDsgfVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihleG5wdHIsIGUpIHtcbiAgICBjb25zdCB2aWV3ID0gZ2V0VWludDMyTWVtb3J5KCk7XG4gICAgdmlld1tleG5wdHIgLyA0XSA9IDE7XG4gICAgdmlld1tleG5wdHIgLyA0ICsgMV0gPSBhZGRIZWFwT2JqZWN0KGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2ZfcHV0X2ltYWdlX2RhdGFfQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMsIGV4bnB0cikge1xuICAgIHRyeSB7XG4gICAgICAgIGdldE9iamVjdChhcmcwKS5wdXRJbWFnZURhdGEoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyLCBhcmczKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGV4bnB0ciwgZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2Zfc2V0X2ltYWdlX3Ntb290aGluZ19lbmFibGVkX0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGFyZzEgIT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTGlrZU5vbmUoeCkge1xuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQgfHwgeCA9PT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2lkbF9mX2dldF9lbGVtZW50X2J5X2lkX0RvY3VtZW50KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBsZXQgdmFyZzEgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcxLCBhcmcyKTtcblxuICAgIGNvbnN0IHZhbCA9IGdldE9iamVjdChhcmcwKS5nZXRFbGVtZW50QnlJZCh2YXJnMSk7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUodmFsKSA/IDAgOiBhZGRIZWFwT2JqZWN0KHZhbCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2lkbF9pbnN0YW5jZW9mX0hUTUxDYW52YXNFbGVtZW50KGlkeCkgeyByZXR1cm4gZ2V0T2JqZWN0KGlkeCkgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCA/IDEgOiAwOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3dpZGxfZl9nZXRfY29udGV4dF93aXRoX2NvbnRleHRfb3B0aW9uc19IVE1MQ2FudmFzRWxlbWVudChhcmcwLCBhcmcxLCBhcmcyLCBhcmczLCBleG5wdHIpIHtcbiAgICBsZXQgdmFyZzEgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcxLCBhcmcyKTtcbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHZhbCA9IGdldE9iamVjdChhcmcwKS5nZXRDb250ZXh0KHZhcmcxLCBnZXRPYmplY3QoYXJnMykpO1xuICAgICAgICByZXR1cm4gaXNMaWtlTm9uZSh2YWwpID8gMCA6IGFkZEhlYXBPYmplY3QodmFsKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXhucHRyLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3dpZGxfZl9zZXRfd2lkdGhfSFRNTENhbnZhc0VsZW1lbnQoYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS53aWR0aCA9IGFyZzEgPj4+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3dpZGxfZl9zZXRfaGVpZ2h0X0hUTUxDYW52YXNFbGVtZW50KGFyZzAsIGFyZzEpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuaGVpZ2h0ID0gYXJnMSA+Pj4gMDtcbn1cblxubGV0IGNhY2hlZ2V0VWludDhDbGFtcGVkTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4Q2xhbXBlZE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OENsYW1wZWRNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OENsYW1wZWRNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OENsYW1wZWRNZW1vcnkgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhDbGFtcGVkTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRDbGFtcGVkQXJyYXlVOEZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQ4Q2xhbXBlZE1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDEsIHB0ciAvIDEgKyBsZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2ZfbmV3X3dpdGhfdThfY2xhbXBlZF9hcnJheV9hbmRfc2hfSW1hZ2VEYXRhKGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMsIGV4bnB0cikge1xuICAgIGxldCB2YXJnMCA9IGdldENsYW1wZWRBcnJheVU4RnJvbVdhc20oYXJnMCwgYXJnMSk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QobmV3IEltYWdlRGF0YSh2YXJnMCwgYXJnMiA+Pj4gMCwgYXJnMyA+Pj4gMCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXhucHRyLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3dpZGxfZl9ub3dfUGVyZm9ybWFuY2UoYXJnMCkge1xuICAgIHJldHVybiBnZXRPYmplY3QoYXJnMCkubm93KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3dpZGxfaW5zdGFuY2VvZl9XaW5kb3coaWR4KSB7IHJldHVybiBnZXRPYmplY3QoaWR4KSBpbnN0YW5jZW9mIFdpbmRvdyA/IDEgOiAwOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3dpZGxfZl9yZXF1ZXN0X2FuaW1hdGlvbl9mcmFtZV9XaW5kb3coYXJnMCwgYXJnMSwgZXhucHRyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldE9iamVjdChhcmcwKS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGV4bnB0ciwgZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2ZfZG9jdW1lbnRfV2luZG93KGFyZzApIHtcblxuICAgIGNvbnN0IHZhbCA9IGdldE9iamVjdChhcmcwKS5kb2N1bWVudDtcbiAgICByZXR1cm4gaXNMaWtlTm9uZSh2YWwpID8gMCA6IGFkZEhlYXBPYmplY3QodmFsKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193aWRsX2ZfcGVyZm9ybWFuY2VfV2luZG93KGFyZzApIHtcblxuICAgIGNvbnN0IHZhbCA9IGdldE9iamVjdChhcmcwKS5wZXJmb3JtYW5jZTtcbiAgICByZXR1cm4gaXNMaWtlTm9uZSh2YWwpID8gMCA6IGFkZEhlYXBPYmplY3QodmFsKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3bm9hcmdzX2ExNzJmMzkxNTEwNDkxMjgoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KG5ldyBGdW5jdGlvbih2YXJnMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF84YTljOGIwYTMyYTIwMmZmKGFyZzAsIGFyZzEsIGV4bnB0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXhucHRyLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3N0cmluZ19uZXcocCwgbCkgeyByZXR1cm4gYWRkSGVhcE9iamVjdChnZXRTdHJpbmdGcm9tV2FzbShwLCBsKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fZGVidWdfc3RyaW5nKGksIGxlbl9wdHIpIHtcbiAgICBjb25zdCBkZWJ1Z19zdHIgPVxuICAgIHZhbCA9PiB7XG4gICAgICAgIC8vIHByaW1pdGl2ZSB0eXBlc1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICAgICAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHwgdmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAgYCR7dmFsfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgXCIke3ZhbH1cImA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdmFsLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1N5bWJvbCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhbC5uYW1lO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09ICdzdHJpbmcnICYmIG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgRnVuY3Rpb24oJHtuYW1lfSlgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBvYmplY3RzXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgZGVidWcgPSAnWyc7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRlYnVnICs9IGRlYnVnX3N0cih2YWxbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGVidWcgKz0gJywgJyArIGRlYnVnX3N0cih2YWxbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWcgKz0gJ10nO1xuICAgICAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3QgZm9yIGJ1aWx0LWluXG4gICAgICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcW29iamVjdCAoW15cXF1dKylcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGJ1aWx0SW5NYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFpbGVkIHRvIG1hdGNoIHRoZSBzdGFuZGFyZCAnW29iamVjdCBDbGFzc05hbWVdJ1xuICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IGF2b2lkcyBwcm9ibGVtcyB3aXRoIGN5Y2xlcywgYW5kIGlzIGdlbmVyYWxseSBtdWNoXG4gICAgICAgICAgICAvLyBlYXNpZXIgdGhhbiBsb29waW5nIHRocm91Z2ggb3duUHJvcGVydGllcyBvZiBgdmFsYC5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyAnKSc7XG4gICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVycm9yc1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbC5uYW1lfTogJHt2YWwubWVzc2FnZX1cbiAgICAgICAgJHt2YWwuc3RhY2t9YDtcbiAgICB9XG4gICAgLy8gVE9ETyB3ZSBjb3VsZCB0ZXN0IGZvciBtb3JlIHRoaW5ncyBoZXJlLCBsaWtlIGBTZXRgcyBhbmQgYE1hcGBzLlxuICAgIHJldHVybiBjbGFzc05hbWU7XG59XG47XG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCB2YWwgPSBnZXRPYmplY3QoaSk7XG5jb25zdCBkZWJ1ZyA9IGRlYnVnX3N0cih2YWwpO1xuY29uc3QgcHRyID0gcGFzc1N0cmluZ1RvV2FzbShkZWJ1Zyk7XG5nZXRVaW50MzJNZW1vcnkoKVtsZW5fcHRyIC8gNF0gPSBXQVNNX1ZFQ1RPUl9MRU47XG5yZXR1cm4gcHRyO1xufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2NiX2Ryb3AoaSkge1xuICAgIGNvbnN0IG9iaiA9IHRha2VPYmplY3QoaSkub3JpZ2luYWw7XG4gICAgaWYgKG9iai5jbnQtLSA9PSAxKSB7XG4gICAgICAgIG9iai5hID0gMDtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9yZXRocm93KGlkeCkgeyB0aHJvdyB0YWtlT2JqZWN0KGlkeCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3cocHRyLCBsZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyNTQoYSwgYiwgX2lnbm9yZWQpIHtcbiAgICBjb25zdCBmID0gd2FzbS5fX3diZ19mdW5jdGlvbl90YWJsZS5nZXQoMTcpO1xuICAgIGNvbnN0IGQgPSB3YXNtLl9fd2JnX2Z1bmN0aW9uX3RhYmxlLmdldCgxOCk7XG4gICAgY29uc3QgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jbnQrKztcbiAgICAgICAgbGV0IGEgPSB0aGlzLmE7XG4gICAgICAgIHRoaXMuYSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZihhLCBiKTtcblxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKC0tdGhpcy5jbnQgPT09IDApIGQoYSwgYik7XG4gICAgICAgICAgICBlbHNlIHRoaXMuYSA9IGE7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBjYi5hID0gYTtcbiAgICBjYi5jbnQgPSAxO1xuICAgIGxldCByZWFsID0gY2IuYmluZChjYik7XG4gICAgcmVhbC5vcmlnaW5hbCA9IGNiO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJlYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmKGlkeCkge1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KGdldE9iamVjdChpZHgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmKGkpIHsgZHJvcE9iamVjdChpKTsgfVxuXG53YXNtLl9fd2JpbmRnZW5fc3RhcnQoKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==