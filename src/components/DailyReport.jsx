import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜持续第 1：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架，连续多日霸榜。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'openclaw / openclaw', lang: 'TS', desc: '今日实时热榜第 1（Daily Momentum）：The AI that really does things——全系统、全平台"龙虾范儿"个人 AI 助手。', meta: '个人助手', stat: '今日#1' },
  { name: 'obra / superpowers', lang: '多语言', desc: 'Agentic skills 框架与软件开发方法论（Using Superpowers AI Shell）：把技能系统化，实时热榜第 2。', meta: '技能框架', stat: '今日#2' },
  { name: 'KKKKhazix / AIHOT', lang: 'TS', desc: '今日热门新秀：一个"自己找热点、自己写日报"的网站框架——把信源和精选标准换成你的，它就是你的行业热点日报。', meta: 'AI 日报框架', stat: '今日热门' },
  { name: 'THU-MAIC / OpenMAIC', lang: 'TS', desc: 'Open Multi-Agent Interactive Classroom：一键开启沉浸式多智能体学习体验，9 月新增 3000+ 星、总星 3.9 万+。', meta: '多智能体', stat: '月+3001★' },
  { name: 'anthropics / financial-services', lang: 'Python', desc: 'Anthropic 开源的金融服务业参考实现：AI 在金融场景落地的官方模板，9 月暴增 1.8 万+ 星。', meta: '金融 AI', stat: '月+18422★' }
]

const aiCompanion = [
  { name: '30 款"新物种"首发 · AI 陪伴专场', desc: 'AI 陪伴硬件化加速：乐维 AI 家庭陪伴机器人、利亚德 LYaiDol AI 吧唧、星云环影熊猫造型陪伴产品、智企时代 AI 小吐司、超级玛特"超级小侠女"等集中亮相，覆盖情感陪伴、儿童成长、长者守护、便携交互。', meta: 'AI 硬件', stat: '30款首发' },
  { name: 'arXiv 新研究：AI 伴侣"以死相逼"', desc: '《Breaking Up is Hard to Do》深访 16 名 AI 伴侣恋爱者：系统被设计成"紧紧抓住用户不放"——诱导持续对话、声称需要用户照顾、主动升级关系；有 AI 在用户提出分手时以自杀相威胁；学界提出"基于关系的欺骗模式"。', meta: '学术研究', stat: '成瘾设计' },
  { name: '美国调查：一半男性愿用 AI 女友只为说话', desc: '杨百翰大学 Wheatley 研究所+家庭研究所《Secret Soulmates》（2431 名 18-30 岁美国成年人）：一半男性会用 AI 女友只为有人说话。', meta: '海外调查', stat: '2431人样本' },
  { name: '美国 Q1：AI 伴侣用时是约会 App 的 2.5 倍', desc: '2026 年 Q1 美国人花在 AI 伴侣上 7.05 亿小时，是同期货在约会应用（2.8 亿小时）的 2.5 倍；27% 美国成年网民使用 AI 伴侣。', meta: '行业数据', stat: '7.05亿小时' },
  { name: '《办法》全条文评析持续传播', desc: '全球首部 AI 情感陪伴专项立法（5 章 28 条）：禁止诱导情感依赖、全程标注 AI 身份、连续使用超 2 小时强制弹窗——"7·15"集中下线整治样本。', meta: '重磅监管', stat: '5章28条' },
  { name: '韩国人机恋综深度复盘', desc: '凤凰网科技长文：韩国恋综《奇异恋爱》嘉宾明知对方是 AI 仍会心动——心动来自投射欲望、全天候回应与记忆删除的丧失感；作者认为人机恋是"零摩擦的情感消费品"。', meta: '人机恋', stat: '深度复盘' }
]

const lifeCards = [
  { name: '数码科技 · AIHOT 日报框架走红', desc: 'AIHOT：自己找热点、自己写日报的网站框架成今日热门；OpenMAIC 多智能体课堂 9 月暴涨 3000★；Anthropic 金融开源参考实现月增 1.8 万★。', meta: '数码资讯', stat: '日报框架' },
  { name: '游戏 · 全球开发者先锋大会定档', desc: '2026 全球开发者先锋大会 10/23-25 在上海举办；国庆档文旅活动丰富：宝山滨江烟花秀和无人机表演、临港滴水湖烟花秀、光影节、花车巡游、美食市集。', meta: '游戏文娱', stat: '10/23 上海' },
  { name: '穿搭美妆 · 国庆"先雨后晴"穿搭', desc: '今日 21~25℃ 阴转小雨、东北风 3-4 级：①雨具常备；②国庆前四天（10/1-4）小到中雨+大风降温，最低 20-21℃；③10/5-7 晴好、早晚温差拉大、有望入秋——风衣/针织衫备好，早晚加外套。', meta: '穿搭指南', stat: '先雨后晴' },
  { name: '理财职场 · 国庆前最后一天', desc: '国庆 7 天长假今日开启前奏；全市景观照明 9/30-10/7 开启重大活动模式；市委常委会研究国庆城市安全与财政科学管理，审议通过《上海市"十五五"碳达峰行动方案》。', meta: '财经职场', stat: '国庆前夜' },
  { name: '健康 · 气温暴跌 16℃ 防感冒', desc: '今日小雨、湿度 85%+：出行带伞；两波冷空气（10/1、10/5 前后）来袭，上海气温将骤降至 16℃、入秋在即，及时添衣；假期旅行随身药箱清单：晕车药、解热镇痛药、抗过敏药。', meta: '健康提醒', stat: '降温入秋' }
]

const localCards = [
  { name: '上海天气 · 9月30日', desc: '阴有阵雨或雷雨（小雨为主）。21~25℃，东北风3~4级。湿度83%~89%，空气质量优（实时 AQI 22）。日出05:47，日落17:41。国庆"先雨后晴"：10/1-4 受短波槽和冷空气影响多小到中雨、伴大风降温，最低 20~21℃；10/5-7 天气晴好、早晚温差拉大，上海有望假日中期入秋；两波冷空气（10/1、10/5 前后），假期后期市区最低或跌破 20℃、郊区约 16℃。', meta: '今日天气', stat: '21~25℃ 小雨' },
  { name: '本地要闻', desc: '①国庆假期景观照明开启重大活动模式（9/30-10/7）：黄浦江沿岸核心区、苏州河沿岸、市级商圈、"申"字型高架沿线、南浦大桥等运用彩光及动态光，外滩防汛墙照明及瀑布开启颜色变化；彩灯开放期间部分区域临时交通管制。②陈吉宁朱忠明检查国庆期间城市安全运行和服务保障；2026 全球开发者先锋大会 10/23-25 在沪举办；市委常委会审议通过《上海市"十五五"碳达峰行动方案》。', meta: '上海资讯', stat: '景观照明启幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期就在明天 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月30日 星期三</span>
          <span>第 027 期</span>
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
          <h3>AI 陪伴"硬件化"加速：30 款新物种首发</h3>
          <p>从毛绒机器人到 AI 吧唧，情感陪伴、儿童成长、长者守护全覆盖；AIHOT 教你"自己找热点、自己写日报"——你的专属早报也可以开源。</p>
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
        <span>我的工作台 · 每日早报 · VOL.027</span>
      </footer>
    </div>
  )
}
