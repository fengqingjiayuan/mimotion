const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

exports.main = async (event) => {
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;
  const name = (event.name || '').trim();

  const exists = await db.collection('inspectors').doc(openid).get().catch(() => null);
  if (!exists || !exists.data) {
    await db.collection('inspectors').doc(openid).set({
      data: {
        name,
        phone: '',
        role: 'inspector',
        status: 'active',
        created_at: new Date(),
        updated_at: new Date()
      }
    });
  }

  const profile = await db.collection('inspectors').doc(openid).get();
  return {
    openid,
    role: profile.data.role,
    name: profile.data.name
  };
};
