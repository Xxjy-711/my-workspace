import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，累计 43.7 万星、月增 43.1 万，连续多周霸占 GitHub 月榜第一。', meta: '逆向工程', stat: '437K★月榜第一' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'Fair-code 工作流自动化平台，原生支持 AI 能力、可视化搭建+自定义代码、可自托管，集成超 400 个应用，累计 20.9 万星。', meta: '自动化工作流', stat: '209K★/400+集成' },
  { name: 'langchain-ai / langchain', lang: 'Python', desc: '事实标准的 Agent 工程平台，串联模型、工具调用、检索与记忆，累计 14.9 万星，第44周 AI Agent 类项目仍占上榜数一半以上。', meta: 'Agent框架', stat: '149K★' },
  { name: 'boykopovar / AnyPS5', lang: 'C++', desc: 'PS5 可执行文件自动移植到 Linux/Windows 的开源工具，月增 4.72 万星、累计 5.17 万——主机游戏跨平台移植的热门新方案。', meta: '游戏移植', stat: '52K★/月+47K' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: 'Agent 跨会话持久记忆：捕获会话行为、AI 压缩后注入未来上下文，兼容 Claude Code/OpenClaw/Codex 等，10.9 万星、9.5 千 fork。', meta: '长期记忆', stat: '109K★' },
  { name: 'anthropics / knowledge-work-plugins', lang: 'Python', desc: 'Anthropic 面向 Claude Cowork 的知识工作者插件开源仓库，配套公开 Agent Skills 技能库，让智能体直接接入办公流程。', meta: '官方插件', stat: '官方Skills' }
]

const aiCompanion = [
  { name: 'Anthropic 第三季度营收约 170 亿美元，同比暴涨约 11 倍', desc: 'DoNews 11/7：Anthropic Q3 营收约 168~170 亿美元、同比增长约 11 倍——这正是此前投资者等待的"10 月营收"关键数据，为 IPO 提供基本面支撑，但其 1.5 万亿估值仍存分歧。', meta: '头条', stat: '营收170亿' },
  { name: 'OpenAI 本轮融资目标由 300 亿下调至约 200 亿美元', desc: 'DoNews 11/1 口径：受科技股回调、AI 投资趋缓及竞品上市影响，OpenAI 将最新融资规模从 300 亿缩减至约 200 亿美元、估值约 1.25 万亿；与 Anthropic 的营收高增形成分化对照。', meta: '融资降温', stat: '目标200亿' },
  { name: 'DeepSeek 完成约 1000 亿元融资，刷新中国 AI 单轮纪录', desc: '证券时报 10/23：DeepSeek 近日完成约 1000 亿元人民币（约 150 亿美元）融资，目标由 800 亿上调至千亿；老股东宁德时代、腾讯等产业资本携资源入局。', meta: '国产融资', stat: '约1000亿元' },
  { name: 'GPT Image 2.6 上线 Lovart，主打"每次编辑一行"', desc: 'InfoQ AI 简报 11/8：GPT Image 2.6 已在 Lovart 上线，编辑方式为逐行修改，升级后可享最长 31 天不限量生成；生图工具生态继续向第三方平台扩散。', meta: '产品动态', stat: 'GPT Image 2.6' },
  { name: 'GitHub 第44周：63 个上榜仓库，AI Agent/技能类占 54%', desc: 'CSDN 趋势周报 11/6：本周 63 个有效上榜仓库中，AI Agent/技能库/垂直应用 34 个占比约 54%，编码 Agent、MCP 技能服务、长期记忆插件、行业智能体是四大主力。', meta: '开源趋势', stat: 'Agent占半数' },
  { name: '周末慢读：DeepSeek-V4-Pro 到底强在哪', desc: 'LLM 模型图鉴 11/6：DeepSeek-V4-Pro 为 MoE 架构、总参数 1.6 万亿/激活 49B、原生 100 万 Token 上下文、MIT 完全开源，SWE-bench Verified 80.6%、Codeforces 3206 分，个人本地学习可关注开源可复现优势。', meta: 'AI伴侣', stat: '开源旗舰' }
]

