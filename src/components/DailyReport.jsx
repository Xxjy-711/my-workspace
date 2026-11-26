import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'kajisho5 / ffmpeg-skill', lang: 'Python', desc: '新生爆款榜约 +3.9K、总约 10.2K 星：面向编程代理的本地视频编辑器，内置 42 个 FFmpeg 工具并附带机器可读契约与 MCP server，适配 Claude Code、Cursor 与 Codex；支持片段剪辑、字幕生成、画面重构、响度校准与多平台导出，全程本地运行，不需要云端服务或 API key，适合把视频处理环节接进代理工作流。', meta: '代理本地 FFmpeg 技能', stat: '10.2K★/新生+3.9K' },
  { name: 'zhouxiaoka / autoclip', lang: 'Python', desc: '总约 15.3K 星、日约 +981：开源 AI 视频剪辑桌面工具，可把播客、访谈、课程等长视频自动识别高光片段并二次剪成短视频，同步生成字幕、封面与发布文案，适配抖音、小红书、TikTok、Instagram Reels 与 YouTube Shorts；面向需要把长内容批量改造成短素材的创作者与内容团队。', meta: 'AI 长视频自动剪短', stat: '15.3K★/日+981' },
  { name: 'XiaoYouChR / Ghost-Downloader-3', lang: 'Python', desc: '总约 17.3K 星、日约 +1,102：跨平台下载管理器，统一管理普通文件、种子与流媒体等多种下载任务，支持多线程与断点续传；作为长期维护的开源工具，适合需要在一台机器上集中管控多来源下载、不想被单一客户端绑定的用户。', meta: '跨平台下载管理器', stat: '17.3K★/日+1102' },
  { name: 'mjmirza / app-store-compliance', lang: 'Shell', desc: '总约 5.8K 星、日约 +936：整理移动应用常见的商店拒审问题，提供提交前检查清单与扫描脚本，帮助开发者在上架前自查隐私权限、描述文案、材料合规等高频被拒项；面向准备提交 App Store 或 Google Play 的团队，减少反复被打回的轮次。', meta: '上架合规自查清单', stat: '5.8K★/日+936' },
  { name: 'Tracer-Cloud / opensre', lang: 'Python', desc: '总约 15.2K 星、日约 +408：结合构建日志与代码上下文调查持续集成失败原因，并辅助提出修复建议；面向 CI 排障与 SRE 场景，把流水线报错、相关改动与历史失败记录串联起来，帮助研发快速定位是配置、依赖还是代码变更引入的问题。', meta: 'CI 失败排障助手', stat: '15.2K★/日+408' },
  { name: 'cathrynlavery / diagram-design', lang: 'HTML', desc: '总约 71.9K 星、日约 +794：为多种编程智能体提供图表设计技能，可生成可编辑的网页与矢量图，把方案、架构或流程落成可浏览、可二次修改的图示；面向需要让代理产出结构化图解的开发者与写作者，降低从文字思路到可视化图表的转化成本。', meta: '代理图表设计技能', stat: '71.9K★/日+794' }
]

