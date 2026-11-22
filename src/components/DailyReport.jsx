import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'cloudflare / security-audit-skill', lang: 'JavaScript', desc: '月榜新增约 44,314、总约 75.1K 星：Cloudflare 推出的编码 Agent 安全审计技能，面向多阶段安全审查流程，产出经过独立验证、机器可读的审计结论；可接入 Claude Code、Codex 等 Agent，在提交代码前系统化排查依赖、权限与常见漏洞风险。', meta: 'Agent 安全审计', stat: '75.1K★/月+44,314' },
  { name: 'pbakaus / impeccable', lang: 'Rust', desc: '月榜新增约 30,177、总约 112.6K 星：面向编码 Agent 的“设计词汇库”，用打磨与加粗引导输出方向，以批判、审阅和审计环节拦截 AI 粗制滥造（AI slop）；帮助 Agent 在界面、文案与代码交付前先自我把关，提升成品完成度。', meta: 'Agent 质量把关', stat: '112.6K★/月+30,177' },
  { name: 'heygen-com / hyperframes', lang: 'TypeScript', desc: '月榜新增约 20,425、总约 86.2K 星：HeyGen 开源的免费 AI 视频编辑器 HyperFrames，用自然语言描述视频即可生成一个可编辑的真实工程，画面可逐帧调整；把文本生成视频从“成片不可改”推进到“可回到时间线逐段修改”的工作流。', meta: '开源 AI 视频编辑', stat: '86.2K★/月+20,425' },
  { name: 'Graphify-Labs / graphify', lang: 'Python', desc: '当日新增约 527、总约 151.4K 星：把代码库连同文档、SQL 建表、配置文件与 PDF 一并转换成可查询的知识图谱；默认用 tree-sitter 在本地解析，不依赖向量库，为 Agent 提供调用链、依赖关系与变更影响范围的结构化上下文。', meta: '代码知识图谱', stat: '151.4K★/日+527' },
  { name: 'vercel-labs / agent-desktop', lang: 'Rust', desc: '月榜新增约 23,263、总约 25.1K 星：Vercel Labs 出品的 Computer Use 命令行工具，专为 AI Agent 设计；以原生 Rust 二进制在终端驱动桌面与浏览器操作，让 Agent 可点击、输入并读取界面状态，适合作为自动化任务的手脚层。', meta: 'Agent 桌面控制 CLI', stat: '25.1K★/月+23,263' },
  { name: 'thedotmack / claude-mem', lang: 'TypeScript', desc: '月榜新增约 17,236、总约 118.1K 星：为各类编码 Agent 提供跨会话持久记忆；自动捕获 Agent 在会话中完成的操作与结论，用 AI 压缩整理后，在后续会话按需回注相关上下文，减少反复交代背景与重复踩坑。', meta: 'Agent 持久记忆', stat: '118.1K★/月+17,236' }
]

