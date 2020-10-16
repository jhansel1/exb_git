define(["jimu-core"], function(__WEBPACK_EXTERNAL_MODULE_jimu_core__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/web-component/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/web-component/src/runtime/my-component.js":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/web-component/src/runtime/my-component.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n  Licensing\n\n  Copyright 2020 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\nclass MyComponent extends HTMLElement {\n  constructor() {\n    super();\n\n    const shadowRoot = this.attachShadow({ mode: 'open' });\n    shadowRoot.innerHTML = 'My first component';\n  }\n}\n\nwindow.customElements.define('my-component', MyComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItY29tcG9uZW50L3NyYy9ydW50aW1lL215LWNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3dlYi1jb21wb25lbnQvc3JjL3J1bnRpbWUvbXktY29tcG9uZW50LmpzPzViZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIwIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICBzaGFkb3dSb290LmlubmVySFRNTCA9ICdNeSBmaXJzdCBjb21wb25lbnQnO1xuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWNvbXBvbmVudCcsIE15Q29tcG9uZW50KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/web-component/src/runtime/my-component.js\n");

/***/ }),

/***/ "./your-extensions/widgets/web-component/src/runtime/widget.tsx":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/web-component/src/runtime/widget.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n  Licensing\n\n  Copyright 2020 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n__webpack_require__(/*! ./my-component */ \"./your-extensions/widgets/web-component/src/runtime/my-component.js\");\nfunction Widget(props) {\n    return jimu_core_1.React.createElement(\"div\", { className: \"widget-use-web-component jimu-widget\", style: { overflow: 'auto' } },\n        jimu_core_1.React.createElement(\"div\", null, \"This widget demonstrates how to use a web component.\"),\n        jimu_core_1.React.createElement(\"my-component\", null));\n}\nexports.default = Widget;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItY29tcG9uZW50L3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItY29tcG9uZW50L3NyYy9ydW50aW1lL3dpZGdldC50c3g/ODRmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7QWxsV2lkZ2V0UHJvcHMsIFJlYWN0fSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0ICcuL215LWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8e30+KXtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS13ZWItY29tcG9uZW50IGppbXUtd2lkZ2V0XCIgc3R5bGU9e3tvdmVyZmxvdzogJ2F1dG8nfX0+XG4gICAgPGRpdj5UaGlzIHdpZGdldCBkZW1vbnN0cmF0ZXMgaG93IHRvIHVzZSBhIHdlYiBjb21wb25lbnQuPC9kaXY+XG4gICAgPG15LWNvbXBvbmVudD48L215LWNvbXBvbmVudD5cbiAgPC9kaXY+O1xufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/web-component/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })});;