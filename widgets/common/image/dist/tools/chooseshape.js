define(["jimu-core","jimu-ui"],(function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=388)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},100:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14 1l14 10.172-5.348 16.458H5.347L-.001 11.172z"></path></svg>'},101:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M0 0v28h28V0H0z"></path></svg>'},102:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14 0l14 14-14 14L0 14z"></path></svg>'},103:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14 0l14 28H0z"></path></svg>'},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ByUpload="BYUPLOAD",e.ByStaticUrl="BYSTATICURL",e.ByDynamicUrl="BYDYNAMICURL"}(t.ImgSourceType||(t.ImgSourceType={})),function(e){e.Expression="EXPRESSION",e.Attachment="ATTACHMENT",e.Symbol="SYMBOL"}(t.DynamicUrlType||(t.DynamicUrlType={}))},388:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(0),c=n(1),p=n(33),u=n(95),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cropShapeList=["rectangle","circle","hexagon","pentagon","rhombus","triangle"],t.shapeClick=function(e,n){if(!t.props.widgetConfig.functionConfig.imageParam||!t.props.widgetConfig.functionConfig.imageParam.cropParam||t.props.widgetConfig.functionConfig.imageParam.cropParam.cropShape!==t.cropShapeList[n]){var o=e.currentTarget.getElementsByTagName("svg")&&e.currentTarget.getElementsByTagName("svg")[0];if(o){var r=s.moduleLoader.getJimuForBuilderModules().getAppConfigAction(),i=s.Immutable(t.props.widgetConfig),a=s.Immutable(i.functionConfig.imageParam?i.functionConfig.imageParam.cropParam:null);a||(a=s.Immutable({})),a=(a=(a=a.set("svgViewBox",o.getAttribute("viewBox"))).set("svgPath",o.getElementsByTagName("path")[0].getAttribute("d"))).set("cropShape",t.cropShapeList[n]),i=i.setIn(["functionConfig","imageParam","cropParam"],a),r.editWidgetConfig(t.props.id,i).exec()}}},t}return r(t,e),t.prototype.getStyle=function(){var e=this.props.theme;return s.css(a||(a=i(["\n      .widget-image-chooseshape-item {\n        background-color: ",";\n      }\n\n      .widget-image-chooseshape-item:hover {\n        cursor: 'pointer';\n        background-color: ",";\n      }\n\n      .chooseshape-item-selected {\n        background-color: ",";\n      }\n      "],["\n      .widget-image-chooseshape-item {\n        background-color: ",";\n      }\n\n      .widget-image-chooseshape-item:hover {\n        cursor: 'pointer';\n        background-color: ",";\n      }\n\n      .chooseshape-item-selected {\n        background-color: ",";\n      }\n      "])),e.colors.white,e.colors.palette.light[500],e.colors.palette.light[500])},t.prototype.render=function(){var e=this;return s.jsx("div",{style:{width:"50px"},css:this.getStyle()},this.cropShapeList.map((function(t,o){var r=n(96)("./"+t+".svg");return"rectangle"!==t||e.props.widgetConfig.functionConfig.imageParam&&e.props.widgetConfig.functionConfig.imageParam.cropParam?s.jsx("div",{key:o,className:s.classNames("w-100 d-flex justify-content-center align-items-center widget-image-chooseshape-item",{"chooseshape-item-selected":e.props.widgetConfig.functionConfig.imageParam&&e.props.widgetConfig.functionConfig.imageParam.cropParam&&e.props.widgetConfig.functionConfig.imageParam.cropParam.cropShape===t}),style:{height:"40px"},onClick:function(t){return e.shapeClick(t,o)}},s.jsx(c.Icon,{icon:r})):s.jsx("div",{key:o,className:"w-100 d-flex justify-content-center align-items-center widget-image-chooseshape-item chooseshape-item-selected",style:{height:"40px"},onClick:function(t){return e.shapeClick(t,o)}},s.jsx(c.Icon,{icon:r}))})))},t}(s.React.PureComponent),f=s.themeUtils.withTheme(g),l=function(){function e(){this.index=0,this.id="choose-shape",this.classes={},this.isEmptySource=function(e){return!(e.functionConfig.imageParam&&e.functionConfig.imageParam.url||e.functionConfig.srcExpression||e.functionConfig.dynamicUrlType===p.DynamicUrlType.Attachment)}}return e.prototype.getGroupId=function(){return null},e.prototype.getTitle=function(){var e=this.widgetId,t=s.i18n.getIntl(e);return t?t.formatMessage({id:"imageChooseShape",defaultMessage:u.default.imageChooseShape}):"Shape"},e.prototype.getIcon=function(){return n(389)},e.prototype.onClick=function(e){return null},e.prototype.visible=function(e){var t=s.getAppStore().getState().appConfig.widgets[e.layoutItem.widgetId];if(t){var n=t.config;return!this.isEmptySource(n)}return!1},e.prototype.getSettingPanel=function(e){var t=e.layoutItem.widgetId;if(this.classes[t])return this.classes[t];return this.classes[t]=s.ReactRedux.connect((function(e){var n=s.Immutable(e.appConfig.widgets[t].config);return{id:t,theme:e.theme,appConfig:e.appConfig,queryObject:e.queryObject,widgetConfig:n}}))(f),this.classes[t]},e}();t.default=l},389:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.022 11H1a1 1 0 01-1-1V1a1 1 0 011-1h9a1 1 0 011 1v4.022A5.5 5.5 0 115.022 11zm0-1A5.502 5.502 0 0110 5.022V1H1v9h4.022zm5.478 5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill="#000" fill-rule="nonzero"></path></svg>'},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={_widgetLabel:"Image",imageChooseShape:"Shape",imageCrop:"Crop"}},96:function(e,t,n){var o={"./circle.svg":97,"./hexagon.svg":98,"./oval.svg":99,"./pentagon.svg":100,"./rectangle.svg":101,"./rhombus.svg":102,"./triangle.svg":103};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=96},97:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14z"></path></svg>'},98:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14.124 0l12.124 7v14l-12.124 7L2 21V7z"></path></svg>'},99:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M28 14c0 5.523-6.268 10-14 10S0 19.523 0 14 6.268 4 14 4s14 4.477 14 10z"></path></svg>'}})}));