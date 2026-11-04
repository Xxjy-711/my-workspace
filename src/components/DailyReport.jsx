import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'NousResearch / hermes-agent', lang: 'Python', desc: 'GitHub 新宠——自文档化 AI 智能体，自动创建并改进自己的技能蓝图，9 万+ 星，智能体开源标杆。', meta: '自文档化', stat: '90K★' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: '跨会话持久上下文——捕获 Agent 每次会话行为、AI 压缩后注入未来会话，兼容 Claude Code/OpenClaw/Codex/Gemini/Hermes/Copilot，月增 1.4 万星。', meta: '持久记忆', stat: '110K★/月+14K' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，41.3 万星，GitHub 史上增长最快项目之一。', meta: '逆向工程', stat: '413K★' },
  { name: 'f / prompts.chat', lang: 'JavaScript', desc: '原 Awesome ChatGPT Prompts——社区分享、发现、收集提示词，可自托管完全隐私，17.6 万星。', meta: '提示词库', stat: '176K★' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'fair-code 工作流自动化平台，原生 AI 能力——可视化编排+自定义代码，400+ 集成，20.9 万星。', meta: '工作流', stat: '209K★' },
  { name: 'deepseek-ai / super-agent', lang: 'Python', desc: 'DeepSeek 开源编程智能体——主动监控开发者群聊获取反馈，上线两天 6.6k 星，正面对标 Claude Code。', meta: '开源对标', stat: '6.6K★' }
]

const aiCompanion = [
  { name: 'DeepSeek 又崩了！昨天 16:58 起网页/APP 对话全线故障', desc: '中国能源网/今日头条 11/4：11/3 下午 16:58 起 DeepSeek 网页、APP 对话均报"服务器繁忙"，官网显示网页/API 部分中断，影响对话服务、V4 Pro API、V4.1 Flash API——网页已恢复，APP 仍故障。', meta: '头条', stat: '服务中断' },
  { name: 'Anthropic 官网上线 Claude Opus 5.5 + Haiku 5.5', desc: 'Anthropic Newsroom 11/4：Claude Opus 5.5 领先 agentic coding 与知识工作，典型工作负载成本比 Opus 5 降 40%；Haiku 5.5 是最快最强小模型，面向摘要、子 Agent、浏览器使用。', meta: '新模型', stat: 'Opus 5.5' },
  { name: 'GPT-6.2 Astra + Claude 5.5 同日泄露，硅谷炸锅', desc: '钛媒体 11/2：OpenAI 跳过 6.1、把回炉重炼一个月的模型升级为 GPT-6.2 Astra 在 Codex 灰度；Anthropic 官网源码曝光同底座双版本 Claude 5.5 系列——泄露是军备竞赛的新武器。', meta: '模型大战', stat: '双旗舰泄露' },
  { name: 'Hermes Agent 9 万星：GitHub 新宠怎么 Storm 起来的', desc: 'AI D-A-M-N 11/3：Nous Research 的 Hermes Agent 破 9 万星，自文档化、设置简单、开发者最爱——集成派 vs 能力派两条路线正在分化。', meta: '开源热度', stat: '90K★' },
  { name: 'claude-mem 月增 1.4 万星：Agent 记忆成刚需', desc: 'GitHub Trending 月度榜：thedotmack/claude-mem 11 万星、月增 14,011——跨会话持久上下文，兼容 Claude Code/OpenClaw/Codex/Gemini/Hermes/Copilot 全主流 Agent。', meta: 'Agent记忆', stat: '月+14K' },
  { name: '周三开工：AI 服务稳定性才是真痛点', desc: 'DeepSeek 崩了、Opus 5.5 降本 40%——个人 Agent 越来越强，但服务稳定性和成本控制才是日常使用的真正分水岭。', meta: 'AI伴侣', stat: '开工加油' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 又崩了', desc: '中国能源网 11/4：11/3 下午 16:58 起 DeepSeek 网页/APP 对话故障，V4 Pro/V4.1 Flash API 中断——网页已恢复，APP 仍故障，重要任务记得留备份通道。', meta: '前沿科技', stat: '服务中断' },
  { name: '游戏文娱 · Claude Opus 5.5 上线成本降 40%', desc: 'Anthropic 11/4：Claude Opus 5.5 领先 agentic coding，典型负载成本比 Opus 5 降 40%；Haiku 5.5 成最快最强小模型——AI 编程成本继续下探。', meta: '模型发布', stat: '降本40%' },
  { name: '穿搭美妆 · 15~19℃ 全天雨穿防水鞋', desc: '今天大雨转阴 15~19℃，上午中雨、傍晚又中雨——薄毛衣加风衣、防水鞋必备，伞别忘；湿度 94% 闷闷的，选透气面料。', meta: '穿搭指南', stat: '15~19℃雨' },
  { name: '理财职场 · DeepSeek 概念股短期波动', desc: 'DeepSeek 服务故障引发 AI 板块短期震荡——AI 人工智能 ETF 回调蓄势，长期逻辑未变，短期别追高、别割肉。', meta: '财经职场', stat: '板块震荡' },
  { name: '健康 · 湿度 94% 关节保暖', desc: '今天相对湿度 94%、能见度 9.1km，全天雨——关节注意保暖、鞋别湿透；AQI 全天优（25~31），空气干净但出门还是带伞。', meta: '健康提醒', stat: '湿度94%' }
]

const localCards = [
  { name: '上海天气 · 11月4日', desc: '阵雨转大雨转阴，15~19℃。上午中雨 17℃ 空气优，下午小雨，傍晚 18 点中雨，夜里 21 点后转多云。东南风 4-5 级。相对湿度 94%。AQI 全天优（25~31）。日出06:12，日落17:03。【全天雨、穿防水鞋】；明天（11/5）阴 13~18℃ 进博会开幕。', meta: '今日天气', stat: '大雨15~19℃' },
  { name: '本地要闻', desc: '①今天大雨转阴、出门带伞穿防水鞋，夜里雨停转多云；②明天（11/5）第九届进博会国家会展中心开幕，11/5-10 持续 6 天，周边交通注意管控。', meta: '上海资讯', stat: '进博会明天开幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周三早安，今天大雨转阴，穿防水鞋带好伞，新的一天加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月4日 星期三</span>
          <span>第 061 期</span>
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
          <h3>DeepSeek 又崩了！昨天 16:58 起网页/APP 对话全线故障，V4 Pro/V4.1 Flash API 中断</h3>
          <p>中国能源网/今日头条 11/4：11/3 下午 16:58 起 DeepSeek 网页、APP 对话均报"服务器繁忙"，官网显示网页/API 部分中断——网页已恢复，APP 仍故障，重要任务记得留备份通道。</p>
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
        <span>我的工作台 · 每日早报 · VOL.061</span>
      </footer>
    </div>
  )
}
