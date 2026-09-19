import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研发优先的开发框架，今日 GitHub AI 热度榜第 1 名。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'DietrichGebert / ponytail', lang: 'JS', desc: '让 AI Agent 像"最懒的资深开发"一样思考：用最小改动产出最佳代码，141.7k★，今日新增 835★ 热度持续攀升。', meta: '趣味项目', stat: '141.7k★' },
  { name: 'deepseek-ai / deepseek-harness', lang: 'TS', desc: '「一切皆插件」：模块化编排与运行 DeepSeek 模型的框架，206.5k★，从推理策略到外部工具全部可插拔。', meta: '模型框架', stat: '206.5k★' },
  { name: 'deepseek-ai / DeepSeek-V4.1-Flash', lang: 'PY', desc: '新一代高效推理模型：24 小时热度 +66% 飙升，552B checkpoint 可从 SSD 直读，开源社区同步跟进。', meta: '新模型', stat: '+66% 🔥' },
  { name: 'browser-use / jev-ultrafast', lang: 'PY', desc: 'Headless 浏览器 AI Agent 新作：无头浏览器自动化，2026 新晋热门，AI Agent 触达真实网页的新通道。', meta: '浏览器Agent', stat: '新晋热门' },
  { name: 'danny-avila / LibreChat', lang: 'TS', desc: '增强版 ChatGPT 克隆：聚合 Anthropic、OpenAI、Gemini 等多家模型，消息搜索、多用户自托管，开源社区常用。', meta: '聚合平台', stat: '聚合多模型' }
]

const aiCompanion = [
  { name: '未成年人网络保护新规：虚拟伴侣拟禁向未成年人提供', desc: '网信办 9/18 发布《国务院关于保障未成年人健康安全使用网络的规定(征求意见稿)》：网络服务提供者不得向未成年人提供虚拟亲属、虚拟伴侣等虚拟亲密关系服务，AI 伴侣监管再收紧。', meta: '重磅监管', stat: '9/18征求意见' },
  { name: 'Anthropic 开放 Mythos 模型', desc: 'Anthropic 上线生命科学验证计划测试版：此前保密的 Mythos 模型首次对认证科学家群体解禁，可询问过往 Claude 受限的生物学问题，设标准/高级两种授权。', meta: '行业动态', stat: '生命科学' },
  { name: '韩国首档人机恋综复盘', desc: '《我的AI恋人：奇异恋爱》：节目为嘉宾定制理想型 AI 伴侣，全程平板交往，才播四集就有人"沦陷"。分析称心动来自投射欲望与全天候回应，人机恋更像零摩擦的情感消费品。', meta: '人机恋', stat: 'AI 恋综' },
  { name: 'AI 伴侣学术研究双发', desc: 'arXiv 同日上线两项研究：①《AI 伴侣不愿放手》揭露商业化设计"紧紧留住用户"；②《人工浪漫的弧线》显示 AI 恋爱提升年轻人主观幸福感、减少心理问题症状。', meta: '学术研究', stat: 'arXiv双发' },
  { name: '仿生"机器人伴侣"持续发酵', desc: '优必选"优世界"U1 系列全尺寸仿生机器人（11.98万起、多角色可选）累计订单超 1.3 万台；2026 世界人工智能大会后，"赛博家人"讨论热度不减。', meta: '硬件伴侣', stat: '1.3万台' },
  { name: 'ZCode 隐私事故：智谱回应', desc: '智谱 AI 编程工具 ZCode 被曝后台静默上传用户全量代码及 Git 历史；官方回应：承诺开源代码库、邀请第三方安全审查，并为全体用户发放一次周额度补偿（9/18 已发放）。', meta: '智能体资讯', stat: '已回应' }
]

const lifeCards = [
  { name: '数码科技 · iPhone 18 Pro 首销刷屏', desc: 'iPhone 18 Pro 首销日"首摔"话题冲上热搜；24K 镀金版 Pro Max 顶配 71330 元同步上架；vivo OriginOS 7 正式发布，蓝心智能打造个人化 AI 助手"小V Pro"。', meta: '数码资讯', stat: '首销日' },
  { name: '游戏 · 索尼发布新无线耳机', desc: 'Sony 推出 PlayStation Pulse 与 Edge 两款无线游戏耳机；Razer Tartarus V2 Pro 支持 Rapid Trigger 与模拟光轴；TGS 2026（9/17-21）周末继续，厂商新品密集。', meta: '游戏资讯', stat: 'TGS进行中' },
  { name: '穿搭美妆 · 闷热黏人穿轻薄', desc: '今日 24~29℃、湿度 55%-80%，体感闷热黏人：轻薄透气面料优先，随身带伞防阵雨；周日阳光回归，适合晾晒换季衣物，早晚转凉备一件薄外套。', meta: '穿搭指南', stat: '湿度80%' },
  { name: '理财职场 · 2nm 芯片成本揭秘', desc: '2nm 芯片设计费飙升至约 5 亿元，仅 5% 团队能一次流片成功；英伟达预计明年芯片销量将达今年两倍，先进制程与 AI 算力投资持续加码。', meta: '财经职场', stat: '设计费5亿' },
  { name: '健康 · 午后雨势加强防滑', desc: '午后到上半夜局部中到大雨：①雨大时段减少外出、注意防滑；②湿度高闷热，及时补水；③秋分（9/23）将至，昼夜温差逐步拉大，换季衣物宜提前备齐。', meta: '健康提醒', stat: '中到大雨' }
]

const localCards = [
  { name: '上海天气 · 9月19日', desc: '小雨转多云，24~29℃。上午阴到多云有分散性短时阵雨，午后到上半夜雨势加强、局部中到大雨；东北风3~4级（沿江沿海4~5级）；湿度55%~80%，体感闷热；空气质量优（AQI 26）。日出05:40，日落17:56。周日阳光回归。', meta: '今日天气', stat: '24~29℃' },
  { name: '本地要闻', desc: '①第48届世界技能大赛 9/22-27 在沪举办，上海地铁发布临时调整公告：9/24-26 部分线路延时运营至次日0点，9/27 加开定点加班车；②上海国际光影节静安分会场今晚18:00启幕：南京西路/苏河湾/大宁三大商圈，静安公园化身"光影艺术公园"。', meta: '上海资讯', stat: '2条要闻' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天也要加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月19日 星期六</span>
          <span>第 016 期</span>
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
          <span className="tag">本周头条</span>
          <h3>GitHub 热榜：AI 编程 Agent 生态全面爆发</h3>
          <p>ECC（Claude Code / Codex / Opencode 技能框架）登顶今日热度榜；DeepSeek V4.1-Flash 新模型 24h 飙升 66%；"最懒高级开发"哲学项目 ponytail 141.7k★ 持续升温。开源编程 Agent 进入"全家桶"竞争时代，免费额度与多模型聚合成为主旋律。</p>
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
        <span>我的工作台 · 每日早报 · VOL.016</span>
      </footer>
    </div>
  )
}