const aiCompanion = [
  { name: 'NVIDIA 开源 Nemotron-Labs-Image-30B-A3B：30B 自回归 MoE 图像生成模型', desc: 'AI Pulse 11/26 收录：NVIDIA 开源 Nemotron-Labs-Image-30B-A3B，一款 30B 规模的自回归 MoE 图像生成模型。它把图像生成拆成视觉 token 逐个生成，不再依赖扩散模型反复去噪；已有的 LLM 量化与推理优化方案可以直接复用，普通消费级硬件跑本地图像生成的门槛随之被拉低。模型走 MoE 稀疏激活路线，面向希望在本地或自有管线里部署图像生成、并复用成熟推理栈的开发者。', meta: '自回归 MoE 图像模型', stat: '30B · 自回归生成' },
  { name: 'BaseLabs 与 RampLabs 开源 speculative encoding：跨模型翻译信息，最高提速 4 倍', desc: 'AI Pulse 11/26：Baseten 旗下 BaseLabs 研究团队与 RampLabs 开源 speculative encoding 方法的权重与代码。在多智能体系统里，每个新模型接手任务时往往要重新处理一遍相同上下文；这套方法能跨模型直接翻译已有信息，速度最高提升 4 倍，准确率保留 96%。面向使用多模型协作或集群部署的团队，目标是减少上下文重复编码带来的开销，权重与代码均已开放。', meta: '跨模型上下文编码', stat: '4× 提速 · 准确率 96%' },
  { name: 'RustingStrata 开源 Rust 推理引擎：3060 12GB 跑 35B，比 llama.cpp 快约 70%', desc: 'AI Pulse 11/26：RustingStrata 是一个用 Rust 编写、靠 CPU/GPU 混合调度的本地推理引擎。实测让 Qwen3.6-35B-A3B 在 RTX 3060 12GB 上达到 113.4 tok/s，配合 MTP 投机解码最高可达 160 tok/s，相比 llama.cpp 提速约 70%。面向显存有限、希望在消费级显卡上跑大参数 MoE 模型的用户，重点展示混合调度与投机解码在本地硬件上的实际收益。', meta: '本地混合调度推理', stat: '3060 12GB · 113.4 tok/s' },
  { name: 'Dreamina 推出 Dreamina Drama Studio：定位全球首个短剧 Agent，转向整剧生产', desc: 'AI Pulse 11/26：剪映 Dreamina 推出 Dreamina Drama Studio，定位为全球首个短剧 Agent。它不再停留在生成单张图、单段视频，而是面向内容生意搭建整段短剧的生产流程，把剧本、分镜、画面与片段组织成可交付的剧集。报道指出，AI 内容工具的竞争正在从“单条出片质量”转向“能不能跑通一整条内容生产线”，内容团队的生产组织方式可能随之改变。', meta: '整剧生产短剧 Agent', stat: '单素材 → 整剧' },
  { name: '浙大 × 宇树开源 Movens-5M：500 万条机器人动作、超 1 万小时多模态对齐', desc: '机器之心/The Robotics Media 11 月报道：浙江大学与宇树科技具身智能联合实验室，联合微软研究院、北京大学、新加坡国立大学等团队，从海量互联网人类视频中构建并开源预训练数据集 Movens-5M，收录 500 万条经仿真执行验证的机器人动作，总时长超 1 万小时、约 10.8 亿帧，覆盖行走、深蹲、拖地、拳击等 297 种细分动作与 16 类场景；数据集将文字指令、视频示范、语音与音乐和机器人动作配对。配套动作模型 Movens-Zero 支持文本、语音、音乐、视频四种输入生成全身动作，已在宇树 G1 真机验证；数据集与 64.2M 至 910.5M 四档模型在 Hugging Face 与 GitHub 开放。', meta: '具身智能动作数据', stat: '500 万条 · 1 万+ 小时' },
  { name: 'Hugging Face 发布千 Agent 集群博客与 legion、msgboard 工具，大规模编排经验开源', desc: 'AI Pulse 11/26：Hugging Face 发布《Scaling Swarms to Thousands of Agents》博客，并公开 legion、msgboard 两个内部工具。团队用 1000 个 DeepSeek Agent 连续跑了一周多，把大规模 Agent 集群在编排、通信、状态同步与稳定性上的踩坑经验整理成文，连同两个工具一并开放；此前这类经验主要掌握在少数实验室手里，其他团队现在可以直接参考其多代理协作与集群管理实践。', meta: '千 Agent 集群编排', stat: '1000 Agent · 工具开源' }
]

