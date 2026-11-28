import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'pingdotgg / t3code', lang: 'TypeScript', desc: 'GitRank 11/28 今日榜第 2、今日约 +1.9K 星：Ping.gg 团队开源的现代化全栈 Web 编程与 AI 辅助开发工作台，基于 TypeScript 构建，主打极致响应体验；面向希望在同一套工程环境里完成前后端编码、调试与 AI 辅助协作的开发者，把全栈 Web 开发流程收进一个开源工作台。', meta: '全栈 Web 开发工作台', stat: 'TypeScript · 今日 +1.9K' },
  { name: 'BaaRai / ARTEX', lang: 'Go', desc: 'GitRank 11/28 今日榜新发现、今日约 +1.8K 星：用 Go 编写的 AI 自主渗透测试系统，可自动跑通信息收集、漏洞探测与漏洞利用流程，帮安全人员省去大量手工测试时间；面向授权安全评估与红队演练场景，使用前需确保仅在获得书面授权的目标范围内操作，具体漏洞利用能力应遵守合规与网络安全相关规定。', meta: 'AI 自主渗透测试', stat: 'Go · 今日 +1.8K' },
  { name: '4lwayz / portwatch-vi', lang: 'JavaScript', desc: 'GitRank 11/28 今日榜新发现、今日约 +1.9K 星：一个实时追踪器，回答“GTA VI 何时能在 PC 上运行”，每日更新社区对游戏的重编译（recompilation）与模拟器兼容进展；面向关注 PC 端移植与模拟适配进度的玩家与开发者，把分散在社区的编译、补丁、模拟测试信息汇总成可跟踪的看板。', meta: 'GTA6 PC 兼容追踪', stat: 'JavaScript · 今日 +1.9K' },
  { name: 'debpalash / VoiceStudio', lang: 'Python', desc: 'GitRank 11/28 今日榜趋势项、今日约 +659 星：本地运行的开源语音工作台，集声音克隆、配音、语音转录与有声书制作于一体，宣称支持 646 种语言；面向希望在本机完成语音内容生产、避免语音素材上传到第三方服务器的创作者，把录音、克隆、转写与后期串成一条本地流水线，实际效果与语言覆盖以项目文档为准。', meta: '本地语音工作台', stat: 'Python · 今日 +659' },
  { name: 'ersinkoc / phonebox', lang: 'JavaScript', desc: 'GitRank 11/28 今日榜新发现、今日约 +618 星：把一部旧 Android 手机改造成可自定义的桌面面板与触控控制台，支持 Windows、Linux 与 macOS；内置 124 个组件与 30 套模板，覆盖系统状态、AI 编程、媒体播放与自动化等场景，提供 13 种语言，通过 USB 或配对 Wi-Fi 连接、无需云端；面向想用闲置旧机做副屏/快捷控制板的玩家与桌面搭建爱好者。', meta: '旧安卓变桌面控制台', stat: 'JavaScript · 今日 +618' },
  { name: 'OpenMontageInc / OpenMontage', lang: 'Python', desc: 'GitRank 11/28 今日榜、今日约 +327 星：首个开源智能体视频制作系统，包含 12 条制作流水线、100 多个工具、700 多个智能体技能与制作知识文件，可把 AI 编程助手扩展为完整的视频制作工作室；面向想搭建自动化短视频/广告片生产线的创作者与开发者，从脚本、素材到剪辑成片由代理按流水线协作完成。', meta: '开源智能体视频制作', stat: 'Python · 今日 +327' }
]

