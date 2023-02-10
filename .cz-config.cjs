module.exports = {
  types: [
    { value: '✨feat', name: '特性:    一个新的特性' },
    { value: '🐛fix', name: '修复:    修复一个Bug' },
    { value: '📝docs', name: '文档:    变更的只有文档' },
    { value: '💄style', name: '格式:    空格, 分号等格式修复' },
    { value: '♻️refactor', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️perf', name: '性能:    提升性能' },
    { value: '✅test', name: '测试:    添加一个测试' },
    { value: '🔧chore', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪revert', name: '回滚:    代码回退' },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围:',
    subject: '请输入简要描述提交 message(必填):\n',
    body: '请输入详细描述，使用"|"换行(可选，跳过即可)：\n',
    footer: '关联关闭的issue，例如：#31, #34(可选，跳过即可):\n',
    confirmCommit: '确定提交说明?',
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100,
}
