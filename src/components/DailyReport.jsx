import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为一路拆到原生二进制，387.6K 星，持续霸榜 GitHub 日榜第一。', meta: '逆向工程', stat: '387.6K★' },
  { name: 'DeepTutor', lang: 'Python', desc: '开源终身个性化 AI 家教：支持学习路径动态调整、分组评估和有界记忆管理——45.7K 星，记忆边界设计解决长周期对话上下文漂移。', meta: 'AI教育', stat: '45.7K★' },
  { name: 'rohitg00 / ai-engineering-from-scratch', lang: 'Python', desc: '"从零学 AI 工程"——Learn it. Build it. Ship it for others. 74K 星，AI 工程师入门圣经。', meta: 'AI教程', stat: '74.0K★' },
  { name: 'Nous Research / Hermes Agent', lang: 'Python', desc: '自我改进 AI 智能体：内置学习循环、自主记忆管理、跨会话搜索与用户建模，支持 Telegram/Slack/Discord，累计下载超 2400 万次。', meta: 'AI智能体', stat: '2400万下载' },
  { name: 'Pollinations.ai', lang: '多语言', desc: '开源生成式 AI 平台：免费提供文本到图像、音频、视频和文本生成 API，支持 Stable Diffusion、Llama 等多种模型。', meta: '生成式AI', stat: '免费API' },
  { name: 'BerriAI / litellm', lang: 'Python', desc: 'AI 网关项目 LiteLLM，61.9K 星——自称"最快最轻的 AI Gateway"，统一调用 100+ 大模型 API，声称端到端延迟仅 8ms。', meta: 'AI网关', stat: '61.9K★' }
]

const aiCompanion = [
  { name: 'Anthropic 选择摩根大通牵头 IPO 散户发行', desc: '界面快讯 10/28：Anthropic 已选择由摩根大通主导 IPO 面向美国个人投资者的股票销售——考虑将 IPO 总股份约 15%~20% 拨给散户，摩根大通此前牵头 SpaceX IPO 散户簿记。', meta: 'IPO速递', stat: '15%~20%散户' },
  { name: 'Anthropic 手握 1317 亿美元现金，超英伟达苹果总和', desc: '中国能源网 10/28：Anthropic 成立六年累计融资 1410 亿美元，手握现金 1317 亿——2026H1 营收 163 亿美元，上半年算力和基础设施支出 89.5 亿美元。', meta: '财报速递', stat: '1317亿美元现金' },
  { name: 'Broadcom 搭建 630 亿美元融资框架，为 Anthropic 供芯片', desc: 'Bloomberg 10/28：Broadcom 已搭建 630 亿美元规模融资框架——新设 SPV 购买 Broadcom 芯片并租赁给 Anthropic，Broadcom 半导体业务持续放量。', meta: '算力基建', stat: '630亿美元' },
  { name: 'DeepSeek V4.1-Flash 登顶 OpenRouter 周榜：33.6 万亿 Token', desc: '钱江晚报 10/28：OpenRouter 最新一周（10/19-25）AI 大模型调用量周榜——DeepSeek V4.1-Flash-1017 登顶，单周调用量 33.6 万亿 Token，环比增幅 801%。', meta: '国产模型', stat: '33.6万亿Token' },
  { name: 'Anthropic 招股书：6570 亿美元算力合同锁定至 2036 年', desc: '东方财富研报 10/27：Anthropic 招股书披露——算力合约已锁定至 2036 年，规模约 6570 亿美元（Broadcom 1612 亿、Google 1145 亿、Amazon 1100 亿）。', meta: '算力合同', stat: '6570亿美元' },
  { name: '降温周三开工，AI 陪伴温暖深秋', desc: '上海今晨最低 14℃ 创近期新低（冷空气+辐射降温），半夜后转阵雨——窝在办公室和 AI 聊聊天，让 AI 伴侣陪你度过这个降温的周三。', meta: 'AI伴侣', stat: '降温陪伴' }
]

const lifeCards = [
  { name: '数码科技 · Anthropic IPO 散户发行：15%-20% 给个人', desc: 'Anthropic 选择摩根大通牵头 IPO 散户发行——15%-20% 股份拨给美国个人投资者；手握 1317 亿美元现金，算力合同 6570 亿锁定至 2036 年。', meta: '前沿科技', stat: '1317亿美元现金' },
  { name: '游戏文娱 · DeepSeek V4.1-Flash 登顶 OpenRouter 周榜', desc: 'DeepSeek V4.1-Flash 单周调用量 33.6 万亿 Token，环比 +801%——浙产开源模型登顶全球最大模型路由平台周榜第一。', meta: '国产模型', stat: '33.6万亿Token' },
  { name: '穿搭美妆 · 14~21℃，今晨最低 14℃ 创近期新低', desc: '冷空气+辐射降温：今晨市区最低 14℃ 创近期新低，郊区更低——风衣+厚外套，半夜后转阵雨，出门带伞。', meta: '穿搭指南', stat: '14~21℃' },
  { name: '理财职场 · Anthropic 2026H1 营收 163 亿美元', desc: 'Anthropic 招股书：2026 上半年营收 163 亿美元，手握 1317 亿现金——AI 商业化落地速度超预期，关注 AI 产业链投资机会。', meta: '财经职场', stat: '163亿美元营收' },
  { name: '健康 · 今晨最低 14℃ 创近期新低，注意保暖', desc: '冷空气+辐射降温致今晨最低 14℃ 创近期新低——早晚温差大，感冒高发期；半夜后转阵雨，注意添衣带伞。', meta: '健康提醒', stat: '注意保暖' }
]

const localCards = [
  { name: '上海天气 · 10月28日', desc: '晴转多云，14~21℃。今晨最低 14℃ 创近期新低（冷空气+辐射降温共同影响）。白天多云为主，半夜后转阴到多云有短时阵雨。偏北风 4-5 级阵风 6 级、沿江沿海 5 级阵风 6-7 级，中午转偏东风 3-4 级。相对湿度 53%~79%。AQI 优（38）。日出06:06，日落17:10。【降温】今晨冷到创近期新低，注意保暖；半夜后转阵雨，出门带伞。明天小雨 15~21℃。', meta: '今日天气', stat: '晴转多云14~21℃' },
  { name: '本地要闻', desc: '①今晨最低 14℃ 创近期新低：冷空气+辐射降温共同影响，郊区更低，注意保暖；②第九届进博会 11/5-10 国家会展中心举行，倒计时 8 天。', meta: '上海资讯', stat: '今晨14℃新低' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今早冷到创近期新低啦，出门多穿点哦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月28日 星期三</span>
          <span>第 054 期</span>
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
          <h3>Anthropic IPO 新进展：摩根大通牵头散户发行，15%-20% 股份拨给个人投资者</h3>
          <p>Anthropic 选择摩根大通主导 IPO 散户发行——15%-20% 股份给美国个人投资者；手握 1317 亿美元现金（超英伟达苹果总和），2026H1 营收 163 亿美元，算力合同 6570 亿锁定至 2036 年。</p>
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
        <span>我的工作台 · 每日早报 · VOL.054</span>
      </footer>
    </div>
  )
}
