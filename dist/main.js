"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/addScore.js */ \"./src/module/addScore.js\");\n\n\ndocument.querySelector('#submit').addEventListener('click', () => {\n  const scoreResult = (0,_module_addScore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('#score').value, document.querySelector('#name').value);\n  document.querySelector('.heading').innerHTML = scoreResult;\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/module/addScore.js":
/*!********************************!*\
  !*** ./src/module/addScore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addScore = async (name, score) => {\n  undefined.name = name;\n  undefined.score = score;\n  const id = 'yYoyx8yAiB5KAIvUn2iP';\n  const result = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}`, {\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    method: 'POST',\n    body: JSON.stringify({\n      user: name,\n      userScore: score,\n    }),\n  });\n  const data = await result.json();\n  return data;\n  console.log(data);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://leaderboard/./src/module/addScore.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);