import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'stablyai / orca', lang: 'Rust', desc: '归档站 11/26 收录：下一代 AI 智能体开发 IDE，支持在 macOS、Windows 与 Linux 上并行运行 Claude Code、Codex、OpenCode 等多种 CLI 编码代理；每个代理拥有独立工作树，由 IDE 统一管理与追踪，面向需要同时推进多条编码任务、避免代理之间互相干扰的开发者，把多代理并行开发收进同一个桌面工作台。', meta: '多代理并行开发 IDE', stat: '跨平台 · 独立工作树' },
  { name: 'multica-ai / multica', lang: 'TypeScript', desc: '归档站 11/26 收录、总约 57.9K 星：开源、可自托管的 AI 智能体协同工作空间，把人类开发者与 Claude Code、Codex 等 26 种编码代理统一在同一看板；代理像团队成员一样领取任务、汇报进度、提出阻塞并等待人工审查，面向多代理协作场景，解决上下文割裂、重复沟通与进度不可见的问题。', meta: '自托管多代理看板', stat: '约 57.9K★ · 26 种代理' },
  { name: 'nexu-io / openmotion', lang: 'TypeScript', desc: '归档站 11/26 收录、总约 16.4K 星：首个开源全栈 AI 视频生成平台，支持通过 HTML 代码逆向重建任意参考视频，结合用户品牌资产与自有 AI 代理或 API 密钥实现全自动视频重制、剪辑与渲染；内置图像、视频、音乐、语音等七种多模态大模型，适用于短视频创作、品牌广告再制与自动化内容生产。', meta: '开源全栈视频生成', stat: '约 16.4K★ · 七种多模态模型' },
  { name: 'getpaseo / paseo', lang: 'TypeScript', desc: '归档站 11/26 收录、总约 25.5K 星：跨平台编程代理编排工具，支持通过手机、桌面端和 CLI 远程管理 Claude Code、Codex、OpenCode 等 AI 编码助手；核心特性包括本地自托管运行、多模型统一接口、语音控制、跨设备同步与零追踪的隐私保护，用户可在任意终端启动任务，实现从构思到部署的无缝协作。', meta: '跨设备代理编排', stat: '约 25.5K★ · 手机/桌面/CLI' },
  { name: 'n8n-io / nod', lang: 'TypeScript', desc: 'open-repo 新生爆款榜收录、总约 3.6K 星、日约 +1.0K：n8n 推出的开源个人代理，自带“电脑”在真实网站上追发票、准备通话、取消试用，行动前会先向用户询问；代理在本机运行、模型可自选，面向希望把日常重复性杂务交给代理自动化、又保留人工确认环节的个人用户。', meta: '本机个人事务代理', stat: '约 3.6K★/新生+1.0K' },
  { name: 'tradermonty / claude-trading-skills', lang: 'Python', desc: 'open-repo 新生爆款榜收录、总约 8.5K 星、日约 +1.4K：面向 Claude 等编码代理的交易技能包，把行情梳理、策略复盘等交易相关环节封装成可被代理调用的技能；面向想用代理辅助量化研究、交易记录整理与复盘分析的开发者，把交易流程接进代理工作流，具体投资决策仍需自行判断。', meta: '代理交易技能包', stat: '约 8.5K★/新生+1.4K' }
]

