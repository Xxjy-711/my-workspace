import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'airi', lang: 'TypeScript', desc: '💖🧸 自托管、真正属于你的 Grok 伴侣：waifu 灵魂容器、赛博生灵，支持实时语音对话，还能玩 Minecraft/Factorio，50.1K 星。', meta: 'AI 伴侣', stat: '50.1K★' },
  { name: 'openai / openai-agents-python', lang: 'Python', desc: 'OpenAI 官方：轻量、强大的多智能体工作流框架，29.8K 星——编排 Agent 协作的 Python 首选。', meta: 'Agent 框架', stat: '29.8K★' },
  { name: 'simstudioai / sim', lang: 'TypeScript', desc: '构建、部署与监控 AI Agent 与工作流的协作空间，10 万+ 开发者使用，29.7K 星。', meta: 'Agent 平台', stat: '29.7K★' },
  { name: 'wechat-bot', lang: 'JavaScript', desc: '多平台 IM AI Agent：覆盖 Telegram/WhatsApp/Lark/微信，可接 ChatGPT/Claude/Kimi/DeepSeek/Ollama/Pi，11.4K 星。', meta: 'IM Agent', stat: '11.4K★' },
  { name: 'awesome-selfhosted', lang: '多语言', desc: '自托管软件圣经：可部署在你自有服务器上的免费网络服务与应用清单，长期霸榜自托管分类。', meta: '自托管', stat: '长期#11' },
  { name: 'obra / superpowers', lang: '多语言', desc: '编码 Agent 的开发方法论技能包，累计 295.6K 星——给 AI 装上"超级技能"。', meta: 'Agent 技能', stat: '295.6K★' }
]

const aiCompanion = [
  { name: 'OpenAI 面向全球所有 ChatGPT 用户全面上线 GPT-6', desc: '财联社/每经 10/8：GPT-6 全面取代 GPT-5.6 SOL 与 LUNA，集成 Astra 安全技术改进；Plus/Pro/Business/Enterprise 由 GPT-6 Sol 驱动、免费版与 Go 版由 GPT-6 Luna 驱动，均针对日常对话优化。', meta: '重磅发布', stat: 'GPT-6 全面上线' },
  { name: 'Anthropic 发布 Claude Haiku 5.5', desc: '凤凰网 10/8：迄今最快、成本最低且能力最强的 Haiku 模型——平均运行成本较 Haiku 4.5 下降约 75%，≤10 万 Token 的请求 API 价格降 90%。', meta: '模型发布', stat: '成本降75%' },
  { name: 'Anthropic 与 SpaceX 签署最高 845 亿美元算力协议', desc: '星知 10/8：Anthropic 在机密 IPO 文件中披露已与 SpaceX 签署最高 845 亿美元算力供应协议（2029 年前支付），较今年 5 月约 450 亿美元协议大幅扩容。', meta: '算力军备', stat: '845亿$' },
  { name: '马斯克：Grok Bot 将不再只依赖自家模型', desc: '观点网 10/7：Grok Bot 将为不同任务选择"最有可能带来最佳结果"的模型——推理可交 Claude、图片生成可用 Midjourney，界面作为统一前端按任务分派。', meta: 'Agent 路由', stat: '多模型调度' },
  { name: 'Meta Muse 适配 iPad 并新增 8 个连接器', desc: '极客公园 10/8：Muse 新增 Canva、Dropbox、Figma、QuickBooks、GitHub、Klaviyo、Zoom 等连接器；过去几周一直位居美国 App Store 免费 iPhone 应用下载榜首。', meta: 'AI 伴侣', stat: '下载榜榜首' },
  { name: 'ChatGPT 推出全新 IUI 智能用户界面', desc: '极客早知道 10/8：搭载"智能 UI"（Intelligent UI）的 GPT-6 面向全球上线，对话式交互体验全面升级。', meta: '产品更新', stat: '智能UI' }
]

const lifeCards = [
  { name: '数码科技 · GPT-6 时代开启', desc: 'OpenAI 面向全球所有用户上线 GPT-6（搭载智能 UI）；Claude Haiku 5.5 成本降 75%；Anthropic 与 SpaceX 签 845 亿美元算力协议；Grok Bot 将多模型调度；Meta Muse 适配 iPad。', meta: '数码资讯', stat: 'GPT-6 上线' },
  { name: '游戏文娱 · 大师赛进行时', desc: '劳力士大师赛激战正酣（10/5-18 旗忠网球中心）；FISE 极限运动世界巡回赛·上海站 10/15-18 西岸免票全开放；谷歌推出试验性 AI 游戏平台 Playground；苹果被曝与 LG 联合开发门铃/门锁/温控器。', meta: '文娱资讯', stat: '大师赛进行中' },
  { name: '穿搭美妆 · 入秋穿搭', desc: '今日晴到多云 17~26℃：①申城已正式入秋，秋高气爽阳光在线；②早间城郊温差大（郊区最低 12~13℃）；③湿度偏高（90%~40%）——衬衫+薄外套叠穿，紫外线中等注意防晒。', meta: '穿搭指南', stat: '17~26℃ 已入秋' },
  { name: '理财职场 · 节后开工', desc: '节后首个工作日：10/10（周六）调休上班记得调闹钟；恒生科技指数拟扩容至 50 只；OpenAI 全球上线 GPT-6，AI 产业链热度延续。', meta: '财经职场', stat: '今日开工' },
  { name: '健康 · 秋燥渐显', desc: '上海正式入秋：秋燥渐显注意补水润燥、早睡早起；早晨前后局部有雾，出行注意交通安全；寒露后昼夜温差大，洋葱式穿衣防感冒。', meta: '健康提醒', stat: '入秋润燥' }
]

const localCards = [
  { name: '上海天气 · 10月8日', desc: '晴到多云（早晨前后局部有雾）。17~26℃，偏北风转偏东风 3~4级。湿度90%~40%。AQI 优~良（实时 54）。日出05:52，日落17:31。申城已正式入秋（10/3-7 连续 5 天日平均气温达标）；早间城郊温差明显（市区徐家汇 16.4℃、崇明 11.3℃），白天最高 26℃；明日多云转阴 19~25℃。', meta: '今日天气', stat: '正式入秋 17~26℃' },
  { name: '本地要闻', desc: '①国庆长假上海接待游客 2020.54 万人次、线上线下消费 762.4 亿元（市政府 10/8）；长宁上线上海首个区级"文商旅体展绿"一站式服务平台（最多 5 天拿审批结果）；全市公园假期接待游客超 652 万人次；10/10 周六调休上班。②2026 西岸都市运动嘉年华暨 FISE 极限运动世界巡回赛·上海站 10/15-18 免票全开放；劳力士大师赛进行中；第二十五届中国上海国际艺术节 10/17-11/15 即将开幕。', meta: '上海资讯', stat: '国庆消费762.4亿' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，节后首个工作日，申城已入秋 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月8日 星期四</span>
          <span>第 035 期</span>
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
          <h3>OpenAI 全面上线 GPT-6，Claude Haiku 5.5 成本砍 75%</h3>
          <p>两大模型同日更新；Anthropic 再签 845 亿美元算力大单，GitHub 上自托管 AI 伴侣 airi 登热榜。</p>
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
        <span>我的工作台 · 每日早报 · VOL.035</span>
      </footer>
    </div>
  )
}
