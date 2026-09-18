import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'google-gemini / gemini-cli', lang: 'TS', desc: '把 Gemini 的能力直接带进终端：Google 开源 AI Agent，107k★ 长期霸榜，命令行 AI 工作流标杆。', meta: 'AI Agent', stat: '107k★' },
  { name: 'openai / whisper', lang: 'PY', desc: '大规模弱监督鲁棒语音识别：109.3k★ 经典项目，语音转写的行业标准，今日仍在高频更新。', meta: '语音识别', stat: '109.3k★' },
  { name: 'earendil-works / pi', lang: 'TS', desc: 'AI Agent 工具包：统一 LLM API、Agent 循环、TUI、编码 Agent CLI，106.6k★ 一站式 Agent 基建。', meta: 'Agent 工具包', stat: '106.6k★' },
  { name: 'sglang / sglang', lang: 'PY', desc: '高性能 LLM 与多模态模型服务框架：36k★，推理服务基础设施，Agent 时代的关键一环。', meta: '推理服务', stat: '36k★' },
  { name: 'openai / openai-agents-python', lang: 'PY', desc: '轻量级多 Agent 工作流框架：29.5k★，OpenAI 官方，构建多智能体协作的标准姿势。', meta: '多 Agent', stat: '29.5k★' },
  { name: 'NirDiamant / RAG_Techniques', lang: 'PY', desc: 'RAG 进阶技术大全：29.5k★，每个技术都有详细 Notebook 教程，检索增强生成必读清单。', meta: 'RAG 教程', stat: '29.5k★' }
]

const aiCompanion = [
  { name: '仿生伴侣订单破1.3万台', desc: '优必选"优世界"U1 系列全尺寸超仿生人形机器人持续引爆：全渠道订单累计 13,361 台，售价横跨 11.98万-99万元。从半身版 Lite 到高动态 Ultra，"赛博家人"加速走进客厅与卧室。', meta: '硬件伴侣', stat: '13361台' },
  { name: 'AI 伴侣新规引发"全球分手潮"热议', desc: 'Presidential Hill 报道：全球首个针对 AI 拟人化互动的完整法律框架《人工智能拟人化互动服务管理暂行办法》7月15日生效，中国 AI 伴侣服务大规模调整，海外媒体称其为"AI 浪漫禁令引发集体分手"。', meta: '全球监管', stat: '7/15施行' },
  { name: '欧洲议会持续关注 AI 伴侣', desc: '欧盟研究简报《AI companions 的扩散与挑战》聚焦 Character.AI、Replika 等平台：用户定制伴侣并产生强烈情感依恋，AI 伴侣的治理议题已进入欧盟立法视野。', meta: '全球监管', stat: '欧盟简报' },
  { name: 'DeepSeek 开源智能体框架', desc: 'HelloGitHub 月刊收录：DeepSeek 官方开源的智能体框架，采用"一切皆可工具"的设计哲学，国产大模型厂商加速布局 Agent 生态。', meta: '开源项目', stat: 'DeepSeek' },
  { name: '"赛博家人"时代之问', desc: '齐鲁晚报新知栏目：当机器人长出"血肉"，我们是否准备好迎接"赛博家人"？从《西部世界》设定照进现实，讨论仿生伴侣带来的伦理、情感与社会议题。', meta: '社会讨论', stat: '伦理议题' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：Gemini CLI、Pi、openai-agents-python 构成 Agent 三件套；Whisper 与 SGLang 夯实语音与推理基座；RAG 技术体系持续演进。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · TGS 2026 开幕', desc: '东京电玩展 TGS 2026 昨日开幕（9/17-21，史上最长5天）：1138 家厂商参展创历史纪录，30 周年纪念；《DARK MACHINE》特别活动今日举行，索尼港服同步开启 TGS 游戏折扣（截至9/23）。', meta: '数码资讯', stat: '1138家厂商' },
  { name: '游戏 · GTA6 定档 11月19日', desc: 'Take-Two 股东会确认：《GTA6》将于 2026年11月19日发售（首发仅单人模式），《GTA Online》将继续运营并获得长期支持；《ONE PIECE 海洋盛宴》TGS 现场试玩，开罗游戏开发、万代南梦宫发行。', meta: '游戏资讯', stat: 'GTA6定档' },
  { name: '穿搭美妆 · 早晚凉白天热', desc: '今日阴到多云局部短时阵雨，23~30℃。早晚清凉舒适、午后微热，昼夜温差拉大：建议衬衫+薄外套叠穿，随身带伞防局地阵雨。初秋美妆延续水光感，傍晚微凉注意唇部保湿。', meta: '穿搭指南', stat: '昼夜温差' },
  { name: '理财职场 · GTA6 经济效应', desc: 'Take-Two 确认《GTA6》11月19日发售：行业预计其首年收入将刷新游戏史纪录，带动主机销量与周边产业链；TGS 2026 五天线下面基，游戏行业线下消费场景强势回归。', meta: '财经职场', stat: '11/19发售' },
  { name: '健康 · 换季防感冒指南', desc: '昼夜温差拉大（23~30℃）、午后风力增强（沿江沿海阵风6级）：①洋葱式穿搭应对温差；②阵雨时段出行带伞、路滑慢行；③湿度80%-40%波动大，多补水防秋燥；④晴朗午间可适度晾晒换季衣物。', meta: '健康提醒', stat: '温差7℃' }
]

const localCards = [
  { name: '上海天气 · 9月18日', desc: '阴到多云，局部地区有短时阵雨。23~30℃，偏北风3~4级，沿江沿海地区4~5级，下午转东北风4~5级（沿江沿海阵风6级）。湿度80%~40%，空气质量优（AQI 25-45）。日出05:40，日落17:57。', meta: '今日天气', stat: '23~30℃' },
  { name: '本地要闻', desc: '①第三届上海国际光影节昨晚开幕（9/17-10/16）：新华社现场报道，1个主会场+16个分会场、158场主题活动，践行绿色低碳理念（回收材料+可降解面板）；②静安分会场明日18:00启幕：南京西路/苏河湾/大宁三大商圈，静安公园化身"光影艺术公园"；③上海音乐厅广场"音乐光影奇幻秀"连演10天。', meta: '上海资讯', stat: '3条要闻' }
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
          <span className="date">2026年9月18日 星期五</span>
          <span>第 015 期</span>
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
          <h3>GitHub 热榜：Agent 工具链走向"全家桶"</h3>
          <p>Gemini CLI（107k★）、Pi（106.6k★）、openai-agents-python（29.5k★）构成命令行 Agent 三件套；Whisper 与 SGLang 夯实语音与推理基座；RAG_Techniques 提供检索增强的系统化教程。Agent 生态从单点工具走向完整工具链。</p>
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
        <span>我的工作台 · 每日早报 · VOL.015</span>
      </footer>
    </div>
  )
}