const aiCompanion = [
  { name: 'Liblib 母公司演语科技再融资近 2 亿美元：投后估值 32 亿美元，较 6 月上涨约六成', desc: '晚点 LatePost 11/27 独家报道：北京 AI 创意平台公司演语科技（Evoken）完成新一轮近 2 亿美元融资，投后估值 32 亿美元，公司还在以更高估值洽谈更多融资；这是少数仍能在此刻拿到头部美元基金大笔资金的中国 AI 应用公司。演语旗下拥有图像生成社区 Liblib、设计 Agent Lovart 与 AI 视频创作平台 LibTV；今年 6 月公司刚以 20.5 亿美元估值完成 3 亿美元 B+ 轮，由 Granite Asia、腾讯和顺为资本领投。上一轮谈判时 LibTV 尚未上线，如今 LibTV 已成为公司最大收入来源，推动单月收入达数千万美元，收入量级居国内 AI 应用公司头部，不到半年估值上涨约六成。', meta: 'AI 应用融资', stat: '近 2 亿美元 · 估值 32 亿美元' },
  { name: '蚂蚁灵波开源建图与导航双模型：LingBot-Map 2.0 三维重建 + LingBot-Navi 跨任务空间记忆', desc: '财湃新闻/量子位 11/27-28：蚂蚁灵波正式推出流式三维重建模型 LingBot-Map 2.0，同时开源搭载可复用空间记忆能力的导航模型 LingBot-Navi，针对移动机器人大范围作业中的两大痛点——长距离建图误差累积导致轨迹漂移、跨任务导航无法留存探索经验反复“记不住路”。LingBot-Navi 完全依托 Map 2.0 的重建能力，构建显式三维点云空间记忆；两款模型都支持在机器人端侧本地部署，场景图像与指令数据留在本地运算存储，兼顾实时响应与隐私安全。技术报告、全部代码、模型权重以及包含 511 个真实采集场景的公开数据集已全面对外开源。', meta: '具身智能开源', stat: '双模型 · 511 场景数据集' },
  { name: 'TabbyML 派 20 个 AI Agent 组队 4 天跑 350 次实验，优化开源搜索引擎刷新 ClickBench 公开纪录', desc: '量子位/腾讯新闻/C114Pro 11/27：AI 初创公司 TabbyML 组建一支由 20 个 AI Agents 构成的系统工程团队，投入真实的开源搜索引擎 Quickwit 做性能优化；人类只设定优化目标与工程约束，其余由 AI 自主完成。4 天内团队自主开展约 350 次工程实验，最终保留 6 项通过审查的优化；亿级数据测试中总热查询耗时从 40.5 秒降至 27.9 秒、下降 31%，部分查询耗时降幅高达 87%；在 ClickBench 数据湖类别同口径热查询对比中超越此前所有公开成绩。Agent 分为调研员、指挥员、验证员三类角色，分别负责瓶颈识别与方案提议、方案审查、实现验证，失败经验也沉淀为共享知识。', meta: '多 Agent 软件工程', stat: '20 Agents · 350 次实验' },
  { name: 'Hugging Face 在 Trainium3 上跑 LTX-2.5：10 秒 2048×1024 带声片段从 5 分 20 秒压到 20 余秒', desc: 'Darius 每日快讯 11/28：Hugging Face 在亚马逊 Trainium3（trn3.48xlarge）上运行 Lightricks 的 LTX-2.5 视频模型（Diffusers 检查点约 19B 参数），一条 10 秒、2048×1024 带声音片段的墙钟时间从最初的 5 分 20 秒降至 22-23 秒；优化后使用 64 个 NeuronCore 中的 32 个，每核显存从 22.96 GiB 降到 10.2 GiB。视频解码从 357 秒降至 1.6 秒，提示编码从约 205 秒降至 7.5 秒；帖文称其比 LTX 在线 API 生成同规格 10 秒 1080p 片段的 23.7 秒还快约一秒，显示自研芯片在视频模型推理上的优化空间。', meta: '芯片推理优化', stat: 'Trainium3 · 2048×1024' },
  { name: '四个 Qwen 0.6B 副本组成 nano swarm：任务成功率从 6.6% 升到 82.3%，Token 消耗降 37%', desc: 'InfoQ/Hugging Face 11/28 转发：围绕“agent swarms 到底是协作还是单纯消耗更多算力”的问题，作者 ben_burtenshaw 从第一性原理搭出一个 nano swarm——训练 4 个 Qwen 0.6B 模型副本并让它们共享一段简单代码；结果成功率从单副本的 6.6% 提升到 82.3%，每次尝试消耗的 Token 数下降 37%。这是一个极小模型、极简协作的对照实验，样本与任务范围有限，但为多小模型协作是否优于单个大模型提供了可复现的观察样本；更多关于 swarm 收益边界的结论仍需在更大任务集上验证。', meta: '小模型集群实验', stat: '4 副本 · 成功率 82.3%' },
  { name: 'Anthropic 用 Rust 重写 Messages API；微软 Agent Framework 遭恶意 PyPI 上传，供应链风险引关注', desc: 'Darius 每日快讯 11/28：据当日汇总，Anthropic 正以 Rust 重写其 Messages API，以改善服务端性能与稳定性；另一则安全动态显示，微软 Agent Framework 相关生态遭遇恶意 PyPI 包上传，提示使用第三方 Agent 框架与依赖时需校验包名、来源与版本。同日 Neptune 为 Agent 观测加入 scale-to-zero 图表，帮助团队统计代理在零到负载区间的资源与用量变化。Agent 工具链快速扩张的同时，API 工程化、依赖供应链安全与可观测性成为配套关注点。', meta: 'Agent 工具链动态', stat: 'Rust 重写 · 恶意包预警' }
]

