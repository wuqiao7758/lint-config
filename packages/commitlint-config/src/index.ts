// @see: https://cz-git.qbenben.com/zh/guide

export default {
  ignores: [(commit: any) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ]
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: '选择关联issue前缀（可选）:',
      customFooterPrefixs: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: '特性: 新增功能' },
      { value: 'fix', name: '修复:  修复缺陷' },
      { value: 'docs', name: '文档: 文档变更' },
      { value: 'style', name: '格式: 代码格式（不影响功能，例如空格、分号等格式修正）' },
      { value: 'refactor', name: '重构: 代码重构（不包括 bug 修复、功能新增）' },
      { value: 'perf', name: '性能: 性能优化' },
      { value: 'test', name: '测试: 添加疏漏测试或已有测试改动' },
      { value: 'build', name: '构建: 构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）' },
      { value: 'ci', name: '集成: 修改 CI 配置、脚本' },
      { value: 'revert', name: '回退: 回滚 commit' },
      { value: 'chore', name: '其他: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
      { value: 'wip', name: '开发: 正在开发中' },
      { value: 'workflow', name: '工作流:  工作流程改进' },
      { value: 'types', name: '类型: 类型定义文件修改' }
    ],
    useEmoji: false,
    customScopesAlign: 'bottom',
    emptyScopesAlias: 'empty',
    customScopesAlias: 'custom',
    allowBreakingChanges: ['feat', 'fix']
  }
}
