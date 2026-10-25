import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为一路拆到原生二进制，本周新增 88,243 星至 376.9K，持续霸榜 GitHub 周榜第一。', meta: '逆向工程', stat: '376.9K★' },
  { name: 'DeepOpen / deepopen', lang: 'Python', desc: '开源新模态大模型公司 DeepOpen 开源决策模型：CLINC150 性能第一、Banking77 第二，超越 Meta Llama 2（FT），周下载量过万，今日登上 GitHub 日趋势榜。', meta: '决策模型', stat: '周下载过万' },
  { name: 'BerriAI / litellm', lang: 'Python', desc: 'AI 网关项目 LiteLLM 今日登上 GitHub 日榜，61.9K 星——自称"最快最轻的 AI Gateway"，声称端到端延迟仅 8ms。', meta: 'AI网关', stat: '61.9K★' },
  { name: 'OrchestratorInc / agent-orchestrator', lang: 'Go', desc: '本地多编码代理工作台：每个任务一个 worker、一个 agent、一个独立 workspace，看板跟随真实 PR 和 CI 状态——13.5K 星。', meta: 'Agent工作台', stat: '13.5K★' },
  { name: 'android / skills', lang: 'Kotlin', desc: 'Android 官方 AI Skills 库，本周新增 1,471 星至 9.6K——为 Android 端 AI 助手预置系统级技能。', meta: 'Android', stat: '+1,471★本周' },
  { name: 'K-Dense-AI / scientific-agent-skills', lang: 'Python', desc: '"把任何 AI agent 变成 AI 科学家"——177 个验证过的科研技能 + 100+ 科学数据库，全球 25 万+ 科学家在用。', meta: 'AI科研', stat: '53.3K★' }
]

const aiCompanion = [
  { name: '月之暗面发布 Kimi K3.1 Pro：3万亿参数全球最大开源模型', desc: '澎湃新闻 10/24：月之暗面发布新一代开源模型 Kimi K3.1 Pro——3 万亿级参数、支持 100 万词元上下文，继续保持全球参数规模最大的开源模型，综合智能水平接近闭源旗舰。', meta: '开源模型', stat: '3万亿参数' },
  { name: 'DeepSeek 开源内部推理框架 DeepInfer', desc: 'DoNews：DeepSeek 宣布全面开源内部推理框架 DeepInfer，旨在提升大模型推理效率——从模型到基础设施，DeepSeek 的开源版图继续扩大。', meta: '开源框架', stat: 'DeepInfer' },
  { name: '三个 00 后创办的 AI 公司完成 10 亿美元 A 轮，估值 60 亿', desc: '创业邦 10/24：美国 AI 初创 Flapping Airplanes 完成 10 亿美元 A 轮（Index Ventures、Lux Capital 联合领投，红杉、GV、Kleiner Perkins 参投），估值 60 亿美元——9 个月前估值才 15 亿。', meta: '明星创业', stat: '估值60亿美元' },
  { name: 'DeepOpen 决策模型登顶两大榜单，超越 Meta Llama 2', desc: '嘉祥融媒 10/24：开源新模态公司 DeepOpen 的决策模型在 CLINC150 性能第一、Banking77 第二，超越 Meta Llama 2（FT），模型周下载量过万——国产开源模型再下一城。', meta: '开源模型', stat: '超越Llama2' },
  { name: '开源大模型竞争白热化：Kimi、StepFun、DeepSeek 三方齐发', desc: '本周开源大模型密集发布：月之暗面 Kimi K3.1 Pro（3 万亿参数）、StepFun Step 5 Preview（600B MoE）、DeepSeek 开源 DeepInfer 推理框架——国产开源从追赶走向领跑。', meta: '行业趋势', stat: '开源大战' },
  { name: '台风天收尾，周末宅家 AI 陪伴正当时', desc: '上海台风"蔷琵"今天上午距离最近、下午起风雨渐止——周末窝在家里，和 AI 聊聊天、试试新发布的 Kimi K3.1 Pro，AI 伴侣在极端天气里的陪伴价值再次凸显。', meta: 'AI伴侣', stat: '周末宅家' }
]

const lifeCards = [
  { name: '数码科技 · Kimi K3.1 Pro 发布，3万亿参数开源', desc: '月之暗面发布 Kimi K3.1 Pro：3 万亿参数、支持 100 万词元上下文，全球参数规模最大的开源模型；DeepSeek 同日开源内部推理框架 DeepInfer。', meta: '前沿科技', stat: '3万亿参数' },
  { name: '游戏文娱 · 台风天收尾，下午雨停转多云', desc: '台风"蔷琵"已减弱为热带风暴，今天上午距离上海最近（约250~300km），下午起风雨渐止——上午宅家，下午可以出门透透气了。', meta: '周末天气', stat: '下午转多云' },
  { name: '穿搭美妆 · 18~23℃，上午阵雨下午多云', desc: '今天上午仍有阵雨（最大小时雨强10mm），下午转多云到阴——薄外套+折叠伞上午必备，下午天晴后可单穿卫衣。', meta: '穿搭指南', stat: '18~23℃' },
  { name: '理财职场 · 三个00后AI公司估值60亿美元', desc: 'Flapping Airplanes 完成 10 亿美元 A 轮，估值 60 亿美元——9 个月从 15 亿涨到 60 亿，Index/Lux/红杉/GV/KP 全部入场，AI 创业神话继续。', meta: '财经职场', stat: '估值60亿美元' },
  { name: '健康 · 暴雨预警解除，地铁恢复正常', desc: '上海各区暴雨预警已解除，地铁恢复正常运营——但上午仍有阵雨，出门带伞；陆地阵风 6~7 级，注意高空坠物。', meta: '健康提醒', stat: '预警已解除' }
]

const localCards = [
  { name: '上海天气 · 10月25日', desc: '上午阵雨（最大小时雨强 10mm，累积 10~20mm），下午转多云到阴，18~23℃。北风 4 级、陆地阵风 6~7 级、江河湖面 7~8 级。相对湿度 80%。AQI 优（45）。日出06:04，日落17:12。【台风蔷琵】已减弱为热带风暴：今晨 04 时中心位于浦东南汇嘴以东约 337km 海面（中心气压 985hPa、最大风力 10 级）；今天 08-11 时距离上海最近约 250~300km，傍晚前后越过上海同纬度（距离 350~400km）。上海各区暴雨预警已解除，地铁恢复正常运营。明天多云 16~23℃，西北风 3 级。', meta: '今日天气', stat: '阵雨转多云18~23℃' },
  { name: '本地要闻', desc: '①台风"蔷琵"强度持续减弱：上海各区暴雨预警已解除、地铁恢复正常运营，今天傍晚前后台风越过上海同纬度后逐渐远离；②第九届进博会 11/5-10 国家会展中心举行，倒计时 11 天。', meta: '上海资讯', stat: '预警解除' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，台风天收尾，上午还有阵雨，下午就转多云啦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月25日 星期日</span>
          <span>第 051 期</span>
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
          <h3>月之暗面发布 Kimi K3.1 Pro：3万亿参数全球最大开源模型，支持1M上下文</h3>
          <p>月之暗面 10/24 发布 Kimi K3.1 Pro——3 万亿级参数、100 万词元上下文，综合智能接近闭源旗舰；DeepSeek 同日开源内部推理框架 DeepInfer，国产开源大模型竞争白热化。</p>
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
        <span>我的工作台 · 每日早报 · VOL.051</span>
      </footer>
    </div>
  )
}
