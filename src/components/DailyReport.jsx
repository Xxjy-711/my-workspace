import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'tester-army / e2e', lang: 'TypeScript', desc: 'GitHub Trending：下一代 e2e 测试框架——覆盖 Web 与移动端，Playwright 生态，端到端测试新选择。', meta: '测试框架', stat: 'Trending' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'Fair-code 工作流自动化平台：原生 AI 能力 + 可视化编排 + 400+ 集成，可自托管可上云，热门 AI 项目常客。', meta: '工作流', stat: '400+ 集成' },
  { name: 'mattpocock / skills', lang: 'Shell', desc: '面向真实工程师的技能包：直接来自作者 .agents 目录的 Agent 技能，开箱即用。', meta: 'Agent 技能', stat: 'Trending' },
  { name: 'faster-whisper', lang: 'Python', desc: 'CTranslate2 加速的 Whisper 转录引擎：本地语音转写更快更省资源，25.7K 星。', meta: '语音转写', stat: '25.7K★' },
  { name: 'ego-lite', lang: '多语言', desc: '与 AI 智能体共用且互不干扰的浏览器：每个 Agent 在独立空间执行任务，不影响你正常浏览网页。', meta: 'Agent 浏览器', stat: '新星' },
  { name: 'pentagi', lang: 'Go', desc: '全自主 AI Agent 系统：可独立执行复杂渗透测试任务的安全测试框架，25.3K 星。', meta: '安全测试', stat: '25.3K★' }
]

const aiCompanion = [
  { name: 'OpenAI 年化收入约 500 亿美元，低于此前报道 180 亿', desc: '每经 10/9：OpenAI 向投资者披露，截至 9 月底年化收入运行率约 500 亿美元（此前报道 680 亿含合作伙伴收入）；Q3 整体收入运行率增长 77%；英伟达、甲骨文等 AI 股应声下跌。', meta: '资本重磅', stat: '年化500亿$' },
  { name: '扩散智能 DiffuSpace 完成数亿人民币融资', desc: '环球网 10/9：经纬创投、顺为资本、君联资本联合领投，中科创星、华为哈勃、地平线等跟投；正在推进新一代更大参数 dLLM（扩散语言模型）训练，计划近期发布并开源。', meta: '融资动态', stat: '数亿元' },
  { name: 'Claude 核心研究员：AI 几年内或超越所有人类', desc: '智源 10/8：Anthropic 强化学习技术负责人 Sholto Douglas 预测，能力超越所有人类的 AI 可能几年内出现，并估算到 2028 年全球 AI 年度资本开支或达 4 万亿美元。', meta: '行业展望', stat: '资本开支4万亿$' },
  { name: 'AI 乙游"数亿融资，正在丢失它的阵地"', desc: '界面 10/9：AI 乙女游戏赛道观察——《星眠》是目前已知唯一拿到游戏版号的 AI 乙游（7/22 过审），《无限谷》至今没有版号；AI 聊天从核心变成点缀。', meta: 'AI 伴侣', stat: 'AI 乙游困境' },
  { name: '微软 Copilot 变身"超级应用"', desc: '新浪 10/8：Copilot 从聊天助手升级为"超级应用"——整合文档、邮件、会议、日程与第三方 Agent 能力，用户在 Copilot 内完成从检索到执行的全流程。', meta: '办公入口', stat: '超级应用' },
  { name: '阿里千问办公发布桌面机器人 QwenNote Eva', desc: '星知 10/8：QwenNote Eva 定价 899 元——千问办公首款桌面机器人，AI 办公硬件再进一步。', meta: 'AI 硬件', stat: '899元' }
]

const lifeCards = [
  { name: '数码科技 · AI 资本节奏', desc: 'OpenAI 年化收入约 500 亿美元（低于此前报道）引发 AI 股波动；DiffuSpace 完成数亿人民币融资；微软 Copilot 升级"超级应用"；阿里发布 899 元桌面机器人 QwenNote Eva。', meta: '数码资讯', stat: 'AI 股波动' },
  { name: '游戏文娱 · 德约今日登场', desc: '上海大师赛正赛今日开打：德约科维奇 vs 胡尔卡奇（约 18:00 后）、兹维列夫 vs 吴易昺（外卡）、谢尔顿 vs 阿尔特迈尔，张之臻亦持外卡出战；AI 乙游《星眠》唯一拿版号、《无限谷》仍未过审；上海国际光影节静安分会场收官。', meta: '文娱资讯', stat: '德约登场' },
  { name: '穿搭美妆 · 阴天穿搭', desc: '今日多云到阴 19~26℃、局部短时小雨：①湿度高（90%~55%）体感略闷；②早晚温差收窄、单层长袖即可；③出门备雨具；紫外线很弱，防晒可轻量。', meta: '穿搭指南', stat: '19~26℃ 局部小雨' },
  { name: '理财职场 · 补班提醒', desc: 'OpenAI 年化收入披露引发 AI 股波动；恒生科技指数拟扩容至 50 只；明日（10/10 周六）调休上班，今晚早点休息。', meta: '财经职场', stat: '明日补班' },
  { name: '健康 · 湿度波动', desc: '今日湿度大（90%~55%）注意通风防潮；秋燥与湿热交替，注意饮食清淡多补水；明天周六补班，调整作息避免节后疲乏。', meta: '健康提醒', stat: '防潮补水' }
]

const localCards = [
  { name: '上海天气 · 10月9日', desc: '多云到阴，局部地区有短时小雨。19~26℃，偏东风3~4级。湿度90%~55%。AQI 优~良（实时 25 优，预报 55-75 良）。日出05:52，日落17:30。出门备把雨具；未来三天多云到阴为主、局部弱降水，11 日夜间降水消散后将迎来 4 天多云好天气。', meta: '今日天气', stat: '19~26℃ 短时小雨' },
  { name: '本地要闻', desc: '①上海劳力士大师赛正赛今日开打：德约科维奇 vs 胡尔卡奇（约 18:00 后）、兹维列夫 vs 吴易昺（持外卡）、谢尔顿 vs 阿尔特迈尔，张之臻亦持外卡出战；静安苏河湾"第二现场"联动网球版"潦草小狗"可爱出圈。②上海国际光影节静安分会场收官；中外企业 CEO 将齐聚第 38 次市咨会；中国上海国际艺术节 10/17 开幕临近。', meta: '上海资讯', stat: '大师赛正赛开打' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，节后第二天，阴天记得带伞 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月9日 星期五</span>
          <span>第 036 期</span>
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
          <h3>OpenAI 年化收入约 500 亿美元，AI 股应声波动</h3>
          <p>低于此前报道 180 亿；DiffuSpace 数亿融资、Claude 研究员预言 AI 几年内超越人类。</p>
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
        <span>我的工作台 · 每日早报 · VOL.036</span>
      </footer>
    </div>
  )
}
