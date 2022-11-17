/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/chatpage.js":
/*!*****************************!*\
  !*** ./scripts/chatpage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_chatpage_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/chatpage/header.css */ \"./styles/chatpage/header.css\");\n/* harmony import */ var _styles_chatpage_header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_chatpage_header_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_chatpage_chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/chatpage/chat.css */ \"./styles/chatpage/chat.css\");\n/* harmony import */ var _styles_chatpage_chat_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chatpage_chat_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_chatpage_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/chatpage/form.css */ \"./styles/chatpage/form.css\");\n/* harmony import */ var _styles_chatpage_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chatpage_form_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar form = document.querySelector(\"form\");\nvar input = document.querySelector(\".form-input\");\nvar chat = document.querySelector(\".chat\");\nvar back_button = document.querySelector('.back-button');\nform.addEventListener(\"submit\", handleSubmit.bind(undefined));\ndocument.addEventListener(\"DOMContentLoaded\", getMessagesFromLocalStorage.bind(undefined));\nback_button.addEventListener('click', goToChatList.bind(undefined));\nfunction goToChatList() {\n  window.location.href = './chatlist.html';\n}\nfunction getMessagesFromLocalStorage() {\n  var messages = localStorage.getItem(\"messages\") || \"[]\";\n  messages = JSON.parse(messages);\n  var _iterator = _createForOfIteratorHelper(messages),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      createMessage(message);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction saveMessageToLocalStorage(message) {\n  var messages = localStorage.getItem(\"messages\") || \"[]\";\n  messages = JSON.parse(messages);\n  messages.push(message);\n  localStorage.setItem(\"messages\", JSON.stringify(messages));\n}\nfunction createMessage(message) {\n  var messageBlock = document.createElement(\"div\");\n  messageBlock.className = \"message right\";\n  var text = document.createElement(\"span\");\n  text.className = \"message-text\";\n  text.innerText = message.text;\n  var time = document.createElement(\"span\");\n  time.className = \"message-time\";\n  time.innerText = message.time;\n  var status = document.createElement(\"div\");\n  status.className = \"message-status\";\n  status.innerHTML = '<span class=\"material-icons\">done_all</span>';\n  var info = document.createElement(\"div\");\n  info.className = \"message-info\";\n  info.append.apply(info, [time, status]);\n  messageBlock.append.apply(messageBlock, [text, info]);\n  chat.prepend(messageBlock);\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var message = {\n    \"text\": input.value,\n    \"time\": \"\".concat(new Date().toLocaleTimeString(\"ru\", {\n      hour: \"2-digit\",\n      minute: \"2-digit\"\n    })),\n    \"sender\": \"Andrey\"\n  };\n  if (message.text == \"\") {\n    return;\n  }\n  if (message.text == \"clear()\") {\n    // option to clear messages in localStorage\n    localStorage.clear();\n    document.location.reload(true);\n    return;\n  }\n  createMessage(message);\n  saveMessageToLocalStorage(message);\n  input.value = \"\";\n}\n\n//# sourceURL=webpack:///./scripts/chatpage.js?");

/***/ }),

/***/ "./styles/chatpage/chat.css":
/*!**********************************!*\
  !*** ./styles/chatpage/chat.css ***!
  \**********************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chatpage/chat.css?");

/***/ }),

/***/ "./styles/chatpage/form.css":
/*!**********************************!*\
  !*** ./styles/chatpage/form.css ***!
  \**********************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chatpage/form.css?");

/***/ }),

/***/ "./styles/chatpage/header.css":
/*!************************************!*\
  !*** ./styles/chatpage/header.css ***!
  \************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chatpage/header.css?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/main.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/chatpage.js");
/******/ 	
/******/ })()
;