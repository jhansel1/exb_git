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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    _widgetLabel: \"Get Map Coordinates\",\n    latLon: \"Lat/Lon\",\n    zoom: \"Zoom\",\n    latLonWillBeHere: \"Lat/Lon (None - please mouse over map)\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz8yZGExIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkdldCBNYXAgQ29vcmRpbmF0ZXNcIixcbiAgbGF0TG9uOiBcIkxhdC9Mb25cIixcbiAgem9vbTogXCJab29tXCIsXG4gIGxhdExvbldpbGxCZUhlcmU6IFwiTGF0L0xvbiAoTm9uZSAtIHBsZWFzZSBtb3VzZSBvdmVyIG1hcClcIlxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/** @jsx jsx */\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\nvar jimu_arcgis_1 = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\nvar default_1 = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts\");\nvar Widget = /** @class */ (function (_super) {\n    __extends(Widget, _super);\n    function Widget() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {\n            latitude: \"\",\n            longitude: \"\",\n            zoom: 0,\n            scale: 0,\n            mapViewReady: false,\n            jimuMapView: null\n        };\n        _this.activeViewChangeHandler = function (jmv) {\n            if (jmv) {\n                _this.setState({\n                    jimuMapView: jmv\n                });\n                // When the extent moves, update the state with all the updated values.\n                jmv.view.watch(\"extent\", function (evt) {\n                    _this.setState({\n                        latitude: _this.state.jimuMapView.view.center.latitude.toFixed(3),\n                        longitude: _this.state.jimuMapView.view.center.longitude.toFixed(3),\n                        scale: Math.round(_this.state.jimuMapView.view.scale * 1) / 1,\n                        zoom: _this.state.jimuMapView.view.zoom,\n                        // this is set to false initially, then once we have the first set of data (and all subsequent) it's set\n                        // to true, so that we can hide the text until everything is ready:\n                        mapViewReady: true\n                    });\n                });\n                // When the pointer moves, take the pointer location and create a Point\n                // Geometry out of it (`view.toMap(...)`), then update the state.\n                jmv.view.on(\"pointer-move\", function (evt) {\n                    var point = _this.state.jimuMapView.view.toMap({\n                        x: evt.x,\n                        y: evt.y\n                    });\n                    _this.setState({\n                        latitude: point.latitude.toFixed(3),\n                        longitude: point.longitude.toFixed(3),\n                        scale: Math.round(_this.state.jimuMapView.view.scale * 1) / 1,\n                        zoom: _this.state.jimuMapView.view.zoom,\n                        mapViewReady: true\n                    });\n                });\n            }\n        };\n        return _this;\n    }\n    Widget.prototype.render = function () {\n        var sections = [];\n        sections.push(jimu_core_1.jsx(\"span\", null,\n            default_1.default.latLon,\n            \" \",\n            this.state.latitude,\n            \" \",\n            this.state.longitude));\n        if (this.props.config.showZoom === true) {\n            sections.push(jimu_core_1.jsx(\"span\", null,\n                \"Zoom \",\n                this.state.zoom.toFixed(0)));\n        }\n        if (this.props.config.showScale === true) {\n            sections.push(jimu_core_1.jsx(\"span\", null,\n                \"Scale 1:\",\n                this.state.scale));\n        }\n        // We have 1, 2, or 3 JSX Elements in our array, we want to join them\n        // with \" | \" between them. You cannot use `sections.join(\" | \")`, sadly.\n        // So we use array.reduce(...) to return an array of JSX elements.\n        var allSections = sections.reduce(function (previousValue, currentValue) {\n            return previousValue === null\n                ? [currentValue]\n                : __spreadArrays(previousValue, [\" | \", currentValue]);\n        }, null);\n        return (jimu_core_1.jsx(\"div\", { className: \"widget-get-map-coordinates jimu-widget m-2\" },\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\n                this.props.useMapWidgetIds &&\n                this.props.useMapWidgetIds.length === 1 && (jimu_core_1.jsx(jimu_arcgis_1.JimuMapViewComponent, { useMapWidgetIds: this.props.useMapWidgetIds, onActiveViewChange: this.activeViewChangeHandler })),\n            jimu_core_1.jsx(\"p\", null, this.state.mapViewReady === true ? allSections : default_1.default.latLonWillBeHere)));\n    };\n    return Widget;\n}(jimu_core_1.React.PureComponent));\nexports.default = Widget;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3g/MzhkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywganN4IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcblxuaW1wb3J0IFBvaW50ID0gcmVxdWlyZShcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIik7XG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2RlZmF1bHRcIjtcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGxhdGl0dWRlOiBzdHJpbmc7XG4gIGxvbmdpdHVkZTogc3RyaW5nO1xuICBzY2FsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIG1hcFZpZXdSZWFkeTogYm9vbGVhbjtcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXG4gIElTdGF0ZVxuPiB7XG4gIHN0YXRlID0ge1xuICAgIGxhdGl0dWRlOiBcIlwiLFxuICAgIGxvbmdpdHVkZTogXCJcIixcbiAgICB6b29tOiAwLFxuICAgIHNjYWxlOiAwLFxuICAgIG1hcFZpZXdSZWFkeTogZmFsc2UsXG4gICAgamltdU1hcFZpZXc6IG51bGxcbiAgfTtcblxuICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKGptdikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGppbXVNYXBWaWV3OiBqbXZcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXaGVuIHRoZSBleHRlbnQgbW92ZXMsIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBhbGwgdGhlIHVwZGF0ZWQgdmFsdWVzLlxuICAgICAgam12LnZpZXcud2F0Y2goXCJleHRlbnRcIiwgZXZ0ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGF0aXR1ZGU6IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5jZW50ZXIubGF0aXR1ZGUudG9GaXhlZCgzKSxcbiAgICAgICAgICBsb25naXR1ZGU6IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5jZW50ZXIubG9uZ2l0dWRlLnRvRml4ZWQoMyksXG4gICAgICAgICAgc2NhbGU6IE1hdGgucm91bmQodGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LnNjYWxlICogMSkgLyAxLFxuICAgICAgICAgIHpvb206IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy56b29tLFxuICAgICAgICAgIC8vIHRoaXMgaXMgc2V0IHRvIGZhbHNlIGluaXRpYWxseSwgdGhlbiBvbmNlIHdlIGhhdmUgdGhlIGZpcnN0IHNldCBvZiBkYXRhIChhbmQgYWxsIHN1YnNlcXVlbnQpIGl0J3Mgc2V0XG4gICAgICAgICAgLy8gdG8gdHJ1ZSwgc28gdGhhdCB3ZSBjYW4gaGlkZSB0aGUgdGV4dCB1bnRpbCBldmVyeXRoaW5nIGlzIHJlYWR5OlxuICAgICAgICAgIG1hcFZpZXdSZWFkeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXaGVuIHRoZSBwb2ludGVyIG1vdmVzLCB0YWtlIHRoZSBwb2ludGVyIGxvY2F0aW9uIGFuZCBjcmVhdGUgYSBQb2ludFxuICAgICAgLy8gR2VvbWV0cnkgb3V0IG9mIGl0IChgdmlldy50b01hcCguLi4pYCksIHRoZW4gdXBkYXRlIHRoZSBzdGF0ZS5cbiAgICAgIGptdi52aWV3Lm9uKFwicG9pbnRlci1tb3ZlXCIsIGV2dCA9PiB7XG4gICAgICAgIGNvbnN0IHBvaW50OiBQb2ludCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy50b01hcCh7XG4gICAgICAgICAgeDogZXZ0LngsXG4gICAgICAgICAgeTogZXZ0LnlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxhdGl0dWRlOiBwb2ludC5sYXRpdHVkZS50b0ZpeGVkKDMpLFxuICAgICAgICAgIGxvbmdpdHVkZTogcG9pbnQubG9uZ2l0dWRlLnRvRml4ZWQoMyksXG4gICAgICAgICAgc2NhbGU6IE1hdGgucm91bmQodGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LnNjYWxlICogMSkgLyAxLFxuICAgICAgICAgIHpvb206IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy56b29tLFxuICAgICAgICAgIG1hcFZpZXdSZWFkeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG5cbiAgICBzZWN0aW9ucy5wdXNoKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHtkZWZhdWx0TWVzc2FnZXMubGF0TG9ufSB7dGhpcy5zdGF0ZS5sYXRpdHVkZX0ge3RoaXMuc3RhdGUubG9uZ2l0dWRlfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcuc2hvd1pvb20gPT09IHRydWUpIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goPHNwYW4+Wm9vbSB7dGhpcy5zdGF0ZS56b29tLnRvRml4ZWQoMCl9PC9zcGFuPik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLnNob3dTY2FsZSA9PT0gdHJ1ZSkge1xuICAgICAgc2VjdGlvbnMucHVzaCg8c3Bhbj5TY2FsZSAxOnt0aGlzLnN0YXRlLnNjYWxlfTwvc3Bhbj4pO1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgMSwgMiwgb3IgMyBKU1ggRWxlbWVudHMgaW4gb3VyIGFycmF5LCB3ZSB3YW50IHRvIGpvaW4gdGhlbVxuICAgIC8vIHdpdGggXCIgfCBcIiBiZXR3ZWVuIHRoZW0uIFlvdSBjYW5ub3QgdXNlIGBzZWN0aW9ucy5qb2luKFwiIHwgXCIpYCwgc2FkbHkuXG4gICAgLy8gU28gd2UgdXNlIGFycmF5LnJlZHVjZSguLi4pIHRvIHJldHVybiBhbiBhcnJheSBvZiBKU1ggZWxlbWVudHMuXG4gICAgY29uc3QgYWxsU2VjdGlvbnMgPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBbY3VycmVudFZhbHVlXVxuICAgICAgICA6IFsuLi5wcmV2aW91c1ZhbHVlLCBcIiB8IFwiLCBjdXJyZW50VmFsdWVdO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWdldC1tYXAtY29vcmRpbmF0ZXMgamltdS13aWRnZXQgbS0yXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KFwidXNlTWFwV2lkZ2V0SWRzXCIpICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICB7LyogT25seSBzaG93IHRoZSBkYXRhIG9uY2UgdGhlIE1hcFZpZXcgaXMgcmVhZHkgKi99XG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLm1hcFZpZXdSZWFkeSA9PT0gdHJ1ZSA/IGFsbFNlY3Rpb25zIDogZGVmYXVsdE1lc3NhZ2VzLmxhdExvbldpbGxCZUhlcmV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE0Q0E7QUExQ0E7QUFDQTtBQUVBO0FBRUE7O0FBQUE7O0FBQUE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUdBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx\n");

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