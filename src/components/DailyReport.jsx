import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，累计 43.7 万星、月增 43.1 万，持续霸榜 GitHub 月榜第一。', meta: '逆向工程', stat: '437K★/月+431K' },
  { name: 'boykopovar / AnyPS5', lang: 'C++', desc: 'PS5 可执行文件自动移植到 Linux/Windows 的开源工具，月增 4.72 万星、累计 5.17 万——主机游戏跨平台移植新选择。', meta: '游戏移植', stat: '52K★/月+47K' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: '跨会话持久上下文——捕获 Agent 会话行为、AI 压缩后注入未来，兼容 Claude Code/OpenClaw/Codex 等，10.9 万星、9.5 千 fork。', meta: '持久记忆', stat: '109K★' },
  { name: 'anthropics / knowledge-work-plugins', lang: 'Python', desc: 'Anthropic 面向 Claude Cowork 的知识工作者插件开源仓库，并配套公开 Agent Skills 技能库，让智能体接入真实办公流程。', meta: '官方插件', stat: '官方开源' },
  { name: 'tensorflow / tensorflow', lang: 'Python', desc: 'Google 开源机器学习框架，Apache-2.0 协议，累计 20.1 万星、日增约 39 星——教学与工业部署的常青底座。', meta: 'ML框架', stat: '201K★' },
  { name: 'openclaw / openclaw', lang: 'Python', desc: '本地运行的开源 AI 助手，5 个月冲到 GitHub 最热门仓库之一（34.6 万+ 星）；微软 Scout 个人助手公开借鉴其 Agent 工作流。', meta: '开源助手', stat: '346K★' }
]

const aiCompanion = [
  { name: 'OpenAI 以 1.25 万亿美元估值再融 110 亿美元，阿联酋 MGX 领投', desc: '网易 AI 早报 11/7、TechCrunch 11/6：阿联酋投资者集团（含 MGX）预计成为本轮最大投资方、承诺数十亿美元；软银与现有投资方 Coatue 拟各投数亿美元，为 IPO 继续储备弹药。', meta: '头条', stat: '估值1.25万亿' },
  { name: 'Anthropic IPO 估值分歧：1.5 万亿美元仍被嫌贵', desc: '路透社 11/6、IT之家 11/7：部分潜在投资者认为 1.5 万亿美元估值偏高、要求更有吸引力定价；Anthropic 已提交 S-1 招股书但拒绝就估值疑虑置评，市场等待 10 月营收数据。', meta: 'IPO分歧', stat: 'S-1已提交' },
  { name: '谷歌拟投 170 亿美元建设首座怀俄明州数据中心', desc: '网易 AI 早报 11/7：谷歌将投资 170 亿美元在美国怀俄明州建设其首座数据中心，叠加 OpenAI 融资加码，北美 AI 算力基建继续扩张。', meta: '算力基建', stat: '170亿美元' },
  { name: 'OpenAI 已秘密提交招股书，目标 2027 年上市', desc: 'DoNews 综合：OpenAI 此前已秘密递交上市申请、目标 2027 年 IPO；本轮融资估值区间在 1.25~1.4 万亿美元，与 Anthropic 的上市节奏正面赛跑。', meta: '上市准备', stat: '2027 IPO' },
  { name: '开源热度：rea 月增 43 万星、AnyPS5 游戏移植月增 4.7 万', desc: 'GitHub 月榜 11/7：逆向项目 rea 累计 43.7 万星继续第一；PS5 跨平台移植工具 AnyPS5 月增 4.7 万星，开发者工具与游戏生态同步升温。', meta: '开源趋势', stat: '双高热' },
  { name: '周末慢读：两大巨头 IPO 赛跑，普通人怎么看不焦虑', desc: '一级市场估值高、二级市场波动大是常态；个人日常用 AI 看体验与口碑即可，不必为头条融资数字操作仓位，周末好好休息更重要。', meta: 'AI伴侣', stat: '周末放松' }
]

const lifeCards = [
  { name: '数码科技 · OpenAI 110 亿美元融资、谷歌 170 亿建数据中心', desc: '网易 AI 早报 11/7：OpenAI 以 1.25 万亿估值再融 110 亿美元、阿联酋 MGX 领投；谷歌投 170 亿美元建首座怀俄明数据中心——算力军备竞赛继续。', meta: '前沿科技', stat: '大额融资' },
  { name: '游戏 · AnyPS5 月增 4.7 万星：PS5 游戏可移植到电脑', desc: 'GitHub 月榜 11/7：boykopovar/AnyPS5 用 C++ 自动把 PS5 可执行文件移植到 Linux/Windows，累计 5.2 万星；周末可以关注这类开源移植项目，本地 PC 玩更多游戏。', meta: '主机移植', stat: '52K★' },
  { name: '穿搭美妆 · 15~19℃ 周六多云，薄外套加长裤最舒服', desc: '今天实时 18℃、体感仅 16℃、北风 3 级——周六出门建议针织内搭+薄风衣/牛仔外套，下装长裤；明天下雨降温到 12℃，今天穿轻便一些正好。', meta: '穿搭指南', stat: '15~19℃偏凉' },
  { name: '理财职场 · 巨头估值高企，普通人定投别追头条行情', desc: 'OpenAI 估值 1.25 万亿、Anthropic 1.5 万亿仍被嫌贵——一级市场与二级市场温差大；短期 AI 板块受情绪驱动波动，坚持定期定额、不追高割肉更稳。', meta: '财经职场', stat: '估值高位' },
  { name: '健康 · 空气优能见度 21km，今天适合散步晒太阳', desc: '今日 AQI 15~31 全优、能见度 21.4km、湿度适中 58%，是本周最通透的一天；适合户外快走或公园晒太阳，明后两天阴雨降温，感冒多发，注意增减衣物。', meta: '健康提醒', stat: '空气全优' }
]

const localCards = [
  { name: '上海天气 · 11月7日', desc: '多云转阴、局部零星阵雨可能，15~19℃（实时 18℃、体感 16℃）。偏东风转北风 3 级（预报 4-5 级）。相对湿度 58%（区间 54%~71%）。AQI 全优（15~31）、能见度约 21km 非常通透。日出06:14，日落17:01。【今天宜户外、抓紧晾晒】；明天（11/8）小雨 12~17℃ 约7mm，后天（11/9）小雨 9~14℃ 明显降温。', meta: '今日天气', stat: '多云15~19℃优' },
  { name: '本地要闻', desc: '①进博会进入第 3 天（11/5-10），周末国家会展中心客流高峰、2/17 号线及周边道路客流管控，出行预留时间；②周末出行提示：今天无明显降雨、适合户外，明起两天阴雨且气温跌到 12℃上下，出门带伞、提前添件厚外套。', meta: '上海资讯', stat: '进博会周末高峰' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周六早安，今天空气通透、天气凉爽，适合出门走走、把衣服晒一晒 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月7日 星期六</span>
          <span>第 064 期</span>
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
          <h3>OpenAI 以 1.25 万亿美元估值再融 110 亿美元，阿联酋 MGX 集团领投、软银跟投</h3>
          <p>TechCrunch 11/6、网易 AI 早报 11/7：阿联酋投资者集团（含 MGX）承诺数十亿美元成最大投资方，软银与 Coatue 拟各投数亿美元；同期 Anthropic 1.5 万亿估值遭部分投资者嫌贵、已提交 S-1，两大巨头 IPO 正面赛跑。</p>
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
        <span>我的工作台 · 每日早报 · VOL.064</span>
      </footer>
    </div>
  )
}
