const { saveBudget: setBudget, getBudget, getExpenses } = require('../../utils/storage');

Page({
  data: {
    budget: ''
  },
  onShow() {
    this.setData({ budget: getBudget() });
  },
  onBudgetInput(e) {
    this.setData({ budget: e.detail.value });
  },
  saveBudget() {
    const amount = parseFloat(this.data.budget);
    if (isNaN(amount)) {
      wx.showToast({ title: '请输入数字', icon: 'none' });
      return;
    }
    setBudget(amount);
    const expenses = getExpenses();
    const total = expenses.reduce((s, e) => s + e.amount, 0);
    const remaining = amount - total;
    wx.showToast({ title: '预算已设，剩余' + remaining.toFixed(2) });
  }
});
