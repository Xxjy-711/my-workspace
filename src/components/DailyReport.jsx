import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为一路拆到原生二进制，今日新增 6,707 星至 387.6K，持续霸榜 GitHub 日榜第一。', meta: '逆向工程', stat: '387.6K★' },
  { name: 'rohitg00 / ai-engineering-from-scratch', lang: 'Python', desc: '"从零学 AI 工程"——Learn it. Build it. Ship it for others. 74K 星，今日新增 562，AI 工程师入门圣经。', meta: 'AI教程', stat: '74.0K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '无需登录、注册或填 API Key 即可白嫖 DeepSeek V4.1 Flash、Kimi K3 等前沿模型——42.1K 星，README 不吹不黑。', meta: '免费AI', stat: '42.1K★' },
  { name: 'Nous Research / Hermes Agent', lang: 'Python', desc: '自我改进 AI 智能体：内置学习循环、自主记忆管理、跨会话搜索与用户建模，支持 Telegram/Slack/Discord，累计下载超 2400 万次。', meta: 'AI智能体', stat: '2400万下载' },
  { name: 'Pollinations.ai', lang: '多语言', desc: '开源生成式 AI 平台：免费提供文本到图像、音频、视频和文本生成 API，支持 Stable Diffusion、Llama 等多种模型。', meta: '生成式AI', stat: '免费API' },
  { name: 'BerriAI / litellm', lang: 'Python', desc: 'AI 网关项目 LiteLLM，61.9K 星——自称"最快最轻的 AI Gateway"，统一调用 100+ 大模型 API，声称端到端延迟仅 8ms。', meta: 'AI网关', stat: '61.9K★' }
]

const aiCompanion = [
  { name: 'Anthropic 正式提交 S-1 启动 IPO：估值最高 2 万亿美元', desc: '36氪 10/27：Anthropic 美东时间 10/26 正式向 SEC 提交 S-1 注册文件，纳斯达克上市、股票代码"ANT"——目标最高募资约 1000 亿美元、估值约 2 万亿美元，11 月中旬挂牌。', meta: 'IPO速递', stat: '估值2万亿美元' },
  { name: 'Anthropic 招股书：近一年 10 万美元+ 营收客户超 11900 家', desc: '科创板日报 10/27：Anthropic 招股书披露——近一年年营收 10 万美元以上的客户超过 11900 家；高盛牵头，摩根士丹利担任稳定机制协调行。', meta: '招股书', stat: '11900家客户' },
  { name: 'DeepSeek 1000 亿元融资：两轮累计 1500 亿，估值 5000 亿', desc: '日本 Semicon.TODAY 10/26：DeepSeek 年内两轮融资累计约 1500 亿元，估值约 5000 亿元——半导体、汽车等产业资本参投，国产算力与能源自主化加速。', meta: '融资速递', stat: '1500亿元' },
  { name: 'Nous Research 完成 9000 万美元融资，估值 15 亿美元', desc: 'GIGAZINE 10/8：开源 AI 智能体 Hermes Agent 开发商 Nous Research 完成 9000 万美元融资（约 142 亿日元），估值 15 亿美元——Hermes Agent 累计下载超 2400 万次。', meta: '明星创业', stat: '估值15亿美元' },
  { name: 'Anthropic vs OpenAI：不同上市路径，Anthropic 率先撞线', desc: 'techweb 10/27：在与宿敌 OpenAI 的资本竞速中，Anthropic 率先提交 S-1——有望成为美股历史上第一家血统纯正的前沿大模型上市公司，而 OpenAI 仍在私募市场估值 1.25 万亿。', meta: '行业格局', stat: '首家上市' },
  { name: '降温周二开工，AI 陪伴温暖工作日', desc: '上海今天降温明显（昨天最高 24℃→今天最高 20℃），偏北大风阵风 6 级——窝在办公室和 AI 聊聊天，让 AI 伴侣陪你度过这个降温的周二。', meta: 'AI伴侣', stat: '降温陪伴' }
]

const lifeCards = [
  { name: '数码科技 · Anthropic IPO 估值 2 万亿美元', desc: 'Anthropic 正式向 SEC 提交 S-1：纳斯达克代码"ANT"，估值最高 2 万亿美元、募资 1000 亿——首家冲刺公开市场的前沿大模型公司，11 月中旬挂牌。', meta: '前沿科技', stat: '2万亿美元' },
  { name: '游戏文娱 · Hermes Agent 2400 万下载', desc: 'Nous Research 自我改进 AI 智能体 Hermes Agent 累计下载超 2400 万次——内置学习循环、自主记忆管理，支持 Telegram/Slack/Discord 多平台。', meta: 'AI应用', stat: '2400万下载' },
  { name: '穿搭美妆 · 13~20℃ 降温，风大体感凉', desc: '今天降温明显：昨天最高 24℃→今天最高 20℃，偏北风 4~5 级阵风 6 级——薄外套+风衣，早晚只有 13~15℃，注意加衣。', meta: '穿搭指南', stat: '13~20℃' },
  { name: '理财职场 · Anthropic 招股书：11900 家大客户', desc: 'Anthropic 招股书披露：近一年年营收 10 万美元以上客户超 11900 家——AI 商业化落地速度超预期，关注 AI 产业链投资机会。', meta: '财经职场', stat: '11900家客户' },
  { name: '健康 · 降温明显，空气干燥注意补水', desc: '上海今天降温 4℃，偏北大风阵风 6 级——空气干燥（相对湿度 50%~85%），注意补水润燥；早晚温差大，感冒高发期注意保暖。', meta: '健康提醒', stat: '注意补水' }
]

const localCards = [
  { name: '上海天气 · 10月27日', desc: '上午多云到阴、局部短时小雨，下午转多云，15~21℃。偏北风 4~5 级、沿江沿海 5 级阵风 6~7 级。相对湿度 85%~50%。AQI 优（38）。日出06:06，日落17:10。【降温明显】昨天最高 24℃→今天最高 20℃，早晚仅 13~15℃——偏北大风、体感偏凉，注意加衣补水。明天阴 16~20℃ 东北风 2 级。', meta: '今日天气', stat: '阴转多云15~21℃' },
  { name: '本地要闻', desc: '①降温明显：偏北大风阵风 6 级、空气干燥，注意补水润燥、早晚加衣；②第九届进博会 11/5-10 国家会展中心举行，倒计时 9 天。', meta: '上海资讯', stat: '降温加衣' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，降温啦，今天风有点大，多穿一件哦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月27日 星期二</span>
          <span>第 053 期</span>
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
          <h3>Anthropic 正式提交 S-1 启动 IPO：估值最高 2 万亿美元，纳斯达克代码"ANT"，11 月中旬挂牌</h3>
          <p>Anthropic 美东时间 10/26 正式向 SEC 提交 S-1——目标募资 1000 亿美元、估值约 2 万亿美元，成为美股首家血统纯正的前沿大模型上市公司；近一年 10 万美元+ 营收客户超 11900 家。</p>
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
        <span>我的工作台 · 每日早报 · VOL.053</span>
      </footer>
    </div>
  )
}