const aiCompanion = [
  { name: 'Inkling 2 Mini 开放权重 MoE 实测：M5 Max 单流 43 tok/s，自研引擎 3090 达 129.5 tok/s', desc: '智源社区 11/22：Thinking Machines Lab 开放权重 MoE 模型 Inkling 2 Mini 释出次日，两份 NVIDIA 显卡独立实测贴出。Apple silicon 引擎 Rapid-MLX 在 M5 Max、36GB 内存 Mac 上 4-bit 精度单流 43 tok/s、峰值内存约 23GB；另有开发者用自研引擎把单张 RTX 3090 推到 129.5 tok/s，而现成 llama.cpp 在 256K 输入下解码速度仅约 Gemma 三成，慢因已被定位。', meta: '本地推理实测', stat: '43 tok/s·23GB' },
  { name: '腾讯混元团队首次 Reddit AMA：Hy4-mini 列入路线图，下一代 Hy 规模将显著扩大', desc: '21 世纪经济报道/智源社区 11/21：腾讯首席 AI 科学家、混元负责人姚顺雨带队研究员登陆 Reddit r/LocalLLaMA，做了两小时 AMA，页面收到 300 多条留言；团队确认更小尺寸的 Hy4-mini 已列入研发路线图，并计划推出更轻量版本，同时透露下一代 Hy 模型规模将显著扩大，回答覆盖训练数据、上下文长度与开源节奏等问题。', meta: '开源模型路线图', stat: 'Hy4-mini' },
  { name: '国产开源大模型全球累计下载破 100 亿次，中国模型周调用量连续 29 周居首', desc: '湖南日报/今日头条 11/22：工信部数据显示，我国人工智能开源大模型全球累计下载量突破 100 亿次，下载量与衍生模型数量领跑；11 月 9-15 日全球聚合平台 OpenRouter 上中国模型周调用量 119.1 万亿词元，连续 29 周稳居第一。近期月之暗面公布 Kimi K3.1 Pro 完整模型权重，腾讯混元发布 Hy4，开放权重生态持续扩容；国内日均词元调用量已突破 500 万亿。', meta: '开源生态·产业数据', stat: '下载 100 亿次' },
  { name: '黎曼猜想形式化证明获 Lean FRO 与 Mathlib Initiative 联合认证正确', desc: '智源社区 11/22：11 月 21 日 Lean FRO 与 Mathlib Initiative 发布联合声明，认证 Levent Alpöge 一天前公开的、用 Lean 写成的 1700 万行代码库，确认黎曼猜想的命题与证明均正确，四项验证标准全部满足。该成果由 34 岁数学家与 AI 模型 Claude 协作完成，未发布传统论文；目前尚未经同行评审与权威期刊发表，数学界仍在严格核验中。', meta: 'AI4Math', stat: '1700 万行 Lean' },
  { name: 'Meta 个人 AI 智能体 Muse：旧物照片一键变 Marketplace 商品图，发布前需用户确认', desc: '智源社区 11/21：Meta 首席 AI 官 Alexandr Wang 在 X 发文称，旗下个人 AI 智能体 Muse 能把相机里想处理掉的旧物照片变成“真的卖得出去”的 Marketplace 商品图，通过补光、清理背景与调整质感让物品“看起来昂贵”；帖文同时强调，图片在正式发布上架前必须经过用户本人确认，避免 AI 生成内容未经授权流出。', meta: '生成式电商', stat: 'Meta Muse' },
  { name: '米哈游崩坏 AI 团队发 Gamer VLA 论文：AI 键鼠自主游玩《崩坏：星穹铁道》', desc: '量子位/智源社区 11/22：米哈游崩坏 AI 研发团队公开最新研究 Gamer，展示 AI 通过键盘鼠标自主操作《崩坏：星穹铁道》的能力：可与 Boss 可可利亚对战、交互场景机关（如启动气泡弹珠装置实现位移）、跟随 NPC 流萤跑图，表现出较强的游戏理解与实时决策能力，是游戏 AI 与具身决策方向的一次落地演示。', meta: '游戏智能体·VLA', stat: 'Gamer' }
]

const lifeCards = [
  { name: '数码科技 · 小米米家不锈钢咖啡杯约 8 美元上市，iPhone 20 Pro 爆料 2 亿像素主摄', desc: 'Gizmochina 11/22：小米在国内生活产品线新增米家咖啡杯，极简不锈钢杯身、主打便携保温，定价约 8 美元；另一边供应链爆料 iPhone 20 Pro 或将搭载 2 亿像素主摄，并采用四曲边显示屏，具体规格仍待秋季发布会确认。周末换机或添置通勤小物可先列入观察清单。', meta: '消费电子', stat: '米家咖啡杯·iPhone 20 Pro' },
  { name: '游戏 · G-STAR 2026 独立游戏区汇集 28 国 108 家开发商，拓宽行业底盘', desc: 'ZDNet Korea 11/21：韩国最大游戏展 G-STAR 2026 在釜山 BEXCO 举办，除大厂新作试玩外，今年独立游戏展区汇聚 28 个国家、108 家开发商作品；现场含 Indie 试玩、Cosplay 与厂商活动。国内周末也有玩家聚会与主题市集，出门前建议核对场馆预约与开放时间。', meta: '游戏展会', stat: '28 国 108 家' },
  { name: '穿搭美妆 · 2026 圣诞美甲趋势出炉：酒红蝴蝶结与奶油白雪花短甲', desc: 'Marie Claire 11/22：圣诞季美甲款式以酒红蝴蝶结、奶油白雪花、细闪短甲为主流，短甲型更日常、适合叠戴戒指；护肤侧韩妆品牌推出视黄醇按 0.1%/0.2%/0.3% 含量分层的皱纹护理三件套，新手建议从低浓度建立耐受，换季干燥期先做好保湿打底。', meta: '冬季美妆', stat: '圣诞美甲·视黄醇' },
  { name: '理财职场 · 词元成可计价交易标的，AI 岗位优先看真实付费客户与调用量', desc: '湖南日报 11/22：国内日均词元调用量突破 500 万亿，网购平台已上线词元充值中心，“双 11”直播间词元成为抢手货；词元可计量、可定价、可交易，正成为观察 AI 活跃度与产业渗透的指标。求职时建议优先选择有真实付费客户与稳定调用量的团队，岗位常见模型部署、Agent 编排、效果评测与数据安全相关经验。', meta: '职场财经', stat: '日均 500 万亿词元' },
  { name: '健康 · 尿道炎五大征兆别硬扛，周日昼夜温差大注意补水保暖', desc: 'Marie Claire/优活健康网 11/22：频尿、尿急、排尿灼热是尿道炎常见征兆，若拖延可能上行累及膀胱与肾脏、演变为肾盂肾炎；女性更需注意私处清洁与足量饮水。上海今日昼夜温差约 9℃，早晚偏凉，出门注意耳颈保暖；室内外干燥可涂润唇膏，规律作息，气温波动大时减少长时间户外剧烈运动。', meta: '健康提醒', stat: '泌尿健康·冬季保暖' }
]