const lifeCards = [
  { name: '数码科技 · 零跑 D99 黑金定制版 MPV 今日广州车展亮相；TCL P80 Ultra 入围 CES 2027 创新奖', desc: '17173/PR Newswire 11/26-27：零跑汽车发布 D99 MPV 黑金定制版官图，车型于 11 月 28 日广州车展正式亮相；参考官图采用全黑化设计、封闭式定制轮毂，并带有侧裙、尾翼等运动套件。手机方面，TCL Mobile 宣布 TCL P80 Ultra 入选 CES 2027 创新奖 honoree 名单，品牌称其拥有 27 年移动设备工程积累。年末车展与海外奖项季叠加，新车与新机节奏密集，购车换机仍建议结合实际需求、配置对比与售后渠道逐项判断，避免被营销概念带节奏。', meta: '车展与新品', stat: '零跑 D99 · TCL P80 Ultra' },
  { name: '游戏 · Smilegate《Dead Account : Two Blue Flames》四国抢先体验；《神魔大陆2》经典服今日维护', desc: 'PR Newswire/17173 11/27-28：Smilegate 周五宣布，由 Ian Games 开发的团队 roguelite 动作 RPG《Dead Account : Two Blue Flames》在四个国家/地区开启抢先体验（Early Release）。国内方面，《神魔大陆2》经典服于 11 月 28 日 04:00 起停机维护更新，预计约 1 小时，遇特殊情况顺延。周末想找新游尝鲜的玩家可关注抢先体验作品的联机规则与正式版进度，老游戏维护期间注意提前保存进度，具体开服时间以官方公告为准。', meta: '新作与维护动态', stat: 'Two Blue Flames 抢先体验' },
  { name: '穿搭美妆 · 冬季浆果李子色腮红与丝绒柔雾底妆回潮；巧克力棕、酒红与仿皮草成外套主线', desc: 'Who What Wear UK/Favorite Magazine/头条 11 月报道：本季彩妆主打“像皮肤本身”的柔软丝绒妆面，避免厚重哑光或强高光；腮红流行浆果与李子色调，营造刚从冷空气中进屋的气色感，膏状腮红轻拍在高位颧骨与鼻梁更自然。穿搭上巧克力棕被视为新的黑色，酒红、李子紫是礼服感配色，仿皮草与羊羔毛外套大幅回归，复古格纹重新变得成熟，天鹅绒从西装到裙装广泛出现；面料层面，轻薄泡芙羽绒、云绒鹅绒、户外拒水，以及双抗面料、可追溯原料、柔软亲肤的呢大衣是秋冬核心卖点。日常搭配建议一次只选一个趋势色/材质，与已有基础款混用即可。', meta: '秋冬美妆穿搭趋势', stat: '浆果腮红 · 巧克力棕' },
  { name: '理财职场 · 11/27 A 股放量大涨：创业板指涨超 11%、科创 50 涨超 15%，成交重回 2 万亿；隔夜美股 AI 回暖', desc: '财联社/新浪财经/网易 11/27-28：11 月 27 日午后市场快速反弹，创业板指涨超 11%（涨幅仅次于 2024 年 9 月 30 日的 15.36%），科创 50 指数涨超 15%，深成指涨超 7%；沪深两市成交额重回 2 万亿，较上一交易日放量约 6824 亿元，全市场超 5300 只个股上涨、超 400 只涨停。芯片产业链、华为产业链、算力硬件概念多股涨停，高股息红利股盘中逆势下挫。隔夜美股 AI 交易回暖、纳指涨超 2%，Anthropic 涨近 11%，闪迪涨近 16%，美光科技、SK 海力士涨超 7%。短期板块轮动与情绪修复特征明显，理财安排仍应按自身风险承受能力与投资周期配置，避免仅凭单日盘面追涨杀跌。', meta: '市场行情', stat: '创业板 +11.61% · 成交 2 万亿' },
  { name: '健康 · 冷空气今起影响本市，周日早晨市区 6℃、郊区局部薄冰；昼夜温差大注意分层保暖与润燥', desc: '上海中心气象台/上海市天气 11/28 发布：北方较强冷空气开始影响上海，今天中午起 4-5 级阵风 6 级，沿江沿海地区 5 级阵风 6-7 级；在冷空气与辐射降温共同作用下，最低值出现在周日早晨，市区约 6℃，郊区 -1℃ 到 3℃、局部地区有薄冰，周日白天冷空气影响结束。今天晴到多云、全天气温 9~17℃，相对湿度偏干，外出建议采用“内层保暖+中间层+防风外套”的分层穿法，随身带件厚外套应对早晚与沿江大风；呼吸道敏感者注意补水、润唇润燥，清晨低温时段减少长时间户外停留；自驾经过郊区易结霜路段注意减速，出现持续咳嗽、咽痛或关节不适及时就医。', meta: '健康提醒', stat: '9~17℃ · 阵风 6 级 · 周日晨 6℃' }
]

