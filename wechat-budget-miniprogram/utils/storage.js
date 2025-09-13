function saveExpense(expense) {
  const list = wx.getStorageSync('expenses') || [];
  list.push(expense);
  wx.setStorageSync('expenses', list);
}

function getExpenses() {
  return wx.getStorageSync('expenses') || [];
}

function saveBudget(amount) {
  wx.setStorageSync('budget', amount);
}

function getBudget() {
  return wx.getStorageSync('budget') || 0;
}

module.exports = {
  saveExpense,
  getExpenses,
  saveBudget,
  getBudget
};
