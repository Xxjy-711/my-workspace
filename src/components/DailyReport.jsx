import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为一路拆到原生二进制，今日新增 5,657 星至 380.9K，持续霸榜 GitHub 日榜第一。', meta: '逆向工程', stat: '380.9K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '无需登录、注册或填 API Key 即可白嫖 DeepSeek V4.1 Flash、Kimi K3 等前沿模型——今日新增 1,927 星，从 35.5K 暴涨至 42.1K。', meta: '免费AI', stat: '+1,927★' },
  { name: 'Pollinations.ai', lang: '多语言', desc: '开源生成式 AI 平台：免费提供文本到图像、音频、视频和文本生成 API，支持 Stable Diffusion、Llama 等多种模型，社区活跃持续扩展。', meta: '生成式AI', stat: '免费API' },
  { name: 'DeepOpen / deepopen', lang: 'Python', desc: '开源新模态大模型公司 DeepOpen 的决策模型：CLINC150 性能第一、Banking77 第二，超越 Meta Llama 2（FT），周下载量过万。', meta: '决策模型', stat: '超越Llama2' },
  { name: 'BerriAI / litellm', lang: 'Python', desc: 'AI 网关项目 LiteLLM，61.9K 星——自称"最快最轻的 AI Gateway"，声称端到端延迟仅 8ms，统一调用 100+ 大模型 API。', meta: 'AI网关', stat: '61.9K★' },
  { name: 'android / skills', lang: 'Kotlin', desc: 'Android 官方 AI Skills 库，本周新增 1,471 星至 9.6K——为 Android 端 AI 助手预置系统级技能。', meta: 'Android', stat: '+1,471★本周' }
]

const aiCompanion = [
  { name: '经济日报：DeepSeek 千亿元融资展现中国 AI 进取心', desc: '新浪财经 10/26：DeepSeek 融资从最初 500 亿→800 亿→最终约 1000 亿元；加上此前约 510 亿元首轮，年内两轮累计约 1500 亿元，投前估值约 5000 亿元，为科创板 IPO 铺路。', meta: '融资速递', stat: '1500亿元' },
  { name: 'MiniMax 开源 M3.1 Flash 权重：428B 多模态、1M 上下文', desc: 'InfoQ 10/26：MiniMax 在 Hugging Face 与 ModelScope 公开 M3.1 Flash 权重——总参数 428B、每 token 激活 23B，支持文本/图像/视频输入，上下文窗口最高 100 万 tokens。', meta: '开源模型', stat: '428B 参数' },
  { name: '智元开源 AGIBOT WORLD 2026 第四期"具身推理"数据集', desc: '凤凰网 10/26：智元正式开源首个真实场景 Physical Agent 数据集"具身推理"——物理 AI 概念早盘延续强势，创维数字、天娱数科 2 连板。', meta: '具身智能', stat: 'Physical Agent' },
  { name: 'DeepSeek 为科创板 IPO 铺路：两轮融资累计 1500 亿', desc: '经济日报 10/26 头版评论：千亿融资体量本身就是信号——DeepSeek 至少两次上调融资目标，从 500 亿到 1000 亿，投前估值约 5000 亿元，科创板 IPO 在即。', meta: 'IPO进展', stat: '估值5000亿' },
  { name: '物理 AI 概念 A 股 2 连板：具身智能赛道升温', desc: '凤凰网 10/26：智元开源具身推理数据集催化，物理 AI 概念延续强势——创维数字、天娱数科 2 连板，凡拓数创涨超 10%，中望软件等跟涨。', meta: 'A股热点', stat: '2连板' },
  { name: '台风过后首个晴天，周一开工 AI 陪伴正当时', desc: '台风"蔷琵"彻底远离上海，今天阳光回归——新的一周从晴好天气开始，和 AI 聊聊周末、规划本周，AI 伴侣在工作日的陪伴价值再次凸显。', meta: 'AI伴侣', stat: '新周开始' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 千亿融资，MiniMax 开源 428B', desc: '经济日报头版：DeepSeek 两轮融资累计 1500 亿元、估值 5000 亿；MiniMax 同日开源 M3.1 Flash——428B 多模态、1M 上下文，国产 AI 持续爆发。', meta: '前沿科技', stat: '1500亿元' },
  { name: '游戏文娱 · 物理 AI 概念 A 股 2 连板', desc: '智元开源首个真实场景具身推理数据集，物理 AI 概念延续强势——创维数字、天娱数科 2 连板，具身智能赛道升温。', meta: '热点财经', stat: '2连板' },
  { name: '穿搭美妆 · 17~24℃ 多云到晴，上午有雾', desc: '今天上午有雾、能见度低，下午转晴好——薄外套+衬衫，早晚较凉注意加衣；明天降温到 13~19℃，今天抓紧洗晒。', meta: '穿搭指南', stat: '17~24℃' },
  { name: '理财职场 · DeepSeek 科创板 IPO 铺路', desc: '经济日报头版：DeepSeek 投前估值约 5000 亿元，为科创板 IPO 铺路——国产大模型资本化提速，关注 AI 产业链投资机会。', meta: '财经职场', stat: '估值5000亿' },
  { name: '健康 · 台风过后首个晴天，抓紧洗晒', desc: '台风"蔷琵"彻底远离，上海阳光回归——但上午有雾、能见度仅 5km，开车注意安全；明天降温到 13~19℃，今天适合洗晒。', meta: '健康提醒', stat: '抓紧洗晒' }
]

const localCards = [
  { name: '上海天气 · 10月26日', desc: '多云到晴，17~24℃。上午有雾（能见度约 5km），下午晴好。北到西北风 4-5 级、沿江沿海阵风 6 级。相对湿度 74%。AQI 优（46）。日出06:05，日落17:11。台风"蔷琵"已彻底远离，阳光回归——上海发布提醒：早晚较凉，白天总体舒适，抓紧洗晒。明天阴 13~19℃ 北风 3 级，降温明显。', meta: '今日天气', stat: '多云17~24℃' },
  { name: '本地要闻', desc: '①台风过后首个晴天：上海阳光回归，早晚较凉、白天舒适，北到西北风 4-5 级，沿江沿海阵风 6 级——抓紧洗晒；②第九届进博会 11/5-10 国家会展中心举行，倒计时 10 天。', meta: '上海资讯', stat: '阳光回归' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，台风终于走了，阳光回归，新的一周开始啦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月26日 星期一</span>
          <span>第 052 期</span>
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
          <h3>经济日报头版：DeepSeek 千亿元融资展现中国 AI 进取心，两轮累计 1500 亿、估值 5000 亿</h3>
          <p>DeepSeek 融资从 500 亿→800 亿→最终约 1000 亿元，年内两轮累计约 1500 亿元，投前估值约 5000 亿元，为科创板 IPO 铺路；MiniMax 同日开源 428B 多模态 M3.1 Flash。</p>
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
        <span>我的工作台 · 每日早报 · VOL.052</span>
      </footer>
    </div>
  )
}
