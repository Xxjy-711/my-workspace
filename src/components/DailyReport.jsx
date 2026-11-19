import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'HKUDS / CLI-Anything', lang: 'Python', desc: '约 59.4K 星、当日新增约 384：把各类软件能力封装成适合 AI Agent 调用的命令行接口，让智能体通过统一 CLI 调用外部工具与服务，是 Agent 工具接入层的热门项目。', meta: 'Agent CLI 封装', stat: '59.4K★/日+384' },
  { name: 'astral-sh / uv', lang: 'Rust', desc: '约 92.2K 星、当日新增约 260（首次记录）：用 Rust 编写的 Python 包与项目管理器，统一管理 Python 版本、项目依赖与隔离环境，并通过锁文件复现开发配置，安装与解析速度显著优于传统工具链。', meta: 'Python 环境管理', stat: '92.2K★/日+260' },
  { name: 'cursor / plugins', lang: 'TypeScript', desc: '约 17.1K 星、当日新增约 315：Cursor 官方插件规范与公共插件仓库，包含开发规范、大量开发者工具及第三方集成插件，可作为在 Cursor 中扩展编码能力的参考。', meta: '编辑器插件仓库', stat: '17.1K★/日+315' },
  { name: 'nvm-sh / nvm', lang: 'Shell', desc: '约 96.1K 星、当日新增约 199：在 POSIX Shell 中安装、切换和管理多个 Node.js 版本的经典工具，前端与 Node 开发环境多版本并存时常用，配合包管理器做版本隔离。', meta: 'Node 版本管理', stat: '96.1K★/日+199' },
  { name: 'openvinotoolkit / openvino', lang: 'C++', desc: '约 11.2K 星、当日新增约 18（首次记录）：英特尔开源的深度学习模型优化与部署工具包，可转换、压缩模型并在受支持的处理器上执行本地推理，适合 CPU/核显侧的本地模型落地。', meta: '本地推理部署', stat: '11.2K★/日+18' },
  { name: 'n8n-io / n8n', lang: 'TypeScript', desc: '约 210.9K 星、当日新增约 315：支持可视化编排、自定义代码与 AI 能力的工作流自动化平台，可串联应用、API 与智能体节点，搭建自动化流程与内部工具。', meta: '工作流自动化', stat: '210.9K★/日+315' }
]

const aiCompanion = [
  { name: '腾讯混元开源 Hy4 flash：224B 参数、1M 上下文', desc: '呼哈日报 11/18：腾讯混元开源 Hy4 flash 家族，含标准版、FP8 量化版与 Base 版，可在 GitHub、Hugging Face、ModelScope 下载；总参数 224B、含 64B Engram 参数，每 token 激活 12B，原生多模态、支持 100 万 token 上下文，API 价格较 Hy4 大幅降低，沐曦曦云 C 系列 GPU 完成 Day 0 适配。', meta: '开源大模型', stat: '224B·1M 上下文' },
  { name: '谷歌开放 Genie 4 世界模型，可实时改天气与角色', desc: '呼哈日报 11/19：谷歌面向 Google AI Ultra 订阅用户开放 Project Genie 新体验，首次提供 Genie 4 世界模型，支持会话中途用提示词实时修改世界、切换天气、添加角色、改变动作，并加入随场景动态适配的实时原生音频；Genie 3 单次探索时长由 60 秒提升至最多 3 分钟，支持世界串联与 360 度全景。', meta: '世界模型', stat: 'Genie 4' },
  { name: '谷歌发布 Gemini 4 Neon：百万上下文、专注深度分析', desc: 'selfhost.memene 11/19：谷歌发布 Gemini 4 系列新模型 Neon，定位在复杂软件工程、知识工作与科学工作流中提供前沿级智能，支持端到端任务快速完成；具备 100 万 token 上下文窗口，定价每百万输入 token 3 美元、每百万输出 token 15 美元。', meta: '旗舰模型', stat: '1M 上下文' },
  { name: 'NVIDIA 向 CNCF 贡献 OpenShell，用策略管控 Agent 行为', desc: 'TechSabado 11/19：NVIDIA 将 OpenShell 贡献给云原生计算基金会（CNCF），该项目通过确定性策略约束 AI 智能体的活动方式，让组织掌握 Agent 运行边界；NVIDIA 同时扩展其开源 AI 工具链，Agent 治理与可观测方向持续升温。', meta: 'Agent 治理', stat: 'OpenShell→CNCF' },
  { name: '腾讯 Q3 财报：云收入增 35%，WorkBuddy 日活超千万', desc: '环球网/今日头条 11/18：腾讯发布 2026 年三季报，营收 2073 亿元、同比增长 8%，受 AI 需求驱动云服务收入同比增幅提升至 35%；AI 应用 WorkBuddy 日活已超 1000 万、日均 token 调用超 100 万亿；本周推出的 Hy4 Flash 上线首日 token 调用量突破 50 万亿。', meta: '财报商业化', stat: '云 +35%·日活千万' },
  { name: '特斯拉 Optimus 演示临近，北京出台具身智能行动方案', desc: '金融界/今日头条 11/19：马斯克公开表示特斯拉将在未来两个月内推出 Optimus 人形机器人演示；北京发布具身智能机器人产业高质量发展行动方案，设定每年 20 万台整机产能目标，与津冀协同布局产业链；星动纪元具身物流机器人已在中国邮政广东八城规模化落地。', meta: '具身智能', stat: 'Optimus·20 万台目标' }
]

