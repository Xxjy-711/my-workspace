import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，今日 41.3 万星（+3,726/日），GitHub 史上增长最快项目之一。', meta: '逆向工程', stat: '413K★' },
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '让 AI Agent 像房间里最懒的高级开发——"最少改动、最狠删代码"，18.1 万星，编码 Agent 新范式。', meta: '编码Agent', stat: '181K★' },
  { name: 'deepseek-ai / super-agent', lang: 'Python', desc: 'DeepSeek 周六发布的开源编程智能体——主动监控开发者群聊获取反馈，正面对标 Anthropic Claude Code。', meta: '新发布', stat: '对标Claude' },
  { name: 'OpenClaw Foundation / openclaw', lang: 'TypeScript', desc: 'GitHub Octoverse 2026 年度报告最活跃开源社区——独立开发者社区第一，Agent 时代的开源协作样本。', meta: '年度第一', stat: 'Octoverse#1' },
  { name: 'NousResearch / hermes-agent', lang: 'Python', desc: 'GitHub Octoverse 2026 最活跃单一厂商产品——Nous Research 的 Hermes Agent 框架，智能体开源标杆。', meta: '年度第一', stat: 'Octoverse#1' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'fair-code 工作流自动化平台，原生 AI 能力——可视化编排+自定义代码，400+ 集成，20.9 万星。', meta: '工作流', stat: '209K★' }
]

const aiCompanion = [
  { name: 'DeepSeek 发布 Super-Agent：开源编程智能体正面对标 Claude Code', desc: 'Bloomberg 11/2：DeepSeek Harness 团队周六发布开源"Super-Agent"——能主动监控开发者群聊、获取编程问题反馈，自主性大幅提升，直接挑战 Anthropic 的 Claude Code。', meta: '头条', stat: '开源对标' },
  { name: '千问将集成至 Apple Intelligence', desc: 'AI 早报 11/2：阿里通义千问将集成进苹果 Apple Intelligence——国行 iPhone 下周公测后，Siri 背后将接入千问大模型，苹果中国 AI 版图落定。', meta: '苹果AI', stat: '国行落地' },
  { name: 'OpenAI 融资目标再下调 100 亿美元', desc: '众播 11/2：OpenAI 将新一轮融资目标从 300 亿下调至 200 亿美元，估值对应 1.25 万亿（原计划 1.4 万亿）——AI 估值泡沫继续挤水分。', meta: 'OpenAI', stat: '估值1.25万亿' },
  { name: '马斯克挖走 Claude 最强"产品大脑"Jenny Wen', desc: '投资界 11/2：Anthropic Claude Cowork 核心设计者 Jenny Wen 加入 Cursor 任设计负责人，将助力打造 Grok Bot——AI 人才争夺战白热化。', meta: '人才战', stat: 'Cursor+Grok' },
  { name: 'Anthropic Mythos 5.5 或 11/3-4 正式发布', desc: '链捕手 11/2：Anthropic 已在官网嵌入 Mythos 5.5 代码，开发者盲测认为本周三/四是发布窗口；OpenAI 则跳过 6.1 直接发 GPT-6.2 Astra。', meta: '模型大战', stat: '本周发布' },
  { name: '周一开工：AI 编程工具大战升温', desc: 'DeepSeek Super-Agent、Claude Code、Grok Bot、Cursor 四方混战——你写测试脚本的效率，可能下周又要被重新定义了。', meta: 'AI伴侣', stat: '开工加油' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek Super-Agent 对标 Claude Code', desc: 'Bloomberg 11/2：DeepSeek 发布开源编程智能体 Super-Agent，主动监控开发者群聊获取反馈——国产 AI 正面对标 Claude Code。', meta: '前沿科技', stat: '开源发布' },
  { name: '游戏文娱 · Octoverse 2026 开源年度榜', desc: 'GitHub 10/28：OpenClaw Foundation 成最活跃开源社区，Nous Research hermes-agent 成最活跃单一厂商产品——Agent 时代开源版图。', meta: '开源榜单', stat: '年度报告' },
  { name: '穿搭美妆 · 14~22℃ 上午有雾下午晴', desc: '今天上午有雾（能见度5km），下午转晴 21℃——薄毛衣加风衣，上午开车慢点开，下午阳光好适合散步。', meta: '穿搭指南', stat: '14~22℃' },
  { name: '理财职场 · OpenAI 估值下调至 1.25 万亿', desc: '众播 11/2：OpenAI 融资目标从 300 亿砍到 200 亿，估值从 1.4 万亿降到 1.25 万亿——AI 赛道估值回归理性，跳槽谈薪多留个心眼。', meta: '财经职场', stat: '估值1.25万亿' },
  { name: '健康 · 上午雾天能见度5km，开车注意', desc: '今天上午上海有雾，能见度仅 5km，AQI 93 良——出门开车开雾灯、保持车距；敏感人群上午减少户外，下午空气转好。', meta: '健康提醒', stat: '雾天慢行' }
]

const localCards = [
  { name: '上海天气 · 11月2日', desc: '多云转晴，14~22℃。上午有雾（能见度 5km）转晴，白天晴好 21℃，夜里转阴。西北风 3-4 级。相对湿度 71%。AQI 全天良（57~93）。日出06:10，日落17:05。【上午雾天慢行、下午晴好】；明天（11/3）小雨 16~20℃。', meta: '今日天气', stat: '晴14~22℃' },
  { name: '本地要闻', desc: '①上午有雾能见度 5km，开车注意安全、保持车距；②第九届进博会 11/5-10 国家会展中心举行，倒计时 3 天。', meta: '上海资讯', stat: '雾天慢行' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周一早安，上午有雾下午转晴，新的一周开工啦，加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月2日 星期一</span>
          <span>第 059 期</span>
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
          <h3>DeepSeek 发布 Super-Agent：开源编程智能体正面对标 Claude Code，主动监控开发者群聊获取反馈</h3>
          <p>Bloomberg 11/2：DeepSeek Harness 团队周六发布开源"Super-Agent"——能主动监控开发者群聊、获取编程问题反馈，自主性大幅提升，直接挑战 Anthropic 的 Claude Code。</p>
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
        <span>我的工作台 · 每日早报 · VOL.059</span>
      </footer>
    </div>
  )
}
