import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'openclaw / openclaw', lang: 'TypeScript', desc: '现象级开源个人 AI 助手，OSS Agent 框架榜第 1，累计约 39.4 万星、8.3 万 fork，可快速部署到 macOS / Windows / Linux，仍是个人 Agent 头部项目。', meta: '个人Agent框架', stat: '394.3K★' },
  { name: 'addyosmani / agent-skills', lang: 'JavaScript', desc: 'Addy Osmani 出品的生产级工程技能包，把资深工程师的工作流、质量门禁与最佳实践固化成 Agent 可复用技能，含 8 个覆盖研发生命周期的斜杠命令，MIT 许可，约 11.3 万星。', meta: '工程技能库', stat: '113K★/周+2.1K' },
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '极简主义编码技能：把"最懒的资深工程师"思维塞进 Agent，专治过度设计、多余代码与重复造轮子，口号是"最好的代码是不必写出来的代码"，约 18.1 万星、9.9K fork。', meta: '极简编码', stat: '181K★' },
  { name: 'mvanhorn / last30days-skill', lang: 'Python', desc: '调研型 Agent 技能：跨 Reddit、X、YouTube、HN、Polymarket 与网页检索任一主题，再综合成有据可依的摘要，约 5.7 万星、5K fork，适合做选题与背景调研。', meta: '调研摘要', stat: '57K★' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，累计约 43.7 万星，长期占据 AI Agent 榜前列，适合研究软件内部机制与协议实现。', meta: '逆向工程', stat: '437K★' },
  { name: 'skills', lang: 'Python', desc: 'Agent Skills 公共仓库，约 18.98 万星、2.24 万 fork，汇集可被各类编码 Agent 加载的技能定义，是浏览与挑选现成 Agent 工作流的常用入口。', meta: '技能集合', stat: '189.8K★' }
]

const aiCompanion = [
  { name: '头条 · Anthropic 启动 IPO 路演，估值 9170 亿~1.02 万亿美元', desc: '智源 11/12：Anthropic 正式启动路演，拟发行 8.25 亿股、发行价区间 70–78 美元/股，上限募资超 600 亿美元，另含 260 亿美元私募配售；结合流通股估值 9170 亿~1.02 万亿美元，较此前 2 万亿峰值显著回落。澳洲投资者已可认购，股票料 11/20 在纳斯达克上市。', meta: '头条IPO', stat: '估值约1万亿' },
  { name: '谷歌 DeepMind 发布基因组模型 AlphaGenome 2', desc: '科创板日报 11/12：基于 1.07 亿单细胞图谱训练，可预测 DNA 序列及其变异对特定人类细胞类型和状态的影响，致病变异识别率达 30%，目前已开放非商业研究使用，推动基因疾病研究。', meta: '科研模型', stat: '识别率30%' },
  { name: '智元发布终身具身智能框架 LIFE', desc: '36氪 11/12：LIFE（Learning to Live）把持续感知、长期记忆与能力复用结合，支持机器人在任务执行期间及间隔期获取环境信息，并将历史观察用于后续决策；论文、项目主页与 RoboBeats 系列模型已同步公开。', meta: '具身智能', stat: '终身学习' },
  { name: 'MiniMax 开源 H3-Image 图像模型并开放权重', desc: '证券日报 11/12：由 H3 衍生，支持文生图、图像参考与图像编辑；在广泛图像能力基础上强化后训练链路，覆盖数据、强化学习、步数压缩与部署优化，模型权重同步开放。', meta: '开源图像', stat: '权重开放' },
  { name: '优必选×沐曦合资公司完成 5 亿元天使轮；平头哥交表独立上市', desc: '每经 11/12：曦选创智（沐曦与优必选 5 月合资）完成 5 亿元天使轮，纪源资本、经纬创投联合领投，建自主可控具身智能计算平台；阿里平头哥已向港交所交表，真武 AI 芯片累计出货 56 万片、服务 650+ 企业。', meta: '算力融资', stat: '5亿天使轮' },
  { name: 'OpenAI 下调融资至 200 亿美元；Anthropic 推介定制芯片', desc: 'DoNews 11/11：受科技股回调、AI 投资趋缓及竞品上市影响，OpenAI 新一轮融资规模由 300 亿缩减至 200 亿美元、估值降至 1.25 万亿；Anthropic 同时向投资者推介定制芯片设计能力，多路布局算力以缓解资本开支压力。', meta: '资本动态', stat: '估值回调' }
]

