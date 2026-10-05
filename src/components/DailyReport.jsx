import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'debpalash / VoiceStudio', lang: 'Python', desc: '5 天再涨 +11.5K 星（累计 50.4K★）持续登顶：本地优先、多引擎语音平台——克隆、配音、长音频制作，主打数据隐私与自托管高吞吐。', meta: '语音平台', stat: '50.4K★ +11.5K' },
  { name: 'obra / superpowers', lang: '多语言', desc: 'Agentic skills 集合：给 AI Agent 装上"超级技能"，连续多日登上每日热榜（10/5 第 12）。', meta: 'Agent 技能', stat: '每日#12' },
  { name: 'svcvit / Awesome-Dify-Workflow', lang: '多语言', desc: 'Dify 工作流精选合集：RAG、Agent、自动化场景的开箱工作流案例库，10.7k 星，AI 趋势榜第 9。', meta: 'Dify 生态', stat: '10.7K★' },
  { name: 'RAG_Techniques', lang: 'Jupyter', desc: 'RAG 高级技术笔记本合集：检索增强生成各流派技术均有详细教程演示，29.6k 星。', meta: 'RAG 教程', stat: '29.6K★' },
  { name: 'diegosouzapw / OmniRoute', lang: '多语言', desc: 'Trending Scout 头号机会项目：新晋路由方向开源项目，星增曲线值得关注。', meta: '新晋项目', stat: '头号机会' },
  { name: 'awesome-selfhosted', lang: '多语言', desc: '自托管网络服务与应用大全：Free Software 服务清单，每天更新，每日热榜第 11。', meta: '自托管', stat: '每日#11' }
]

const aiCompanion = [
  { name: 'Meta AI 助手 Muse 被曝深度整合人际数据', desc: 'DoNews/IT之家 10/5：Muse 数百万用户将其绑定银行、通讯与健康数据；研究人员通过常规交互提取内部指令，揭示 Muse 每小时自动为每位联系人建立并更新结构化档案（住址、职业、重要日期、关系模式、维护建议）——引发隐私争议。', meta: '隐私争议', stat: '每小时建档案' },
  { name: 'OpenAI "28天计划"：每天更新 Codex/Work', desc: 'IT之家 10/5：OpenAI 核心产品与平台负责人宣布，未来 28 天每天发布一项对 Codex / ChatGPT Work 用户有实际意义的改进，否则提供一次"重置"。', meta: '产品动态', stat: '28天计划' },
  { name: '奥特曼：AI 收益足以让世界接受一定风险', desc: 'Politico《Decoded》专访：OpenAI CEO 奥特曼表示"AI 收益足以让世界接受一定风险"，与 Anthropic 在监管路径上的根本分歧公开化。', meta: '观点交锋', stat: '监管分歧' },
  { name: '马斯克"跟 AI 分手"：SpaceXAI 改名 SpaceXSI', desc: '36氪 10/5：马斯克发帖称「No more AI」、SI（超级智能）更好；网友问能否改名 SpaceXSI，他回复"可以，会改"——xAI 被 SpaceX 收购后二度更名。', meta: '行业花絮', stat: '二度更名' },
  { name: '谷歌 Googlebook AI 笔记本上架', desc: '10/4 起美国零售上架：覆盖 Acer/华硕/惠普/联想/戴尔五家 OEM，起售价 899 美元，标配 Gemini Intelligence 与 45TOPS 端侧 NPU。', meta: 'AI 硬件', stat: '$899 起' },
  { name: '《赛博恋人售价百万，技术却还在蹒跚学步》', desc: '人人都是产品经理观察：AI 伴侣商业价值高企但技术仍在早期；《办法》核心红线——禁止诱导情感依赖、必须全程标注 AI 身份、连续使用超 2 小时强制弹窗、敏感信息未经同意不得用于训练。', meta: '市场观察', stat: '合规红线' }
]

const lifeCards = [
  { name: '数码科技 · VoiceStudio 再破纪录', desc: 'VoiceStudio 5 天再涨 1.15 万星（50.4K★）持续登顶；谷歌 Googlebook AI 笔记本 $899 起零售上架；OpenAI 官宣 28 天计划每天更新 Codex/Work。', meta: '数码资讯', stat: 'AI 硬件潮' },
  { name: '游戏文娱 · 大师赛今日开赛', desc: '上海劳力士大师赛今日旗忠网球中心开赛（10/5-18，14 天 162 场对决、世界前百选手悉数出席）；上海再迎 Robotex 世界机器人大会亚洲总决赛（大虹桥）；首届 NSW 新南西国际科技文化风尚周落地南京西路（联动上海展览中心/静安公园/吴江路）；PREP 乐队今晚上海站演出。', meta: '文娱资讯', stat: '大师赛开赛' },
  { name: '穿搭美妆 · 假期第5天穿搭', desc: '今日多云转晴 15~22℃、北到西北风4-5级阵风6级：①冷高压控制转晴、但大风呼呼体感凉；②昼夜温差大，郊区最低 12-13℃；③6-7 日早晨最冷（市区 16℃ 左右）——薄外套+防风衣，早晚添衣。', meta: '穿搭指南', stat: '15~22℃ 大风' },
  { name: '理财职场 · 假期第5天', desc: '上海劳力士大师赛今日开赛带动体育经济；Meta Muse 隐私争议波及 AI 个人助手赛道；奥特曼谈 AI 风险收益再引监管路径之争。', meta: '财经职场', stat: '大师赛今日开赛' },
  { name: '健康 · 转晴大风防着凉', desc: '今日雨止转晴但北到西北风 4-5 级（阵风 6 级、沿江沿海 6-7 级）：防风保暖、温差大易着凉；6-7 日早晨最冷（市区 16℃、郊区更低）；AQI 优——适合出门但多穿一件。', meta: '健康提醒', stat: '大风添衣' }
]

const localCards = [
  { name: '上海天气 · 10月5日', desc: '多云（阴雨结束，冷高压控制转晴）。15~22℃，北到西北风4~5级、阵风6级（沿江沿海5级阵风6-7级）。湿度47%~75%，空气质量优（实时 AQI 27，预报 40-60 优到良）。日出05:50，日落17:35。冷空气已抵达、大风明显；昼夜温差大；6-7 日早晨最低气温 16℃ 左右、郊区更低——"入秋"在望。', meta: '今日天气', stat: '15~22℃ 大风' },
  { name: '本地要闻', desc: '①上海劳力士大师赛今日在旗忠网球中心正式开赛（10/5-18，14 天 162 场对决、世界前百选手悉数出席，闵行公安护航）；上海再迎 Robotex 世界机器人大会亚洲总决赛（大虹桥）；首届 NSW 新南西国际科技文化风尚周落地南京西路沿线（联动上海展览中心、静安公园、吴江路、芮欧百货）。②上海旅游节花车巡游明日收官（至 10/6）；杨浦滨江"秋日 B 计划游园会"今日最后一天（10/3-5）。', meta: '上海资讯', stat: '大师赛今日开赛' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期第 5 天，天晴有风 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月5日 星期一</span>
          <span>第 032 期</span>
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
          <h3>Meta Muse 深度整合人际数据引隐私争议</h3>
          <p>AI 个人助手在迅速普及的同时暴露数据逻辑；GitHub 上 VoiceStudio 5 天再涨 1.15 万星，语音 AI 持续领跑。</p>
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
        <span>我的工作台 · 每日早报 · VOL.032</span>
      </footer>
    </div>
  )
}
