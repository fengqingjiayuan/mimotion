Page({
  data: {
    loading: false,
    userName: ''
  },

  onInputName(e) {
    this.setData({ userName: e.detail.value.trim() });
  },

  async onLogin() {
    if (!this.data.userName) {
      wx.showToast({ title: '请先输入姓名', icon: 'none' });
      return;
    }

    this.setData({ loading: true });
    try {
      const { result } = await wx.cloud.callFunction({
        name: 'login',
        data: { name: this.data.userName }
      });
      getApp().globalData.role = result.role;
      wx.reLaunch({
        url: result.role === 'admin' ? '/pages/admin-dashboard/index' : '/pages/home/index'
      });
    } finally {
      this.setData({ loading: false });
    }
  }
});
