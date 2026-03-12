const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

exports.main = async (event) => {
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;
  const now = new Date();

  const profile = await db.collection('inspectors').doc(openid).get();

  return db.collection('inspection_records').add({
    data: {
      ...event,
      inspector_id: openid,
      inspector_name: profile.data.name,
      follow_up_status: event.need_follow_up ? 'pending' : 'none',
      submitted_at: now,
      created_at: now,
      updated_at: now
    }
  });
};