const aiCompanion = [
  { name: 'OpenAI 数学仓库新增 9 篇 AI 生成手稿：矩阵乘法指数锁定 9/4，连破多项开放难题', desc: '36 氪/微博/FourWeekMBA 11/25-26 报道：OpenAI 在官方 math 仓库一口气上传 9 篇由未公开内部模型生成的手稿，其中一篇给出矩阵乘法指数 ω 的下界证明，把长期悬而未决的 ω 确定为 9/4（2.25），排除了更小取值的可能；同批手稿还宣称给出线性规划的确定性强多项式算法（回应斯梅尔第九问题）、证明 Erdős–Rado 固定花瓣数向日葵猜想，并反驳多项式 Hirsch 猜想。需要注意，这些手稿目前是“原始研究数据”，尚未经过同行评审，计算机可验证证明也只覆盖部分结果。', meta: 'AI 数学突破', stat: 'ω=9/4 · 9 篇手稿' },
  { name: '匿名模型 HungerG 空降 OpenCode 日榜第三：百万上下文多模态，本周限免', desc: '智东西/36 氪/OpenCode 数据站 11/25-26：一款代号 HungerG 的匿名模型 11 月 23 日凌晨登陆 OpenCode 与 Qoder，上线一天即冲上 OpenCode 模型调用量日榜第三，单日 Token 使用量约 1.2 万亿，仅次于 DeepSeek V4.1 Flash 与腾讯混元 Hy4 Flash；OpenCode 数据站显示其上线三天累计约 2T Token、峰值日活约 1 万、会话约 26.1 万。模型具备 100 万 Token 上下文与原生多模态输入，承诺不拿用户数据训练，具体参数、架构与厂商均未公开，Qoder 提供 7 天免费体验、OpenCode Go 订阅用户本周可免费调用。', meta: '匿名黑马模型', stat: '日榜第三 · 100 万上下文' },
  { name: '商汤开源 SenseNova-RoboRSI-27B 正式版：27B 体量在 RoboDojo 超越 GPT-6 Astra', desc: 'IT 之家/DoNews/AI.info 11/26：商汤科技发布面向机器人操作的视觉语言模型 SenseNova-RoboRSI-27B 正式版，采用 Apache License 2.0 开源，已上线 GitHub 与 Hugging Face。相较 Preview 版主要依赖视觉语言动作模型（VLA）执行任务，正式版能自主判断何时调用 VLA、何时通过代码直接控制机械臂，并根据执行反馈调整动作策略；在 RoboDojo 最新版评测中平均得分 34.7，较 Preview 版 10.0 提升至约 3.47 倍，以 27B 体量超越官方团队测试的 GPT-6 Astra；同一仿真权重在 Piper X 机械臂积木堆叠 10 次成功 9 次。', meta: '机器人 VLA 开源', stat: '27B · RoboDojo 34.7 分' },
  { name: '亚马逊约 75 亿美元收购 Decart 优化栈与团队，加码 Trainium 对标英伟达', desc: '财联社/新浪财经/36 氪 11/24-25：亚马逊当地时间 11 月 23 日宣布签署协议，收购以色列 AI 初创公司 Decart 旗下“Decart 优化栈”（DOS）专有技术，三位联合创始人携 AI 研究与工程团队加盟；据媒体报道交易作价约 75 亿美元（约 500 亿元人民币），仍需满足监管批准等惯例条件。DOS 是衔接芯片与模型的软件引擎，可提升 AI 系统运行效率，并让模型在英伟达、亚马逊、谷歌等不同厂商芯片间灵活切换；Decart 的实时视频模型 Lucy 与世界模型 Oasis 不在收购范围内。相关技术将用于优化 Trainium 芯片的训练与推理，亚马逊拟明年起对外出售 Trainium。', meta: '算力优化收购', stat: '约 75 亿美元 · DOS 技术栈' },
  { name: '瑞士首次通报五起 AI 智能体网络攻击：四起得手，波及电力供水通信', desc: 'IT 之家/路透社/Blick 11/26：瑞士联邦网络安全局（BACS）周四通报，过去几天发生五起借助 AI 智能体发起的网络攻击，其中四起攻击得手、相关系统遭入侵；三起针对关键基础设施运营方，据瑞士公共广播 SRF 介绍分别为电力、供水与通信服务供应商。机构表示目前没有造成更大规模中断，幕后主体与所用工具均未公布，相关数字尚未经独立核实；BACS 建议企业定期开展网络安全检测、落实防护手段。这是瑞士首次确认由 AI 智能体参与的关键基础设施网络攻击，自主工具在漏洞发现与攻击提速上的风险值得关注。', meta: 'Agent 安全治理', stat: '5 起 · 3 起关键基础设施' },
  { name: '腾讯 ORIDTP 以第一单位首登 Nature：AI 从头设计双靶点多肽，减重降糖与肿瘤免疫验证', desc: '澎湃/IT 之家/凤凰网 11/26-27：腾讯生命科学实验室主导的研究《De novo design of high-potency dual-target therapeutic peptides with ORIDTP》11 月 25 日以第一单位登上《Nature》主刊，是腾讯首次以第一署名单位登 Nature 正刊。团队构建 AI 平台 ORIDTP，整合扩散生成模型、双目标强化学习、柔性多肽亲和力建模与生物学实验，跑通“计算设计—实验验证—反馈优化”闭环；在 GLP-1R/GCGR 双激动剂方向，肥胖或糖尿病小鼠模型中仅用司美格鲁肽十分之一剂量即取得更优减重降糖效果且无恶心、味觉厌恶反应；在 PD-1/CTLA-4 免疫检查点方向也完成一个设计周期验证。', meta: 'AI for Science', stat: 'Nature 主刊 · 双靶点多肽' }
]

