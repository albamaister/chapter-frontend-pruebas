"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/molecules/MarvelBody/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/molecules/MarvelBody/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/hooks/useForm */ \"./src/shared/hooks/useForm.js\");\n/* harmony import */ var _pages_api_marvel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/api/marvel */ \"./src/pages/api/marvel.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./src/components/molecules/MarvelBody/style.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\root\\\\Documents\\\\prueba-pichincha\\\\chapter-frontend-pruebas\\\\src\\\\components\\\\molecules\\\\MarvelBody\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import { PokemonCard } from './PokemonCard';\n// import { PokemonCardDetail } from './PokemonCardDetail';\n\n\n\n\n\nvar MarvelBody = function MarvelBody(_ref) {\n  _s();\n\n  var characters = _ref.characters;\n\n  // const [selectedPokemon, setSelectedPokemon] = useState();\n  var _useForm = (0,_shared_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n    searchPokemon: ''\n  }),\n      _useForm2 = (0,C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useForm, 2),\n      formValues = _useForm2[0],\n      handleInputChange = _useForm2[1]; // @ts-ignore\n\n\n  var searchPokemon = formValues.searchPokemon;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pokemonsSearch = _useState[0],\n      setPokemonsSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      notFound = _useState2[0],\n      setNotFound = _useState2[1];\n\n  console.log(formValues, 'formValues');\n\n  var onSearch = /*#__PURE__*/function () {\n    var _ref2 = (0,C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(marvel) {\n      var result;\n      return C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (marvel) {\n                _context.next = 5;\n                break;\n              }\n\n              setPokemonsSearch([]); // setReload(true);\n\n              setNotFound(false);\n              _context.next = 15;\n              break;\n\n            case 5:\n              _context.prev = 5;\n              _context.next = 8;\n              return (0,_pages_api_marvel__WEBPACK_IMPORTED_MODULE_5__.fetchCharacter)(marvel.toLowerCase());\n\n            case 8:\n              result = _context.sent;\n\n              if (!result) {\n                setNotFound(true);\n              } else {\n                setPokemonsSearch(result);\n                setNotFound(false);\n              }\n\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](5);\n              setNotFound(true);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[5, 12]]);\n    }));\n\n    return function onSearch(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // @ts-ignore\n\n\n  var handleSearch = function handleSearch(e) {\n    e.preventDefault(); // @ts-ignore\n\n    onSearch(formValues.searchPokemon);\n  }; // const handleClick = (pokemonDetail) => {\n  //     setSelectedPokemon(pokemonDetail);\n  // }\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"container-search\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Buscar\",\n        className: \"box-search\",\n        name: \"searchPokemon\",\n        value: searchPokemon // @ts-ignore\n        ,\n        onChange: handleInputChange,\n        autoComplete: \"off\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n        className: \"button\",\n        children: \"Nuevo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"\",\n      children: characters.map(function (_char) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Character, {\n          \"char\": _char\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(MarvelBody, \"nrGZFpFG2f0l2HD+0S9hA3k1RlA=\", false, function () {\n  return [_shared_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = MarvelBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MarvelBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"MarvelBody\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvTWFydmVsQm9keS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7O0FBQ0E7QUFFQTs7O0FBTUEsSUFBTUssVUFBMEIsR0FBRyxTQUE3QkEsVUFBNkIsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUVuRDtBQUNBLGlCQUF3Q0osOERBQU8sQ0FBQztBQUFDSyxJQUFBQSxhQUFhLEVBQUU7QUFBaEIsR0FBRCxDQUEvQztBQUFBO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxpQkFBbkIsZ0JBSG1ELENBSW5EOzs7QUFDQSxNQUFRRixhQUFSLEdBQTBCQyxVQUExQixDQUFRRCxhQUFSOztBQUNBLGtCQUE0Q04sK0NBQVEsQ0FBQyxFQUFELENBQXBEO0FBQUEsTUFBT1MsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsbUJBQWdDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUdBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBWixFQUF3QixZQUF4Qjs7QUFFQSxNQUFNUSxRQUFRO0FBQUEsNlhBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1JBLE1BRFE7QUFBQTtBQUFBO0FBQUE7O0FBRVROLGNBQUFBLGlCQUFpQixDQUFDLEVBQUQsQ0FBakIsQ0FGUyxDQUdUOztBQUNBRSxjQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBSlM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFPZ0JWLGlFQUFjLENBQUNjLE1BQU0sQ0FBQ0MsV0FBUCxFQUFELENBUDlCOztBQUFBO0FBT0NDLGNBQUFBLE1BUEQ7O0FBUUwsa0JBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1ROLGdCQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsZUFGRCxNQUVPO0FBQ0hGLGdCQUFBQSxpQkFBaUIsQ0FBQ1EsTUFBRCxDQUFqQjtBQUNBTixnQkFBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUNIOztBQWJJO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZUxBLGNBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7O0FBZks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkcsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBWm1ELENBK0J0RDs7O0FBQ0csTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEd0IsQ0FFeEI7O0FBQ0FOLElBQUFBLFFBQVEsQ0FBQ1IsVUFBVSxDQUFDRCxhQUFaLENBQVI7QUFDSCxHQUpELENBaENtRCxDQXNDbkQ7QUFDQTtBQUNBOzs7QUFFQSxzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0k7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLG1CQUFXLEVBQUMsUUFGaEI7QUFHSSxpQkFBUyxFQUFDLFlBSGQ7QUFJSSxZQUFJLEVBQUMsZUFKVDtBQUtJLGFBQUssRUFBRUEsYUFMWCxDQU1JO0FBTko7QUFPSSxnQkFBUSxFQUFFRSxpQkFQZDtBQVFJLG9CQUFZLEVBQUM7QUFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBV0k7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFlSTtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsZ0JBQ01ILFVBQVUsQ0FBQ2lCLEdBQVgsQ0FBZ0IsVUFBQ0MsS0FBRDtBQUFBLDRCQUNkLDhEQUFDLFNBQUQ7QUFBVyxrQkFBTUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWhCO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkJILENBckVEOztHQUFNbkI7VUFHc0NIOzs7S0FIdENHO0FBdUVOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9NYXJ2ZWxCb2R5L2luZGV4LnRzeD8xNzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2VGb3JtJ1xyXG4vLyBpbXBvcnQgeyBQb2tlbW9uQ2FyZCB9IGZyb20gJy4vUG9rZW1vbkNhcmQnO1xyXG4vLyBpbXBvcnQgeyBQb2tlbW9uQ2FyZERldGFpbCB9IGZyb20gJy4vUG9rZW1vbkNhcmREZXRhaWwnO1xyXG5pbXBvcnQgeyBmZXRjaENoYXJhY3RlciwgZmV0Y2hDaGFyYWN0ZXJzIH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvYXBpL21hcnZlbCc7XHJcbmltcG9ydCB7IElDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIENoYXJhY3RlcnMge1xyXG4gICAgY2hhcmFjdGVyczogSUNoYXJhY3RlcltdXHJcbn1cclxuXHJcbmNvbnN0IE1hcnZlbEJvZHk6IEZDPENoYXJhY3RlcnM+ID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgW3NlbGVjdGVkUG9rZW1vbiwgc2V0U2VsZWN0ZWRQb2tlbW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybVZhbHVlcywgaGFuZGxlSW5wdXRDaGFuZ2VdID0gdXNlRm9ybSh7c2VhcmNoUG9rZW1vbjogJyd9KTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHsgc2VhcmNoUG9rZW1vbiB9ID0gZm9ybVZhbHVlcztcclxuICAgIGNvbnN0IFtwb2tlbW9uc1NlYXJjaCwgc2V0UG9rZW1vbnNTZWFyY2hdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25vdEZvdW5kLCBzZXROb3RGb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcm1WYWx1ZXMsICdmb3JtVmFsdWVzJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgKG1hcnZlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtYXJ2ZWwpIHtcclxuICAgICAgICAgICAgc2V0UG9rZW1vbnNTZWFyY2goW10pO1xyXG4gICAgICAgICAgICAvLyBzZXRSZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldE5vdEZvdW5kKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hDaGFyYWN0ZXIobWFydmVsLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldE5vdEZvdW5kKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb2tlbW9uc1NlYXJjaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5vdEZvdW5kKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXROb3RGb3VuZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBvblNlYXJjaChmb3JtVmFsdWVzLnNlYXJjaFBva2Vtb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKHBva2Vtb25EZXRhaWwpID0+IHtcclxuICAgIC8vICAgICBzZXRTZWxlY3RlZFBva2Vtb24ocG9rZW1vbkRldGFpbCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXNlYXJjaCc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCdXNjYXInXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3gtc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlYXJjaFBva2Vtb24nXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBva2Vtb259XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J29mZidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uJz5OdWV2bzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgICAgeyBjaGFyYWN0ZXJzLm1hcCggKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyIGNoYXI9e2NoYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICApIClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJ2ZWxCb2R5XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsImZldGNoQ2hhcmFjdGVyIiwiQ29udGFpbmVyIiwiTWFydmVsQm9keSIsImNoYXJhY3RlcnMiLCJzZWFyY2hQb2tlbW9uIiwiZm9ybVZhbHVlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwicG9rZW1vbnNTZWFyY2giLCJzZXRQb2tlbW9uc1NlYXJjaCIsIm5vdEZvdW5kIiwic2V0Tm90Rm91bmQiLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJtYXJ2ZWwiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsImNoYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/MarvelBody/index.tsx\n");

/***/ })

});