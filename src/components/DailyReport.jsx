import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，月增 42.2 万星、累计 42.3 万，GitHub 史上增长最快项目。', meta: '逆向工程', stat: '423K★/月+422K' },
  { name: 'heygen-com / hyperframes', lang: 'TypeScript', desc: '写 HTML 直接渲染视频，为 Agent 打造——文本即视频脚本，月增 2.2 万星、累计 7.8 万，Agent 内容生成新范式。', meta: '视频生成', stat: '77K★/月+22K' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: '跨会话持久上下文——捕获 Agent 会话行为、AI 压缩后注入未来，兼容 Claude Code/OpenClaw/Codex/Gemini/Hermes/Copilot，11 万星。', meta: '持久记忆', stat: '110K★' },
  { name: 'NousResearch / hermes-agent', lang: 'Python', desc: '自文档化 AI 智能体——自动创建并改进自己的技能蓝图，9 万+ 星，设置简单、开发者最爱。', meta: '自文档化', stat: '90K★' },
  { name: 'openclaw / openclaw', lang: 'Python', desc: 'OSS Agent 框架综合分第一（99.8），39.4 万星、8.3 万 fork、30 天 1.96 万次提交——开源智能体框架龙头。', meta: 'Agent框架', stat: '394K★' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'fair-code 工作流自动化平台，原生 AI 能力——可视化编排+自定义代码，400+ 集成，20.9 万星。', meta: '工作流', stat: '209K★' }
]

const aiCompanion = [
  { name: 'Claude Code 前负责人 Cat Wu 离职仅一天即加盟 OpenAI', desc: '凤凰网科技 11/5 援引商业内幕：Anthropic 旗下 AI 编程工具 Claude Code 前产品负责人 Cat Wu 宣布加入 OpenAI，领导核心产品团队的产品管理工作——AI 编程人才争夺战白热化。', meta: '头条', stat: '人才跳槽' },
  { name: 'OpenAI 总裁：大部分收入来自企业销售，2027 年做好上市准备', desc: '新浪财经 11/5：Greg Brockman 在纳帕科技大会表示，公司大部分收入来自企业销售以应对 Anthropic 挑战；Anthropic 很可能年底前上市，OpenAI 正大力推广 Codex 智能体。', meta: 'IPO动态', stat: '2027上市准备' },
  { name: 'OpenAI 推出 GPT-6.1 Terra', desc: 'OpenAI 产品发布页 11/4：GPT-6.1 Terra 正式推出，持续补全 GPT-6 家族；此前 GPT-6 Rosalind Research 已面向少量获批 Research 客户开放，专攻多步骤生命科学研究。', meta: 'OpenAI', stat: 'GPT-6.1 Terra' },
  { name: 'OpenAI 用数千个 AI 智能体挖掘脑细胞数据新线索', desc: 'OpenAI 研究 11/3：联合 PerturbAI、斯克里普斯研究所，利用分布式 AI 智能体从数百万个脑细胞数据中发掘有潜力的研究线索——Agent 集群做科研。', meta: 'AI科研', stat: '数千Agent' },
  { name: 'Agent 框架榜：OpenClaw 39.4 万星综合第一', desc: 'AI Hippo 11/2：开源 Agent 框架 OpenClaw 综合分 99.8，39.4 万星、8.3 万 fork；claude-mem 月增 1.4 万星——记忆层与框架层同步升温。', meta: '开源热度', stat: '框架第一' },
  { name: '周四开工：AI 编程从模型之争转向人才与生态之争', desc: 'Cat Wu 跳槽、Codex 加码推广、Agent 记忆/框架开源齐涨——选工具多看生态与活跃度，别只看单模型分数。', meta: 'AI伴侣', stat: '开工加油' }
]

const lifeCards = [
  { name: '数码科技 · Claude Code 前负责人跳槽 OpenAI', desc: '凤凰网科技 11/5：Claude Code 前产品负责人 Cat Wu 离职一天即宣布加入 OpenAI、执掌核心产品团队产品管理——AI 编程赛道人才争夺开打。', meta: '前沿科技', stat: '人才跳槽' },
  { name: '游戏文娱 · OpenAI 大力推广 Codex 智能体', desc: '新浪财经 11/5：面对 Anthropic 年底或上市的竞争压力，OpenAI 正大力推广 Codex 编程智能体，企业销售成主要收入来源。', meta: '模型竞争', stat: 'Codex加码' },
  { name: '穿搭美妆 · 16~20℃ 大风天穿防风外套', desc: '今天北到西北风 4~5 级阵风 6 级、沿江沿海阵风 7 级——薄毛衣加防风风衣，别穿裙摆太大、帽子戴紧，风大头发易乱。', meta: '穿搭指南', stat: '16~20℃防风' },
  { name: '理财职场 · 两大巨头 IPO 节奏：Anthropic 年底、OpenAI 2027', desc: '新浪财经 11/5：Anthropic 很可能年底前上市，OpenAI 称 2027 年做好准备——AI 板块长期受巨头上市预期支撑，短期注意情绪波动。', meta: '财经职场', stat: 'IPO预期' },
  { name: '健康 · AQI 良、PM2.5 偏高，防风防尘', desc: '今天 AQI 良（50~90，首要污染物 PM2.5），大风扬尘天敏感人群（鼻炎、咳嗽）出门戴口罩；夜间降温到 13~14℃，早晚加件外套。', meta: '健康提醒', stat: 'PM2.5偏高' }
]

const localCards = [
  { name: '上海天气 · 11月5日', desc: '阴转多云，16~19℃（实测 13~18℃）。上午阴 17℃ 空气优，全天降水概率 0%、无雨，傍晚转阴 16℃。北到西北风 4~5 级阵风 6 级，沿江沿海 5~6 级阵风 7 级，需防风。相对湿度 76%（90%~65%）。AQI 良（50~90，首要 PM2.5）。日出06:13，日落17:03。【风大穿防风外套】；明天（11/6）阴 14~20℃ 东北风3级。', meta: '今日天气', stat: '阴16~19℃大风' },
  { name: '本地要闻', desc: '①第九届进博会今天（11/5）国家会展中心（虹桥）开幕，会期 11/5-10 共 6 天，周边道路和轨交 2、17 号线客流大、交通管控，出行注意绕行；②今天沿江沿海阵风 7 级，注意高空坠物、广告牌和阳台物品收纳。', meta: '上海资讯', stat: '进博会开幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周四早安，今天进博会开幕、大风无雨，穿好防风外套，新的一天加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月5日 星期四</span>
          <span>第 062 期</span>
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
          <h3>Claude Code 前负责人 Cat Wu 离职仅一天即加盟 OpenAI，执掌核心产品团队——AI 编程人才争夺战白热化</h3>
          <p>凤凰网科技 11/5 援引商业内幕：Anthropic 旗下 Claude Code 前产品负责人 Cat Wu 宣布加入 OpenAI，领导核心产品团队产品管理；同期 OpenAI 总裁称 2027 年做好上市准备、正大力推广 Codex 智能体。</p>
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
        <span>我的工作台 · 每日早报 · VOL.062</span>
      </footer>
    </div>
  )
}
