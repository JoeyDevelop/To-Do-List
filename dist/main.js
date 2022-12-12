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

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n// Create tasks on form submit\nfunction createTask(taskTitle, taskDescription, taskDueDate, taskPriority) {\n    // WILL CHANGE\n    const content = document.querySelector('#Inbox')\n    const task = document.createElement('div');\n    const taskLeft = document.createElement('div');\n    const taskRight = document.createElement('div');\n    const buttons = document.createElement('div');\n    \n    taskLeft.classList.add('taskLeft');\n    taskRight.classList.add('taskRight');\n    buttons.classList.add('buttons');\n\n    task.appendChild(taskLeft);\n    task.appendChild(taskRight);\n    task.appendChild(buttons);\n\n    // Task title creation\n    const taskTitleDiv = document.createElement('div');\n    const title = document.createElement('h5');\n    const titleValue = document.createElement('h3');\n\n    title.innerHTML = 'Title:';\n    titleValue.style.minWidth = '120px';\n    titleValue.style.maxWidth = '120px';\n    titleValue.innerHTML = taskTitle;\n\n    task.classList.add('task');\n    taskTitleDiv.classList.add('taskTitle');\n\n    content.appendChild(task);\n    taskLeft.appendChild(taskTitleDiv);\n    taskTitleDiv.appendChild(title);\n    taskTitleDiv.appendChild(titleValue);\n\n    // Task description creation\n    const taskDescriptionDiv = document.createElement('div');\n    const description = document.createElement('h5');\n    const descriptionValue = document.createElement('textarea');\n\n    description.innerHTML = 'Description:';\n    descriptionValue.innerHTML = taskDescription;\n    descriptionValue.rows = '3';\n    descriptionValue.cols = '30';\n\n    taskDescriptionDiv.classList.add('taskDescription');\n\n    taskLeft.appendChild(taskDescriptionDiv);\n    taskDescriptionDiv.appendChild(description);\n    taskDescriptionDiv.appendChild(descriptionValue);\n\n    // Task due date creation\n    const taskDueDateDiv = document.createElement('div');\n    const dueDate = document.createElement('h5');\n    const dueDateValue = document.createElement('input');\n\n    dueDate.innerHTML = 'Due date:';\n    dueDateValue.type = 'date';\n    dueDateValue.value = taskDueDate;\n\n    taskDueDateDiv.classList.add('taskDueDate');\n\n    taskRight.appendChild(taskDueDateDiv);\n    taskDueDateDiv.appendChild(dueDate);\n    taskDueDateDiv.appendChild(dueDateValue);\n\n    // Task priority creation\n    const taskPriorityDiv = document.createElement('div');\n    const priority = document.createElement('h5');\n    const priorityValue = document.createElement('select');\n    const option1 = document.createElement('option');\n    const option2 = document.createElement('option');\n    const option3 = document.createElement('option');\n\n    priority.innerHTML = 'Priority:'\n    option1.innerHTML = 'Low'\n    option2.innerHTML = 'Medium'\n    option3.innerHTML = 'High'\n\n    if (taskPriority === 'low') {\n        option1.selected = true;\n    } else if (taskPriority === 'medium') {\n        option2.selected = true;\n    } else {\n        option3.selected = true;\n    }\n\n    taskPriorityDiv.classList.add('taskPriority');\n\n    taskRight.appendChild(taskPriorityDiv);\n    taskPriorityDiv.appendChild(priority);\n    taskPriorityDiv.appendChild(priorityValue);\n    priorityValue.appendChild(option1);\n    priorityValue.appendChild(option2);\n    priorityValue.appendChild(option3);\n\n    // Create buttons\n    const trashBtn = document.createElement('img');\n    const checkbox = document.createElement('input');\n\n    trashBtn.classList.add('icon');\n    checkbox.classList.add('checkbox')\n    trashBtn.src = '/src/png/bin.png'\n    checkbox.type = 'checkbox'\n\n    buttons.appendChild(trashBtn);\n    buttons.appendChild(checkbox);\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/create.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendForm\": () => (/* binding */ appendForm),\n/* harmony export */   \"cancelButton\": () => (/* binding */ cancelButton),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\nconst form = document.querySelector('.form');\n\nfunction appendForm(currentTab, tabArray) {\n    const addButton = document.querySelector('.addText');\n        if (currentTab === 'Inbox') {\n            addButton.addEventListener('click', () => {\n                // Make form visible\n                const formHolder = document.querySelector('.formHolder');\n                formHolder.style.visibility = 'visible';\n                // Disable clicks outside of form when open\n                tabArray.forEach(element => {\n                    element.classList.add('pointerEventsNone');\n                });\n                // Apply functions to buttons\n                cancelButton(formHolder, tabArray);\n            });\n        } else if ( currentTab === 'Projects') {\n            addButton.addEventListener('click', () => {\n                console.log('projects')\n            });\n        }\n}\n\nfunction cancelButton(formHolder, tabArray) {\n    const cancelBtn = document.querySelector('#cancelBtn');\n    // Reset form inputs, hide form, reEnable tabs\n    form.reset();\n    cancelBtn.addEventListener('click', () => {\n        formHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n    });\n};\n\nfunction submitButton(formHolder, tabArray) {\n    const submitBtn = document.querySelector('#submitBtn');\n    submitBtn.addEventListener('click', () => {\n        // Define form inputs\n        const taskTitle = document.querySelector('#taskName').value;\n        const taskDescription = document.querySelector('#taskDescription').value;\n        const taskDueDate = document.querySelector('#dueDate').value;\n        const taskPriority = document.querySelector('#taskPriority').value;\n        (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskTitle, taskDescription, taskDueDate, taskPriority);\n\n        // Hide form\n        formHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n        form.reset();\n    });\n\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/forms.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"addBtnLoad\": () => (/* binding */ addBtnLoad),\n/* harmony export */   \"hideTabContent\": () => (/* binding */ hideTabContent),\n/* harmony export */   \"removeAddBtn\": () => (/* binding */ removeAddBtn),\n/* harmony export */   \"showTabContent\": () => (/* binding */ showTabContent)\n/* harmony export */ });\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\nconst formHolder = document.querySelector('.formHolder');\nconst tabArray = document.querySelectorAll('.tab');\n(0,_forms__WEBPACK_IMPORTED_MODULE_0__.cancelButton)(formHolder, tabArray);\n(0,_forms__WEBPACK_IMPORTED_MODULE_0__.submitButton)(formHolder, tabArray);\n\nfunction addBtn() {\n    const content = document.querySelector('.content');\n\n    const  addDiv = document.createElement('div');\n    addDiv.classList.add('addDiv');\n    content.appendChild(addDiv);\n\n    const addText = document.createElement('h1');\n    addText.classList.add('addText');\n    addText.innerHTML = '+';\n    addDiv.appendChild(addText);\n};\n\nfunction addBtnLoad() {\n    const addButton = document.querySelector('.addText');\n    addButton.addEventListener('click', (event) => {\n        // const formHolder = document.querySelector('.formHolder');\n        formHolder.style.visibility = 'visible';\n        // const tabArray = document.querySelectorAll('.tab');\n        tabArray.forEach(item => {\n            item.classList.add('pointerEventsNone');\n        });\n        // cancelButton(formHolder, tabArray);\n        // submitButton(formHolder, tabArray);\n    });\n};\n\nfunction removeAddBtn() {\n    const addDiv = document.querySelector('.addDiv');\n    addDiv.remove();\n};\n\n// Show correct main content functions\nfunction hideTabContent() {\n    const tabContent = document.querySelectorAll('.container');\n        for (let i = 0; i < tabContent.length; i++) {\n            tabContent[i].style.display = 'none';\n        };\n};\n\nfunction showTabContent(currentTab) {\n    const currentTabContent = document.getElementById(currentTab);\n    currentTabContent.style.display = '';\n    if (currentTab === 'Daily' || currentTab === 'Weekly') {\n        const hideAddBtn = document.querySelector('.addDiv')\n        hideAddBtn.style.visibility = 'hidden';\n    }\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tabs.js?");

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