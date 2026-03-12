Page({
  data: {
    filter: 'all',
    records: []
  },

  onShow() {
    this.fetchRecords();
  },

  async fetchRecords() {
    const { result } = await wx.cloud.callFunction({
      name: 'getRecords',
      data: { mine: true, filter: this.data.filter }
    });
    this.setData({ records: result.list || [] });
  }
});
