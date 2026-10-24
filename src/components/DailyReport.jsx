import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为一路拆到原生二进制，36 氪专门报道"闭源软件守了二十年的墙开始漏风"，今日新增 9,009 星。', meta: '逆向工程', stat: '361.5K★' },
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '今日新上榜大热项目——"Makes your AI agent..."，让你的 AI 代理效率飙升，今日新增 1,891 星，星数已达 172.4K。', meta: 'AI代理', stat: '+1,891★' },
  { name: 'K-Dense-AI / scientific-agent-skills', lang: 'Python', desc: '"把任何 AI agent 变成 AI 科学家"——177 个验证过的科研技能 + 100+ 科学数据库，全球 25 万+ 科学家在用，本周新增 4,549 星。', meta: 'AI科研', stat: '53.3K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '无需登录、注册或填 API Key，即可白嫖 DeepSeek V4.1 Flash、Kimi K3 等前沿模型——持续霸榜，35.5K 星。', meta: '免费AI', stat: '35.5K★' },
  { name: 'Graphify-Labs / graphify', lang: '多语言', desc: '把代码库连同文档、SQL Schema、配置和 PDF 转成可查询的知识图谱——本地确定性 AST 解析，支持 Claude Code/Cursor/Codex/Gemini CLI。', meta: '代码图谱', stat: '年度热榜' },
  { name: 'obra / superpowers', lang: 'TypeScript', desc: 'Agentic skills 框架 + 软件开发方法论，星数 302.5K——把"资深工程师的判断力"封装成 AI 编码代理可执行的技能包。', meta: 'Agent框架', stat: '302.5K★' }
]

const aiCompanion = [
  { name: 'DeepSeek 接近完成 800 亿元融资，腾讯、宁德时代入局', desc: 'Bloomberg 援引知情人士 10/23：DeepSeek 接近完成至少 800 亿元（约 120 亿美元）融资，高于原定约 500 亿元目标；腾讯与电池厂商宁德时代是本轮最大投资方之一，公司计划 2027 年初 IPO。', meta: '融资速递', stat: '800亿元' },
  { name: 'DeepSeek 上线 Search/Fetch 网页搜索 API', desc: 'RadarAI 10/24：DeepSeek 正式上线 Search/Fetch 网页搜索 API，以每千次 5 元的低价切入搜索基础设施赛道——AI 搜索大战打响。', meta: '产品动态', stat: '每千次5元' },
  { name: 'StepFun 开放权重发布 600B MoE Step 5 Preview', desc: 'RadarAI 10/24：阶跃星辰以开放权重发布 600B MoE 的 Step 5 Preview，支持 1M 上下文——国产开源大模型竞争再升级。', meta: '开源模型', stat: '600B 参数' },
  { name: 'Anthropic 披露 Claude Code 代码审查体系', desc: 'RadarAI 10/24：Anthropic 披露 Claude Code 代码审查体系——PR 数量翻倍但回滚率下降 40%，AI 编码代理正式进入企业级质量管控时代。', meta: '工程实践', stat: '回滚降40%' },
  { name: 'Thinking Machines Lab 获 20 亿美元融资，估值 120 亿', desc: 'AI D-A-M-N 10/21：Mira Murati 创办的 Thinking Machines Lab 完成 20 亿美元融资，估值达 120 亿美元——OpenAI 前 CTO 的创业故事继续。', meta: '明星创业', stat: '估值120亿美元' },
  { name: '"AI缺钱"重构产业叙事：市场不再相信烧钱就能赢', desc: '财联社 10/24：SpaceX Q3 超智能业务单季营收约 76 亿美元、资本开支高达 164 亿；Meta 同日将全年资本开支提升至 1350-1450 亿并新设无投票权 C 类股票——AI 圈进入精打细算时代。', meta: '行业趋势', stat: '烧钱时代终结' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 搜索 API 上线，5 元/千次', desc: 'DeepSeek 正式上线 Search/Fetch 网页搜索 API，每千次仅 5 元；StepFun 同日开源 600B MoE、支持 1M 上下文——国产 AI 工具越来越便宜好用。', meta: '前沿科技', stat: '每千次5元' },
  { name: '游戏文娱 · 台风天周六，继续宅家', desc: '台风"蔷琵"今天上午移入东海南部，局地仍可达大到暴雨——别被眼前小雨骗了，今天户外计划继续取消，窝在沙发补番追剧最舒服。', meta: '周末预警', stat: '暴雨未结束' },
  { name: '穿搭美妆 · 18~19℃ 全天雨，长袖+防水鞋', desc: '今天中雨为主、湿度 95%、体感 22℃——长袖薄外套不脱，防水鞋和折叠伞出门刚需；明天阴 17~21℃ 北风 5 级，依旧偏凉。', meta: '穿搭指南', stat: '湿度95%' },
  { name: '理财职场 · DeepSeek 800 亿融资，腾讯宁德时代入局', desc: 'Bloomberg：DeepSeek 接近完成至少 800 亿元融资（腾讯、宁德时代领投），计划 2027 年初 IPO——国产大模型资本化提速，关注 AI 产业链。', meta: '财经职场', stat: '800亿元' },
  { name: '健康 · 双蓝预警生效，别掉以轻心', desc: '上海暴雨蓝色+大风蓝色预警生效中：中心城区 6 小时降雨 70mm 以上短时强降水、阵风 7 级——远离广告牌和临时搭建物，阳台物品已收回。', meta: '健康提醒', stat: '双蓝预警' }
]

const localCards = [
  { name: '上海天气 · 10月24日', desc: '中雨为主（白天小雨、晚间转中雨），18~19℃。北风 4 级、沿江沿海阵风 6-7 级。相对湿度 95%。AQI 优（27）。日出06:03，日落17:13。【台风蔷琵】昨夜 20 时至今晨 6 时浦东降雨 47.1mm 最大、徐家汇 45.1mm；台风已减弱为台风级，今天上午移入东海南部，预计 25 日傍晚前后越过上海同纬度——局地仍可达大到暴雨。暴雨蓝色+大风蓝色预警生效中，中心城区 6 小时降雨 70mm 以上短时强降水、阵风 7 级；大桥高速限速、列车部分停运。明天阴 17~21℃ 北风 5 级。', meta: '今日天气', stat: '中雨18~19℃' },
  { name: '本地要闻', desc: '①上海发布暴雨蓝色+大风蓝色双预警：台风"蔷琵"影响未结束，今天局地仍可达大到暴雨，大桥高速限速、部分列车停运，周末出行请查路况和车次。②第九届进博会 11/5-10 国家会展中心举行，倒计时 12 天——台风过后迎进博。', meta: '上海资讯', stat: '双蓝预警' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，台风天周六，雨一直下，宅家最舒服 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月24日 星期六</span>
          <span>第 050 期</span>
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
          <h3>DeepSeek 接近完成 800 亿元融资：腾讯、宁德时代入局，计划 2027 年初 IPO</h3>
          <p>Bloomberg 独家：DeepSeek 融资额从此前约 500 亿目标上调至至少 800 亿元；同日上线 Search/Fetch 搜索 API（每千次 5 元），StepFun 开源 600B MoE 模型。</p>
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
        <span>我的工作台 · 每日早报 · VOL.050</span>
      </footer>
    </div>
  )
}
