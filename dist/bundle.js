/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\r\n  'use strict';\r\n  let popUps = __webpack_require__(/*! ./parts/popUps.js */ \"./src/parts/popUps.js\"),\r\n      timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/parts/timer.js\"),\r\n      forms = __webpack_require__(/*! ./parts/forms.js */ \"./src/parts/forms.js\"),\r\n      tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/parts/tabs.js\");\r\n\r\n  popUps();\r\n  timer();\r\n  forms();\r\n  tabs();\r\n\r\n\r\n\r\n  \r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/forms.js":
/*!****************************!*\
  !*** ./src/parts/forms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nfunction forms() {\r\n\r\n  let message = {\r\n    loadding: 'Загррузка...',\r\n    soccess: 'Спасибо! Скоро мы с вами свяжемся!',\r\n    failure: 'Что-то пошло не так...'\r\n  };\r\n\r\n  let form = document.querySelectorAll('.form'),\r\n    input = document.getElementsByTagName('input'),\r\n    statusMessege = document.createElement('div');\r\n\r\n  for (let i = 0; i < input.length; i++) {\r\n    if (input[i].getAttribute('name') == 'user_phone') {\r\n      input[i].addEventListener('keypress', (e) => {\r\n        if (!/\\d/.test(e.key)) {\r\n          e.preventDefault();\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  // function sendForm(a){\r\n  for (let i = 0; i < form.length; i++) {\r\n    form[i].addEventListener('submit', function (event) {\r\n      event.preventDefault();\r\n      form[i].appendChild(statusMessege);\r\n      let formData = new FormData(form[i]);\r\n\r\n      function postData(data) {\r\n        return new Promise(function (resolve, reject) {\r\n          let request = new XMLHttpRequest();\r\n          request.open('POST', 'server.php');\r\n          request.setRequestHeader('Content-Type', 'application/x-www-form-urrlencoded');\r\n\r\n          request.onreadystatechange = function () {\r\n            if (request.readyState < 4) {\r\n              //\r\n              resolve();\r\n            } else if (request.readyState === 4 && request.status == 200) {\r\n              // \r\n              resolve();\r\n            } else {\r\n              // \r\n              reject();\r\n            }\r\n          };\r\n          request.send(formData);\r\n        });\r\n      }\r\n\r\n      function clearInput() {\r\n        for (let i = 0; i < input.length; i++) {\r\n          input[i].value = '';\r\n        }\r\n        setTimeout(function () {\r\n          statusMessege.innerHTML = '';\r\n        }, 2000);\r\n      }\r\n\r\n\r\n      postData(formData)\r\n        .then(() => statusMessege.innerHTML = message.loadding)\r\n        .then(() => statusMessege.innerHTML = message.soccess)\r\n        .catch(() => statusMessege.innerHTML = message.failure)\r\n        .then(clearInput);\r\n    });\r\n  }\r\n}\r\nmodule.exports = forms;\n\n//# sourceURL=webpack:///./src/parts/forms.js?");

/***/ }),

