const { getExpenses, getBudget } = require('../../utils/storage');

Page({
  data: {
    budget: 0,
    total: 0,
    remaining: 0,
    summary: []
  },
  onShow() {
    const budget = getBudget();
    const expenses = getExpenses();
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const remaining = budget - total;
    const map = {};
    expenses.forEach(e => {
      map[e.category] = (map[e.category] || 0) + e.amount;
    });
    const summary = Object.keys(map).map(key => ({ category: key, amount: map[key] }));
    this.setData({ budget, total, remaining, summary });
  }
});