const lifeCards = [
  { name: '数码科技 · 三星 11 月四款新品齐发：开放式耳机、智能追踪器、AI 眼镜与 W27 折叠屏', desc: 'Qoo Gadget 11/26 汇总：三星 11 月面向年末假期推出四款新品，包括开放式夹耳耳机 Galaxy Buds On（美国售价 229.99 美元，基于超 1.19 亿条耳形数据设计，IP54 防护）、智能追踪器 SmartTag3、与 Google、Gentle Monster、Warby Parker 合作的 AI 智能眼镜，以及面向中国市场的高端折叠屏 Samsung W27。海外方面，Motorola Signature 27 于 11 月 27 日在阿根廷开启预售，搭载 DXOMARK 高评价影像系统、12000nits AMOLED 屏与 7000mAh 电池，同步推出 moto buds 2 ultra 耳机、moto watch Ultra 手表与磁吸无线充电器。选购穿戴与折叠设备仍建议结合佩戴舒适度、生态联动与售后渠道逐项对比。', meta: '年末新品阵列', stat: 'Buds On · W27 折叠' },
  { name: '游戏 · 《尘埃异变 2》今日登陆 Switch/Switch 2 并推送免费更新；GTA6 带动系列手游下载近 4 倍', desc: '新浪财经/3DM 11/26-27 消息：发行商 Kwalee 与开发商 Clover Bite 宣布，《尘埃异变 2》11 月 27 日正式登陆 Switch 与 Switch 2 双平台，同日所有现有版本同步推送免费大型更新“终章余音”；该作此前已于 3 月 31 日登陆 PS5、Xbox Series 与 Steam，更新需通关主线后解锁，含全新区域、高难度平台跳跃与首领再战机制。另一则行业数据：《GTA6》登陆主机当周，系列手游下载量升至约 230 万、接近前一周的 4 倍，其中《罪恶都市 最终版》安装量超 110 万居首；Steam 上《GTA5 增强版》日活也从 40.7 万增至 71.8 万。', meta: '新作与榜单动态', stat: '尘埃异变 2 · 今日上 Switch' },
  { name: '穿搭美妆 · 换季个性化定制调香走热，功效护肤、香水与专业护发成为增长韧性品类', desc: '人民日报金台资讯/36 氪 11 月报道：换季时节美妆消费从“千品一面”转向“千人千面”，香水门店现场定制调香、参与式体验受到欢迎；国货品牌在护肤、彩妆、香氛、护发等细分赛道全面开花，从几十元性价比好物到上千元高端产品均有供给。行业格局上，2026 年前三季度全球美妆集团持续分化，皮肤科学美容、香水及专业护发继续释放韧性，中国市场出现结构性回暖；大众业务与弱势品牌仍在消耗资源。日常换季建议以温和清洁、保湿修护为主，香氛选择先试香再入手，功效型产品按肤质与耐受度逐步叠加，避免一次性叠用过多新品。', meta: '换季美妆趋势', stat: '定制香氛 · 功效护肤' },
  { name: '理财职场 · 11/27 A 股三大指数集体高开超 3300 只上涨；港股恒指涨约 0.5%、恒生科技涨超 2%', desc: '中新经纬/财联社/第一财经/Wind 11/27：A 股三大指数集体高开，沪指涨 0.16%、深证成指涨 0.37%、创业板指涨 0.59%，超 3300 只个股上涨；板块方面造纸、机场、半导体、贵金属、保险等上涨，农业、办公用品、零售等下跌。港股方面，恒指高开 268 点，10:13 报 22335.81 点、涨 0.49%（昨收 22226.88 点）；恒生科技指数涨超 2% 报 3485.97 点，美团-W 涨超 4%，阿里巴巴-W、百度集团-W、网易、快手-W 涨超 1%。短期板块轮动较快，理财安排仍建议按自身风险承受能力与投资周期配置，避免仅凭单日盘面追涨杀跌。', meta: '市场行情', stat: '恒指 22335.81 · 恒生科技 +2%' },
  { name: '健康 · 晴暖回升昼夜温差约 10℃，早晨局部有雾，空气质量良到轻度污染注意防护', desc: '上海中心气象台与青浦气象台 11/27 发布：今日晴 10~20℃，午后最高约 20℃，清晨仅 10℃ 上下，昼夜温差接近 10℃；早晨局部地区有雾，白天相对湿度 43%-60%、偏干，湿度区间 45%-90%。空气质量实时 AQI 67 良，青浦口径 85-105 良到轻度污染，首要污染物以 PM2.5/PM10 为主。雾天与早晚能见度偏低，驾车、骑行注意减速并保持车距；呼吸道敏感者清晨与夜间减少长时间户外停留，室内注意补水、润唇与润燥护肤；污染时段外出可佩戴口罩，回家后清洁面部与鼻腔，出现持续咳嗽、咽痛或鼻塞加重时及时就医。', meta: '健康提醒', stat: '10~20℃ · 晨雾 · 良到轻度污染' }
]

