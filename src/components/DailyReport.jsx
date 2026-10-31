import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'HKUDS / DeepTutor', lang: 'Python', desc: '港大 LightRAG 团队出品——你的私人导师，读你自己的书、视频和笔记，能针对 B 站/YouTube 视频按 timestamp 答疑，生成测验和掌握度训练。', meta: 'AI教育', stat: 'Trending' },
  { name: 'deepseek-ai / deep-infer', lang: 'Python', desc: 'DeepSeek 开源推理框架——本地部署大模型推理加速，2026 年 10 月新晋热门仓库，开发者可直接套用到自己的模型服务。', meta: '推理框架', stat: 'DeepSeek' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: 'DSH 白嫖插件——免登录免 Key 直接用 DeepSeek V4.1 Flash、Kimi K3 等前沿模型，今日突破 5 万星大关。', meta: '免费AI', stat: '50K★' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，突破 40 万星，GitHub 史上增长最快项目之一。', meta: '逆向工程', stat: '400K★' },
  { name: 'f / prompts.chat', lang: 'TypeScript', desc: '原 Awesome ChatGPT Prompts——社区分享、发现和收藏 Prompt 的开源平台，175.2K 星，可自托管。', meta: 'Prompt库', stat: '175.2K★' },
  { name: 'anujasid / blender-ai-mcp-addon', lang: 'Python', desc: '把 AI 助手塞进 Blender 侧边栏——聊天、审批、Agent 团队全在 3D 软件里完成，连续多日飙升 +327%。', meta: 'AI+3D', stat: '+327%' }
]

const aiCompanion = [
  { name: '黑石预警：Anthropic 上市后或失投资级评级', desc: '微博 10/31：黑石集团预计 Anthropic 上市后可能无法获得投资级评级，融资成本面临上升压力——Anthropic 正推进 630 亿美元芯片融资，其中 180 亿为次级债务。', meta: 'IPO风险', stat: '630亿芯片' },
  { name: 'Anthropic 接近 1 万亿估值，完成 65 亿融资', desc: 'AI D-A-M-N 10/31：Anthropic 在 IPO 前再完成一轮 65 亿美元融资，估值逼近 1 万亿美元——与 SpaceX 的史上最大 IPO 之争进入白热化。', meta: 'Anthropic', stat: '1万亿估值' },
  { name: 'DeepSeek B 轮 1055 亿人民币，国资国家队入场', desc: '证券之星 10/30：天眼查显示 DeepSeek B 轮融资 1055 亿人民币，投资方含国家 AI 产业基金、中国移动、中国电信、腾讯、宁德时代、吉利、君联等。', meta: '国产AI', stat: '1055亿' },
  { name: 'OpenAI 加速融资，估值或超 1.4 万亿美元', desc: 'DoNews 10/30：OpenAI 正加速推进约 300 亿美元新一轮融资，估值从此前 1.25 万亿上调至或超 1.4 万亿，为 2027 年 IPO 蓄力。', meta: 'OpenAI', stat: '1.4万亿' },
  { name: 'DeepTutor 港大出品：你的私人 AI 导师', desc: 'ghtrends 10/31：HKUDS/DeepTutor 登顶趋势——读你自己的书、笔记和 B 站视频，按时间戳答疑，生成测验和掌握度训练，自建知识库基于 LightRAG。', meta: 'AI教育', stat: '港大出品' },
  { name: '周六晴好，AI 陪伴温暖周末', desc: '上海今天晴到多云 15~25℃——上午有雾有霾，下午空气转好。适合出门晒晒太阳，晚上窝在屋里和 AI 聊聊天，迎接周末。', meta: 'AI伴侣', stat: '周六快乐' }
]

const lifeCards = [
  { name: '数码科技 · 黑石预警 Anthropic 评级风险', desc: '微博 10/31：黑石预计 Anthropic 上市后或无法获得投资级评级——630 亿美元芯片融资压顶，AI 巨兽的甜蜜烦恼。', meta: '前沿科技', stat: 'IPO风险' },
  { name: '游戏文娱 · DeepTutor 港大出品私人导师', desc: 'HKUDS/DeepTutor 登顶趋势——读你的书、笔记和 B 站视频，按时间戳答疑，生成测验和掌握度训练，学习党的福音。', meta: 'AI学习', stat: 'Trending' },
  { name: '穿搭美妆 · 15~25℃ 晴好，长袖+薄外套', desc: '今天晴到多云 15~25℃，昼夜温差大——长袖 T 恤加薄外套，上午有霾下午转好，适合周末出门逛街喝咖啡。', meta: '穿搭指南', stat: '15~25℃' },
  { name: '理财职场 · DeepSeek B 轮 1055 亿，国资入场', desc: '证券之星 10/30：天眼查显示 DeepSeek B 轮 1055 亿，国家 AI 产业基金、中国移动、中国电信等国家队入场——国产 AI 进入资本收割期。', meta: '财经职场', stat: '1055亿' },
  { name: '健康 · 上午有霾，敏感人群减少外出', desc: '今天上午上海有霾，AQI 短时 107 轻度污染，能见度 5km——敏感人群上午减少外出，午后空气转良(57)，适合户外活动。', meta: '健康提醒', stat: '上午有霾' }
]

const localCards = [
  { name: '上海天气 · 10月31日', desc: '晴到多云，15~25℃。上午局部有雾+霾（能见度 5km），下午晴好转良。东南风 3~4 级，沿江沿海 4~5 级，夜里转偏南风 4~5 级阵风 6 级。相对湿度 87%→50%。AQI 上午 107 轻度→下午良(57)。日出06:09，日落17:07。【上午有霾】敏感人群减少外出；明天（11/1）小雨 15~25℃。', meta: '今日天气', stat: '晴15~25℃' },
  { name: '本地要闻', desc: '①上午有霾敏感人群减少外出，午后空气转好适合活动；②第九届进博会 11/5-10 国家会展中心举行，倒计时 5 天。', meta: '上海资讯', stat: '霾天注意' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周六早安，今天晴到多云，上午有霾下午就放晴啦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月31日 星期六</span>
          <span>第 057 期</span>
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
          <h3>黑石预警：Anthropic 上市后或失投资级评级——630 亿美元芯片融资压顶，AI 巨兽的甜蜜烦恼</h3>
          <p>微博 10/31：黑石集团预计 Anthropic 上市后可能无法获得投资级评级，融资成本面临上升压力——Anthropic 正推进 630 亿美元芯片融资，其中 180 亿为次级债务。</p>
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
        <span>我的工作台 · 每日早报 · VOL.057</span>
      </footer>
    </div>
  )
}
