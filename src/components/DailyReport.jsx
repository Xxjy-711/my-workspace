import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'mattpocock / skills', lang: 'Shell', desc: 'TypeScript 布道师 Matt Pocock 开源的"工程师实战 Agent 技能集"，直接来自自己 .agents 目录，覆盖日常工程任务的规则与脚本，累计约 31.8 万星，近期趋势榜高位。', meta: 'Agent技能集', stat: '317.9K★' },
  { name: 'addyosmani / agent-skills', lang: 'JavaScript', desc: 'Google 前工程师 Addy Osmani 出品的生产级 AI 编码 Agent 技能库，强调工程规范、测试与可维护性，约 8.4 万星、9 千 fork，适合直接喂给 Claude Code / Codex。', meta: '工程技能库', stat: '84K★/9K fork' },
  { name: 'oraios / serena', lang: 'Python', desc: '面向编码 Agent 的语义检索与代码编辑 MCP 工具箱（又称 Agent IDE），用 LSP 做结构化符号理解，最近一周新增约 230 星，适合大代码库精修。', meta: 'MCP编码工具', stat: '周+230★' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，累计 43.7 万星、长期占据 GitHub AI Agent 榜前列。', meta: '逆向工程', stat: '437K★' },
  { name: 'anthropics / claude-code', lang: 'TypeScript', desc: 'Anthropic 官方终端编码 Agent，随 Fable 5.2 发布持续更新；读懂代码库、改代码、跑测试、提 PR，累计约 14.5 万星。', meta: '编码Agent', stat: '145K★' },
  { name: 'f / prompts.chat', lang: 'Markdown', desc: '原 Awesome ChatGPT Prompts 社区站，收集、分享高质量提示词，可自托管保护隐私，累计约 17.7 万星、单日新增约 237 星。', meta: '提示词库', stat: '176.7K★' }
]

const aiCompanion = [
  { name: '头条 · Anthropic 发布 Claude Fable 5.2 与 Mythos 5.2 双旗舰', desc: '网易/Agentopia 11/10：周一 Anthropic 官宣新一代旗舰，复杂编程、科研推理、图表理解与机器人控制显著提升，输出速度较上代最高提升 30%；API 价格下调 20%。Fable 5.2 可同时协调 1000 多个智能体处理长期复杂任务。', meta: '头条', stat: '双旗舰+降价20%' },
  { name: 'Fable 5.2 实测：完成此前不可行的软件迁移、解出两个黑洞开放问题', desc: 'Reportify/Agentopia 11/10：预发布测试中工程师用其完成原本做不到的大型软件迁移，并在科研侧解决两个黑洞物理开放问题；Mythos 5.2 定向开放给审核机构，强化网络安全与生命科学能力。', meta: '模型能力', stat: '1000+Agent协同' },
  { name: 'DeepSeek Harness 官宣官方插件市场与作者扶持计划', desc: '智源社区 11/9：官方博文《Growing Together with Our Plugin Community》披露 154 万日活、约 3.5 万个第三方插件；将建官方插件市场、提升插件 API 稳定性与安全，并向作者提供 token 补贴扶持。', meta: '生态扩张', stat: '154万日活' },
  { name: '字节 Seedream 5.5 转向像素级精修；中国开源模型占企业支出 89%', desc: 'RadarAI 11/10：Seedream 5.5 把 AI 作图从"抽卡"推向像素级精修与多轮编辑；同期数据显示中国开源模型拿下约 89% 的企业 AI 支出份额，国产开源生态落地速度加快。', meta: '国产动态', stat: '89%企业支出' },
  { name: 'GitHub 趋势：9 月 61% Copilot 用户跨用多个模型', desc: 'GitHub Octoverse：9 月 61% 的 Copilot 用户同时使用多个模型，请求分散在通用、深度推理规划、轻量快速三类——"主模型+专项模型组合"取代单一模型选型。', meta: '行业趋势', stat: '61%多模型' },
  { name: '理性面：5.2 仍会自作主张、堆砌规则拖慢进度', desc: '网易科技 11/10：新模型在大型任务上成本仍高，且存在自作主张、自我堆砌规则导致进度变慢等问题，开发者普遍按需搭配多个模型与工具，不会全流程交给单一旗舰。', meta: '使用建议', stat: '多模型搭配' }
]

