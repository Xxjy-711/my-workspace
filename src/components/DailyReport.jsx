import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'openclaw / openclaw', lang: 'TypeScript', desc: '现象级开源个人 AI 助手，OSS Agent 框架榜第 1，累计约 39.4 万星、8.3 万 fork，可快速部署到 macOS / Windows / Linux，仍是个人 Agent 头部项目。', meta: '个人Agent框架', stat: '394.3K★' },
  { name: 'Lee-xeo / Claude-Cage', lang: 'Go', desc: '当日日榜第 2：在隔离虚拟机工作台里运行 Claude Code 与 Claude Desktop，自带独立代理网络，时区与语言跟随出口节点；只共享你选定的项目目录，可按账号管理多个订阅与配额视图。', meta: '隔离工作台', stat: '日榜第2' },
  { name: 'yetone / magpie', lang: 'Go', desc: '菜单栏一站式给各 Agent 配模型：Codex 走 DeepSeek、Claude Code 走 Kimi，从菜单直接切换，约 3.41 万星，解决多 Agent 多 Key 混接问题。', meta: '模型路由', stat: '34.1K★' },
  { name: 'vercel-labs / agent-browser', lang: 'Rust', desc: '面向 AI Agent 的浏览器自动化 CLI，约 4.91 万星、24 小时新增 775 星，供编码与调研 Agent 自动打开页面、抓取内容并回传结果。', meta: '浏览器自动化', stat: '49.1K★/日+775' },
  { name: 'mvanhorn / last30days-skill', lang: 'Python', desc: '调研型 Agent 技能：跨 Reddit、X、YouTube、HN、Polymarket 与网页检索任一主题，再综合成有据可依的摘要，约 5.7 万星、5K fork，适合做选题与背景调研。', meta: '调研摘要', stat: '57K★' },
  { name: 'skills', lang: 'Python', desc: 'Agent Skills 公共仓库，约 18.98 万星、2.24 万 fork，汇集可被各类编码 Agent 加载的技能定义，是浏览与挑选现成 Agent 工作流的常用入口。', meta: '技能集合', stat: '189.8K★' }
]

const aiCompanion = [
  { name: '头条 · OpenAI 私募融 150 亿美元；Anthropic 下周登陆美股', desc: '金融界转 CNBC 11/13：OpenAI 最新一轮私募融资筹得 150 亿美元，融前估值 1.25 万亿美元，尚未正式结束、预计几周内完成，属为 2027 年潜在 IPO 筹备的机会性融资。另一侧 Anthropic 下周登陆美股，募资最高 644 亿美元、估值直逼 1.4 万亿美元，拟 11/19 或 20 日在纳斯达克上市。', meta: '头条资本', stat: '估值1.25万亿' },
  { name: 'OpenAI 发布网络安全模型 GPT-6 Cyber', desc: 'OpenAI System Card：GPT-6 Cyber 在 ExploitGym 上意图利用成功率 48.5%，高于 GPT-6 Astra 的 42.4%，较前代 GPT-5.6 Cyber（32.1%）相对提升约 51%；蜜罐测试中 99.93% 不越界，目前定向客户开放。', meta: '安全模型', stat: '48.5%' },
  { name: 'Thinking Machines 发布 Inkling 2 Small 并开放 Tinker 微调', desc: 'RadarAI 11/13：Thinking Machines 推出轻量模型 Inkling 2 Small，同时开放 Tinker 微调方案，方便开发者在自有数据上定制，模型生态继续向小尺寸、可微调方向细分。', meta: '轻量模型', stat: '开放微调' },
  { name: '模型生态走向自由组合：豆包接入第三方模型，百度推 Token Exchange', desc: 'RadarAI 11/13：AI 模型生态从单点竞争走向自由组合，豆包接入 Kimi、DeepSeek 等第三方模型；百度推出 Token Exchange 模型交易平台，应用侧可按任务在多家模型间调度与比价。', meta: '生态组合', stat: '多模型调度' },
  { name: 'DeepSeek 开源 DeepInfer 推理框架', desc: 'Houdao 11/13：DeepSeek 开源内部推理框架 DeepInfer，支持分布式推理、投机解码、异步调度与结构化输出；官方技术报告称单集群日均服务吞吐 155 万亿 Tokens，整体收入约 38 美元/GPU·小时。', meta: '开源推理', stat: '155万亿tokens/日' },
  { name: 'Anthropic 上市或复制 SpaceX 被动买入剧本', desc: '凤凰网 11/13：Anthropic 上市头两周股价未必由主动买盘决定，追踪指数的数万亿美元被动资金预计在 5~15 天内蜂拥建仓；这套被动买入剧本由今年 6 月上市、三天暴涨 50% 的 SpaceX 开创，值得持续观察。', meta: '市场观察', stat: '被动资金建仓' }
]

