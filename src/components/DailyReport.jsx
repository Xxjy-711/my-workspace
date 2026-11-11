import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'openclaw / openclaw', lang: 'TypeScript', desc: '现象级开源个人 AI 助手，MIT 许可，可用 TypeScript 快速部署到 macOS / Windows / Linux，累计约 39.4 万星、HelloGitHub 评分 9.4，是当前个人 Agent 框架头部项目。', meta: '个人Agent助手', stat: '394.3K★' },
  { name: 'vercel-labs / agent-desktop', lang: 'Rust', desc: 'Vercel Labs 出品的 Agent 桌面端，今日飙升榜新增约 3.8K 星、累计约 1.3 万星，把编码/执行 Agent 放进桌面应用界面，适合关注桌面 Agent 形态。', meta: 'Agent桌面端', stat: '13.0K★/日+3.8K' },
  { name: 'sherlock-project / sherlock', lang: 'Python', desc: '经典开源工具：按用户名在各大社交平台批量检索账号是否存在，11/10 日榜新增约 3,291 星，仍是排查个人网络足迹与账号一致性的常用脚本。', meta: '用户名排查', stat: '日+3.3K' },
  { name: 'meta / astryx', lang: 'TypeScript', desc: 'Meta 系新上趋势项目，11/10 日榜新增约 3,170 星，与 sherlock、rea 同日跻身增速前三，具体能力以仓库 README 为准，适合持续观察其后续迭代。', meta: '趋势新项目', stat: '日+3.2K' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: 'Agent 跨会话持久记忆：捕获会话行为、AI 压缩后注入未来上下文，兼容 Claude Code / OpenClaw / Codex 等；今日再增约 1.1K 星、累计约 11.2 万星。', meta: '长期记忆', stat: '112K★/日+1.1K' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，累计约 43.7 万星，11/10 日榜再增约 3,254 星，长期占据 AI Agent 榜前列。', meta: '逆向工程', stat: '437K★/日+3.3K' }
]

const aiCompanion = [
  { name: '头条 · Anthropic 冲刺史上最大 IPO，目标市值约 1 万亿美元', desc: '金融界 11/11：Anthropic 推进 IPO 估值目标约 1 万亿美元；招股书披露 Fable 5.2 / Mythos 5.2 降价与合同折扣，抵消了第三季度约 6 亿美元因用量增长带来的收入增量，更大压力来自采购与租赁合同承诺等资本开支。', meta: '头条IPO', stat: '目标约1万亿' },
  { name: 'Fable 5.2 刷 72 项世界纪录：30 小时完成费马大定理形式化验证', desc: '智源社区 11/11：新旗舰在数学与工程领域表现惊艳，Fable 5.2 仅用 30 小时完成费马大定理形式化验证，并在极简提示下自主推进任务；此前已解出两个黑洞物理开放问题，科学推理能力再被验证。', meta: '模型能力', stat: '72项纪录' },
  { name: 'Meta 发布 Muse Ember：跑分媲美 Haiku 5.5，单任务成本仅 1/3', desc: 'IT之家/智东西 11/10：Meta 迄今最小、最省的模型，面向 Agent 日常反复的工具调用、编码子任务、路由与文档抽取；Artificial Analysis 表现媲美 Claude Haiku 5.5，多项测试超 GPT-6 Luna，输入 $0.10 / 百万 token。', meta: '轻量模型', stat: '成本1/3' },
  { name: 'Anthropic FlashProve：用 zkSNARK 密码学验证 AI 推理', desc: 'RadarAI 11/11：FlashProve 原型借助 zkSNARK 让模型响应可验证、却不暴露权重，尝试用密码学手段重建 AI 推理的信任基础，对应内容真实性与模型审计方向。', meta: '可信AI', stat: '推理可验证' },
  { name: 'DeepSeek 下一代 V5 拟迁移至华为昇腾；V4 Flash 0731 开源登顶前三', desc: 'RadarAI/AI工具宝箱 11/11：DeepSeek 计划将下一代 V5 预训练迁移至昇腾芯片；开源的 V4 Flash 0731 采用 MIT 许可，总参数 284B（激活 13B），Artificial Analysis 智能指数 50，位列开源模型前三。', meta: '国产动态', stat: '284B/激活13B' },
  { name: 'OpenAI 收购 Pierre Computer Company；DSH 移动端 10 天近 2 万星', desc: 'OpenAI 新闻中心 11/4：宣布收购 Pierre Computer Company, Inc.，继续补强硬件与端侧能力；36氪 11/11 报道 DeepSeek Harness 移动端上线后 10 天狂揽近 2 万星，由 00 后大学生团队做出，Agent 端侧落地加速。', meta: '生态动态', stat: '并购+端侧' }
]

