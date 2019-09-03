'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paginate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginate = function (_React$Component) {
  _inherits(Paginate, _React$Component);

  function Paginate() {
    _classCallCheck(this, Paginate);

    var _this = _possibleConstructorReturn(this, (Paginate.__proto__ || Object.getPrototypeOf(Paginate)).call(this));

    _this.togglePaginate = function (idx) {
      var _this$props = _this.props,
          data = _this$props.data,
          limit = _this$props.limit;

      _this.setState({
        active: idx,
        dataPaginate: data.slice(idx, idx + limit).map(function (item, i) {
          return _extends({}, item, {
            idxPaginate: i
          });
        })
      });
    };

    _this.state = {
      paginate: [],
      active: 0,
      dataPaginate: []
    };
    return _this;
  }

  _createClass(Paginate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setPaginate();
    }
  }, {
    key: 'setPaginate',
    value: function setPaginate() {
      var _props = this.props,
          data = _props.data,
          pageSize = _props.pageSize,
          limit = _props.limit;
      var active = this.state.active;

      if (Array.isArray(data)) {
        var size = pageSize;
        if (pageSize > data.length) {
          size = data.length;
        }
        if (pageSize < 0) {
          size = 1;
          console.error('pageSize cannot be less than 0');
        }
        this.setState({
          paginate: data.slice(0, size).map(function (item, i) {
            return _extends({}, item, {
              idxPaginate: i
            });
          }),
          dataPaginate: data.slice(active, active + limit).map(function (item, i) {
            return _extends({}, item, {
              idxPaginate: i
            });
          })
        });
      } else {
        throw new Error('"data" must be an array!');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          paginate = _state.paginate,
          active = _state.active,
          dataPaginate = _state.dataPaginate;
      var _props2 = this.props,
          Component = _props2.Component,
          data = _props2.data;


      return _react2.default.createElement(
        _styled.Container,
        null,
        _react2.default.createElement(
          _styled.ButtonsList,
          null,
          active > 0 && _react2.default.createElement(
            _styled.PrevButton,
            {
              onClick: function onClick() {
                return _this2.togglePaginate(active - 1);
              }
            },
            'Prev'
          ),
          paginate.map(function (item) {
            return _react2.default.createElement(
              _styled.Button,
              {
                first: item.idxPaginate === 0 && active === 0,
                last: item.idxPaginate === active && active + 1 === data.length,
                type: 'button',
                active: active === item.idxPaginate,
                key: item.idxPaginate,
                onClick: function onClick() {
                  return _this2.togglePaginate(item.idxPaginate);
                }
              },
              item.idxPaginate + 1
            );
          }),
          active + 1 < data.length && _react2.default.createElement(
            _styled.NextButton,
            {
              onClick: function onClick() {
                return _this2.togglePaginate(active + 1);
              }
            },
            'Next'
          )
        ),
        dataPaginate.map(function (item) {
          return _react2.default.createElement(Component, _extends({ key: item.idxPaginate }, item));
        })
      );
    }
  }]);

  return Paginate;
}(_react2.default.Component);

exports.Paginate = Paginate;