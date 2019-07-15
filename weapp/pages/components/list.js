"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    dataArr: [1, 2]
  },
  props: ['info'],
  methods: {
    getInfo: function getInfo() {
      var that = this;
      return new Promise(function (resolve, reject) {
        wx.request({
          url: 'https://v1.itooi.cn/netease/songList/highQuality?cat=全部&pageSize=100',
          dataType: 'json',
          success: function success(data) {
            console.log(data);
            var arr = data.data.data;
            that.setData({
              dataArr: arr
            });
            resolve();
          }
        });
      });
    }
  },
  create: function create() {
    wx.showLoading({
      title: '加载中'
    });
    this.getInfo().then(function () {
      wx.hideLoading();
    });
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });