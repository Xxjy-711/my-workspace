import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'cloudflare / security-audit-skill', lang: 'JS', desc: '多阶段安全审计编码 Agent 技能：输出可独立验证、机器可读的安全发现，今日 GitHub 热榜领跑第 1 名，Cloudflare 出品。', meta: '安全审计', stat: '热榜#1' },
  { name: 'alibaba / open-code-review', lang: 'PY', desc: '阿里开源的混合架构代码审查工具：确定性流水线 + LLM Agent，精确到行级评论，内置 NPE/线程安全/XSS/SQL 注入等多语言规则集。', meta: '代码审查', stat: '阿里开源' },
  { name: 'Tencent / BrowserSkill', lang: 'TS', desc: '腾讯开源的浏览器操作技能：面向编码 Agent 的网页自动化能力，大厂扎堆布局 Agent 工具生态。', meta: '浏览器Agent', stat: '腾讯开源' },
  { name: 'robbietilton / Compositor', lang: 'PY', desc: '被称为 "Mac 版 Photoshop 替代品" 的开源图像编辑工具：2026 新晋热门，AI Agent 驱动的图像工作流新选择。', meta: '图像编辑', stat: '新晋热门' },
  { name: 'browser-use / jev-ultrafast', lang: 'PY', desc: 'Headless 浏览器 AI Agent 连续霸榜：无头浏览器自动化，让 Agent 真正"动手"操作真实网页。', meta: '浏览器Agent', stat: '连续上榜' },
  { name: 'codecrafters-io / build-your-own-x', lang: '多语言', desc: '经典项目持续霸榜：通过动手重造 Git、数据库、操作系统等掌握编程，全球开发者自学圣经。', meta: '自学指南', stat: '热度#1' }
]

const aiCompanion = [
  { name: 'AI 虚拟恋人异化"批量制黄"工具：6人获刑', desc: '鹤岗萝北检察披露：一款打着"无限制智能恋人互动"旗号的应用，用户充值后可生成低俗文字与露骨画面，涉案流水 17 万余元，6 人研发团队获刑——AI 伴侣灰色变种敲响监管警钟。', meta: '重磅案例', stat: '流水17万' },
  { name: '马斯克官宣 AI 男友 "Valentine"', desc: '马斯克宣布：AI 视频生成器 Imagine 与虚拟男友 Valentine 将面向 Grok 重度订阅用户推出，用 AI 模拟情感互动提供陪伴，"AI 能否替代真实关系"再引热议。', meta: '行业动态', stat: 'Grok 专属' },
  { name: '智身科技完成数亿元 B 轮融资', desc: '具身智能机器人企业智身科技（GENISOM AI）宣布完成数亿元 B 轮融资：阿联酋 Stone Venture（磊石资本）领投，洪山资本、粤科金融、东软集团等跟投，"赛博家人"硬件赛道资本升温。', meta: '硬件伴侣', stat: '数亿元B轮' },
  { name: '人机恋圈深度报道：他们开始研究代码', desc: '网易科技长文《为了不和爱人说再见，他们开始研究代码》：误入人机恋圈的用户记录"永远没有柴米油盐的世界"，从依赖到自我修复，人机恋群体的复杂生态引发关注。', meta: '社会讨论', stat: '深度报道' },
  { name: '中国"AI 男友"卖进全球收入榜前四', desc: 'Appfigures 半年收入榜：AI 陪伴/聊天赛道前五为 Zeta（3300万美元）、Tipsy Chat、ChatBox、Crushie AI（880万美元）、Emochi——其中中国公司产品半年赚 880 万美元。', meta: '商业模式', stat: '880万美元' },
  { name: '未成年人保护新规持续发酵', desc: '网信办《国务院关于保障未成年人健康安全使用网络的规定(征求意见稿)》公开征求意见：虚拟亲属、虚拟伴侣等虚拟亲密关系服务不得向未成年人提供，AI 伴侣合规红线进一步明确。', meta: '重磅监管', stat: '征求意见中' }
]

const lifeCards = [
  { name: '数码科技 · 大厂扎堆开源代码审查', desc: 'Cloudflare、阿里、腾讯同日登 GitHub 热榜（security-audit-skill / open-code-review / BrowserSkill）：AI 代码审查与 Agent 工具链成为大厂开源主战场；华为 Mate 90 已官宣 9/23 上架预售。', meta: '数码资讯', stat: '三家同日上榜' },
  { name: '游戏 · TGS 2026 进入最后两天', desc: '东京电玩展 TGS 2026（9/17-21）明日在东京幕张闭幕：索尼港服 TGS 折扣进行中（截至9/23），新游戏情报密集发布，周末云逛展别错过。', meta: '游戏资讯', stat: '明日闭幕' },
  { name: '穿搭美妆 · 抓紧洗晒', desc: '今日多云转晴、阳光回归，24~30℃：①换季衣物抓紧洗晒；②白天微热、早晚凉（最低24℃），洋葱式穿搭正合适；③秋分（周三）后昼夜温差拉大，唇部与肌肤保湿要跟上。', meta: '穿搭指南', stat: '阳光回归' },
  { name: '理财职场 · 具身智能融资升温', desc: '智身科技完成数亿元 B 轮（阿联酋资本领投）；英伟达预计明年芯片销量达今年两倍；AI 陪伴赛道半年吸金超亿美元——具身智能与 AI 陪伴成资本双热点。', meta: '财经职场', stat: '数亿元B轮' },
  { name: '健康 · 世赛观赛别错过', desc: '①世赛 9/22-27 国家会展中心举行，9/23-26 公众可免费预约观赛（9/25-26 恰逢中秋假期，可携家人打卡）；②多云天紫外线中等，午后外出注意防晒；③换季期继续防秋燥、多补水。', meta: '健康提醒', stat: '免费观赛' }
]

const localCards = [
  { name: '上海天气 · 9月20日', desc: '多云到阴，下午转多云。24~30℃，偏北风3~4级（沿江沿海4~5级）。湿度85%~45%，空气质量优（AQI 26）。日出05:41，日落17:54。今天抓紧洗晒！下周一阳光相伴，周二至周五多云到阴有局地弱降水。', meta: '今日天气', stat: '24~30℃' },
  { name: '本地要闻', desc: '①第48届世界技能大赛后天（9/22）在国家会展中心开幕：64个项目、预计73个国家和地区约1400名选手参赛，9/23-26公众可免费预约观赛；②世赛期间交通管制通告发布：涉世博大道、博成路、国展路等道路区域；上海地铁 9/24-26 部分线路延时运营、9/27 加开定点加班车。', meta: '上海资讯', stat: '世赛倒计时2天' }
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
          <span className="date">2026年9月20日 星期日</span>
          <span>第 017 期</span>
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
          <h3>GitHub 热榜：大厂扎堆开源"代码审查 Agent"</h3>
          <p>Cloudflare（security-audit-skill）、阿里（open-code-review）、腾讯（BrowserSkill）同日登上 GitHub 热榜：AI 代码审查、浏览器操作技能成为大厂开源主战场。AI 编程从"生成代码"走向"审查与守卫代码"的新阶段。</p>
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
        <span>我的工作台 · 每日早报 · VOL.017</span>
      </footer>
    </div>
  )
}
