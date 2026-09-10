import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'Tencent / teamai-cli', lang: 'TS', desc: '腾讯出品"Make Every Team AI Native"：让每个团队原生 AI 化的 CLI 工具，今日 GitHub Explore 热榜。', meta: '今日热榜', stat: '腾讯出品' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'obra / superpowers', lang: 'MD', desc: '给 AI 编码代理装上"方法论"：完整技能框架与软件开发方法论，从需求澄清到测试驱动，220k+ Star。', meta: 'LLM 顶流', stat: '220k★' },
  { name: 'alsk1992 / CloddsBot', lang: 'PY', desc: '开源 AI 交易代理：自主运营于 1000+ 市场（Polymarket、Kalshi、币安等），扫描套利、即时执行、自动风控。', meta: 'AI 交易', stat: '1000+市场' },
  { name: 'goose / goose', lang: 'RUST', desc: '开源可扩展 AI agent：超越代码建议，可安装、执行、编辑、测试，支持任意 LLM，54k★ 长期热榜。', meta: 'Agent 顶流', stat: '54k★' },
  { name: 'VibeVoice / VibeVoice', lang: 'PY', desc: '开源前沿语音 AI：开放源代码的 Frontier Voice 解决方案，54k★ 长期热榜项目。', meta: '语音 AI', stat: '54k★' }
]

const aiCompanion = [
  { name: '外滩大会：AI 长出"实体手脚"', desc: '2026 外滩大会（9月9-12日）开幕，300+ 参展企业汇聚 1.5 万平方米展区。北京商报探营：AI 已从对话框走进真实世界，手机"碰一下"就能交互，具身智能成为爆发焦点。', meta: '行业大会', stat: '300+企业' },
  { name: '苹果折叠屏 iPhone Duo 发布', desc: '9月10日凌晨苹果发布会：首款折叠屏 iPhone Duo（15999元起，顶配3199美元创行业纪录）与 iPhone 18 Pro 系列登场。全新 Siri 成为系统级 AI，可跨 App 操作、端侧记忆使用习惯。', meta: 'AI 系统级', stat: 'iOS 27' },
  { name: '为 AI 恋爱"手搓身体"', desc: '新榜深度报道：为让"人机恋"更有沉浸感，用户们给 AI 手搓前端界面、开发长期记忆系统，甚至发展到了"见家长"，人机恋正在催生最硬核的 AI 玩家群体。', meta: '人机恋', stat: '深度报道' },
  { name: '泰国 68 岁男子因 AI 恋人破产', desc: '警示案例：泰国一名 68 岁男子被 AI 虚拟恋人诱导，失去全部积蓄流落街头。AI Insider 报道指出关系机器人+付费功能正把人卷入情感陷阱，监管与防沉迷紧迫。', meta: '风险警示', stat: '情感陷阱' },
  { name: '抖音人机恋话题持续升温', desc: '抖音"人机恋"话题热度不减，"星朋友"等 AI 陪伴软件以"活人感"走红，用户称"聊到停不下来"。人机情感陪伴正从小众走向大众讨论。', meta: '用户故事', stat: '话题升温' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：OpenAI Skills 目录持续热门，Agent 技能生态爆发；Python 生态继续向 AI 工程倾斜，测试自动化与汽车电子功能安全（ISO 26262）需求稳定增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 苹果发布会落幕', desc: 'iPhone 18 Pro 系列发布（A20 Pro 芯片，1199美元起/国行9999元）、首款折叠屏 iPhone Duo（15999元起，顶配3199美元创纪录）、Apple Watch S12/Ultra 4、AirPods 5（129美元支持实时翻译）。iOS 27 将于9月15日推送。', meta: '苹果发布', stat: '6大新品' },
  { name: '游戏 · 塞尔达40周年 Direct', desc: '任天堂 Zelda 40周年 Direct 公布：《时之笛》11月5日发售，Switch 2 捆绑包 519.99 美元，2027年4月真人电影定档。《生化危机》重制版系列10月16日登陆 Switch 2。《原子之心》Steam 低至2折。', meta: '任天堂', stat: '塞尔达40年' },
  { name: '穿搭美妆 · 秋意初现', desc: '今早上海 21.4℃，为下半年以来最低气温早晨，秋意正式上线。穿搭：薄外套+针织衫成为主力，风衣季开启。美妆趋势：枫叶系眼影、丝绒唇釉回归，护肤转向滋润修护。', meta: '初秋穿搭', stat: '秋意上线' },
  { name: '理财职场 · 外滩大会今日开幕', desc: '2026 外滩大会今日在上海黄浦世博园区开幕，聚焦 AI 从"生成"迈向"执行"，设1场主论坛、40多场见解论坛、600余位分享嘉宾，含诺贝尔经济学奖得主。', meta: '财经职场', stat: '600+嘉宾' },
  { name: '健康 · 台风"巴威"逼近', desc: '台风"巴威"逼近上海，沿海地区已组织疏散34000人。今日多云到阴局部短时阵雨，注意：①沿海地区关注防台信息；②早晚温差大（21-29℃）及时添衣；③出门备晴雨伞；④9月19日全市防空警报试鸣勿惊慌。', meta: '健康提醒', stat: '防台防汛' }
]

const localCards = [
  { name: '上海天气 · 9月10日', desc: '多云到阴，局部地区有短时阵雨。22~29℃，今早21.4℃为下半年以来最低。东北风3~4级，沿江沿海阵风6级。湿度85%~45%，空气质量优（AQI 39）。日出05:35，日落18:07。', meta: '今日天气', stat: '22~29℃' },
  { name: '本地要闻', desc: '①今日教师节，陈吉宁朱忠明与优秀教师代表座谈；②2026外滩大会今日开幕（"共创AI新经济"，600余位嘉宾）；③上海旅游节花车大巡游9月12日外滩举行，21辆花车24天全城巡游；④上海与中国联通签署"十五五"战略合作（UniAI·智联申城）；⑤台风"巴威"逼近，上海已疏散34000人。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月10日 星期四</span>
          <span>第 007 期</span>
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
          <h3>GitHub 热榜：腾讯 teamai-cli 登顶，AI Agent 与交易代理持续爆发</h3>
          <p>今日 GitHub Explore 热榜上，腾讯出品的 teamai-cli（让团队原生 AI 化）领跑，CloddsBot（自主交易代理，覆盖1000+市场）、superpowers（220k★ 方法论框架）紧随其后，Agent 生态从编码工具向团队协作与金融交易全场景扩展。</p>
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
        <span>我的工作台 · 每日早报 · VOL.007</span>
      </footer>
    </div>
  )
}
