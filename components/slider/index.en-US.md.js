webpackJsonp([135,206],{

/***/ 1613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "A Slider component for displaying current value and intervals in range."], ["h2", "When To Use"], ["p", "To input a value in a range."]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "Slider",
	    "filename": "components/slider/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "range"], ["td", "dual thumb mode"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "min"], ["td", "The minimum value the slider can slide to."], ["td", "Number"], ["td", "0"]], ["tr", ["td", "max"], ["td", "The maximum value the slider can slide to"], ["td", "Number"], ["td", "100"]], ["tr", ["td", "step"], ["td", "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When  ", ["code", "marks"], " no null, ", ["code", "step"], " can be ", ["code", "null"], "."], ["td", "Number or null"], ["td", "1"]], ["tr", ["td", "marks"], ["td", "Tick mark of Slider, type of key must be ", ["code", "Number"], ", and must in closed interval ", "[min, max]", " ，each mark can declare its own style."], ["td", "Object{}"], ["td", "Object{Number: String or React.Component} or Object{Number: { style, label}}"]], ["tr", ["td", "dots"], ["td", "Whether the thumb can drag over tick only."], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "value"], ["td", "The value of slider. When ", ["code", "range"], " is ", ["code", "false"], ", use ", ["code", "Number"], ", otherwise, use ", ["code", "[Number, Number]"]], ["td", "Number or ", "[number, number]"]], ["tr", ["td", "defaultValue"], ["td", "The default value of slider. When ", ["code", "range"], " is ", ["code", "false"], ", use ", ["code", "Number"], ", otherwise, use ", ["code", "[Number, Number]"]], ["td", "Number or ", "[number, number]"], ["td", "0 or ", "[0, 0]"]], ["tr", ["td", "included"], ["td", "Make effect when ", ["code", "marks"], " not null，", ["code", "true"], " means containment and ", ["code", "false"], " means coordinative"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "disabled"], ["td", "If true, the slider will not be interactable."], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onChange"], ["td", "Callback function that is fired when the user changes the slider's value."], ["td", "Function"], ["td", "NOOP"]], ["tr", ["td", "onAfterChange"], ["td", "Fire when  ", ["code", "onmouseup"], " is fired."], ["td", "Function"], ["td", "NOOP"]], ["tr", ["td", "tipFormatter"], ["td", "Slider will pass its value to ", ["code", "tipFormatter"], ", and display its value in Tooltip, and hide Tooltip when return value is null."], ["td", "Function or null"], ["td", "IDENTITY"]]]]]
	};

/***/ }

});