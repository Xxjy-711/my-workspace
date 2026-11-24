import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '日榜约 +1,042、总约 84.5K 星：在 dsh 里装上这个插件即可，无需登录、注册或填写 API Key，就能调用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型；面向想在本地或轻量环境里快速试用各家模型、又不想先绑定账号与密钥的开发者，插件侧统一了接入入口，适合做原型验证与对比测试。', meta: '免登录模型接入插件', stat: '84.5K★/日+1,042' },
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '总约 197.2K 星、日约 +590：项目主张让 AI agent 像房间里最“懒”的资深开发那样思考——不堆砌冗余实现，优先给出可维护、够用且质量最好的代码；通过约定与提示约束编码代理的取舍习惯，减少过度工程与重复造轮子，适合接入日常编码 Agent 作为风格与决策基线。', meta: 'Agent 编码思维约束', stat: '197.2K★/日+590' },
  { name: 'simplexai-labs / linger', lang: 'TypeScript', desc: '总约 4.05K 星、日约 +438：Linger 是一款完全在自己 PC 上运行的开源个人 Agent，目标是把日常任务处理留在本地机器完成；面向注重隐私、希望 Agent 直接操作本机文件与工具而不把上下文上传云端的用户，定位是桌面端常驻的个人助理型代理。', meta: '纯本地个人 Agent', stat: '4.05K★/日+438' },
  { name: 'alibaba / page-agent', lang: 'TypeScript', desc: '总约 26.1K 星：阿里巴巴开源的页内 JavaScript GUI Agent。它把当前网页的 DOM 简化为文本交给用户配置的模型，再在同一页面内执行点击、输入等动作；核心库不依赖 Python、无头浏览器或截图，直接在页面上下文里完成界面操作，适合做网页自动化与浏览器内任务代理的轻量方案。', meta: '页内 GUI Agent', stat: '26.1K★' },
  { name: 'wangzan101 / Mika', lang: 'Kotlin', desc: '总约 9.7K 星、日约 +163：一款运行在 Android 设备上的端侧 AI 助理，通过操作本机 App 和网页来帮用户完成日常任务；定位手机端私人 Agent，强调在设备侧理解界面并执行操作，适合关注移动端自动化、手机助手与端侧代理能力的开发者参考。', meta: 'Android 端侧 Agent', stat: '9.7K★/日+163' },
  { name: 'sybil-solutions / inference-optimisation-skill', lang: 'Python', desc: '总约 2.02K 星、日约 +209：一个用于爬坡式优化本地 LLM 服务速度的 Agent 技能，覆盖解码阶段、投机解码等常见推理加速环节；把性能调优整理成可被编码/运维代理调用的检查与优化流程，适合在自建本地模型服务时，让 Agent 协助定位吞吐瓶颈并给出提速手段。', meta: '本地 LLM 推理提速', stat: '2.02K★/日+209' }
]

