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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/addScore.js */ \"./src/module/addScore.js\");\n/* harmony import */ var _module_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/getData.js */ \"./src/module/getData.js\");\n\n\n\ndocument.querySelector('#submit').addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_module_addScore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('#name').value, Number(document.querySelector('#score').value));\n  document.querySelector('#name').value = '';\n  document.querySelector('#score').value = '';\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_module_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/module/addScore.js":
/*!********************************!*\
  !*** ./src/module/addScore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addScore = async (inputName, inputScore) => {\n  const id = 'yYoyx8yAiB5KAIvUn2iP';\n  const result = await fetch(\n    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,\n    {\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      method: 'POST',\n      body: JSON.stringify({\n        user: `${inputName}`,\n        score: inputScore,\n      }),\n    },\n  );\n  await result.json();\n  if (result.ok === true && result.status === 201) {\n    return true;\n  // eslint-disable-next-line brace-style\n  }\n  // eslint-disable-next-line no-else-return\n  else {\n    return false;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://leaderboard/./src/module/addScore.js?");

/***/ }),

/***/ "./src/module/getData.js":
/*!*******************************!*\
  !*** ./src/module/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst table = document.querySelector('#tableBody');\nconst getdata = async () => {\n  const data = await fetch(\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yYoyx8yAiB5KAIvUn2iP/scores/',\n  );\n  const result = await data.json();\n  const dataSet = result.result.sort((a, b) => b.score - a.score);\n  dataSet.forEach((item) => {\n    // if (count < 10 && count === check) {\n    const tr = document.createElement('tr');\n    table.appendChild(tr);\n    const td = document.createElement('td');\n    td.innerHTML = `${item.user}:   ${item.score}`;\n    tr.appendChild(td);\n    // }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdata);\n\n//# sourceURL=webpack://leaderboard/./src/module/getData.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);