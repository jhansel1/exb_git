define(["jimu-core","jimu-ui"],(function(e,t){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=357)}({0:function(t,o){t.exports=e},1:function(e,o){e.exports=t},357:function(e,t,o){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var o,r,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){a.label=i[1];break}if(6===i[0]&&a.label<n[1]){a.label=n[1],n=i;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(i);break}n[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),l=o(1),c=o(68),u=o(358),p=o(359),d=function(e){function t(t){var o=e.call(this,t)||this;o.iframeOnLoad=function(e){o.setState({isResetting:!1})},o.processUrl=function(e){var t;if(!e)return e;var r,n=e.toLowerCase();if(/https:\/\/vimeo\.com\/.*/.test(n))return"https://player.vimeo.com/video/"+(r=(e=s.urlUtils.removeSearchFromUrl(e)).split("/"))[r.length-1];if(/https:\/\/www\.youtube\.com\/watch\?.*v=.*/.test(n)){var i=null===(t=s.queryString.parseUrl(e))||void 0===t?void 0:t.query;return"https://www.youtube.com/embed/"+(null==i?void 0:i.v)}return/https:\/\/youtu\.be\/.*/.test(n)?"https://www.youtube.com/embed/"+(r=(e=s.urlUtils.removeSearchFromUrl(e)).split("/"))[r.length-1]:/https:\/\/www\.facebook\.com\/.*\/videos\/.*/.test(n)?"https://www.facebook.com/plugins/video.php?href="+n+"&show_text=0":e=o.checkURLFormat(e)?s.urlUtils.appendQueryParam(e,"rand_"+(new Date).getTime(),""+(new Date).getTime()):"about:blank"},o.checkURLFormat=function(e){if(!e||""===e)return!1;if(!new RegExp("^(([h][t]{2}[p][s])?://)").test(e))return!1;var t=e.indexOf(".");return!(t<0||t===e.length-1)},o.formatMessage=function(e){return o.props.intl.formatMessage({id:e,defaultMessage:u.default[e]})},o.fetchUrl=function(e){return i(o,void 0,Promise,(function(){var t,o;return a(this,(function(r){switch(r.label){case 0:return[4,fetch(e,{method:"get",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/json"}}).catch((function(e){}))];case 1:return(t=r.sent())?[4,t.json().catch((function(e){}))]:[2,Promise.resolve(null)];case 2:return o=r.sent(),[2,Promise.resolve(o)]}}))}))},o.isUsedDataSource=function(e){e||(e=o.props);var t=e.useDataSources;return e.useDataSourcesEnabled&&t&&t.length>0},o.onUrlExpResolveChange=function(e){(null==e?void 0:e.isSuccessful)?o.setState({content:e.value,resolveErr:!1}):o.setState({resolveErr:!0})},o.getRecordsFromRepeatedDataSource=function(){var e,t=o.props.useDataSources&&o.props.useDataSources[0]&&o.props.useDataSources[0].dataSourceId;if(t&&o.props.repeatedDataSource&&t===o.props.repeatedDataSource.dataSourceId){var r=o.props.repeatedDataSource.record;return(e={})[t]=r,e}return null},o.onResize=function(e,t){if(o.size){var r=o.size,n=r.width,i=r.height;(n<1||i<1)&&e>1&&t>1&&o.needReload&&(o.reload(),o.needReload=!1)}o.size={width:e,height:t}},o.reload=function(){var e=o.props.config;if(o.ifr)if(e.embedType===c.EmbedType.Code){var t=o.ifr.srcdoc;o.ifr.srcdoc=t}else{var r=o.ifr.src;o.ifr.src=r}},o.loadContent=function(){var e=o.props.config,t=o.state.content,r=e.embedType;o.ifr&&(r===c.EmbedType.Code?o.ifr.srcdoc=t:o.ifr.src=o.processUrl(t))};var r=t.config,n=r.embedType,l=r.embedCode;o.errMessages={unSupportUrl:o.formatMessage("unSupportUrl"),unSupportIframeUrl:o.formatMessage("unSupportIframeUrl")},o.checkUrl=o.checkUrl.bind(o);var p={content:n===c.EmbedType.Url?o.isUsedDataSource()?void 0:r.staticUrl:l,loadErr:!1,resolveErr:!1};return o.state=p,o}return n(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.config,o=this.state.content;o&&o.trim().length>0&&this.setState({isResetting:!0},(function(){e.loadContent(),t.embedType===c.EmbedType.Url&&e.checkUrl(e.processUrl(o))}))},t.prototype.componentDidUpdate=function(e,t){var o=this,r=this.props.appMode;r!==e.appMode&&r===s.AppMode.Design&&this.reload();var n=this.props.config,i=n.embedCode,a=n.embedType,l=n.staticUrl;if(a!==e.config.embedType){var u=a===c.EmbedType.Url?this.isUsedDataSource()?void 0:l:i;this.setState({content:u})}else if(a===c.EmbedType.Url){var p=this.isUsedDataSource(),d=this.isUsedDataSource(e);if(!p||p!==d){var f=p?void 0:l;this.setState({content:f})}}else e.config.embedCode!==i&&this.setState({content:i});var h=this.state.content,m=t.content;h!==m&&this.setState({isResetting:!!h,loadErr:!1},(function(){if(o.loadContent(),a===c.EmbedType.Url&&(o.checkUrl(o.processUrl(h)),o.size)){var e=o.size,t=e.width,r=e.height;(t<1||r<1)&&(o.needReload=!0)}}))},t.prototype.checkUrl=function(e){var t,o,r,n=this;if(this.checkURLFormat(e)){var i=null===(r=null===(o=null===(t=s.getAppStore())||void 0===t?void 0:t.getState())||void 0===o?void 0:o.appRuntimeInfo)||void 0===r?void 0:r.appMode;e&&window.jimuConfig.isInBuilder&&i!==s.AppMode.Run&&!window.jimuConfig.isInPortal&&(e.indexOf("https://www.facebook.com/plugins/video.php?show_text=0&href=")>-1||e.indexOf("https://www.youtube.com/embed/")>-1||e.indexOf("https://player.vimeo.com/video/")>-1?this.setState({loadErr:!1}):this.fetchUrl(window.location.origin+"/check_url?url="+e).then((function(t){var o,r,i,a=!0;if(t&&t.success){var s=t.data,l=null==s?void 0:s.status;if(l&&l<400){(null===(o=null==s?void 0:s.headers)||void 0===o?void 0:o["content-security-policy"])&&(a=!1);var c=null===(i=null===(r=null==s?void 0:s.headers)||void 0===r?void 0:r["x-frame-options"])||void 0===i?void 0:i.toLowerCase();c&&("deny"===c?a=!1:"sameorigin"===c&&(n.isOriginSameAsLocation(e)||(a=!1)))}else a=!1}else a=!1;var u={loadErr:!a};a||(u.isResetting=!1,u.errMessage=n.errMessages.unSupportIframeUrl),n.setState(u)})))}else this.setState({loadErr:!0,errMessage:this.errMessages.unSupportUrl})},t.prototype.isOriginSameAsLocation=function(e){var t=window.location,o=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(e)||[],r={protocol:o[1]||"",host:o[2]||"",port:o[3]||""},n=function(e){return e.port||{"http:":80,"https:":443}[e.protocol||t.protocol]};return!!(r.protocol&&r.protocol==t.protocol&&r.host&&r.host==t.host&&r.host&&n(r)==n(t))},t.prototype.render=function(){var e=this,t=this.state,r=t.isResetting,n=t.loadErr,i=t.errMessage,a=t.resolveErr,u=this.props,p=u.theme,d=u.id,f=u.config,h=f.embedCode,m=f.embedType,v=f.staticUrl,b=f.expression,g=this.props.useDataSourcesEnabled;return(m===c.EmbedType.Code?!h:!v&&!g||g&&!b)?s.React.createElement(l.WidgetPlaceholder,{widgetId:this.props.id,icon:o(360),message:this.formatMessage("embedHint")}):s.React.createElement("div",{style:{width:"100%",height:"100%",position:"relative"},className:"jimu-widget widget-embed"},s.React.createElement("iframe",{className:"iframe-"+d,style:{width:"100%",height:"100%"},sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-popups-to-escape-sandbox",allowFullScreen:!0,onLoad:this.iframeOnLoad,frameBorder:"0",ref:function(t){e.ifr=t}}),r&&s.React.createElement("div",{className:"jimu-secondary-loading"}),n&&s.React.createElement("div",{className:"mask text-center",style:{position:"absolute",left:0,right:0,top:0,bottom:0,paddingTop:"30%",backgroundColor:p.colors.white}},i),a&&g&&s.React.createElement("div",{className:"mask text-center",style:{position:"absolute",left:0,right:0,top:0,bottom:0,paddingTop:"30%",backgroundColor:p.colors.white}},null==b?void 0:b.name),s.React.createElement("div",{style:{display:"none"}},g&&m===c.EmbedType.Url&&b&&s.React.createElement("div",null,s.React.createElement(s.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:b,onChange:this.onUrlExpResolveChange,widgetId:this.props.id}))),s.React.createElement(s.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}))},t.versionManager=p.versionManager,t.mapExtraStateProps=function(e,t){var o;return{appMode:null===(o=null==e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.appMode}},t}(s.BaseWidget);t.default=d},358:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={_widgetLabel:"Embed",embedHint:"Embed by URL or code",unSupportUrl:"It's not a valid URL.",unSupportIframeUrl:"Sorry, this content could not be embedded. It may restrict the embedding of content from other sites."}},359:function(e,t,o){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(68),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.versions=[{version:"1.0.0",description:"The first release.",upgrader:function(e){var t,o,r=null===(t=null==e?void 0:e.functionConfig)||void 0===t?void 0:t.embedType,n=null===(o=null==e?void 0:e.functionConfig)||void 0===o?void 0:o.content;return r?(e=e.set("embedType",r),e=r===a.EmbedType.Url?e.set("staticUrl",n):e.set("embedCode",n)):e=e.set("embedType",a.EmbedType.Url),e=e.without("functionConfig")}}],t}return n(t,e),t}(i.BaseVersionManager);t.versionManager=new s},360:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H2zm0-1h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM1 4h14v1H1V4zm1.5-1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-.646 9.646a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.207 10l2.647 2.646zm4.292 0L12.793 10l-2.647-2.646a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708zM8.982 6.62a.5.5 0 01.354.613l-1.553 5.795a.5.5 0 11-.966-.259L8.37 6.973a.5.5 0 01.612-.354z" fill="#000" fill-rule="nonzero"></path></svg>'},68:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Url="url",e.Code="code"}(t.EmbedType||(t.EmbedType={}))}})}));