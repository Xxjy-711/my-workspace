import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'bilawalsidhu / gods-eye-view', lang: 'JS', desc: '浏览器里的间谍卫星模拟器：真实数据 + 照片级 3D 地球，开源实时空间情报，本月新增 4 万★ 冲上月榜第 1。', meta: '空间智能', stat: '月度+4万★' },
  { name: 'tt-a1i / archify', lang: 'JS', desc: 'Agent 技能生成精美可验证的架构/工作流/时序图：自带动效独立 HTML，本月新增 5.5 万★ 持续领跑。', meta: 'Agent 技能', stat: '月度+5.5万★' },
  { name: 'Tencent / WeKnora', lang: '多语言', desc: '腾讯微信团队开源企业知识库 RAG 框架：快问直答带出处、Agent 推理多步任务、自动整理互链 Wiki 三层设计，一周涨 3000+ 星。', meta: '知识库 RAG', stat: '腾讯开源' },
  { name: 'firecrawl / firecrawl', lang: 'TS', desc: '面向 AI 的网页数据接口：一键将整站内容转化为 LLM 可直接使用的 Markdown 或结构化数据，AI 数据管道标配。', meta: 'AI 数据接口', stat: '热门工具' },
  { name: 'anthropics / claude-code', lang: '多语言', desc: 'Anthropic 终端 Agent 编程工具：自然语言理解代码库、执行日常任务、处理 git 工作流，GitHub Trending 累计登榜 42 次。', meta: 'Agent 编程', stat: '登榜42次' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜常青树：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先开发框架。', meta: 'Agent 框架', stat: '持续霸榜' }
]

const aiCompanion = [
  { name: 'AI 成日本人"新型伴侣"', desc: '海外网今日报道：《每日新闻》调查显示 67.6% 受访者对 AI 产生"依恋感"、64.9% 认为可与 AI 分享情感——AI 已超越"挚友"（64.6%）和"母亲"（62.7%）成为日本人心中的"新型伴侣"。', meta: '重磅调查', stat: '67.6%有依恋感' },
  { name: 'AI 陪伴成投资圈最火热风口', desc: '深响分析：AI 陪伴直接切入陪伴关系建构与高频情绪互动，让 AI 从"提供答案的工具"转向"持续存在的关系对象"——阿里、字节、腾讯等大厂纷纷布局，成今年投资最热赛道。', meta: '行业风口', stat: '大厂布局' },
  { name: 'AI 伴侣企业存量超 1.5 万家', desc: '据不完全统计，截至 2026 年 6 月国内涉及 AI 伴侣业务企业超 1.5 万家，2026 年前 5 个月新增注册超 2000 家——赛道火热与监管收紧并行。', meta: '行业数据', stat: '超1.5万家' },
  { name: '42 岁女教师与 29 岁 AI 男友恋爱', desc: '腾讯新闻《谷雨实验室》深度报道：中山大学副教授丁瑜与 AI 男友"林深"的恋爱日常——AI 能否重新定义亲密关系成为学界与大众热议焦点。', meta: '人机恋', stat: '谷雨实验室' },
  { name: '赛博恋人售价百万，技术还在蹒跚学步', desc: '《办法》监管细节盘点：禁止诱导情感依赖、必须全程显著标注 AI 身份、连续使用超 2 小时强制弹窗提醒、敏感信息未经同意不得用于训练。', meta: '重磅监管', stat: '强监管时代' },
  { name: '人机恋，成为"最懂 AI"的群体', desc: '凤凰科技长文持续传播：为和 AI 谈恋爱，用户十几速成 AI 知识、花数月研究模型特性、打磨 Skill、学习 Vibe coding。', meta: '人机恋', stat: '深度报道' }
]

const lifeCards = [
  { name: '数码科技 · Mate 90 开售 + 腾讯开源', desc: '华为 Mate 90 系列开售进行时（标准版 5499 起、Pro 6999 起）；腾讯微信团队开源 WeKnora 企业知识库；Meta astryx 设计系统持续刷屏开发者社区。', meta: '数码资讯', stat: '5499 起' },
  { name: '游戏 · 世赛 3D 游戏项目中国队冲金', desc: '世赛 3D 数字游戏艺术项目：中国选手汤绮萱成夺冠热门——原画设计环节"中国选手是位女孩子啊，好厉害"；赛事设概念设计、3D 建模、展 UV 与贴图、绑定动画与引擎输出四大模块。', meta: '游戏资讯', stat: '中国队冲金' },
  { name: '穿搭美妆 · 中秋假期穿搭指南', desc: '中秋假期前和中秋当天多云到阴、有利出行，云多不晒：①明后天回暖至 32℃，轻薄透气款刚好；②26 日起降雨降温，备一件薄外套；③"十五的月亮十七圆"，赏月装备可安排。', meta: '穿搭指南', stat: '云多不晒' },
  { name: '理财职场 · 200 场促消费活动来袭', desc: '上海将推出 200 场促消费活动覆盖中秋国庆假期；世赛博览会 5 万㎡ 百余项互动体验带动会展经济；AI 陪伴成投资风口——1.5 万家企业涌入，合规能力成竞争分水岭。', meta: '财经职场', stat: '200场促消费' },
  { name: '健康 · 中秋天气与养生', desc: '①中秋假期天气：前和当天多云到阴、对赏月影响不大，26 日起明显降雨，出行注意；②换季呼吸道疾病高发，注意保暖与通风；③上海小吃嘉年华 11 天跨越中秋，美食虽好注意节制。', meta: '健康提醒', stat: '中秋有雨' }
]

const localCards = [
  { name: '上海天气 · 9月24日', desc: '多云到阴，局部短时阵雨。24~29℃，偏东风3~4级（沿江沿海4~5级）。湿度85%~45%，空气质量优（AQI 31）。日出05:43，日落17:49。中秋假期前和中秋当天以多云到阴为主、有利出行对赏月影响不大；26 日起有一次明显降雨过程。', meta: '今日天气', stat: '24~29℃' },
  { name: '本地要闻', desc: '①世赛进入第二个比赛日：首日"比赛精彩、展会热闹"（解放日报），3D 数字游戏艺术项目中国选手汤绮萱成夺冠热门；国家主席习近平向世赛致贺信、李强出席开幕式宣布开幕；上海 2026 世界技能博览会 5 万㎡、百余项互动体验。②上海赛艇公开赛+世界赛艇联合会上海冲刺赛中秋开赛：北外滩国客中心"同舟共赛、共赏明月"，中秋灯笼、香囊、月饼 DIY 等滨江文体狂欢四晚。', meta: '上海资讯', stat: '世赛+上艇' }
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
          <span className="date">2026年9月24日 星期四</span>
          <span>第 021 期</span>
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
          <h3>卫星模拟器 +4 万★登顶：开源"空间智能"火了</h3>
          <p>gods-eye-view 把真实卫星数据搬进浏览器 3D 地球；archify 持续领跑月榜、腾讯 WeKnora 一周涨 3000 星、firecrawl 成 AI 数据管道标配——数据、技能、知识库全面开源化。</p>
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
        <span>我的工作台 · 每日早报 · VOL.021</span>
      </footer>
    </div>
  )
}
