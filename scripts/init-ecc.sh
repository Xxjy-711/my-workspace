#!/usr/bin/env bash
# ECC 工作流一键初始化脚本
# 用法: bash scripts/init-ecc.sh [--dest <skill_dir>]
#
# 将 .ecc/skills/ 下的 7 个 ECC 适配 skill 安装到本地 skill 目录。
# 云电脑自动检测 /runtime/user_skills；本地电脑默认安装到 .user_skills/。
# 安装后请确保目标目录在 AI 助手的 skill 搜索路径中。
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC="$PROJECT_ROOT/.ecc/skills"
DEST=""
DEST_EXPLICIT=0

# ── 参数解析 ──────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dest)
      if [[ $# -lt 2 ]]; then echo "❌ --dest 需要一个路径参数"; exit 1; fi
      DEST="$2"; DEST_EXPLICIT=1; shift 2 ;;
    -h|--help)
      echo "用法: bash scripts/init-ecc.sh [--dest <skill_dir>]"
      echo "  --dest  指定 skill 安装目录（默认自动检测）"
      exit 0 ;;
    *)
      echo "❌ 未知参数: $1"; exit 1 ;;
  esac
done

# ── 自动检测目标目录 ──────────────────────────────────────
if [[ $DEST_EXPLICIT -eq 0 ]]; then
  # 优先级：云电脑 runtime 目录 > 工作区级 .user_skills > 项目级 .user_skills
  if [[ -d "/runtime/user_skills" ]] && [[ -w "/runtime/user_skills" ]]; then
    DEST="/runtime/user_skills"
  elif [[ -d "$PROJECT_ROOT/../.user_skills" ]] && [[ -w "$PROJECT_ROOT/../.user_skills" ]]; then
    DEST="$PROJECT_ROOT/../.user_skills"
  else
    DEST="$PROJECT_ROOT/.user_skills"
  fi
fi

# ── 校验源码 ──────────────────────────────────────────────
if [[ ! -d "$SRC" ]]; then
  echo "❌ 找不到 skill 源码目录: $SRC"
  echo "   请确认 .ecc/skills/ 存在于项目根目录"
  exit 1
fi

# ── 创建目标目录 ──────────────────────────────────────────
mkdir -p "$DEST"

# ── 安装 skill ────────────────────────────────────────────
echo "📦 安装 ECC skills 到: $DEST"
echo "────────────────────────────────────────"
count=0
for skill_dir in "$SRC"/*/; do
  name="$(basename "$skill_dir")"
  if [[ ! -f "$skill_dir/SKILL.md" ]]; then
    echo "⚠️  跳过 $name（缺少 SKILL.md）"
    continue
  fi
  rm -rf "$DEST/$name"
  cp -r "$skill_dir" "$DEST/$name"
  echo "✅ $name"
  count=$((count + 1))
done

# ── 校验 AGENTS.md ────────────────────────────────────────
echo "────────────────────────────────────────"
if [[ -f "$PROJECT_ROOT/AGENTS.md" ]]; then
  echo "✅ AGENTS.md 已就位（项目根目录）"
else
  echo "⚠️  未找到 AGENTS.md"
fi

# ── 完成 ──────────────────────────────────────────────────
echo ""
echo "🎉 ECC 初始化完成！"
echo "   已安装 $count 个 skill"
echo "   安装目录: $DEST"
echo ""
echo "📌 后续步骤："
echo "   1. 确保 '$DEST' 在你的 AI 助手 skill 搜索路径中"
echo "   2. 云电脑 Doubao: workspace/.user_skills/ 已自动识别"
echo "   3. 本地电脑: 如未自动识别，将该目录加入 skill 根目录配置"
echo "   4. 阅读 AGENTS.md 了解项目规则与 ECC 工作流"