const lifeCards = [
  { name: '数码科技 · Agent 出初稿、人来把关，先复用别重复造轮子', desc: '超四成 PR 已由 Agent 发起：写代码可先让 Agent 出方案与初稿，人做 review 与取舍；优先复用成熟库和现成技能（如 agent-skills、ponytail），避免一上来堆代码，简单任务别过度设计。', meta: '编码提效', stat: '人审Agent' },
  { name: '图像创作 · 开源图像模型可省版权成本', desc: 'MiniMax H3-Image 开放权重，支持文生图、参考图与图像编辑；做配图、参考稿、社媒素材时可先试用开源模型出初稿，再按需要精修，减少商用图库版权顾虑。', meta: '创作工具', stat: '权重开源' },
  { name: '穿搭美妆 · 阴雨湿度大，外套选防风防水、内搭薄针织', desc: '今天阴有间歇小雨、湿度 70% 以上，气温 15~18℃ 不算冷：外套挑防风防水面料，内搭薄针织即可；鞋子选防滑款。湿气重时护肤以补水保湿为主，避开过于厚重闷肤的产品。', meta: '雨天穿搭', stat: '湿度70%+' },
  { name: '理财职场 · AI 估值回调，优先选现金流健康的机会', desc: '头部 AI 公司出现融资缩量与估值回落，求职或看机会优先选现金流健康、有真实付费场景的公司；具身智能算力（沐曦×优必选 5 亿天使轮）、国产 AI 芯片（平头哥上市）是产业链长期方向，可留意相关岗位。', meta: '职场财经', stat: '看现金流' },
  { name: '健康 · 阴雨关节保暖，趁午后空气优通风短外出', desc: '湿度大、气温略降，关节与呼吸道敏感人群注意颈背保暖；今天下午到夜间空气优到良，可趁午后开窗通风、短时间外出；明天转良到轻度污染，晨练时长适当缩短；雨天鞋袜湿了及时更换，通勤慢行防摔。', meta: '健康提醒', stat: '午后通风' }
]

const localCards = [
  { name: '上海天气 · 11月12日', desc: '阴有间歇小雨，15~18℃（实时 18℃、体感 19℃）。东南风 3~4 级、沿江沿海 4~5 级，下午起转偏北风。相对湿度 69%~85%，体感偏湿。AQI 优（实时 46；闵行口径 60 良）。日出06:19，日落16:58。中午前后、傍晚到夜间有小雨时段，降水分散、伴随多云穿插；明天阴 16~21℃、良到轻度污染，14~15 日仍有小雨过程。', meta: '今日天气', stat: '15~18℃间歇雨' },
  { name: '本地要闻', desc: '①全天阵性小雨分散在中午前后与傍晚夜间，出门带伞、路面湿滑，通勤预留时间、放慢节奏；②今天午后到夜间空气优到良，适合开窗通风与短时间外出；明天转良到轻度污染，敏感人群户外活动尽量安排在今天；近期雨水偏多，衣物晾晒需等晴好窗口。', meta: '上海资讯', stat: '备伞通勤' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周四早安，今天阴有间歇小雨、15~18℃ 不算冷，但湿度偏大；出门记得带伞，午后空气优到良，通风短外出正合适 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月12日 星期四</span>
          <span>第 069 期</span>
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
          <h3>Anthropic 启动 IPO 路演、估值约 1 万亿美元；DeepMind 发基因组模型 AlphaGenome 2，智元推终身具身框架 LIFE</h3>
          <p>智源 11/12：Anthropic 路演发行价 70–78 美元/股，估值 9170 亿~1.02 万亿美元，较 2 万亿峰值回落，股票料 11/20 纳斯达克上市。同日谷歌 DeepMind 发布 AlphaGenome 2，基于 1.07 亿单细胞图谱训练、致病变异识别率 30%；智元开源终身具身智能框架 LIFE，强调长期记忆与能力复用。另一侧 MiniMax 开源 H3-Image，优必选×沐曦合资公司完成 5 亿元天使轮；OpenAI 则被曝下调融资规模至 200 亿美元。</p>
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
        <span>我的工作台 · 每日早报 · VOL.069</span>
      </footer>
    </div>
  )
}
