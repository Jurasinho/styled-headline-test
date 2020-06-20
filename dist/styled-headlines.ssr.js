'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var styled=_interopDefault(require('vue-styled-components'));function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 32px;\n    line-height: 40px;\n    \n    @media (min-width: 576px){\n        font-size: 48px;\n        line-height: 64px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 24px;\n    line-height: 32px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 40px;\n    line-height: 56px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: 300;\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var headlineMainProps = {
  forcedDown: Boolean
};
var headlineMain = styled('h1', headlineMainProps)(_templateObject(), function (props) {
  return !props.forcedDown ? '48px' : '32px';
}, function (props) {
  return !props.forcedDown ? '64px' : '40px';
}, function (props) {
  return !props.forcedDown ? '#000000' : '#9A9B9C';
});
var headline1 = styled('h1')(_templateObject2());
var mobileHeadline1 = styled(headline1)(_templateObject3());
var responsiveHeadline = styled('h1')(_templateObject4());var components=/*#__PURE__*/Object.freeze({__proto__:null,headlineMain: headlineMain,headline1: headline1,mobileHeadline1: mobileHeadline1,responsiveHeadline: responsiveHeadline});var install = function installStyledHeadlines(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.default=plugin;exports.headline1=headline1;exports.headlineMain=headlineMain;exports.mobileHeadline1=mobileHeadline1;exports.responsiveHeadline=responsiveHeadline;