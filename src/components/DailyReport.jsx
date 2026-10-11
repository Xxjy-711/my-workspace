import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'storytold / vectorcraft', lang: 'Rust', desc: 'GitHub 热榜 #2：纯 Rust 复刻的 Adobe Illustrator 开源替代品——免费矢量设计工具新选择，热度持续攀升。', meta: '矢量设计', stat: '热榜#2' },
  { name: 'boykopovar / AnyPS5', lang: 'C++', desc: 'PS5 可执行文件自动移植到 Linux/Windows 的工具，今日 +5.9k 星，主机游戏跨界新玩法。', meta: '游戏工具', stat: '今日+5.9K' },
  { name: 'storytold / artcraft', lang: 'Rust', desc: 'ArtCraft：面向艺术家/设计师/电影制作人的"意图驱动"创作引擎，今日 +3.8k 星。', meta: '创作引擎', stat: '今日+3.8K' },
  { name: 'ollama / ollama', lang: 'Go', desc: '本地跑大模型全家桶：Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 一键运行，182.6K 星。', meta: '本地模型', stat: '182.6K★' },
  { name: 'browser-use / browser-use', lang: 'Python', desc: '会使用浏览器的 Agent：让 AI 像人一样操作网页，117.5K 星。', meta: '浏览器Agent', stat: '117.5K★' },
  { name: 'affaan-m / ECC', lang: 'JavaScript', desc: 'Agent harness 性能优化系统：技能、直觉、记忆一体化，274.5K 星，热榜常客。', meta: 'Agent 系统', stat: '274.5K★' }
]

const aiCompanion = [
  { name: '英伟达洽谈收购 Reflection AI，加码开放权重模型', desc: 'IT之家/财联社 10/11：英伟达正就收购或追加投资 Reflection AI 展开深入谈判；该公司专注开放权重模型，10/5 发布首款开源模型 Beam；"人才收购"模式（聘用员工+技术许可）可绕开完整收购。', meta: '资本重磅', stat: '收购谈判' },
  { name: '赛博恋人售价百万，技术却还在蹒跚学步', desc: '人人都是产品经理 10/10：《人工智能拟人化互动服务管理暂行办法》7/15 起正式施行——全球首批 AI 情感互动专项监管：禁止诱导情感依赖、必须全程显著标注 AI 身份、不得生成淫秽色情内容、连续使用超 2 小时强制提醒。', meta: 'AI 伴侣', stat: '人机恋监管' },
  { name: 'Meta Muse iPad 版上线一个月下载超 660 万', desc: 'AIbase 10/10：Muse 10/7 上线 iPad 专属 app，距 9/8 登陆 iOS/Android 仅一个月，扩张速度远超当年的 Instagram。', meta: 'AI 伴侣', stat: '660万下载' },
  { name: 'OpenAI 推出文本水印技术 textGrain', desc: '智源 10/7：为 ChatGPT 生成内容逐词嵌入隐蔽密钥——肉眼不可辨、语义无损，专用检测器可精准识别来源；即刻生效，覆盖全球 API 调用，作业/简历/周报等 AI 文本可溯源。', meta: '内容溯源', stat: 'AI 水印' },
  { name: 'Anthropic 与字节扎堆 AI 制药', desc: '星知：AI 制药赛道升温，巨头入场加速早期研发，但临床环节难同步缩短；数据基础设施与失败实验数据成关键，市场等待英矽智能 III 期临床数据验证。', meta: '行业观察', stat: 'AI 制药' },
  { name: '世界首款 AI Agent 智能手机 NaviX Ultra', desc: 'Houdao 10/11：内置豆包大模型消费版，首创独立 AI 按钮+指纹识别无缝衔接，搭载骁龙 8 Gen 5 Elite 与高速 LPDDR5X 内存——"AI 原生化"手机来了。', meta: 'AI 硬件', stat: 'AI Agent 手机' }
]

const lifeCards = [
  { name: '数码科技 · 开放模型收购潮', desc: '英伟达洽谈收购开放权重模型公司 Reflection AI（Beam 已开源）；OpenAI 推出文本水印 textGrain 覆盖全球 API；Meta Muse iPad 版一个月 660 万下载；世界首款 AI Agent 手机 NaviX Ultra 亮相。', meta: '数码资讯', stat: '英伟达加码开源' },
  { name: '游戏文娱 · 乒乓收官日', desc: 'WTT 中国大满贯今日收官：女单决赛王曼昱 vs 佐藤瞳（日本削球手）、男单半决赛周启豪 vs 松岛辉空、林昀儒 vs 雨果，男单决赛压轴——国乒冲双冠；上海大师赛周末继续；Vectorcraft 开源复刻 Illustrator、AnyPS5 自动移植 PS5 游戏。', meta: '文娱资讯', stat: '国乒冲双冠' },
  { name: '穿搭美妆 · 秋日出行', desc: '今日多云转晴 18~25℃：①阳光在线、秋高气爽，适合出行拍照；②昼夜温差约 7℃，早晚加件薄外套；③湿度适中（59%~84%）、紫外线弱；周日出行舒适度高。', meta: '穿搭指南', stat: '18~25℃ 多云转晴' },
  { name: '理财职场 · 明日复工', desc: '今天周日放松、明天周一正常上班；AI 收购潮持续（英伟达 Reflection AI、苹果 Huxe）；OpenAI 年化收入约 500 亿美元引发行业估值讨论。', meta: '财经职场', stat: '明日复工' },
  { name: '健康 · 户外正当时', desc: '秋高气爽、阳光好，适合户外运动晒太阳补维生素 D；早晚温差大注意保暖防感冒；秋燥继续，多喝水润燥。', meta: '健康提醒', stat: '户外运动' }
]

const localCards = [
  { name: '上海天气 · 10月11日', desc: '多云转晴。18~25℃，北风 1-2级。湿度84%~59%。AQI 优（实时 27）。日出05:53，日落17:28。秋高气爽、阳光在线，适合外出；明天（周一）多云转阴 18~25℃；本周气温稳定，周三前后局部地区有短时小雨。', meta: '今日天气', stat: '18~25℃ 多云转晴' },
  { name: '本地要闻', desc: '①WTT 中国大满贯今日收官：女单决赛王曼昱 vs 佐藤瞳（日本削球手）、男单半决赛周启豪 vs 松岛辉空、林昀儒 vs 雨果·卡尔德拉诺，男单决赛压轴登场——国乒冲击双冠。②上海劳力士大师赛周末继续（中心球场 10/11-12 场次热售，¥230 起）；旗忠主赛场与苏河湾"第二现场"双场联动。', meta: '上海资讯', stat: '国乒收官日' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周日好天气，出门晒晒太阳吧 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月11日 星期日</span>
          <span>第 038 期</span>
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
          <h3>英伟达洽谈收购 Reflection AI，加码开放权重模型</h3>
          <p>赛博恋人监管办法引热议；Muse iPad 版一个月 660 万下载、OpenAI 推 textGrain 水印。</p>
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
        <span>我的工作台 · 每日早报 · VOL.038</span>
      </footer>
    </div>
  )
}
