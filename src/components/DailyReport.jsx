import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'elementalsouls / Claude-BugHunter', lang: 'Python', desc: '约 8.3K 星、当日新增约 1.0K：为 Claude Code 打造的开源漏洞狩猎与红队技能包，覆盖授权安全评估中的漏洞研究、证据复核与报告流程，可直接挂到编码 Agent 的技能体系里。', meta: '安全红队技能', stat: '8.3K★/日+1.0K' },
  { name: 'mvanhorn / last30days-skill', lang: 'Python', desc: '约 68.6K 星、当日新增约 772：以真实互动数据打分的 AI 智能体搜索引擎，检索多个社区与网站近 30 天内容，并生成有依据的摘要，适合做信息调研类 Agent 技能。', meta: 'Agent 搜索技能', stat: '68.6K★/日+772' },
  { name: 'getarcaneapp / arcane', lang: 'Go', desc: '约 9.1K 星、当日新增约 654：面向所有人的现代 Docker 管理工具，通过网页管理容器、镜像、卷与部署项目，是一款可自托管的容器控制台，适合本地/自建服务器运维。', meta: 'Docker 管理台', stat: '9.1K★/日+654' },
  { name: 'DeanChensj / jiangshan-map', lang: 'JavaScript', desc: '约 7.5K 星、当日新增约 288：中国历史交互地图时间轴，覆盖 2400 年、18 个时期，可通过地图与时间轴浏览疆域示意、古今地名沿革与人物行迹，前端可视化历史题材的参考项目。', meta: '历史交互地图', stat: '7.5K★/日+288' },
  { name: 'obra / superpowers', lang: 'Shell', desc: '约 319K 星、当日新增约 1.91K：为编码代理构建的软件开发方法论与技能框架，把工程流程、检查清单与可复用技能组织起来，指导 Agent 按规范完成开发任务。', meta: 'Agent 方法论框架', stat: '319K★/日+1.91K' },
  { name: 'google-research / paper-orchestra', lang: 'Python', desc: '约 2.3K 星、当日新增约 1.18K：Google Research 多智能体框架，将研究素材自动转化为可投稿的 LaTeX 论文，协调文献整理、写作、绘图与排版，适合科研写作流程自动化。', meta: '多智能体论文', stat: '2.3K★/日+1.18K' }
]

const aiCompanion = [
  { name: '商汤开源 SenseNova-Loop-9B 正式版，32 层循环执行 56 次', desc: '智源社区/新浪科技、Hugging Face 模型卡 11/17：商汤日日新 SenseNova 正式发布并开源 SenseNova-Loop-9B 权重与代码，约 9B 参数，32 层权重循环执行 56 次层计算；AWQ 量化版同日上线，本地部署门槛进一步降低。', meta: '开源大模型', stat: '9B·AWQ 量化' },
  { name: 'OpenAI 发布 GPT-6.2 Astra 与 Sol，三项评测创新高', desc: '微博 AI经济 11/18：OpenAI 发布 GPT-6.2 Astra 与 Sol，现已可用，定位为面向最难项目的旗舰模型，强调高效与真实场景表现；在智能体评测 Agents’ Last Exam v1.1 中 Astra 最高分约 78%，三项评测均创新高。', meta: '旗舰模型', stat: 'Astra / Sol' },
  { name: 'DeepSeek 被曝收紧免费用户用量，算力不足', desc: '微博财商学院 11/18：11 月 16 日起 DeepSeek 被曝因算力不足收紧网页端、APP 端免费入口：单次输入上限压缩到约 4 万字，存续超 7 天且无活跃交互的长对话不再接续，每日对话额度另设上限，触顶后提示服务器繁忙。', meta: '免费额度调整', stat: '输入/对话限额' },
  { name: 'Vercel 开源 AI Agent 框架 eve 1.0 正式可用', desc: 'Korecara AI 11/18：Vercel 于 11 月 16 日宣布开源的生产级 AI Agent 构建框架 eve 发布 1.0 版本并一般可用，面向正式部署场景，提供 Agent 编排与应用集成能力，前端团队搭建智能体应用可参考。', meta: 'Agent 框架', stat: 'eve 1.0 GA' },
  { name: '微软布局 Agent Cloud 并推更便宜编码模型，机器人融资升温', desc: 'DEV Community、The Neuron 11/18：微软推进面向 Agent 的云端基础设施，并推出定价更低的编码模型；OpenAI 的智能体进入医院场景；与此同时机器人赛道融资持续涌入，Agent 平台化与垂直落地并行加速。', meta: '产业动向', stat: 'Agent 云 / 机器人' },
  { name: 'NVIDIA / SkillEvaluator：评估 Agent 技能质量的多层框架', desc: 'GitHub 11/17 榜：NVIDIA 开源 SkillEvaluator（Python，约 3.1K 星、当日 +873），检查智能体技能与插件的结构与安全、评估技能重叠与任务实际效果，并生成分层评估报告，适合搭建 Agent 技能体系时做质检。', meta: 'Agent 评测', stat: '3.1K★/日+873' }
]