const localCards = [
  { name: '上海天气 · 11月22日', desc: '晴转多云，8~17℃（墨迹口径 9~17℃；实时 12℃、体感 11℃）。东风 1 级转东南风 2-3 级，相对湿度 56%，AQI 54 良，能见度约 15.8 公里，气压 1031hPa。日出06:27，日落16:53。明天 11/23 阴 8~18℃、南风 2 级、湿度 65%、AQI 55 良；11/24 阴 5~12℃、北风 4 级，冷空气抵达后气温明显下探。', meta: '今日天气', stat: '8~17℃ 晴转多云' },
  { name: '本地要闻', desc: '①周末活动收官：第七届长三角文博会 11/19-22 在国家会展中心 6.2H、7.2H 举办，今日最后一天，免费登记、携身份证入场，含 AI 文化科技、虚拟数字人、电竞与文创市集；BFC 外滩枫径“有米节”米食市集第二轮 11/21-22 免费；松江仓城郎园Bridge“拾光仓集”11/21-22 旧物复古集市；DramaOnly 戏剧集市 3.0 今日 12:00-19:00 在上海大世界（需预约）；仲盛世界商城抹茶甜品节今日收官；奉贤古华庭公益集市今日 13:30-15:30，所得帮扶青海达日县儿童。②天气提醒：周一阴到多云，周二起冷空气南下、风力增大，周三早晨叠加辐射降温，市区最低约 5℃、郊区更低，注意添衣。', meta: '上海资讯', stat: '文博会收官·周末市集' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周日早安，今天晴转多云 8~17℃，白天回暖舒适、早晚偏凉；周末尾声适合逛展赶集，出门备件薄外套，慢慢来也没关系 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月22日 星期日</span>
          <span>第 079 期</span>
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
          <h3>Inkling 2 Mini 开放权重 MoE 多平台实测出炉；混元团队首次 Reddit AMA 确认 Hy4-mini；国产开源大模型下载破 100 亿次；黎曼猜想形式化证明获联合认证；Meta Muse 旧物照片变商品图；米哈游 Gamer 让 AI 自主玩游戏</h3>
          <p>模型侧 Inkling 2 Mini 在 M5 Max 上 4-bit 单流 43 tok/s、峰值内存 23GB，自研引擎把 RTX 3090 推到 129.5 tok/s；腾讯混元 AMA 确认 Hy4-mini 已立项、下一代规模显著扩大；国产开源模型全球累计下载破 100 亿次，OpenRouter 中国模型周调用连续 29 周第一。研究侧 Alpöge 的黎曼猜想 Lean 形式化证明获 Lean FRO 与 Mathlib Initiative 联合认证；Meta 智能体 Muse 可把旧物照片生成商品图但需用户确认；米哈游 Gamer 演示 AI 键鼠自主游玩《崩坏：星穹铁道》。GitHub 月榜 security-audit-skill、impeccable、hyperframes、graphify、agent-desktop 与 claude-mem 等 Agent 工具与技能项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.079</span>
      </footer>
    </div>
  )
}
