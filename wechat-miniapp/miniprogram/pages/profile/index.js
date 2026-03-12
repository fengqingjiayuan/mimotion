Page({
  data: {
    role: 'inspector'
  },
  onShow() {
    this.setData({ role: getApp().globalData.role || 'inspector' });
  }
});
