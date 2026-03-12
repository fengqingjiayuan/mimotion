# 查课结果上报微信小程序（MVP）

本目录提供一套可落地的微信小程序 + 云开发实现骨架，覆盖老师端填报与管理员端查看。

## 1. 功能范围

### 第一阶段（MVP）
- 微信一键登录 + 角色识别（inspector/admin）
- 老师问卷式填报查课结果（支持图片上传）
- 老师查看“我的记录”
- 管理员查看总览 + 列表筛选 + 详情跟进
- 按筛选条件导出（预留云函数接口）

## 2. 目录结构

```txt
wechat-miniapp/
  miniprogram/                # 小程序前端（原生）
    app.js
    app.json
    app.wxss
    pages/
      auth/
      home/
      form/
      records/
      admin-dashboard/
      admin-list/
      admin-detail/
      admin-stats/
      profile/
  cloudfunctions/             # 云函数
    login/
    submitInspection/
    getRecords/
    getAdminOverview/
    exportRecords/
```

## 3. 数据库集合

- `inspectors`
- `inspection_records`
- `course_templates`

字段定义见 `docs/wechat-miniapp-data-model.md`。

## 4. 开发步骤建议

1. 在微信开发者工具创建云开发环境。
2. 导入 `miniprogram/` 作为小程序目录。
3. 为 `cloudfunctions/` 下函数补充 `package.json` 并上传部署。
4. 按 `docs/wechat-miniapp-implementation-plan.md` 完成页面与权限细化。

## 5. 关键约束

- 普通老师只能读写自己的记录。
- 管理员可以查看全量记录并处理跟进。
- `inspection_records` 默认只允许“提交后不可改”，管理员可改 `follow_up_status` 与 `follow_up_note`。
