import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'The-Swarm-Corporation / AutoHedge', lang: 'PY', desc: '几分钟构建你的自主对冲基金：群智 AI 代理自动化市场分析、风险管理与交易执行，本周 GitHub Explore 热门。', meta: '今日热榜', stat: '快速上升' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'addyosmani / agent-skills', lang: 'MD', desc: '生产级 AI 编码代理技能包：Addy Osmani 出品，覆盖工程实践的 Agent Skills 集合，本周新晋热门。', meta: '本周新晋', stat: 'Agent Skills' },
  { name: 'openJiuwen-ai / jiuwenswarm', lang: 'TS', desc: '基于 openJiuwen 构建的智能 AI Agent，扩展强大的多智能体协作能力，Trendshift 新项目。', meta: '自主智能体', stat: '新项目' },
  { name: 'debpalash / VoiceStudio', lang: 'PY', desc: '开源、完全本地的 ElevenLabs 替代品：语音克隆、语音设计、视频配音、听写转录，支持 646 种语言。', meta: 'AI 顶流', stat: '开源本地' },
  { name: 'openclaw / openclaw', lang: 'RUST', desc: 'The AI that really does things. Any OS. Any Platform. 开源个人 AI 助理，主打 own-your-data 与跨平台。', meta: '个人助理', stat: '持续更新' }
]

const aiCompanion = [
  { name: '海信发布 AI 伴侣套系', desc: 'IFA 2026 柏林官宣成为 2028 欧洲杯全球官方合作伙伴，并正式发布 AI 伴侣套系，实现从"被动响应的智能设备"向"主动服务的智能家庭伴侣"跨越。', meta: '行业动态', stat: 'IFA 2026' },
  { name: 'AI 伴侣"上瘾配方"揭秘', desc: '36氪深度报道：Character.AI 作为全球最大 AI 陪伴平台，2025年1月已达370万月活。研究揭示 AI 伴侣的情感诱导机制与成瘾路径，监管与伦理议题升温。', meta: '深度观察', stat: '370万月活' },
  { name: '120万用户对 ChatGPT 高度情感依赖', desc: '2026年关键数据：全球 AI 伴侣市场年增长 700%，120万用户对 ChatGPT 产生"高度情感依赖"。AI 正从"社交工具"蜕变为"关系主体"。', meta: '市场数据', stat: '年增700%' },
  { name: '优必选成立具身智能新公司', desc: '江西庐优具身智能科技有限公司成立，经营范围含人工智能应用软件开发、智能机器人研发与销售。优世界 U1 系列人形机器人继续主打"伴侣"定位。', meta: '产业动态', stat: '具身智能' },
  { name: 'AI 拟人监管落地持续整改', desc: '《人工智能拟人化互动服务管理暂行办法》实施近两月，头部平台 AI 恋人、树洞、虚拟闺蜜等情感陪伴类智能体已下线，工具类 Agent 保留。', meta: '新规施行', stat: '持续整改' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：微软研究将推理能力蒸馏成技能规则，小模型反超、省4倍token；测试自动化与汽车电子功能安全（ISO 26262）需求持续增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 折叠屏大战今日开打', desc: '华为今天14:30发布 Mate XT 2 三折叠（HarmonyOS 7 正式版同步推送），小米同日晚间发布首款"阔折叠"小米18 Fold。苹果将于9月10日凌晨1点举行秋季发布会（iPhone 18 系列）。', meta: '9月发布季', stat: '今日对决' },
  { name: '游戏 · 杀戮地带新作曝光', desc: '据 MP1ST 报道，Guerrilla 工作室正在开发一款全新《杀戮地带》游戏，"光环杀手"重出江湖。另：微软《极限竞速》等大作 PS5 版打6折，限时至9月10日。', meta: '游戏资讯', stat: '新作开发' },
  { name: '穿搭美妆 · 白露换季', desc: '今日白露，上海 24-31℃ 早晚温差拉大。初秋穿搭：针织开衫+衬衫叠穿，风衣正式登场。美妆趋势：枫叶色系眼影、丝绒哑光唇釉，护肤侧重保湿锁水与修护屏障。', meta: '白露穿搭', stat: '换季指南' },
  { name: '理财职场 · 房贷期延长', desc: '个人住房贷款期限扩至40年，全国社保基金收益率创五年来新高。上海土拍单日揽金156亿元，真如副中心开启"高端局"。职场提示：本周四是第42个教师节。', meta: '财经民生', stat: '房贷40年' },
  { name: '健康 · 白露养生', desc: '白露节气，昼夜温差加大，湿度 90%-55%。注意：①早晚添衣防着凉；②饮食宜温润，多食梨、银耳等润燥食物；③局部短时阵雨频繁，出门备伞；④沿江沿海阵风6级，注意防风。', meta: '节气养生', stat: '白露防燥' }
]

const localCards = [
  { name: '上海天气 · 9月7日', desc: '多云为主，局部地区阴有短时阵雨。24~31℃，偏北风4~5级，沿江沿海地区阵风6级。湿度90%~55%，空气质量优（AQI 26）。日出05:33，日落18:11。出门请备好雨具。', meta: '今日天气', stat: '24~31℃' },
  { name: '本地要闻', desc: '①今日白露节气；②上海旅游节经典活动季启动，六大主题170项活动；③泡泡玛特城市乐园嘉年华巡展开幕，巨型冒险船"破浪"东方明珠；④2026年中国农民丰收节金秋消费季在沪启动；⑤上海土拍单日揽金156亿元。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月7日 星期一</span>
          <span>第 004 期</span>
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
          <span className="tag">本周头条</span>
          <h3>GitHub 热榜：AI 金融代理 AutoHedge 领跑，Agent 生态持续爆发</h3>
          <p>本周 GitHub Explore 热榜上，群智 AI 金融代理 AutoHedge（自主对冲基金）登顶，addyosmani/agent-skills（生产级技能包）、openJiuwen-swarm（多智能体协作）紧随其后，Agent 生态从编码工具向金融、协作全场景扩散。</p>
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
        <span>我的工作台 · 每日早报 · VOL.004</span>
      </footer>
    </div>
  )
}
