import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'meta / astryx', lang: 'TypeScript', desc: '约 2 万星、1.5K fork：Meta 开源的企业级 React 设计系统，源自内部八年实践、覆盖 13000+ 应用，提供 150+ 无障碍组件、多主题体系、CLI 与模板，面向人机协作与 AI 辅助编程场景，MIT 协议。', meta: '设计系统', stat: '20K★' },
  { name: 'anefzaoui / misterdownloadmanager', lang: 'Rust', desc: '约 5.8K 星、单日新增约 4.7K：纯 Rust 干净室从零编写的下载管理器，支持 Windows、macOS 与 Linux，界面清爽、注重隐私，近期增长很快。', meta: '下载工具', stat: '5.8K★/日+4.7K' },
  { name: 'deepseek-ai / deepseek-harness', lang: 'TypeScript', desc: '约 27.9 万星、近 7 天新增 6.1K：DeepSeek 插件化工程框架，理念"Everything is a Plugin"，把工具、技能与工作流封装为可插拔模块，供 Agent 调用组合。', meta: '工程框架', stat: '279K★' },
  { name: 'microsoft / VibeVoice', lang: 'Python', desc: '约 5.61 万星、6.3K fork，MIT 协议：开源前沿级语音合成，支持语音克隆与多说话人合成，全流程跑在开源基础设施上，是开源语音方向的代表项目之一。', meta: '语音合成', stat: '56.1K★' },
  { name: 'zylon-ai / private-gpt', lang: 'Python', desc: '面向本地模型的私有 AI 应用层：提供 RAG、skills、tools、MCP、text-to-sql 等完整 API，数据不出本机，适合搭建不依赖云端的私有问答与知识库。', meta: '私有本地 AI', stat: '本地 RAG/MCP' },
  { name: 'mastra-ai / mastra', lang: 'TypeScript', desc: '约 2.9 万星、版本 1.81.0：TypeScript 优先的 Agent 框架，内置 agents、workflows、memory、workspaces 与可观测性，可对接 React/Next.js/Node，月 NPM 下载量百万级。', meta: 'Agent 框架', stat: '29K★' }
]

const aiCompanion = [
  { name: '头条 · DeepSeek 开源首个多模态模型 V4-Flash-Vision-Exp', desc: 'DeepSeek 更新日志 11/13、鲸智社区与 AI工具宝箱 11/14：V4 系列首个实验性多模态视觉理解模型上线 API 并以 MIT 协议开源，属 image-text-to-text 类型；Terminal Bench 2.1 得分 83.9、NL2Repo 57.7，多模态 Agent 能力接近 Opus-4.8，中小团队可零授权费本地部署视觉 Agent。', meta: '头条开源', stat: 'MIT 多模态' },
  { name: 'llama.cpp 发布 v1.0.0 首个稳定大版本', desc: 'RadarAI 11/14-15：llama.cpp 发布首个稳定大版本 v1.0.0，标志本地 AI 部署进入成熟期；配合各类量化模型，在消费级硬件上跑离线大模型的工具链更趋稳定，适合想本地折腾模型的用户关注。', meta: '本地部署', stat: 'v1.0.0' },
  { name: 'Claude Fable 5.2 上线两小时被越狱，95 万字提示词泄露', desc: '36氪/头条 11/13、智源社区 11/14：Anthropic 最高端一档模型 Claude Fable 5.2 上线两个多小时即遭越狱黑客 Pliny 攻破 Claude Code，完整系统提示词与工具定义被公开至 GitHub；文档达 953,659 字符、7832 行，体量约两部长篇小说，暴露了底层指令逻辑与 Agent 运行机制。', meta: '安全事件', stat: '953K 字符' },
  { name: '下周看点：英伟达财报大考，Anthropic 冲刺史上最大 IPO', desc: '腾讯新闻 11/15：英伟达将迎来黄仁勋离开后的首份财报；备受期待的 Anthropic IPO 下周公开市场亮相，或成为 AI 情绪催化剂。SEC 文件显示其拟发行价区间每股 70-78 美元，发行 8.25 亿股 A 类普通股。', meta: '资本动态', stat: '下周两大事件' },
  { name: '马斯克声明 Grok 文本水印默认关闭', desc: '智源社区 11/15：马斯克声明 Grok 生成文本的水印默认关闭，仅在法律要求或用户主动请求时开启；AI 生成内容标识规则在各平台之间口径不一，后续可关注监管侧要求。', meta: 'AI 标识', stat: '默认关闭' },
  { name: '《中国人工智能开源生态蓝皮书》发布', desc: '新华网浙江 11/15：在本届中国开源年会上，开源社、Datawhale 等主办，主论坛围绕下一代开源技术、社区、商业、教育与人才开展交流，并举行首批"开源导师"授牌，正式发布《中国人工智能开源生态蓝皮书》。', meta: '行业报告', stat: '开源生态' }
]

