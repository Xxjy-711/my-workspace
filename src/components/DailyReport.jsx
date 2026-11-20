import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'NVIDIA / SkillEvaluator', lang: 'Python', desc: '约 3.7K 星、当日新增约 323：检查智能体技能和插件的结构与安全性，并评估技能之间的重叠度与实际任务效果，帮助团队在接入 Agent 工具链前做质量与风险把关。', meta: 'Agent 技能评估', stat: '3.7K★/日+323' },
  { name: 'google-labs-code / stitch-skills', lang: 'TypeScript', desc: '约 10.4K 星、当日新增约 369：为编程智能体提供连接设计服务的技能，可用于生成界面、管理设计系统并把设计稿转换为可复用组件，衔接设计与前端开发流程。', meta: '设计-代码衔接', stat: '10.4K★/日+369' },
  { name: 'sveltejs / svelte', lang: 'JavaScript', desc: '约 89.7K 星、当日新增约 694：将网页组件编译成浏览器原生代码，支持用响应式状态构建交互界面，运行时体积小、更新效率高，是近年关注度较高的前端框架之一。', meta: '前端框架', stat: '89.7K★/日+694' },
  { name: 'appwrite / appwrite', lang: 'TypeScript', desc: '约 58.2K 星、当日新增约 239：为应用提供用户认证、数据库、文件存储、函数与实时通知等开箱即用的后端服务平台，可作为自建 BaaS 快速支撑前端与移动端应用。', meta: '开源后端平台', stat: '58.2K★/日+239' },
  { name: 'affaan-m / ECC', lang: 'JavaScript', desc: '约 306.5K 星、当日新增约 1,109：为 Claude Code、Codex 等编程 Agent 提供性能优化、代码评审与工程方法沉淀，帮助多 Agent 协作下保持代码质量与流程规范。', meta: 'Agent 工程方法', stat: '306.5K★/日+1.1K' },
  { name: 'punkpeye / awesome-mcp-servers', lang: 'MCP', desc: '约 98.0K 星、当日新增约 52：收集并分类 Model Context Protocol 服务端的精选列表，覆盖数据库、文件、浏览器、办公软件等常见接入场景，是搭建 Agent 工具生态的常用索引。', meta: 'MCP 服务端索引', stat: '98.0K★/日+52' }
]