const aiCompanion = [
  { name: 'OpenAI：GPT-6.2 Sol 开始向 ChatGPT 普通聊天场景推送', desc: '腾讯视频科技 11/24 援引 OpenAI 官网发布说明：GPT-6.2 已开始向 ChatGPT Plus、Pro、Business 及 Enterprise 用户陆续推送，本次面向日常对话的是 GPT-6.2 Sol 版本，重点提升复杂指令理解、图片识别与联网搜索能力。官方测试数据：图片理解得分 71.7%（GPT-6 为 47.4%），复杂指令任务完成率由 62.5% 提升至 78.1%，内部 BrowseComp 最高推理档取得 64.5%（GPT-6 为 54.4%）；交互上更能判断何时需要追问用户或主动提出后续建议。Astra 与 Sol 早在 11/17 已对 ChatGPT Work、Codex 与 API 开放，本次进一步覆盖普通聊天场景，全球逐步推送，开放范围取决于订阅类型与企业管理员设置。', meta: '模型更新', stat: '图片理解 71.7%' },
  { name: '蚂蚁集团开放 LingSante 医疗 AI 双模型权重，MIT 许可', desc: 'TNGlobal 11/24 报道：蚂蚁集团在其开源计划 inclusionAI 的 Hugging Face 仓库发布 LingSante 系列两款开放权重医疗模型。LingSante-3.1-air-VL 为图文多模态模型，总参数 1240 亿、每 token 激活 55 亿，上下文 25.6 万 token，面向影像报告辅助、皮肤状况评估、饮食与病历、证据检索及医疗工作流 Agent 等研究用途；LingSante-3.1-flash 为更大的文本模型，总参数 5600 亿、每 token 激活约 250 亿，上下文最长 100 万 token，面向复杂医疗推理、专业医患沟通、循证研究与多阶段长任务。两个仓库均采用 MIT 许可，模型文件与模型卡已上线 HF。', meta: '医疗大模型开源', stat: '124B/560B · MIT' },
  { name: 'Meta 开源 Muse Glimmer：30B 稠密多模态，4-bit 后不足 20GB 可本地跑', desc: 'AI D-A-M-N 11/24 报道：Meta 发布新开源模型 Muse Glimmer，为 30B 参数稠密多模态模型，是其自 Llama 4 以来再次开放权重。模型面向本地与持续运行的 Agent 工作流设计，强调复杂多步任务与工具调用能力，同时兼顾在消费级机器上运行效率；通过约 4-bit 量化体积压缩到 20GB 以下，可在配备 24GB 或 32GB 显存的 PC 或 Mac 上流畅运行，并借助 DFlash 块级投机解码在 RTX 等硬件上获得数倍吞吐提升。对希望在本地跑多模态代理、又受限于显存的开发者是一个新选项。', meta: '本地多模态开源', stat: '30B · 4-bit <20GB' },
  { name: 'Sarvam AI 发布开放权重 105B 企业 Agent 检查点，NVFP4 可上单工作站 GPU', desc: 'Unite.AI/foorilla 11/23 报道：印度 Sarvam AI 于 11/22 发布 Sarvam-105B-1711 开放权重检查点，面向客户支持、语音 Agent 等高频企业工作场景。模型沿用 Sarvam-105B 的 1050 亿参数 MoE 底座，每 token 激活 103 亿；发布物包含用于继续训练的 BF16 权重，以及专为单工作站 GPU 运行设计的紧凑 4-bit NVFP4 版本。整体定位是把大规模企业级模型能力通过开放权重与量化版本下放到单卡或单台工作站环境，便于团队在自有基础设施上部署与微调。', meta: '企业 Agent 权重', stat: '105B MoE · NVFP4' },
  { name: 'OpenAI 介绍自主流水线：发现、验证并修复 Linux 内核 948 个提权漏洞', desc: 'OpenAI 新闻室近期更新：一条自主流水线在 Linux 内核中找出 948 个可导致本地提权的漏洞，完成验证并生成对应补丁。项目以“更少通往 root 权限的路径”为目标，展示 AI 辅助安全研究在真实大型代码库上的覆盖能力；同期 OpenAI 还发布 Images 2.6（更快生图、GIF 生成、更精细编辑与 API 控制），并在研究加速报告中讨论编码 Agent 推动 AI 研发时表现仍不均衡、以及对递归自我改进的信号意义。安全与研发自动化继续是各家模型能力展示的主线场景。', meta: 'AI 安全研究', stat: '948 个内核漏洞' },
  { name: 'Anthropic 上市后被按万亿市值定价，Gemini 4 分层定价加速模型商品化', desc: '界面新闻 11/24 分析：11/19 Anthropic 以代码 ANT 在纳斯达克上市，发行价 83 美元、开盘 111.50 美元、收 97.17 美元首日涨 17.07%，公开募资 813.4 亿美元、叠加 260 亿美元私募，整体融资约 1073 亿美元，开盘口径完全稀释市值一度破 2 万亿。文章指出前沿大模型首次被公开市场用收入增速、单位 token 毛利与算力刚性支出来定价；同一周谷歌把 Gemini 4 拆成 Hydrogen、Neon、Argon、Carbon 分层铺开，Hydrogen 每百万 token 输入 1.5 美元/输出 7.5 美元，Carbon 标准价输入 4 美元/输出 20 美元。一边是拿万亿市值卖“最确定门票”，一边是模型能力近乎按月商品化，AI 叙事从“谁更聪明”转向“谁收得回钱”。', meta: '产业与定价', stat: 'ANT 首日 +17.07%' }
]

