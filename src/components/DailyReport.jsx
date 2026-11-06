import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'heygen-com / hyperframes', lang: 'TypeScript', desc: '写 HTML 直接渲染视频、为 Agent 打造——文本即视频脚本，月增 2.26 万星、累计 7.95 万，Agent 内容生成新范式。', meta: '视频生成', stat: '79K★/月+23K' },
  { name: 'anthropics / knowledge-work-plugins', lang: 'Python', desc: 'Anthropic 官方开源知识库工作插件集，月增 8,764 星、累计 3.48 万——让 Agent 直接接入文档与知识工作流。', meta: '官方插件', stat: '35K★/月+9K' },
  { name: 'ccch1mneyyy / dsh-Go', lang: 'Dart', desc: 'DeepSeek Harness 装进口袋：手机本机运行、也能遥控电脑，单日新增近 2,000 星、累计 1.06 万。', meta: '移动端Agent', stat: '11K★/日+2K' },
  { name: 'f / prompts.chat', lang: 'JavaScript', desc: '原 Awesome ChatGPT Prompts——社区分享、发现、收集提示词，可自托管完全隐私，17.6 万星，日增约 92 星。', meta: '提示词库', stat: '176K★' },
  { name: 'openclaw / openclaw', lang: 'Python', desc: '本地运行的开源 AI 助手，5 个月冲到 GitHub 最热门仓库之一（34.6 万+ 星）；微软 Scout 个人助手公开借鉴其 Agent 工作流。', meta: '开源助手', stat: '346K★' },
  { name: 'deepseek-ai / harness', lang: 'Python', desc: 'DeepSeek Harness 开发者预览——面向 Agent 基础设施的运行时方案，登上 Hacker News 747 分、314 条讨论，不止是编程助手。', meta: 'Agent运行时', stat: 'HN 747分' }
]

