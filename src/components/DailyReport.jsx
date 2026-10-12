import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'Python', desc: 'REA（Reverse Engineer Anything）"逆向灭霸"：用 Agent 逆向任何东西——从应用行为到原生二进制，一天登顶 GitHub，狂揽近 7 万星。', meta: '逆向工程', stat: '近7万★' },
  { name: 'Tencent / WeKnora', lang: 'Go', desc: '腾讯开源 LLM 知识平台：把原始文档变成可查询的 RAG 与自主推理 Agent，本月 +11.2K 星。', meta: '知识平台', stat: '本月+11.2K' },
  { name: 'zhongerxin / iPhone-use', lang: 'Python', desc: '用 Codex 通过 USB 控制真实 iPhone：引导式设置、App 自动化、实时屏幕反馈——LLM 与物理设备桥接新玩法。', meta: '设备控制', stat: 'Trending' },
  { name: 'openclaw / openclaw', lang: '多语言', desc: 'The AI that really does things：任何系统、任何平台都能干的 AI，热榜 #6，🦞 风格。', meta: 'Agent 平台', stat: '热榜#6' },
  { name: 'anthropics / financial-services', lang: 'Python', desc: 'Anthropic 开源的金融服务工具集：把 Claude 能力接入金融场景，本月 +4.6K 星。', meta: '金融 AI', stat: '本月+4.6K' },
  { name: 'insforge', lang: 'TypeScript', desc: '为编码智能体提供数据库、认证、存储、计算、托管与 AI 网关的开源后端平台，13.1K 星。', meta: '后端平台', stat: '13.1K★' }
]

const aiCompanion = [
  { name: '模思智能完成超 10 亿元 Pre-A 轮融资', desc: '新浪科技 10/12：押注下一代 AI 全模态实时交互基座，华控基金领投，国开科创、上海科创基金、徐汇资本等参投，元禾控股等老股东持续加注。', meta: '融资重磅', stat: '超10亿元' },
  { name: '蚂蚁"灵光"开启新版内测', desc: 'AI 晨报 10/12：升级为具备长期记忆、可主动推进复杂任务的个人智能体，计划本月正式开放。', meta: '个人智能体', stat: '本月开放' },
  { name: '腾讯云开源 TeamAI', desc: 'AI 晨报 10/12：基于 Git 统一管理团队技能与项目知识，支持跨智能体复用，已适配 16 款主流工具。', meta: '开源动态', stat: '16款工具' },
  { name: '零一万物推出 AI 游戏搭子 UPUP', desc: '人人都是产品经理 10/12：把 AI 角色定制、实时游戏辅助与玩家交友揉进同一入口，与逗逗、鹅次元、GameBuddy 同台试错——AI 游戏陪伴赛道升温。', meta: 'AI 伴侣', stat: '游戏搭子' },
  { name: '腾讯秘密测试 AI 数字人游戏伴侣"鹅次元"', desc: 'AIbase 10/12：聚焦情感陪伴而非技术炫技，AI 数字人切入游戏陪玩场景，行业竞速加码。', meta: 'AI 伴侣', stat: '情感陪伴' },
  { name: 'AI 社交出海：Popia 进美国畅销榜 Top 25', desc: '36氪：AI 聊天框成角色编辑器，面向美国市场，移动端累计收入约 40 万美元——AI 社交出海再"整活"。', meta: '出海观察', stat: '收入40万美元' }
]

const lifeCards = [
  { name: '数码科技 · 个人智能体升温', desc: '蚂蚁"灵光"新版内测（长期记忆+主动推进任务，本月开放）；腾讯云开源 TeamAI；阿里 Qoder 上线 Fast 模式约 3 秒响应；REA 逆向工具一天狂揽近 7 万星。', meta: '数码资讯', stat: '灵光内测' },
  { name: '游戏文娱 · 国乒两冠收官', desc: 'WTT 中国大满贯收官：王曼昱女单决赛 4:0 横扫日本削球手佐藤瞳卫冕，成就女单女双双冠王、重返世界第一；国乒男线未进决赛；上海大师赛第三轮激战正酣，唯一晋级中国选手继续冲关。', meta: '文娱资讯', stat: '王曼昱卫冕' },
  { name: '穿搭美妆 · 多云通勤', desc: '今日多云转阴 18~25℃：①云量较多、体感舒适；②昼夜温差约 7℃，通勤路上加件薄外套；③化妆指数"去油防晒"、紫外线弱；下午阴天为主。', meta: '穿搭指南', stat: '18~25℃ 多云转阴' },
  { name: '理财职场 · 周一开工', desc: '新一周开工日；模思智能超 10 亿 Pre-A 轮融资领跑 AI 交互基座赛道；AI 社交出海验证变现（Popia 累计收入约 40 万美元）；OpenAI 年化收入约 500 亿美元讨论持续。', meta: '财经职场', stat: '新一周' },
  { name: '健康 · 降温注意保暖', desc: '今日感冒指数"易发"——较前期明显降温，早晚记得加衣；运动指数适宜，通勤可步行锻炼；秋季干燥多补水。', meta: '健康提醒', stat: '感冒易发' }
]

const localCards = [
  { name: '上海天气 · 10月12日', desc: '多云转阴。18~25℃，北风 1-2级。湿度81%~74%。AQI 优（实时 39）。日出05:54，日落17:26。感冒指数易发：较前期降温明显，适当增加衣服；运动指数适宜。明天（周二）多云 19~27℃；周三前后局部短时小雨。', meta: '今日天气', stat: '18~25℃ 多云转阴' },
  { name: '本地要闻', desc: '①WTT 中国大满贯收官：王曼昱女单决赛 4:0 横扫日本削球手佐藤瞳（11-2、11-8、11-3、11-9）成功卫冕，再成女单女双双冠王、女单重返世界第一；男单决赛日本选手松岛辉空夺冠。②上海劳力士大师赛 11 日展开第三轮争夺，唯一闯入第三轮的中国选手继续出战；旗忠主赛场与苏河湾"第二现场"双场联动。', meta: '上海资讯', stat: '王曼昱卫冕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周一开工大吉，降温记得加衣 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月12日 星期一</span>
          <span>第 039 期</span>
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
          <h3>REA"逆向灭霸"一天登顶 GitHub，狂揽近 7 万星</h3>
          <p>蚂蚁"灵光"内测个人智能体、腾讯开源 TeamAI；模思智能 10 亿融资押注全模态交互。</p>
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
        <span>我的工作台 · 每日早报 · VOL.039</span>
      </footer>
    </div>
  )
}
