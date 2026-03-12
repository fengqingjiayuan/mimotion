Page({
  data: {
    teacherSubmitted: '0/0',
    totalCount: 0,
    issueCount: 0,
    followUpCount: 0
  },

  async onShow() {
    const { result } = await wx.cloud.callFunction({ name: 'getAdminOverview' });
    this.setData(result);
  }
});