const lifeCards = [
  { name: '数码科技 · 视觉模型可本地部署，本地跑模型工具链更成熟', desc: 'DeepSeek 多模态视觉模型以 MIT 开源，做客服、质检、文档理解类视觉 Agent 可零授权费本地部署；llama.cpp 1.0 稳定落地，本地跑模型的工具链更成熟。周末有空可以先在本地环境试试量化推理，不必一开始就上大模型。', meta: '本地 AI', stat: '先跑通小模型' },
  { name: '数码科技 · Meta 开源设计系统，TypeScript Agent 框架持续走强', desc: 'Meta 开源 Astryx，13000+ 内部应用同款组件可直接取用；Mastra 这类 TypeScript Agent 框架月下载百万级，想搭个人 Agent、工具流可以参考其 agents/workflows/memory 分层，做前端的也能直接挑现成组件。', meta: '效率工具', stat: '开源组件' },
  { name: '穿搭美妆 · 北风偏大防风保暖，发型妆容注意抗风', desc: '周日阴到多云、13~19℃，北风 4-5 级、沿江沿海阵风 6 级：出门穿防风外套、内搭针织，围巾可备；风大容易吹乱发型、吹脱底妆，发型尽量做定型，妆容以持妆为主，护肤注意保湿。', meta: '周日穿搭', stat: '北风4-5级' },
  { name: '理财职场 · 下周盯财报与 IPO 定价，求职仍看落地付费', desc: '下周英伟达财报与 Anthropic IPO 定价是 AI 板块两大情绪节点；世界模型赛道融资持续升温。看机会仍优先选现金流健康、有真实付费落地的公司；开源模型密集发布带动测试、工程与多模态相关岗位需求，可重点留意。', meta: '职场财经', stat: '周末复盘' },
  { name: '健康 · 上午有雾注意能见度，居家拉伸傍晚再散步', desc: '上午局部有雾、能见度偏低，外出注意行车走路安全；北风偏大、体感偏凉，关节和呼吸道敏感人群注意保暖。周日适合居家整理、室内拉伸，傍晚转阴到多云、风势减弱后，可短时外出散步透气。', meta: '健康提醒', stat: '居家轻运动' }
]

const localCards = [
  { name: '上海天气 · 11月15日', desc: '阴到多云、局部短时小雨，13~19℃（实时 15℃、体感 15℃，午后最高 19℃）。西北风中午转偏北风 4-5 级，沿江沿海地区阵风 6 级，夜里转 3-4 级。相对湿度 64%~86%。上午有雾、能见度约 2.7 公里；AQI 上午良、傍晚转优。日出06:22，日落16:56。明天阴 13~18℃、东北风 2 级、湿度 67%、AQI 44 优。', meta: '今日天气', stat: '13~19℃阴到多云' },
  { name: '本地要闻', desc: '①上午局部雾、局部短时小雨，出门仍建议备伞，骑行、开车注意能见度；②北风 4-5 级、沿江沿海阵风 6 级，居家晾晒注意防风，阳台物品及时收稳；明天阴天、气温平稳，适合提前做好工作日通勤准备。', meta: '上海资讯', stat: '大风注意' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周日早安，今天阴到多云、局部短时小雨，13~19℃ 北风偏大；上午有雾能见度低，出门备伞注意防风，居家整理休息，傍晚风小了再出门走走 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月15日 星期日</span>
          <span>第 072 期</span>
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
          <h3>DeepSeek 开源首个多模态模型 V4-Flash-Vision-Exp；llama.cpp 1.0 稳定；Claude Fable 5.2 提示词泄露；下周英伟达财报与 Anthropic IPO 登场</h3>
          <p>DeepSeek V4 系列首个实验性多模态视觉理解模型以 MIT 协议开源，Terminal Bench 2.1 83.9、NL2Repo 57.7；llama.cpp 发布 v1.0.0 首个稳定大版本，本地部署趋于成熟。安全侧 Claude Fable 5.2 上线两小时被越狱，95.4 万字符系统提示词被公开。资本侧下周英伟达迎财报大考，Anthropic 冲刺史上最大 IPO；马斯克称 Grok 文本水印默认关闭；《中国人工智能开源生态蓝皮书》发布。</p>
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
        <span>我的工作台 · 每日早报 · VOL.072</span>
      </footer>
    </div>
  )
}
