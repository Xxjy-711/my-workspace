import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'ccch1mneyyy / dsh-Go', lang: 'Dart', desc: '日榜约 +593、总约 31.1K 星：基于 DeepSeek Harness 的 Android 客户端，让 DSH 装进手机——既可在本机运行，也能遥控你电脑上的 DSH 会话；面向习惯用手机随身查看、发起或跟进编码代理任务的开发者，把桌面端 harness 的使用场景延伸到移动端，适合做远程跟进与轻量指令下发。', meta: '手机端 DSH 客户端', stat: '31.1K★/日+593' },
  { name: 'deepseek-ai / dsh-superagent-prototype', lang: 'TypeScript', desc: '总约 24.4K 星、日约 +116：DeepSeek 官方方向的超级 Agent 系统原型，标题为“Towards a More Autonomous Agent System”，探索更自主的代理协作与任务执行范式；作为原型项目，重点展示自主规划、工具调用与长任务编排的思路，供社区研究更自主 Agent 架构时参考。', meta: '自主 Agent 系统原型', stat: '24.4K★/日+116' },
  { name: 'tt-a1i / archify', lang: 'JavaScript', desc: '总约 99.3K 星、日约 +395：把任何想法、计划或代码库转成一张精美的交互图，由 Agent 辅助完成结构化与可视化；面向需要把方案、架构或源码关系快速落成可浏览图示的开发者与写作者，降低从思路到图解的转化成本，适合在方案评审与知识梳理场景使用。', meta: '想法/代码库转交互图', stat: '99.3K★/日+395' },
  { name: 'paperclipai / paperclip', lang: 'TypeScript', desc: '总约 116.5K 星、日约 +398：一款被描述为“团队在工作中管理 Agent 的开源应用”，面向多人协作场景里对多个代理进行统一管理、分配与跟进；定位工作场景下的 Agent 工作台，强调把代理任务纳入团队日常流程，适合关注多 Agent 协同与团队级代理管理的团队评估。', meta: '团队 Agent 管理应用', stat: '116.5K★/日+398' },
  { name: 'Panniantong / Agent-Reach', lang: 'Python', desc: '总约 114.4K 星、日约 +250：给你的 AI Agent 一双“看见整个互联网”的眼睛，可读取与搜索 Twitter、Reddit 等公开社区内容；面向需要让代理接入外部社媒与论坛信息、做舆情观察与素材收集的开发者，定位是 Agent 的外部信息接入层，便于把网络公开内容纳入代理上下文。', meta: 'Agent 全网信息接入', stat: '114.4K★/日+250' },
  { name: 'career-ops-hq / career-ops', lang: 'JavaScript', desc: '总约 84.5K 星、日约 +213：开源的 AI 求职搜索 Agent 与岗位查找工具，可扫描招聘网站，对每个岗位按匹配度打分并排序；面向正在找工作、希望从海量岗位里快速筛出契合方向的求职者，把岗位检索、评分与比较交给代理辅助，适合作为求职信息整理的开源参考方案。', meta: '开源 AI 求职代理', stat: '84.5K★/日+213' }
]

