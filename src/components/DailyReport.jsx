import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'bilawalsidhu / gods-eye-view', lang: 'TS', desc: '浏览器里的间谍卫星模拟器：数据真实。开源实时空间智能，今日 GitHub Explore 热榜新晋。', meta: '今日热榜', stat: '卫星模拟' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor，5天+7.3k★。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'openai / skills', lang: 'PY', desc: 'OpenAI 官方发布 Codex 的 Skills 目录：为 AI 编码代理提供官方技能集，长期热榜项目。', meta: 'OpenAI 官方', stat: '长期热榜' },
  { name: 'deepseek-ai / deepseek-harness', lang: 'PY', desc: '深度求索新开源项目：AI agent 测试/评估框架，今日 Trendshift 新晋项目。', meta: '本周新晋', stat: '深度求索' },
  { name: 'rohitg00 / ai-engineering-from-scratch', lang: 'MD', desc: '"Learn it. Build it. Ship it for others"：从零构建 AI 工程的系统学习路线，Trendshift 新晋。', meta: 'AI 工程', stat: '学习路线' },
  { name: 'EvoMap / AutoResearch', lang: 'PY', desc: 'AI/ML 自动化研究代理：自动完成文献调研到实验复现，今日 Trendshift 新晋项目。', meta: 'AI 研究', stat: '自动研究' }
]

const aiCompanion = [
  { name: '外滩大会 H 馆：陪伴经济爆发', desc: '2026 外滩大会 H 馆被打造成"创新物种展"：近 120 家科创企业把 AI 变成情绪伙伴——办公桌上的"i人"绿植会主动要求浇水，棉花娃娃能陪你聊下午茶。陪伴经济成为展会最亮眼的赛道之一。', meta: '行业大会', stat: '120家企业' },
  { name: 'Meta 发力 AI 角色系统', desc: '据英国金融时报，Meta 产品副总裁 Conor Hayes 透露公司正在积极开发 AI 生成角色系统，将在 Facebook 等社交平台扮演重要角色。自去年7月推出 AI 角色创建工具以来，Meta 持续加码虚拟陪伴。', meta: '海外动态', stat: 'Meta 入局' },
  { name: '仿生机器人 10 天卖 1.1 万台', desc: '标价 11.98 万起、最高近百万的仿生机器人预售十天卖出 1.1 万台，超过去年全年同类销量总和。核心功能只有一个：陪你说话、记住情绪、模拟"永不背叛"的亲密关系。', meta: '硬件伴侣', stat: '1.1万台' },
  { name: '抖音"星朋友"爆火', desc: 'AI 陪伴软件"星朋友"在抖音走红：可自定义外貌、性格、背景故事、复刻声线，支持语音通话、角色主动来电、模拟朋友圈互动，用户称"活人感超强，聊到停不下来"。', meta: '用户故事', stat: '活人感' },
  { name: '泰国 68 岁男子因 AI 恋人破产', desc: '警示案例持续发酵：泰国 68 岁男子被 AI 虚拟恋人诱导失去全部积蓄流落街头。AI Insider 指出关系机器人+付费功能正把人卷入情感陷阱，监管与防沉迷迫在眉睫。', meta: '风险警示', stat: '情感陷阱' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：Agent 技能生态持续爆发（Skills 目录、harness 框架密集上新）；Python 仍是 AI 工程主流；测试自动化与汽车电子功能安全需求稳步增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 服贸会国产游戏出圈', desc: '2026 服贸会上，完美世界《异环》把"海特洛市"搬进首钢园：戴上 AR 眼镜，霓虹楼宇与悬浮轨道跃出屏幕。OtoDock 开源企业 AI 操作系统上线 GitHub，可编排 Claude、Codex 多智能体。', meta: '数码资讯', stat: '国产出海' },
  { name: '游戏 · 小岛秀夫转投 Xbox', desc: '小岛秀夫证实索尼已取消次世代潜行动作大作《Physint》合作，工作室转与 Xbox 联手。索尼《Fairgames$》更名"Project Espresso"开启测试招募；《WARDOGS》PC 首发24小时33.7万玩家；《银河战士》新作2027年初登陆 Switch 2。', meta: '游戏资讯', stat: '业界震荡' },
  { name: '穿搭美妆 · 周末回暖', desc: '今日阴到多云局部阵雨，23~29℃；周末气温再冲3字头。穿搭：薄款外套+短袖的组合最实用，雨天记得带伞。美妆趋势：初秋"微醺感"腮红与焦糖色眼影流行。', meta: '穿搭指南', stat: '周末回暖' },
  { name: '理财职场 · 浦江创新论坛开幕', desc: '第十九届浦江创新论坛今日起在上海举行（9月11-14日），主题"共享创新，共塑未来"，聚焦基础研究、未来产业与全球科技共同体。上海同步发布 2026 年营商环境十大攻坚任务。', meta: '财经职场', stat: '创新论坛' },
  { name: '健康 · 换季防潮提醒', desc: '今日湿度高达 90%-50%，局部短时阵雨。注意：①雨天路滑出行慢行；②湿度大注意除湿防霉，衣物及时晾晒；③早晚温差明显（23-29℃）合理增减衣物；④饮食宜清淡润燥。', meta: '健康提醒', stat: '防潮除湿' }
]

const localCards = [
  { name: '上海天气 · 9月11日', desc: '阴到多云，局部地区有短时阵雨。23~29℃，北到东北风4~5级，沿江沿海地区阵风6级。湿度90%~50%，空气质量优（AQI 23）。日出05:36，日落18:05。', meta: '今日天气', stat: '23~29℃' },
  { name: '本地要闻', desc: '①第十九届浦江创新论坛今日开幕（9月11-14日，主题"共享创新，共塑未来"）；②上海旅游节花车大巡游明晚外滩举行，今晚23时起交通管制；③上海发布2026年营商环境十大攻坚任务；④"国家反诈AI"上线（"803反诈"上海方案走向全国）；⑤第十五届上海世界华人龙舟邀请赛今日开赛。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月11日 星期五</span>
          <span>第 008 期</span>
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
          <h3>GitHub 热榜：间谍卫星模拟器新晋上榜，AI Agent 工具链持续爆发</h3>
          <p>今日 GitHub Explore 热榜上，gods-eye-view（浏览器实时卫星模拟器）领衔新面孔，openai/skills 与 ECC 持续霸榜；DeepSeek harness、AutoResearch 等 Agent 测试/研究框架密集上新，AI 开发正从单点工具走向完整工程化体系。</p>
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
        <span>我的工作台 · 每日早报 · VOL.008</span>
      </footer>
    </div>
  )
}
