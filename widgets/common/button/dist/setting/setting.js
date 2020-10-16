define(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-for-builder","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker","jimu-ui/advanced/resource-selector","jimu-ui/advanced/expression-builder"],(function(e,t,n,o,s,i,r,p,a){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=292)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},11:function(e,t){e.exports=r},12:function(e,t){e.exports=p},25:function(e,t){e.exports=a},292:function(e,t,n){"use strict";var o,s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(5),p=n(3),a=n(12),u=n(1),l=n(6),c=n(3),g=n(25),f=n(83),d=n(293),h=n(294),m=n(298),x=n(84),S=n(1),y=n(38),v=i.Immutable([g.ExpressionInputType.Static,g.ExpressionInputType.Attribute,g.ExpressionInputType.Statistics,g.ExpressionInputType.Expression]),C=i.Immutable([l.AllDataSourceTypes.FeatureLayer,l.AllDataSourceTypes.FeatureQuery]),T=function(e){function t(t){var n,o,s,p,a=e.call(this,t)||this;return a.toggleLinkSetting=function(){a.setState({isLinkSettingShown:!a.state.isLinkSettingShown})},a.onSettingLinkConfirm=function(e){var t;if(e){if(e.expression){s=a.getTextExpression(),i=a.getTipExpression();var n=e.expression;o=a.mergeUseDataSources(s,i,n);t={id:a.props.id,config:a.props.config.setIn(["functionConfig","linkParam"],e),useDataSources:o}}else{var o=void 0;if(a.getIsDataSourceUsed()){var s=a.getTextExpression(),i=a.getTipExpression();o=a.mergeUseDataSources(s,i,null)}else o=a.getUseDataSourcesWithoutFields();t={id:a.props.id,config:a.props.config.setIn(["functionConfig","linkParam"],e),useDataSources:o}}a.props.onSettingChange(t),a.setState({isLinkSettingShown:!1})}},a.onTextChange=function(){var e={id:a.props.id,config:a.props.config.setIn(["functionConfig","text"],a.state.currentTextInput).setIn(["functionConfig","textExpression"],null),useDataSources:a.getUseDataSourcesWithoutFields()};a.props.onSettingChange(e)},a.onToolTipChange=function(){var e={id:a.props.id,config:a.props.config.setIn(["functionConfig","toolTip"],a.state.currentTipInput).setIn(["functionConfig","toolTipExpression"],null),useDataSources:a.getUseDataSourcesWithoutFields()};a.props.onSettingChange(e)},a.onTextExpChange=function(e){if(e){var t=a.getTipExpression(),n=a.getLinkSettingExpression(),o=a.mergeUseDataSources(i.Immutable(e),t,n);a.props.onSettingChange({id:a.props.id,config:a.props.config.setIn(["functionConfig","textExpression"],e).setIn(["functionConfig","text"],""),useDataSources:o}),a.setState({isTextExpOpen:!1})}},a.onTipExpChange=function(e){if(e){var t=a.getTextExpression(),n=a.getLinkSettingExpression(),o=a.mergeUseDataSources(t,i.Immutable(e),n);a.props.onSettingChange({id:a.props.id,config:a.props.config.setIn(["functionConfig","toolTipExpression"],e).setIn(["functionConfig","toolTip"],""),useDataSources:o}),a.setState({isTipExpOpen:!1})}},a.onToggleUseDataEnabled=function(e){var t,n,o,s,r,p,u=a.props.config;e?(u=(u=u.setIn(["functionConfig","textExpression"],a.getTextExpression()).setIn(["functionConfig","toolTipExpression"],a.getTipExpression())).set("functionConfig",u.functionConfig.without("text").without("toolTip")),(null===(o=null===(n=null===(t=a.props.config)||void 0===t?void 0:t.functionConfig)||void 0===n?void 0:n.linkParam)||void 0===o?void 0:o.linkType)===i.LinkType.WebAddress&&(u=(u=u.setIn(["functionConfig","linkParam","expression"],a.getLinkSettingExpression())).setIn(["functionConfig","linkParam"],u.functionConfig.linkParam.without("value")))):(u=(u=u.setIn(["functionConfig","text"],a.state.currentTextInput).setIn(["functionConfig","toolTip"],a.state.currentTipInput)).set("functionConfig",u.functionConfig.without("textExpression").without("toolTipExpression")),(null===(p=null===(r=null===(s=a.props.config)||void 0===s?void 0:s.functionConfig)||void 0===r?void 0:r.linkParam)||void 0===p?void 0:p.linkType)===i.LinkType.WebAddress&&(u=(u=u.setIn(["functionConfig","linkParam","value"],"")).setIn(["functionConfig","linkParam"],u.functionConfig.linkParam.without("expression")))),a.props.onSettingChange({id:a.props.id,useDataSourcesEnabled:e,config:u})},a.onDataSourceChange=function(e){e&&a.props.onSettingChange({id:a.props.id,useDataSources:e})},a.getDefaultIconColor=function(e){var t=e?"regular":"hover";return a.props.config.getIn(["styleConfig","customStyle",t,"iconProps","color"])||a.props.appTheme.colors.dark},a.onIconResultChange=function(e){var t;if(e){t=a.props.config;var n=a.props.config.getIn(["functionConfig","icon","position"])||f.IconPosition.Left,o=a.getDefaultIconColor(!0),s=a.getDefaultIconColor(!1),r=a.props.config.getIn(["styleConfig","customStyle","regular","iconProps","size"])||e.properties.size,p=a.props.config.getIn(["styleConfig","customStyle","hover","iconProps","size"])||e.properties.size;t=t.setIn(["functionConfig","icon","data"],e.svg).setIn(["functionConfig","icon","position"],n).setIn(["styleConfig","customStyle","regular","iconProps","color"],o).setIn(["styleConfig","customStyle","regular","iconProps","size"],r).setIn(["styleConfig","customStyle","hover","iconProps","color"],s).setIn(["styleConfig","customStyle","hover","iconProps","size"],p)}else t=a.props.config.set("functionConfig",a.props.config.functionConfig.without("icon")).setIn(["styleConfig","customStyle","regular"],a.props.config.getIn(["styleConfig","customStyle","regular"],i.Immutable({})).without("iconProps")).setIn(["styleConfig","customStyle","hover"],a.props.config.getIn(["styleConfig","customStyle","hover"],i.Immutable({})).without("iconProps"));a.props.onSettingChange({id:a.props.id,config:t})},a.getWhetherHaveCustomStyle=function(e){var t=e?"regular":"hover",n=a.props.config.getIn(["styleConfig","customStyle",t]);return n&&n.iconProps&&(n=n.without("iconProps")),!!(n&&Object.keys(n).length>0)},a.onRegularStyleChange=function(e){var t=a.props.config.setIn(["styleConfig","customStyle","regular"],e);a.getWhetherHaveCustomStyle(!1)||(t=t.setIn(["styleConfig","customStyle","hover"],a.getThemeStyle(!1))),t.getIn(["styleConfig","themeStyle"])&&(t=t.set("styleConfig",t.styleConfig.without("themeStyle"))),a.props.onSettingChange({id:a.props.id,config:t})},a.onHoverStyleChange=function(e){var t=a.props.config.setIn(["styleConfig","customStyle","hover"],e);a.getWhetherHaveCustomStyle(!0)||(t=t.setIn(["styleConfig","customStyle","regular"],a.getThemeStyle(!0))),t.getIn(["styleConfig","themeStyle"])&&(t=t.set("styleConfig",t.styleConfig.without("themeStyle"))),a.props.onSettingChange({id:a.props.id,config:t})},a.onIconPositionChange=function(e){a.props.onSettingChange({id:a.props.id,config:a.props.config.setIn(["functionConfig","icon","position"],e.target.value)})},a.onAdvanceTabSelect=function(e){var t=e===a.props.intl.formatMessage({id:"hover",defaultMessage:u.defaultMessages.hover});r.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:a.props.id,propKey:"isConfiguringHover",value:t})},a.mergeUseDataSources=function(e,t,n){var o=i.expressionUtils.getUseDataSourceFromExpParts(e&&e.parts,a.props.useDataSources),s=i.expressionUtils.getUseDataSourceFromExpParts(t&&t.parts,a.props.useDataSources),r=i.expressionUtils.getUseDataSourceFromExpParts(n&&n.parts,a.props.useDataSources);return a.mergeUseDataSourcesByDss(o,s,r)},a.mergeUseDataSourcesByDss=function(e,t,n){var o=a.getUseDataSourcesWithoutFields(),s=i.expressionUtils.mergeUseDataSources(o,e);return s=i.expressionUtils.mergeUseDataSources(s,t),s=i.expressionUtils.mergeUseDataSources(s,n)},a.getUseDataSourcesWithoutFields=function(){return a.props.useDataSources&&a.props.useDataSources[0]&&a.props.useDataSources[0].dataSourceId?i.Immutable([a.props.useDataSources[0].without("fields").asMutable({deep:!0})]):i.Immutable([])},a.getIsDataSourceUsed=function(){return!!a.props.useDataSourcesEnabled},a.getTipExpression=function(){return a.props.config&&a.props.config.functionConfig&&a.props.config.functionConfig.toolTipExpression&&a.props.config.functionConfig.toolTipExpression||i.Immutable({name:"",parts:[{type:i.ExpressionPartType.String,exp:'"'+a.state.currentTipInput+'"'}]})},a.getTextExpression=function(){return a.props.config&&a.props.config.functionConfig&&a.props.config.functionConfig.textExpression&&a.props.config.functionConfig.textExpression||i.Immutable({name:"",parts:[{type:i.ExpressionPartType.String,exp:'"'+a.state.currentTextInput+'"'}]})},a.getLinkSettingExpression=function(){var e,t,n,o,s,r,p,u,l;return a.props.config&&a.props.config.functionConfig&&a.props.config.functionConfig.linkParam&&a.props.config.functionConfig.linkParam&&a.props.config.functionConfig.linkParam.expression||((null===(n=null===(t=null===(e=a.props.config)||void 0===e?void 0:e.functionConfig)||void 0===t?void 0:t.linkParam)||void 0===n?void 0:n.linkType)===i.LinkType.WebAddress&&(null===(r=null===(s=null===(o=a.props.config)||void 0===o?void 0:o.functionConfig)||void 0===s?void 0:s.linkParam)||void 0===r?void 0:r.value)?i.Immutable({name:"",parts:[{type:i.ExpressionPartType.String,exp:'"'+(null===(l=null===(u=null===(p=a.props.config)||void 0===p?void 0:p.functionConfig)||void 0===u?void 0:u.linkParam)||void 0===l?void 0:l.value)+'"'}]}):null)},a.getThemeStyle=function(e){if(!a.props.config.getIn(["styleConfig","themeStyle"]))return i.Immutable({});var t=a.props.config.getIn(["styleConfig","themeStyle","quickStyleType"]),n=e?"default":"hover",o=a.props.appTheme.getIn(["components","button","variants",t,n])||{},s=a.props.appTheme.getIn(["components","button","sizes","default"])||{},r=parseFloat(u.styleUtils.remToPixel(s.borderRadius)),p={color:o.color,size:parseFloat(u.styleUtils.remToPixel(s.fontSize))},l={background:{color:o.bg,fillType:u.FillType.FILL},border:{type:u.LineType.SOLID,color:o.border&&o.border.color,width:u.utils.stringOfLinearUnit({distance:o.border&&"string"==typeof o.border.width?parseFloat(u.styleUtils.remToPixel(o.border.width)):void 0,unit:u.UnitTypes.PIXEL})},text:{color:o.color,size:u.styleUtils.remToPixel(s.fontSize)},borderRadius:{unit:u.UnitTypes.PIXEL,number:[r,r,r,r]},iconProps:p};return i.Immutable(l)},a.openTextExpPopup=function(){a.setState({isTextExpOpen:!0,isTipExpOpen:!1})},a.openTipExpPopup=function(){a.setState({isTextExpOpen:!1,isTipExpOpen:!0})},a.closeTextExpPopup=function(){a.setState({isTextExpOpen:!1,isTipExpOpen:!1})},a.closeTipExpPopup=function(){a.setState({isTextExpOpen:!1,isTipExpOpen:!1})},a.showTextSetting=function(){return!!(a.getIsDataSourceUsed()?!a.props.config.getIn(["functionConfig","textExpression"])||a.props.config.getIn(["functionConfig","textExpression"])&&a.props.config.getIn(["functionConfig","textExpression","parts"])&&(a.props.config.getIn(["functionConfig","textExpression","parts"]).length>1||'""'!==a.props.config.getIn(["functionConfig","textExpression","parts","0","exp"])):a.state.currentTextInput)},a.showIconSetting=function(){return!!a.props.config.getIn(["functionConfig","icon"])},a.toggleUseCustom=function(){var e=a.props.config;e=(e=e.setIn(["styleConfig","useCustom"],!e.getIn(["styleConfig","useCustom"]))).getIn(["styleConfig","useCustom"])?(e=(e=e.setIn(["styleConfig","customStyle","hover"],a.getThemeStyle(!1))).setIn(["styleConfig","customStyle","regular"],a.getThemeStyle(!0))).set("styleConfig",e.styleConfig.without("themeStyle")):(e=(e=e.setIn(["styleConfig","themeStyle","quickStyleType"],"default")).setIn(["styleConfig","customStyle","regular"],{iconProps:x.getIconPropsFromTheme(!0,"default",a.props.appTheme)})).setIn(["styleConfig","customStyle","hover"],{iconProps:x.getIconPropsFromTheme(!1,"default",a.props.appTheme)}),a.props.onSettingChange({id:a.props.id,config:e})},a.state={isLinkSettingShown:!1,isTextExpOpen:!1,isTipExpOpen:!1,currentTextInput:"string"==typeof(null===(o=null===(n=a.props.config)||void 0===n?void 0:n.functionConfig)||void 0===o?void 0:o.text)?null===(p=null===(s=a.props.config)||void 0===s?void 0:s.functionConfig)||void 0===p?void 0:p.text:a.props.intl.formatMessage({id:"variableButton",defaultMessage:S.defaultMessages.variableButton}),currentTipInput:a.props.config&&a.props.config.functionConfig&&a.props.config.functionConfig.toolTip||""},a}return s(t,e),t.prototype.componentWillUnmount=function(){r.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:this.props.id,propKey:"isConfiguringHover",value:!1})},t.prototype.render=function(){var e,t,n=this,o=this.props.config.functionConfig.icon?{svg:this.props.config.functionConfig.icon.data}:null,s=this.props.config.styleConfig&&this.props.config.styleConfig.customStyle,r=this.showTextSetting(),x=this.showIconSetting(),T=r&&x;return i.jsx("div",{css:d.getStyle(this.props.theme)},i.jsx("div",{className:"widget-setting-link jimu-widget"},i.jsx("div",null,i.jsx(p.SettingSection,null,i.jsx(p.SettingRow,null,i.jsx("div",{className:"choose-ds w-100"},i.jsx(l.DataSourceSelector,{types:C,useDataSources:this.props.useDataSources,useDataSourcesEnabled:this.getIsDataSourceUsed(),onToggleUseDataEnabled:this.onToggleUseDataEnabled,onChange:this.onDataSourceChange,widgetId:this.props.id})))),i.jsx(p.SettingSection,null,i.jsx(p.SettingRow,null,i.jsx(u.Button,{className:"w-100 text-dark set-link-btn",type:"primary",onClick:this.toggleLinkSetting},i.jsx("div",{className:"w-100 px-2 text-truncate"},i.jsx(u.Icon,{icon:y,size:12,className:"add-data-icon"}),this.props.intl.formatMessage({id:"setLink",defaultMessage:u.defaultMessages.setLink})))),i.jsx(p.SettingRow,{label:this.props.intl.formatMessage({id:"tooltip",defaultMessage:S.defaultMessages.tooltip})}),i.jsx(p.SettingRow,null,this.getIsDataSourceUsed()?i.jsx("div",{className:"w-100"},i.jsx(g.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.onTipExpChange,openExpPopup:this.openTipExpPopup,expression:this.getTipExpression(),isExpPopupOpen:this.state.isTipExpOpen,closeExpPopup:this.closeTipExpPopup,types:v,widgetId:this.props.id})):i.jsx(u.TextInput,{className:"w-100",value:this.state.currentTipInput,onChange:function(e){n.setState({currentTipInput:e.target.value})},onBlur:function(){n.onToolTipChange()},onKeyUp:function(){n.onToolTipChange()}})),i.jsx(p.SettingRow,{label:this.props.intl.formatMessage({id:"text",defaultMessage:S.defaultMessages.text})}),i.jsx(p.SettingRow,null,this.getIsDataSourceUsed()?i.jsx("div",{className:"w-100"},i.jsx(g.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.onTextExpChange,openExpPopup:this.openTextExpPopup,expression:this.getTextExpression(),isExpPopupOpen:this.state.isTextExpOpen,closeExpPopup:this.closeTextExpPopup,types:v,widgetId:this.props.id})):i.jsx(u.TextInput,{className:"w-100",value:this.state.currentTextInput,onChange:function(e){n.setState({currentTextInput:e.target.value})},onBlur:function(){n.onTextChange()},onKeyUp:function(){n.onTextChange()}})),i.jsx(p.SettingRow,{label:this.props.intl.formatMessage({id:"icon",defaultMessage:i.defaultMessages.icon})},i.jsx(a.IconPicker,{icon:o,configurableOption:"none",onChange:this.onIconResultChange})),T&&i.jsx(p.SettingRow,{label:this.props.intl.formatMessage({id:"position",defaultMessage:u.defaultMessages.position})},i.jsx("div",null,i.jsx(u.Select,{onChange:this.onIconPositionChange,value:this.props.config.functionConfig&&this.props.config.functionConfig.icon&&this.props.config.functionConfig.icon.position},Object.keys(f.IconPosition).map((function(e){return i.jsx("option",{value:f.IconPosition[e],key:e},n.props.intl.formatMessage({id:e.toLowerCase(),defaultMessage:u.defaultMessages[e.toLowerCase()]}))})))))),i.jsx(p.SettingSection,null,i.jsx(m.default,{title:this.props.intl.formatMessage({id:"advance",defaultMessage:u.defaultMessages.advance}),isOpen:!!(null===(t=null===(e=this.props.config)||void 0===e?void 0:e.styleConfig)||void 0===t?void 0:t.useCustom),toggle:this.toggleUseCustom},i.jsx(u.Tabs,{fill:!0,pills:!0,onTabSelect:this.onAdvanceTabSelect},i.jsx(u.Tab,{id:"regular",defaultActive:!0,title:this.props.intl.formatMessage({id:"regular",defaultMessage:u.defaultMessages.regular})},i.jsx(h.default,{intl:this.props.intl,appTheme:this.props.appTheme,style:s&&s.regular,themeStyle:this.getThemeStyle(!0),onChange:this.onRegularStyleChange,isTextSettingOpen:r,isIconSettingOpen:x})),i.jsx(u.Tab,{id:"hover",title:this.props.intl.formatMessage({id:"hover",defaultMessage:u.defaultMessages.hover})},i.jsx(h.default,{intl:this.props.intl,appTheme:this.props.appTheme,style:s&&s.hover,themeStyle:this.getThemeStyle(!1),onChange:this.onHoverStyleChange,isTextSettingOpen:r,isIconSettingOpen:x})))))),this.state.isLinkSettingShown&&!i.urlUtils.getAppIdPageIdFromUrl().pageId&&i.jsx(c.LinkSettingPopup,{isOpen:this.state.isLinkSettingShown,onSettingCancel:function(){n.setState({isLinkSettingShown:!1})},onSettingConfirm:this.onSettingLinkConfirm,linkParam:this.props.config.functionConfig.linkParam,useDataSources:this.getIsDataSourceUsed()&&this.props.useDataSources,widgetId:this.props.id})))},t.mapExtraStateProps=function(e,t){return{appTheme:e&&e.appStateInBuilder&&e.appStateInBuilder.theme||i.Immutable({})}},t}(r.BaseWidgetSetting);t.default=T},293:function(e,t,n){"use strict";var o=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var s,i=n(0);t.getStyle=function(e){return i.css(s||(s=o(["\n    .widget-setting-link {\n      overflow-y: auto;\n      font-size: 13px;\n      font-weight: lighter;\n      .collapse-label{\n        color: ",";\n      }\n      .font-size-container{\n        width: ",";\n      }\n    }\n\n  "],["\n    .widget-setting-link {\n      overflow-y: auto;\n      font-size: 13px;\n      font-weight: lighter;\n      .collapse-label{\n        color: ",";\n      }\n      .font-size-container{\n        width: ",";\n      }\n    }\n\n  "])),e.colors.palette.dark[400],i.polished.rem(82))}},294:function(e,t,n){"use strict";var o,s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),p=n(3),a=n(1),u=n(295),l=n(296),c=n(297),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onTextChange=function(e){var n=t.getStyleFromCustomAndTheme().set("text",e);t.props.onChange(n)},t.onIconChange=function(e){var n=t.getStyleFromCustomAndTheme().set("iconProps",e);t.props.onChange(n)},t.onCommonChange=function(e){var n=t.getStyleFromCustomAndTheme(),o=i(i({},n),e);t.props.onChange(r.Immutable(o))},t.getStyleFromCustomAndTheme=function(){var e=t.props.themeStyle||r.Immutable({}),n=t.props.style||r.Immutable({});return e.merge(n)},t}return s(t,e),t.prototype.render=function(){var e=this.getStyleFromCustomAndTheme();return r.jsx("div",{className:"advance-style-setting mt-3"},this.props.isTextSettingOpen&&r.jsx("div",{className:"mb-3"},r.jsx(p.SettingRow,{label:this.props.intl.formatMessage({id:"text",defaultMessage:a.defaultMessages.text})}),r.jsx(p.SettingRow,null,r.jsx(c.default,{appTheme:this.props.appTheme,text:e.text,onChange:this.onTextChange}))),this.props.isIconSettingOpen&&r.jsx("div",{className:"mb-3"},r.jsx(p.SettingRow,{label:this.props.intl.formatMessage({id:"icon",defaultMessage:r.defaultMessages.icon})}),r.jsx(p.SettingRow,null,r.jsx(l.default,{appTheme:this.props.appTheme,intl:this.props.intl,iconProps:e.iconProps,onChange:this.onIconChange}))),r.jsx("div",{className:"mb-3"},r.jsx(u.default,{intl:this.props.intl,style:e,onChange:this.onCommonChange})))},t}(r.React.PureComponent);t.default=g},295:function(e,t,n){"use strict";var o,s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(3),p=n(1),a=n(7),u=[p.BorderSides.TL,p.BorderSides.TR,p.BorderSides.BR,p.BorderSides.BL],l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onBackgroundStyleChange=function(e){var n,o,s=i.Immutable(null!==(o=null===(n=t.props.style)||void 0===n?void 0:n.background)&&void 0!==o?o:{});for(var r in e)switch(r){case"fillType":s.fillType!==e[r]&&(s=s.set("fillType",e[r]));break;case"color":s=s.set("color",e[r]);break;case"image":s=s.set("image",e[r])}t.props.onChange(t.getStyleSettings().set("background",s))},t.updateBorder=function(e){t.props.onChange(t.getStyleSettings().set("border",e))},t.updateRadius=function(e){t.props.onChange(t.getStyleSettings().set("borderRadius",e))},t.updateShadow=function(e){t.props.onChange(t.getStyleSettings().set("boxShadow",e))},t}return s(t,e),t.prototype.getStyleSettings=function(){return this.props.style?i.Immutable(this.props.style):i.Immutable({})},t.prototype.render=function(){var e=this.props.style||i.Immutable({});return i.jsx("div",{className:"common-style-setting"},i.jsx("div",{className:"mb-3"},i.jsx(r.SettingRow,{label:this.props.intl.formatMessage({id:"background",defaultMessage:p.defaultMessages.background})}),i.jsx(r.SettingRow,null,i.jsx(a.BackgroundSetting,{background:e.background,onChange:this.onBackgroundStyleChange}))),i.jsx("div",{className:"mb-3"},i.jsx(r.SettingRow,{label:this.props.intl.formatMessage({id:"border",defaultMessage:p.defaultMessages.border})}),i.jsx(r.SettingRow,null,i.jsx(a.BorderSetting,{value:e.border,onChange:this.updateBorder})),i.jsx(r.SettingRow,{label:this.props.intl.formatMessage({id:"corner",defaultMessage:p.defaultMessages.corner}),flow:"wrap"},i.jsx(a.FourSides,{sides:u,value:e.borderRadius,onChange:this.updateRadius}))),i.jsx("div",{className:"mb-3"},i.jsx(r.SettingRow,{label:this.props.intl.formatMessage({id:"shadow",defaultMessage:p.defaultMessages.shadow})}),i.jsx(r.SettingRow,null,i.jsx(a.BoxShadowSetting,{value:e.boxShadow,onChange:this.updateShadow}))))},t}(i.React.PureComponent);t.default=l},296:function(e,t,n){"use strict";var o,s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(1),p=n(7),a=n(11),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.units=[r.UnitTypes.PIXEL],t.onSizeChange=function(e){t.changeIcon("size",e.distance)},t.onColorChange=function(e){t.changeIcon("color",e)},t.changeIcon=function(e,n){var o,s=t.props.iconProps?t.props.iconProps.set(e,n):i.Immutable(((o={})[e]=n,o));t.props.onChange(s)},t}return s(t,e),t.prototype.render=function(){var e=this.props.iconProps||{};return i.jsx("div",{className:"w-100 d-flex justify-content-between icon-size-font-style-setting"},i.jsx("div",null,i.jsx(p.InputUnit,{units:this.units,value:{distance:e.size,unit:r.UnitTypes.PIXEL},onChange:this.onSizeChange})),i.jsx("div",null,i.jsx(a.ThemeColorPicker,{specificTheme:this.props.appTheme,value:e.color,onChange:this.onColorChange})))},t}(i.React.PureComponent);t.default=u},297:function(e,t,n){"use strict";var o,s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),p=n(7),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.changeText=function(e,n){var o,s=t.props.text?t.props.text.set(e,n):r.Immutable(((o={})[e]=n,o));t.props.onChange(s)},t}return s(t,e),t.prototype.render=function(){return r.jsx(p.TextStyle,i({},this.props.text,{onChange:this.changeText}))},t}(r.React.PureComponent);t.default=a},298:function(e,t,n){"use strict";var o,s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(1),p=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t.prototype.render=function(){return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{onClick:this.props.toggle,className:"d-flex justify-content-between mb-2"},i.React.createElement("div",null,i.React.createElement(r.Label,{for:"open-collapse",className:"collapse-label"},this.props.title)),i.React.createElement("div",null,i.React.createElement(r.Switch,{id:"open-collapse",name:"open-collapse",onChange:this.props.toggle,checked:this.props.isOpen}))),i.React.createElement(r.Collapse,{isOpen:this.props.isOpen},this.props.children))},t}(i.React.PureComponent);t.default=p},3:function(e,t){e.exports=n},38:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M7.42 8.84a.502.502 0 010 .71L6 10.97A3.515 3.515 0 111.03 6l1.42-1.42a.502.502 0 11.71.71L1.74 6.71a2.51 2.51 0 103.55 3.55l1.42-1.42a.502.502 0 01.71 0zm1.42-2.13l1.42-1.42a2.51 2.51 0 10-3.55-3.55L5.29 3.16a.502.502 0 11-.71-.71L6 1.03A3.515 3.515 0 1110.97 6L9.55 7.42a.502.502 0 11-.71-.71zm-4.97.71l3.55-3.55a.502.502 0 01.71.71L4.58 8.13a.502.502 0 01-.71-.71z" fill="#000" fill-rule="nonzero"></path></svg>'},5:function(e,t){e.exports=o},6:function(e,t){e.exports=s},7:function(e,t){e.exports=i},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Left="LEFT",e.Right="RIGHT"}(t.IconPosition||(t.IconPosition={}))},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=n(1);t.getIconPropsFromTheme=function(e,t,n){var i=e?"default":"hover",r=o.Immutable(n),p=r.getIn(["components","button","variants",t,i,"color"]),a=r.getIn(["components","button","sizes","default","fontSize"]);return{color:p,size:parseFloat(s.styleUtils.remToPixel(a))}}}})}));