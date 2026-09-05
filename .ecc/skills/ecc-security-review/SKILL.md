---
name: ecc-security-review
description: 实现认证、处理用户输入、接触密钥、创建 API 端点、实现支付/敏感功能时使用。提供完整安全清单与模式。适配自 ECC（affaan-m/ECC）。
metadata:
  origin: ECC (affaan-m/ECC, MIT)
---

# 安全评审（ECC 适配）

确保代码遵循安全最佳实践并识别潜在漏洞。

## 何时激活
- 实现认证/授权
- 处理用户输入或文件上传
- 创建新 API 端点
- 接触密钥或凭证
- 实现支付功能
- 存储或传输敏感数据
- 集成第三方 API

## 安全清单

### 1. 密钥管理
- **绝不**在源码硬编码 API key / 密码 / token。
- 一律用环境变量或密钥管理器；启动时校验必需密钥存在。
- `.env` 等文件进 `.gitignore`；git 历史里不留密钥。
- 一旦泄漏立即轮换，并排查同类问题。

### 2. 输入校验
- 所有用户输入用 schema 校验（如 zod），白名单而非黑名单。
- 文件上传限制大小、类型、扩展名。
- 错误信息不泄漏敏感细节。

### 3. SQL 注入防护
- **绝不**拼接 SQL：`SELECT * FROM users WHERE email = '${email}'` 是危险的。
- 一律参数化查询 / ORM 正确使用。

### 4. 认证与授权
- Token 存 httpOnly cookie（而非 localStorage，防 XSS 窃取）。
- 敏感操作前**总是**先校验授权（如 admin 角色检查）。
- 数据库启用行级安全（RLS）。

### 5. XSS 防护
- 用户提供的 HTML 一律净化（DOMPurify 等）。
- 配置 CSP；不默认 `unsafe-inline` / `unsafe-eval`。

### 6. CSRF 防护
- 状态变更操作带 CSRF token；cookie 设 `SameSite=Strict`。

### 7. 限流
- 所有 API 端点限流；昂贵操作更严格。

### 8. 敏感数据暴露
- 日志不记录密码/token/卡号（脱敏，如只记卡号后四位）。
- 用户看到通用错误消息；详细错误（含 stack）只进服务端日志。

### 9. 依赖安全
- 定期 `npm audit` 等；lock 文件入库保证可复现构建；开启自动安全更新。

## 自动化安全测试示例
```python
# 测认证
def test_requires_authentication():
    assert fetch('/api/protected').status_code == 401

# 测授权
def test_requires_admin_role():
    assert fetch('/api/admin', headers={'Authorization': 'Bearer token'}).status_code == 403

# 测输入校验
def test_rejects_invalid_input():
    assert fetch('/api/users', json={'email': 'not-an-email'}).status_code == 400

# 测限流
def test_enforces_rate_limits():
    responses = [fetch('/api/endpoint') for _ in range(101)]
    assert sum(r.status_code == 429 for r in responses) > 0
```

## 部署前安全清单
- [ ] 无硬编码密钥，全部环境变量
- [ ] 所有用户输入已校验
- [ ] SQL 全部参数化
- [ ] 用户内容已净化（XSS）
- [ ] CSRF 防护开启
- [ ] 认证 Token 处理正确
- [ ] 授权角色检查到位
- [ ] 端点限流
- [ ] 生产强制 HTTPS
- [ ] 安全头配置（CSP、X-Frame-Options）
- [ ] 错误不泄漏敏感数据
- [ ] 日志无敏感数据
- [ ] 依赖无已知漏洞
- [ ] 数据库 RLS 开启
- [ ] CORS 正确配置
- [ ] 文件上传已校验
- [ ] 钱包签名已验证（若涉及区块链）

## 资源
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- 各框架官方安全文档

---
**记住**：安全不是可选项。一个漏洞可能危及整个系统；拿不准时宁严勿松。
