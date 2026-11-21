import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'alibaba / open-code-review', lang: 'Go', desc: '周榜新增约 4,492：源自阿里集团内部官方 AI 代码评审助手，两年内服务数万开发者、识别数百万缺陷；采用确定性流水线 + LLM Agent 混合架构，读取 Git diff 与完整文件、检索代码库上下文，给出行级精确评论，内置 NPE、线程安全、XSS、SQL 注入等规则，兼容 OpenAI 与 Anthropic 接口，数据可完全私有部署。', meta: 'AI 代码评审', stat: '周+4,492·token 约 1/9' },
  { name: 'meta / astryx', lang: 'TypeScript', desc: '周榜新增约 4,977、总约 31.4K 星：Meta 开源的可完全定制、Agent 就绪设计系统，基于 React 19 与 StyleX 底座，定位为人与 Agent 协作界面而建；提供 Docs、Storybook、Sandbox 三件套，npm 包 @astryx/core，目前处于 Beta 阶段。', meta: '开源设计系统', stat: '31.4K★/周+4,977' },
  { name: 'ChromeDevTools / chrome-devtools-mcp', lang: 'TypeScript', desc: '周榜新增约 3,229、总约 58.5K 星：Chrome DevTools 官方为编码 Agent 推出的 DevTools 工具，MCP 服务端与 CLI 双形态；可让 Claude、Cursor、Copilot 等 Agent 控制并检查真实 Chrome 页面，提供性能洞察、trace 执行决议、网络/截图控制台与 source-map 检索。', meta: '浏览器调试 MCP', stat: '58.5K★/周+3,229' },
  { name: 'firecrawl / firecrawl', lang: 'TypeScript', desc: '当日新增约 825、总约 204.3K 星：抓取网页并清洗整理为纯文本或结构化数据，支持把站点内容接入检索系统、RAG 流水线与智能体工具链，是 Agent 获取外部网页上下文的常用开源组件。', meta: '网页抓取整理', stat: '204.3K★/日+825' },
  { name: 'jingyaogong / minimind', lang: 'Python', desc: '当日新增约 238、总约 66.9K 星：用于从零训练小参数语言模型的教学与实践项目，把数据处理、模型定义、训练循环到推理评估的各环节拆开讲清，适合想理解大模型训练全流程的开发者动手复现。', meta: '小模型教学实践', stat: '66.9K★/日+238' },
  { name: 'toeverything / AFFiNE', lang: 'TypeScript', desc: '当日新增约 182、总约 75.2K 星：把文档、白板与数据库视图结合在同一工作区，用于笔记整理、任务规划与团队知识协作，强调数据自主权，是开源 Notion 类协作工具的代表项目之一。', meta: '开源协作工作台', stat: '75.2K★/日+182' }
]