const lifeCards = [
  { name: '数码科技 · 重复任务优先选轻量模型，不必都挂旗舰', desc: 'Muse Ember 用三分之一成本对标 Haiku 5.5，适合工具调用、信息抽取、路由分流这类 Agent 日常重复活；做自动化脚本时可分层：简单重复走小模型、复杂推理再上旗舰，按调用量控成本。', meta: '选型省钱', stat: '分层调用' },
  { name: '效率工具 · Agent 长期记忆值得纳入个人工作流', desc: 'claude-mem 今日再涨 1.1K 星：把常用规则、偏好、历史约定沉淀成可复用记忆，下次开工不用重复交代背景；搭自己的小助手时，"记住你的习惯"比单次长提示词更实用。', meta: '职场提效', stat: '记忆复用' },
  { name: '穿搭美妆 · 昼夜温差超 15℃，洋葱式穿搭中午可脱', desc: '今晨郊区 3~6℃、白天最高冲到约 19℃，郊区昼夜温差可达 15℃ 以上：早晨厚外套+内搭，中午热了能脱；午后多云、紫外线 4 级，出门记得防晒；今天是本周难得的晴天洗晒窗口。', meta: '穿搭指南', stat: '昼夜温差大' },
  { name: '理财职场 · AI 大厂"增收不增利"，求职看落地付费能力', desc: 'Anthropic 招股书显示降价与折扣吃掉约 6 亿美元用量增量收入，头部公司也面临资本开支与商业化压力；个人求职优先选有真实业务、能为 AI 付费的岗位；轻量模型降价也降低了个人开发者的调用门槛。', meta: '职场财经', stat: '看落地付费' },
  { name: '健康 · 早晚加衣午间补水，明起转阴雨提前备伞', desc: '昼夜温差 10℃ 以上、午后湿度降到 43% 偏干：早晚护好颈背、午间多喝温水润唇；明天（11/12）转阴、降水概率 60%，13~15 日多小雨过程，趁今天晴天把被褥厚衣晒一晒，敏感人群上午空气一般、午后再锻炼。', meta: '健康提醒', stat: '明起转雨' }
]

const localCards = [
  { name: '上海天气 · 11月11日', desc: '晴转多云，12~19℃（实时 13℃、体感 12℃）。今晨市区 8.6℃、郊区 3~6℃（金山 3.7℃，奉贤/青浦/崇明 4℃，松江石湖荡 2.9℃ 最低）；白天阳光在线、最高回升至 19℃ 附近。偏北风中午转东南风 3~4 级、沿江沿海 4~5 级。相对湿度 40%~90%，午后偏干。AQI 良（69~88，部分口径轻度污染，午后转好）。日出06:18，日落16:58。昼夜温差大；明天阴 14~19℃、降水概率 60%，13~15 日多小雨过程。', meta: '今日天气', stat: '12~19℃回暖' },
  { name: '本地要闻', desc: '①今天白天晴好、午后云量增多，是本周少有的洗晒与外出窗口，抓紧晾晒被褥衣物；②明起转阴雨、周三到周五多小雨到中雨量级，通勤记得提前备伞、预留路上时间；上午空气质量一般，老人与呼吸道敏感人群建议午后再外出活动。', meta: '上海资讯', stat: '明起转雨' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周三早安，冷空气收尾、白天回温到 19℃，今天是本周难得的晴天洗晒窗口；早晚还偏冷，出门外套先别急着收 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月11日 星期三</span>
          <span>第 068 期</span>
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
          <h3>Anthropic 冲刺约 1 万亿美元市值 IPO；Fable 5.2 刷 72 项世界纪录，Meta 同步推低成本模型 Muse Ember</h3>
          <p>金融界 11/11：Anthropic 推进 IPO、目标市值约 1 万亿美元，但招股书显示新模型降价与折扣抵消了 Q3 约 6 亿美元用量增量收入；智源同日披露 Fable 5.2 用 30 小时完成费马大定理形式化验证。另一侧 Meta 发布 Muse Ember，以约三分之一成本对标 Claude Haiku 5.5，轻量 Agent 模型价格战加剧；DeepSeek 被曝下一代 V5 预训练拟迁移至昇腾芯片。</p>
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
        <span>我的工作台 · 每日早报 · VOL.068</span>
      </footer>
    </div>
  )
}
