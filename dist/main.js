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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToProject\": () => (/* binding */ addTaskToProject),\n/* harmony export */   \"addToDOM\": () => (/* binding */ addToDOM)\n/* harmony export */ });\nfunction addToDOM(project) {\n    const container = document.querySelector('.body');\n\n    const item = document.createElement('div');\n    item.classList.add('project');\n    container.appendChild(item);\n\n    const projectHeader = document.createElement('div');\n    projectHeader.classList.add('projectHeader');\n    item.appendChild(projectHeader);\n\n    const title = document.createElement('h3');\n    title.innerHTML = `<u>${project.title}<u>`;\n    title.classList.add('projectTitle');\n    projectHeader.appendChild(title);\n\n    // Make add task button functional\n    const add = document.createElement('h1');\n    add.addEventListener('click', () => {\n        addTaskToProject(event);\n    });\n    add.innerHTML = '+';\n    add.classList.add('taskAdd');\n    projectHeader.appendChild(add);\n};\n\nfunction addTaskToProject(event, task) {\n    const project = event.target.parentElement.parentElement;\n\n    const projectTasks = document.createElement('div');\n    projectTasks.classList.add('projectTasks');\n    project.appendChild(projectTasks);\n\n    const testText = document.createElement('h3');\n    testText.classList.add('taskTitle');\n    testText.innerHTML = 'Test';\n    projectTasks.appendChild(testText);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nlet projectArray = [];\n\nfunction projectForm() {\n    \n    const body = document.body;\n    \n    const projectFormDiv = document.createElement('div');\n    projectFormDiv.classList.add('projectFormContainer');\n    body.appendChild(projectFormDiv);\n\n    const projectFormInput = document.createElement('input');\n    projectFormInput.type = 'text';\n    projectFormInput.classList.add('projectFormInput');\n    projectFormDiv.appendChild(projectFormInput);\n\n    const projectFormInputBtn = document.createElement('button');\n    projectFormInputBtn.classList.add('projectFormInputBtn');\n    projectFormInputBtn.type = 'button';\n    projectFormInputBtn.innerHTML = 'Add';\n    projectFormInputBtn.addEventListener('click', () => {\n        submitProjectForm(projectFormInput.value);\n        projectFormDiv.remove();\n    });\n    projectFormDiv.appendChild(projectFormInputBtn);\n};\n\nfunction submitProjectForm(title) {   \n    if (title === '') {\n        return;\n    } else {\n        let project = new _tasks__WEBPACK_IMPORTED_MODULE_1__.createProject(title);\n    projectArray.push(new _tasks__WEBPACK_IMPORTED_MODULE_1__.createProject(project));\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addToDOM)(project);\n    console.log(projectArray);\n    }\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\nconst btn = document.querySelector('.add');\nbtn.addEventListener('click', () => {\n    if (document.body.contains(document.querySelector('.projectFormContainer'))) {\n        return;\n    } else {\n    (0,_form__WEBPACK_IMPORTED_MODULE_0__.projectForm)();\n    }\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\nfunction createProject(title) {\n    return {\n        title,\n    }\n};\n\nfunction createTask(title, description, dueDate, priority) {\n    return{\n        title,\n        description,\n        dueDate,\n        priority,\n    }\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

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