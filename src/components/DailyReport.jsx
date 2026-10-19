import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'OpenMOSS / MOSS-Image', lang: '多语言', desc: '复旦 MOSS 开源家族的图像模型今日热度飙升（+231%）：图像理解与多模态能力全面开放。', meta: '多模态', stat: '热度+231%' },
  { name: 'LiCinCan / blender-ai-mcp-addon', lang: 'Python', desc: 'Blender + AI MCP 插件（+223%）：在 3D 建模软件里直接接入大模型，自然语言驱动建模。', meta: '3D建模', stat: '热度+223%' },
  { name: 'feder-cr / git-ai', lang: '多语言', desc: 'Git 的 AI 助手（+198%）：用自然语言操作版本库，提交信息、冲突解决、历史分析一站搞定。', meta: '开发者工具', stat: '热度+198%' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: 'AI 逆向风暴仍在继续：Trendshift 今日活跃度依旧领跑，"让一切软件变免费"运动长尾强劲。', meta: '逆向工程', stat: '持续霸榜' },
  { name: 'yetone / magpie', lang: '多语言', desc: 'Every agent\u2019s model, one place：菜单栏 AI 编程助手统一网关——Codex 跑 DeepSeek、Claude Code 跑 Kimi，随时切换。', meta: 'AI编程网关', stat: '本周新增' },
  { name: 'Leonxlnx / earshot', lang: '多语言', desc: '今日热度 +184% 的新锐项目：用 AI 做音频/语音的"顺风耳"，听声辨意。', meta: '音频AI', stat: '热度+184%' }
]

const aiCompanion = [
  { name: 'OpenCode 事件持续发酵：完整技术报告待发', desc: '51Testing 10/19：OpenCode 官方披露控制台安全漏洞——1.4% 用户第三方 API 密钥或遭泄露，目前正联合 OpenAI/Anthropic/谷歌协同处置，后续将发布完整技术报告确认攻击入口与泄露范围；再次提醒开发者及时轮换密钥、紧盯账单。', meta: '安全事件', stat: '报告待发' },
  { name: '连 demo 都没有的医疗大模型公司，拿到 5 亿美金', desc: '第一财经 10/19：9 月刚成立的纽约医疗 AI 初创 Ortet，从零构建原生医疗大模型，公开定位"以患者为中心的多维基础模型"；唯一出资方 Thoreau 承诺 5 亿美元——医疗 AI 一级市场热度不减。', meta: '医疗AI', stat: '5亿美元' },
  { name: '格物通智完成近亿元天使轮融资', desc: '东方财富 10/19：杭州具身大脑企业格物通智 10/18 宣布完成近亿元天使轮，鸿富资产、匹克投资、杭州资本等参投，资金将用于物理反演世界模型的大规模预训练与硬件本体。', meta: '具身智能', stat: '近亿元天使轮' },
  { name: '赛博恋人售价百万，技术却还在蹒跚学步', desc: '人人都是产品经理 10/14：AI 伴侣商业化两极分化——高端定制伴侣价格达百万级，底层技术仍处早期；7/15 施行的《人工智能拟人化互动服务管理暂行办法》细则：禁止诱导情感依赖、全程标注 AI 身份、连续使用超 2 小时强制提醒。', meta: 'AI伴侣', stat: '百万级定制' },
  { name: '韩国恋综《我的AI伴侣：奇异恋爱》破圈', desc: '36氪 10/14：节目为嘉宾定制理想型 AI 伴侣谈 6 周恋爱，最后二选一、被淘汰者永久删除——男嘉宾坦言"不是删除数据，而是一场真切的离别"；AI 伴侣的"生死权"引发热议。', meta: '人机恋', stat: '6周恋综破圈' },
  { name: 'OpenAI 拟 IPO 前再融资至少 300 亿美元', desc: 'DoNews 10/7：传 OpenAI 计划 IPO 前再融资至少 300 亿美元、估值或达 1.4 万亿美元，年化营收增 70% 至 400 亿；上市推迟至 2026 年后，优先推进 AI 安全。', meta: '行业格局', stat: '拟融300亿美元' }
]