const aiCompanion = [
  { name: '智谱发布 GLM-5.4：首款 Loop Transformer 架构旗舰，新增视觉能力主打“泛 Coding”', desc: '智谱 11/23 发布新一代旗舰 GLM-5.4，是其第一代采用 Loop Transformer 架构的模型。模型从约 750B 参数的 GLM-5 基座继续训练，把中间 28 层改为共享权重、循环执行两轮，在不增加物理参数的前提下把一次回答的有效计算深度从 78 层提升到 106 层，官方称智能水平达到 2T-3T 参数模型区间；配合门控更新、滑窗 KV Cache 与稀疏索引复用，思维链长度缩减 10%-14%，推理最高可达 200 token/s。能力上新增视觉输入，支持图片、视频、文本与文件，上下文 1M tokens、最大输出 128K tokens；定位“泛 Coding”，案例包括纯前端代码绘制画面并调用第三方音乐模型制作 MV、以几何与着色器生成 3D 互动场景、通过 FreeCAD 与 Blender 完成机械臂建模与动作模拟。目前已向 GLM Coding Plan 全量用户开放，模型 API 待安全评估后开放，公开权重与标准按量 API 尚未发布。', meta: '国产旗舰新架构', stat: '750B · 1M 上下文' },
  { name: '腾讯混元开源第三代翻译模型 Hy MT3，1.8B/7B/30B-A3B 三尺寸覆盖端侧', desc: '界面新闻/腾讯新闻 11/25 报道：腾讯混元宣布发布并开源第三代翻译模型 Hy MT3。模型包含 1.8B、7B 和 30B-A3B（MoE）三个尺寸，广泛适配 PC、手机、智能设备等各类端侧场景。目前 Hy MT3 已在腾讯 Hy 翻译 App 和小程序上线，开源版本支持开发者自行下载部署；小尺寸版本面向设备侧离线与轻量化翻译需求，MoE 版本则承担更高质量的翻译任务，构成从端侧到云端的分级翻译模型矩阵。', meta: '翻译模型开源', stat: '1.8B / 7B / 30B-A3B' },
  { name: '商汤开源 SenseNova U1.6：8B 多模态新增原生图像自修正闭环', desc: '星知快讯 11/25：商汤开源 SenseNova U1.6，一款 8B 参数多模态模型，本次重点新增原生图像自修正能力。模型通过首稿自检与修正闭环，主动检查并改进生成图中的文字、版式和光影细节，减少出图后反复手工调整的次数。权重已开源，并可接入 ComfyUI 等常见工作流，面向把多模态生成嵌入自研管线的开发者；在 8B 量级上把“生成—自检—修正”做成模型内闭环，是本版本相对前代的主要差异。', meta: '多模态图像自修正', stat: '8B · 权重开源' },
  { name: 'MemT-1.0-Pro 开源：与 NVIDIA 联合研发的第三代记忆原生模型，总参 554B', desc: '智源社区/新智元 11/24 报道：记忆张量（MemTensor）正式发布并开源与 NVIDIA 联合研发的记忆原生模型 MemT-1.0-Pro。模型基于 NVIDIA Nemotron 3 Ultra 架构，总参数 554B、激活参数 59B，依托 Megatron-Core 与 Megatron Bridge 实现高效分布式训练。这是继 Nano、Flash 之后的第三代记忆原生模型，Pro 版本把记忆增强技术实践拓展到更强底座与更大参数规模，面向需要长程记忆与持续上下文的 Agent 与研究场景。', meta: '记忆原生大模型', stat: '554B 总参 / 59B 激活' },
  { name: '微软开源 Aion-1.0-Instruct-2.3B：面向端侧文本处理的 23 亿参数轻量模型', desc: '鲸智社区 11/24 收录：Aion-1.0-Instruct-2.3B 是微软 Windows 应用科学团队推出的轻量级指令语言模型，约 23 亿参数，面向端侧文本处理与操作系统相关应用，支持中文、英语、日语等八种语言，上下文 32,768 tokens。模型采用滑动窗口与全注意力相结合的混合架构，支持文档理解、摘要生成、文本改写、问答和工具调用，可在本地处理多页资料与较长邮件，减少对持续云端连接的依赖。该版本以 BF16 精度发布，采用 MIT 许可证；在复杂多步推理与事实知识覆盖方面仍存在局限。', meta: '端侧轻量指令模型', stat: '2.3B · 8 语言 · MIT' },
  { name: '微软 Ignite 发布七款 MAI 自研模型，MAI Code 2 以约四成成本追平 GPT-6.1 Sol 九成八性能', desc: '华龙证券 11/25 援引：微软于 11 月 18 日旧金山 Ignite 大会集中发布七款自研 MAI 系列 AI 模型，覆盖编程、网络安全等场景。券商点评指出，模型竞争维度正从单纯性能跑分切换到每 token、每任务的有效成本；以 MAI Code 2 为例，其在 GitHub Copilot 基准测试中达到 GPT-6.1 Sol 约 98% 的性能，但成本仅为其 40%，同等性能下成本约为 Claude Opus 5.5 的 5%。这一变化意味着头部厂商与平台的资本开支叙事正在转向产能变现，能否压缩闲置窗口将直接决定投入产出比，具备算力优势与高效推理能力的平台更有望在应用落地中占先。', meta: '产业与成本竞争', stat: '性能 98% · 成本 40%' }
]

