import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'Python', desc: 'REA"逆向灭霸"持续霸榜：每天涨数万星，大有年初 OpenClaw 来势——用 Agent 逆向任何东西，从应用行为到原生二进制。', meta: '逆向工程', stat: '持续霸榜' },
  { name: 'KKKKhazix / AIHOT', lang: 'TypeScript', desc: '自己找热点、自己写日报的网站框架：把信源和精选标准换成你的，它自动出日报，6.3K 星。', meta: 'AI 日报', stat: '6.3K★' },
  { name: 'diegosouzapw / OmniRoute', lang: 'TypeScript', desc: '免费 MIT AI 网关：一个端点接入 359 家供应商（150+ 免费），"永不停机"的 AI 路由。', meta: 'AI 网关', stat: '359家供应商' },
  { name: 'deepseek-ai / deepseek-harness', lang: '多语言', desc: 'DeepSeek Harness：Everything is a Plugin——AI Agent 插件化新范式。', meta: 'Agent 框架', stat: '插件化' },
  { name: 'tw93 / Pake', lang: 'Rust', desc: '用 Rust 把任意网页变成轻量级桌面应用：一行命令搞定跨平台打包，28.3K 星。', meta: '桌面应用', stat: '28.3K★' },
  { name: 'mediar-ai / screenpipe', lang: '多语言', desc: '24/7 本地 AI 屏幕与麦克风录制：构建拥有完整上下文感知能力的 AI 应用。', meta: '本地 AI', stat: '24/7 录制' }
]

const aiCompanion = [
  { name: 'Meta 发布 Muse Wonder 系列旗舰模型，对标 Anthropic/OpenAI', desc: 'IT之家 10/13：Muse Wonder 与 Muse Wonder Full 在推理、写作与代码测试中得分接近 Anthropic 顶尖模型；通过 Muse 应用访问需每月 20 或 100 美元，将逐步接入 Meta 个人 AI 智能体。', meta: '重磅发布', stat: '旗舰模型' },
  { name: '扎克伯格：已在 AI 前沿追上竞争对手', desc: 'IT之家 10/13：扎克伯格称 Meta 已"追上"Anthropic 与 OpenAI，承诺继续大规模投入，同时淡化技术失控的风险警示。', meta: '巨头言论', stat: '继续加码' },
  { name: 'OpenAI 80-90% 研究资源转向 GPT-7/GPT-8', desc: '智源 10/8：OpenAI 全力布局下一代模型——本月先发布能力更强的 GPT-6 Astra，9/22 又推高效低成本的 Sol 与 L 系列，代际迭代全面提速。', meta: '行业观察', stat: '转向GPT-7/8' },
  { name: '微软计划明年大规模部署 Maia 300 芯片', desc: '每经 10/13：微软自研 AI 芯片 Maia 300 明年规模化部署，目标推理效率提升 40%，云算力自主可控再进一步。', meta: '算力硬件', stat: '推理+40%' },
  { name: '博通 CEO：AI 投资者如同"赌场赌徒"', desc: '每经 10/13：博通 CEO 泼冷水——许多 AI 投资者像赌场赌徒，AI 发展的最大制约因素是资本，行业泡沫讨论升温。', meta: '行业观点', stat: '资本制约' },
  { name: 'Open-AutoGLM Phone Agent：让 AI 学会"使用手机"', desc: '数智朋克：首个具备"Phone Use"能力的 AI Agent——ADB 控制+视觉语言模型+智能规划，支持 50+ 中文应用，内置安全防护。', meta: 'Agent 能力', stat: '50+ 应用' }
]

const lifeCards = [
  { name: '数码科技 · AI 军备竞赛', desc: 'Meta 发布 Muse Wonder 旗舰模型（Muse 应用每月 20/100 美元）；OpenAI 80-90% 资源转向 GPT-7/8；微软 Maia 300 芯片明年部署；博通 CEO 称 AI 投资者"如赌场赌徒"。', meta: '数码资讯', stat: 'Muse Wonder 发布' },
  { name: '游戏文娱 · 大师赛再爆冷', desc: '伯格斯击败阿尔卡拉斯（职业生涯最大胜利），兹维列夫锁定 2026 年终世界第一；阿尔卡拉斯赛后吐槽用球引热议；周意惜败胡尔卡奇、中国单打全部出局；今日：兹维列夫 vs 布勃利克、张之臻/周意男双、武汉公开赛张帅出战。', meta: '文娱资讯', stat: '阿尔卡拉斯出局' },
  { name: '穿搭美妆 · 午后微热', desc: '今日多云 18~26℃（午后最高 27℃ 微热）：①上午局部有雾、雾散后阳光登场；②穿衣指数"短袖"、中午可短袖；③化妆指数"去油防晒"；早晚温差大、通勤带件薄外套。', meta: '穿搭指南', stat: '18~26℃ 午后微热' },
  { name: '理财职场 · 订阅制定价', desc: '周二开工；Meta Muse 订阅 20/100 美元/月验证 AI 订阅商业模式；AI 资本开支军备竞赛继续（Meta 加码、博通警示泡沫）；微软 Maia 300 芯片明年部署。', meta: '财经职场', stat: 'Muse 订阅制' },
  { name: '健康 · 雾天防护', desc: '早晨局部有雾（松江大雾黄色预警）出行注意交通安全；午后升温微热、适当补水；珍惜好天气——周四夜间起有降雨，可趁今明安排户外活动。', meta: '健康提醒', stat: '雾天出行' }
]

const localCards = [
  { name: '上海天气 · 10月13日', desc: '多云，上午以前局部有雾（松江区大雾黄色预警：能见度<500米，局部<200米）。18~26℃，午后最高 27℃ 微热，西北风3-4级、沿江沿海4-5级。湿度90%~50%。AQI 优~良（早晨 56 良）。日出05:55，日落17:25。穿衣"短袖"、感冒"少发"。珍惜好天气：周三云系增多，周四夜间至周五有降雨。', meta: '今日天气', stat: '18~26℃ 午前有雾' },
  { name: '本地要闻', desc: '①上海大师赛再爆冷：伯格斯 10/12 击败阿尔卡拉斯——职业生涯最大胜利，阿尔卡拉斯赛后吐槽用球引热议；兹维列夫锁定 2026 年终世界第一；周意惜败胡尔卡奇后中国单打全部出局；今日焦点：兹维列夫 vs 布勃利克、张之臻/周意男双、武汉公开赛张帅 vs 卡林斯卡娅。②上海劳力士大师赛赛程过半，旗忠主赛场与苏河湾"第二现场"双场联动。', meta: '上海资讯', stat: '大师赛再爆冷' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，雾散见阳光，午后微热，珍惜好天气 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月13日 星期二</span>
          <span>第 040 期</span>
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
          <h3>Meta 发布 Muse Wonder 旗舰模型，正面硬刚 Anthropic 与 OpenAI</h3>
          <p>OpenAI 80-90% 资源转向 GPT-7/8；微软 Maia 300 芯片明年部署；博通 CEO 泼冷水。</p>
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
        <span>我的工作台 · 每日早报 · VOL.040</span>
      </footer>
    </div>
  )
}