/***/ "./src/parts/popUps.js":
/*!*****************************!*\
  !*** ./src/parts/popUps.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction popUps(){\r\n\r\n\r\nlet popupEngBtn = document.querySelector('.popup_engineer_btn'),\r\n    popUpWindow = document.querySelector('.popup_engineer'),\r\n    closePopUp = popUpWindow.querySelector('.popup_close');\r\n\r\n  popupEngBtn.addEventListener('click', function () {\r\n    popUpWindow.style.display = 'flex';\r\n    document.body.style.overflow = 'hidden';\r\n  });\r\n\r\n  popUpWindow.addEventListener('click', function (e) {\r\n    let target = e.target;\r\n    \r\n    if (target == popUpWindow) {\r\n      popUpWindow.style.display = 'none';\r\n      document.body.style.overflow = '';\r\n    }\r\n  });\r\n  closePopUp.addEventListener('click', function () {\r\n    popUpWindow.style.display = 'none';\r\n    document.body.style.overflow = '';\r\n  });\r\n\r\n  //popUp_2\r\n  let phoneLink = document.querySelectorAll('.phone_link'),\r\n    popUp = document.querySelector('.popup'),\r\n    popUpClose = popUp.querySelector('.popup_close');\r\n\r\n    popUp.addEventListener('click', function(e){\r\n      let target = e.target;\r\n      if(target == popUp){\r\n        popUp.style.display = 'none';\r\n        document.body.style.overflow = '';\r\n      }\r\n    });\r\n\r\n  phoneLink[0].addEventListener('click', function () {\r\n    popUp.style.display = 'flex';\r\n    document.body.style.overflow = 'hidden';\r\n  });\r\n  phoneLink[1].addEventListener('click', function (e) {\r\n    e.preventDefault();\r\n    popUp.style.display = 'flex';\r\n    document.body.style.overflow = 'hidden';\r\n  });\r\n\r\n  popUpClose.addEventListener('click', function () {\r\n    popUp.style.display = 'none';\r\n    document.body.style.overflow = '';\r\n  });\r\n\r\n  function popUpAftLoad() {\r\n    popUp.style.display = 'flex';\r\n    document.body.style.overflow = 'hidden';\r\n  }\r\n\r\n  setTimeout(popUpAftLoad, 60000);\r\n\r\n}\r\n\r\nmodule.exports = popUps;\n\n//# sourceURL=webpack:///./src/parts/popUps.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nfunction tabs(){\r\n  //tabs\r\n  // glazing_block\r\n  let slickTabsG = document.querySelector('.glazing'),\r\n    // tabs = document.querySelector('.glazing_list'),\r\n    tabsImg = slickTabsG.querySelectorAll('img'),\r\n    tabsA = slickTabsG.querySelectorAll('a'),\r\n    tabDiv = slickTabsG.querySelectorAll('div.glazing_block'),\r\n    tabContent = document.querySelectorAll('.tree, .aluminum, .plastic, .french, .rise');\r\n\r\n  let tabsObj = {\r\n    tree: {\r\n      img: tabsImg[0],\r\n      link: tabsA[0],\r\n      tabDiv: tabDiv[0]\r\n    },\r\n    aluminum: {\r\n      img: tabsImg[1],\r\n      link: tabsA[1],\r\n      tabDiv: tabDiv[1]\r\n    },\r\n    plastic: {\r\n      img: tabsImg[2],\r\n      link: tabsA[2],\r\n      tabDiv: tabDiv[2]\r\n    },\r\n    french: {\r\n      img: tabsImg[3],\r\n      link: tabsA[3],\r\n      tabDiv: tabDiv[3]\r\n    },\r\n    rise: {\r\n      img: tabsImg[4],\r\n      link: tabsA[4],\r\n      tabDiv: tabDiv[4]\r\n    }\r\n  };\r\n\r\n  slickTabsG.addEventListener('click', function (e) {\r\n    let target = e.target;\r\n    //0\r\n    if (target == tabsObj.tree.img || target == tabsObj.tree.link || target == tabsObj.tree.tabDiv) {\r\n      tabDiv[1].classList.remove('slick-current');\r\n      tabDiv[2].classList.remove('slick-current');\r\n      tabDiv[3].classList.remove('slick-current');\r\n      tabDiv[4].classList.remove('slick-current');\r\n      tabDiv[0].classList.add('slick-current');\r\n      tabContent[1].style.display = 'none';\r\n      tabContent[2].style.display = 'none';\r\n      tabContent[3].style.display = 'none';\r\n      tabContent[4].style.display = 'none';\r\n      tabContent[0].style.display = 'block';\r\n    } else\r\n      //1\r\n      if (target == tabsObj.aluminum.img || target == tabsObj.aluminum.link || target == tabsObj.aluminum.tabDiv) {\r\n        tabDiv[0].classList.remove('slick-current');\r\n        tabDiv[2].classList.remove('slick-current');\r\n        tabDiv[3].classList.remove('slick-current');\r\n        tabDiv[4].classList.remove('slick-current');\r\n        tabDiv[1].classList.add('slick-current');\r\n        tabContent[1].style.display = 'block';\r\n        tabContent[0].style.display = 'none';\r\n        tabContent[2].style.display = 'none';\r\n        tabContent[3].style.display = 'none';\r\n        tabContent[4].style.display = 'none';\r\n\r\n      } else\r\n        //2\r\n        if (target == tabsObj.plastic.img || target == tabsObj.plastic.link || target == tabsObj.plastic.tabDiv) {\r\n          tabDiv[0].classList.remove('slick-current');\r\n          tabDiv[1].classList.remove('slick-current');\r\n          tabDiv[3].classList.remove('slick-current');\r\n          tabDiv[4].classList.remove('slick-current');\r\n          tabDiv[2].classList.add('slick-current');\r\n          tabContent[0].style.display = 'none';\r\n          tabContent[1].style.display = 'none';\r\n          tabContent[3].style.display = 'none';\r\n          tabContent[4].style.display = 'none';\r\n          tabContent[2].style.display = 'block';\r\n        } else\r\n          //3\r\n          if (target == tabsObj.french.img || target == tabsObj.french.link || target == tabsObj.french.tabDiv) {\r\n            tabDiv[0].classList.remove('slick-current');\r\n            tabDiv[1].classList.remove('slick-current');\r\n            tabDiv[2].classList.remove('slick-current');\r\n            tabDiv[4].classList.remove('slick-current');\r\n            tabDiv[3].classList.add('slick-current');\r\n            tabContent[0].style.display = 'none';\r\n            tabContent[1].style.display = 'none';\r\n            tabContent[2].style.display = 'none';\r\n            tabContent[4].style.display = 'none';\r\n            tabContent[3].style.display = 'block';\r\n          } else\r\n            //4\r\n            if (target == tabsObj.rise.img || target == tabsObj.rise.link || target == tabsObj.rise.tabDiv) {\r\n              tabDiv[0].classList.remove('slick-current');\r\n              tabDiv[1].classList.remove('slick-current');\r\n              tabDiv[2].classList.remove('slick-current');\r\n              tabDiv[3].classList.remove('slick-current');\r\n              tabDiv[4].classList.add('slick-current');\r\n              tabContent[0].style.display = 'none';\r\n              tabContent[1].style.display = 'none';\r\n              tabContent[2].style.display = 'none';\r\n              tabContent[3].style.display = 'none';\r\n              tabContent[4].style.display = 'block';\r\n            }\r\n\r\n\r\n  });\r\n\r\n  //tabsDecoration\r\n  // slick-track\r\n\r\n  let slickTabsF = document.querySelector('.finish'),\r\n    tabsFDiv = slickTabsF.querySelectorAll('div.decoration_item'),\r\n    tabsFWrap = slickTabsF.querySelectorAll('.internal_link, .external_link, .rising_link, .roof_link'),\r\n    tabsFImg = slickTabsF.querySelectorAll('img'),\r\n    tabsFA = slickTabsF.querySelectorAll('a'),\r\n    tabFDiv = slickTabsF.querySelectorAll('div'),\r\n    tabsFContent = document.querySelectorAll('.internal, .external, .rising, .roof');\r\n\r\n  \r\n\r\n  slickTabsF.addEventListener('click', function (e) {\r\n    let target = e.target;\r\n    console.log(target);\r\n    //0\r\n    if (target == tabsFDiv[0] || target == tabsFA[0]) {\r\n      tabsFDiv[0].classList.add('slick-current');\r\n      tabsFDiv[1].classList.remove('slick-current');\r\n      tabsFDiv[2].classList.remove('slick-current');\r\n      tabsFDiv[3].classList.remove('slick-current');\r\n      tabsFContent[0].style.display = 'block';\r\n      tabsFContent[1].style.display = 'none';\r\n      tabsFContent[2].style.display = 'none';\r\n      tabsFContent[3].style.display = 'none';\r\n      tabsFWrap[0].classList.add('after_click');\r\n      tabsFWrap[1].classList.remove('after_click');\r\n      tabsFWrap[2].classList.remove('after_click');\r\n      tabsFWrap[3].classList.remove('after_click');\r\n\r\n    } else\r\n      //1\r\n      if (target == tabsFDiv[1] || target == tabsFA[1]) {\r\n        tabsFDiv[1].classList.add('slick-current');\r\n        tabsFDiv[0].classList.remove('slick-current');\r\n        tabsFDiv[2].classList.remove('slick-current');\r\n        tabsFDiv[3].classList.remove('slick-current');\r\n        tabsFContent[1].style.display = 'block';\r\n        tabsFContent[0].style.display = 'none';\r\n        tabsFContent[2].style.display = 'none';\r\n        tabsFContent[3].style.display = 'none';\r\n        tabsFWrap[1].classList.add('after_click');\r\n        tabsFWrap[0].classList.remove('after_click');\r\n        tabsFWrap[2].classList.remove('after_click');\r\n        tabsFWrap[3].classList.remove('after_click');\r\n      } else\r\n        //2\r\n        if (target == tabsFDiv[2] || target == tabsFA[2]) {\r\n          tabsFDiv[2].classList.add('slick-current');\r\n          tabsFDiv[1].classList.remove('slick-current');\r\n          tabsFDiv[0].classList.remove('slick-current');\r\n          tabsFDiv[3].classList.remove('slick-current');\r\n          tabsFContent[2].style.display = 'block';\r\n          tabsFContent[1].style.display = 'none';\r\n          tabsFContent[0].style.display = 'none';\r\n          tabsFContent[3].style.display = 'none';\r\n          tabsFWrap[2].classList.add('after_click');\r\n          tabsFWrap[0].classList.remove('after_click');\r\n          tabsFWrap[1].classList.remove('after_click');\r\n          tabsFWrap[3].classList.remove('after_click');\r\n        } else\r\n          //3\r\n          if (target == tabsFDiv[3] || target == tabsFA[3]) {\r\n            tabsFDiv[3].classList.add('slick-current');\r\n            tabsFDiv[1].classList.remove('slick-current');\r\n            tabsFDiv[2].classList.remove('slick-current');\r\n            tabsFDiv[0].classList.remove('slick-current');\r\n            tabsFContent[3].style.display = 'block';\r\n            tabsFContent[1].style.display = 'none';\r\n            tabsFContent[2].style.display = 'none';\r\n            tabsFContent[0].style.display = 'none';\r\n            tabsFWrap[3].classList.add('after_click');\r\n            tabsFWrap[0].classList.remove('after_click');\r\n            tabsFWrap[1].classList.remove('after_click');\r\n            tabsFWrap[2].classList.remove('after_click');\r\n\r\n          }\r\n  });\r\n\r\n}\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n function timer(){\r\n\r\nlet deadLine = \"December 18 2018 00:00:00 GMT+0300\";\r\n\r\n  function getTimeRemeining(endtime) {\r\n    let t = Date.parse(endtime) - Date.parse(new Date()), //разница между датами. кол-во миллисекун,\r\n      s = Math.floor((t / 1000) % 60).toString(),\r\n      m = Math.floor((t / 1000 / 60) % 60).toString(),\r\n      // h = Math.floor((t / (1000 * 60 * 60)));\r\n      h = Math.floor((t / 1000 / 60 / 60) % 24).toString(),\r\n      d = Math.floor(t / (1000 * 60 * 60 * 24)).toString();\r\n\r\n    return {\r\n      'total': t,\r\n      'h': h,\r\n      'm': m,\r\n      's': s,\r\n      'd': d\r\n    };\r\n\r\n  }\r\n\r\n  function setClock(id, endtime) {\r\n    let timer = document.getElementById(id),\r\n      days = timer.querySelector('#days'),\r\n      hours = timer.querySelector('#hours'),\r\n      minutes = timer.querySelector('#minutes'),\r\n      seconds = timer.querySelector('#seconds'),\r\n      timeInterval = setInterval(updateClock, 1000);\r\n\r\n    function updateClock() {\r\n      let t = getTimeRemeining(endtime);\r\n      // days.textContent = t.d;\r\n      // console.log(t.h);\r\n      if (t.d.length < 2) {\r\n        days.textContent = '0' + t.d;\r\n      } else {\r\n        days.textContent = t.h;\r\n      }\r\n      if (t.h.length < 2) {\r\n        hours.textContent = '0' + t.h;\r\n      } else {\r\n        hours.textContent = t.h;\r\n      }\r\n      if (t.m.length < 2) {\r\n        minutes.textContent = '0' + t.m;\r\n      } else {\r\n        minutes.textContent = t.m;\r\n      }\r\n      if (t.s.length < 2) {\r\n        seconds.textContent = '0' + t.s;\r\n      } else {\r\n        seconds.textContent = t.s;\r\n      }\r\n\r\n      if (t.total <= 0) {\r\n        clearInterval(timeInterval);\r\n        days.textContent = '00';\r\n        hours.textContent = '00';\r\n        minutes.textContent = '00';\r\n        seconds.textContent = '00';\r\n\r\n      }\r\n    }\r\n  }\r\n  setClock('timer', deadLine);\r\n\r\n }\r\n\r\n module.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });