Page({
  data: {
    id: '',
    detail: null,
    follow_up_note: ''
  },

  onLoad(query) {
    this.setData({ id: query.id || '' });
  },

  onInputNote(e) {
    this.setData({ follow_up_note: e.detail.value });
  },

  async markFollowed() {
    wx.showToast({ title: '请在 getRecords/更新接口中补充保存逻辑', icon: 'none' });
  }
});
