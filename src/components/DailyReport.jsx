import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'K-Dense-AI / scientific-agent-skills', lang: 'Python', desc: '"把任何 AI agent 变成 AI 科学家"——177 个验证过的即用科研技能 + 100+ 科学数据库，全球 25 万+ 科学家在用，本周新增 4,549 星。', meta: 'AI科研', stat: '53.3K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '无需登录、注册或填 API Key，即可白嫖 DeepSeek V4.1 Flash、Kimi K3 等前沿模型——持续发酵，今日再涨 3,295 星。', meta: '免费AI', stat: '+3,295★' },
  { name: 'Graphify-Labs / graphify', lang: '多语言', desc: '把代码库连同文档、SQL Schema、配置和 PDF 转成可查询的知识图谱——本地确定性 AST 解析，已配 Claude Code、Cursor、Codex、Gemini CLI 的 /graphify 技能。', meta: '代码图谱', stat: '年度热榜' },
  { name: 'obra / superpowers', lang: 'TypeScript', desc: 'Agentic skills 框架 + 软件开发方法论，星数 302.5K——把"资深工程师的判断力"封装成 AI 编码代理可执行的技能包。', meta: 'Agent框架', stat: '302.5K★' },
  { name: 'NousResearch / hermes-agent', lang: '多语言', desc: '"与你一起成长的自适应 AI 代理"，星数 255.5K——NousResearch 出品的个性化智能体，越用越懂你。', meta: 'AI代理', stat: '255.5K★' },
  { name: 'anomalyco / opencode', lang: '多语言', desc: '开源终端原生编码代理，星数 218.5K——1.4% 用户密钥泄露事件后仍持续霸榜，完整技术报告待发。', meta: '编码代理', stat: '218.5K★' }
]

const aiCompanion = [
  { name: 'DeepSeek 新一轮融资：联想君联、吉利入局，聘中信证券', desc: '科创板日报 10/23：DeepSeek 新一轮融资引入多家产业及财务投资者，包括君联资本（Legend Capital）、半导体领域石溪资本以及吉利等；公司已聘请中信证券——上市进程再进一步。', meta: '融资速递', stat: 'DeepSeek' },
  { name: 'OpenAI 拟募 300 亿美元，估值下调至 1.25 万亿', desc: '腾讯新闻 10/23：OpenAI 接近完成新一轮私募融资，投前估值 1.25 万亿美元，由 Coatue 与阿联酋投资者牵头；已要求投资者本月 30 日前最终决定，条款仍在协商中。', meta: '资本动态', stat: '估值1.25万亿' },
  { name: 'Anthropic 正式提交 S-1，IPO 启动', desc: 'AIToolsRecap 10/23：Anthropic 已提交 S-1 文件——在 OpenAI 上市前最后一轮融资的同一周，AI 双雄的上市赛跑正式鸣枪。', meta: 'IPO进程', stat: 'S-1 已交' },
  { name: '免 Key 白嫖前沿模型持续发酵', desc: 'dsh-our-free-model 今日再涨 3,295 星至 35.5K——OpenCode 的 Zen 网关免费开放前沿推理，README 诚实标注"哪些真能用"，成为学生党福音。', meta: '免费生态', stat: '35.5K★' },
  { name: 'AI 科学家技能库：25 万研究者的新工具', desc: 'K-Dense-AI/scientific-agent-skills 本周新增 4,549 星——177 个验证过的科研技能覆盖生物学等领域，AI 人机协作科研从聊天走进实验室。', meta: '人机协作', stat: '177 个技能' },
  { name: '风雨潮叠加周末宅家，AI 陪伴需求上升', desc: '超强台风"蔷琵"周末影响上海，本周末减少外出——正好窝在沙发上和 AI 聊聊天、追追剧，AI 伴侣在极端天气里的陪伴价值再次凸显。', meta: 'AI伴侣', stat: '周末宅家' }
]

const lifeCards = [
  { name: '数码科技 · AI 科学家技能库火了', desc: 'K-Dense-AI/scientific-agent-skills 本周新增 4,549 星——177 个科研技能 + 100+ 科学数据库，把任何 AI agent 变成科研助手，全球 25 万+ 科学家在用。', meta: '前沿科技', stat: 'AI Scientist' },
  { name: '游戏文娱 · 台风天周末宅家追剧', desc: '超强台风"蔷琵"今天傍晚到明天风雨最明显，周日上午越过上海同纬度——户外计划全部取消，宅家补番看剧、和 AI 聊天正好。', meta: '周末预警', stat: '暴雨来袭' },
  { name: '穿搭美妆 · 暴雨天防水鞋+折叠伞', desc: '今天中雨转暴雨、19~21℃，最大小时雨强 30-40 毫米——防水鞋和大折叠伞是今天刚需；早晚微凉，薄外套别脱。', meta: '穿搭指南', stat: '暴雨 50-70mm' },
  { name: '理财职场 · DeepSeek 融资+OpenAI 估值下调', desc: 'DeepSeek 引入联想君联、吉利等产业资本并聘中信证券；OpenAI 300 亿融资投前估值 1.25 万亿美元（较此前 1.4 万亿预期下调）——AI 一级市场在回归理性。', meta: '财经职场', stat: '1.25万亿美元' },
  { name: '健康 · 暴雨天注意出行安全', desc: '上海市防汛防台风四级应急响应已启动——今天傍晚至明天尽量减少外出，远离广告牌、临时搭建物；阳台花盆提前收回，关紧门窗。', meta: '健康提醒', stat: '四级响应' }
]

const localCards = [
  { name: '上海天气 · 10月23日', desc: '中雨转暴雨，19~21℃。东北风 4-5 级沿江沿海阵风 6-7 级。AQI 优。日出06:01，日落17:14。【台风蔷琵】今年第30号超强台风今天 05 时中心位于台北东南约 405 公里洋面（14 级）；今天下午到 25 日白天影响上海，最明显时段为今天傍晚到明天——暴雨，累积 50~70 毫米、东部南部沿海 90~120 毫米、个别站点约 150 毫米，最大小时雨强 30-40 毫米；24 日夜间距上海海岸线最近约 250 公里，周日上午越过上海同纬度，风雨潮叠加。', meta: '今日天气', stat: '中雨转暴雨19~21℃' },
  { name: '本地要闻', desc: '①上海市防汛防台风四级应急响应已启动，全市进入临战状态；浦东、虹桥等 29 座机场航班或将受扰，周末出行请密切关注航班动态。②第九届进博会进入最后冲刺，11/5-10 国家会展中心举行，倒计时 13 天——台风过后迎进博。', meta: '上海资讯', stat: '四级应急响应' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天下午起暴雨台风来袭，出门带伞、早点回家 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月23日 星期五</span>
          <span>第 049 期</span>
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
          <span className="tag">今日头条</span>
          <h3>DeepSeek 引入联想君联、吉利入局并聘中信证券；OpenAI 估值下调至 1.25 万亿</h3>
          <p>AI 双雄融资赛跑：DeepSeek 拿下产业资本，OpenAI 300 亿融资投前估值 1.25 万亿、要求投资者 10/30 前拍板；Anthropic 同期正式提交 S-1。</p>
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
        <span>我的工作台 · 每日早报 · VOL.049</span>
      </footer>
    </div>
  )
}
