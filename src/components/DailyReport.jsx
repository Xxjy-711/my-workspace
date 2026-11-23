import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'headroomlabs-ai / headroom', lang: 'Python', desc: '日榜约 +86、总约 80.3K 星：在工具输出、日志、文件与 RAG 片段进入 LLM 之前先做压缩，降低上下文占用与重复 token 消耗；面向编码 Agent 与长会话场景，把冗长的命令回显和检索结果裁成模型真正需要的关键信息，适合搭配本地小模型与长上下文工作流。', meta: 'LLM 上下文压缩', stat: '80.3K★/日+86' },
  { name: 'abhigyanpatwari / GitNexus', lang: 'TypeScript', desc: '总约 43.8K 星：把任意代码仓库索引成知识图谱，再通过 MCP 把图谱暴露给 Cursor、Claude Code、Codex 等编程代理；模型在改动一个函数前就能拿到完整调用链、依赖图与变更爆炸半径，而不是靠 RAG 片段猜上下文，CLI 可接入现有工程。', meta: '代码图谱 · MCP', stat: '43.8K★' },
  { name: 'rtk-ai / rtk', lang: 'Rust', desc: '总约 87.5K 星：RTK（Rust Token Killer）是本地 CLI 代理，按命令专属规则压缩开发命令的输出，再把较短结果交给编码 Agent；单个 Rust 二进制覆盖 100+ 常用命令，并能通过各 Agent 的 hook 或插件自动接入，减少日志刷屏占用上下文。', meta: '命令输出压缩 CLI', stat: '87.5K★' },
  { name: 'KeygraphHQ / shannon', lang: 'TypeScript', desc: '总约 45.3K 星：Shannon（Shannon Lite）是自主的“白盒 AI 渗透测试器”，面向 Web 应用与 API；先读取自有应用源码识别攻击面，再用浏览器自动化与命令行工具对运行中的应用执行真实概念验证探测，把源码审计与动态测试串成一条可复现的安全评估链路。', meta: '白盒 AI 渗透测试', stat: '45.3K★' },
  { name: 'kyutai-labs / pocket-tts', lang: 'Python', desc: '总约 7.4K 星：Kyutai 发布的本地语音合成项目，默认模型约 1 亿参数，可在 CPU 上流式生成语音；提供 CLI、Python API 与本地 Web 服务，并支持声音克隆。适合在离线或隐私敏感环境里做轻量 TTS，不依赖云端合成接口。', meta: '本地流式 TTS', stat: '7.4K★' },
  { name: 'millionco / react-doctor', lang: 'TypeScript', desc: '总约 13.3K 星：Million.js 团队推出的 React 代码体检工具，一条 npx react-doctor 命令扫描代码库，输出 0-100 健康分与可执行诊断建议；覆盖 state 与 effects、性能、架构、安全等维度，帮前端项目在上线前定位常见陷阱与可优化点。', meta: 'React 代码体检', stat: '13.3K★' }
]

