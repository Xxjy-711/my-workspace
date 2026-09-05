---
name: ecc-verification-loop
description: 在完成功能/较大改动、创建 PR 前、或重构之后使用，运行完整的质量门禁验证（build/类型/lint/测试/安全/Diff），并输出验证报告。适配自 ECC（affaan-m/ECC）。
metadata:
  origin: ECC (affaan-m/ECC, MIT)
---

# 验证循环（ECC 适配）

一套全面的验证系统：在任何声称「完成」之前，用真实命令验证工作产物。

## 何时使用
- 完成一个功能或较大代码改动之后
- 创建 PR 之前
- 希望确保质量门禁通过时
- 重构之后

## 验证阶段

### 阶段 1：构建验证
```bash
# 按项目实际构建命令执行，例如
npm run build 2>&1 | tail -20
```
构建失败 → 停下修复再继续。

### 阶段 2：类型检查
```bash
set -o pipefail
# TypeScript 项目
npx --no-install tsc --noEmit 2>&1 | head -30
# Python 项目
pyright . 2>&1 | head -30
```
报告所有类型错误，修复关键错误后再继续。

### 阶段 3：Lint 检查
```bash
# JS/TS
npm run lint 2>&1 | head -30
# Python
ruff check . 2>&1 | head -30
```

### 阶段 4：测试套件（带覆盖率）
```bash
npm run test -- --coverage 2>&1 | tail -50
```
报告：总测试数 / 通过 / 失败 / 覆盖率（目标 80%+）。

### 阶段 5：安全扫描
```bash
# 检查硬编码密钥（按项目语言调整）
grep -rn "sk-" --include="*.ts" --include="*.js" . 2>/dev/null | head -10
grep -rn "api_key" --include="*.ts" --include="*.js" . 2>/dev/null | head -10
# 检查生产代码里遗留的调试输出
grep -rn "console.log" --include="*.ts" --include="*.tsx" src/ 2>/dev/null | head -10
```

### 阶段 6：Diff 审查
```bash
git diff --stat
git diff HEAD~1 --name-only
```
逐个检查变更文件：
- 非预期的改动
- 缺失的错误处理
- 潜在的边界情况
- 是否把无关内容卷了进来

## 输出格式

跑完所有阶段后，产出验证报告：

```
VERIFICATION REPORT
==================
Build:     [PASS/FAIL]
Types:     [PASS/FAIL] (X errors)
Lint:      [PASS/FAIL] (X warnings)
Tests:     [PASS/FAIL] (X/Y passed, Z% coverage)
Security:  [PASS/FAIL] (X issues)
Diff:      [X files changed]
Overall:   [READY/NOT READY] for delivery
Issues to Fix:
1. ...
2. ...
```

## 使用纪律
- 用与生成路径不同的方式回读/验证，不要「文件存在/非空」就当作正确。
- 检查用户真正看到的那一层（渲染结果、真实入口、抽样重算关键数据）。
- 明确陈述验证了什么、没验证什么；绝不虚报 PASS。
- 验证通过后才能标记完成。

## 持续模式
长会话中每 15 分钟或每次较大改动后运行一次；每个函数/组件完成后、进入下一任务前设置一个检查点。

---
**记住**：hooks 在问题发生时立即捕获；本验证循环提供的是交付前的全面体检。
