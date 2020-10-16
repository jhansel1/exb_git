define(["jimu-arcgis","jimu-core"], function(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/showextent/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/showextent/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/showextent/src/runtime/widget.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n  Licensing\n\n  Copyright 2020 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\nvar jimu_arcgis_1 = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\nvar Widget = /** @class */ (function (_super) {\n    __extends(Widget, _super);\n    function Widget() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = { extent: null };\n        _this.isConfigured = function () {\n            return _this.props.useMapWidgetIds && _this.props.useMapWidgetIds.length === 1;\n        };\n        _this.onActiveViewChange = function (jimuMapView) {\n            if (!_this.extentWatch) {\n                _this.extentWatch = jimuMapView.view.watch('extent', function (extent) {\n                    _this.setState({\n                        extent: extent\n                    });\n                });\n            }\n        };\n        return _this;\n    }\n    Widget.prototype.componentWillUnmount = function () {\n        if (this.extentWatch) {\n            this.extentWatch.remove();\n            this.extentWatch = null;\n        }\n    };\n    Widget.prototype.render = function () {\n        if (!this.isConfigured()) {\n            return 'Select a map';\n        }\n        return jimu_core_1.React.createElement(\"div\", { className: \"widget-use-map-view\", style: { width: '100%', height: '100%', overflow: 'hidden' } },\n            jimu_core_1.React.createElement(\"h3\", null, \"This widget demonstrates how to use a map view and display the map view's extent.\"),\n            jimu_core_1.React.createElement(jimu_arcgis_1.JimuMapViewComponent, { useMapWidgetIds: this.props.useMapWidgetIds, onActiveViewChange: this.onActiveViewChange }),\n            jimu_core_1.React.createElement(\"div\", null, \"Extent:\"),\n            jimu_core_1.React.createElement(\"div\", null, this.state.extent && JSON.stringify(this.state.extent.toJSON())));\n    };\n    return Widget;\n}(jimu_core_1.React.PureComponent));\nexports.default = Widget;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaG93ZXh0ZW50L3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaG93ZXh0ZW50L3NyYy9ydW50aW1lL3dpZGdldC50c3g/YWYzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7UmVhY3QsIEFsbFdpZGdldFByb3BzfSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnO1xuXG5pbnRlcmZhY2UgU3RhdGV7XG4gIGV4dGVudDogX19lc3JpLkV4dGVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPHt9PiwgU3RhdGU+e1xuICBleHRlbnRXYXRjaDogX19lc3JpLldhdGNoSGFuZGxlO1xuICBzdGF0ZTogU3RhdGUgPSB7ZXh0ZW50OiBudWxsfVxuXG4gIGlzQ29uZmlndXJlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBpZih0aGlzLmV4dGVudFdhdGNoKXtcbiAgICAgIHRoaXMuZXh0ZW50V2F0Y2gucmVtb3ZlKCk7XG4gICAgICB0aGlzLmV4dGVudFdhdGNoID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYoIXRoaXMuZXh0ZW50V2F0Y2gpe1xuICAgICAgdGhpcy5leHRlbnRXYXRjaCA9IGppbXVNYXBWaWV3LnZpZXcud2F0Y2goJ2V4dGVudCcsIGV4dGVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGV4dGVudFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKXtcbiAgICBpZighdGhpcy5pc0NvbmZpZ3VyZWQoKSl7XG4gICAgICByZXR1cm4gJ1NlbGVjdCBhIG1hcCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS1tYXAtdmlld1wiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJ319PlxuICAgICAgPGgzPlxuICAgICAgICBUaGlzIHdpZGdldCBkZW1vbnN0cmF0ZXMgaG93IHRvIHVzZSBhIG1hcCB2aWV3IGFuZCBkaXNwbGF5IHRoZSBtYXAgdmlldydzIGV4dGVudC5cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfT48L0ppbXVNYXBWaWV3Q29tcG9uZW50PlxuXG4gICAgICA8ZGl2PkV4dGVudDo8L2Rpdj5cbiAgICAgIDxkaXY+eyB0aGlzLnN0YXRlLmV4dGVudCAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmV4dGVudC50b0pTT04oKSl9PC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkE7QUFsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/showextent/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

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