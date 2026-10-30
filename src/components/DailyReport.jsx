import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: 'DSH 白嫖插件——免登录免 Key 直接用 DeepSeek V4.1 Flash、Kimi K3 等前沿模型，49.9K 星、今日 +2,130，即将突破 5 万大关。', meta: '免费AI', stat: '49.9K★' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为拆到原生二进制，399.5K 星，即将突破 40 万星。', meta: '逆向工程', stat: '399.5K★' },
  { name: 'f / prompts.chat', lang: 'TypeScript', desc: '原 Awesome ChatGPT Prompts——社区分享、发现和收藏 Prompt 的开源平台，174.9K 星，可自托管。', meta: 'Prompt库', stat: '174.9K★' },
  { name: 'anujasid / blender-ai-mcp-addon', lang: 'Python', desc: '把 AI 助手塞进 Blender 侧边栏——聊天、审批、Agent 团队全在 3D 软件里完成，今日 +327% 飙升。', meta: 'AI+3D', stat: '+327%' },
  { name: 'rohitg00 / ai-engineering-from-scratch', lang: 'Python', desc: '"从零学 AI 工程"——523 节课、20 个阶段、约 342 小时，从线性代数教到自主 Agent，74K 星。', meta: 'AI教程', stat: '74.0K★' },
  { name: 'BerriAI / litellm', lang: 'Python', desc: 'AI 网关 LiteLLM，61.9K 星——统一调用 140+ 家大模型 API，开源自托管 AI 网关事实标准。', meta: 'AI网关', stat: '61.9K★' }
]

const aiCompanion = [
  { name: 'Anthropic IPO 效应发酵：英伟达、英特尔集体大涨', desc: '福布斯 10/30：Anthropic 提交 S-1 招股书后，英伟达、英特尔等科技股大幅上涨，市场预期这场 11 月上市或将创下纪录——募资或达 1000 亿美元，估值超 2 万亿美元。', meta: 'IPO引爆', stat: '2万亿估值' },
  { name: 'Anthropic 公开招股书：半年狂揽 163 亿美元', desc: '36氪 10/27：Claude 母公司正式向 SEC 提交 S-1，股票代码 ANT 登陆纳斯达克——半年营收暴增，手握 1317 亿美元现金，AI 史诗级 IPO 来了。', meta: '招股书', stat: '163亿美元' },
  { name: 'OpenAI 即将完成 300 亿美元融资，估值 1.25 万亿', desc: 'DoNews 10/29：OpenAI 正以 1.25 万亿美元估值融资至多 300 亿美元，为 IPO 做准备；已秘密提交招股书，目标 2027 年上市。', meta: 'OpenAI', stat: '1.25万亿' },
  { name: 'DeepSeek 半年融资 1500 亿，创中国 AI 纪录', desc: '36氪：DeepSeek 新一轮 1000 亿融资超募，叠加 6 月首轮约 500 亿，半年累计逼近 1500 亿；投资方含腾讯、宁德时代、吉利、君联等。', meta: '国产AI', stat: '1500亿' },
  { name: 'Blender AI 插件飙升：+327%，3D 工作流被 Agent 接管', desc: 'heatdrop 10/30：blender-ai-mcp-addon 把聊天、审批、Agent 团队全塞进 3D 软件侧边栏——DCC 工具正在变成 Agent 的操作台。', meta: 'AI+创作', stat: '+327%' },
  { name: '周五晴好，AI 陪伴温暖周末', desc: '上海今天上午有雾，中午转晴，16~24℃——晴好天气适合出门晒太阳，晚上窝在屋里和 AI 聊聊天，迎接周末。', meta: 'AI伴侣', stat: '周五快乐' }
]

const lifeCards = [
  { name: '数码科技 · Anthropic IPO 引爆科技股', desc: '福布斯 10/30：Anthropic 提交 S-1 后英伟达、英特尔集体大涨——11 月上市或成史上最大科技 IPO，募资 1000 亿美元。', meta: '前沿科技', stat: 'IPO引爆' },
  { name: '游戏文娱 · DSH 白嫖插件即将破 5 万星', desc: 'Ebony-Vinyl/dsh-our-free-model 今日 +2,130 星——免登录免 Key 白嫖前沿模型，开源圈最火的"免费午餐"。', meta: '开源工具', stat: '49.9K★' },
  { name: '穿搭美妆 · 16~24℃ 晴好，长袖+薄外套', desc: '今天上午有雾中午转晴，16~24℃昼夜温差大——长袖 T 恤加薄外套，早晚凉中午暖，适合洗晒和出行。', meta: '穿搭指南', stat: '16~24℃' },
  { name: '理财职场 · Anthropic 半年狂揽 163 亿美元', desc: 'Claude 母公司公开招股书：半年营收暴增，手握 1317 亿现金——AI 赛道估值狂飙，关注科技股机会。', meta: '财经职场', stat: '163亿美元' },
  { name: '健康 · 上午有雾，出行注意能见度', desc: '今天上午上海有雾，能见度仅 4.6 公里——驾车注意减速、开雾灯；中午转晴后空气转好，适合户外活动。', meta: '健康提醒', stat: '上午有雾' }
]

const localCards = [
  { name: '上海天气 · 10月30日', desc: '晴到多云，16~24℃。上午有雾（能见度 4.6km），中午转晴。西北风 3~4 级，沿江沿海 4~5 级。相对湿度 70%→40%。AQI 良（91）。日出06:08，日落17:08。【上午有雾】驾车注意安全；明天继续晴 18~23℃。', meta: '今日天气', stat: '晴16~24℃' },
  { name: '本地要闻', desc: '①上午有雾能见度低，驾车出行注意减速、保持车距；②第九届进博会 11/5-10 国家会展中心举行，倒计时 6 天。', meta: '上海资讯', stat: '雾天注意' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天转晴啦，上午有雾中午就放晴 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月30日 星期五</span>
          <span>第 056 期</span>
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
          <h3>Anthropic IPO 效应发酵：提交 S-1 后英伟达、英特尔集体大涨，11 月上市或成史上最大科技 IPO</h3>
          <p>福布斯 10/30：Anthropic 提交招股书后，英伟达、英特尔等科技股大幅上涨——募资或达 1000 亿美元，估值超 2 万亿美元，半年狂揽 163 亿美元营收。</p>
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
        <span>我的工作台 · 每日早报 · VOL.056</span>
      </footer>
    </div>
  )
}