const lifeCards = [
  { name: '数码科技 · Anthropic 营收暴涨 11 倍、GPT Image 2.6 扩散', desc: 'DoNews 11/7：Anthropic Q3 营收约 170 亿美元同比大增；InfoQ 11/8：GPT Image 2.6 上线 Lovart 第三方平台——AI 公司营收与工具生态都在加速。', meta: '前沿科技', stat: '基本面亮眼' },
  { name: '游戏宅家 · 阴雨天正好折腾开源移植工具', desc: '周日有阵雨，适合在家：GitHub 热门 AnyPS5（5.2 万星）尝试了解主机游戏跨平台移植趋势；搭配本地游戏或经典影视，雨天不出门也轻松。', meta: '雨天娱乐', stat: '宅家指南' },
  { name: '穿搭美妆 · 15~18℃ 阵雨+傍晚阵风6级，防风防水是重点', desc: '今天阴有时有阵雨、湿度 83%、傍晚风增强到 6 级阵风 7-8 级——穿防风外套或薄风衣、配防水鞋，避免易湿的真丝长裙和单薄下装；围巾可选薄款应对傍晚降温。', meta: '穿搭指南', stat: '阵雨大风' },
  { name: '理财职场 · AI 公司开始分化，看营收别只看估值头条', desc: 'Anthropic 营收同比约 11 倍高增，OpenAI 融资目标却下调——行业从"拼估值"转向"拼基本面"；个人关注相关投资时区分一级融资传闻与实际收入，避免被头条情绪带动追涨杀跌。', meta: '财经职场', stat: '关注营收' },
  { name: '健康 · 湿冷+大风+明日降温，注意保暖防潮', desc: '今天湿度 83%~87%、傍晚阵风大，明天起明显降温到 9~12℃；居家可关窗防潮、睡前泡脚，外出避开江边风口；温差和湿冷交替易诱发感冒，备好长袖薄毛衣。', meta: '健康提醒', stat: '明日降温' }
]

const localCards = [
  { name: '上海天气 · 11月8日', desc: '阴有时有阵雨，15~18℃（实时 16℃、体感 17℃）。东到东南风 4-5 级，傍晚减弱后增强到 6 级、阵风 7-8 级。相对湿度 83%~87%。AQI 优（20~34）。日出06:15，日落17:00。【白天防雨、傍晚防风】；明天（11/9）雨水渐止、明显降温，9~12℃（官方口径12~15℃）、西北风 4 级，需添厚衣。', meta: '今日天气', stat: '阵雨15~18℃风大' },
  { name: '本地要闻', desc: '①进博会第 4 天（11/5-10），周日国家会展中心客流大、2/17 号线及周边道路客流管控明显，非必要不往虹桥方向挤；②今日傍晚到夜间风雨加大、明晨明显偏冷，夜间外出带防雨防风外套，明早出门直接换厚外套更稳妥。', meta: '上海资讯', stat: '傍晚阵风强' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周日早安，今天阴有阵雨、傍晚风变大，适合宅家慢节奏，出门记得带伞加件防风外套 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月8日 星期日</span>
          <span>第 065 期</span>
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
          <h3>Anthropic 第三季度营收约 170 亿美元、同比暴涨约 11 倍，IPO 前夜交出关键成绩单</h3>
          <p>DoNews 11/7：Anthropic Q3 营收约 168~170 亿美元、同比约 11 倍增长，回应市场对其基本面的等待；同期 OpenAI 本轮融资目标由 300 亿下调至约 200 亿美元，AI 头部公司进入"营收与估值"分化阶段。</p>
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
        <span>我的工作台 · 每日早报 · VOL.065</span>
      </footer>
    </div>
  )
}
