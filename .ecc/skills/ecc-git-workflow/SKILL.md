---
name: ecc-git-workflow
description: 为新项目设置 git 工作流、决定分支策略、写 commit 消息与 PR 描述、解决合并冲突、管理发布与版本标签、新成员 onboarding 时使用。适配自 ECC（affaan-m/ECC）。
metadata:
  origin: ECC (affaan-m/ECC, MIT)
---

# Git 工作流（ECC 适配）

版本控制最佳实践：分支策略、提交约定、合并 vs 变基、冲突解决与协作开发。

## 何时激活
- 为新项目设置 git 工作流
- 决定分支策略（GitFlow / trunk-based / GitHub flow）
- 写 commit 消息与 PR 描述
- 解决合并冲突
- 管理发布与版本标签
- 新成员 onboarding

## 分支策略

### GitHub Flow（推荐，多数项目适用）
```
main（受保护，始终可部署）
  │
  ├── feature/user-auth   → PR → 合入 main
  ├── feature/payment     → PR → 合入 main
  └── fix/login-bug       → PR → 合入 main
```
规则：`main` 始终可部署；从 `main` 开功能分支；就绪后开 PR；CI 通过并批准后合入 `main`；合入即部署。

### Trunk-Based（高节奏团队）
- 都提交到 `main` 或极短生命周期分支（≤1-2 天）。
- 功能开关隐藏未完成工作。
- CI 合入前必须通过。

### GitFlow（复杂、发布周期驱动）
```
main（生产发布）
  │
  └── develop（集成分支）
        │
        ├── feature/*
        ├── release/1.0.0  → 合入 main 和 develop
        └── hotfix/*       → 合入 main 和 develop
```
适合有固定发布节奏的企业级项目。

| 策略 | 团队规模 | 发布节奏 | 最适合 |
|------|---------|---------|--------|
| GitHub Flow | 任意 | 持续 | SaaS、web 应用、创业项目 |
| Trunk-Based | 5+ 有经验 | 每天多次 | 高节奏、功能开关 |
| GitFlow | 10+ | 计划发布 | 企业、受监管行业 |

## Commit 消息（Conventional Commits）

```
<type>(<scope>): <subject>

[可选 body]
[可选 footer]
```

| Type | 用途 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat(auth): add OAuth2 login` |
| `fix` | Bug 修复 | `fix(api): handle null response` |
| `docs` | 文档 | `docs(readme): update install guide` |
| `style` | 格式，无代码变更 | `style: fix indentation` |
| `refactor` | 重构 | `refactor(db): extract connection pool` |
| `test` | 增改测试 | `test(auth): add unit tests` |
| `chore` | 维护任务 | `chore(deps): update dependencies` |
| `perf` | 性能提升 | `perf(query): add index to users` |
| `ci` | CI/CD 变更 | `ci: add postgres service to test` |
| `revert` | 回退 | `revert: revert "feat(auth): ..."` |

### 好 vs 坏示例
- 好：`fix(api): handle null response in user endpoint` — 具体、说明修了什么。
- 坏：`fixed stuff`、`update`、`misc changes` — 无法追溯。

## 本工作区 git 纪律
- 分支 `main`，本工作区所有修改必须走 git 提交。
- 禁止破坏历史的操作（`git reset --hard`、`git push -f`）。
- 每次有意义的改动一次提交，Conventional Commits 格式。
- 系统托管目录已在 `.gitignore` 排除，不入库。

## PR 工作流
1. 分析完整 commit 历史（不只看最新一条）。
2. 用 `git diff [base]...HEAD` 查看全部改动。
3. 起草全面 PR 摘要。
4. 附测试计划。
5. 新分支用 `-u` 推送。

## 冲突解决
- 先理解双方意图再合。
- 小冲突直接解，大冲突考虑与作者沟通。
- 解决后跑测试验证。

---
**记住**：可追溯、可回退是 git 的核心价值；Commit 信息就是历史文档。
