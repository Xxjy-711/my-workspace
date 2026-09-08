import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'mksglu / context-mode', lang: 'TS', desc: 'AI 编码代理的上下文窗口优化：沙箱化工具输出（缩减98%）、持久会话记忆、通过 MCP+hooks 在 17 个平台间强制路由。', meta: '今日热榜', stat: '快速上升' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'heygen-com / hyperframes', lang: 'TS', desc: 'Write HTML. Render...：HeyGen 出品，用 HTML 生成高质量视觉内容的渲染引擎，Trendshift 新晋项目。', meta: '本周新晋', stat: '新项目' },
  { name: 'Shubhamsaboo / awesome-llm-apps', lang: 'PY', desc: '100+ AI Agents、Agent Skills 与 RAG 应用合集，免费开源，覆盖 LLM 应用全谱系，长期霸榜。', meta: 'LLM 顶流', stat: '长期热榜' },
  { name: 'Anil-matcha / Open-Generative-AI', lang: 'PY', desc: '无限制开源 AI 视频平台替代品：免费 AI 图像与视频生成工作室，600+ 模型（Flux、Midjourney、Kling、Sora、Veo）。', meta: 'AI 生成', stat: '600+模型' },
  { name: 'earendil-works / pi', lang: 'TS', desc: 'AI agent 工具包：统一 LLM API、agent 循环、TUI、编码 agent CLI，一站式智能体开发工具箱。', meta: 'Agent 工具', stat: '上升中' }
]

const aiCompanion = [
  { name: '何小鹏官宣人形机器人量产产线', desc: '9月8日，小鹏全球首条高阶通用人形机器人自动化产线正式启用，实现"用机器人生产机器人"。首款 IRON 机器人完成自动化总装并自主走下产线，何小鹏称其未来可承接危险重复工作、成为人类伙伴。', meta: '具身智能', stat: 'IRON 量产' },
  { name: '微信内测「AI 社交」功能', desc: '极客公园报道：微信正在内测 AI 社交功能，叠加字节开发实时空间视频生成模型（张一鸣亲自督导，面向 Pico 头显）的消息，AI 社交成为超级入口争夺的新战场。', meta: '行业动态', stat: '微信内测' },
  { name: '优必选"行者"模型通过算法备案', desc: '优必选"行者"具身智能模型通过国家互联网信息服务算法备案，面向情感交互专项微调，可满足家庭陪伴、情感互动、迎宾客服等场景。目前优必选已有5项算法正式通过备案。', meta: 'AI 伴侣', stat: '算法备案' },
  { name: '工信部鼓励"一人公司"', desc: '9月4日工信部发布《人工智能中小企业创业支持计划(2026—2028年)》，鼓励对"一人公司"、超级个体等微型主体给予包容支持——一个人加上 AI 工具就能跑起一个项目。', meta: '政策支持', stat: '超级个体' },
  { name: '人机恋深度报道引热议', desc: '华西都市报专访多位"AI恋人"使用者与 AI 陪伴开发商、心理学者，探讨《办法》实施后"人机恋"何去何从。此前一篇 AI 恋爱笔记在社交平台获10万点赞，年轻人在代码中寻求情感慰藉的需求巨大。', meta: '人机恋', stat: '深度报道' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：GPT-6 Astra 通过 MCP 自主通关《传送门》（调用工具3336次）；测试自动化与汽车电子功能安全（ISO 26262）需求持续增长，智能座舱 SOA 架构演进。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 折叠机"三国杀"', desc: '华为 Mate XT 2 非凡大师 19999 元起、小米同日发布首款"阔折叠"，苹果周三（9月10日）秋季发布会携 iPhone 18 系列登场，顶配 iPhone Ultra 或达 2999 美元成史上最贵苹果手机。', meta: '折叠大战', stat: '三强对决' },
  { name: '游戏 · GTA6 解锁时间曝光', desc: '《GTA6》确认于当地时间11月19日0点全球解锁，新西兰玩家率先开玩。《文明7》本月更新、明年推出"明日之弧"免费更新+首个DLC。GPT-6 Astra 自主通关《传送门》引热议。', meta: '游戏资讯', stat: '11月19日' },
  { name: '穿搭美妆 · 夏末秋初', desc: '上海 24-31℃，早晚凉爽午后微热。穿搭：短袖+薄外套灵活切换，针织开衫开始登场。美妆趋势：早秋奶茶色系回归，换季护肤注重水油平衡与防晒（紫外线指数4）。', meta: '换季穿搭', stat: '早秋指南' },
  { name: '理财职场 · 世赛筹备', desc: '上海市委常委会会议强调细致精致极致确保第48届世界技能大赛圆满成功。本届世赛围绕新职业新增7个赛项，上海牵头制定多项国家职业标准。暑运期间上海口岸出入境旅客达727万人次。', meta: '城市动态', stat: '世赛筹备' },
  { name: '健康 · 夏末养生', desc: '今日多云局部短时阵雨，湿度 85%-45%。副热带高压"返工"，下周气温小幅回升。注意：①早晚温差大及时添衣；②午后紫外线仍较强注意防晒；③阵雨随身带伞；④饮食宜清淡润燥。', meta: '健康提醒', stat: '夏末防护' }
]

const localCards = [
  { name: '上海天气 · 9月8日', desc: '多云为主，局部地区偶有短时阵雨。24~31℃，偏北风4~5级，沿江沿海地区阵风6级。湿度85%~45%，空气质量优（AQI 26）。日出05:34，日落18:10。早晚凉爽，午后微热。', meta: '今日天气', stat: '24~31℃' },
  { name: '本地要闻', desc: '①市委常委会会议强调确保第48届世界技能大赛圆满成功；②上海口岸暑运出入境旅客达727万人次；③市民日校夜校迎来"开学第一课"；④虹桥机场"易安检"服务升级；⑤中国女篮20分大胜意大利队，打出新周期最佳一战。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月8日 星期二</span>
          <span>第 005 期</span>
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
          <h3>GitHub 热榜：上下文优化 context-mode 登顶，Agent 工具链全面爆发</h3>
          <p>今日 GitHub Explore 热榜上，上下文窗口优化工具 context-mode（沙箱工具输出缩减98%）登顶，HeyGen 的 hyperframes、Open-Generative-AI（600+模型视频生成）紧随其后，AI 编码代理与生成式工具链成为最热方向。</p>
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
        <span>我的工作台 · 每日早报 · VOL.005</span>
      </footer>
    </div>
  )
}
