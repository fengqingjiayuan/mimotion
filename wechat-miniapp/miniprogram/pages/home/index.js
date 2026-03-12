Page({
  data: {
    todaySubmitted: 0,
    todayIssueCount: 0
  },

  onShow() {
    // TODO: 调用 getRecords 获取今日统计
  },

  goForm() {
    wx.navigateTo({ url: '/pages/form/index' });
  },

  goRecords() {
    wx.navigateTo({ url: '/pages/records/index' });
  }
});