const aiCompanion = [
  { name: 'DeepSeek 新一轮融资至少 800 亿元、逼近千亿，腾讯+宁德时代入局', desc: '彭博社（IT之家/Agentopia 转述）11/5：DeepSeek 新一轮融资接近完成交割，规模至少 800 亿元人民币、可能逼近 1000 亿；宁德时代与腾讯为出资最大投资方，为 2027 年初 IPO 铺路。', meta: '头条', stat: '融资近千亿' },
  { name: 'OpenAI 收购开发者工具公司 Pierre，同日挖走 Claude Code 负责人 Cat Wu', desc: '第一财经 YiMagazine 11/6：当地时间 11/4 OpenAI 宣布协议收购开发者工具初创 Pierre Computer Company；同日 Claude Code 及桌面智能体 Cowork 产品负责人 Cat Wu 离开 Anthropic、加入 OpenAI 核心产品团队。', meta: '收购挖角', stat: 'Pierre收购' },
  { name: 'Anthropic IPO 生变：投资者怀疑能否赶 11 月上市', desc: '华尔街见闻 11/6：潜在投资者质疑下周开展路演、赶在 11 月上市的可行性，要求更有吸引力估值；1.5 万亿美元估值处于预期高端，市场正急切等待其 10 月营收数据。', meta: 'IPO变数', stat: '估值分歧' },
  { name: 'OpenAI 连发 GPT-6 Cyber 安全模型与 Images 2.6', desc: '腾讯新闻/新浪财经 11/6：GPT-6 Cyber 主打安全研究、漏洞利用基准领先；Images 2.6 支持一张照片变 GIF、生图提速 50%；OpenAI 同时承诺提升数据中心建设透明度。', meta: '产品更新', stat: '双连发' },
  { name: '王慧文再押注 AI Agent 创业公司；隔夜费半暴跌 12%', desc: '新浪财经晨间速递 11/6：继 Kimi、Manus 之后，王慧文又投资 AirBuild；隔夜费城半导体指数因 AI 监管恐慌暴跌 12%，美国首家人形机器人上市公司诞生。', meta: '资本动向', stat: '板块回调' },
  { name: '周五开工：巨头并购挖角 + Agent 创业融资双线并进', desc: 'DeepSeek 拿融资铺路 IPO、OpenAI 并购挖人补产品、王慧文持续下注 Agent——个人选工具可多关注开源可自托管方案，巨头风云对日常使用影响有限。', meta: 'AI伴侣', stat: '周五加油' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 融资近千亿、OpenAI 收购 Pierre', desc: '彭博社 11/5：DeepSeek 融资至少 800 亿、腾讯与宁德时代入局；OpenAI 11/4 收购开发者工具公司 Pierre Computer 并挖来 Cat Wu——国产与海外大厂同步加码 Agent。', meta: '前沿科技', stat: '大厂加码' },
  { name: '游戏文娱 · OpenAI Images 2.6：照片变 GIF、生图提速 50%', desc: '新浪财经 11/6：OpenAI 推出 Images 2.6，支持一张照片直接转 GIF、生成速度提升 50%，做表情包和动态素材更顺手。', meta: '创作工具', stat: '生图提速' },
  { name: '穿搭美妆 · 15~20℃ 上午有雾、东北风阵风6级', desc: '今天多云、上午前局部有雾，东北风 4-5 级沿江沿海阵风 6 级——薄针织衫加轻便风衣即可，风大避免长摆裙子；雾天骑车/开车注意距离。', meta: '穿搭指南', stat: '15~20℃雾风' },
  { name: '理财职场 · AI 板块短期波动，别追高也别恐慌割肉', desc: '隔夜费半暴跌 12%、Anthropic 1.5 万亿估值遭质疑，但 DeepSeek 800 亿融资利好国产 AI 链——板块情绪波动大，定投者坚持纪律，短线注意控制仓位。', meta: '财经职场', stat: '波动加大' },
  { name: '健康 · 雾天慢行 + 秋季火险4级注意用火', desc: '上午能见度约 5km、局部轻度污染，出门戴口罩、晨练推迟到雾散后；今天火险等级 4 级易燃，厨房油烟、阳台杂物和户外烟头都要注意安全。', meta: '健康提醒', stat: '火险4级' }
]

const localCards = [
  { name: '上海天气 · 11月6日', desc: '多云，上午前局部有雾（17℃、能见度约 5km），转多云转阴，15~20℃（市区实测 15~18℃）。东北风 4-5 级、沿江沿海阵风 6 级。相对湿度 78%（区间 40%~90%）。AQI 市区优（38~51），青浦局部轻度污染（105~125）。日出06:14，日落17:02。【雾天+大风、开车慢行】；明天（11/7）阴 15~20℃ 东风4级，周日（11/8）小雨约16mm、明显降温。', meta: '今日天气', stat: '多云15~20℃雾' },
  { name: '本地要闻', desc: '①进博会进入第二天（11/5-10），虹桥国家会展中心客流与周边交通管控持续，2/17 号线高峰预留时间；②今天秋季干燥、火险等级 4 级易燃，注意阳台堆放物、户外烧烤和烟头安全。', meta: '上海资讯', stat: '进博会第2天' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周五早安，上午有雾、午后转阴，雾散后多穿件薄外套，轻松收尾本周 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月6日 星期五</span>
          <span>第 063 期</span>
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
          <h3>DeepSeek 新一轮融资至少 800 亿元、逼近千亿，腾讯与宁德时代入局，为 2027 年初 IPO 铺路</h3>
          <p>彭博社报道：融资接近完成交割，宁德时代与腾讯为最大出资方；同期 OpenAI 收购开发者工具公司 Pierre、挖走 Claude Code 负责人 Cat Wu，Anthropic 1.5 万亿 IPO 估值遭投资者质疑。</p>
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
        <span>我的工作台 · 每日早报 · VOL.063</span>
      </footer>
    </div>
  )
}