const localCards = [
  { name: '上海天气 · 11月27日', desc: '晴，10~20℃（青浦气象台口径 6~21℃，早晨局部地区有雾；10:00 实时 14℃、体感 13℃）。白天偏西风 3-4 级（青浦口径 4-5 级；实时西南风 2 级），相对湿度 60%（43%-90%），气压 1021hPa，能见度约 14.3 公里；空气质量实时 AQI 67 良，青浦口径 85-105 良到轻度污染。日出06:31，日落16:52。明天 11/28 晴 7~16℃、西北风 4 级、湿度 41%、AQI 65 良；11/29 晴 10~14℃、东南风 3 级；11/30 晴 13~20℃；12/1 多云 14~21℃。', meta: '今日天气', stat: '10~20℃ 晴' },
  { name: '本地要闻', desc: '①展会收官：bauma CHINA 2026 上海新国际博览中心今日（11/27）收官，世博展览馆已于 11/26 闭展；本届一展双馆、约 40 万㎡ 规模汇聚 3800+ 展商，覆盖工程机械、矿山机械、建材机械、新能源技术等方向。②市集演出与快闪：杨浦大学路纽赛「新雪期，新气象」快闪今日开幕并持续至 12/27，KIC 创智天地缤纷广场造雪机不定时飘雪、圣诞树每日 18:00 亮灯（10 号线江湾体育场站 9 号口）；长宁来福士冬日发酵市集 11/27-29 分两波登场，40+ 摊位集结咖啡烘焙与热食品类；西岸凤巢·大师公园活动 11/27-29 举行；静安嘉里中心南广场「狂想马戏城」持续开放至 2027 年 1 月 3 日，12 月 4 日起开市冬日市集。③舞台演出：原创音乐剧《玉良》今日至 11/28 登陆 YOUNG 剧场，《海上钢琴师》音乐剧 11/27-29 上演于上海文化广场。', meta: '上海资讯', stat: '宝马展收官 · 大学路造雪快闪' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周五早安，今天晴 10~20℃，早晨局部有雾，偏西风 3-4 级，午后回暖到 20℃，早晚偏凉、昼夜温差大约 10℃，出门记得带件外套；把本周事项收尾理一理，轻松迎接周末 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月27日 星期五</span>
          <span>第 084 期</span>
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
          <h3>OpenAI 数学仓库新增 9 篇手稿锁定矩阵乘法指数 9/4；匿名模型 HungerG 空降 OpenCode 日榜第三；商汤开源 27B 机器人模型超越 GPT-6 Astra；亚马逊约 75 亿美元收购 Decart 优化栈；瑞士首报 AI 智能体攻击关键基础设施；腾讯 ORIDTP 首登 Nature 设计双靶点多肽</h3>
          <p>模型与科研侧 OpenAI 在官方仓库上传 9 篇 AI 生成数学手稿，给出矩阵乘法指数 ω=9/4 的下界证明，并宣称回应斯梅尔第九问题、证明向日葵猜想等；匿名模型 HungerG 凭百万上下文与多模态上线一天冲上 OpenCode 日榜第三；商汤开源 27B 机器人视觉语言模型 RoboRSI-27B，RoboDojo 得分超越 GPT-6 Astra。产业与安全侧亚马逊约 75 亿美元收购 Decart 优化栈 DOS 与团队，加码 Trainium 对标英伟达；瑞士首次通报五起 AI 智能体网络攻击、四起得手，波及电力供水通信；腾讯 ORIDTP 平台以第一单位首登 Nature，AI 从头设计双靶点多肽并完成动物实验验证。GitHub 日榜多代理并行 IDE、自托管协同看板、全栈视频生成、跨设备代理编排、个人事务代理与交易技能包等项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.084</span>
      </footer>
    </div>
  )
}
