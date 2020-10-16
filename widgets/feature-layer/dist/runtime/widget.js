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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/feature-layer/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/feature-layer/src/runtime/widget.tsx":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/feature-layer/src/runtime/widget.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n  Licensing\n\n  Copyright 2020 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/**\n * This widget will show features from a configured feature layer\n */\nvar Widget = /** @class */ (function (_super) {\n    __extends(Widget, _super);\n    function Widget() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = { query: null };\n        _this.cityNameRef = jimu_core_1.React.createRef();\n        _this.query = function () {\n            if (!_this.isDsConfigured()) {\n                return;\n            }\n            var fieldName = _this.props.useDataSources[0].fields[0];\n            var w = _this.cityNameRef.current && _this.cityNameRef.current.value ?\n                fieldName + \" like '%\" + _this.cityNameRef.current.value + \"%'\" : '1=1';\n            _this.setState({\n                query: {\n                    where: w,\n                    outFields: ['*'],\n                    pageSize: 10\n                }\n            });\n        };\n        _this.isDsConfigured = function () {\n            if (_this.props.useDataSources &&\n                _this.props.useDataSources.length === 1 &&\n                _this.props.useDataSources[0].fields &&\n                _this.props.useDataSources[0].fields.length === 1) {\n                return true;\n            }\n            return false;\n        };\n        _this.dataRender = function (ds, info) {\n            // this.createOutputDs(ds);\n            var fName = _this.props.useDataSources[0].fields[0];\n            return jimu_core_1.React.createElement(jimu_core_1.React.Fragment, null,\n                jimu_core_1.React.createElement(\"div\", null,\n                    jimu_core_1.React.createElement(\"input\", { placeholder: \"Query value\", ref: _this.cityNameRef }),\n                    jimu_core_1.React.createElement(\"button\", { onClick: _this.query }, \"Query\")),\n                jimu_core_1.React.createElement(\"div\", null,\n                    \"Query state: \",\n                    info.status),\n                jimu_core_1.React.createElement(\"div\", null,\n                    \"Count: \",\n                    ds.count),\n                jimu_core_1.React.createElement(\"div\", { className: \"record-list\", style: { width: '100%', marginTop: '20px', height: 'calc(100% - 80px)', overflow: 'auto' } }, ds && ds.getStatus() === jimu_core_1.DataSourceStatus.Loaded ? ds.getRecords().map(function (r, i) {\n                    return jimu_core_1.React.createElement(\"div\", { key: i }, r.getData()[fName]);\n                }) : null));\n        };\n        return _this;\n    }\n    Widget.prototype.componentDidMount = function () {\n        this.query();\n    };\n    Widget.prototype.createOutputDs = function (useDs) {\n        if (!this.props.outputDataSources) {\n            return;\n        }\n        var outputDsId = this.props.outputDataSources[0];\n        var dsManager = jimu_core_1.DataSourceManager.getInstance();\n        if (dsManager.getDataSource(outputDsId)) {\n            if (dsManager.getDataSource(outputDsId).getDataSourceJson().originDataSources[0].dataSourceId !== useDs.id) {\n                dsManager.destroyDataSource(outputDsId);\n            }\n        }\n        dsManager.createDataSource(outputDsId).then(function (ods) {\n            ods.setRecords(useDs.getRecords());\n        });\n    };\n    Widget.prototype.render = function () {\n        if (!this.isDsConfigured()) {\n            return jimu_core_1.React.createElement(\"h3\", null,\n                \"This widget demonstrates how to use a feature layer as a data source.\",\n                jimu_core_1.React.createElement(\"br\", null),\n                \"Configure the data source.\");\n        }\n        return jimu_core_1.React.createElement(\"div\", { className: \"widget-use-feature-layer\", style: { width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' } },\n            jimu_core_1.React.createElement(\"h3\", null, \"This widget shows how to use a feature layer as a data source.\"),\n            jimu_core_1.React.createElement(jimu_core_1.DataSourceComponent, { useDataSource: this.props.useDataSources[0], query: this.state.query, widgetId: this.props.id, queryCount: true }, this.dataRender));\n    };\n    return Widget;\n}(jimu_core_1.React.PureComponent));\nexports.default = Widget;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9mZWF0dXJlLWxheWVyL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9mZWF0dXJlLWxheWVyL3NyYy9ydW50aW1lL3dpZGdldC50c3g/MTE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IFJlYWN0LCBJTURhdGFTb3VyY2VJbmZvLCBEYXRhU291cmNlLCBEYXRhU291cmNlTWFuYWdlciwgRGF0YVNvdXJjZVN0YXR1cywgRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIEFsbFdpZGdldFByb3BzLCBEYXRhU291cmNlQ29tcG9uZW50IH0gZnJvbSAnamltdS1jb3JlJztcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgcXVlcnk6IEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zO1xufVxuXG4vKipcbiAqIFRoaXMgd2lkZ2V0IHdpbGwgc2hvdyBmZWF0dXJlcyBmcm9tIGEgY29uZmlndXJlZCBmZWF0dXJlIGxheWVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8e30+LCBTdGF0ZT57XG4gIHN0YXRlID0geyBxdWVyeTogbnVsbH1cbiAgY2l0eU5hbWVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucXVlcnkoKTtcbiAgfVxuXG4gIHF1ZXJ5ID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5pc0RzQ29uZmlndXJlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzWzBdO1xuICAgIGNvbnN0IHcgPSB0aGlzLmNpdHlOYW1lUmVmLmN1cnJlbnQgJiYgdGhpcy5jaXR5TmFtZVJlZi5jdXJyZW50LnZhbHVlID9cbiAgICAgIGAke2ZpZWxkTmFtZX0gbGlrZSAnJSR7dGhpcy5jaXR5TmFtZVJlZi5jdXJyZW50LnZhbHVlfSUnYCA6ICcxPTEnXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICB3aGVyZTogdyxcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0RzQ29uZmlndXJlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJlxuICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzICYmXG4gICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkYXRhUmVuZGVyID0gKGRzOiBEYXRhU291cmNlLCBpbmZvOiBJTURhdGFTb3VyY2VJbmZvKSA9PiB7XG4gICAgLy8gdGhpcy5jcmVhdGVPdXRwdXREcyhkcyk7XG4gICAgY29uc3QgZk5hbWUgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkc1swXTtcbiAgICByZXR1cm4gPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlF1ZXJ5IHZhbHVlXCIgcmVmPXt0aGlzLmNpdHlOYW1lUmVmfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucXVlcnl9PlF1ZXJ5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+UXVlcnkgc3RhdGU6IHtpbmZvLnN0YXR1c308L2Rpdj5cbiAgICAgIDxkaXY+Q291bnQ6IHtkcy5jb3VudH08L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGlzdFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogJzIwcHgnLCBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICBkcyAmJiBkcy5nZXRTdGF0dXMoKSA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWQgPyBkcy5nZXRSZWNvcmRzKCkubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PntyLmdldERhdGEoKVtmTmFtZV19PC9kaXY+XG4gICAgICAgICAgfSkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICB9XG5cbiAgY3JlYXRlT3V0cHV0RHModXNlRHM6IERhdGFTb3VyY2UpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMub3V0cHV0RGF0YVNvdXJjZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0RHNJZCA9IHRoaXMucHJvcHMub3V0cHV0RGF0YVNvdXJjZXNbMF07XG4gICAgY29uc3QgZHNNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoZHNNYW5hZ2VyLmdldERhdGFTb3VyY2Uob3V0cHV0RHNJZCkpIHtcbiAgICAgIGlmIChkc01hbmFnZXIuZ2V0RGF0YVNvdXJjZShvdXRwdXREc0lkKS5nZXREYXRhU291cmNlSnNvbigpLm9yaWdpbkRhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCAhPT0gdXNlRHMuaWQpIHtcbiAgICAgICAgZHNNYW5hZ2VyLmRlc3Ryb3lEYXRhU291cmNlKG91dHB1dERzSWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBkc01hbmFnZXIuY3JlYXRlRGF0YVNvdXJjZShvdXRwdXREc0lkKS50aGVuKG9kcyA9PiB7XG4gICAgICBvZHMuc2V0UmVjb3Jkcyh1c2VEcy5nZXRSZWNvcmRzKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5pc0RzQ29uZmlndXJlZCgpKSB7XG4gICAgICByZXR1cm4gPGgzPlxuICAgICAgICBUaGlzIHdpZGdldCBkZW1vbnN0cmF0ZXMgaG93IHRvIHVzZSBhIGZlYXR1cmUgbGF5ZXIgYXMgYSBkYXRhIHNvdXJjZS5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIENvbmZpZ3VyZSB0aGUgZGF0YSBzb3VyY2UuXG4gICAgICA8L2gzPjtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS1mZWF0dXJlLWxheWVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG1heEhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgIDxoMz5cbiAgICAgICAgVGhpcyB3aWRnZXQgc2hvd3MgaG93IHRvIHVzZSBhIGZlYXR1cmUgbGF5ZXIgYXMgYSBkYXRhIHNvdXJjZS5cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IHF1ZXJ5PXt0aGlzLnN0YXRlLnF1ZXJ5fSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH0gcXVlcnlDb3VudD5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZGF0YVJlbmRlclxuICAgICAgICB9XG4gICAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+XG4gICAgPC9kaXY+O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBRUE7QUFHQTtBQUNBO0FBSUE7O0FBc0NBO0FBdkZBO0FBQ0E7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTUE7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/feature-layer/src/runtime/widget.tsx\n");

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