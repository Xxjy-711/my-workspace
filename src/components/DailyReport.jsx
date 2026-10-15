import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: 'REA"AI 拆软件"突破 110K 星：单日再涨 25.6K，从"看懂二进制"到重写整套商业软件，开源圈最猛之势。', meta: '逆向工程', stat: '110K★' },
  { name: 'storytold / filmcraft', lang: 'Rust', desc: '用 Rust 清洁重实现 Adobe Premiere Pro：开源跨平台专业视频剪辑，REA 浪潮下的"拆巨头"代表作。', meta: '视频剪辑', stat: 'Premiere平替' },
  { name: 'boykopovar / AnyPS5', lang: 'C++', desc: 'PS5 生态开源项目，单日 +4.0K 星、累计 30.4K——主机平台逆向与工具链热度不减。', meta: '主机开源', stat: '30.4K★' },
  { name: 'addyosmani / agent-skills', lang: 'JavaScript', desc: '面向 AI 编码 Agent 的生产级工程技能库：把 codex/claude-code 等调教成资深工程师。', meta: 'Agent 技能', stat: '工程级' },
  { name: 'public-apis / public-apis', lang: '多语言', desc: '免费 API 大全常青榜：数千个无需认证即可调用的公共接口合集。', meta: 'API 合集', stat: '免费API' },
  { name: 'EbookFoundation / free-programming-books', lang: '多语言', desc: '免费编程书大全：#5 常青项目，覆盖几乎所有语言与主题的开源书单。', meta: '学习资源', stat: '免费书单' }
]

const aiCompanion = [
  { name: 'Character.AI 申请破产：迪士尼 2000 万美元接手', desc: '新浪财经 10/15：AI 伴侣鼻祖 Character.AI 向特拉华州法院提交破产法第 11 章重组申请——预计负债 5000 万~1 亿美元，谷歌为最大债权人；迪士尼旗下 Disney Worldwide Services 任"首席竞标方"，拟 2000 万美元收购资产。两年前估值曾传 50 亿美元，创始人是 Transformer 论文作者 Noam Shazeer。', meta: '重磅震动', stat: '迪士尼2000万美元' },
  { name: 'Anthropic 三季度收入 168 亿美元，环比增近五成', desc: '新浪财经 10/15（FT）：Claude 开发商 Anthropic 向投资者透露 Q3 营收 168 亿美元，环比增长近五成，连续第二个季度实现调整后盈利；5 月完成 650 亿美元 H 轮融资、投后估值达 9650 亿美元。', meta: '业绩爆发', stat: 'Q3收入168亿美元' },
  { name: '黄仁勋：客户开发"不安全 AI 软件"就断供芯片', desc: '财联社 10/15：英伟达 CEO 黄仁勋最新表态——若客户开发不安全 AI 软件，会停止供应芯片："这只是个假设，但答案是肯定的"；GTC 柏林大会主题演讲定于 10/21（下周三）17:00 开讲。', meta: '行业强音', stat: 'GTC柏林10/21' },
  { name: 'Meta Muse：发布三周下载数百万，用户与 AI "坠入爱河"', desc: 'Telset 10/15：Meta Muse AI 发布三周下载数百万次，用户与 Agent 建立浪漫关系、甚至自称"结婚"；专家警告黑客与勒索风险，Meta 称合法成人行为不屏蔽——人机恋热度与争议并存。', meta: 'AI 伴侣', stat: '三周数百万下载' },
  { name: 'REA 突破 11 万星，"拆软件"生态全面开花', desc: 'open-repo 10/14：REA 累计 110K 星、单日 +25.6K；衍生项目涌现——filmcraft 用 Rust 重写 Premiere Pro、artcraft 等开源平替接踵而来，闭源软件围墙加速坍塌。', meta: '开源浪潮', stat: '衍生项目爆发' },
  { name: 'Modal 完成 7.5 亿美元 D 轮融资', desc: '创业家 10/15：AI 云基础设施公司 Modal 完成 7.5 亿美元 D 轮，投后估值达 157.5 亿美元；同期曝特斯拉 Optimus 人形机器人即将量产。', meta: '资本动态', stat: '估值157.5亿美元' }
]

