Page({
  data: {
    list: []
  },

  async onShow() {
    const { result } = await wx.cloud.callFunction({
      name: 'getRecords',
      data: { mine: false }
    });
    this.setData({ list: result.list || [] });
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/admin-detail/index?id=${id}` });
  }
});