const lifeCards = [
  { name: '数码科技 · Lilvo 公布 DS Micro 双屏掌机原型，闭合尺寸接近银行卡', desc: '3DM 11/24：Lilvo 公布超小型双屏模拟掌机 DS Micro 原型机，闭合后尺寸 3.35×1.81×0.71 英寸，高度接近银行卡、宽度与银行卡长度相仿，目标是把双屏掌机压缩到接近钥匙扣大小。设备配两块 256×192 分辨率屏幕、下屏支持触控，带 3.5 毫米接口与 MicroSD 扩展，运行 Lilvo 自有 Linux 系统并配风格化前端与文件管理器。项目优先考虑体积与续航、不追求原始性能：早期测试中 2D Nintendo DS 游戏运行较好，3D 作品会跳帧且耗电更高。目前仅有一台可工作原型，价格、预售与上市时间均未公布，后续计划量产并推出多种彩色外壳。', meta: '便携掌机', stat: '双屏 · 银行卡大小' },
  { name: '游戏 · 2026 Steam 大奖提名开启，十周年新增「名人堂」特别奖项', desc: 'IT之家/新浪游戏 11/24：Valve 正式开启 2026 年 Steam Awards 提名通道，登录 Steam 账号即可为提名游戏投票。本届恰逢活动十周年，官方在常规评选基础上增设多项特别奖项，并从往届经典类别中带回三项情怀评选；最受关注的新增内容是「名人堂」（Hall of Fame）特别奖项。提名阶段持续至太平洋时间 11/30 上午 10 点（北京时间 12/1 凌晨 2 点），冬季特卖期间可对每个奖项的 5 款最终入围游戏投票，投票将持续到 2027 年 1 月 2 日。玩家可在 Steam 提名页面为年度游戏等类别填选票。', meta: '游戏投票', stat: '提名截止 12/1 02:00' },
  { name: '穿搭美妆 · 冬季叠搭看立领与巴恩风，换季面霜先分 A 醇/胜肽/玻色因三赛道', desc: '抖音穿搭趋势 11/21-22：本季流行烟囱高立领外套（包裹脸部线条、省去围巾）、巴恩风复古外套、灯芯绒翻领与酒红都市风，配色以燕麦白、炭灰、苔藓绿、莓果紫和同色系围巾为主，小个子可选短款立领配高腰直筒裤拉长比例。美妆侧 11/16 面霜盘点建议换季先分清三条抗老赛道再挑产品：A 醇平滑细纹、改善粗糙，需建立耐受并做好防晒；胜肽温和提拉、更适合初老与不耐受人群；玻色因修护充盈、改善松垮。先按肤质与需求选成分主线，不追贵价，功效产品避免在屏障脆弱期叠加过猛。', meta: '冬季穿搭护肤', stat: '立领 · 三赛道面霜' },
  { name: '理财职场 · 11/24 亚太股市高开，两市融资余额较前日减少约 89.84 亿元', desc: '澎湃新闻 11/24：早盘恒生指数高开 1.09%，恒生科技指数涨 2.05%，中际旭创、剑桥科技、罗博特科、东山精密涨约 15%；韩国综合指数涨幅一度扩大至 7%，日经 225 涨约 4.6%。资金面，截至 11/23 两市融资余额减少 89.84 亿元，合计 21348.07 亿元，其中上交所融资余额 11189.33 亿元（较前一交易日减少 18.35 亿元），深交所 10158.74 亿元。短期市场波动受海外情绪与板块轮动影响较大，职场与理财安排上仍建议按自身风险承受能力配置，避免仅凭单日高开追涨。', meta: '市场财经', stat: '恒指 +1.09% · 融资余额 2.13 万亿' },
  { name: '健康 · 冷空气携偏北风到场，今日 8~13℃ 早晚偏冷注意头颈保暖', desc: '上海中心气象台 11/23 16 时发布：今天多云，8~13℃，偏北风 4-5 级、沿江沿海阵风 6 级，相对湿度 45%-75%；冷空气影响下晨晚体感偏冷，周三早晨气温进一步走低。出门建议加一件外套或薄羽绒，护住颈部与手部，骑车通勤可备防风外层；室内干燥时注意补水、润唇，规律作息。换季期呼吸道黏膜较敏感，有咳嗽、咽痛或鼻塞加重时减少长时间迎风停留，症状明显及时就医，不要自行叠加多种感冒药。', meta: '健康提醒', stat: '8~13℃ · 阵风 6 级' }
]

