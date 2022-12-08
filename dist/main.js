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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\nfunction dom() {\n    // Setup DOM\n    hideTabContent();\n    showTabContent(document.querySelector('.currentTab').innerHTML)\n\n    // Add active class on click & remove active tab from other elements\n    const tabArray = document.querySelectorAll('.tab');\n    tabArray.forEach(item => {\n        item.addEventListener('click', () => {\n            tabArray.forEach(item => {\n                item.classList.remove('active');\n            });\n            item.classList.add('active');\n            changeTab();\n        })\n    })\n\n    // Change tab indicator and display tab content\n    function changeTab() {\n        // Delete and create new add button for new event listeners !!LIKELY TO CHANGE\n        removeAddBtn()\n        addBtn()\n\n        const currentTab = document.querySelector('.currentTab');\n        currentTab.innerHTML = document.querySelector('.active').innerHTML;\n\n        hideTabContent();\n        showTabContent(currentTab.innerHTML);\n    };\n};\n\n// Create and delete add button functions\nfunction addBtn() {\n    const content = document.querySelector('.content');\n\n    const  addDiv = document.createElement('div');\n    addDiv.classList.add('addDiv');\n    content.appendChild(addDiv);\n\n    const addText = document.createElement('h1');\n    addText.classList.add('addText');\n    addText.innerHTML = '+';\n    addDiv.appendChild(addText);\n};\n\nfunction removeAddBtn() {\n    const addDiv = document.querySelector('.addDiv');\n    addDiv.remove();\n};\n\n// Show correct main content functions\nfunction hideTabContent() {\n    const tabContent = document.querySelectorAll('.container');\n        for (let i = 0; i < tabContent.length; i++) {\n            tabContent[i].style.display = 'none';\n        };\n};\n\nfunction showTabContent(currentTab) {\n    console.log(currentTab)\n    const currentTabContent = document.getElementById(currentTab);\n    currentTabContent.style.display = '';\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.dom)()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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