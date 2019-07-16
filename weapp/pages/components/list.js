"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    dataArr: null
  },
  methods: {
    click: function click(e) {
      var id = e.target.dataset.id;
      wx.navigateTo({
        url: "/pages/detail/detail?id=".concat(id)
      });
    }
  },
  created: function created() {
    wx.showLoading();

    var _this = this;

    wx.request({
      url: 'https://v1.itooi.cn/kuwo/search?keyword=我喜欢上你内心时的活动&type=song&pageSize=100&page=0',
      headers: {
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      success: function success(data) {
        _this.dataArr = data.data.data;
        console.log(data.data.data);
        wx.hideLoading();
      }
    });
  },
  ready: function ready() {
    console.log(this.dataArr, '----');
  }
}, {info: {"components":{},"on":{}}, handlers: {'7-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.click($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.click($event)
      })();
    
  }}}, models: {} });