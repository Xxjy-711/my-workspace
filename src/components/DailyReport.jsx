import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'bilawalsidhu / gods-eye-view', lang: 'TS', desc: '浏览器里的间谍卫星模拟器：基于 Google Maps Photorealistic 3D Tiles 与 Three.js 的 3D 地理空间可视化，今日热榜 #1。', meta: '今日热榜', stat: '3D 可视化' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor，AI 热度榜 #1。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'JustVugg / colibri', lang: 'C', desc: '在现有硬件上运行前沿 MoE 模型：纯 C、零依赖、专家从磁盘流式加载——小引擎，大模型。今日热榜新晋。', meta: '今日新晋', stat: '纯C引擎' },
  { name: 'debpalash / VoiceStudio', lang: 'PY', desc: '开源的本地版 ElevenLabs：语音克隆、语音设计、视频配音、听写转录与有声书创作，支持 646 种语言，持续热榜。', meta: '语音 AI', stat: '646种语言' },
  { name: 'alibaba / open-code-review', lang: 'TS', desc: '阿里开源的代码审查智能体：自动化的 AI 代码评审工具，Trendshift 新晋项目。', meta: '阿里开源', stat: '代码评审' },
  { name: 'omacom / omarchy', lang: 'Shell', desc: 'Beautiful, Modern & Opinionated Linux：一个更现代、更漂亮的开源 Linux 发行版，本月 +16.5k★。', meta: '本月热榜', stat: '+16.5k★' }
]

const aiCompanion = [
  { name: 'Bside："沉默"的 AI 陪伴凭什么次留60%', desc: '人人都是产品经理深度拆解：上海团队 Kotoko AI 的桌面陪伴产品 Bside 撬动日本市场——玩家捏出原创角色"Biibit"，看它生活、交朋友、出门冒险。2025年10月登陆 Steam 抢先体验，二次元"赛博分身"概念引爆日本。', meta: '产品拆解', stat: '次留60%' },
  { name: '18岁Clawra和60万场数字恋情', desc: 'GitHub 开源 AI 项目引发关注：一个名为 Clawra 的 AI 角色背后是 60 万场数字恋情。人机恋从猎奇走向规模化，长期记忆与情感陪伴成为开源社区最热议题之一。', meta: '开源项目', stat: '60万场' },
  { name: '星眠：仿生人男友永久记忆', desc: '手游《星眠》主打 AI 动态陪伴：仿生人男友 MY-001 拥有永久记忆、真实情绪起伏，Live2D 触摸反馈覆盖耳垂、垂眸等细节，"活人感"拉满的赛博男友持续出圈。', meta: '产品观察', stat: '永久记忆' },
  { name: '大厂 AI 角色下线，用户流向"猫箱"', desc: '《办法》落地后，豆包、通义千问、腾讯元宝等头部平台下线情感陪伴类自定义智能体；字节跳动提供迁移方案，用户数据可迁至独立应用"猫箱"，陪伴需求向垂直产品转移。', meta: '行业动态', stat: '迁移方案' },
  { name: '美国调查：已婚者更爱用 AI 恋人', desc: 'AI Romance 2026 调查（美国 2150 名成年人）：订婚/已婚受访者使用 AI 男友/女友应用的比例几乎是单身者的两倍，且更倾向认为 AI 恋情算"出轨"——AI 情感关系正在模糊亲密关系的边界。', meta: '社会观察', stat: '2,150人' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：AI 音乐（YuE）、本地语音（VoiceStudio）等生成式项目密集上新；纯 C 推理引擎（colibri）让 MoE 大模型跑进个人硬件；测试与汽车电子需求稳步增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · Steam Deck 2 计划未变', desc: '内存涨价背景下，Valve 表示 Steam Deck 2 计划不变；AOC 便携屏降至 49.99 美元，Switch 玩家迎来真香外设。Steam Frame（Valve 新硬件）正式发布，掌机市场风起云涌。', meta: '数码资讯', stat: '掌机潮' },
  { name: '游戏 · 漫威金刚狼今日发售', desc: '《漫威金刚狼》今日登陆 PS5：高线性单人史诗，血腥战斗与电影级过场拉满期待；《雷曼传奇：重制版》"压盘后延期"至12月3日；《Crystal Crisis》Steam 限免至9月22日；2026 暴雪嘉年华本周末开幕。', meta: '游戏资讯', stat: '金刚狼' },
  { name: '穿搭美妆 · 晴好洗晒日', desc: '今日多云到晴，21~30℃，北到东北风4~5级（沿江阵风6级）。穿搭：白天短袖+防晒，早晚备薄外套；今天特别适合洗晒换季衣物。美妆趋势：初秋"清透感"防晒底妆与奶茶色系唇釉流行。', meta: '穿搭指南', stat: '适宜洗晒' },
  { name: '理财职场 · 医保余额全家共济', desc: '医保个人账户余额今日起可全家共济：职工医保参保人可在"随申办"绑定家庭成员，家庭共享医保余额。2026 国家网络安全宣传周上海开幕，主题"智能时代 网安护航"。', meta: '财经职场', stat: '家庭共济' },
  { name: '健康 · 换季洗晒提醒', desc: '今日多云到晴适合大扫除与晾晒：①换季衣物、被褥趁今天紫外线适宜时晾晒杀菌；②早晚温差约9℃（21-30℃）防着凉；③明天起转阴，洗晒宜趁今日；④秋燥渐起，多喝水润燥。', meta: '健康提醒', stat: '趁晴晾晒' }
]

const localCards = [
  { name: '上海天气 · 9月15日', desc: '多云到晴。21~30℃，北到东北风4~5级，沿江沿海地区阵风6级，夜里转3~4级。湿度80%~40%，空气质量优（AQI 24）。日出05:38，日落18:01。', meta: '今日天气', stat: '21~30℃' },
  { name: '本地要闻', desc: '①医保个人账户余额今日起可全家共济（随申办可绑定家庭成员）；②2026国家网络安全宣传周上海地区活动开幕（主题"智能时代 网安护航"）；③第三届上海国际光影节9月17日-10月16日举行（黄浦主会场+16个分会场）；④陈吉宁调研市金融工作党委，增强国际金融中心竞争力；⑤世赛期间入沪高速省际道口交通管制持续至9月27日。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月15日 星期二</span>
          <span>第 012 期</span>
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
          <h3>GitHub 热榜：纯 C 跑大模型，AI 推理进入"个人硬件"时代</h3>
          <p>今日热榜上，gods-eye-view（3D 地理空间可视化）领衔，JustVugg/colibri 用纯 C 把 MoE 大模型跑进现有硬件，阿里的 open-code-review 入局 AI 代码评审；生成式 AI（音乐、语音）与端侧推理成为两大主线。</p>
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
        <span>我的工作台 · 每日早报 · VOL.012</span>
      </footer>
    </div>
  )
}