const localCards = [
  { name: '上海天气 · 11月24日', desc: '多云到晴，8~13℃（墨迹口径 4~18℃；09:50 实时 11℃、体感 9℃）。白天偏北风 4-5 级、阵风 6 级（实时东北风 2 级），相对湿度 55%，气压 1031hPa，能见度约 25.4 公里；空气质量上午 AQI 55-75 良（首要 PM2.5）、下午 30-50 优、夜间 60-80 良（首要 NO2），实时 AQI 26 优。日出06:29，日落16:52。明天 11/25 阴 8~13℃、南风 2 级、湿度 49%、AQI 65 良；11/26 晴 12~20℃；11/27 晴 10~21℃、AQI 105 轻度污染；11/28 多云 7~16℃、西北风 4 级；11/30 晴 13~20℃。', meta: '今日天气', stat: '8~13℃ 多云到晴' },
  { name: '本地要闻', desc: '①展会活动：bauma CHINA 2026 上海宝马展以“一展双馆”错峰联动，世博展览馆 11/23-26、新国际博览中心 11/24-27，4000+ 家展商参展；中国国际纺织机械展览会暨 ITMA 亚洲展 11/20-24 在国家会展中心（上海）今日收官；第七届长三角文博会推动文商旅体展深度融合。②交通出行：上海地铁新票价政策 12/1 起施行，按里程多级计价、起乘价 3 元（0-4 公里），后续按 4/4/4/7/7/10/10 公里加 1 元，50 公里以上每 15 公里加 1 元，计次票与一日票、三日票配套优惠同步调整；2026 上海电竞大师赛 12/5-12/12 在静安体育中心举行。③文旅与民生：上海博物馆“环宇璀璨”文明对话展与珠宝珍藏展上新，新武侠舞剧《神雕侠侣》亮相上海，“园八条”发布激活文创园区；上午 10 时召开发布会通报 222 家街镇（园区）防范服务平台建设；新修订《上海市促进科技成果转化条例》12/1 起施行。', meta: '上海资讯', stat: '宝马展 · 地铁新票价 · 文博会' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周二早安，今天多云到晴 8~13℃，偏北风 4-5 级阵风 6 级，早晚偏冷、白天回暖，出门记得加件外套；工作日先把手头的小事排好优先级，稳一点就好 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月24日 星期二</span>
          <span>第 081 期</span>
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
          <h3>GPT-6.2 Sol 推送普通聊天场景；蚂蚁 LingSante 医疗双模型 MIT 开放；Meta Muse Glimmer 30B 本地可跑；Sarvam 105B 企业 Agent 权重发布；OpenAI 流水线挖出 948 个内核提权漏洞；Anthropic 万亿定价与 Gemini 4 分层定价同台</h3>
          <p>模型侧 OpenAI 把 GPT-6.2 Sol 推向 Plus/Pro/Business/Enterprise 普通聊天，图片理解与复杂指令、联网搜索明显提升；蚂蚁集团开放 LingSante-3.1 air-VL 与 flash 两款医疗模型权重，MIT 许可；Meta 开源 30B 稠密多模态 Muse Glimmer，4-bit 后不足 20GB 可在消费级机器运行；Sarvam 发布 105B MoE 企业 Agent 检查点并提供 NVFP4 单工作站版本。安全侧 OpenAI 自主流水线发现、验证并修复 Linux 内核 948 个本地提权漏洞；产业侧 Anthropic 上市后按万亿市值定价，谷歌 Gemini 4 分层铺开，模型能力加速商品化。GitHub 日榜免登录模型插件、Agent 编码思维约束、纯本地个人 Agent、页内 GUI Agent、Android 端侧助理与本地推理提速技能等项目持续走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.081</span>
      </footer>
    </div>
  )
}