const lifeCards = [
  { name: '数码科技 · 冰火两重天', desc: 'AI 赛道两极分化：Character.AI 破产被迪士尼 2000 万美元接盘，Anthropic 却单季收入 168 亿美元、连续两季盈利；REA 11 万星持续霸榜，Modal 7.5 亿美元 D 轮。', meta: '数码资讯', stat: 'AI冰火两重天' },
  { name: '游戏文娱 · 大师赛 8 强出炉', desc: '上海劳力士大师赛男单 8 强对阵：兹维列夫 VS 德米纳尔、梅德韦杰夫 VS 保罗、霍达尔 VS 鲁德等，1/4 决赛一触即发；开源圈 filmcraft 重写 Premiere Pro 引热议。', meta: '文娱资讯', stat: '8强出炉' },
  { name: '穿搭美妆 · 夜里雨水上线', desc: '今日多云到阴 18~25℃：①东南风 3-4 级、沿江沿海 4-5 级；②夜间短时阵雨上线，通勤备伞；③湿度 90%~50%，秋燥较昨日缓解；早晚 18℃ 加薄外套。', meta: '穿搭指南', stat: '18~25℃ 夜雨' },
  { name: '理财职场 · AI 资本大分化', desc: '周四工作日；Anthropic 估值逼近万亿美金（9650 亿美元）连续盈利，Character.AI 却以 2000 万美元贱卖——AI 创业马太效应尽显；特斯拉 Optimus 传即将量产。', meta: '财经职场', stat: '马太效应' },
  { name: '健康 · 先冲 30℃ 再降温', desc: '今夜起雨水增多、周末湿暖；周日气温短暂冲高至 30℃，下周冷空气来袭（10/21 最低仅 15℃），大温差谨防感冒；湿度回升秋燥缓解，可适当减少补水焦虑。', meta: '健康提醒', stat: '周日30℃后降温' }
]

const localCards = [
  { name: '上海天气 · 10月15日', desc: '多云到阴。18~25℃，东南风3-4级、沿江沿海4-5级。湿度90%~50%。AQI 优（实时 23）。日出05:56，日落17:23。今夜暖湿气流增强、短时阵雨上线；周五和双休日云系较多伴短时阵雨；周日气温短暂冲高至 30℃，下周冷空气来袭（10/21 最低 15℃）。厄尔尼诺持续增强、本月达峰值。', meta: '今日天气', stat: '18~25℃ 夜雨' },
  { name: '本地要闻', desc: '①上海劳力士大师赛男单 8 强对阵出炉：兹维列夫 VS 德米纳尔、梅德韦杰夫 VS 保罗、霍达尔 VS 鲁德、热亚 VS 福基纳，1/4 决赛即将开打。②第九届进博会 11/5-10 国家会展中心（上海）举办，11/8-10 向社会观众开放、报名火热进行中；国新办明天（10/16）上午 10 时召开发布会介绍筹备情况。③浦东机场口岸外籍人员入境连续 4 天创年度新高，免签入境占比超六成。', meta: '上海资讯', stat: '大师赛8强出炉' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周四大风渐缓、夜里记得带伞 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月15日 星期四</span>
          <span>第 042 期</span>
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
          <h3>Character.AI 申请破产，迪士尼 2000 万美元接手</h3>
          <p>AI 伴侣鼻祖陨落，两年前估值曾传 50 亿美元；Anthropic 单季 168 亿美元收入、黄仁勋"断供"表态引热议。</p>
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
        <span>我的工作台 · 每日早报 · VOL.042</span>
      </footer>
    </div>
  )
}
