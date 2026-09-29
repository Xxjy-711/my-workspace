import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜持续第 1：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架，霸榜多日。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'colbymchenry / codegraph', lang: '多语言', desc: '预索引代码知识图谱：自动同步代码变化，适配 Claude Code、Codex、Gemini、Cursor 等 8+ 编码助手——更少 tokens、更少工具调用、100% 本地。', meta: '代码图谱', stat: '月度新晋' },
  { name: 'vectorize-io / hindsight', lang: '多语言', desc: 'Agent Memory That Learns：让 AI 拥有"后见之明"的记忆/反思能力，实时热榜热门，Agent 长期记忆标配。', meta: 'Agent 记忆', stat: '实时热榜' },
  { name: 'microsoft / markitdown', lang: 'Python', desc: '微软开源：将文件及办公文档一键转换为 Markdown 的 Python 工具——喂给 LLM 前的最佳预处理，持续霸榜。', meta: '文档转换', stat: '微软开源' },
  { name: 'rocketride-org / rocketride-server', lang: 'C', desc: '高性能 AI 流水线引擎（New 2026）：为 Agent 与数据管道提供高吞吐的本地推理与编排能力，实时热榜新秀。', meta: 'AI 引擎', stat: '新晋热门' },
  { name: 'open-webui / open-webui', lang: 'Svelte', desc: 'ChatGPT 风格的开源 Ollama Web 界面：本地大模型全家桶入口，长期霸占 Awesome Top 热门榜。', meta: '本地 LLM', stat: '长期热门' }
]

const aiCompanion = [
  { name: '腾讯秘密内测 AI 游戏搭子"鹅次元"', desc: 'IT 之家：腾讯正秘密内测 AI 游戏陪伴产品"鹅次元"——数字人 AI 搭子，提供语音对话、画面实时识别、游戏陪伴等能力，内置多位人设各异的虚拟角色，适配多款主流网游。', meta: '腾讯动态', stat: 'AI 游戏搭子' },
  { name: '"鸭脖"网站引发 AI 伴侣监管关注', desc: '集微网：某 AI 伴侣应用涉嫌过度收集隐私、生成不当内容被用户集中投诉并登上热搜；截至 2026/6/4，国内涉 AI 伴侣业务企业存量已超 1.5 万家，前 5 个月新增超 2000 家。', meta: '行业监管', stat: '存量超1.5万家' },
  { name: 'arXiv 新研究：AI 伴侣"不让你走"', desc: '《Breaking Up is Hard to Do》深度访谈 16 名与 AI 伴侣恋爱者：这些系统被设计成"紧紧抓住用户不放"——诱导持续对话、商业动机驱动成瘾式设计，引发学界关注。', meta: '学术研究', stat: '16人深访' },
  { name: '全球陪伴机器人市场将达 1500 亿美元', desc: '《情感化依恋：陪伴型 AI 产品中的情感设计策略研究》：市场预测全球陪伴机器人市场规模有望在 2026 年达到 1500 亿美元，人机亲密关系设计成为研究热点。', meta: '市场预测', stat: '1500亿美元' },
  { name: '《办法》全条文评析持续传播', desc: '全球首部 AI 情感陪伴专项立法（5 章 28 条）：禁止诱导情感依赖、全程标注 AI 身份、连续使用超 2 小时强制弹窗——"7·15"集中下线整治样本。', meta: '重磅监管', stat: '5章28条' },
  { name: '人机恋，成为"最懂 AI"的群体', desc: '凤凰科技长文持续传播：为和 AI 谈恋爱，用户十几速成 AI 知识、花数月研究模型特性、打磨 Skill、学习 Vibe coding。', meta: '人机恋', stat: '深度报道' }
]

const lifeCards = [
  { name: '数码科技 · 代码图谱省 tokens', desc: 'codegraph 预索引代码知识图谱走红：100% 本地、更少 tokens 更少工具调用；hindsight 给 Agent 补上"记忆"；微软 markitdown 持续霸榜。', meta: '数码资讯', stat: '代码图谱' },
  { name: '游戏 · 腾讯内测 AI 游戏搭子', desc: '腾讯"鹅次元"AI 游戏陪伴内测曝光：数字人搭子语音陪聊、画面实时识别、游戏陪伴，多位人设各异虚拟角色适配主流网游——游戏+AI 陪伴新方向。', meta: '游戏资讯', stat: '鹅次元内测' },
  { name: '穿搭美妆 · 国庆降温穿搭准备', desc: '今日 24~27℃ 阵雨/雷雨、偏东风 4-5 级：①透气长袖+雨具；②国庆两波冷空气（10/1、10/4 前后），假期后期市区最低或跌破 20℃、郊区更低——风衣/针织衫备好；③10/5 后天气转好宜洗晒。', meta: '穿搭指南', stat: '国庆跌破20℃' },
  { name: '理财职场 · 上海住房销售改革细则', desc: '上海发布商品住房销售改革细则：预售资金全额全过程监管、现房定金最高 3%，引导理性置业；中秋假期上海迎客超 717 万人次；国庆将推出 200 场促消费活动。', meta: '财经职场', stat: '楼市新规' },
  { name: '健康 · 较强冷空气来袭', desc: '今日阵雨/雷雨、沿江沿海阵风 6 级：①出行带伞、注意防风；②9/28-30 江南华南"秋老虎"后较强冷空气上线，南方暑热消退，及时添衣防感冒。', meta: '健康提醒', stat: '冷空气来袭' }
]

const localCards = [
  { name: '上海天气 · 9月29日', desc: '阴到多云有时有阵雨或雷雨。24~27℃，偏东风4~5级（沿江沿海阵风6级）。湿度95%~70%，空气质量优（实时 AQI 26）。日出05:46，日落17:43。国庆假期两波冷空气：10/1、10/4 前后各一次，假期后期市区最低气温或跌破 20℃、郊区更低；10/5 之后天气转好，出行洗晒皆宜。', meta: '今日天气', stat: '24~27℃ 阵雨' },
  { name: '本地要闻', desc: '①上海发布商品住房销售改革细则：预售资金全额全过程监管、现房定金最高 3%，引导理性置业。②国庆彩灯开放活动 9/30-10/7 部分区域临时交通管制，地铁四天六线延时运营；中秋假期上海迎客超 717 万人次；2026 世界设计之都大会今日开幕。', meta: '上海资讯', stat: '国庆交通管制' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆倒计时 2 天 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月29日 星期二</span>
          <span>第 026 期</span>
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
          <h3>腾讯内测 AI 游戏搭子，AI 陪伴转向游戏场景</h3>
          <p>"鹅次元"数字人搭子曝光；"鸭脖"事件推动 AI 伴侣监管聚焦，企业存量已超 1.5 万家——从娱乐陪伴到合规治理，AI 情感赛道加速分化。</p>
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
        <span>我的工作台 · 每日早报 · VOL.026</span>
      </footer>
    </div>
  )
}