const lifeCards = [
  { name: '数码科技 · Counterpoint 发布 2026 Q3 全球主要国家 TOP5 手机销量榜', desc: '新浪科技 11/25 援引市场调研机构 Counterpoint：2026 年第三季度全球主要国家 TOP5 智能手机销量榜单公布，各国消费者购机偏好存在明显差异，不同价位段与品牌在各区域的排位分化明显。对普通消费者而言，季度榜单可作为了解主流机型与区域偏好的参考，但具体到购买决策仍建议结合自己的预算、屏幕、影像、续航与系统生态逐项对比，不必只看销量排名。同日 CNET 报道，三星计划推出最高 1100Hz 刷新率的游戏显示器，为世界首发规格，预计 12 月先在美国上市。', meta: '手机市场调研', stat: 'Q3 各国 TOP5' },
  { name: '游戏 · 《昭和米国物语》定档 2027 年 10 月 28 日，制作人解释延期原因', desc: '游戏动力 11/25 消息：《昭和米国物语》宣布定档 2027 年 10 月 28 日发售。制作人 Nekomata 在说明中表示，此前已有六千多位玩家参与试玩、看到与对比了作品，玩家的反馈与期待帮助团队明确了接下来还需要做什么才能让游戏更好；在正式公布发售日之前，需要先确认离预设终点还有多远。他同时提到，开发团队与发行方一直希望避免多数独立游戏仓促上线、内容或平衡性不足的问题，接下来还会继续打磨；这款历经五年开发的作品体量不小，有较多故事与玩法需要慢慢打磨。', meta: '独立游戏定档', stat: '发售日 2027/10/28' },
  { name: '穿搭美妆 · 秋冬妆面主打“可可妆”自然浓郁，冬季唇妆转向酒渍莓果与柔化棕唇', desc: '中国青年网 11/19 总结抖音美妆 2026 秋冬趋势：不同于厚重假面浓妆或缺记忆点的清透裸妆，“可可妆”撷取秋日可可、熟果、暖棕色彩灵感，以大地色打底，搭配熟果调红晕与细腻柔光，主打温润松弛、自然浓郁，兼顾通勤与约会场景；其灵魂是同时建立暖调底色、情绪红晕与柔润光泽三层表达，并衍生出缎光可可、果晕可可、流金可可、香颂可可、亚裔可可五子趋势。海外秋冬趋势（NakedlyDressed、SweetyHigh 11 月）则集中在酒渍莓果唇、90 年代棕唇柔化轮廓、清冷灰紫烟熏与“由内而外”的光泽肌；日常可只保留一个较深或带闪的重点部位，其余从简，避免全脸浓重点。', meta: '秋冬妆面趋势', stat: '可可妆 · 莓果唇' },
  { name: '理财职场 · 11/25 A 股三大指数集体低开，港股恒生科技盘中涨约 2%', desc: '网易/东方财富/财联社 11/25：A 股三大股指集体低开，沪指跌 0.73% 报 3522.59 点，深成指跌 1.45% 报 10272.19 点，创指跌 2.01% 报 2233.18 点；盘面上半导体、通信设备、电子元器件、贵金属等板块回调明显，煤炭、银行相对抗跌，两市及北交所共 511 家上涨、4630 家下跌。资金面，央行公开市场开展 6170 亿元隔夜逆回购操作，利率 1.25%，当日 5160 亿元逆回购到期；两市融资余额增加 2.2 亿元，合计 21350.27 亿元；人民币对美元中间价报 6.7088，升值 23 个基点。港股方面，恒指高开 0.15%，恒生科技指数盘中涨 2% 至 3537.29 点；早盘大模型股低开，MINIMAX-W 跌超 6%、智谱跌近 5%。短期板块轮动较快，理财安排仍建议按自身风险承受能力配置，避免仅凭单日盘面追涨杀跌。', meta: '市场行情', stat: '沪指 3522.59 · 融资余额 2.135 万亿' },
  { name: '健康 · 晴冷干燥昼夜温差近 9℃，火险 4 级注意润燥与头颈保暖', desc: '上海中心气象台与宝山气象台 11/25 06 时发布：今日晴到多云，5~14℃，偏南风 3-4 级、沿江地区 4-5 级，相对湿度 40%-90%，火险气象指数 4 级（易燃）。清晨气温仅 2-9℃，午后回升至 13-14℃，昼夜温差接近 9℃；午后湿度降至 23%-28%，体感偏干。出门建议洋葱式穿法，晨间加外套护住头颈与手部，午后升温可逐层脱减；室内外注意补水、润唇与润燥护肤，呼吸道黏膜敏感者早晚减少长时间迎风停留。空气干燥时段注意用电用火安全，避免在林区与草丛附近明火；若出现持续咳嗽、咽痛或鼻塞加重，及时就医，不要自行叠加多种感冒药。', meta: '健康提醒', stat: '5~14℃ · 火险 4 级' }
]