const lifeCards = [
  { name: '数码科技 · 华为 Mate X8 正式发布，5A 通信支持设备新增 Mate 90 Air 与 Mate X8 系列', desc: '今日头条/einkCN 11/25-26 报道：华为全新一代旗舰折叠屏 Mate X8 正式发布，外屏 6.54 英寸、内屏 8.2 英寸，外屏搭载第二代灵珑屏并采用玄武昆仑玻璃，内屏配超强抗反柔性镀膜；影像为 5000 万像素超高动态主摄、5000 万像素超大光圈潜望长焦、4000 万超广角与第三代红枫原色摄像头，提供紫金锦、丹霞锦、青云锦、苍穹黑、雪域白五款配色。同日华为 5A 通信技术支持设备上新，新增 Mate 90 Air 与 Mate X8 系列。海外方面，Fairphone 6 Plus 模块化可维修手机发布，6.3 英寸屏、配 12 个可更换部件。选购折叠屏仍建议结合自身手感、影像需求与售后渠道逐项对比，不必只看发布参数。', meta: '折叠屏旗舰发布', stat: '内屏 8.2 英寸 · 四摄' },
  { name: '游戏 · 《堕落之主 2》定档 2027 年 4 月；《Rust》付费会员 12/3 上线；Manjuu 新作今日上线', desc: '18183 等 11/25-26 消息：CI Games 首席执行官 Marek Tyminski 在社交平台确认，《堕落之主 2》将于 2027 年 4 月发售，确切日期 12 月公布，该作于 2025 年科隆游戏展开幕夜首次公开。Facepunch 宣布《Rust》推出付费月度会员 Rust Premium，随 12 月 3 日月度更新上线，包含专属服务器、满员排队优先、移动端高清摄像头与玩家期待已久的角色自定义。《碧蓝航线》开发商 Manjuu Games 新作幻想世界 RPG《Azur Promilia》11 月 26 日上线，基本免费、道具内购，全球事前登录突破 3000 万，登陆 PC 与移动端，PS5 版本预定。', meta: '新作与会员动态', stat: '堕落之主 2 · 2027/4' },
  { name: '穿搭美妆 · 冬季妆面转向轻薄丝缎底妆，浓缩咖啡眼妆与樱桃可乐唇成为重点', desc: 'Allure、North West Connected 等 11 月趋势总结：干燥冬季容易把底妆叠厚，本季更推崇可控制遮瑕度的轻薄粉底或 skin tint，保留雀斑、斑点与皮肤纹理，只在泛红、瑕疵处局部遮瑕，T 区适度定妆、其余部位留光泽，避免完美哑光带来的干纹与假面感。眼妆走 espresso 浓缩咖啡棕方向，唇妆以樱桃可乐、深樱桃红棕为主，用指尖把颜色向外拍开、弱化清晰唇线，搭配水润或柔焦质地；腮红可选蔓越莓或玫瑰色膏状腮红。日常建议全脸只保留一个深色或带闪的重点部位，其余从简。', meta: '冬季妆面趋势', stat: '丝缎底妆 · 咖啡眼 · 可乐唇' },
  { name: '理财职场 · 11/26 A 股四大股指集体高开，贵金属/算力/半导体领涨；港股恒生科技涨超 2%', desc: '上证报/东方财富/财联社 11/26：A 股四大股指集体高开，沪指涨 0.39%、深成指涨 0.98%、创业板指涨 1.35%、科创综指涨 1.57%，盘面上贵金属、算力硬件、半导体芯片等板块涨幅居前；10:01 沪指报 3472.97 点、微跌 0.10%（昨收 3476.47 点）。港股方面，恒指高开 1.22% 报 22234.89 点，恒生科技指数高开 2.29% 报 3455.73 点，10:02 报 3458.19 点、涨 2.37%；成分股中理想汽车-W 涨超 8%，智谱涨超 5%，MINIMAX-W、蔚来-SW 涨超 4%。短期板块轮动较快，理财安排仍建议按自身风险承受能力配置，避免仅凭单日盘面追涨杀跌。', meta: '市场行情', stat: '恒指 22234.89 · 恒生科技 +2.37%' },
  { name: '健康 · 晴暖回暖昼夜温差约 9℃，夜间 PM2.5 抬升注意防护与润燥', desc: '上海中心气象台与环境监测中心 11/26 发布：今日晴 10~19℃，午后最高约 19℃，清晨仅 10℃ 上下，昼夜温差接近 9℃；白天相对湿度 43%-55% 偏干，夜间湿度回升至 70% 以上。空气质量下午 AQI 55-75 良（首要 NO2），夜间 90-110 良到轻度污染（首要 PM2.5）。早晚外出建议薄外套叠穿、护住头颈手部，午后升温可逐层减衣；呼吸道敏感者清晨与夜间减少长时间户外停留，室内注意补水、润唇与润燥护肤；污染时段外出可佩戴口罩，回家后清洁面部与鼻腔，出现持续咳嗽、咽痛或鼻塞加重时及时就医。', meta: '健康提醒', stat: '10~19℃ · 夜间良到轻度污染' }
]

