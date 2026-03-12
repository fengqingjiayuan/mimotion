const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

function dateText(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

exports.main = async () => {
  const today = dateText();

  const [todayRecords, inspectors] = await Promise.all([
    db.collection('inspection_records').where({ inspect_date: today }).get(),
    db.collection('inspectors').where({ status: 'active' }).get()
  ]);

  const submittedInspectorSet = new Set(todayRecords.data.map((x) => x.inspector_id));
  const totalCount = todayRecords.data.length;
  const issueCount = todayRecords.data.filter((x) => x.has_issue).length;
  const followUpCount = todayRecords.data.filter((x) => x.need_follow_up && x.follow_up_status !== 'done').length;

  return {
    teacherSubmitted: `${submittedInspectorSet.size}/${inspectors.data.length}`,
    totalCount,
    issueCount,
    followUpCount
  };
};
