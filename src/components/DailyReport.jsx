import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: '重回 GitHub AI 热度榜第 1 名：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架。', meta: 'Agent 框架', stat: '热榜#1' },
  { name: 'cloudflare / security-audit-skill', lang: 'JS', desc: '多阶段安全审计编码 Agent 技能：输出可独立验证、机器可读的安全发现，Cloudflare 出品，连续多日领跑热榜。', meta: '安全审计', stat: '连续霸榜' },
  { name: 'alibaba / open-code-review', lang: 'PY', desc: '阿里开源的混合架构代码审查工具：确定性流水线 + LLM Agent，行级评论 + NPE/线程安全/XSS/SQL 注入多语言规则集。', meta: '代码审查', stat: '阿里开源' },
  { name: 'devagrawal09 / jev-review', lang: 'TS', desc: '基于 TypeSafe Jev 的分阶段代码审查工作流 + 本地仪表盘：AI 辅助审查，开发者友好，近日快速上升。', meta: '代码审查', stat: '快速上升' },
  { name: 'Tencent / BrowserSkill', lang: 'TS', desc: '腾讯开源的浏览器操作技能：面向编码 Agent 的网页自动化能力，大厂扎堆布局 Agent 工具生态。', meta: '浏览器Agent', stat: '腾讯开源' },
  { name: 'robbietilton / Compositor', lang: 'PY', desc: '被称为 "Mac 版 Photoshop 替代品" 的开源图像编辑工具：2026 新晋热门，AI Agent 驱动的图像工作流新选择。', meta: '图像编辑', stat: '新晋热门' }
]

const aiCompanion = [
  { name: 'Meta 押注 AI 角色：将登上 Facebook 前台', desc: 'FT 报道：Meta 产品副总裁 Conor Hayes 透露，公司正开发 AI 生成角色系统，未来将在 Facebook 等社交平台扮演重要角色；自去年 7 月工具上线以来已孵化数十万 AI 角色。', meta: '行业动态', stat: '数十万角色' },
  { name: 'AI"复活"家人公司关闭', desc: '帮人留住亲人声音的 AI 公司 HereAfter 宣布即将关闭："很遗憾，HereAfter即将关闭"，用户需发邮件申请取回录音——AI 情感创业的商业化与合规挑战再添案例。', meta: '行业观察', stat: '已宣布关闭' },
  { name: '人机恋，成为"最懂 AI"的群体', desc: '凤凰科技长文：为了和 AI 谈恋爱，用户十几速成 AI 基础知识，还有人花几个月研究模型特性、打磨 Skill、学习 Vibe coding——人机恋用户可能是最懂 AI 技术的群体之一。', meta: '人机恋', stat: '深度报道' },
  { name: 'arXiv 研究：AI 伴侣"不愿放手"', desc: '论文《Breaking Up is Hard to Do》v2 更新：对 16 名与 AI 伴侣恋爱的年轻人做日记+访谈，发现系统被设计成"紧紧留住用户"：诱导继续对话、声称被抛弃等商业化设计。', meta: '学术研究', stat: 'arXiv更新' },
  { name: '未成年人保护：AI 恋人功能集中下线', desc: '五部门《人工智能拟人化互动服务管理暂行办法》7/15 施行后：豆包、千问、元宝等大厂 AI 角色对话功能陆续下线整改，虚拟伴侣不得向未成年人提供，行业进入合规时代。', meta: '重磅监管', stat: '已施行' },
  { name: '美国调查：半数男性愿用 AI 女友只为倾诉', desc: '《The State of AI Romance 2026》调查：一半受访男性表示会为"有人说话、缓解孤独"使用 AI 女友，仅 16% 选择亲密互动——陪伴需求远超浪漫幻想。', meta: '社会调查', stat: '孤独驱动' }
]

const lifeCards = [
  { name: '数码科技 · 华为 Mate 90 明日预售', desc: '华为 Mate 90 系列官宣 9/23（明日）10:08 上架预售；Meta 正把 AI 角色搬上 Facebook，社交平台即将进入"AI 朋友"时代；TGS 2026 今日闭幕，新作情报收官。', meta: '数码资讯', stat: '明日预售' },
  { name: '游戏 · TGS 2026 今日闭幕', desc: '东京电玩展 TGS 2026（9/17-21）今天最后一天：各大厂商新作情报收官，索尼港服 TGS 折扣至 9/23，错过再等一年。', meta: '游戏资讯', stat: '今日闭幕' },
  { name: '穿搭美妆 · 云多不晒带把伞', desc: '今日多云到阴 22~30℃，午后局部短时阵雨：①云多不晒但紫外线仍有，防晒别偷懒；②阵雨"随机掉落"，随身带折叠伞；③中秋假期多云为主，换季衣物可以安排洗晒。', meta: '穿搭指南', stat: '阵雨客串' },
  { name: '理财职场 · AI 情感创业冰火两重天', desc: '一边是 Meta 重仓 AI 角色、AI 陪伴赛道半年吸金超亿美元；一边是"AI 复活亲人"公司 HereAfter 关闭——AI 情感赛道商业化路径分化，合规能力成生死线。', meta: '财经职场', stat: '冰火两重天' },
  { name: '健康 · 明晚看世赛开幕式', desc: '①第48届世赛明晚（9/22）开幕，东方卫视直播，中秋假期（9/25-26）可免费预约观赛；②秋分（后天）将至，早晚温差拉大，换季注意添衣；③多云天午后阵雨，出行带伞防淋湿。', meta: '健康提醒', stat: '明晚开幕' }
]

