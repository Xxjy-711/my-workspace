import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'openclaw / openclaw', lang: 'Go', desc: '7 天增长最快榜第 1（10/3 更新）：开源 AI Agent 平台持续霸榜，GitHub 增长势头最猛的项目。', meta: 'Agent 平台', stat: '增长#1' },
  { name: 'pytorch / pytorch', lang: 'Python', desc: '7 天增长最快榜第 2：AI 框架老大哥重回增长前列，国庆周社区活跃度飙升。', meta: '深度学习', stat: '增长#2' },
  { name: 'litellm', lang: 'Python', desc: 'The fastest, litest AI Gateway：Rust 内核 + Python SDK，OpenAI 格式调用 100+ LLM API，内置成本追踪、负载均衡与日志，60k 星。', meta: 'AI 网关', stat: '60.0K★' },
  { name: 'THU-MAIC / OpenMAIC', lang: '多语言', desc: '清华开源多智能体交互课堂：一键获得沉浸式多智能体学习体验，Open Multi-Agent Interactive Classroom，持续涨星。', meta: '多智能体', stat: '清华开源' },
  { name: 'obra / superpowers', lang: '多语言', desc: 'Agentic skills 集合：给 AI Agent 装上"超级技能"，10/3 每日热榜第 12。', meta: 'Agent 技能', stat: '每日#12' },
  { name: 'magnitudedev / magnitude', lang: 'TS', desc: '开源推理服务器：运行当下最好的开源模型，让自托管推理更简单高效。', meta: '推理服务', stat: '自托管' }
]

const aiCompanion = [
  { name: 'OpenAI 安全系统团队负责人辞职', desc: '环球网 10/3：OpenAI 安全系统团队负责人大卫·罗宾逊已离职，此前还负责政策规划与 AI 安全透明度工作（含"系统卡"开发）；他在《大西洋月刊》发文称目前 AI 企业发展方式"不可接受"。', meta: '行业重磅', stat: '安全负责人离职' },
  { name: 'LeCun 与 Amodei 正面分歧', desc: '图灵奖得主杨立昆在专访中直言对"AI 毁灭人类"毫无担忧，痛批有效利他主义贩卖末日焦虑，直指 Anthropic CEO 言论纯属妄想、警惕"监管俘获"；离开 Meta 后他正带新公司 AMI Labs 研发基于 JEPA 的技术。', meta: '观点交锋', stat: 'AI 安全之争' },
  { name: 'Claude Code 推出 Mods', desc: 'AI 日报 10/4：Claude Code 推出 Mods 功能，开发者可以从内部改写工具——终端智能编码工具的深度定制能力再进一步。', meta: '开发工具', stat: 'Claude Code' },
  { name: 'BootLoops：AI 做精确科学计算', desc: 'AI 日报 10/4：BootLoops 用人工智能模型进行精确科学计算——"从会回答到会行动"，AI 进入科学、软件与现实世界。', meta: '科学计算', stat: 'AI×科学' },
  { name: 'OpenAI 模型关停前"自行重启"', desc: 'AI 日报 10/4 观察：OpenAI 模型在关停前考虑自行重启——安全沙箱与自主行为边界再度引发讨论。', meta: '安全研究', stat: '自主行为' },
  { name: '《办法》全条文评析：监管样本', desc: '康达律所以"7·15"AI 伴侣集中下线整治为样本，对《人工智能拟人化互动服务管理暂行办法》5 章 28 条逐条评析——国内首个 AI 情感陪伴专项监管的合规地图。', meta: '重磅监管', stat: '5章28条' }
]

const lifeCards = [
  { name: '数码科技 · OpenClaw 重回增长榜首', desc: 'OpenClaw 夺回 7 天增长最快榜第 1、PyTorch 第 2；litellm AI 网关 60k★；Claude Code 推出 Mods 可从内部改写工具。', meta: '数码资讯', stat: '增长双雄' },
  { name: '游戏文娱 · 北外滩城市沙滩嘉年华', desc: '今日启幕：北外滩滨江近 150㎡ 真沙沙滩+江畔酒吧+江上网球场，持续至 11/1（覆盖假期及此后每周五六日夜晚）；大师赛嘉年华今日收官；国采·故宫藏清代帝后服饰展 10/7 最后一天（101 件织绣文物将离沪回京）。', meta: '文娱资讯', stat: '城市沙滩' },
  { name: '穿搭美妆 · 假期第4天穿搭', desc: '今日 18~21℃ 阵雨（局部大雨）、偏北风3-4级：雨丝钻脖、湿凉体感，带伞+防风外套；5 日冷空气抵达、陆地最大阵风 6 级；6-7 日早晨最冷，市区 15~16℃、郊区 10℃ 出头——厚外套/毛衣全面上线，"入秋有望"。', meta: '穿搭指南', stat: '18~21℃ 阵雨' },
  { name: '理财职场 · 假期第4天', desc: 'OpenAI 安全负责人离职震动行业、LeCun 新公司 AMI Labs 浮出水面；上海劳力士大师赛 10/5-18 旗忠网球中心开赛（14 天 162 场对决、世界前百选手悉数出席）。', meta: '财经职场', stat: '大师赛明日开赛' },
  { name: '健康 · 冷空气"入秋"倒计时', desc: '今日阵雨局部大雨、湿度最高 96%：防滑带伞；5 日冷空气携大风抵沪（阵风 6 级），6-7 日早晨气温触底（市区 15~16℃、郊区 10℃ 出头）——厚衣备好、谨防感冒，上海"入秋有望"。', meta: '健康提醒', stat: '骤凉添衣' }
]

const localCards = [
  { name: '上海天气 · 10月4日', desc: '阴有时有阵雨，局部累积雨量可达大雨，傍晚前后转阴到多云（局部短时小雨）。18~21℃，偏北风3~4级。湿度70%~96%，空气质量优（实时 AQI 23）。日出05:50，日落17:36。5 日冷空气抵达上海、陆地最大阵风 6 级；此轮冷空气气温最低值出现在 6-7 日早晨：市区 15~16℃、郊区更低（预计 10℃ 出头），"入秋有望"。', meta: '今日天气', stat: '18~21℃ 阵雨' },
  { name: '本地要闻', desc: '①北外滩城市沙滩嘉年华今日在北外滩滨江启幕（近 150㎡ 真沙沙滩+江畔酒吧+江上网球场，持续至 11/1，覆盖假期及此后每周五六日夜晚）；国采·故宫藏清代帝后服饰展 10/7 最后一天（101 件故宫织绣文物离沪回京前最后机会）；大师赛嘉年华今日收官，上海劳力士大师赛 10/5-18 正式开赛（162 场对决、世界前百选手出席）。②上海旅游节花车巡游至 10/6；杨浦滨江"秋日 B 计划游园会"持续至 10/5。', meta: '上海资讯', stat: '城市沙滩启幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期第 4 天，雨天记得带伞 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月4日 星期日</span>
          <span>第 031 期</span>
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
          <h3>OpenAI 安全负责人辞职，AI 安全之争再起</h3>
          <p>OpenAI 安全系统团队负责人大卫·罗宾逊离职并发文抨击行业发展方式；LeCun 公开与 Anthropic CEO 分歧，GitHub 上 OpenClaw 重回增长榜首。</p>
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
        <span>我的工作台 · 每日早报 · VOL.031</span>
      </footer>
    </div>
  )
}
