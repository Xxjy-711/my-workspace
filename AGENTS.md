# Personal Workbench 项目规则

本项目采用 **ECC（Everything Claude Code）适配开发流程**。
ECC skill 位于 `.ecc/skills/`，首次使用前运行 `bash scripts/init-ecc.sh` 安装到本地 skill 目录。

## ECC 工作流
Plan → 实现 → Code Review → Verify → Commit → Deploy

| 阶段 | Skill | 用途 |
|---|---|---|
| 规划 | ecc-plan | 复杂功能先出实施计划 |
| 编码 | ecc-coding-standards | 命名/结构/不可变性/错误处理 |
| 自审 | ecc-code-review | 写完即审，CRITICAL/HIGH 必修 |
| 验证 | ecc-verification-loop | build/类型/lint/测试/安全/Diff |
| 提交 | ecc-git-workflow | Conventional Commits，禁止 force push |
| 安全 | ecc-security-review | 认证/输入/密钥/API 端点 |
| 测试 | ecc-tdd-workflow | 有测试运行器时走 RED/GREEN |

## 项目技术栈
- React 18 + Vite + 纯 CSS（无 Tailwind）
- Three.js（Originkit FlowerType 组件，React.lazy 懒加载）
- 部署：GitHub Pages（`npm run deploy` = gh-pages -d dist）
- 定时任务：每日 10:00 更新早报内容并重新构建部署

## 关键纪律
- **WebGL 组件必须实测**：云电脑无 GPU，用 SwiftShader 软件渲染截图验证（见下方命令），不得空口说"应该没问题"
- **主包体积**：控制在 ~160KB，three.js 必须走懒加载 chunk（`React.lazy` + `Suspense`）
- **Originkit 组件**：`src/components/originkit/botanical-text.tsx` 保持 MCP 返回原样，禁止改写
- **Conventional Commits**：`feat/fix/refactor/docs/chore(scope): subject`
- **禁止** `git reset --hard` / `git push -f`

## WebGL 实测命令（云电脑无 GPU 时用）
```bash
chromium --headless=new --no-sandbox \
  --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader \
  --disable-dev-shm-usage --virtual-time-budget=6000 \
  --screenshot=/tmp/out.png --window-size=1280,800 \
  <URL>
```
内置浏览器因启动参数含 `--disable-gpu` 无法渲染 WebGL，需用上述命令单独启动。

## 本地初始化
克隆仓库后，运行：
```bash
bash scripts/init-ecc.sh
```
将 7 个 ECC skill 安装到本地 skill 目录（默认 `.user_skills/`，可用 `--dest` 指定）。