const aiCompanion = [
  { name: 'Anthropic 上市首日暴涨：开盘 111.50 美元，市值突破 2 万亿美元', desc: '新智元/智源社区 11/21：Anthropic 于 11 月 20 日零时 48 分以代码“ANT”挂牌纳斯达克，开盘价 111.50 美元，较 83 美元发行价上涨 34.3%，较路演区间下限 70 美元高出 59.3%；首笔交易即吸引 1.4 亿股买单，市值迅速突破 2 万亿美元，刷新史上最大 IPO 纪录。', meta: '资本市场', stat: 'ANT·开盘 +34.3%' },
  { name: '腾讯混元 Hy4 正式版开源，天数智芯 Day0 适配 W8A8 量化版', desc: '集微网/今日头条 11/21：腾讯混元新一代大语言模型 Hy4 正式版权重开源，在指令遵循、长文理解、长程任务与深度研究等能力上实现提升；天数智芯依托自研通用 GPU 架构与天数智算软件栈完成 Day0 适配与核心推理链路验证，并联合 FlagOS 发布 W8A8 量化模型版本，支持企业与开发者在国产通用 GPU 上部署 Hy4，验证多模态理解、长程任务与专业分析能力。', meta: '开源模型·国产算力', stat: 'Hy4·W8A8 量化' },
  { name: '魔搭开源 EntroPack：码率可调权重压缩，10GB 显存跑图像模型', desc: '量子位/智源社区 11/20：魔搭团队开源新型模型权重压缩方案 EntroPack，针对传统固定码率（4bit、8bit）量化难以适配多样化模型规模与设备显存限制的问题，支持细粒度、自适应的量化配置；在实测中可让 10GB 显存运行图像模型，误差从 9.4% 降到 4.26%，提升不同硬件环境下的资源利用率与部署灵活性。', meta: '模型压缩量化', stat: '误差 9.4%→4.26%' },
  { name: 'OpenAI 上线 ChatGPT 实时听写：边说边出字，长时限放开', desc: '量子位/智源社区 11/20：OpenAI 于 11 月 18 日正式推出 Live Dictation（实时听写）功能，改变此前语音口述需全程等待转写、过程不可见且易“转录失败”的体验；新功能在语音输入时实时显示文字，支持边说边看、即时修正，并放宽了此前 10 分钟的口述上限，提升语音操作的准确率与可靠性。', meta: '语音交互', stat: 'Live Dictation' },
  { name: 'OpenAI 启动“递归自我提升”RSI：Agent 闭环自研下一代 AI', desc: '量子位/智源社区 11/20：OpenAI 宣布“递归自我提升”（Recursive Self-Improvement, RSI）正式启动，标志 AI 开始系统性参与研发 AI；公司强调通往 AGI/ASI 的真正临界点并非单纯性能超越人类，而是具备设计、训练、优化下一代 AI 系统的闭环研发能力。该方向被视为进化模式的根本转变，同时引发对控制、安全与伦理的讨论。', meta: '前沿研究', stat: 'RSI·自我迭代' },
  { name: 'Claude 自写推理引擎：调试平均等待从 12 秒缩短到 0.5 秒', desc: '智源社区 11/21 转述卡内基梅隆大学 11 月 12 日公布的研究：真实编程会话测试显示，AI 编程助手 Claude 把调试时的平均等待时间从约 12 秒压缩到 0.5 秒；快速响应减少了重复提交与等待，提升问题定位与修复效率，对迭代式 AI 辅助编程的体验优化具有实践参考价值。', meta: '推理性能', stat: '12s→0.5s' }
]

const lifeCards = [
  { name: '数码科技 · Sony 复刻 Walkman 耳机上市，飞利浦 AI 智护新品进博会亮相', desc: 'Marie Claire/新浪 11/20-21：Sony 复刻初代 Walkman 的耳机 MDR-3R 在台上市，《怪奇物语》联名主题，主打复古造型与专注听音的仪式感；飞利浦连续九年赴进博会，本次以“AI 智护科技”为核心，携口腔护理、剃须、头皮养护等多款新品，围绕智能化、个性化、精准化与场景化打造全天候健康护理方案，展台设多个可体验区域。', meta: '消费电子', stat: 'Sony MDR-3R·飞利浦' },
  { name: '游戏 · G-STAR 2026 釜山开幕，首个周末观展人气高涨', desc: 'ZDNet Korea 11/21：韩国最大游戏展 G-STAR 2026 在釜山 BEXCO 开幕后迎来首个周末，各地游戏玩家从场馆入口排起长队，现场展出新作试玩、Cosplay 与厂商活动；国内周末则有 ZFX 玩家聚会、文博市集等线下场次，假期出门可提前核对场馆预约与开放时间。', meta: '游戏展会', stat: 'G-STAR 釜山' },
  { name: '穿搭美妆 · Salomon 2026 冬季系列上线，机能羽绒亮面质感兼顾户外与都市', desc: '新浪 11/20：Salomon 萨洛蒙发布 2026 冬季系列，主题“IN THE OPEN（随冬意入境 任行冬间）”，融合山野机能基因与都市先锋设计，覆盖服饰、鞋履全品类，11 月起分批次登陆官方渠道与指定门店；服装线率先推出 Glossy 系列，采用带细腻光泽的 Shining 面料，含男士连帽鹅绒夹克与女士机能亮面外套，内搭可叠 Uniqlo 发热衣等基础款。', meta: '冬季穿搭', stat: 'Salomon 冬季系列' },
  { name: '理财职场 · 国产大模型开源生态提速，求职关注部署、Agent 编排与数据安全', desc: '金台资讯/今日头条 11/21：工信部数据显示，今年以来国内多家科技企业密集推出开源模型，在参数规模与技术深度上持续突破，开放权重的下载量与衍生模型数量领跑；开源意味着可下载模型在本地或私有云部署、按需微调，对数据隐私要求高的行业更具吸引力。求职可优先关注有真实付费客户与稳定调用量的团队，岗位要求常见模型部署、Agent 编排、评测与数据安全相关经验。', meta: '职场财经', stat: '开放权重生态' },
  { name: '健康 · 智能牙线研究进展，冬季早晚寒意重注意护唇保暖', desc: 'ZDNet Korea 11/21：中国研究团队研发智能牙线，探索通过牙线采样简便检查口腔健康与代谢状态，为口腔-全身健康关联提供新的监测思路（仍属研究阶段，不能替代常规体检）。上海今日早晚近 7℃、体感偏冷，出门注意耳颈保暖；室内外干燥可涂润唇膏，规律作息、气温波动大时减少长时间户外剧烈运动。', meta: '健康提醒', stat: '冬季保暖·口腔健康' }
]

