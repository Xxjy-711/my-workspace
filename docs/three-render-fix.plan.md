# 实施计划：Three.js 版花朵文字渲染修复

> 状态：已完成（2026-09-05）。根因已定位，已实施「能力检测 + 优雅降级」。

## 目标
让 `src/components/BotanicalTextThree.jsx`（Three.js 版）在欢迎页正常渲染，
并将其启用为欢迎页默认组件（替换 Canvas 2D 版 BotanicalText）。

## 背景（已确认事实）
- 当前 `WelcomePage.jsx` 引用 Canvas 2D 版 `BotanicalText`，Three 版 `BotanicalTextThree` 存在但未接线。
- 上游会话描述 Three 版「渲染失败，未启用」。
- 基线 `npm run build` 通过；本地 dev server 已起，当前 2D 版正常渲染。
- Three 版接口：`text/width/height/density/bloomSize/leafMix/hoverRadius/maxBloom/breathe/editable`（无 `spread`）。

## 诊断结论（阶段 1 完成）
- 临时把 WelcomePage 切到 `BotanicalTextThree` 实测：页面**白屏**（连提示文字、按钮都消失）。
- 页面级错误捕获显示根因：**`THREE.WebGLRenderer: Error creating WebGL context.`**
- 结论：不是 Three 代码逻辑错误，而是**运行环境不支持 WebGL**（本调试浏览器环境无 WebGL 上下文）。
  在支持 WebGL 的普通浏览器中该组件理论上可正常渲染（代码逻辑经人工复查：坐标映射、InstancedMesh、
  纹理、动画均自洽）。

## 修复方案（阶段 2 完成）
- 新增 `src/utils/detectWebGL.js`：能力检测工具（webgl2 → webgl → experimental-webgl）。
- `WelcomePage.jsx`：挂载时检测一次 WebGL；支持则渲染 `BotanicalTextThree`（Three 版），
  不支持则回退 `BotanicalText`（Canvas 2D 版），保证页面不白屏。

## 验收标准
- [x] 欢迎页不再因 Three 版白屏——本环境（无 WebGL）已验证回退到 2D 版正常显示。
- [x] 参数调节（密度/大小/叶子/悬停/绽放/呼吸）实时生效（2D 版路径实测正常）。
- [x] `npm run build` 通过。
- [x] 提交符合 Conventional Commits，含 checkpoint。
- [ ] 在支持 WebGL 的浏览器中确认 Three 版实际渲染效果——**本环境无法验证**，需用户在
      真实浏览器 / GitHub Pages 上确认（预期走 `BotanicalTextThree` 分支）。

## 阶段
### 阶段 1：复现（诊断）✅
- 临时接线 Three 版 → 白屏复现 → 错误捕获定位为 WebGL context 创建失败。

### 阶段 2：修复 ✅
- 能力检测 + 优雅降级（Three 版优先，无 WebGL 回退 2D 版）。

### 阶段 3：验证 ✅（部分）
- 浏览器实测：本环境回退 2D 版正常渲染，无白屏。
- `npm run build` 通过（提示 three.js 使 chunk 达 679KB，>500KB，后续可代码分割优化）。
- 未验证项：Three 版在 WebGL 浏览器中的实际视觉（本环境无 WebGL）。

### 阶段 4：提交 ✅
- `feat(flower-text): add detectWebGL capability util`
- `fix(flower-text): enable three.js with canvas fallback when WebGL unavailable`