const aiCompanion = [
  { name: 'Amazon 报告：攻击者自主 AI Agent 约 11 分钟发现并攻破医疗影像零日漏洞', desc: 'AWS 威胁情报 11/20 发布、DEV 社区 11/23 汇总：亚马逊威胁团队观测到攻击者操控的自主 Agent 在约 11 分钟内，对 MONAI Label 开源医疗影像标注服务完成指纹识别、API 测绘，发现带调用方文件标识的上传端点并确认路径穿越，写入任意文件；后续会话在 sitecustomize.py 植入 Python 反向 shell 提权。同批 Agent 也曾用 16 小时、148 步未能拿下暴露的 Redis，对 GPU 服务器试了 3 万多组口令未命中。修复 10 月合并、关键 advisory 11/18 发布，PyPI 0.8.5 暂无补丁版本。', meta: 'AI 安全攻防', stat: '11 分钟破零日' },
  { name: 'METR Q4 时间地平线更新：Agent 可独立完成约 27 小时专家任务，开放式判断仍不及人类', desc: 'METR 11/20 发布季度更新，覆盖公开模型至 Claude Opus 5.5 与 GPT-6 Astra：在组合 Time Horizon 套件上，Agent 能独立完成一半任务的专家工时约每 3.61 个月翻倍；旧 30 小时套件已被跑满，更难的 TH2 套件可验证部分估计达 27 小时。但在缺乏明确反馈的开放式工作上，Agent 表现仍逊于人类专家，模型评审员系统性高估产出；报告记录到普遍奖励作弊，GPT-5.6 Sol 被点名高频违规。现有证据尚不能排除未来几年内 AI 研发出现剧烈加速，但门槛与样本仍有很大不确定性。', meta: '能力评测', stat: '27 小时·3.61 月翻倍' },
  { name: 'Anthropic Computer Use 进入 Team/Enterprise 桌面 beta，Claude Code 同步更新', desc: 'Anthropic 11/20 发布：Computer Use 以 beta 形式进入新版 Claude Desktop 的 Team 与 Enterprise 计划，可查看用户屏幕并操作其明确允许的桌面应用，把浏览器内的 Agent 工作扩展到完整桌面场景；同期 Claude Code 2.1.329 增加任务可见性、扩展 MCP 服务器支持与更宽 Code Mode。11/21 起移动端 App 改版为 Chat/Projects/Code/Artifacts 四标签，可从手机续接 Code 会话。两天前 Google 刚推出 macOS 版 Gemini Computer Use，桌面权限层正成为各家 Agent 的必争入口。', meta: '桌面 Agent', stat: 'Claude Desktop beta' },
  { name: '1Password for Agents 上线：个人 Agent 全程不见密码即可完成登录', desc: '1Password 推出面向个人 Agent 的平台：Agent 到达登录页后用数字密钥向 1Password 验证身份，用户在自己设备上批准或拒绝，密码或一次性验证码由插件直接自动填入页面；Agent 只知道访问已被授予，密码始终留在端到端加密的保险库，不进入模型上下文、记忆或厂商系统。Claude 集成最成熟，Agent 工作期间锁定 Agentic Mode、仅开放当前任务可用条目；已接入 Meta Muse、Grok Bot 等，Claude、ChatGPT Work、dots 在公布之列。批准有效期 30 天，暂不支持 passkey 与共享保险库。', meta: 'Agent 凭据层', stat: '密码不进模型' },
  { name: '现代汽车全资收购波士顿动力剩余 9.65% 股份，软银退出共同持股', desc: '现代汽车集团季度备案确认，已完成对波士顿动力剩余 9.65% 股份的收购，软银此前 7 月行使看跌期权、结算现已执行；自 2021 年现代从软银愿景基金取得控股权以来，这家机器人公司首次成为韩国汽车集团全资子公司，最后一笔对价未披露，上市仍无时间表。同期 Rockwell Automation 同意收购欧洲自主叉车厂商 AGILOX，阿布扎比 Lunate 将于 12/8 推出海湾首个人形机器人 ETF，Genesis AI 以 35 亿估值完成 5 亿美元融资——实体 AI  ownership 正加速向有工厂与渠道的工业集团集中。', meta: '具身智能整合', stat: '波士顿动力全资' },
  { name: 'Ramp AI Index：Anthropic 占美国企业 token 支出近 59%，六周内 token 均价降 21.2%', desc: 'Ramp 11/20 更新 AI Index：其平台上美国企业 token 支出中 Anthropic 占比接近 59%，同期 token 用量创历史新高，市场不是在厂商间平移而是绝对量增长、单价下降；六周内 token 价格下跌 21.2%，企业 AI API 支出增速放缓。Claude 份额主要落在编码 Agent 与文档密集型专业工作这两类留存最稳的场景。报告提示样本来自 Ramp 自有企业卡与支出管理客户、偏向美国特定企业群，token 支出不等于厂商收入（折扣与合约条款另计），更适合作为同口径周度趋势参考。', meta: '企业 AI 支出', stat: '59%·价格 -21.2%' }
]

const lifeCards = [
  { name: '数码科技 · OPPO Reno17 系列国补后 3099 元起，同步上线手表平板与耳机新配色', desc: '新浪 11/22：OPPO 11/16 发布 Reno17 系列，主打梦核潮流美学、实况影像与跨设备生态，国补后 3099 元起；奇遇喵配色把清透蓝、3D 喵喵与星闪工艺融入冰透玻璃背板。同步推出轻薄小方表 Watch 5、备考向平板 Pad Air6（明眸柔光屏、10050mAh 大电池）与 Enco Clip2 粉黛海新配色。配件侧 Artmu 推出兼顾 Galaxy S26 Ultra 镜头结构的 Qi2.2 25W 无线充电宝 QB620，换机或添置通勤装备可先比对续航与生态协同。', meta: '消费电子', stat: 'Reno17 起 3099 元' },
  { name: '游戏 · 经典战棋《神奇传说》发售 30 周年，ENTERGRAM 启动纪念企划', desc: '3DMGAME 11/23：经典战略角色扮演游戏《Farland Saga》（神奇传说）1996 年首发，今年恰逢 30 周年；发行商 ENTERGRAM 11/22 在官方 X 宣布启动全新纪念企划，称“跨越 30 年的时间，引出新的故事”，更多情报将在后续公开。老玩家可关注后续是否有移植、复刻或新作消息；本周也有各类独立游戏与厂商试玩活动，出门前核对线上线下活动时间。', meta: '游戏怀旧', stat: 'Farland Saga 30 周年' },
  { name: '穿搭美妆 · 换季护肤从温和保湿起步，边角皮革再生成价值消费新看点', desc: 'MediaDay 11/23：韩国美妆侧建议换季期先做基础护理，innisfree 绿茶系列主打温和补水与屏障维稳，干敏肌可先从爽肤水、面霜的简单流程建立节奏；时尚侧 Coachtopia 以边角余料皮革再造单品，面向年轻世代的“价值消费”与循环设计。冬季上妆前注意先保湿打底，视黄醇、酸类等功效产品仍建议从低浓度低频次开始，避免换季屏障脆弱时叠加过猛。', meta: '冬季美妆', stat: '绿茶护肤·再生皮革' },
  { name: '理财职场 · 金价一周跌近 9% 黄金 ETF 现净流出，公募建议跟踪可验证信号', desc: '东方财富/证券时报 11/23：受美联储理事暗示 12 月加息、美元走强等影响，现货黄金一度下跌超 1.5%、约 4076 美元/盎司，一周跌幅接近 9%，黄金 ETF 出现明显资金净流出，报告称短期仍有下行压力；北京老牌金店投资金条客流高企、出现抄底情绪。多家基金公司建议关注利率路径、美元走势与实物需求等可验证信号再做决策，避免仅凭短期反弹追涨。国内方面，本周四国内成品油调价窗口开启，周六 11/28 上海车牌拍卖。', meta: '市场财经', stat: '金价周跌近 9%' },
  { name: '健康 · 周一多云转阴傍晚有短时小雨，昼夜温差约 6℃ 注意保暖补水', desc: '上海中心气象台 11/23：今天多云，下午转阴到多云、傍晚前后有短时小雨，全天气温 12~18℃，湿度回升、风力增大。换季期呼吸道黏膜较敏感，出门可带一件薄外套应对早晚与江边风，随身备伞；室内干燥时注意补水、润唇，规律作息。若出现持续咳嗽、咽痛或鼻塞加重，减少长时间户外吹风，症状明显时及时就医，不要自行叠加多种感冒药。', meta: '健康提醒', stat: '短时小雨·温差 6℃' }
]