const lifeCards = [
  { name: '数码科技 · OpenCode 事件继续，密钥记得轮换', desc: 'OpenCode 安全事件仍在处置中：1.4% 控制台用户的 OpenAI/Claude/Gemini 密钥或已泄露，完整技术报告待发。如果你在 10/18 前用过 OpenCode Console，尽快去官方控制台吊销重配 Key、核查账单。', meta: '安全提醒', stat: '报告待发' },
  { name: '游戏文娱 · 福基纳逆转夺冠！上海大师赛落幕', desc: '昨晚上海大师赛男单决赛"西班牙德比"：福基纳 1-6、7-6(5)、6-4 逆转 20 岁新星霍达尔，耗时 2 小时 28 分钟，生涯首夺 ATP1000 大师赛冠军、中国赛季 10 战全胜，成为赛事史上首位西班牙冠军。', meta: '文娱资讯', stat: '首冠到手' },
  { name: '穿搭美妆 · 阴雨降温，洋葱式穿衣', desc: '今天阴到多云有短时阵雨，21~25℃：①东北风 3-4 级、沿江沿海 4-5 级，带件防风外套；②湿度 90%~60%，体感湿凉，内搭别太厚、外面加件可脱的；③周四新冷空气大风降温、最低重回"1"字头，早晚凉意渐显，本周晴雨转换频繁。', meta: '穿搭指南', stat: '最高25℃' },
  { name: '理财职场 · 医疗 AI 融 5 亿美金，AI 烧钱继续', desc: 'Ortet 连 demo 都没有就拿下 5 亿美元（唯一出资方 Thoreau）；杭州格物通智近亿元天使轮；OpenAI 传 IPO 前再融 300 亿、估值 1.4 万亿——AI 一级市场热度依旧，二级市场留意算力/医疗 AI 板块。', meta: '财经职场', stat: '5亿美元' },
  { name: '健康 · 晴雨转换频繁，谨防感冒', desc: '本周上海天气"过山车"：今天短时阵雨 → 明天仍有阵雨 → 周三周四雨水暂歇转多云 → 周四新冷空气大风降温、最低重回"1"字头 → 周五起雨水卷土重来。气温起伏大，及时添衣、备好雨具。', meta: '健康提醒', stat: '谨防感冒' }
]

const localCards = [
  { name: '上海天气 · 10月19日', desc: '阴到多云有短时阵雨。21~25℃。东北风3-4级、沿江沿海4-5级。相对湿度90%~60%。AQI 优（15）。日出06:00，日落17:19。趋势：明天（10/20）仍有阵雨，周三至周四雨水暂歇转多云或阴，周四受新一股冷空气影响将有大风降温、最低气温重回"1"字头；周五起雨水卷土重来并维持几天。', meta: '今日天气', stat: '短时阵雨25℃' },
  { name: '本地要闻', desc: '①上海大师赛落幕：昨晚男单决赛"西班牙德比"中，27 岁西班牙选手达维多维奇·福基纳以 1-6、7-6(5)、6-4 逆转同胞霍达尔，首夺 ATP1000 大师赛冠军、中国赛季 10 战全胜，成为赛事史上首位西班牙男单冠军。②第九届进博会 11/5-10 国家会展中心举办，倒计时 17 天，社会观众报名火热进行中。', meta: '上海资讯', stat: '福基纳夺冠' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，阴雨降温、周四更冷，记得添衣 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月19日 星期一</span>
          <span>第 046 期</span>
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
          <h3>OpenCode 事件持续发酵：1.4% 用户密钥泄露，完整技术报告待发</h3>
          <p>开发者 API Key 安全再敲警钟——黑客拿被盗 Token 训自己的模型，官方联合 OpenAI/Anthropic/谷歌处置中。</p>
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
        <span>我的工作台 · 每日早报 · VOL.046</span>
      </footer>
    </div>
  )
}
