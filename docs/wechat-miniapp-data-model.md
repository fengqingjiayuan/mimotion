# 查课系统数据模型（云数据库）

## 1. `inspectors`

```json
{
  "_id": "openid",
  "name": "张老师",
  "phone": "13800000000",
  "role": "inspector",
  "status": "active",
  "created_at": "2026-03-12T09:00:00.000Z",
  "updated_at": "2026-03-12T09:00:00.000Z"
}
```

索引建议：
- `role + status`

## 2. `inspection_records`

```json
{
  "_id": "auto",
  "inspect_date": "2026-03-12",
  "inspector_id": "openid_xxx",
  "inspector_name": "李老师",
  "campus": "总部校区",
  "class_name": "高一1班",
  "classroom": "A301",
  "course_name": "数学",
  "teacher_name": "王老师",
  "time_slot": "08:00-08:45",
  "period": "第1节",
  "is_on_time": true,
  "teacher_present": true,
  "student_attendance": "normal",
  "class_discipline": "good",
  "preparation_status": "good",
  "teaching_status": "good",
  "has_issue": false,
  "issue_type": [],
  "issue_detail": "",
  "image_urls": [],
  "need_follow_up": false,
  "follow_up_status": "none",
  "follow_up_note": "",
  "status": "submitted",
  "submitted_at": "2026-03-12T09:10:00.000Z",
  "created_at": "2026-03-12T09:10:00.000Z",
  "updated_at": "2026-03-12T09:10:00.000Z"
}
```

索引建议：
- `inspect_date`
- `inspector_id + inspect_date`
- `has_issue + inspect_date`
- `need_follow_up + follow_up_status`

## 3. `course_templates`

```json
{
  "_id": "auto",
  "campus": "总部校区",
  "class_name": "高一1班",
  "classroom": "A301",
  "course_name": "数学",
  "teacher_name": "王老师",
  "period": "第1节",
  "time_slot": "08:00-08:45",
  "enabled": true,
  "created_at": "2026-03-12T09:00:00.000Z",
  "updated_at": "2026-03-12T09:00:00.000Z"
}
```

索引建议：
- `campus + class_name`
- `enabled`
