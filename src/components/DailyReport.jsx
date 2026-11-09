import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'anthropics / claude-code', lang: 'TypeScript', desc: 'Anthropic 官方终端编码 Agent：读懂整个代码库、在命令行里改代码、跑测试、提交 PR，累计约 14.5 万星，是当前最主流的本地编码助手之一。', meta: '编码Agent', stat: '145K★' },
  { name: 'The-PR-Agent / pr-agent', lang: 'Python', desc: '开源 PR 评审 Agent 原版项目，自动分析变更、给评审意见与建议，本周新增约 1,355 星、累计 1.53 万星，适合测试与研发团队接入流水线。', meta: '代码评审', stat: '15.3K★/周+1.4K' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，累计 43.7 万星、月增 43.1 万，连续多周霸占 GitHub 月榜第一。', meta: '逆向工程', stat: '437K★月榜第一' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: 'Fair-code 工作流自动化平台，原生支持 AI、可视化搭建+自定义代码、可自托管，集成超 400 个应用，累计 20.9 万星。', meta: '自动化工作流', stat: '209K★/400+集成' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: 'Agent 跨会话持久记忆：捕获会话行为、AI 压缩后注入未来上下文，兼容 Claude Code/OpenClaw/Codex 等，10.9 万星、9.5 千 fork。', meta: '长期记忆', stat: '109K★' },
  { name: 'f / prompts.chat', lang: 'Markdown', desc: '原 Awesome ChatGPT Prompts 社区站，收集、分享与发现高质量提示词，可自托管保护隐私，累计约 17.6 万星，入门写提示词的常用素材库。', meta: '提示词库', stat: '176K★' }
]

const aiCompanion = [
  { name: 'OpenAI 110 亿美元融资资金到账，CFO 称持续加码数据中心', desc: '网易人工智能早参 11/9：OpenAI 以 1.25 万亿美元估值完成 110 亿美元新一轮融资、初始资金承诺已于周五到账；CFO 表示无论外部环境如何变化，都将持续投资 AI 数据中心与算力。', meta: '头条', stat: '资金已到账' },
  { name: 'Anthropic IPO 估值预期被下调至多 40%，拟感恩节前上市', desc: '第一财经/Reportify 11/8-9：部分潜在投资者给 Anthropic 的 IPO 估值约 1.2~1.3 万亿美元，较此前 2 万亿预期回落至多 40%；公司拟感恩节前完成 IPO、募资 800 亿~1000 亿美元，当前估值约 9650 亿。', meta: 'IPO降温', stat: '预期下调40%' },
  { name: 'Anthropic 官方拆解智能体记忆：memory notes 与 CL-Bench', desc: 'Agentopia 11/8：Anthropic 研究提出 Agent 经验以 memory notes 跨会话留存，可做显著性标注与预测性记录，并发布 CL-Bench 基准衡量记忆在长程任务中的作用——与 claude-mem 等开源记忆项目方向一致。', meta: '技术研究', stat: 'Agent记忆' },
  { name: 'GitHub Octoverse 2026：带 Agent 配置的仓库提交数达普通仓库 8 倍', desc: 'GitHub 官方博客 10/28：今年新建仓库中，带 Agent 配置文件的仓库平均提交数约为普通仓库的 8 倍；截至 9 月，开发者发起的 PR 中超 40% 由 Agent 起步生成，编码 Agent 已成主流工作方式。', meta: '行业趋势', stat: '40%+ PR' },
  { name: 'DeepSeek V4 家族双档现役：v4.1-flash 与 v4-pro，MIT 开源', desc: 'QCode 模型雷达 11/8：现役为 deepseek-v4.1-flash（10/17 升级 1017 版）与 deepseek-v4-pro（8/13 GA），均为 MIT 权重、支持 100 万 Token 上下文，个人学习与本地部署可免费使用。', meta: '开源模型', stat: 'MIT/1M上下文' },
  { name: '周一职场：会用编码 Agent 正在成为测试/研发通用技能', desc: 'claude-code 14.5 万星、pr-agent 周增 1.4 千星——日常写脚本、审变更、补测试用例都能让 Agent 先出草稿；转行或求职时，把"熟练使用 AI 编码工具提效"写进技能项，比只会手工执行更有竞争力。', meta: 'AI伴侣', stat: '职场提效' }
]

