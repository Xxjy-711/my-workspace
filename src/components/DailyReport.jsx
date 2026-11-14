import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'debpalash / VoiceStudio', lang: 'Python', desc: '约 11 万星、近 7 天新增 7.2K：开源、全本地的 ElevenLabs 替代，支持声音克隆、语音设计、视频配音、听写、转写与有声书创作，覆盖 646 种语言，是本地语音方向近期最热门的仓库之一。', meta: '语音克隆', stat: '110K★/周+7.2K' },
  { name: 'addyosmani / agent-skills', lang: 'JavaScript', desc: '约 8.4 万星、9K fork：面向 AI 编码 Agent 的生产级工程技能库，把代码规范、评审、测试等可复用工作流封装成技能单元，供各类编码 Agent 直接加载。', meta: '工程技能库', stat: '84K★' },
  { name: 'mvanhorn / last30days-skill', lang: 'Python', desc: '调研型 Agent 技能：跨 Reddit、X、YouTube、HN、Polymarket 与网页检索任一主题，再综合成有据可依的摘要，约 5.7 万星、5K fork，适合做选题与背景调研。', meta: '调研摘要', stat: '57K★' },
  { name: 'langchain-ai / langchain', lang: 'Python', desc: '约 14.94 万星：开源 Python 框架，以统一接口构建 LLM 应用、RAG 管线与自主 Agent，跨多家模型提供商调度，是 LLM 应用层最常用的基础框架之一。', meta: 'LLM 框架', stat: '149.4K★' },
  { name: 'yetone / magpie', lang: 'Go', desc: '菜单栏一站式给各 Agent 配模型：Codex 走 DeepSeek、Claude Code 走 Kimi，从菜单直接切换，约 3.41 万星，解决多 Agent 多 Key 混接问题。', meta: '模型路由', stat: '34.1K★' },
  { name: 'skills', lang: 'Python', desc: 'Agent Skills 公共仓库，约 18.98 万星、2.24 万 fork，汇集可被各类编码 Agent 加载的技能定义，是浏览与挑选现成 Agent 工作流的常用入口。', meta: '技能集合', stat: '189.8K★' }
]

const aiCompanion = [
  { name: '头条 · DeepSeek 开放全家桶应用 API，语音能力独立成接口', desc: '澎湃 11/13、网易与头条 11/14：DeepSeek 宣布开放全家桶应用 API，在原有 API 中开启对应参数即可获得深度思考搜索、文件输入等对话功能；语音及底层能力也开放独立接口，含 OCR、ASR、TTS，支持单独或组合调用，开发者可在自己应用里 1:1 复刻完整 DeepSeek App。', meta: '头条 API', stat: 'OCR/ASR/TTS' },
  { name: 'Anthropic IPO 认购约 6 倍，估值约 1.4 万亿美元', desc: '财新/彭博/网易 11/11-14：Anthropic 首次公开募股认购需求约为可供认购股份的 6 倍；基础发行拟募最高 644 亿美元，同步私募配售 260 亿，合计最高 904 亿美元；完全摊薄估值约 1.4 万亿美元，发行价区间 70-78 美元/股，纳斯达克代码 ANT；据报道已排除中国大陆及香港机构投资者。', meta: 'IPO 进展', stat: '认购6倍' },
  { name: 'Google DeepMind 发布 Gemini 4 Hydrogen', desc: 'AI圈报转 MarkTechPost 11/14：闭源模型 Gemini 4 Hydrogen 定位编码与智能体工作流，速度比 Gemini 3.8 Flash 快 2.5 倍；Terminal-Bench 4.1 得分 57%，而 3.8 Flash 为 18.2%，编码与 Agent 任务能力明显抬升。', meta: '新模型', stat: '速度2.5倍' },
  { name: 'Perplexity Mac 版上线 AI 队友 Teammates', desc: 'IT之家 11/14：Perplexity 邀请付费 Max 订阅用户在 Mac 平台体验 AI 智能体功能 Teammates，组建全天候数字员工；该功能此前仅支持 iOS 与网页端，本次进一步覆盖桌面办公场景。', meta: '桌面 Agent', stat: 'Mac 上线' },
  { name: '上海创新研究院开源 321B 多模态 Agent 模型 Nex-N2.6', desc: '蚁工厂微博 11/14：由上海创新研究院（SII）Nex-AGI 团队研发的新一代多模态智能体模型 Nex-N2.6，以 Apache 2.0 协议全面开源，权重与代码在 Hugging Face 与 GitHub 同步开放。', meta: '国产开源', stat: '321B 多模态' },
  { name: '我国发布"星云星座计划"，太空算力网加快部署', desc: '科创板日报 11/14：在 11 月 9 日举办的 2026 太空云产业生态大会上，"星云星座计划"等太空云产业化成果发布；该计划由中科院空天信息创新研究院与国内科创企业联合研发，是全栈国产化太空算力网，标志我国太空云从技术验证走向产业化布局。', meta: '产业政策', stat: '太空算力网' }
]

