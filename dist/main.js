/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _time_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time/index */ \"./src/time/index.js\");\n\nconsole.log(_time_index__WEBPACK_IMPORTED_MODULE_0__.getDayOfWeek());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_time_index__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack://util-tools/./src/index.js?");

/***/ }),

/***/ "./src/time/index.js":
/*!***************************!*\
  !*** ./src/time/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateFmt\": () => (/* binding */ dateFmt),\n/* harmony export */   \"isToday\": () => (/* binding */ isToday),\n/* harmony export */   \"getDetailOfDay\": () => (/* binding */ getDetailOfDay),\n/* harmony export */   \"getDayOfWeek\": () => (/* binding */ getDayOfWeek),\n/* harmony export */   \"getWeekStartDate\": () => (/* binding */ getWeekStartDate),\n/* harmony export */   \"getWeekEndDate\": () => (/* binding */ getWeekEndDate),\n/* harmony export */   \"getMonthStartDate\": () => (/* binding */ getMonthStartDate),\n/* harmony export */   \"getMonthEndDate\": () => (/* binding */ getMonthEndDate),\n/* harmony export */   \"getMonthDays\": () => (/* binding */ getMonthDays)\n/* harmony export */ });\n/** 时间格式化\n * @param {dateTime} date 标准时间格式 -> new Date()\n * @param {string} format 时间格式化的格式 'yyyy-MM-dd hh:mm:ss'\n * @returns {string} 格式化后的时间  '2017-01-01 01:00:00'\n*/\nconst dateFmt = function (date, format  = 'yyyy/MM/dd hh:mm:ss') {\n  var o = {\n      'M+': date.getMonth() + 1, // month\n      'd+': date.getDate(), // day\n      'h+': date.getHours(), // hour\n      'm+': date.getMinutes(), // minute\n      's+': date.getSeconds(), // second\n      'q+': Math.floor((date.getMonth() + 3) / 3), // quarter\n      'S': date.getMilliseconds() // millisecond\n  }\n  if (/(y+)/.test(format)) {\n      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))\n  }\n  for (var k in o) {\n      if (new RegExp('(' + k + ')').test(format)) {\n          format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))\n      }\n  }\n  return format\n}\n\n/**\n* 判断是否是今天\n* @returns {string | Date}\n*/\nconst isToday = (day = new Date()) => {\nif (typeof day === 'string') {\n  day = new Date(day)\n}\nreturn new Date().toDateString() === day.toDateString()\n}\n\n\n\n/**\n* 获取某一天的年月日周几\n* @returns {string | Date}\n*/\nconst getDetailOfDay = function (day = new Date()) {\nif (typeof day === 'string') {\n  day = new Date(day)\n}\n// 本周的第几天\nconst dayOfWeek = day.getDay()\n// 日期\nconst date = day.getDate()\n// 月份\nconst month = day.getMonth()\n// 年份\nconst year = day.getFullYear()\n\nreturn {\n  dayOfWeek,\n  date,\n  month,\n  year\n}\n}\n\n/**\n* 获得本周的开始日期 从周一开始\n* @returns {Date} 2019-12-09 00:00:00\n*/\nconst getWeekStartDate = function (options) {\nconst {year, month, date, dayOfWeek} = options\nconst weekStartDate = new Date(year, month, date - (dayOfWeek - 1))\nreturn weekStartDate\n}\n\n/**\n* 获得本周的结束日期 到周日结束\n* @returns {Date} 2019-12-15 23:59:59\n*/\nconst getWeekEndDate = function (options) {\nconst {year, month, date, dayOfWeek} = options\n  let weekEndDate = new Date(year, month, date + (7 - dayOfWeek))\n  weekEndDate = weekEndDate.getTime() + 24 * 60 * 60 * 1000 - 1\n  weekEndDate = new Date(weekEndDate)\n  return weekEndDate\n}\n\n/**\n* 获得本月的开始日期\n* @returns {Date} 2019-12-01 00:00:00\n*/\nconst getMonthStartDate = function (year, month) {\nvar monthStartDate = new Date(year, month, 1)\nreturn monthStartDate\n}\n\n/**\n* 获得本月的结束日期\n* @returns {Date} 2019-12-31 23:59:59\n*/\nconst getMonthEndDate = function (year, month) {\n  let monthEndDate = new Date(year, month, getMonthDays(year, month))\n  monthEndDate = monthEndDate.getTime() + 24 * 60 * 60 * 1000 - 1\n  monthEndDate = new Date(monthEndDate)\n  return monthEndDate\n}\n\n/**\n* 获得该月天数\n* @param {number} year 年份\n* @param {number} month 月份\n* @returns {number} days 28|29|30|31\n*/\nconst getMonthDays = function (year, month = new Date().getMonth()) {\n  var monthStartDate = new Date(year, month, 1)\n  var monthEndDate = new Date(year, month + 1, 1)\n  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)\n  return days\n}\n\n/**\n* 获取当天为周几\n* @param {number} date new Date().getDay()\n* @returns {string} eg: 周一\n*/\nconst getDayOfWeek = function (date = new Date().getDay()) {\n  const weeks = ['日', '一', '二', '三', '四', '五', '六']\n  return weeks[date]\n}\n\n\n\n\n//# sourceURL=webpack://util-tools/./src/time/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;