const lifeCards = [
  { name: '数码科技 · 旗舰模型 API 降价 20%，个人可低成本试用', desc: 'Claude Fable 5.2 发布同时 API 价格下调 20%；做自动化脚本、写提示词或小工具时，可先用免费额度/小额账单验证效果，不必一上来买订阅，按调用量控制成本。', meta: '工具省钱', stat: 'API降价20%' },
  { name: '创作者 · 大模型开始自制修图剪辑小工具', desc: '网易科技 11/10：不少创作者用新模型自己搭修图、剪辑自动化工具并退订部分商业软件；个人做内容也可把重复操作写成 Agent 流程，先从一个最烦的小环节切入。', meta: '效率创作', stat: '自建小工具' },
  { name: '穿搭美妆 · 今晨下半年最冷，洋葱式穿搭早晚可脱卸', desc: '今晨市区约 9℃、郊区个位数创下半年新低，白天多云回升到 14~15℃、昼夜温差大：厚外套+薄内搭最实用，进室内能脱、出门防风；围巾手套别省，明晨郊区还有 4~7℃，比今天更冷。', meta: '穿搭指南', stat: '早晚温差大' },
  { name: '理财职场 · 岗位更看重落地整合与插件开发能力', desc: 'DeepSeek 插件生态（3.5 万第三方插件）与开源模型高企业占比说明：纯"会聊天"的竞争力在下降，能把模型接进工作流、写插件/脚本、做测试验证的人更吃香；转行求职可把 AI 工具落地案例写进简历。', meta: '职场趋势', stat: '重落地能力' },
  { name: '健康 · 冷空气末梢防晨寒，湿度偏低注意润唇保湿', desc: '今天湿度约 53%~68%、体感偏干，清晨出门加件外套护颈背；昼夜温差 5~6℃，别一早穿太少；明后两天转晴回暖、最高回到 19~20℃，适合洗晒换季衣物，本周后半段体感会明显舒服。', meta: '健康提醒', stat: '回暖在即' }
]

const localCards = [
  { name: '上海天气 · 11月10日', desc: '多云到阴，8~14℃（官方口径 8~15℃；实时 9℃、体感仅 7℃）。今晨全市最低温全面跌至个位数、市区约 9℃、郊区更低，刷新今年下半年新低；偏北风 4-5 级、沿江沿海阵风 6 级，风力较昨日减弱。相对湿度 53%~68%，AQI 优至良（42~53）。日出06:17，日落16:59。明天清晨郊区仍低至 4~7℃；冷空气过后明后天转晴、最高气温重返 19~20℃，适合洗晒。', meta: '今日天气', stat: '8~14℃今晨最冷' },
  { name: '本地要闻', desc: '①进博会今日（11/10）闭幕，闭幕日虹桥周边客流逐步回落、通勤恢复常态，晚高峰留意展馆周边收尾车流；②冷空气最后影响日：清晨最冷、白天风力减小、紫外线偏弱（2级），回暖从周四开始，可趁明后两天晴天把换季厚衣、被子晒一晒。', meta: '上海资讯', stat: '进博会闭幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周二早安，今晨是下半年最冷的一个早晨，出门把厚外套和围巾系好；白天会慢慢回暖，熬到周四就舒服啦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月10日 星期二</span>
          <span>第 067 期</span>
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
          <h3>Anthropic 发布 Claude Fable 5.2 / Mythos 5.2 双旗舰：编程科研视觉机器人全面升级、API 降价 20%</h3>
          <p>网易/Agentopia 11/10：新一代旗舰在复杂编程、科研推理、图表理解、机器人控制上提升，输出速度最高快 30%；Fable 5.2 可协调上千个智能体完成长期复杂任务，预发布阶段完成了此前不可行的大型软件迁移、解出两个黑洞物理开放问题；Mythos 5.2 定向强化网安与生命科学，API 价格下调 20%。同期 DeepSeek Harness 官宣插件市场、披露 154 万日活。</p>
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
        <span>我的工作台 · 每日早报 · VOL.067</span>
      </footer>
    </div>
  )
}
