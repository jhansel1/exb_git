System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, __WEBPACK_EXTERNAL_MODULE_jimu_ui__, __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/get-map-coordinates-class/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/get-map-coordinates-class/src/setting/setting.tsx":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates-class/src/setting/setting.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/** @jsx jsx */\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\nvar jimu_for_builder_1 = __webpack_require__(/*! jimu-for-builder */ \"jimu-for-builder\");\nvar setting_components_1 = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\nvar jimu_ui_1 = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\nvar default_1 = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/get-map-coordinates-class/src/setting/translations/default.ts\");\nvar Setting = /** @class */ (function (_super) {\n    __extends(Setting, _super);\n    function Setting() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.onShowScalePropertyChange = function (evt) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                config: _this.props.config.set(\"showScale\", evt.currentTarget.checked)\n            });\n        };\n        _this.onShowZoomPropertyChange = function (evt) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                config: _this.props.config.set(\"showZoom\", evt.currentTarget.checked)\n            });\n        };\n        _this.onMapWidgetSelected = function (useMapWidgetIds) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                useMapWidgetIds: useMapWidgetIds\n            });\n        };\n        return _this;\n    }\n    Setting.prototype.render = function () {\n        var style = jimu_core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n      .widget-setting-get-map-coordinates {\\n        .checkbox-row {\\n          display: flex;\\n          justify-content: space-between;\\n          margin-bottom: 8px;\\n        }\\n      }\\n    \"], [\"\\n      .widget-setting-get-map-coordinates {\\n        .checkbox-row {\\n          display: flex;\\n          justify-content: space-between;\\n          margin-bottom: 8px;\\n        }\\n      }\\n    \"])));\n        return (jimu_core_1.jsx(\"div\", { css: style },\n            jimu_core_1.jsx(\"div\", { className: \"widget-setting-get-map-coordinates\" },\n                jimu_core_1.jsx(setting_components_1.SettingSection, { className: \"map-selector-section\", title: this.props.intl.formatMessage({\n                        id: \"mapWidgetLabel\",\n                        defaultMessage: default_1.default.selectMapWidget\n                    }) },\n                    jimu_core_1.jsx(setting_components_1.SettingRow, null,\n                        jimu_core_1.jsx(setting_components_1.JimuMapViewSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\n                jimu_core_1.jsx(setting_components_1.SettingSection, { title: this.props.intl.formatMessage({\n                        id: \"settingsLabel\",\n                        defaultMessage: default_1.default.settings\n                    }) },\n                    jimu_core_1.jsx(setting_components_1.SettingRow, null,\n                        jimu_core_1.jsx(\"div\", { className: \"w-100 showZoom\" },\n                            jimu_core_1.jsx(\"div\", { className: \"checkbox-row\" },\n                                jimu_core_1.jsx(\"label\", null,\n                                    jimu_core_1.jsx(jimu_core_1.FormattedMessage, { id: \"showZoom\", defaultMessage: default_1.default.showZoom })),\n                                jimu_core_1.jsx(jimu_ui_1.Switch, { checked: (this.props.config && this.props.config.showZoom) || false, onChange: this.onShowZoomPropertyChange })))),\n                    jimu_core_1.jsx(setting_components_1.SettingRow, null,\n                        jimu_core_1.jsx(\"div\", { className: \"w-100 showScale\" },\n                            jimu_core_1.jsx(\"div\", { className: \"checkbox-row\" },\n                                jimu_core_1.jsx(\"label\", null,\n                                    jimu_core_1.jsx(jimu_core_1.FormattedMessage, { id: \"showScale\", defaultMessage: default_1.default.showScale })),\n                                jimu_core_1.jsx(jimu_ui_1.Switch, { checked: (this.props.config && this.props.config.showScale) ||\n                                        false, onChange: this.onShowScalePropertyChange }))))))));\n    };\n    return Setting;\n}(jimu_for_builder_1.BaseWidgetSetting));\nexports.default = Setting;\nvar templateObject_1;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzLWNsYXNzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy1jbGFzcy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD80MjFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIEZvcm1hdHRlZE1lc3NhZ2UsIGNzcywganN4IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQmFzZVdpZGdldFNldHRpbmcsIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XG5pbXBvcnQge1xuICBKaW11TWFwVmlld1NlbGVjdG9yLFxuICBTZXR0aW5nU2VjdGlvbixcbiAgU2V0dGluZ1Jvd1xufSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBCYXNlV2lkZ2V0U2V0dGluZzxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPixcbiAgYW55XG4+IHtcbiAgb25TaG93U2NhbGVQcm9wZXJ0eUNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXCJzaG93U2NhbGVcIiwgZXZ0LmN1cnJlbnRUYXJnZXQuY2hlY2tlZClcbiAgICB9KTtcbiAgfTtcblxuICBvblNob3dab29tUHJvcGVydHlDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFwic2hvd1pvb21cIiwgZXZ0LmN1cnJlbnRUYXJnZXQuY2hlY2tlZClcbiAgICB9KTtcbiAgfTtcblxuICBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgICAgLndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXMge1xuICAgICAgICAuY2hlY2tib3gtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXNcIj5cbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1zZWxlY3Rvci1zZWN0aW9uXCJcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgIGlkOiBcIm1hcFdpZGdldExhYmVsXCIsXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxKaW11TWFwVmlld1NlbGVjdG9yXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgIGlkOiBcInNldHRpbmdzTGFiZWxcIixcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRJMThuTWVzc2FnZXMuc2V0dGluZ3NcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHNob3dab29tXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3dab29tXCJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5zaG93Wm9vbX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5zaG93Wm9vbSkgfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNob3dab29tUHJvcGVydHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cblxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgc2hvd1NjYWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3dTY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMuc2hvd1NjYWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLnNob3dTY2FsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2hvd1NjYWxlUHJvcGVydHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQStFQTtBQTdFQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFXQTtBQUNBO0FBQUE7OzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/get-map-coordinates-class/src/setting/setting.tsx\n");

/***/ }),

/***/ "./your-extensions/widgets/get-map-coordinates-class/src/setting/translations/default.ts":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates-class/src/setting/translations/default.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    selectMapWidget: \"Select Map Widget\",\n    settings: \"Settings\",\n    showScale: \"Show Scale\",\n    showZoom: \"Show Zoom\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzLWNsYXNzL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy1jbGFzcy9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz8xMTE1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc2VsZWN0TWFwV2lkZ2V0OiBcIlNlbGVjdCBNYXAgV2lkZ2V0XCIsXG4gIHNldHRpbmdzOiBcIlNldHRpbmdzXCIsXG4gIHNob3dTY2FsZTogXCJTaG93IFNjYWxlXCIsXG4gIHNob3dab29tOiBcIlNob3cgWm9vbVwiXG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/get-map-coordinates-class/src/setting/translations/default.ts\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1mb3ItYnVpbGRlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtZm9yLWJ1aWxkZXJcIj8xY2IyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-for-builder\n");

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtdWlcIj8zNTQzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui\n");

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiP2RlZTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui/advanced/setting-components\n");

/***/ })

/******/ })
			);
		}
	};
});