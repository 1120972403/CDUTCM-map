Page({
  data: {
    imgs: [
      "https://cdn.nlark.com/yuque/0/2019/png/223589/1551628180485-assets/web-upload/1431efa1-478c-4ea6-bd13-ab08e581cb57.png?x-oss-process=image/resize,w_275",
      "https://cdn.nlark.com/yuque/0/2019/jpeg/280373/1564724418389-assets/web-upload/c727b73d-67be-41c0-a369-d7636b3dcd01.jpeg?x-oss-process=image/resize,w_275",
      "http://img.kaiyanapp.com/64f96635ddc425e3be237b5f70374d87.jpeg?imageMogr2/quality/60",
    ],

    img: "http://img.kaiyanapp.com/7ff70fb62f596267ea863e1acb4fa484.jpeg",
  },

  start() {
    wx.navigateTo({
      url: '../welcome/welcome'
    })
  },


})