const aiCompanion = [
  { name: 'Anthropic 纳斯达克上市：发行价 83 美元，市值约 1.47 万亿美元', desc: 'MIT 科技评论/微博 11/20：当地时间 11 月 19 日 Anthropic 以股票代码“ANT”挂牌纳斯达克，发行价 83 美元/股（高于此前 70-78 美元区间），公开发售 9.8 亿股，募资约 813.4 亿美元；盘中报 107.98 美元、较发行价涨 29.36%，对应市值约 1.47 万亿美元。谷歌、英伟达、AMD、博通、美光、微软及台积电旗下 TSMC Partners 以相同发行价私募配售合计认购 260 亿美元无投票权股份，其中谷歌与英伟达各出资 100 亿美元。', meta: '资本市场', stat: 'ANT·募资 813 亿' },
  { name: '面壁 MiniCPM 全球下载超 7000 万，V4.7 端侧 MoE 上 iPhone', desc: 'IT之家 11/19：面壁智能宣布截至 2026 年 11 月，MiniCPM 家族模型全球下载量已超 7000 万次。新一代端侧多模态模型 MiniCPM-V4.7 提供 35B-A3B 与 1B 两种规格，其中 35B-A3B 是 MiniCPM-V 系列首个 MoE 模型，基于 LES 前瞻专家调度加速，在 iPhone 17 Pro Max 上仅占用 3GB 内存即可达到 13+ token/s 解码；MiniCPM 系列已深度赋能三星 Galaxy AI。', meta: '端侧大模型', stat: '下载 7000 万+' },
  { name: 'NVIDIA 开源 Nemotron 3.5 Bolt：8B/4B 量化，面向本地部署', desc: '鲸智社区 11/19：NVIDIA-Nemotron-3.5-Bolt-E4B-4GB 基于 Google Gemma-4-E4B-it 后训练，约 80 亿总参数、40 亿有效参数，采用 Q4_K_M 量化与 GGUF 格式，面向低内存、低延迟的本地部署；最高支持 64K token 上下文与可切换思考模式，可通过 llama.cpp 运行并搭配 DFlash 草稿模型加速，OpenMDW 1.1 许可证开放，支持商业与非商业使用。', meta: '本地开源模型', stat: 'GGUF·64K 上下文' },
  { name: 'Nous Hermes Enterprise 接入 Teams 与 Azure，Agent 跑在隔离 microVM', desc: 'Sulat News 11/20：Nous Research 宣布 Hermes Enterprise 可在 Microsoft Teams、Microsoft Store 与 Azure Container Apps Sandboxes 中运行，Agent 任务运行在隔离 microVM 内；Collective Wisdom 功能允许员工把经审核的技能沉淀为团队可复用资产，知识保留为企业私有；有数据驻留或采购要求的公司可在自有 Azure 租户内运行。Nous 称 Hermes 是 OpenRouter 上排名靠前的公开开源 Agent，每日处理近 2 万亿 token（官方自述数据）。', meta: '企业级 Agent', stat: 'Teams·Azure microVM' },
  { name: 'Reply.io 开源 Jason Harness：把通用 Agent 接入销售流程', desc: 'iHAL 11/20：Reply.io 发布 MIT 许可的开源框架 Jason Harness（Alpha），用于把 Claude Code、OpenAI Codex 等通用 Agent 接入商业获客与客户管理流程，支持调研、活动策划、沟通个性化与潜在客户消息准备；框架不自带语言模型，而是为操作者选用的 Agent 提供指令、持久信息与流程规范，含 9 个运营角色与外部服务扩展系统，运行时源码已于 11 月 1 日开放。', meta: '开源 Agent 框架', stat: 'MIT·Alpha' },
  { name: 'KRAFTON AI 开源 Raon-1-nano：3.1B 韩英双语轻量模型', desc: '鲸智社区 11/19：KRAFTON AI 推出轻量级开源语言模型 Raon-1-nano，主模型约 31 亿总参数、15 亿有效参数，面向韩语与英语的自然对话、指令遵循及工具调用场景，支持长上下文，定位端侧与轻量部署下的双语助手用途。', meta: '轻量开源模型', stat: '3.1B/1.5B 激活' }
]

const lifeCards = [
  { name: '数码科技 · 无屏 AI 录音笔曝光，Meta Muse Charm 12 月上市', desc: 'IT之家/DoNews 11/19-20：Nothing 首款 AI 设备外观流出，采用无屏设计、形似录音笔；Meta 计划 12 月假日季推出 AI 硬件 Muse Charm，售价约 300 美元（约合 2008 元人民币），配 2 英寸屏幕、指纹传感器与 Verizon 最长 12 个月 5G 服务，轻触指纹即可直连 Muse AI 智能体，无需手机或应用；同期苹果在 watchOS 27.3 Beta 中为 Siri Modular 表盘新增大时钟与紧凑时钟两种样式。', meta: 'AI 硬件', stat: 'Nothing·Meta·Apple Watch' },
  { name: '游戏 · GTA6 双平台累计 2458 万份，周末 ZFX 玩家聚会落地上海', desc: '游民星空/IT之家 11/19-20：Sensor Tower 截至 11 月 19 日数据，《GTA6》PS/Xbox 双平台累计销量约 2458 万份、预估营收 23.6 亿美元（已扣退货）；游戏内藏两个“简单模式”开关，可降低敌人血量、减少车辆受损，Xbox Series S 版首发采用 AMD FSR 4.1 超分。本周末 11 月 21-22 日 ZFX 玩家聚会在国家会展中心 2.2 馆举办，拜雅 MMX 100 WL/130 WL 等电竞耳机现场试玩。', meta: '游戏动态', stat: '2458 万份·上海 ZFX' },
  { name: '穿搭美妆 · 周五大风降温，厚外套叠穿+防风配件，买羽绒看绒子含量', desc: '今日 6~12℃、西北风 4-5 级阵风 6 级，风寒明显：白天厚夹克或薄羽绒叠针织内搭，围巾、帽子、手套重点防风；早晚近 6℃、郊区有霜，出门再加一层。选购羽绒服认准新国标 GB/T 14272-2021，重点看绒子含量（90% 鹅绒性价比更高），不要只看充绒量；大风天注意持妆与发型固定。', meta: '周五穿搭', stat: '6~12℃ 防风叠穿' },
  { name: '理财职场 · 大模型公司资本化提速，关注 Agent 落地与端侧方向', desc: 'Anthropic 以 83 美元发行价上市、市值约 1.47 万亿美元，七家科技巨头私募认购 260 亿美元，AI 基础设施与模型公司受资本集中关注；端侧模型、企业 Agent 落地、云服务与工具链仍是招聘活跃方向。求职建议优先选择有真实付费客户、稳定调用量与产品闭环的团队，避免只做演示项目；关注岗位时可留意模型部署、Agent 编排与数据安全相关经验要求。', meta: '职场财经', stat: 'AI 资本化' },
  { name: '健康 · 冬季运动后抓住营养窗口期，减肥不必完全戒主食', desc: '环球网 11/19：运动结束后 30-60 分钟为营养补充“黄金窗口期”，此时骨骼肌细胞对碳水与氨基酸通道开放，营养补充及时、比例恰当有助于肌肉修复增长；减肥不必完全戒主食，搭配优质蛋白与蔬菜、控制总量更可持续。进入冬季注意识别心脏病信号，早晚保暖、规律作息，气温骤降时减少长时间户外剧烈运动。', meta: '健康提醒', stat: '低温·运动营养' }
]

