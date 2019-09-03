'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.ButtonsList = exports.PrevButton = exports.NextButton = exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  border-top-left-radius: ', ';\n  border-bottom-left-radius: ', ';\n  border-top-right-radius: ', ';\n  border-bottom-right-radius: ', ';\n  border: 1px solid #D7D7D7;\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  &:nth-child(n+2) {\n    border-left: none;\n  }\n'], ['\n  background-color: ', ';\n  border-top-left-radius: ', ';\n  border-bottom-left-radius: ', ';\n  border-top-right-radius: ', ';\n  border-bottom-right-radius: ', ';\n  border: 1px solid #D7D7D7;\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  &:nth-child(n+2) {\n    border-left: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: 1px solid #D7D7D7;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  border-left: none;\n  cursor: pointer;\n  height: 25px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n'], ['\n  border: 1px solid #D7D7D7;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  border-left: none;\n  cursor: pointer;\n  height: 25px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border: 1px solid #D7D7D7;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  cursor: pointer;\n  height: 25px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n'], ['\n  border: 1px solid #D7D7D7;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  cursor: pointer;\n  height: 25px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  margin-bottom: 10px;\n'], ['\n  display: flex;\n  margin-bottom: 10px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n'], ['\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
  var color = props.active ? '#E9E9E9' : '#FFFFFF';
  return color;
}, function (props) {
  var radius = props.first ? '4px' : '0px';
  return radius;
}, function (props) {
  var radius = props.first ? '4px' : '0px';
  return radius;
}, function (props) {
  var radius = props.last ? '4px' : '0px';
  return radius;
}, function (props) {
  var radius = props.last ? '4px' : '0px';
  return radius;
});

var NextButton = exports.NextButton = _styledComponents2.default.button(_templateObject2);

var PrevButton = exports.PrevButton = _styledComponents2.default.button(_templateObject3);

var ButtonsList = exports.ButtonsList = _styledComponents2.default.div(_templateObject4);

var Container = exports.Container = _styledComponents2.default.section(_templateObject5);