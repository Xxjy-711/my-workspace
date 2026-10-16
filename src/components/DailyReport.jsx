import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '发布不到一周星数冲上 12 万、登顶趋势榜：AI 逆向让"一切软件变免费"——从二进制读懂软件到重写整套商业产品。', meta: '逆向工程', stat: '一周12万★' },
  { name: 'obra / superpowers', lang: '多语言', desc: 'Agentic skills 框架与软件开发方法论：让 AI 编程 Agent 具备"超能力"级工程技能，10/16 冲上热榜 #12。', meta: 'Agent 技能', stat: '热榜#12' },
  { name: 'storytold / filmcraft', lang: 'Rust', desc: '前 Square 工程师 Brandon Thomas 用 Claude Opus 5.5 + Rust 复刻 Adobe 全家桶：受够退订违约金，重写后完全免费。', meta: '视频剪辑', stat: 'Adobe平替' },
  { name: 'NousResearch / hermes-agent', lang: 'Python', desc: '"The agent that grows with you"——与你共同成长的 Agent 框架，Nous 研究院出品，热榜 #18。', meta: 'Agent 框架', stat: '热榜#18' },
  { name: 'public-apis / public-apis', lang: '多语言', desc: '免费 API 大全常青榜：数千个无需认证即可调用的公共接口合集。', meta: 'API 合集', stat: '免费API' },
  { name: 'EbookFoundation / free-programming-books', lang: '多语言', desc: '免费编程书大全：覆盖几乎所有语言与主题的开源书单，学习常备。', meta: '学习资源', stat: '免费书单' }
]

const aiCompanion = [
  { name: '库克确认：苹果 AI 国行本月推出', desc: '爱范儿早报 10/16：库克确认苹果 AI 国行版本月正式上线，国内苹果用户即将用上系统级 AI 能力；特努斯同日表示"AI 不会让 iPhone 消失"。', meta: '苹果动态', stat: '本月推出' },
  { name: 'Meta 发布 8160 亿参数开源模型，联手苹果本地部署', desc: '财经网/每经 10/16：Meta 开放 Muse Spark 权重供开发者下载二次修改，保留最先进技术闭源；8160 亿参数开放权重模型与苹果合作实现本地部署，首席 AI 官称"最强模型原则上不开源"。', meta: '开源大模型', stat: '8160亿参数' },
  { name: 'Anthropic 估值预期承压：或下调至 1.5 万亿美元以下', desc: '每经 10/16：Anthropic Q3 营收 168 亿美元、环比增约 45%，但低于 Q2 超 140% 的增速；部分投资者认为 IPO 估值预期应从约 2 万亿美元下调至 1.5 万亿美元以下。', meta: '估值博弈', stat: '增速放缓' },
  { name: 'REA 一周 12 万星：AI 逆向让一切软件变免费', desc: '36氪 10/16：REA 发布不到一周星数冲到 12 万以上、登顶趋势榜；前 Square 工程师用 Claude Opus 5.5 + Rust 开源复刻 Adobe 全家桶七件套，闭源软件围墙加速坍塌。', meta: '开源浪潮', stat: '12万+星' },
  { name: '无问芯穹完成 23 亿元 C 轮，累计融资创纪录', desc: 'GMT EIGHT 10/16：AI 原生基础设施公司无问芯穹完成 23 亿元 C 轮融资，成立以来累计融资 43 亿元，单轮与累计金额均创国内纪录。', meta: '国产算力', stat: '累计43亿元' },
  { name: 'Ramp 完成 18.5 亿美元融资，估值 600 亿美元', desc: '爱范儿/TechCrunch 10/16：企业 AI 支付平台 Ramp 新一轮 18.5 亿美元、估值 600 亿美元，较 6 月 440 亿美元估值大涨；Dragoneer、Thrive、Founders Fund 等领投。', meta: '资本动态', stat: '估值600亿美元' }
]

const lifeCards = [
  { name: '数码科技 · 苹果 AI 落地国行', desc: '苹果 AI 国行本月推出、Meta 8160 亿参数开源模型联手苹果本地部署——iPhone 的 AI 时代本周正式开启；Ramp 600 亿美元估值领跑企业 AI 支付。', meta: '数码资讯', stat: '苹果AI国行' },
  { name: '游戏文娱 · GTA6 宣传片发布', desc: '《GTA6》全新宣传片发布引爆玩家圈；大师赛四强出炉：兹维列夫 6-4/6-4 胜德米纳尔时隔七年重返四强，福基纳因对手伤退"光速下班"，两人会师半决赛。', meta: '文娱资讯', stat: 'GTA6宣传片' },
  { name: '穿搭美妆 · 风大带件外套', desc: '今日多云到阴局部短时小雨 22~26℃：①东南风 3-4 级、上午起增大至 4-5 级阵风 6 级、沿江沿海 5 级阵风 6-7 级；②湿度 80%~45%，风大发型易乱，可备帽子；③短时小雨可能来，随身带伞。', meta: '穿搭指南', stat: '22~26℃ 大风' },
  { name: '理财职场 · AI 估值大博弈', desc: '周五收官；Anthropic 增速放缓引发估值下调预期（2 万亿→1.5 万亿美元以下）；无问芯穹 C 轮 23 亿创纪录；创梦天地配售 5663 万港元、半数投向 AI 智能体研发。', meta: '财经职场', stat: '估值下调博弈' },
  { name: '健康 · 台风蔷琵生成', desc: '第 30 号台风"蔷琵"昨生成，未来 5 天对我国海区无影响、18 日或加强为超强台风；18 日前气温逐日上升最高 30℃ 左右，18 日夜起冷空气+降雨降温、周日后期明显降水或伴雷电，注意防范。', meta: '健康提醒', stat: '周日或有雷雨' }
]

const localCards = [
  { name: '上海天气 · 10月16日', desc: '多云到阴，局部短时小雨。22~26℃，东南风3-4级、上午起增大至4-5级阵风6级、沿江沿海5级阵风6-7级。湿度80%~45%。AQI 优（实时 26）。日出05:56，日落17:23。第30号台风"蔷琵"（CHAMPI，源老挝）15日下午生成，未来5天对我国海区无影响、18日或加强为超强台风、路径西行；18日前气温逐日上升最高30℃左右；18日夜-19日冷空气降雨降温，20日前后再一波冷空气+降雨降温大风，周日后期明显降水或伴雷电。', meta: '今日天气', stat: '22~26℃ 风渐强' },
  { name: '本地要闻', desc: '①第九届进博会筹备基本就绪：今日（10/16）国新办举行发布会介绍——11/5-10 国家会展中心举办、虹桥论坛同期，162 个国家/地区和国际组织参与，4142 家境外企业参展，整体面积首次超 44 万平方米。②上海大师赛四强出炉：头号种子兹维列夫 6-4、6-4 击败德米纳尔时隔七年重返四强，福基纳因热亚伤退晋级，兹维列夫 VS 福基纳会师半决赛。', meta: '上海资讯', stat: '进博会4142家参展' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周五风大阵雨、记得带伞 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月16日 星期五</span>
          <span>第 043 期</span>
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
          <h3>苹果 AI 国行本月推出，Meta 开源 8160 亿参数模型</h3>
          <p>库克确认国行 AI 本月上线并与 Meta 联手本地部署；REA 一周 12 万星、Anthropic 估值博弈、无问芯穹 23 亿 C 轮。</p>
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
        <span>我的工作台 · 每日早报 · VOL.043</span>
      </footer>
    </div>
  )
}
