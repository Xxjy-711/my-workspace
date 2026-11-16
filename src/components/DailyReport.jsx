import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'google / elephant-goldfish-model', lang: 'Python', desc: '约 1.92 万星、周新增约 5.5K：谷歌开源的 Agent 协作插件，面向用 AI 智能体共同设计、评审软件的工作流，可把设计与代码评审环节交给 Agent 辅助完成。', meta: 'Agent 评审', stat: '19.2K★/周+5.5K' },
  { name: 'vercel-labs / agent-browser', lang: 'Rust', desc: '约 5.12 万星、周新增约 4.6K：Vercel Labs 出品的 Agent 浏览器，用 Rust 编写，供智能体自动打开页面、抓取与操作网页内容，是 Agent 自动化链路里的浏览器端组件。', meta: 'Agent 浏览器', stat: '51.2K★/周+4.6K' },
  { name: 'alibaba / open-code-review', lang: 'Go', desc: '约 5.15 万星、单日新增约 893：阿里开源的代码评审工具，以 Go 编写，面向工程化的自动化代码审查，可接入 CI 流程辅助发现改动问题。', meta: '代码评审', stat: '51.5K★/日+893' },
  { name: 'ChromeDevTools / chrome-devtools-mcp', lang: 'TypeScript', desc: '约 5.63 万星、单日新增约 664：Chrome 官方开发者工具的 MCP 接入，让本地 Agent 通过模型上下文协议直接调用 DevTools 调试、检查页面与性能。', meta: 'MCP 调试', stat: '56.3K★/日+664' },
  { name: 'anthropics / skills', lang: 'Python', desc: '约 19.46 万星、周新增约 6.2K：Anthropic 官方维护的 Agent 技能库，收录可被智能体加载复用的预置技能与工具定义，是 Claude 生态 skills 机制的参考实现。', meta: 'Agent 技能库', stat: '194.6K★/周+6.2K' },
  { name: 'cloudflare / security-audit-skill', lang: 'JavaScript', desc: '约 7.27 万星、月新增约 43.2K：Cloudflare 开源的编码 Agent 安全审计技能，面向代码改动后的安全检查与风险提示，可作为 Agent 工作流里的安全关卡。', meta: '安全审计', stat: '72.7K★/月+43.2K' }
]

const aiCompanion = [
  { name: '头条 · LangChain 完成 3 亿美元 C 轮，估值 30 亿美元', desc: '新浪财经/头条 11/16、Global1 与 ZDNET 同日报道：AI Agent 开发与管理平台 LangChain 宣布完成 3 亿美元 C 轮融资，估值达 30 亿美元，一年估值翻倍有余；本轮由 Alphabet 旗下 CapitalG 领投，GIC、DFJ Growth、IVP、Sapphire Ventures 等参投，资金投向 Agent 开发与编排基础设施。', meta: '融资动态', stat: '30 亿美元估值' },
  { name: 'Mirendil 完成 10 亿美元 A 轮，打造 AI 研究 Agent', desc: 'Pomegra 11/16：AI 研究 Agent 初创 Mirendil 于 11/12 完成 10 亿美元 A 轮融资，由 Kleiner Perkins 与 Clearlake Capital 联合领投；方向是让小团队借助智能体完成 AI 研究工作，此前已完成 2 亿美元种子轮。', meta: '研究 Agent', stat: '10 亿美元 A 轮' },
  { name: '国产旗舰集中上新，模型调用连续 28 周领跑', desc: '网易 11/16：OpenRouter 数据显示 11 月 2-8 日当周国产模型调用 116 万亿 Token，环比继续增长；国产旗舰集中上新，阿里上线 Qwen4-Max 预览版，百度发布文心 5.5 Flash Preview，商业化与资本化提速，带动 AI 应用与工程岗位情绪。', meta: '国产模型', stat: '116 万亿 Token/周' },
  { name: '智谱 glm-5.2 长程编码旗舰开源，支持 1M 上下文', desc: '火山方舟公告 11/11：智谱面向长程自主编码场景的旗舰开源模型 glm-5.2 上线，强化大型代码库工程、长程任务规划与工具协同，多个榜单取得开源第一，支持真正可用的 1M 上下文，可一次性承载项目级工程。', meta: '开源编码模型', stat: '1M 上下文' },
  { name: 'GPT-5.6 家族更新；R2T2 开源流式语音识别', desc: 'NavXD 模型索引 11/15 更新：GPT-5.6 家族包含 Sol、Terra、Luna 等型号；另有开源模型 R2T2，采用稳定前缀的流式语音识别方案，可用于本地或实时转写链路，语音方向值得持续关注。', meta: '模型索引', stat: '流式 ASR' },
  { name: 'OpenMausBot：开源 Grok Bot 替代，自带虚拟机供 Bot 使用', desc: 'open-repo 新星榜：milind-soni/OpenMausBot 约 2.28 万星、周新增约 6.4K，定位开源版 Grok Bot 替代方案，内置一台可供机器人操作的虚拟机，把智能体的代码执行与环境隔离在独立沙箱里。', meta: '开源 Bot', stat: '22.8K★/周+6.4K' }
]

