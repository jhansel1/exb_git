System.register(["jimu-core","jimu-ui"],(function(t){var e,n;return{setters:[function(t){e=t},function(t){n=t}],execute:function(){t(function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=230)}({0:function(t,n){t.exports=e},1:function(t,e){t.exports=n},230:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),r=n(74),u=function(){function t(){this.index=1,this.id="image-croptool",this.classes={},this.isEmptySource=function(t){return!(t.functionConfig.imageParam&&t.functionConfig.imageParam.url||t.functionConfig.srcExpression)}}return t.prototype.getGroupId=function(){return null},t.prototype.getTitle=function(){var t=this.widgetId,e=i.i18n.getIntl(t);return e?e.formatMessage({id:"imageCrop",defaultMessage:r.a.imageCrop}):"Crop"},t.prototype.getIcon=function(){return n(231)},t.prototype.onClick=function(t){var e=Object(i.getAppStore)().getState().appConfig.widgets[t.layoutItem.widgetId],n={bottom:t.clientRect.bottom,height:t.clientRect.height,left:window.scrollX+t.clientRect.left,right:t.clientRect.right,top:window.scrollY+t.clientRect.top,width:t.clientRect.width};if(i.MutableStoreManager.getInstance().updateStateValue(t.layoutItem.widgetId,"clientRect",n),e){var o=e.config;o.functionConfig.imageParam&&o.functionConfig.imageParam.url&&Object(i.getAppStore)().dispatch(i.appActions.setWidgetIsInlineEditingState(t.layoutItem.widgetId,!0))}},t.prototype.visible=function(t){var e=Object(i.getAppStore)().getState().appConfig.widgets[t.layoutItem.widgetId];if(e){var n=e.config;return!this.isEmptySource(n)&&(!n.functionConfig.srcExpression&&(!n.functionConfig.imageParam||n.functionConfig.imageFillMode!==o.ImageFillMode.Fit))}return!1},t.prototype.getSettingPanel=function(t){return null},t}();e.default=u},231:function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v9.288L12.288 3H3zm0-1h10.288L15.14.146a.5.5 0 11.708.708L14 2.702V13h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V14H2V3H.5a.5.5 0 010-1H2V.5a.5.5 0 011 0V2zm10 1.702L3.702 13H13V3.702z"></path></svg>'},74:function(t,e,n){"use strict";e.a={_widgetLabel:"Image",imageChooseShape:"Shape",imageCrop:"Crop"}}}))}}}));