const localCards = [
  { name: '上海天气 · 11月26日', desc: '晴，10~19℃（上海中心气象台口径 9~19℃；09:45 实时 12℃、体感 11℃）。白天偏南风 3-4 级（实时东北风 1 级），相对湿度 55%（43%-81%），气压 1021hPa，能见度约 14 公里；空气质量下午 AQI 55-75 良（首要 NO2）、夜间 90-110 良到轻度污染（首要 PM2.5），实时 AQI 70 良。日出06:31，日落16:52。明天 11/27 晴 10~20℃（气象台 11~21℃）、西风 3-4 级、AQI 95 良；11/28 晴 7~16℃、西北风 4 级；11/29 晴 10~15℃、东南风 3 级；11/30 晴 12~19℃。', meta: '今日天气', stat: '10~19℃ 晴' },
  { name: '本地要闻', desc: '①轨交计次票今日开售：据澎湃新闻与上海地铁 11/25 消息，11 月 26 日起轨道交通计次票在 metro 大都会、上海交通卡、随申行、云闪付等线上渠道发售，12 月 1 日起即买即激活即使用，自激活日起 30 个自然日运营时段内有效；四档套餐分别为 35 次 190 元、45 次 210 元、60 次 270 元、90 次 390 元，折合单次约 5.43、4.67、4.50、4.33 元。票适用全市轨交，不含磁浮线、金山铁路、市域机场线及以后开通的市域线，车站现场不售卖；12 月 1 日起新票价与一、三日票同步调整。②展会文体：bauma CHINA 2026 今日在上海世博展览馆收官（11/23-26），上海新国际博览中心持续至 11/27；BFC 外滩金融中心“外滩咩好假期”11/28 至 2027 年 1 月 10 日联合小羊肖恩登场；原创音乐剧《玉良》11/27-28 登陆 YOUNG 剧场，《海上钢琴师》音乐剧 11/27-29 上演于上海文化广场；今晚 19:00 钢琴家王羽佳携手马勒室内乐团在“路易号”旁呈献专场音乐会并线上直播。', meta: '上海资讯', stat: '计次票今日开售 · 宝马展收官' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周四早安，今天晴 10~19℃，偏南风 3-4 级，午后回暖到 19℃，早晚偏凉记得叠穿；工作日收尾前把手头事项理一理，稳步推进就好 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月26日 星期四</span>
          <span>第 083 期</span>
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
          <h3>NVIDIA 开源 30B 自回归 MoE 图像模型；BaseLabs/RampLabs 开源跨模型 speculative encoding；RustingStrata 让 3060 跑 35B 提速约七成；Dreamina 推出全球首个短剧 Agent；浙大宇树开源 500 万条机器人动作数据；Hugging Face 公开千 Agent 集群经验</h3>
          <p>模型侧 NVIDIA 开源 Nemotron-Labs-Image-30B-A3B 自回归 MoE 图像生成模型，复用 LLM 量化与推理优化方案降低本地门槛；Baseten BaseLabs 与 RampLabs 开源 speculative encoding，跨模型翻译信息最高 4 倍提速、保留 96% 准确率；Rust 引擎 RustingStrata 靠 CPU/GPU 混合调度让 RTX 3060 12GB 跑 35B 达 113.4 tok/s；Dreamina 推出短剧 Agent Dreamina Drama Studio 跑通整剧生产；浙大、宇树联合微软研究院等开源 Movens-5M 数据集与 Movens-Zero，500 万条动作超 1 万小时；Hugging Face 发布千 Agent 集群博客与 legion、msgboard 工具。GitHub 日榜本地 FFmpeg 技能、AI 长视频剪辑、跨平台下载器、上架合规自查、CI 失败排障与图表设计技能等项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.083</span>
      </footer>
    </div>
  )
}
