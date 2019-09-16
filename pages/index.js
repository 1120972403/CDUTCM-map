// pages/index.js
// 获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    newsList: [
      "Live程中奕校园导览正在不断完善，敬请期待！",
      "本地图数据仅供参考使用，如有侵权请联系删除"
    ],
    images: app.globalData.introduce.images,
    shortName: app.globalData.introduce.shortName,
    mapCopyright: app.globalData.introduce.mapCopyright,
    imgCDN: app.imgCDN
  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: app.globalData.introduce.name
    })

    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.rawData)
    wx.login({
      success(res) {
        console.log(res.code)
        wx.request({
          url: 'httpa://admin.cn/index.php/api/login/login',
          method:'post',
          data:{
            code: res.code,
            rawdata: e.detail.rawData
          },
          success:function(data){
            console.log(data.data)
          }
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: app.globalData.introduce.name + ' - 校园导览',
      path: '/pages/index',
      imageUrl: app.imgCDN + app.globalData.introduce.share,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})