const localCards = [
  { name: '上海天气 · 11月25日', desc: '晴到多云，5~14℃（墨迹口径 6~14℃；10:05 实时 8℃、体感 5℃）。白天偏南风 3-4 级、沿江地区 4-5 级（实时东北风 2 级），相对湿度 45%（40%-90%），气压 1029hPa，能见度约 28.6 公里；空气质量上午 AQI 55-75 良（首要 PM2.5）、下午 60-80 良（首要 PM2.5）、夜间 55-75 良（首要 NO2），实时 AQI 61 良。日出06:30，日落16:52；火险气象指数 4 级，易燃。明天 11/26 晴 10~20℃、西南风 2 级、湿度 54%、AQI 55 良；11/27 晴 10~20℃、西风 3 级、AQI 105 轻度污染；11/28 晴 7~16℃、西北风 5 级、AQI 100 良；11/29 晴 8~16℃；11/30 晴 12~15℃。', meta: '今日天气', stat: '5~14℃ 晴到多云' },
  { name: '本地要闻', desc: '①科技会展：2026 全球 6G 发展大会 11/24-25 在上海举行，主题为“智启星程，携手全球协同创新”，重点讨论和发布 6G 最新技术标准研究成果（新华社 11/25）。②工程机械展：bauma CHINA 2026 首次采用“一展双馆”模式，总展示面积 40 万平方米、较上届增长 20%，汇聚全球 30 余个国家和地区 4120 家参展商；上海新国际博览中心聚焦大型整机、土方机械、矿山建材设备及传动液压零部件，世博展览馆侧重智能技术、新能源、数字化方案与绿色低碳生态，展期分别为 11/24-27 与 11/23-26（上观新闻 11/25）。③文体活动：2026 上海中心高塔竞速挑战赛 11/28-29 举行，总规模约 3000 人，设个人全程赛、团队接力赛与个人欢乐跑三个组别；上海博物馆珠宝珍藏展免费开放；短道速滑世界巡回赛时隔七年重返申城；11 月上海共举办 35 场展会，进博会之外工业联展、食品展、虹桥科技周等同步进行。', meta: '上海资讯', stat: '6G 大会 · 宝马展 · 高塔竞速' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周三早安，今天晴到多云 5~14℃，偏南风 3-4 级，晨晚偏冷、午后回暖，空气偏干记得补水润燥；工作日把手头任务分个轻重缓急，稳步推进就好 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月25日 星期三</span>
          <span>第 082 期</span>
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
          <h3>智谱 GLM-5.4 以 Loop Transformer 架构冲击 2-3T 级智能；腾讯混元开源翻译模型 Hy MT3；商汤 U1.6 多模态图像自修正；MemT-1.0-Pro 554B 记忆原生模型开源；微软 Aion-2.3B 端侧轻量模型 MIT 开放；MAI Code 2 以四成成本追平九成八性能</h3>
          <p>模型侧智谱发布首款 Loop Transformer 架构旗舰 GLM-5.4，750B 基座 28 层循环两轮、新增视觉输入与 1M 上下文，主打“泛 Coding”；腾讯混元开源第三代翻译模型 Hy MT3，1.8B/7B/30B-A3B 三尺寸覆盖端侧；商汤开源 8B 多模态 SenseNova U1.6，加入原生图像自修正闭环；MemT-1.0-Pro 作为第三代记忆原生模型，554B 总参/59B 激活并开源；微软 Aion-1.0-Instruct-2.3B 以 MIT 许可面向端侧文本处理；产业侧微软 Ignite 七款 MAI 模型把竞争推向每 token 有效成本，MAI Code 2 性能达 GPT-6.1 Sol 约 98%、成本仅四成。GitHub 日榜手机端 DSH 客户端、自主 Agent 原型、想法转交互图、团队 Agent 管理、全网信息接入与 AI 求职代理等项目持续走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.082</span>
      </footer>
    </div>
  )
}