const lifeCards = [
  { name: '数码科技 · 语音助手先调 API，离线克隆再上本地工具', desc: 'DeepSeek 已把 ASR、TTS、OCR 开放成独立接口，个人做语音助手可先接 API 快速跑通，不必一上来本地硬跑模型；想离线保留音色、不依赖云端，再试 VoiceStudio 这类全本地克隆工具，周末有空可以装来玩玩。', meta: '语音工具', stat: '先 API 后本地' },
  { name: '数码科技 · 编码模型提速，桌面端 AI 队友开始普及', desc: 'Gemini 4 Hydrogen 主打编码与 Agent 工作流、速度比上代 Flash 快 2.5 倍；Perplexity 把 AI 队友 Teammates 搬上 Mac，付费 Max 用户可在桌面挂数字员工处理重复事务。日常写代码、查资料可以留意这类桌面 Agent。', meta: '效率工具', stat: '桌面 Agent' },
  { name: '穿搭美妆 · 全天小雨湿度大，防风防水+持妆控油', desc: '周六全天小雨、15~18℃、湿度 93% 以上：出门穿防风防水外套、内搭针织，鞋子选防滑款；雨天妆容以控油持妆为主，避免底妆花掉，护肤注意补水防潮，回到家及时擦干鞋袜。', meta: '雨天穿搭', stat: '湿度93%+' },
  { name: '理财职场 · 周末复盘：AI 资本火热，求职仍看落地', desc: '本周 AI 头部公司资本动作密集：Anthropic 认购 6 倍、估值约 1.4 万亿，但已排除中港机构，估值仍有波动。看机会优先选现金流健康、有真实付费落地的公司；语音、多模态开源模型密集发布，相关测试与工程岗位可重点留意。', meta: '职场财经', stat: '周末复盘' },
  { name: '健康 · 雨天防滑保暖，居家拉伸为主', desc: '雨天湿度大、能见度低，外出带伞、走路骑车注意防滑；关节和呼吸道敏感人群注意保暖。居家日适合室内拉伸、轻量活动，避免长时间淋雨外出；开窗通风选雨歇的间隙，别在雨最大的时候开窗。', meta: '健康提醒', stat: '居家轻运动' }
]

const localCards = [
  { name: '上海天气 · 11月14日', desc: '小雨转阴，15~18℃（实时 18℃、体感 20℃）。东风转东北/偏北风 2~3 级。相对湿度 93%~99%，体感很湿；上午中雨、局部雨量中等，午后到傍晚间歇小雨，夜间转多云；上午局部有雾、能见度约 3.4 公里。AQI 上午优、午后良。日出06:20，日落16:57。明天阴 14~19℃、北风 3 级、湿度 75%、AQI 95 良。', meta: '今日天气', stat: '15~18℃小雨转阴' },
  { name: '本地要闻', desc: '①全天阵性降雨、局部中雨，周末出门带伞，骑行、开车减速防滑；②湿度接近饱和、衣物不易干，居家先把衣物收纳好，开窗选雨歇时段；明天转阴、气温略升，更适合安排户外活动。', meta: '上海资讯', stat: '雨天防滑' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周六早安，今天全天小雨、局部中雨，15~18℃ 湿度很大；出门带伞防滑，居家日适合休息折腾点小工具，明天转阴就舒服些啦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月14日 星期六</span>
          <span>第 071 期</span>
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
          <h3>DeepSeek 开放全家桶应用 API；Anthropic IPO 认购 6 倍、估值约 1.4 万亿；Gemini 4 Hydrogen 与 Nex-N2.6 开源亮相</h3>
          <p>澎湃 11/13：DeepSeek 开放全家桶应用 API，深度思考搜索、文件输入开参数即用，OCR/ASR/TTS 语音能力独立成接口，可 1:1 复刻完整 App。资本侧 Anthropic IPO 认购约 6 倍，IPO+私募合计最高募 904 亿美元、估值约 1.4 万亿，代码 ANT。模型侧 Google DeepMind 发布 Gemini 4 Hydrogen（编码/Agent，速度 2.5×）；Perplexity Mac 上线 Teammates；上海创新研究院开源 321B 多模态 Agent 模型 Nex-N2.6；我国"星云星座计划"太空算力网发布。</p>
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
        <span>我的工作台 · 每日早报 · VOL.071</span>
      </footer>
    </div>
  )
}
