const DEFAULT_FORM = {
  inspect_date: '',
  campus: '',
  class_name: '',
  classroom: '',
  course_name: '',
  teacher_name: '',
  time_slot: '',
  period: '',
  is_on_time: true,
  teacher_present: true,
  student_attendance: 'normal',
  class_discipline: 'good',
  preparation_status: 'good',
  teaching_status: 'good',
  has_issue: false,
  issue_type: [],
  issue_detail: '',
  image_urls: [],
  need_follow_up: false
};

Page({
  data: {
    form: DEFAULT_FORM,
    submitting: false
  },

  onLoad() {
    const today = new Date().toISOString().slice(0, 10);
    this.setData({ 'form.inspect_date': today });
  },

  onIssueDetailInput(e) {
    this.setData({ 'form.issue_detail': e.detail.value });
  },

  async onSubmit() {
    this.setData({ submitting: true });
    try {
      await wx.cloud.callFunction({
        name: 'submitInspection',
        data: { ...this.data.form, status: 'submitted' }
      });
      wx.showToast({ title: '提交成功' });
      wx.navigateTo({ url: '/pages/records/index' });
    } finally {
      this.setData({ submitting: false });
    }
  }
});