const lifeCards = [
  { name: '数码科技 · Agent 跑隔离工作台，多 Key 用菜单栏切换', desc: '让 Agent 操作代码时优先放进隔离工作台（如 Claude-Cage 式虚拟机），只共享选定目录；同时用 magpie 这类菜单栏工具给不同 Agent 分配不同模型与 Key，避免混接；需要自动开页面抓内容时，可接 agent-browser 这类 CLI。', meta: 'Agent 安全', stat: '隔离运行' },
  { name: '模型选型 · 按任务组合多家模型，不必绑定单一厂商', desc: '模型生态正走向自由组合，一个应用可按任务难度、成本与速度接多家模型；个人选型先看真实场景效果和调用成本，轻量日常任务用小模型、复杂推理再上旗舰，避免一刀切。', meta: '选型思路', stat: '按任务选模型' },
  { name: '穿搭美妆 · 晨雾湿度大，薄外套防风、护肤以补水为主', desc: '今晨有雾、湿度 88%~100%，气温 16~20℃ 不冷：外套选薄款防风面料，内搭针织即可；雾天能见度低，骑车开车注意安全。湿气重时护肤以补水保湿为主，避开过于厚重闷肤的产品。', meta: '雾天穿搭', stat: '湿度90%+' },
  { name: '理财职场 · 周五盘点：AI 融资上市提速，求职仍看现金流', desc: '本周头部 AI 公司融资与上市节奏加快（OpenAI 150 亿私募、Anthropic 下周上市），但估值仍有波动；看机会优先选现金流健康、有真实付费落地的公司。网安专用模型落地，安全测试与攻防方向是可留意的新增岗位。', meta: '职场财经', stat: '周五盘点' },
  { name: '健康 · 晨雾戴口罩，锻炼放上午；明天大雨提前备伞', desc: '晨雾湿度大，呼吸道敏感人群出门可戴口罩；上午空气良、下午转良到轻度污染（PM2.5），户外锻炼尽量安排在上午。明天有较明显小雨（约 18.3mm），今天下班顺路检查雨具、把衣物晾好。', meta: '健康提醒', stat: '上午锻炼' }
]

const localCards = [
  { name: '上海天气 · 11月13日', desc: '雾转多云到阴，16~20℃（实时 17℃、体感 18℃）。东北风转东南风 2~3 级。相对湿度 88%~100%，体感偏湿；上午有雾、能见度约 5 公里。AQI 上午良、下午良到轻度污染（首要污染物 PM2.5），夜间转良。日出06:19，日落16:57。傍晚 17 点、夜间 20 点前后有零星小雨；明天小雨 15~18℃、雨量约 18.3mm，15 日转阴 13~18℃。', meta: '今日天气', stat: '16~20℃雾转阴' },
  { name: '本地要闻', desc: '①今晨有雾、能见度偏低，早高峰开车、骑行减速慢行，保持车距；②明天有较明显小雨（约 18.3mm），今天下班顺路检查雨具、提前晾好衣物；今天傍晚到夜间湿度接近饱和、衣物不易干，开窗通风选上午空气较优的时段。', meta: '上海资讯', stat: '雾天慢行' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周五早安，今晨有雾、湿度很大，16~20℃ 不冷；上午空气尚可，下午转良到轻度污染，锻炼放上午，明天有大雨记得提前备伞 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月13日 星期五</span>
          <span>第 070 期</span>
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
          <h3>OpenAI 私募融 150 亿美元、估值 1.25 万亿；Anthropic 下周登陆美股；GPT-6 Cyber 网安模型亮相</h3>
          <p>金融界转 CNBC 11/13：OpenAI 最新一轮私募筹得 150 亿美元、融前估值 1.25 万亿，为 2027 年潜在 IPO 筹备资金。Anthropic 下周登陆美股，募资最高 644 亿、估值直逼 1.4 万亿，拟 11/19-20 纳斯达克上市。模型侧 OpenAI 发布网安专用 GPT-6 Cyber（ExploitGym 48.5%），Thinking Machines 推出 Inkling 2 Small 并开放微调；DeepSeek 开源 DeepInfer 推理框架；豆包接入 Kimi、DeepSeek 等第三方模型，百度上线 Token Exchange 平台。</p>
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
        <span>我的工作台 · 每日早报 · VOL.070</span>
      </footer>
    </div>
  )
}