const lifeCards = [
  { name: '游戏 · 《GTA6》今日 0 点解锁，媒体评分 99 分追平纪录', desc: 'IT之家/搜狐/新浪财经 11/19：等待 13 年的《侠盗猎车手 6》今日在 PS5、Xbox Series X|S 平台按地区零点滚动解锁，首发无 PC 版，双主角杰森与露西亚回归以迈阿密为原型的罪恶城；Metacritic 超 140 家媒体综合 99 分，追平 1998 年《塞尔达传说：时之笛》保持 28 年的纪录；新西兰玩家 18 日 19:00 抢先进入，影视飓风、罗技等全球多家公司给员工放“GTA 假”。', meta: '今日发售', stat: 'PS5/Xbox·99 分' },
  { name: '数码科技 · Python/Node 环境工具登榜，本地推理部署受关注', desc: 'GitHub 11/18 榜：astral-sh/uv 以 Rust 重做 Python 依赖与环境管理、nvm 继续管理多版本 Node.js；openvino 上榜，主打模型转换优化与处理器本地推理；punkpeye/awesome-mcp-servers 持续扩容 MCP 服务端清单，本地开发与工具接入生态保持活跃。', meta: '开发工具', stat: 'uv·nvm·openvino' },
  { name: '穿搭美妆 · 周四晴到多云体感仅 4℃，叠穿方便脱卸', desc: '今日 6~13℃ 但清晨体感只有 4℃、湿度偏低，白天西北风 2 级、风寒明显：白天薄羽绒或厚夹克叠针织内搭，方便午间升温后脱卸；早晚接近 6℃，围巾可备；明晨郊区有霜、西北风 4-5 级，出门再加一层，风大注意持妆与发型。', meta: '周四穿搭', stat: '6~13℃ 叠穿' },
  { name: '理财职场 · AI 商业化提速，关注应用落地与工具链岗位', desc: '腾讯 Q3 云收入增 35%、WorkBuddy 日活破千万，混元 Hy4 Flash 以高性价比压低推理成本，模型调用量持续放量；求职可关注 AI 应用落地、Agent 工具链、云服务与模型部署相关岗位，优先选有真实付费客户与稳定调用量的团队，避免只做演示项目。', meta: '职场财经', stat: 'AI 商业化' },
  { name: '健康 · 清晨辐射降温最冷，干燥多补水、明晨防结霜', desc: '今晨体感 4℃、昼夜温差约 7℃，辐射降温使清晨最冷；相对湿度仅 31%、空气干燥，注意补水保湿与呼吸道防护；明晨郊区有霜或暗霜，早出门留意路面湿滑、骑车减速；今日紫外线弱，无需强防晒。', meta: '健康提醒', stat: '低温·干燥·有霜' }
]

const localCards = [
  { name: '上海天气 · 11月19日', desc: '多云到阴，6~13℃（实时 8℃、体感 4℃）。东南风转西北风 2 级；相对湿度 31%，AQI 54 良，能见度约 28.9 公里，气压 1029hPa。日出06:25，日落16:54。明天多云 5~12℃、西北风 3 级、湿度 45%、AQI 55 良；11/21 晴 8~15℃；11/22 阴 11~14℃；11/23 阴 7~18℃、降水概率 70%。', meta: '今日天气', stat: '6~13℃ 多云' },
  { name: '本地要闻', desc: '①上海发布提醒：明天 6~12℃ 晴到多云，叠加辐射降温，明晨更冷、有霜或暗霜，西北风 4-5 级，早出晚归要穿暖。②周五至周日以上海晴或多云为主，早间受辐射降温影响气温仍在低位，白天逐日回暖，周日最高约 16℃；预计下周一前后有一次弱降水天气过程。', meta: '上海资讯', stat: '明晨有霜·回暖' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周四早安，晴到多云 6~13℃，但清晨体感只有 4℃、风寒明显；白天叠穿方便脱卸，明晨郊区有霜、西北风加大，出门添件外套 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月19日 星期四</span>
          <span>第 076 期</span>
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
          <h3>腾讯混元开源 Hy4 flash（224B/1M 上下文）；谷歌开放 Genie 4 并发布 Gemini 4 Neon；NVIDIA 向 CNCF 贡献 OpenShell；腾讯云收入增 35%</h3>
          <p>模型侧腾讯混元开源 Hy4 flash 家族，224B 参数、1M 上下文并提供 FP8 量化；谷歌开放 Genie 4 世界模型，发布百万上下文的 Gemini 4 Neon。治理侧 NVIDIA 将 Agent 策略管控项目 OpenShell 贡献给 CNCF；产业侧腾讯 Q3 云收入增 35%、WorkBuddy 日活破千万，特斯拉 Optimus 演示临近、北京出台具身智能行动方案。GitHub 榜单上 CLI-Anything、uv、cursor/plugins、nvm、openvino 与 n8n 等工具与平台项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.076</span>
      </footer>
    </div>
  )
}