const localCards = [
  { name: '上海天气 · 11月28日', desc: '晴到多云，9~17℃（墨迹口径 6~18℃；09:45 实时晴 12℃、体感 10℃）。西北风 4-5 级、中午起阵风 6 级，沿江沿海 5 级阵风 6-7 级（实时东南风 2 级）；相对湿度 49%（区间 27%-53%），气压 1025hPa，能见度约 12.1 公里；空气质量实时 AQI 57 良，上午（06-12 时）AQI 60-80 首要污染物 PM2.5，下午（12-20 时）35-55 首要污染物 PM10、优到良。日出06:32，日落16:52。明天 11/29 晴 10~16℃、东南风 3 级、湿度 46%、AQI 55 良；11/30 晴 13~22℃、南风 2 级、AQI 50 优；12/1 多云 14~23℃。', meta: '今日天气', stat: '9~17℃ 晴到多云' },
  { name: '本地要闻', desc: '①周末市集与快闪：杨浦大学路 KIC 创智天地跨年季 11/27-2027/1/3，纽赛「新雪期，新气象」限时快闪持续至 12/27，缤纷广场造雪机不定时飘雪、圣诞树每日 18:00 亮灯，12/19-20 另有大学路限时步行街主题市集；外滩源暖冬嘉年华 11/25-12/27 举行，园内为姆明暖冬滑雪主题全国首展；长宁来福士圣诞巡游市集与冬日发酵市集 11/27-29 11:00-20:00 集结 40+ 品牌；浦东尚悦湾 GALA MARKET 暖冬市集 11/28-29 13:00-19:00，即墨路至船厂 1862 路段有美食餐车、文创与音乐演出；八号桥艺术空间 1908 粮仓茸茸宠物市集 11/28-29 11:00-20:00。②展览与演出：中文原创音乐剧《海上钢琴师》11/27-29 上演于上海文化广场；西岸美术馆 × 蓬皮杜「计算万千世界」展至 2027/2/14，上海美术馆西馆「岁时寒玉·溥心畬书画特展」11/24 新开幕。周末出行注意早晚降温与沿江大风，热门市集建议错峰前往。', meta: '上海资讯', stat: '暖冬市集 · 跨年季快闪' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周六早安，今天晴到多云 9~17℃，西北风 4-5 级、阵风 6 级，午后回暖到 17℃，早晚偏冷；明天早晨市区只有 6℃、郊区局部薄冰，出门记得穿防风厚外套，暖暖和和过周末 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月28日 星期六</span>
          <span>第 085 期</span>
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
          <h3>Liblib 母公司演语科技再融资近 2 亿美元、估值 32 亿美元；蚂蚁灵波开源建图导航双模型；20 个 AI Agent 组队 4 天跑 350 次实验刷新 ClickBench；HF 在 Trainium3 把 LTX-2.5 推理压到 20 余秒；四个 0.6B 副本 swarm 成功率升到 82.3%；Anthropic 用 Rust 重写 Messages API</h3>
          <p>产业与融资侧，Liblib/Lovart/LibTV 母公司演语科技完成近 2 亿美元新一轮融资、投后估值 32 亿美元，半年估值上涨约六成，LibTV 成为最大收入来源；蚂蚁灵波开源流式三维重建 LingBot-Map 2.0 与带跨任务空间记忆的导航模型 LingBot-Navi，端侧可部署并开放 511 场景数据集。Agent 与科研侧，TabbyML 用 20 个 AI Agent 组队四天自主跑约 350 次实验优化开源搜索引擎 Quickwit，热查询耗时降 31%、最高降 87%，刷新 ClickBench 数据湖类别公开成绩；HF 在 Trainium3 上把约 19B 的 LTX-2.5 视频模型 10 秒带声片段推理从 5 分 20 秒压到 20 余秒；四个 Qwen 0.6B 副本组成的 nano swarm 把任务成功率从 6.6% 提升到 82.3%。工具链侧 Anthropic 用 Rust 重写 Messages API，微软 Agent Framework 生态遭遇恶意 PyPI 包上传预警。GitHub 日榜全栈 Web 工作台、AI 渗透测试、GTA6 PC 兼容追踪、本地语音工作台、旧安卓变控制台与开源智能体视频制作系统等项目走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.085</span>
      </footer>
    </div>
  )
}
