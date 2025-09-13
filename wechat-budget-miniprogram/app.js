App({
  onLaunch() {
    const budget = wx.getStorageSync('budget') || 0;
    const expenses = wx.getStorageSync('expenses') || [];
    this.globalData = {
      budget,
      expenses
    };
  },
  globalData: {
    budget: 0,
    expenses: []
  }
});