const lifeCards = [
  { name: '数码科技 · Framework 无线触控板键盘开放预订，ffmpeg 技能包上榜', desc: 'IT之家 11/18：Framework 无线触控板键盘开放预订，99 美元，集成 120Hz 精密触控板；GitHub 上 kajisho5/ffmpeg-skill 同样上榜，为编程智能体提供 42 个本地 FFmpeg 工具并带 MCP 服务器，可做剪切、字幕、转码与输出检查。', meta: '外设 / 工具', stat: '99 美元起' },
  { name: '游戏 · TGA2026 提名公开，《GTA6》8 项领跑并临近发售', desc: '3DM/微博 11/18：TGA2026 年度游戏提名公布，入围包括《007 初露锋芒》《控制：共振》《GTA6》《影之刃零》《生化危机 安魂曲》《塞尔达传说 时之笛》；GTA6 以 8 项提名领跑，11 月 19 日发售，Xbox 或可切新西兰提前解锁；数毛社称其 CPU 需求偏高。', meta: '游戏资讯', stat: 'TGA 提名·GTA6' },
  { name: '穿搭美妆 · 寒潮叠加阵风，今天厚外套防风、明晨备围巾手套', desc: '周三强冷空气抵沪，5~15℃ 但实时体感仅 11℃、西北风 4 级、阵风 6-7 级，风寒感明显：白天穿厚外套或防风夹克，早晚接近 5℃，叠穿方便脱卸；明天郊区最低 2~4℃ 有霜，围巾、手套可提前备上，风大注意持妆与发型。', meta: '周三穿搭', stat: '5~15℃ 防风' },
  { name: '理财职场 · 旗舰模型与 Agent 框架密集发布，关注工程化岗位', desc: 'GPT-6.2 Astra/Sol、商汤 Loop-9B 开源、Vercel eve 1.0 接连上线，Agent 工程化与模型成本下探同步推进；与此同时免费大模型收紧额度，反映算力资源仍偏紧。求职可关注 Agent 平台、编码工具链、模型部署与评测相关岗位，优先选有真实付费落地的团队。', meta: '职场财经', stat: 'Agent 工程化' },
  { name: '健康 · 寒潮昼夜温差大、阵风 6-7 级，呼吸道关节注意保暖', desc: '今日昼夜温差约 10℃、西北风 4 级并有 6-7 级阵风，呼吸道和关节敏感人群注意保暖防风；上午有雾、能见度约 6 公里，通勤留足时间；明天清晨郊区有霜或暗霜，早出门留意路面结霜湿滑，骑车减速。', meta: '健康提醒', stat: '降温·阵风·有霜' }
]

const localCards = [
  { name: '上海天气 · 11月18日', desc: '阴到多云有短时小雨，5~15℃（实时 14℃、体感 11℃）。西风 3 级转西北风 4 级，陆地最大阵风 6-7 级；相对湿度 67%，AQI 68 良，能见度约 6 公里，气压 1025hPa。日出06:24，日落16:55。明天多云 5~11℃、西北风 3 级、湿度 43%、AQI 45 优；11/20 阴 6~12℃；11/21 晴 7~14℃。', meta: '今日天气', stat: '5~15℃ 大风' },
  { name: '本地要闻', desc: '①上海发布大风蓝色预警，强冷空气今天上午抵沪，气温明显下降、降幅约 10℃，阵风 6-7 级，阳台花盆、晾衣架等物品及时收稳。②明天最低 6℃、郊区 2~4℃，有霜或暗霜，清晨注意路面结霜湿滑；今天白天阴到多云，夜间转晴到多云。', meta: '上海资讯', stat: '大风蓝色预警' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周三早安，强冷空气今天上午抵沪，阴到多云有短时小雨、5~15℃，西北风加大、阵风 6-7 级；白天厚外套防风，早晚接近 5℃，明晨郊区有霜，出门注意保暖 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月18日 星期三</span>
          <span>第 075 期</span>
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
          <h3>商汤开源 Loop-9B；OpenAI 发布 GPT-6.2 Astra 与 Sol；DeepSeek 收紧免费额度；Vercel eve 1.0 上线；微软布局 Agent Cloud</h3>
          <p>商汤开源 SenseNova-Loop-9B 正式版并上线 AWQ 量化；OpenAI 推出旗舰 GPT-6.2 Astra 与 Sol，智能体评测创新高；DeepSeek 因算力不足压缩免费输入与对话额度。框架侧 Vercel 开源 Agent 框架 eve 1.0，微软推进 Agent Cloud 并下调编码模型定价。GitHub 榜单上 Claude-BugHunter、last30days-skill、arcane、jiangshan-map、superpowers 与 paper-orchestra 等安全、搜索、运维与科研方向项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.075</span>
      </footer>
    </div>
  )
}
