System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/resource-selector","jimu-ui/basic/sql-expression-runtime","jimu-ui/advanced/sql-expression-builder"],(function(e){var t,i,n,I,g,a,s;return{setters:[function(e){t=e},function(e){i=e},function(e){n=e},function(e){I=e},function(e){g=e},function(e){a=e},function(e){s=e}],execute:function(){e(function(e){var t={};function i(n){if(t[n])return t[n].exports;var I=t[n]={i:n,l:!1,exports:{}};return e[n].call(I.exports,I,I.exports,i),I.l=!0,I.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var I in e)i.d(n,I,function(t){return e[t]}.bind(null,I));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=389)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},11:function(e,t){e.exports=I},2:function(e,t){e.exports=n},221:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16zm-.5-4.5v-5H7a.5.5 0 010-1h1.5v6H9a.5.5 0 010 1H7a.5.5 0 010-1h.5zm.5-7a.5.5 0 110-1 .5.5 0 010 1z" fill="#000" fill-rule="nonzero"></path></svg>'},222:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDY4IDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfaW5saW5lX3ZlcnRpY2FsPC90aXRsZT4NCiAgICA8ZyBpZD0iRmlsdGVyX3YzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IlN0eWxlU2V0dGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOTYuMDAwMDAwLCAtMzM2LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyBpZD0idGh1bWJuYWlsL3N0eWxlL2lubGluZS92ZXJ0aWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE5Ni4wMDAwMDAsIDMzNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8Zz4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI4MjgyOCIgeD0iNCIgeT0iNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHkiIGZpbGw9IiMzNjM2MzYiIHg9IjgiIHk9IjUyIiB3aWR0aD0iNTIiIGhlaWdodD0iOCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTMyIiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNTIiIGhlaWdodD0iMTkiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMTgiIGZpbGw9IiM1MjUyNTIiIHg9IjMiIHk9IjgiIHdpZHRoPSI0NiIgaGVpZ2h0PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMjUiIGZpbGw9IiM1MjUyNTIiIHg9IjMiIHk9IjEzIiB3aWR0aD0iMzUiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS1Db3B5LTIzIiBmaWxsPSIjNkE2QTZBIiBwb2ludHM9IjIgMyA2IDMgNCA1Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTMzIiBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSI0MSIgd2lkdGg9IjUyIiBoZWlnaHQ9IjgiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0zNCIgZmlsbD0iIzM2MzYzNiIgeD0iOCIgeT0iMzAiIHdpZHRoPSI1MiIgaGVpZ2h0PSI4IiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLUNvcHktMjIiIGZpbGw9IiM2QTZBNkEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNDUuMDAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC00NS4wMDAwMDApICIgcG9pbnRzPSIxMCA0NCAxNCA0NCAxMiA0NiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},223:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNzBweCIgdmlld0JveD0iMCAwIDcwIDcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfaW5saW5lX2hvcml6b250YWw8L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3NS4wMDAwMDAsIC0zMzUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJ0aHVtYm5haWwvc3R5bGUvaW5saW5lL2hvcml6b250YWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzUuMDAwMDAwLCAzMzUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMyODI4MjgiIHg9IjUiIHk9IjUiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTE2IiBmaWxsPSIjNkE2QTZBIiB4PSI5IiB5PSI5IiB3aWR0aD0iMTUiIGhlaWdodD0iOCIgcng9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIwIiBmaWxsPSIjNTI1MjUyIiB4PSIyNiIgeT0iOSIgd2lkdGg9IjE5IiBoZWlnaHQ9IjgiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNywxOSBMMTksMjEuMTI3NjU5NiBMNTIsMjEuMTI3NjU5NiBDNTIuNTUyMjg0NywyMS4xMjc2NTk2IDUzLDIxLjU3NTM3NDggNTMsMjIuMTI3NjU5NiBMNTMsNDIuMTI3NjU5NiBDNTMsNDIuNjc5OTQ0MyA1Mi41NTIyODQ3LDQzLjEyNzY1OTYgNTIsNDMuMTI3NjU5NiBMMTAsNDMuMTI3NjU5NiBDOS40NDc3MTUyNSw0My4xMjc2NTk2IDksNDIuNjc5OTQ0MyA5LDQyLjEyNzY1OTYgTDksMjIuMTI3NjU5NiBDOSwyMS41NzUzNzQ4IDkuNDQ3NzE1MjUsMjEuMTI3NjU5NiAxMCwyMS4xMjc2NTk2IEwxNSwyMS4xMjc2NTk2IEwxNywxOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgZmlsbD0iIzM2MzYzNiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMjciIGZpbGw9IiM1MjUyNTIiIHg9IjEzIiB5PSIyNSIgd2lkdGg9IjM2IiBoZWlnaHQ9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTI4IiBmaWxsPSIjNTI1MjUyIiB4PSIxMyIgeT0iMzEiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yOSIgZmlsbD0iIzUyNTI1MiIgeD0iMTMiIHk9IjM3IiB3aWR0aD0iMjciIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMjEiIGZpbGw9IiM2QTZBNkEiIHg9IjQ3IiB5PSI5IiB3aWR0aD0iMTQiIGhlaWdodD0iOCIgcng9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},224:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDY4IDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfcG9wdXA8L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1Ni4wMDAwMDAsIC0zMzYuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJ0aHVtYm5haWwvc3R5bGUvcG9wdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTYuMDAwMDAwLCAzMzYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxNCBMMTIsMTYgTDYzLDE2IEM2My41NTIyODQ3LDE2IDY0LDE2LjQ0NzcxNTMgNjQsMTcgTDY0LDYzIEM2NCw2My41NTIyODQ3IDYzLjU1MjI4NDcsNjQgNjMsNjQgTDUsNjQgQzQuNDQ3NzE1MjUsNjQgNCw2My41NTIyODQ3IDQsNjMgTDQsMTcgQzQsMTYuNDQ3NzE1MyA0LjQ0NzcxNTI1LDE2IDUsMTYgTDgsMTYgTDEwLDE0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzI4MjgyOCI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSIyMCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjE5IiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLUNvcHktMjMiIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iMTAgMjMgMTQgMjMgMTIgMjUiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIGZpbGw9IiMzNjM2MzYiIHg9IjgiIHk9IjQyIiB3aWR0aD0iNTIiIGhlaWdodD0iOCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTE3IiBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSI1MyIgd2lkdGg9IjUyIiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtQ29weS0yNiIgZmlsbD0iIzZBNkE2QSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCA1Ni4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTU2LjAwMDAwMCkgIiBwb2ludHM9IjEwIDU1IDE0IDU1IDEyIDU3Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0xNiIgZmlsbD0iIzUyNTI1MiIgeD0iMTEiIHk9IjI5IiB3aWR0aD0iNDYiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMTkiIGZpbGw9IiM1MjUyNTIiIHg9IjExIiB5PSIzNCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktMjgiIGZpbGw9IiM2QTZBNkEiIHg9IjYiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},225:function(e,t,i){var n={"./trigger_button.svg":226,"./trigger_toggle.svg":227};function I(e){var t=g(e);return i(t)}function g(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}I.keys=function(){return Object.keys(n)},I.resolve=g,e.exports=I,I.id=225},226:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDY4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfbWV0aG9kc19idXR0b248L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3Ni4wMDAwMDAsIC00ODQuMDAwMDAwKSIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJTZXR0aW5nUGFuZWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODAuMDAwMDAwLCAzNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0idGh1bWJuYWlsL21ldGhvZHMvYnV0dG9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ni4wMDAwMDAsIDQ0OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlRpdGxlLUNvcHktMzIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNCIgeT0iNSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQiIHk9IjEzIiB3aWR0aD0iNjAiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNCIgeT0iMjEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSI0IiB5PSIyOSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ0IiB5PSIzNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHJ4PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},227:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDcwIDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfbWV0aG9kc190b2dnbGU8L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5NS4wMDAwMDAsIC00ODMuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iU2V0dGluZ1BhbmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwLjAwMDAwMCwgMzYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9InRodW1ibmFpbC9tZXRob2RzL3RvZ2dsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCA0NDcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzLjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGl0bGUtQ29weS0zNCIgZmlsbD0iIzZBNkE2QSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIHJ4PSIzIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktMzQiIGZpbGw9IiMxODE4MTgiIHg9IjciIHk9IjEiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGl0bGUtQ29weS0zMiIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI1IiB5PSI2IiB3aWR0aD0iNDIiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktNDgiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNSIgeT0iMTQiIHdpZHRoPSI0MiIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGl0bGUtQ29weS00OSIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI1IiB5PSIyMiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJUaXRsZS1Db3B5LTUwIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjUiIHk9IjMwIiB3aWR0aD0iNDIiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktNTEiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNSIgeT0iMzgiIHdpZHRoPSIzMSIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},26:function(e,t,i){"use strict";var n,I;i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return I})),function(e){e.Block="BLOCK",e.Inline="INLINE",e.Popper="POPPER"}(n||(n={})),function(e){e.Toggle="TOGGLE",e.Button="BUTTON"}(I||(I={}))},31:function(e,t){e.exports=g},37:function(e,t){e.exports=a},389:function(e,t,i){"use strict";i.r(t);var n,I,g=i(0),a=i(2),s=i(1),o=i(11),l=i(46),r={start:"Start",selectTemplateTip:"Select a template",selectAnotherTemplateTip:"Select another template",filtersDesc:"Add new filters and customize options.",newFilter:"New filter",setFilterItem:"Create new filter",sqlExpr:"SQL Expressions",sqlExprDesc:"Add SQL expressions to your filter.",openFilterBuilder:"SQL Expression Builder",setExprTips:"Please add your SQL expressions first.",options:"Options",autoApplyWhenWidgetOpen:"Apply this filter automatically",collapseFilterExprs:"Collapse filter details (if any) automatically",arrangeAndStyle:"Arrangement style",activationMethods:"Activation style",toggleTooltip:"Toggle switch",buttonTooltip:"Button",omitInternalStyle:"Exclude activation styles for single clause",omitInternalStyleTip:"If there is only one clause asking for values (or displaying label) in each filter, this option allows you to exclude the activation styles (along with the label and the icon), display the clause content directly and auto-apply it.",wrapFilters:"Wrap items"},c=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};var C,A=i(31),p=(C=function(e,t){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),d=i(91),u=function(e){function t(t){var i=e.call(this,t)||this;return i.dsManager=(window&&window.jimuConfig&&window.jimuConfig.isBuilder,g.DataSourceManager.getInstance()),i.supportedDsTypes=Object(g.Immutable)([o.AllDataSourceTypes.FeatureLayer,o.AllDataSourceTypes.SceneLayer]),i.showSqlExprPopup=function(){i.setState({isSqlExprShow:!0})},i.toggleSqlExprPopup=function(){i.setState({isSqlExprShow:!i.state.isSqlExprShow})},i.nameChange=function(e){if(e&&e.target&&e.target.value){var t=e.target.value.trim();i.props.optionChange("name",t)}},i.i18nMessage=function(e,t){return t=t||r,i.props.intl.formatMessage({id:e,defaultMessage:t[e]})},i.toggleAdvance=function(){i.setState({showAdvance:!i.state.showAdvance})},i.state={isSqlExprShow:!1,showAdvance:!1},i}return p(t,e),t.prototype.componentDidUpdate=function(e,t){e.collapseFilterExprs,this.props.collapseFilterExprs},t.prototype.render=function(){var e,t=this,i=this.props,I=i.useDataSource,r=i.sqlExprObj,C=!I||!I.dataSourceId;return Object(g.jsx)("div",{className:"w-100 h-100",css:(e=this.props.theme,Object(g.css)(n||(n=c(["\n    .filter-item-panel{\n      .setting-header {\n        padding: "," "," "," ","\n      }\n\n      .setting-title {\n        font-size: ",";\n        .filter-item-label{\n          color: ",";\n        }\n      }\n\n      .setting-container {\n        height: calc(100% - ",");\n        overflow: auto;\n\n        .title-desc{\n          color: ",";\n        }\n\n\n      }\n    }\n  "],["\n    .filter-item-panel{\n      .setting-header {\n        padding: "," "," "," ","\n      }\n\n      .setting-title {\n        font-size: ",";\n        .filter-item-label{\n          color: ",";\n        }\n      }\n\n      .setting-container {\n        height: calc(100% - ",");\n        overflow: auto;\n\n        .title-desc{\n          color: ",";\n        }\n\n\n      }\n    }\n  "])),g.polished.rem(10),g.polished.rem(16),g.polished.rem(0),g.polished.rem(16),g.polished.rem(16),e.colors.palette.dark[600],g.polished.rem(50),e.colors.palette.dark[200]))},Object(g.jsx)("div",{className:"w-100 h-100 filter-item-panel"},Object(g.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-between setting-header setting-title pb-2"},Object(g.jsx)("h5",{className:"text-truncate filter-item-label mt-2"},this.i18nMessage("setFilterItem")),Object(g.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",className:"ml-2",onClick:this.props.onClose},Object(g.jsx)(s.Icon,{icon:d,size:"16"}))),Object(g.jsx)("div",{className:"setting-container"},Object(g.jsx)(a.SettingSection,{title:this.i18nMessage("data")},Object(g.jsx)(a.SettingRow,null,Object(g.jsx)(o.DataSourceSelector,{types:this.supportedDsTypes,disableRemove:function(){return!0},useDataSources:I?Object(g.Immutable)([I]):Object(g.Immutable)([]),mustUseDataSource:!0,onChange:this.props.dataSourceChange,closeDataSourceListOnChange:!0}))),Object(g.jsx)(a.SettingSection,{title:this.i18nMessage("label",s.defaultMessages)},Object(g.jsx)(a.SettingRow,null,Object(g.jsx)(s.TextInput,{type:"text",className:"w-100",value:this.props.name?this.props.name:"",onChange:this.nameChange}))),Object(g.jsx)(a.SettingSection,{title:Object(g.jsx)("div",{className:"w-100 d-flex justify-content-between"},Object(g.jsx)("span",{className:"pt-1 mr-2 line-height-1 text-truncate"},this.props.intl.formatMessage({id:"icon",defaultMessage:g.defaultMessages.icon})),Object(g.jsx)(A.IconPicker,{buttonOptions:{type:"default",size:"sm"},icon:this.props.icon?this.props.icon:null,onChange:function(e){return t.props.optionChange("icon",e)},configurableOption:"none"}))}),Object(g.jsx)(a.SettingSection,{title:this.i18nMessage("sqlExpr")},Object(g.jsx)(a.SettingRow,{label:this.i18nMessage("sqlExprDesc")}),Object(g.jsx)(a.SettingRow,null,Object(g.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},Object(g.jsx)(s.Button,{className:"w-100 text-dark set-link-btn",type:C?"secondary":"primary",disabled:C,onClick:this.showSqlExprPopup,title:this.i18nMessage("openFilterBuilder")},Object(g.jsx)("div",{className:"w-100 px-2 text-truncate"},this.i18nMessage("openFilterBuilder"))))),Object(g.jsx)(a.SettingRow,null,Object(g.jsx)(s.TextInput,{type:"textarea",style:{height:"80px"},className:"w-100",spellCheck:!1,placeholder:this.i18nMessage("setExprTips"),value:r&&r.displaySQL?r.displaySQL:"",onClick:function(e){return e.currentTarget.select()},readOnly:!0}))),Object(g.jsx)(a.SettingSection,{title:this.i18nMessage("options"),className:"border-0"},Object(g.jsx)(a.SettingRow,{label:this.i18nMessage("autoApplyWhenWidgetOpen")},Object(g.jsx)(s.Switch,{checked:this.props.autoApplyWhenWidgetOpen,onChange:function(){return t.props.optionChange("autoApplyWhenWidgetOpen",!t.props.autoApplyWhenWidgetOpen)}})),Object(g.jsx)(a.SettingRow,{label:this.i18nMessage("collapseFilterExprs")},Object(g.jsx)(s.Switch,{checked:this.props.collapseFilterExprs,onChange:function(){return t.props.optionChange("collapseFilterExprs",!t.props.collapseFilterExprs)}}))),!C&&Object(g.jsx)(g.DataSourceComponent,{useDataSource:I},(function(e){if(r){var i=g.dataSourceUtils.getArcGISSQL(r,e);i.displaySQL!==r.displaySQL&&t.props.onSqlExprBuilderChange(Object.assign({},r,i))}return Object(g.jsx)(l.SqlExpressionBuilderPopup,{dataSource:e,isOpen:t.state.isSqlExprShow,toggle:t.toggleSqlExprPopup,expression:r,onChange:t.props.onSqlExprBuilderChange})})))))},t}(g.React.PureComponent),m=i(26),j=i(37),b=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),x=function(){return(x=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var I in t=arguments[i])Object.prototype.hasOwnProperty.call(t,I)&&(e[I]=t[I]);return e}).apply(this,arguments)},D=i(71),M=i(69),w=i(92),h=i(221),S=Object(g.Immutable)({svg:w,properties:{color:"",filename:"filter-16.svg",originalName:"filter-16.svg",inlineSvg:!0,path:["general","filter"],size:14}}),y=function(e){function t(t){var i=e.call(this,t)||this;return i.i18nMessage=function(e,t){return t=t||r,i.props.intl.formatMessage({id:e,defaultMessage:t[e]})},i.onShowFilterItemPanel=function(e){e===i.index?i.setState({showFilterItemPanel:!i.state.showFilterItemPanel}):(i.setState({showFilterItemPanel:!0}),i.setState({refreshFilterItemPanel:!i.state.refreshFilterItemPanel}),i.index=e)},i.onCloseFilterItemPanel=function(){i.setState({showFilterItemPanel:!1}),i.index=0},i.updateConfigForOptions=function(e,t){var n={id:i.props.id,config:i.props.config.set(e,t)};i.props.onSettingChange(n)},i.removeFilterItem=function(e){i.index===e&&i.onCloseFilterItemPanel();var t=i.props.config.filterItems.asMutable({deep:!0});t.splice(e,1);var n=i.props.config.set("filterItems",t),I={id:i.props.id,config:n,useDataSources:i.getUseDataSourcesByDsHash(t)};i.props.onSettingChange(I),i.index>e&&i.index--},i.optionChangeForFI=function(e,t){if(i.props.config.filterItems[i.index]){var n=i.props.config.filterItems.asMutable({deep:!0}),I=Object(g.Immutable)(n[i.index]).set(e,t);n.splice(i.index,1,I.asMutable({deep:!0}));var a={id:i.props.id,config:i.props.config.set("filterItems",n)};i.props.onSettingChange(a)}},i.dataSourceChangeForFI=function(e){if(e){var t=Object(g.Immutable)(e[0]);i.dsManager.createDataSourceByUseDataSource(Object(g.Immutable)(e[0])).then((function(e){var n,I={icon:S,name:e.getLabel(),useDataSource:t,sqlExprObj:null,autoApplyWhenWidgetOpen:!1,collapseFilterExprs:!1};if(i.props.config.filterItems[i.index]){var a=i.props.config.filterItems.asMutable({deep:!0});a.splice(i.index,1,I),n=Object(g.Immutable)(a)}else n=i.props.config.filterItems.concat(Object(g.Immutable)([Object(g.Immutable)(I)]));var s={id:i.props.id,config:i.props.config.set("filterItems",n),useDataSources:i.getUseDataSourcesByDsHash(n)};i.props.onSettingChange(s)}))}},i.sqlExprBuilderChange=function(e){var t,n=[];(null===(t=null==e?void 0:e.parts)||void 0===t?void 0:t.length)>0?n=Object(j.getJimuFieldNamesBySqlExpression)(e):e=null;var I=i.props.config.filterItems[i.index].useDataSource,a={dataSourceId:I.dataSourceId,mainDataSourceId:I.mainDataSourceId,dataViewId:I.dataViewId,rootDataSourceId:I.rootDataSourceId,fields:n},s=i.props.config.filterItems.asMutable({deep:!0}),o=Object.assign({},s[i.index],{sqlExprObj:e,useDataSource:a});s.splice(i.index,1,o);var l={id:i.props.id,config:i.props.config.set("filterItems",Object(g.Immutable)(s)),useDataSources:i.getUseDataSourcesByDsHash(s)};i.props.onSettingChange(l)},i.getUniqueValues=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.concat(t).filter((function(e,t,i){return i.indexOf(e)===t}))},i.getUseDataSourcesByDsHash=function(e){var t=[];return e.map((function(e){t.push(e.useDataSource)})),t},i.getDataSourceById=function(e,t){var i=e.filter((function(e){return e.dataSourceId===t}));return Object(g.Immutable)(i[0])},i.changeAndOR=function(e){i.updateConfigForOptions("logicalOperator",e)},i.changeUseWrap=function(e){i.updateConfigForOptions("wrap",e)},i.changeArrangeType=function(e){e!==i.props.config.arrangeType&&i.updateConfigForOptions("arrangeType",e)},i.changeTriggerType=function(e){i.updateConfigForOptions("triggerType",e)},i.changeOmitInternalStyle=function(e){i.updateConfigForOptions("omitInternalStyle",e)},i.index=0,i.dsManager=g.DataSourceManager.getInstance(),i.state={showFilterItemPanel:!1,refreshFilterItemPanel:!1},i}return b(t,e),t.prototype.render=function(){var e,t,n=this,o=this.props.config;return Object(g.jsx)("div",{css:(t=this.props.theme,Object(g.css)(I||(I=c(["\n    .widget-setting-filter{\n      .filter-items-desc{\n        color: ",";\n      }\n      .and-or-group .max-width-50{\n        max-width: 50%;\n      }\n      .filter-item {\n        display: flex;\n        padding: 0.5rem 0.75rem;\n        margin-bottom: 0.25rem;\n        line-height: 23px;\n        cursor: pointer;\n        background-color: ",";\n\n        .filter-item-icon{\n          width: 14px;\n          margin-right: 0.5rem;\n        }\n        .filter-item-name{\n          word-break: break-all;\n        }\n      }\n\n      .filter-item-active {\n        border-left: 2px solid ",";\n      }\n\n      .arrange-style-container{\n\n        .arrange_container, .trigger_container{\n          margin-top: 10px;\n          display: flex;\n          justify-content: space-between;\n          .jimu-btn {\n            padding: 0;\n            background: ",";\n            &.active{\n              border: 1px solid ",";\n            }\n          }\n        }\n        .trigger_container{\n          justify-content: flex-start;\n          .jimu-btn:last-of-type{\n            margin-left: 0.5rem;\n          }\n        }\n\n        .omit-label{\n          color: ",";\n        }\n      }\n\n      .options-container {\n        .use-wrap{\n          .jimu-widget-setting--row-label{\n            margin-right: 5px;\n          }\n        }\n      }\n    }\n  "],["\n    .widget-setting-filter{\n      .filter-items-desc{\n        color: ",";\n      }\n      .and-or-group .max-width-50{\n        max-width: 50%;\n      }\n      .filter-item {\n        display: flex;\n        padding: 0.5rem 0.75rem;\n        margin-bottom: 0.25rem;\n        line-height: 23px;\n        cursor: pointer;\n        background-color: ",";\n\n        .filter-item-icon{\n          width: 14px;\n          margin-right: 0.5rem;\n        }\n        .filter-item-name{\n          word-break: break-all;\n        }\n      }\n\n      .filter-item-active {\n        border-left: 2px solid ",";\n      }\n\n      .arrange-style-container{\n\n        .arrange_container, .trigger_container{\n          margin-top: 10px;\n          display: flex;\n          justify-content: space-between;\n          .jimu-btn {\n            padding: 0;\n            background: ",";\n            &.active{\n              border: 1px solid ",";\n            }\n          }\n        }\n        .trigger_container{\n          justify-content: flex-start;\n          .jimu-btn:last-of-type{\n            margin-left: 0.5rem;\n          }\n        }\n\n        .omit-label{\n          color: ",";\n        }\n      }\n\n      .options-container {\n        .use-wrap{\n          .jimu-widget-setting--row-label{\n            margin-right: 5px;\n          }\n        }\n      }\n    }\n  "])),t.colors.palette.dark[400],t.colors.secondary,t.colors.palette.primary[600],t.colors.palette.light[200],t.colors.palette.primary[600],t.colors.palette.dark[400]))},Object(g.jsx)("div",{className:"jimu-widget-setting widget-setting-filter"},Object(g.jsx)(a.SettingSection,{className:"border-0"},Object(g.jsx)(a.SettingRow,{className:"filter-items-desc"},this.i18nMessage("filtersDesc")),Object(g.jsx)(a.SettingRow,null,Object(g.jsx)(s.Button,{className:"w-100 text-dark set-link-btn",type:"primary",onClick:function(){n.onShowFilterItemPanel(o.filterItems.length)}},Object(g.jsx)("div",{className:"w-100 px-2 text-truncate"},Object(g.jsx)(s.Icon,{icon:M,className:"mr-1",size:14}),this.i18nMessage("newFilter"))))),Object(g.jsx)(a.SettingSection,{className:"pt-0"},o.filterItems.length>1&&Object(g.jsx)(a.SettingRow,null,Object(g.jsx)(s.ButtonGroup,{className:"w-100 and-or-group"},Object(g.jsx)(s.Button,{onClick:function(){n.changeAndOR(g.ClauseLogic.And)},className:"btn-secondary max-width-50",size:"sm",type:o.logicalOperator===g.ClauseLogic.And?"primary":"secondary"},Object(g.jsx)("div",{className:"text-truncate"},this.i18nMessage("and"))),Object(g.jsx)(s.Button,{onClick:function(){n.changeAndOR(g.ClauseLogic.Or)},className:"btn-secondary max-width-50",size:"sm",type:o.logicalOperator===g.ClauseLogic.Or?"primary":"secondary"},Object(g.jsx)("div",{className:"text-truncate"},this.i18nMessage("or"))))),Object(g.jsx)("div",{className:"filter-items-container mt-2"},o.filterItems.asMutable().map((function(e,t){return Object(g.jsx)("div",{key:t,className:Object(g.classNames)("filter-item",n.state.showFilterItemPanel&&n.index===t?"filter-item-active":"")},e.icon&&Object(g.jsx)("div",{className:"filter-item-icon"},Object(g.jsx)(s.Icon,{icon:e.icon.svg,size:14})),Object(g.jsx)("div",{className:"filter-item-name flex-grow-1",onClick:function(){n.onShowFilterItemPanel(t)}},e.name),Object(g.jsx)(s.Button,{size:"sm",icon:!0,onClick:function(){return n.removeFilterItem(t)}},Object(g.jsx)(s.Icon,{icon:D,size:12})))})),o.filterItems.length===this.index&&this.state.showFilterItemPanel?Object(g.jsx)("div",{className:"d-flex pt-2 pb-2 mb-1 filter-item filter-item-active"},Object(g.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",disabled:!0},Object(g.jsx)(s.Icon,{icon:S.svg,size:S.properties.size})),Object(g.jsx)("div",{className:"filter-item-name flex-grow-1"},"......")):null)),o.filterItems.length>0&&Object(g.jsx)(a.SettingSection,{className:"arrange-style-container",title:this.i18nMessage("arrangeAndStyle")},Object(g.jsx)(a.SettingRow,{className:"arrange_container"},Object(g.jsx)(s.Tooltip,{title:this.i18nMessage("vertical",s.defaultMessages),placement:"bottom"},Object(g.jsx)(s.Button,{onClick:function(){return n.changeArrangeType(m.a.Block)},icon:!0,size:"sm",type:"tertiary",active:o.arrangeType===m.a.Block},Object(g.jsx)(s.Icon,{width:68,height:68,icon:i(222),autoFlip:!0}))),Object(g.jsx)(s.Tooltip,{title:this.i18nMessage("horizontal",s.defaultMessages),placement:"bottom"},Object(g.jsx)(s.Button,{onClick:function(){return n.changeArrangeType(m.a.Inline)},icon:!0,size:"sm",type:"tertiary",active:o.arrangeType===m.a.Inline},Object(g.jsx)(s.Icon,{width:68,height:68,icon:i(223),autoFlip:!0}))),Object(g.jsx)(s.Tooltip,{title:this.i18nMessage("icon",g.defaultMessages),placement:"bottom"},Object(g.jsx)(s.Button,{onClick:function(){return n.changeArrangeType(m.a.Popper)},icon:!0,size:"sm",type:"tertiary",active:o.arrangeType===m.a.Popper},Object(g.jsx)(s.Icon,{width:68,height:68,icon:i(224),autoFlip:!0})))),o.arrangeType===m.a.Inline&&Object(g.jsx)(a.SettingRow,{label:this.i18nMessage("wrapFilters")},Object(g.jsx)(s.Switch,{checked:o.wrap,onChange:function(){return n.changeUseWrap(!o.wrap)}})),Object(g.jsx)(a.SettingRow,{label:this.i18nMessage("activationMethods")}),Object(g.jsx)(a.SettingRow,{className:"trigger_container"},[{type:m.b.Toggle,icon:"toggle"},{type:m.b.Button,icon:"button"}].map((function(e,t){return Object(g.jsx)(s.Tooltip,{key:t,title:n.i18nMessage(e.icon+"Tooltip"),placement:"bottom"},Object(g.jsx)(s.Button,{onClick:function(){return n.changeTriggerType(e.type)},icon:!0,size:"sm",type:"tertiary",active:e.type===o.triggerType},Object(g.jsx)(s.Icon,{width:70,height:50,icon:i(225)("./trigger_"+e.icon+".svg"),autoFlip:!0})))}))),Object(g.jsx)(a.SettingRow,null,Object(g.jsx)("div",{className:"w-100 d-flex"},Object(g.jsx)(s.Checkbox,{style:{cursor:"pointer",marginTop:"2px"},onChange:function(){return n.changeOmitInternalStyle(!o.omitInternalStyle)},checked:o.omitInternalStyle}),Object(g.jsx)("div",{className:"m-0 ml-2 flex-grow-1 omit-label"},this.i18nMessage("omitInternalStyle"),Object(g.jsx)(s.Tooltip,{title:this.i18nMessage("omitInternalStyleTip"),showArrow:!0,placement:"left"},Object(g.jsx)("div",{className:"ml-2 d-inline"},Object(g.jsx)(s.Icon,{size:16,icon:h}))))))),Object(g.jsx)(a.SidePopper,{isOpen:this.state.showFilterItemPanel&&!g.urlUtils.getAppIdPageIdFromUrl().pageId,position:"right"},Object(g.jsx)(u,x({},o.filterItems[this.index],{intl:this.props.intl,theme:this.props.theme,useDataSource:null===(e=o.filterItems[this.index])||void 0===e?void 0:e.useDataSource,dataSourceChange:this.dataSourceChangeForFI,optionChange:this.optionChangeForFI,onSqlExprBuilderChange:this.sqlExprBuilderChange,onClose:this.onCloseFilterItemPanel})))))},t}(g.React.PureComponent);t.default=y},46:function(e,t){e.exports=s},69:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.5H.75a.75.75 0 110-1.5h6.5V.75A.75.75 0 018 0z" fill="#000" fill-rule="evenodd"></path></svg>'},71:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.637 15.866L30.951 27.18a2.667 2.667 0 01-3.771 3.771L15.866 19.637 4.552 30.951A2.667 2.667 0 01.781 27.18l11.314-11.314L.781 4.552A2.667 2.667 0 014.552.781l11.314 11.314L27.18.781a2.667 2.667 0 013.771 3.771L19.637 15.866z"></path></svg>'},91:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.598L14.308.29a.991.991 0 011.402 1.402L9.402 8l6.308 6.308a.991.991 0 01-1.402 1.402L8 9.402 1.692 15.71A.991.991 0 01.29 14.308L6.598 8 .29 1.692A.991.991 0 011.692.29L8 6.598z" fill="#000" fill-rule="nonzero"></path></svg>'},92:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M15 0v1.53h-.062L9.556 6.825v7.982a.5.5 0 01-.851.356l-2.26-2.224V6.818L1.07 1.53H1V0h14zm-1 1H2v.042l5.444 5.357v6.121l1.111 1.093V6.406L14 1.05V1z" fill="#C5C5C5" fill-rule="nonzero"></path><circle cx="3" cy="3" r="3" transform="translate(15 -5)" fill="#050505"></circle></g></svg>'}}))}}}));