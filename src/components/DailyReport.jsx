import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'Python', desc: 'REA 引爆"AI 拆软件"浪潮：通过 MCP 协议把逆向能力接到 AI Agent——直接读二进制与汇编、自主理清控制流，10/10 一天涨 25784 星。', meta: '逆向工程', stat: '单日+25.8K' },
  { name: 'KKKKhazix / AIHOT', lang: 'TypeScript', desc: '自己找热点、自己写日报的网站框架：把信源和精选标准换成你的，它自动出日报，6.3K 星。', meta: 'AI 日报', stat: '6.3K★' },
  { name: 'diegosouzapw / OmniRoute', lang: 'TypeScript', desc: '免费 MIT AI 网关：一个端点接入 359 家供应商（150+ 免费），"永不停机"的 AI 路由。', meta: 'AI 网关', stat: '359家供应商' },
  { name: 'deepseek-ai / deepseek-harness', lang: '多语言', desc: 'DeepSeek Harness：Everything is a Plugin——AI Agent 插件化新范式。', meta: 'Agent 框架', stat: '插件化' },
  { name: 'tw93 / Pake', lang: 'Rust', desc: '用 Rust 把任意网页变成轻量级桌面应用：一行命令搞定跨平台打包，28.3K 星。', meta: '桌面应用', stat: '28.3K★' },
  { name: 'mediar-ai / screenpipe', lang: '多语言', desc: '24/7 本地 AI 屏幕与麦克风录制：构建拥有完整上下文感知能力的 AI 应用。', meta: '本地 AI', stat: '24/7 录制' }
]

const aiCompanion = [
  { name: '苹果正式进军智能家居：发布 HomeView 等 3 款新品', desc: '36氪 10/13：苹果"欢迎回家"发布会——首款智能家庭中枢 HomeView（7 英寸屏+Apple Intelligence 新版 Siri+人脸识别，可识别 6 位家庭成员，299 美元起、11/13 开售）、第二代 HomePod mini、全新 Apple TV 4K；总市值再创历史新高。', meta: '重磅发布', stat: 'HomeView 299美元' },
  { name: 'REA"AI 拆软件"引爆开源圈', desc: '36氪 10/12：闭源软件靠"看不懂"守了二十年的墙开始漏风——开发者用 REA 重写 Photoshop 等 7 款 Adobe 工具为几十 MB 开源平替，Switch《暗黑破坏神2》原生移植 iOS 跑 60 帧，《守望先锋1》私服重构服务端核心。', meta: '开源浪潮', stat: '一天+25.8K星' },
  { name: 'DeepSeek 将完成 1000 亿元融资', desc: '36氪 10/14：DeepSeek 本轮融资规模达 1000 亿元人民币量级，国产大模型资本热度再攀高峰。', meta: '融资重磅', stat: '1000亿元' },
  { name: 'Cerebras CEO：很快家家户户都会有人工智能设备', desc: 'IT之家 10/14：Cerebras Systems CEO 费尔德曼在 TechCrunch Disrupt 2026 预测，家家户户配备 AI 设备的时代即将到来。', meta: '行业预言', stat: '家用AI时代' },
  { name: '麦当劳在美规模化部署 AI 动态定价', desc: '星知：基于位置的 AI 动态定价在美规模化落地，同城巨无霸最高价差达 21%，算法调价加速渗透传统零售，引发效率与公平之争。', meta: 'AI 落地', stat: '同城价差21%' },
  { name: '"友伴"上线：从 AI 工具到 AI 朋友', desc: '中国档案资讯网 10/14：开云体验 app 品牌升级为"友伴"，从工具型 AI 助手转向 AI 朋友——引入情感陪伴、主动健康管理，AI 从"能用"走向"懂你"。', meta: 'AI 伴侣', stat: '情感陪伴' }
]

const lifeCards = [
  { name: '数码科技 · 苹果进军智能家居', desc: '苹果发布 HomeView 智能家庭中枢+HomePod mini 2+Apple TV 4K，299 美元起；DeepSeek 将完成 1000 亿元融资；REA 把 Adobe 工具重写成开源平替；麦当劳 AI 动态定价引热议。', meta: '数码资讯', stat: 'HomeView 发布' },
  { name: '游戏文娱 · AI 逆向玩出新花样', desc: '大师赛 Day 10 激战：今日焦点西西帕斯、范德赞舒普 vs 纳达尔等；REA 玩家把 Switch《暗黑破坏神2》原生移植 iOS 跑 60 帧、《守望先锋1》私服重构服务端；AI 拆软件正改写游戏生态。', meta: '文娱资讯', stat: '暗黑2移植iOS' },
  { name: '穿搭美妆 · 大风天防风', desc: '今日多云转阴 18~25℃：①东北风 4-5 级、沿江沿海阵风 6 级，通勤注意防风；②穿衣指数"短袖"、早晚 18℃ 加件薄外套；③湿度 40%~90%、秋燥明显，补水保湿安排上。', meta: '穿搭指南', stat: '18~25℃ 大风' },
  { name: '理财职场 · 资本大动作', desc: '周三工作日；苹果总市值再创历史新高、正式切智能家居；DeepSeek 1000 亿元融资传闻发酵；AI 资本开支军备竞赛持续（博通警示泡沫）。', meta: '财经职场', stat: 'DeepSeek千亿融资' },
  { name: '健康 · 秋燥防火', desc: '今日湿度低至 40%，秋燥多补水；火险等级气象指数 4 级易燃，注意用火用电安全；周末逼近 30℃、下周冷空气来袭，温差大注意增减衣物。', meta: '健康提醒', stat: '火险4级易燃' }
]

const localCards = [
  { name: '上海天气 · 10月14日', desc: '多云转阴。18~25℃，东北风4-5级、沿江沿海阵风6级，夜里转东到东南风3-4级。湿度90%~40%。AQI 优（实时 26）。日出05:55，日落17:24。火险等级气象指数 4 级易燃。明天（周四）阴 21~25℃；15 日夜间暖湿气流增强、雨水增多；周末逼近 30℃，下周冷空气来袭。', meta: '今日天气', stat: '18~25℃ 大风天' },
  { name: '本地要闻', desc: '①第九届进博会 11/5-10 在上海举办：国新办 10/16（周五）上午 10 时召开发布会，商务部副部长鄢东、上海市副市长卢山介绍筹备情况。②浦东机场口岸外籍人员入境量连续四天刷新年度纪录、单日最高 2.85 万人次：工博会、国际艺术节·国际演艺大会、上海大师赛、UCI 场地自行车世锦赛密集举办，免签入境占比超六成。③上海劳力士大师赛 Day 10 激战：旗忠主赛场今日焦点西西帕斯等名将出场。', meta: '上海资讯', stat: '进博会倒计时' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周三大风天注意防风，秋燥多补水 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月14日 星期三</span>
          <span>第 041 期</span>
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
          <h3>苹果正式进军智能家居，发布 HomeView 等 3 款新品</h3>
          <p>REA 让 AI 学会"拆软件"；DeepSeek 将完成 1000 亿元融资；Cerebras CEO 预言家用 AI 时代。</p>
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
        <span>我的工作台 · 每日早报 · VOL.041</span>
      </footer>
    </div>
  )
}
