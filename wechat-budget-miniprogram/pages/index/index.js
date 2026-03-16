const { saveExpense, getBudget, getExpenses } = require('../../utils/storage');

Page({
  data: {
    amount: '',
    category: ''
  },
  onAmountInput(e) {
    this.setData({ amount: e.detail.value });
  },
  onCategoryInput(e) {
    this.setData({ category: e.detail.value });
  },
  addExpense() {
    const amount = parseFloat(this.data.amount);
    if (isNaN(amount) || !this.data.category) {
      wx.showToast({ title: '请输入完整信息', icon: 'none' });
      return;
    }
    const expense = {
      amount,
      category: this.data.category,
      time: Date.now()
    };
    saveExpense(expense);
    const budget = getBudget();
    const expenses = getExpenses();
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const remaining = budget - total;
    wx.showToast({ title: '已记账，剩余' + remaining.toFixed(2) });
    this.setData({ amount: '', category: '' });
  }
});