const localCards = [
  { name: '上海天气 · 11月21日', desc: '晴，7~15℃（上海发布口径 5~15℃；实时 10℃、体感 8℃）。西南风 1 级转西北风 2-3 级，夜里转偏东风；相对湿度 46%，AQI 59 良，能见度约 18.2 公里，气压 1030hPa。日出06:26，日落16:53。明天 11/22 多云 12~16℃、东南风 3 级、湿度 57%、AQI 55 良；11/23 阴 10~18℃，周一前后有一次弱降水；11/24 阴 6~13℃、北风 4 级。', meta: '今日天气', stat: '7~15℃ 晴' },
  { name: '本地要闻', desc: '①周末活动：BFC 外滩枫径“有米节”米食主题市集 11/21-22 免费开放，含米饭料理、米制点心、米酒与米香甜品；2026 虹桥国际科技周 11/20-22 在国家会展中心 1.1、2.1 馆举办，AI 大模型、智能体、机器人、自动驾驶、低空经济与新能源等集中亮相，需提前预约免费门票；奉贤海湾镇星火公园“村骑”11/21 上午开赛。②上海发布提醒：下周一有一次弱降水过程，周二起气温下降、风力增大，下周三早晨叠加辐射降温，市区最低仅 5℃、郊区更低，为本轮冷空气最冷时刻，保暖不能松懈。', meta: '上海资讯', stat: '周末市集·科技周' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周六早安，今天晴 7~15℃，早晚寒意较重、白天回暖明显；适合安排逛展和市集，出门备一件外套，周末也慢慢来 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月21日 星期六</span>
          <span>第 078 期</span>
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
          <h3>Anthropic 上市首日暴涨、市值突破 2 万亿美元；混元 Hy4 正式版开源并完成国产 GPU 适配；魔搭开源码率可调压缩方案；ChatGPT 上线实时听写；OpenAI 启动递归自我提升</h3>
          <p>资本市场侧 Anthropic 开盘 111.50 美元、较发行价涨 34.3%，首笔 1.4 亿股买单推动市值破 2 万亿。模型侧腾讯混元 Hy4 正式版开源，天数智芯 Day0 适配并发布 W8A8 量化版；魔搭 EntroPack 以自适应量化让 10GB 显存跑图像模型。产品侧 OpenAI 推出 ChatGPT Live Dictation 边说边出字，并宣布启动“递归自我提升”RSI；Claude 调试等待经 CMU 实测从 12 秒降到 0.5 秒。GitHub 榜单上 open-code-review、astryx、chrome-devtools-mcp、firecrawl、minimind 与 AFFiNE 等项目走热；本周 DeepSeek 开放 App 级 API，llama.cpp 发布 v1.0.0 稳定版。</p>
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
        <span>我的工作台 · 每日早报 · VOL.078</span>
      </footer>
    </div>
  )
}
