define(["jimu-arcgis","jimu-core","jimu-ui/advanced/data-source-selector"], function(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/feature-layer/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/feature-layer/src/setting/setting.tsx":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/feature-layer/src/setting/setting.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n  Licensing\n\n  Copyright 2020 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\nvar jimu_arcgis_1 = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\nvar data_source_selector_1 = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ \"jimu-ui/advanced/data-source-selector\");\nvar Setting = /** @class */ (function (_super) {\n    __extends(Setting, _super);\n    function Setting() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.supportedTypes = jimu_core_1.Immutable([jimu_arcgis_1.ArcGISDataSourceTypes.FeatureLayer]);\n        _this.onFieldChange = function (allSelectedFields) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                useDataSources: [__assign(__assign({}, _this.props.useDataSources[0]), { fields: allSelectedFields.map(function (f) { return f.jimuName; }) })]\n            });\n        };\n        _this.onToggleUseDataEnabled = function (useDataSourcesEnabled) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                useDataSourcesEnabled: useDataSourcesEnabled\n            });\n        };\n        _this.onDataSourceChange = function (useDataSources) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                useDataSources: useDataSources,\n            });\n        };\n        return _this;\n    }\n    Setting.prototype.render = function () {\n        return jimu_core_1.React.createElement(\"div\", { className: \"use-feature-layer-setting p-2\" },\n            jimu_core_1.React.createElement(data_source_selector_1.DataSourceSelector, { types: this.supportedTypes, useDataSources: this.props.useDataSources, useDataSourcesEnabled: this.props.useDataSourcesEnabled, onToggleUseDataEnabled: this.onToggleUseDataEnabled, onChange: this.onDataSourceChange, widgetId: this.props.id }),\n            this.props.useDataSources && this.props.useDataSources.length > 0 &&\n                jimu_core_1.React.createElement(data_source_selector_1.FieldSelector, { useDataSources: this.props.useDataSources, onChange: this.onFieldChange, selectedFields: this.props.useDataSources[0].fields || jimu_core_1.Immutable([]) }));\n    };\n    return Setting;\n}(jimu_core_1.React.PureComponent));\nexports.default = Setting;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9mZWF0dXJlLWxheWVyL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmVhdHVyZS1sYXllci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD9lNGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMCBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHtSZWFjdCwgSW1tdXRhYmxlLCBJTUZpZWxkU2NoZW1hLCBVc2VEYXRhU291cmNlfSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHtBbGxXaWRnZXRTZXR0aW5nUHJvcHN9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInO1xuaW1wb3J0IHtBcmNHSVNEYXRhU291cmNlVHlwZXN9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCB7RGF0YVNvdXJjZVNlbGVjdG9yLCBGaWVsZFNlbGVjdG9yfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0U2V0dGluZ1Byb3BzPHt9Piwge30+e1xuICBzdXBwb3J0ZWRUeXBlcyA9IEltbXV0YWJsZShbQXJjR0lTRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pO1xuXG4gIG9uRmllbGRDaGFuZ2UgPSAoYWxsU2VsZWN0ZWRGaWVsZHM6IElNRmllbGRTY2hlbWFbXSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IFt7Li4udGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXSwgLi4ue2ZpZWxkczogYWxsU2VsZWN0ZWRGaWVsZHMubWFwKGYgPT4gZi5qaW11TmFtZSl9fV1cbiAgICB9KVxuICB9XG5cbiAgb25Ub2dnbGVVc2VEYXRhRW5hYmxlZCA9ICh1c2VEYXRhU291cmNlc0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZURhdGFTb3VyY2VzRW5hYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInVzZS1mZWF0dXJlLWxheWVyLXNldHRpbmcgcC0yXCI+XG4gICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgIHR5cGVzPXt0aGlzLnN1cHBvcnRlZFR5cGVzfVxuICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc31cbiAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZH1cbiAgICAgICAgb25Ub2dnbGVVc2VEYXRhRW5hYmxlZD17dGhpcy5vblRvZ2dsZVVzZURhdGFFbmFibGVkfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgLz5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDAgJiZcblxuICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9XG4gICAgICAgICAgc2VsZWN0ZWRGaWVsZHM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzIHx8IEltbXV0YWJsZShbXSl9XG4gICAgICAgIC8+XG4gICAgICB9XG5cbiAgICA8L2Rpdj5cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF3QkE7QUF0QkE7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQVFBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/feature-layer/src/setting/setting.tsx\n");

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

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3Rvci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIj9hOTBiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui/advanced/data-source-selector\n");

/***/ })

/******/ })});;