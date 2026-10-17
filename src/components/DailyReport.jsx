import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: 'AI 逆向风暴持续：发布一周星数冲到 23.9 万、断层领先趋势榜，第二名的增量连零头都摸不着，"让一切软件变免费"。', meta: '逆向工程', stat: '一周23.9万★' },
  { name: 'esp32-iphone-agent', lang: 'C/ESP32', desc: '开仓五天 2,584 星冲进前五：7 美元的 ESP32 板子插在 iPhone 上，让手机化身可编程 AI 硬件 Agent，硬件极客狂喜。', meta: '硬件 Agent', stat: '五天2.5K★' },
  { name: 'storytold / filmcraft', lang: 'Rust', desc: '前 Square 工程师 Brandon Thomas 用 Claude Opus 5.5 + Rust 复刻 Adobe 全家桶：受够退订违约金，重写后完全免费。', meta: '视频剪辑', stat: 'Adobe平替' },
  { name: 'NationalSecurityAgency / ghidra', lang: 'Java', desc: 'NSA 的老牌逆向工程工具被这波逆向热带着涨了 6,614 星：REA 效应让"看懂二进制"成了开源圈新潮流。', meta: '逆向工具', stat: '暴涨6.6K★' },
  { name: 'obra / superpowers', lang: '多语言', desc: 'Agentic skills 框架与软件开发方法论：让 AI 编程 Agent 具备"超能力"级工程技能。', meta: 'Agent 技能', stat: '热榜前列' },
  { name: 'EbookFoundation / free-programming-books', lang: '多语言', desc: '免费编程书大全：覆盖几乎所有语言与主题的开源书单，学习常备。', meta: '学习资源', stat: '免费书单' }
]

const aiCompanion = [
  { name: 'Anthropic 600 亿美元芯片融资"北极星项目"', desc: '网易/新浪财经 10/17：向黑石提供超 10% 两位数收益率，采购约 1.5 吉瓦谷歌定制 TPU；黑石旗下基金投 90 亿美元购买以 Anthropic 未来五年芯片租赁付款为支持的债务，预计成迄今最大芯片融资交易。', meta: '资本动态', stat: '600亿美元' },
  { name: 'Anthropic 秘密游说国会，推动前沿 AI 监管法案', desc: '财联社 10/17：警告 AI 失控风险、呼吁暂停前沿 AI 研发之后，Anthropic 又私下向美国国会议员介绍监管前沿 AI 安全的法案草案——巨头开始主动影响自家技术的规则制定。', meta: '监管博弈', stat: '游说国会' },
  { name: '字节跳动洽谈采购联发科 AI 芯片', desc: '彭博社 10/17：字节跳动正洽谈采购联发科 AI 芯片用于数据中心算力搭建——国产/台湾芯片厂在大厂算力版图中的分量持续上升。', meta: '算力布局', stat: '采购联发科' },
  { name: 'REA 一周 23.9 万星：AI 逆向引爆开源圈', desc: '10/17 热榜数据：REA 发布一周星数 23.9 万、断层领先；顺带把 NSA 的 ghidra、7 美元的 ESP32 硬件 Agent 都带火了。', meta: '开源浪潮', stat: '一周23.9万★' },
  { name: '具身智能国际标准会议杭州举行', desc: '中新网 10/17：国际电信联盟具身智能标准焦点组 2026 年第三次会议在杭州举行，聚焦关键技术、国际标准与行业应用——具身智能正从预设任务走向开放环境自主感知行动。', meta: '标准建设', stat: '杭州开议' },
  { name: '长鑫存储净赚 1300 亿元', desc: '观察者网硬科技早报 10/17：国产存储龙头长鑫净赚 1300 亿元，国产芯片产业链景气度持续；同日海康威视经营现金流大跌引发关注。', meta: '国产芯片', stat: '净赚1300亿' }
]

const lifeCards = [
  { name: '数码科技 · AI 烧钱战升级', desc: 'Anthropic 600 亿美元芯片融资"北极星项目"向黑石付超 10% 收益率，成史上最大芯片融资；字节跳动洽谈采购联发科 AI 芯片；REA 一周 23.9 万星断层领先。', meta: '数码资讯', stat: '600亿芯片融资' },
  { name: '游戏文娱 · 大师赛半决赛今日开打', desc: '上海大师赛男单半决赛今天上演：16:30 兹维列夫 VS 达维多维奇-福基纳、19:00 霍达尔 VS 梅德韦杰夫（昨天 1/4 决赛霍达尔 2-1 鲁德、梅德韦杰夫 2-1 保罗），央视频直播，10/18 决出冠军。', meta: '文娱资讯', stat: '半决赛今日' },
  { name: '穿搭美妆 · 云系多防雨', desc: '今日阴天 24~28℃、东南风4级：①湿度偏高 72%、云系多，体感闷热可穿轻薄长袖；②周日后期受冷暖空气共同影响有明显降水、可能伴雷电，周末出门带伞；③AQI 良（65），可正常户外活动。', meta: '穿搭指南', stat: '24~28℃ 阴' },
  { name: '理财职场 · AI 高息举债信号', desc: 'Anthropic 愿付超 10% 收益率举债 600 亿美元采购芯片——AI 基建烧钱战进入"高息时代"；长鑫净赚 1300 亿、字节洽谈联发科芯片，国产算力产业链景气度走高。', meta: '财经职场', stat: '高息举债600亿' },
  { name: '健康 · 蔷琵加强为台风级', desc: '第 30 号台风"蔷琵"今天凌晨加强为台风级（12 级、35 米/秒），18 日傍晚或升级为超强台风，未来 5 天对我国海区无影响；周日后半段上海或迎明显降水+雷电，周末出行留意天气。', meta: '健康提醒', stat: '蔷琵12级' }
]

const localCards = [
  { name: '上海天气 · 10月17日', desc: '阴，24~28℃。东南风4级，湿度72%。AQI 良（65）。今日凌晨第30号台风"蔷琵"（CHAMPI）由强热带风暴级加强为台风级（中心附近最大风力12级、35米/秒，位于关岛塞班东南约530公里海面），18日傍晚或升级为超强台风，21日前向西偏北移动、未来5天对我国海区无影响；上海双休日云系较多，周日后期受冷暖空气共同影响有明显降水并可能伴雷电，气温随后下降。', meta: '今日天气', stat: '24~28℃ 云系多' },
  { name: '本地要闻', desc: '①上海大师赛男单半决赛今日开打：16:30 兹维列夫 VS 达维多维奇-福基纳、19:00 霍达尔 VS 梅德韦杰夫（昨日1/4决赛：霍达尔 2-1 胜鲁德、梅德韦杰夫 2-1 胜保罗，四强全部产生），央视频直播，明日（10/18）决出冠军。②第九届进博会 11/5-10 国家会展中心举办、虹桥论坛同期，4142 家境外企业参展，社会观众报名火热进行中。', meta: '上海资讯', stat: '大师赛半决赛' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周六云系多、周日或有雷雨 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月17日 星期六</span>
          <span>第 044 期</span>
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
          <h3>Anthropic 600 亿美元芯片融资，AI 烧钱战升级</h3>
          <p>"北极星项目"向黑石付超 10% 收益率采购谷歌 TPU；字节洽谈联发科芯片；REA 一周 23.9 万星断层领先。</p>
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
        <span>我的工作台 · 每日早报 · VOL.044</span>
      </footer>
    </div>
  )
}
