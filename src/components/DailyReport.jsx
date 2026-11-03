import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'deepseek-ai / super-agent', lang: 'Python', desc: '开源编程智能体，主动监控开发者群聊获取反馈——上线一天狂揽 4000+ 星，目前 6.6k 星，正面对标 Claude Code。', meta: '新发布', stat: '6.6K★/天+4000' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，41.3 万星，GitHub 史上增长最快项目之一。', meta: '逆向工程', stat: '413K★' },
  { name: 'qodo-ai / pr-agent', lang: 'Python', desc: '开源 PR 代码审查工具——自动生成 review、改进建议、文档更新，一天新增 122 星，AI 辅助 code review 标杆。', meta: '代码审查', stat: '+122★/天' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'fair-code 工作流自动化平台，原生 AI 能力——可视化编排+自定义代码，400+ 集成，20.9 万星。', meta: '工作流', stat: '209K★' },
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '让 AI Agent 像房间里最懒的高级开发——"最少改动、最狠删代码"，18.1 万星，编码 Agent 新范式。', meta: '编码Agent', stat: '181K★' },
  { name: 'SYSTRAN / faster-whisper', lang: 'Python', desc: 'Whisper 的 CTranslate2 重实现——速度最高 4 倍、内存更省、精度不降，语音转写事实标准，2.6 万星。', meta: '语音识别', stat: '26K★' }
]

const aiCompanion = [
  { name: 'DeepSeek 推出"创作者模式"：自然语言一句话生成自定义插件', desc: '新浪财经 11/3：DeepSeek Harness 团队发布新功能——用户仅用英文自然语言指令即可创建插件，已演示 3D 模型渲染插件、视频编辑工作台，智能体能力再进化。', meta: '头条', stat: '一句话做插件' },
  { name: 'GPT-6.2 Astra 现身 Codex 后台，Anthropic Mythos 5.5 源码曝光', desc: '36氪/链捕手 11/3：OpenAI 在 Codex 用量数据中出现 GPT-6.2 Astra 标签（跳过 6.1）；Anthropic 官网源码被扒出 Claude Mythos 5.5——周末两家同时亮底牌。', meta: '模型大战', stat: '双旗舰曝光' },
  { name: 'DeepSeek Super-Agent 上线一天狂揽 4000+ 星', desc: 'AIWire 11/2：DeepSeek 开源编程智能体 Super-Agent 发布次日即 6.6k 星、651 fork——MIT 协议，被 Bloomberg 定性为"对 Claude Code 的直接挑战"。', meta: '开源热度', stat: '6.6K★' },
  { name: 'OpenAI GPT-6 Astra 已向 Plus/Pro/Business 用户开放', desc: 'OpenAI 官网 9/29：GPT-6 Astra 即日起逐步面向所有 ChatGPT Plus、Pro、Business、Enterprise 用户开放，也可通过 API、Azure、AWS Bedrock 使用。', meta: 'OpenAI', stat: '全面开放' },
  { name: 'PR-Agent 开源 code review 一天 +122 星', desc: 'notatechguy 11/3：qodo-ai/pr-agent 是开源 PR 自动审查项目，与 qodo 商业版形成双轨——AI 辅助 code review 从"玩具"走向"生产工具"。', meta: '开源工具', stat: '+122★/天' },
  { name: '周二开工：模型大战进入"双旗舰同周"节奏', desc: 'GPT-6.2 Astra + Claude Mythos 5.5 同周末曝光，DeepSeek 创作者模式紧跟——你写的测试脚本，很快又要被 AI 重新定义了。', meta: 'AI伴侣', stat: '开工加油' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 创作者模式一句话做插件', desc: '新浪财经 11/3：DeepSeek 发布"创作者模式"——自然语言即可生成自定义插件，已演示 3D 渲染、视频编辑工作台，智能体门槛再降。', meta: '前沿科技', stat: '一句话做插件' },
  { name: '游戏文娱 · GPT-6.2 vs Mythos 5.5 双旗舰同周曝光', desc: '36氪 11/3：OpenAI Codex 灰测 GPT-6.2 Astra，Anthropic 官网源码出现 Claude Mythos 5.5——模型大战进入"双旗舰同周"节奏。', meta: '模型大战', stat: '周末亮底牌' },
  { name: '穿搭美妆 · 14~20℃ 傍晚后有雨带伞', desc: '今天上午多云 18℃，傍晚 5 点后又转小雨、夜里 10 点中雨——薄毛衣加风衣，出门一定带伞，明晚大雨。', meta: '穿搭指南', stat: '14~20℃带伞' },
  { name: '理财职场 · AI 人工智能 ETF 回调蓄势', desc: '新浪财经 11/3：DeepSeek 新模式强化智能体能力，AI 人工智能 ETF 标的指数回调蓄势——板块短期震荡，长期逻辑未变。', meta: '财经职场', stat: 'ETF回调' },
  { name: '健康 · 夜里中雨降温，明晚大雨注意', desc: '今天夜里 10 点转中雨，明天（11/4）小雨转大雨 15~17℃——今天出门带伞、明晚减少外出，关节保暖别着凉。', meta: '健康提醒', stat: '夜里中雨' }
]

const localCards = [
  { name: '上海天气 · 11月3日', desc: '多云转阵雨，14~20℃。上午多云 18℃ 空气优，11-13 点短时小雨，下午多云，傍晚后又小雨，夜里 22 点中雨（2.5mm）。东到东南风 3-4 级，沿江沿海 4-5 级阵风 6 级。相对湿度 62%。AQI 全天良（50~60）。日出06:11，日落17:04。【出门带伞、夜里雨大】；明天（11/4）小雨 15~17℃ 大雨 24.4mm。', meta: '今日天气', stat: '阵雨14~20℃' },
  { name: '本地要闻', desc: '①今晚起降水持续到明晚，过程雨量可达大雨程度，沿江沿海阵风 6 级，注意防风；②第九届进博会 11/5-10 国家会展中心举行，倒计时 2 天。', meta: '上海资讯', stat: '今晚大雨' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周二早安，上午多云下午转雨，出门记得带伞，新的一天加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月3日 星期二</span>
          <span>第 060 期</span>
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
          <h3>DeepSeek 推出"创作者模式"：自然语言一句话生成自定义插件，强化智能体能力</h3>
          <p>新浪财经 11/3：DeepSeek Harness 团队发布新功能——用户仅用英文自然语言指令即可创建插件，已演示 3D 模型渲染插件、视频编辑工作台，智能体能力再进化。</p>
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
        <span>我的工作台 · 每日早报 · VOL.060</span>
      </footer>
    </div>
  )
}