const lifeCards = [
  { name: '数码科技 · Agent 已参与超四成代码 PR', desc: 'GitHub Octoverse 2026：超 40% PR 由 Agent 起步；OpenAI 110 亿美元融资到账继续投算力——AI 工具不是概念，而是日常开发流水线的一部分，值得从一个小脚本开始上手。', meta: '前沿科技', stat: 'Agent进流水线' },
  { name: '职场工具 · 开源 PR 评审 Agent 可借鉴到测试脚本', desc: 'pr-agent（1.53 万星）自动评审代码变更；做软件测试的同学可借鉴其"规则化检查+自动评论"思路，把常用测试规范写成脚本或 Agent 规则，减少重复人工核对。', meta: '职场提效', stat: 'Python开源' },
  { name: '穿搭美妆 · 11~13℃ 大风风寒，厚外套可以正式上身了', desc: '今天西北风 6 级阵风 7-8 级、体感仅 9℃，风寒效应明显：厚棉服/轻羽绒+长裤+围巾最稳妥，帽子能挡阵风；薄风衣和短裙今天别穿，明晨郊区更冷，直接按冬天通勤着装准备。', meta: '穿搭指南', stat: '体感9℃大风' },
  { name: '理财职场 · 一级市场估值回落，求职与投资都别追叙事', desc: 'Anthropic IPO 估值预期下调至多 40%、OpenAI 融资落地但估值区间收窄——AI 一级市场从"拼故事"转向"拼营收"；个人求职优先选有真实业务与现金流的岗位，理财上对高估值概念保持耐心。', meta: '财经职场', stat: '估值降温' },
  { name: '健康 · 大风降温防感冒，通勤护口鼻、午后注意保湿', desc: '今天阵风大、体感冷，清晨湿度高午后降到约 61% 偏干：通勤戴口罩护口鼻、进室内及时补水；明晨（11/10）市区约 10℃、郊区个位数为下半年新低，睡前备好厚衣，温差交替最易着凉。', meta: '健康提醒', stat: '明晨最冷' }
]

const localCards = [
  { name: '上海天气 · 11月9日', desc: '阴到多云、局部地区短时小雨，11~13℃（实时 11℃、体感仅 9℃）。西北风 6 级阵风 7-8 级，沿江沿海 7 级阵风 8-9 级，夜里起减弱到 4-5 级。相对湿度 61%~79%（清晨高、午后下降）。AQI 优（19~44，青浦局部优至良 35~55）。日出06:16，日落17:00。风寒效应明显、有冬天体感；明天（11/10）清晨市区约10℃、郊区个位数为下半年新低，周四起最高温重回20℃上下。', meta: '今日天气', stat: '11~13℃大风冷' },
  { name: '本地要闻', desc: '①进博会第 5 天（11/5-10，明天闭幕），周一工作日虹桥周边客流与早高峰通勤叠加，2/17 号线预留时间；②冷空气大风持续：沿江沿海阵风可达 8-9 级，电动车与骑行通勤减速、远离广告牌和临时搭建物；夜间到明晨最冷，外出带防风厚外套。', meta: '上海资讯', stat: '大风+进博会' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周一早安，今天大风降温、体感像冬天，出门穿厚一点护住脖子和耳朵，新的一周稳稳开始 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月9日 星期一</span>
          <span>第 066 期</span>
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
          <h3>OpenAI 110 亿美元融资资金到账、坚定投入数据中心；Anthropic IPO 估值预期被下调至多 40%</h3>
          <p>网易早参 11/9：OpenAI 以 1.25 万亿估值完成 110 亿美元融资、资金周五到账，CFO 称持续加码算力；第一财经同日报道 Anthropic 部分投资者给出 1.2~1.3 万亿估值、较此前预期回落至多 40%，拟感恩节前募资 800~1000 亿美元上市，AI 头部公司进入"资金落地、估值分化"阶段。</p>
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
        <span>我的工作台 · 每日早报 · VOL.066</span>
      </footer>
    </div>
  )
}
