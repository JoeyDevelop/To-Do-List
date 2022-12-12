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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\nfunction dom() {\n    // Setup DOM\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.addBtnLoad)();\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.hideTabContent)();\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.showTabContent)(document.querySelector('.currentTab').innerHTML)\n\n    // Add active class on click & remove active tab from other elements\n    const tabArray = document.querySelectorAll('.tab');\n    tabArray.forEach(item => {\n        item.addEventListener('click', () => {\n            tabArray.forEach(item => {\n                item.classList.remove('active');\n            });\n            item.classList.add('active');\n            changeTab();\n        })\n    })\n\n    // Change tab indicator and display tab content\n    function changeTab() {\n        // Delete and create new add button for new event listeners !!LIKELY TO CHANGE\n        const currentTab = document.querySelector('.active').innerHTML;\n        const tabIndicator = document.querySelector('.currentTab');\n        tabIndicator.innerHTML = currentTab;\n\n        // Append correct content\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.removeAddBtn)()\n        ;(0,_tabs__WEBPACK_IMPORTED_MODULE_0__.addBtn)();\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.hideTabContent)();\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.showTabContent)(currentTab);\n\n        // Open correct form \n        (0,_forms__WEBPACK_IMPORTED_MODULE_1__.appendForm)(currentTab, tabArray);\n    };\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendForm\": () => (/* binding */ appendForm),\n/* harmony export */   \"cancelButton\": () => (/* binding */ cancelButton)\n/* harmony export */ });\nfunction appendForm(currentTab, tabArray) {\n    const addButton = document.querySelector('.addText');\n        if (currentTab === 'Inbox') {\n            addButton.addEventListener('click', () => {\n                // Make form visible\n                const formHolder = document.querySelector('.formHolder');\n                formHolder.style.visibility = 'visible';\n                // Disable clicks outside of form when open\n                tabArray.forEach(element => {\n                    element.classList.add('pointerEventsNone');\n                });\n                // Apply functions to buttons\n                cancelButton(formHolder, tabArray);\n            });\n        } else if ( currentTab === 'Projects') {\n            addButton.addEventListener('click', () => {\n                console.log('projects')\n            });\n        }\n}\n\nfunction cancelButton(formHolder, tabArray) {\n    const cancelBtn = document.querySelector('#cancelBtn');\n    const form = document.querySelector('.form');\n    // Reset form inputs, hide form, reEnable tabs\n    form.reset();\n    cancelBtn.addEventListener('click', () => {\n        formHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n    });\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.dom)()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"addBtnLoad\": () => (/* binding */ addBtnLoad),\n/* harmony export */   \"hideTabContent\": () => (/* binding */ hideTabContent),\n/* harmony export */   \"removeAddBtn\": () => (/* binding */ removeAddBtn),\n/* harmony export */   \"showTabContent\": () => (/* binding */ showTabContent)\n/* harmony export */ });\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\nfunction addBtn() {\n    const content = document.querySelector('.content');\n\n    const  addDiv = document.createElement('div');\n    addDiv.classList.add('addDiv');\n    content.appendChild(addDiv);\n\n    const addText = document.createElement('h1');\n    addText.classList.add('addText');\n    addText.innerHTML = '+';\n    addDiv.appendChild(addText);\n};\n\nfunction addBtnLoad() {\n    const addButton = document.querySelector('.addText');\n    addButton.addEventListener('click', (event) => {\n    const formHolder = document.querySelector('.formHolder');\n    formHolder.style.visibility = 'visible';\n    const tabArray = document.querySelectorAll('.tab');\n    tabArray.forEach(item => {\n        item.classList.add('pointerEventsNone');\n    });\n    (0,_forms__WEBPACK_IMPORTED_MODULE_0__.cancelButton)(formHolder, tabArray);\n    });\n};\n\nfunction removeAddBtn() {\n    const addDiv = document.querySelector('.addDiv');\n    addDiv.remove();\n};\n\n// Show correct main content functions\nfunction hideTabContent() {\n    const tabContent = document.querySelectorAll('.container');\n        for (let i = 0; i < tabContent.length; i++) {\n            tabContent[i].style.display = 'none';\n        };\n};\n\nfunction showTabContent(currentTab) {\n    const currentTabContent = document.getElementById(currentTab);\n    currentTabContent.style.display = '';\n    if (currentTab === 'Daily' || currentTab === 'Weekly') {\n        const hideAddBtn = document.querySelector('.addDiv')\n        hideAddBtn.style.visibility = 'hidden';\n    }\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tabs.js?");

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