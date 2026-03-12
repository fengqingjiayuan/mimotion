const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
const _ = db.command;

exports.main = async (event) => {
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;
  const mine = Boolean(event.mine);

  let condition = {};
  if (mine) {
    condition.inspector_id = openid;
  }

  if (event.inspect_date) {
    condition.inspect_date = event.inspect_date;
  }

  if (event.has_issue !== undefined) {
    condition.has_issue = !!event.has_issue;
  }

  if (event.inspector_id) {
    condition.inspector_id = event.inspector_id;
  }

  if (event.campus) {
    condition.campus = event.campus;
  }

  if (event.filter === 'follow_up') {
    condition.follow_up_status = _.in(['pending', 'processing']);
  }

  const res = await db.collection('inspection_records')
    .where(condition)
    .orderBy('submitted_at', 'desc')
    .limit(event.limit || 50)
    .get();

  return { list: res.data };
};