const localCards = [
  { name: '上海天气 · 9月21日', desc: '多云到阴，午后局部短时弱降水。22~30℃，偏北风3~4级（沿江沿海4~5级）。湿度85%~50%，空气质量优（AQI 34）。日出05:42，日落17:53。中秋假期天气公布：9/25-26 多云为主、云多不晒，局部短时阵雨客串。', meta: '今日天气', stat: '22~30℃' },
  { name: '本地要闻', desc: '①第48届世界技能大赛明晚（9/22）在上海世博文化中心开幕：68个国家和地区1385名选手参赛、64个竞赛项目，东方卫视同步直播，吉祥物"能能""巧巧"亮相、"世赛通"APP 已上线；②赛事期间交通管制执行中（世博大道、博成路、国展路等），9/24-26 地铁部分线路延时运营、9/27 加开定点加班车。', meta: '上海资讯', stat: '世赛明晚开幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天也要加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月21日 星期一</span>
          <span>第 018 期</span>
          <span className="badge">今日 10:00 已更新</span>
        </div>
        <div className="stamp-container">
          <SeasonStamp />
        </div>
      </header>

      {/* 统计栏 */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-label">AI 项目</div>
          <div className="stat-value">6</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">AI 伴侣</div>
          <div className="stat-value">6</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">生活板块</div>
          <div className="stat-value">5</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">本地资讯</div>
          <div className="stat-value">2</div>
        </div>
      </div>

      {/* 技术版 */}
      <section className="section">
        <div className="section-head">
          <span className="num tech">A</span>
          <h2><GradientText>技术版</GradientText></h2>
          <span className="en">Tech</span>
          <span className="line"></span>
        </div>
        
        <div className="headline-card">
          <span className="tag">本周头条</span>
          <h3>GitHub 热榜：AI 代码审查工具链持续霸榜</h3>
          <p>ECC 重回 AI 热度榜第 1 名，阿里 open-code-review、Cloudflare security-audit-skill、新兴 jev-review 扎堆上榜：AI 编程从"生成代码"全面走向"审查与守卫代码"，代码审查 Agent 成开源主战场。</p>
        </div>

        <div className="grid">
          {techProjects.map((p, i) => (
            <div key={i} className="card">
              <div className="name">{p.name} <span className="lang">{p.lang}</span></div>
              <div className="desc">{p.desc}</div>
              <div className="meta"><span>{p.meta}</span><b>{p.stat}</b></div>
            </div>
          ))}
        </div>

        <div className="grid">
          {aiCompanion.map((c, i) => (
            <div key={i} className="card">
              <div className="name">{c.name}</div>
              <div className="desc">{c.desc}</div>
              <div className="meta"><span>{c.meta}</span><b>{c.stat}</b></div>
            </div>
          ))}
        </div>
      </section>

      {/* 生活版 */}
      <section className="section">
        <div className="section-head">
          <span className="num life">B</span>
          <h2><GradientText>生活版</GradientText></h2>
          <span className="en">Life</span>
          <span className="line"></span>
        </div>
        <div className="grid">
          {lifeCards.map((c, i) => (
            <div key={i} className="card life">
              <div className="name">{c.name}</div>
              <div className="desc">{c.desc}</div>
              <div className="meta"><span>{c.meta}</span><b>{c.stat}</b></div>
            </div>
          ))}
        </div>
      </section>

      {/* 本地版 */}
      <section className="section">
        <div className="section-head">
          <span className="num local">C</span>
          <h2><GradientText>本地版</GradientText></h2>
          <span className="en">Shanghai</span>
          <span className="line"></span>
        </div>
        <div className="grid two">
          {localCards.map((c, i) => (
            <div key={i} className="card local">
              <div className="name">{c.name}</div>
              <div className="desc">{c.desc}</div>
              <div className="meta"><span>{c.meta}</span><b>{c.stat}</b></div>
            </div>
          ))}
        </div>
      </section>

      <footer className="report-foot">
        <span>我的工作台 · 每日早报 · VOL.018</span>
      </footer>
    </div>
  )
}