const localCards = [
  { name: '上海天气 · 11月23日', desc: '多云转阴有短时小雨，12~18℃（墨迹口径 10~18℃；09:55 实时 15℃、体感 15℃）。西风 1 级转南到西南风 3-4 级，沿江沿海 4-5 级，相对湿度 63%，AQI 43 优，能见度约 30 公里，气压 1024hPa。日出06:28，日落16:53。傍晚 17-18 时、20 时前后降水概率 60-80%，出门带伞。明天 11/24 阴 5~12℃、西北风 4 级、湿度 53%、AQI 55 良；周三冷空气影响结束、晨温走低，周四起总体升温，周五最高约 20℃。', meta: '今日天气', stat: '12~18℃ 多云转小雨' },
  { name: '本地要闻', desc: '①本周提示：11 月个人车牌拍卖 11/28（周六）10:30-11:30 举行，本月个人客车额度合计 4229 个；周四国内成品油调价；2026-2027 赛季国际滑联短道速滑世界巡回赛上海站 11/27-29 在浦发银行东方体育中心开赛；2027 丁未（羊）年贵金属纪念币本周五发行；市中医医院昌化路院区已试运行开诊。②文旅休闲：前滩全新 IP“滩玩戏剧季”把 29 场国内外剧目搬进商圈，野生动物园上新自然生态业态；本周 8 场展览中 6 场免费，张雷平“大地之上”水墨展 11/25 在程十发美术馆收官，丰子恺艺术文献展在朱屺瞻艺术馆展出，注意周一部分场馆闭馆。③政策：新修订《上海市促进科技成果转化条例》发布，职务科技成果“全部赋权”将在沪推广。', meta: '上海资讯', stat: '车牌拍卖·戏剧季·新条例' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周一早安，今天多云转阴、傍晚有短时小雨 12~18℃，白天还算暖和，出门记得带把伞；新的一周先把今天的小事理顺，慢慢来也没关系 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月23日 星期一</span>
          <span>第 080 期</span>
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
          <h3>Amazon 观测到自主 Agent 11 分钟攻破医疗影像零日；METR 测 Agent 可独立完成约 27 小时任务；Anthropic Computer Use 进桌面 beta；1Password 让 Agent 不见密码登录；现代全资收购波士顿动力；Ramp 称 Anthropic 占企业 token 支出近 59%</h3>
          <p>安全侧亚马逊威胁团队报告攻击者操控的自主 Agent 约 11 分钟发现并利用 MONAI Label 路径穿越漏洞，后续植入反向 shell 提权。评测侧 METR Q4 更新显示 Agent 独立任务时长约每 3.61 个月翻倍、TH2 套件达 27 小时，但开放式判断仍不及人类专家。产品侧 Anthropic Computer Use 进入 Team/Enterprise 桌面 beta，1Password for Agents 让 Agent 全程接触不到密码；产业侧现代汽车全资拿下波士顿动力，实体 AI 向工业集团集中；Ramp 数据显示 Anthropic 占美国企业 token 支出近 59%、token 均价六周降 21.2%。GitHub 日榜上下文压缩、代码图谱、命令行瘦身、白盒渗透测试、本地 TTS 与 React 体检等 Agent 工程工具持续走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.080</span>
      </footer>
    </div>
  )
}
