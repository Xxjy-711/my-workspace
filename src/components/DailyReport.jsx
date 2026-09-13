import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'jihe520 / MathModelAgent', lang: 'PY', desc: '专为数学建模设计的 Agent & Skills：自动完成数学建模，生成一份完整的可直接提交的论文，今日 GitHub Explore 热榜新晋。', meta: '今日热榜', stat: '数学建模' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor，AI 热度榜 #1。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'freestylefly / awesome-gpt-image-2', lang: 'JS', desc: 'Prompt as Code：GPT Image 2/2.5 提示词与案例库，530+ 案例、20+ 工业级模板与可复用 Skills，本月 +1.7k★。', meta: '本月热榜', stat: '530+案例' },
  { name: 'melgarafael / DeskcommCRM', lang: 'TS', desc: '开源 AI 销售操作系统：一站式管理销售全流程，AI 驱动的开源 CRM，今日 GitHub Explore 热榜新晋。', meta: '今日新晋', stat: 'AI 销售' },
  { name: 'MemPalace / AI 记忆系统', lang: 'TS', desc: '本地优先、开源且性能顶尖的 AI 记忆系统：以逐字文本完整存储对话历史，通过语义搜索精准召回，LongMemEval 基准领先，54.5k★。', meta: 'AI 记忆', stat: '54.5k★' },
  { name: 'BMAD-METHOD / 敏捷 AI 开发', lang: 'PY', desc: 'Breakthrough Method for Agile AI Driven Development：敏捷 AI 驱动开发方法论，52.9k★ 长期热榜项目。', meta: '开发方法', stat: '52.9k★' }
]

const aiCompanion = [
  { name: '智能体产业"新契约"报告发布', desc: '人民网报道：9月13日，传播内容认知全国重点实验室发布《安全为基、创新为翼：构建智能体产业发展新契约》研究报告，直面智能体爆发式增长背后的机遇与风险，从六大维度为产业健康发展提供系统思考。', meta: '政策研究', stat: '六大维度' },
  { name: 'DeepSeek 开口说话了', desc: 'DeepSeek 开始灰度测试 AI 语音对话功能：测试用户可在 App 上体验语音交互，支持四种音色。此前以文本模型著称的 DeepSeek 正式补上"开口"能力。', meta: '大厂动态', stat: '四种音色' },
  { name: 'Meta 发布个人 AI 智能体 Muse', desc: 'Meta 推出个人 AI 智能体 Muse，进一步加码个人 AI 助手赛道。加上此前被曝的 AI 生成角色系统，Meta 正围绕社交场景构建完整的 AI 陪伴矩阵。', meta: '海外动态', stat: 'Meta 新作' },
  { name: 'AI 能表演爱情，但不会心跳加速', desc: '深度观察：AI 伴侣如何建立长期情感联结？角色大模型分层记忆专利（短期/中期/长期三层结构+人格偏置检索算法）让"记忆新陈代谢"成为可能，但也揭示 AI 爱情的边界。', meta: '深度观察', stat: '分层记忆' },
  { name: '机器人伴侣订单超 1.3 万台', desc: '仿生人形机器人 11.98 万元起预售、多款角色可选、搭载情感大模型，不到一个月收获超 1.3 万台订单，"机器人伴侣"概念持续升温，引发关于陪伴本质的讨论。', meta: '硬件伴侣', stat: '1.3万台' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：Agent 技能库与领域 Agent（数学建模、销售 CRM）密集上新；AI 记忆系统成为基础设施热点；测试自动化与汽车电子功能安全需求稳步增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 语音灰度', desc: 'DeepSeek 灰度测试 AI 语音对话，支持四种音色，文本模型巨头补齐语音能力；"支付宝假App"上热搜，警惕仿冒应用下载渠道，认准官方应用商店。', meta: '数码资讯', stat: '语音对话' },
  { name: '游戏 · 暴雪嘉年华大爆发', desc: '2026 暴雪嘉年华官宣三连：《星际争霸》开放世界射击游戏（2030年推出）、《暗黑破坏神5》（2029年发行）、《魔兽争霸3：重制版》20多年来首个官方新战役《Forsaken Kingdom》今日上线（30+小时内容）。《暗黑4》9月15日登陆 Switch 2；索尼新掌机命名"PSP 3"曝光。', meta: '游戏资讯', stat: '暴雪三连' },
  { name: '穿搭美妆 · 多云微凉', desc: '今日多云局部短时阵雨，23~31℃，湿度约80%。穿搭：早晚微凉可备薄外套，午后短袖即可；阵雨时段记得带伞。美妆趋势：初秋"水光肌"底妆与低饱和唇色流行。', meta: '穿搭指南', stat: '局部阵雨' },
  { name: '理财职场 · 智能体新契约', desc: '智能体产业进入爆发期：开源项目火爆出圈、智能体登陆各类终端，监管与产业"新契约"同步构建。职场提示：AI 工具从"会用"走向"会编排"，掌握 Agent 技能库成为新加分项。', meta: '财经职场', stat: '智能体爆发' },
  { name: '健康 · 换季防感冒', desc: '今日多云转晴适合出行，但注意：①昼夜温差约8℃（22-31℃）注意保暖防感冒；②湿度较大局部有阵雨，随身带伞；③明天（9/14）多云有短时阵雨，洗晒宜趁今日午后；④夏秋之交饮食宜清淡润燥。', meta: '健康提醒', stat: '温差8℃' }
]

const localCards = [
  { name: '上海天气 · 9月13日', desc: '多云转晴，局部地区阴有短时阵雨。23~31℃，北到东北风3~4级，下午起沿江沿海地区4~5级。湿度49%~80%，空气质量优（AQI 27）。日出05:37，日落18:03。', meta: '今日天气', stat: '23~31℃' },
  { name: '本地要闻', desc: '①2026上海旅游节大巡游昨晚圆满落幕（"上海有约·美好相逢"，外滩区域半小时恢复交通）；②第48届世界技能大赛在即，9月14日0时起入沪高速省际道口实施交通管制（至27日24时）；③浦江创新论坛持续举行；④第三届上海国际光影节9月17日延中绿地启幕；⑤上海吴淞口国际邮轮港"双船同靠"。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月13日 星期日</span>
          <span>第 010 期</span>
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
          <h3>GitHub 热榜：领域 Agent 井喷，AI 记忆系统成新基建</h3>
          <p>今日热榜上，MathModelAgent（自动出论文的数学建模 Agent）与 DeskcommCRM（AI 销售 OS）领衔新面孔，ECC 持续霸榜；MemPalace 以 54.5k★ 领跑 AI 记忆赛道，"让 AI 过目不忘"正成为 Agent 基础设施的核心命题。</p>
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
        <span>我的工作台 · 每日早报 · VOL.010</span>
      </footer>
    </div>
  )
}
