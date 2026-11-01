import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，今日突破 41.3 万星（+3,726/日），GitHub 史上增长最快项目之一。', meta: '逆向工程', stat: '413K★' },
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '让你的 AI Agent 像房间里最懒的高级开发——"最少改动、最狠删代码"，18.1 万星（+638/日），编码 Agent 新范式。', meta: '编码Agent', stat: '181K★' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'fair-code 工作流自动化平台，原生 AI 能力——可视化编排+自定义代码，400+ 集成，20.9 万星，可自托管。', meta: '工作流', stat: '209K★' },
  { name: 'deepseek-ai / DeepInfer', lang: 'Python', desc: 'DeepSeek 官方高性能推理框架——10 月 16 日创建，24K 星，大规模本地部署 DeepSeek 模型的首选方案。', meta: '推理框架', stat: '24K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: 'DSH 白嫖插件——免登录免 Key 直接用 DeepSeek V4.1 Flash、Kimi K3 等前沿模型，5 万星持续上涨。', meta: '免费AI', stat: '50K★' },
  { name: 'github / replica', lang: 'TypeScript', desc: 'GitHub Design 开源的 AI 原型工具——用你自己的设计系统把想法变成可交互原型，MIT 协议免费商用。', meta: 'AI原型', stat: 'MIT' }
]

const aiCompanion = [
  { name: 'Anthropic 史上最大 IPO：11 月中旬登陆纳斯达克', desc: '中国新闻网 11/1：Anthropic 已向 SEC 递交招股书，计划 11 月中旬挂牌，募资最高 1000 亿美元，估值预期 1.5-2 万亿美元——若上限落地将超越 SpaceX 6 月创下的 1.77 万亿纪录。', meta: 'IPO', stat: '1000亿募资' },
  { name: 'DeepSeek 千亿融资细节曝光：近 30 家机构参投', desc: '第一财经 11/1：DeepSeek 第二轮 1055 亿人民币融资细节浮出，投后估值 6155 亿（约 860 亿美元）。腾讯、宁德时代前两大；新增长鑫存储朱一明、中芯国际、vivo、美团。', meta: '国产AI', stat: '6155亿估值' },
  { name: 'OpenAI 融资遇冷：300 亿目标只拿到 110 亿', desc: '韩媒 11/1：OpenAI 新一轮融资目标从 300 亿美元下调至 200 亿，目前仅拿到约 110 亿；估值目标从 1.4 万亿下调至 1.25 万亿——AI 概念股回调压力。', meta: 'OpenAI', stat: '估值下调' },
  { name: 'iPhone 国行 AI 下周开放测试', desc: '第一财经 11/1：苹果 Apple Intelligence 国行版下周开放公测——中国区用户终于能用 Siri 大模型、智能写作、AI 摘要等功能，运营商推送已就绪。', meta: '苹果AI', stat: '下周公测' },
  { name: 'ponytail 爆火：让 AI 像最懒高级开发', desc: 'ngjoo 11/1：DietrichGebert/ponytail 18.1 万星——"让 AI Agent 像房间里最懒的高级开发"，最少改动、最狠删代码，编码 Agent 从"堆代码"转向"做减法"。', meta: '编码Agent', stat: '181K★' },
  { name: '周日上午晴下午雨，AI 陪伴温暖周末', desc: '上海今天上午晴好 23~25℃，下午 3 点转小雨，夜里雨持续——上午出门晒太阳，下午窝在屋里和 AI 聊聊天，迎接新一周。', meta: 'AI伴侣', stat: '周日愉快' }
]

const lifeCards = [
  { name: '数码科技 · Anthropic 史上最大 IPO', desc: '中国新闻网 11/1：Anthropic 11 月中旬登陆纳斯达克，募资最高 1000 亿美元，估值 1.5-2 万亿——若上限落地将超越 SpaceX 创历史纪录。', meta: '前沿科技', stat: '1000亿募资' },
  { name: '游戏文娱 · ponytail 让 AI 像最懒高级开发', desc: 'ngjoo 11/1：DietrichGebert/ponytail 18.1 万星——"让 AI Agent 像房间里最懒的高级开发"，最少改动、最狠删代码，编码 Agent 新范式。', meta: 'AI开发', stat: '181K★' },
  { name: '穿搭美妆 · 15~25℃ 上午晴下午雨', desc: '今天上午晴好 23~25℃，下午 3 点转小雨——长袖 T 恤加薄外套，上午出门逛街，下午带伞回家，温差大注意别着凉。', meta: '穿搭指南', stat: '15~25℃' },
  { name: '理财职场 · DeepSeek 投后估值 6155 亿', desc: '第一财经 11/1：DeepSeek 第二轮 1055 亿融资细节曝光，投后估值 6155 亿（约 860 亿美元），腾讯、宁德时代前两大——国产 AI 估值锚点确立。', meta: '财经职场', stat: '6155亿' },
  { name: '健康 · 上午空气优，AQI 42 适合户外', desc: '今天上午上海 AQI 42 优，能见度 21km——适合晨跑、散步、晒被子；下午转雨后空气湿度上升，注意关节保暖。', meta: '健康提醒', stat: 'AQI 42 优' }
]

const localCards = [
  { name: '上海天气 · 11月1日', desc: '晴转小雨，15~25℃。上午晴好 23~25℃，下午 15 点转小雨（80% 降水概率），傍晚到夜里小雨持续（90%）。西风 2 级转西北风 2 级。相对湿度 53%→85%。AQI 全天优（35~48）。日出06:09，日落17:06。【上午户外、下午带伞】；明天（11/2）晴 14~21℃。', meta: '今日天气', stat: '晴转雨15~25℃' },
  { name: '本地要闻', desc: '①上午空气优能见度 21km 适合户外活动，下午 3 点后出门带伞；②第九届进博会 11/5-10 国家会展中心举行，倒计时 4 天。', meta: '上海资讯', stat: '下午带伞' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周日早安，今天上午晴好下午转雨，上午出门晒太阳下午窝家啦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月1日 星期日</span>
          <span>第 058 期</span>
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
          <h3>Anthropic 史上最大 IPO：11 月中旬登陆纳斯达克，募资最高 1000 亿美元，估值 1.5-2 万亿</h3>
          <p>中国新闻网 11/1：Anthropic 已向 SEC 递交招股书，计划 11 月中旬挂牌纳斯达克，募资最高 1000 亿美元，估值预期 1.5-2 万亿美元——若上限落地将超越 SpaceX 6 月创下的 1.77 万亿纪录。</p>
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
        <span>我的工作台 · 每日早报 · VOL.058</span>
      </footer>
    </div>
  )
}
