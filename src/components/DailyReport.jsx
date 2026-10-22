import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'obra / superpowers', lang: 'TypeScript', desc: 'Agentic skills 框架 + 软件开发方法论，星数突破 302K——把"资深工程师的判断力"封装成 AI 编码代理可执行的技能包。', meta: 'Agent框架', stat: '302.5K★' },
  { name: 'NousResearch / hermes-agent', lang: '多语言', desc: '"与你一起成长的自适应 AI 代理"，星数 255.5K——NousResearch 出品的个性化智能体，越用越懂你。', meta: 'AI代理', stat: '255.5K★' },
  { name: 'anomalyco / opencode', lang: '多语言', desc: '开源终端原生编码代理，星数 218.5K——1.4% 用户密钥泄露事件后仍持续霸榜，完整技术报告待发。', meta: '编码代理', stat: '218.5K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '无需登录、注册或填 API Key，即可白嫖 DeepSeek V4.1 Flash、Kimi K3 等前沿模型——今日新增 2,780 星。', meta: '免费AI', stat: '+2,780★' },
  { name: 'stablyai / orca', lang: '多语言', desc: 'Trendshift 今日新上榜：并行 Agent 舰队的开发环境（ADE）——同时跑多个编码代理，各自配自己的模型与工具链。', meta: 'Agent编排', stat: '今日新上榜' },
  { name: 'deepseek-ai / deepseek-harness', lang: '多语言', desc: 'Trendshift 今日新上榜：DeepSeek 官方"一切皆插件"的 Agent Harness——配套内部推理框架 DeepInfer 同步开源。', meta: 'DeepSeek', stat: '官方新作' }
]

const aiCompanion = [
  { name: 'Meta 财报：Muse 商业化比以往更早，豪掷 1350 亿', desc: '华尔街见闻 10/22：Meta 财报电话会宣布 Muse（AI 伴侣产品）商业化进度超预期，并进行"1拆2"股票拆分；全年资本支出指引高达 1350-1450 亿美元，市场解读为算力军备竞赛继续加码。', meta: '行业格局', stat: '资本支出1350亿美元' },
  { name: 'DeepSeek 开源内部推理框架 DeepInfer', desc: 'DoNews 10/21：DeepSeek 全面开源内部推理框架 DeepInfer，旨在提升大模型推理效率；同期 deepseek-harness 以"一切皆插件"理念登上 Trendshift 今日榜。', meta: '开源动态', stat: 'DeepInfer' },
  { name: 'Mach9 完成 3400 万美元 A 轮融资', desc: 'InfoQ 10/22：Y Combinator 转发，Mach9 完成 3400 万美元 A 轮，First Round 与 Bessemer 共同领投，Prudence VC、Quiet Capital 参投。', meta: '融资速递', stat: '3400万美元' },
  { name: '免 API Key 白嫖前沿模型成趋势', desc: 'dsh-our-free-model 登上热度榜：OpenCode 的 Zen 网关已免费开放前沿推理，有人直接把 DeepSeek V4.1 Flash、Kimi K3 接进 harness——README 诚实标注"哪些真能用"。', meta: '免费生态', stat: 'Kimi K3 免费用' },
  { name: '5 万条虚假统计数据被 LLM 大量引用', desc: 'AI 大事记 10/22：一名研究人员发布 50,000 条虚假统计数据，结果被大模型广泛引用并扩散——AI 内容污染与事实核查问题再次敲响警钟。', meta: '安全治理', stat: '虚假数据实验' },
  { name: 'OpenAI 300 亿融资推进，Anthropic IPO 临近', desc: 'OpenAI 计划上市前最后一轮融资约 300 亿美元、估值达 1.4 万亿美元；Anthropic 预计 11 月中旬上市——AI 双雄上市窗口正面撞上。', meta: '资本动态', stat: '估值1.4万亿美元' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 开源推理框架 + 免费白嫖新姿势', desc: 'DeepSeek 开源内部推理框架 DeepInfer；dsh-our-free-model 让你免登录免 API Key 直接用 DeepSeek V4.1 Flash、Kimi K3——学习和玩 AI 的成本又低了一截。', meta: '前沿科技', stat: 'DeepInfer' },
  { name: '游戏文娱 · 周末台风天宅家追剧正合适', desc: '超强台风"蔷琵"本周六逼近上海（距芦潮港约 250 公里），周末风雨交加、个别站点雨量可达 150 毫米——户外计划往后挪，宅家补番看剧安排上。', meta: '周末预警', stat: '周末风雨交加' },
  { name: '穿搭美妆 · 大风天薄外套，周末备伞', desc: '今天多云 17~22℃，东北风 4-5 级、沿江沿海阵风 6 级，体感偏凉——薄外套+防风下装；明天起阵雨、周末台风，折叠伞和防水鞋本周刚需。', meta: '穿搭指南', stat: '薄外套' },
  { name: '理财职场 · Meta 1拆2，AI 烧钱不手软', desc: 'Meta 财报宣布"1拆2"拆分 + 全年资本支出 1350-1450 亿美元；Mach9 拿下 3400 万美元 A 轮——算力军备竞赛远未见顶，关注 AI 产业链机会。', meta: '财经职场', stat: '1350亿美元' },
  { name: '健康 · 大风降温，谨防感冒', desc: '今天最低 17℃、体感偏凉，明天起降雨、周末台风大风——温差加大，早晚及时添衣；台风天居家注意关好门窗，减少不必要外出。', meta: '健康提醒', stat: '温差加大' }
]

const localCards = [
  { name: '上海天气 · 10月22日', desc: '多云，阳光上线。17~22℃。东北风 4-5 级、沿江沿海阵风 6 级。相对湿度 50%~90%。AQI 优（36）。日出06:02，日落17:15。明天多云到阴有时有阵雨、最低 18℃；超强台风"蔷琵"即将进入 24 小时警戒线，本周六距芦潮港最近约 250 公里，周末风雨交加、个别站点雨量可达 150 毫米；10/27 起冷空气南下，最低降至 13~14℃。', meta: '今日天气', stat: '多云17~22℃' },
  { name: '本地要闻', desc: '①台风"蔷琵"动态：超强台风即将进入我国 24 小时警戒线，申城本周末风雨交加，请减少周末出行、提前收好阳台物品。②第九届进博会进入最后冲刺：162 个国家/地区/国际组织、4142 家境外企业参加，11/5-10 国家会展中心举行，倒计时 14 天。', meta: '上海资讯', stat: '台风蔷琵' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天阳光上线、大风偏凉，薄外套安排上 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月22日 星期四</span>
          <span>第 048 期</span>
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
          <h3>Meta 财报：Muse 商业化比以往更早，"1拆2"豪掷 1350 亿算力军备</h3>
          <p>AI 伴侣产品 Muse 商业化进度超预期，Meta 全年资本支出指引 1350-1450 亿美元——烧钱大赛还在加码。</p>
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
        <span>我的工作台 · 每日早报 · VOL.048</span>
      </footer>
    </div>
  )
}