const localCards = [
  { name: '上海天气 · 11月20日', desc: '晴到多云，6~12℃（实时 9℃、体感 6℃）。西北风 4-5 级、阵风 6 级，沿江沿海地区阵风 6-7 级，下午风力略减；相对湿度 38%，AQI 69 良，能见度约 21.4 公里，气压 1029hPa。日出06:25，日落16:54。明天晴 7~15℃、西北风 2 级、湿度 50%、AQI 90 良；11/22 多云 12~16℃；11/23 小雨 9~16℃、降水概率 70%、约 3mm。', meta: '今日天气', stat: '6~12℃ 大风' },
  { name: '本地要闻', desc: '①上海发布提醒：今晨中心城区最低 6℃、郊区 1-4℃有霜或暗霜，白天最高约 12℃，西北风 4-5 级，早出晚归注意添衣保暖、谨防感冒。②周六早晨气温触底，白天回暖起步，周日最高气温可升至 16℃左右，可安排洗晒与出游；下周整体晴多雨少，下周一前后有短暂弱降水，暖湿气流参与下气温回到 19℃附近。', meta: '上海资讯', stat: '今晨有霜·周末回暖' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周五早安，晴到多云 6~12℃，但西北风 4-5 级、阵风 6 级，风寒明显；白天厚外套叠穿，早晚和郊区近 6℃有霜，出门把围巾帽子备上，今天也加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月20日 星期五</span>
          <span>第 077 期</span>
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
          <h3>Anthropic 纳斯达克上市募资 813 亿美元；面壁 MiniCPM 下载超 7000 万；NVIDIA 开源本地部署轻量模型 Nemotron 3.5 Bolt；Hermes Enterprise 接入 Teams/Azure</h3>
          <p>资本市场侧 Anthropic 以 83 美元发行价挂牌 ANT，市值约 1.47 万亿美元，七家科技巨头私募认购 260 亿美元。模型侧面壁 MiniCPM 家族下载超 7000 万次、端侧 MoE 上 iPhone；NVIDIA 开源 GGUF 量化的 Nemotron 3.5 Bolt，可在 llama.cpp 本地运行。Agent 侧 Nous Hermes Enterprise 进入 Teams 与 Azure 隔离沙箱，Reply.io 开源销售 Agent 框架 Jason Harness，KRAFTON AI 开源双语轻量模型 Raon-1-nano。GitHub 榜单上 SkillEvaluator、stitch-skills、svelte、appwrite、ECC 与 awesome-mcp-servers 等项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.077</span>
      </footer>
    </div>
  )
}