const lifeCards = [
  { name: '数码科技 · Agent 浏览器与 MCP 调试工具本周走热', desc: 'agent-browser 用 Rust 做 Agent 自动浏览，chrome-devtools-mcp 让智能体直接调用 DevTools 调试页面，open-code-review 把代码评审接入 CI。想搭个人 Agent 工具流，可以先从 MCP 接入和技能复用入手，不必自己重造浏览器端和评审环节。', meta: 'Agent 工具链', stat: 'MCP 接入' },
  { name: '游戏 · 云顶 S19 三费卡公布，本周两款 PC 新作上线', desc: '腾讯新闻 11/16：云顶之弈第 19 赛季「棱彩音乐盛典」公布卡莎、加里奥、德莱文等 16 张三费卡，预计 12 月 3 日登正式服；《铁匠大师》1.0 正式版 11 月 19 日上线，弹幕肉鸽《虚空收割者》已登 Steam，休闲档可蹲折扣。', meta: '本周新游', stat: 'S19·12/3 上线' },
  { name: '穿搭美妆 · 周一多云转阴，早晚凉叠穿为主', desc: '周一多云转阴、13~18℃，东北风 2 级：白天加一件针织或薄外套即可，早晚 13~14℃ 偏凉，通勤建议叠穿方便脱卸；夜间湿度升到 80% 以上，底妆以持妆为主，长发注意防潮毛躁，护肤侧重保湿。', meta: '周一穿搭', stat: '13~18℃ 叠穿' },
  { name: '理财职场 · Agent 编排层持续获资本押注，求职看落地付费', desc: 'LangChain 3 亿美元 C 轮、Mirendil 10 亿美元 A 轮，资本继续押注 Agent 编排与研究智能体；国产模型集中上新催化应用、测试与多模态岗位。看机会仍优先选现金流健康、有真实付费落地的公司，模型侧发布密集也可作为求职方向参考。', meta: '职场财经', stat: 'Agent 融资热' },
  { name: '健康 · 本周阶梯式降温，18-19 日最低 6℃ 注意添衣', desc: '今日平稳，17 日 11~16℃，18 日阴 6~14℃、19 日多云 6~11℃ 西北风 4 级，昼夜温差加大。呼吸道和关节敏感人群早晚注意保暖、可备薄口罩；居家可先把厚外套翻出来，周中降温前完成换季收纳。', meta: '健康提醒', stat: '后段降温至 6℃' }
]

const localCards = [
  { name: '上海天气 · 11月16日', desc: '多云转阴，13~18℃（实时 17℃、体感 17℃，午后最高 18℃）。东北风 2 级，夜间转偏北风 2 级。相对湿度 59%~93%，实时 65%；AQI 34 优，能见度约 13.1 公里。日出06:22，日落16:56。明天阴 11~16℃、西北风 2 级、湿度 72%、AQI 45 优；18 日阴 6~14℃、西北风 3 级。', meta: '今日天气', stat: '13~18℃ 多云转阴' },
  { name: '本地要闻', desc: '①周一多云转阴、全天无降水，通勤路况平稳，早晚偏凉，出门加件外套；②本周气温阶梯式下滑，18-19 日最低 6℃、西北风加大，提前备好厚外套；夜间湿度偏高，衣物晾晒尽量安排在白天，注意阳台物品防风。', meta: '上海资讯', stat: '周中降温' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周一早安，今天多云转阴、13~18℃，东北风 2 级、空气优；早晚偏凉通勤叠穿，本周后段降温明显，记得提前添衣 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月16日 星期一</span>
          <span>第 073 期</span>
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
          <h3>LangChain 3 亿美元 C 轮估值 30 亿；Mirendil 10 亿美元 A 轮做研究 Agent；国产旗舰集中上新；智谱 glm-5.2 开源支持 1M 上下文</h3>
          <p>LangChain 完成 3 亿美元 C 轮、估值 30 亿美元，CapitalG 领投；Mirendil 拿下 10 亿美元 A 轮打造 AI 研究 Agent。模型侧国产旗舰集中上新，Qwen4-Max 预览版、文心 5.5 Flash Preview 上线，OpenRouter 当周国产模型调用 116 万亿 Token、连续 28 周领跑；智谱 glm-5.2 长程编码旗舰开源、支持 1M 上下文。开源项目侧谷歌 elephant-goldfish、Vercel agent-browser、阿里 open-code-review 等 Agent 工具持续走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.073</span>
      </footer>
    </div>
  )
}
