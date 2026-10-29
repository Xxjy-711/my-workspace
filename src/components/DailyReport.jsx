import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: '"用 Agent 逆向一切"——从应用行为一路拆到原生二进制，399.5K 星、今日 +2,028，即将突破 40 万星大关。', meta: '逆向工程', stat: '399.5K★' },
  { name: 'Ebony-Vinyl / dsh-our-free-model', lang: 'JavaScript', desc: '无需登录、注册或填 API Key 即可白嫖前沿模型——47.9K 星、今日 +1,408，README 不吹不黑。', meta: '免费AI', stat: '47.9K★' },
  { name: 'f / prompts.chat', lang: 'TypeScript', desc: '原 Awesome ChatGPT Prompts——社区分享、发现和收藏 Prompt 的开源平台，174.9K 星，可自托管。', meta: 'Prompt库', stat: '174.9K★' },
  { name: 'rohitg00 / ai-engineering-from-scratch', lang: 'Python', desc: '"从零学 AI 工程"——523 节课、20 个阶段、约 342 小时，从线性代数教到自主 Agent，74K 星。', meta: 'AI教程', stat: '74.0K★' },
  { name: 'Nous Research / Hermes Agent', lang: 'Python', desc: '自我改进 AI 智能体：内置学习循环、自主技能创建、跨会话记忆，支持 Telegram/Slack/Discord，2400 万+下载。', meta: 'AI智能体', stat: '2400万下载' },
  { name: 'BerriAI / litellm', lang: 'Python', desc: 'AI 网关项目 LiteLLM，61.9K 星——统一调用 140+ 家大模型 API，开源自托管 AI 网关事实标准。', meta: 'AI网关', stat: '61.9K★' }
]

const aiCompanion = [
  { name: 'Anthropic 万亿美元独角兽上市前夜：理想还剩多少？', desc: '投中网 10/29：Anthropic 手握 1317 亿美元现金，但 6570 亿美元算力合同压顶——这笔长期支出远高于其 650 亿美元 H 轮融资，上市后能否撑起万亿美元估值引争议。', meta: 'IPO深度', stat: '万亿估值' },
  { name: 'DeepSeek 半年融资 1500 亿，团队扩编一倍', desc: '微博/36氪 10/29：DeepSeek 新一轮 1000 亿融资超募，叠加 6 月首轮约 500 亿，半年累计逼近 1500 亿；所有部门计划扩编至少一倍，9 月释放约 150 个招聘名额。', meta: '国产AI', stat: '1500亿融资' },
  { name: 'Hugging Face 探索以超 130 亿美元估值出售', desc: 'DoNews 10/28：全球最大开源模型托管平台 Hugging Face 正探索以超 130 亿美元估值出售——曾获 45 亿美元融资，近期遭 OpenAI 失控模型事件冲击。', meta: '开源生态', stat: '130亿美元' },
  { name: 'Legora：OpenAI 驱动法律 Agent，NDA 审查减少 95%', desc: 'amazingindex 10/29：瑞典初创 Legora 基于 OpenAI 模型和编程 Agent 打造法律工作操作系统——NDA 审查时间减少 95% 以上，合同周转速度提升 90%。', meta: '垂直Agent', stat: '提效90%' },
  { name: 'DeepSeek 开源推理框架 DeepInfer：兼容英伟达+昇腾', desc: '中国经济网 10/26：DeepSeek 宣布内部推理框架 DeepInfer 全面开源，同时兼容英伟达与华为昇腾两大算力平台——在芯片围堵下打通国产算力生态。', meta: '开源框架', stat: '兼容昇腾' },
  { name: '周四阵雨，AI 陪伴温暖工作日', desc: '上海今天阴到多云有短时阵雨，湿度高达 95%——窝在办公室和 AI 聊聊天，让 AI 伴侣陪你度过这个湿漉漉的周四。', meta: 'AI伴侣', stat: '雨天陪伴' }
]

const lifeCards = [
  { name: '数码科技 · Anthropic 万亿独角兽上市前夜', desc: '投中网深度：Anthropic 手握 1317 亿现金，但 6570 亿算力合同压顶——万亿美元估值能否撑起？上市后理想还剩多少？', meta: '前沿科技', stat: '万亿估值' },
  { name: '游戏文娱 · DeepSeek 半年融资 1500 亿扩编一倍', desc: 'DeepSeek 新一轮 1000 亿融资超募，半年累计 1500 亿；所有部门扩编至少一倍，9 月释放 150 个招聘名额——国产 AI 狂飙。', meta: '国产AI', stat: '1500亿' },
  { name: '穿搭美妆 · 16~23℃ 有阵雨，穿风衣带伞', desc: '今天阴到多云有短时阵雨，17~23℃，湿度高达 95%——风衣+薄长袖，出门一定带伞，湿度大注意鞋子防水。', meta: '穿搭指南', stat: '16~23℃' },
  { name: '理财职场 · Hugging Face 130 亿美元估值待售', desc: '全球最大开源模型平台 Hugging Face 探索以超 130 亿美元估值出售——开源 AI 生态商业化加速，关注 M&A 机会。', meta: '财经职场', stat: '130亿美元' },
  { name: '健康 · 阵雨湿度大，注意防潮', desc: '今天相对湿度 95%~70%，短时阵雨频繁——关节敏感者注意保暖；衣物不易干，多备一套换洗。', meta: '健康提醒', stat: '注意防潮' }
]

const localCards = [
  { name: '上海天气 · 10月29日', desc: '阴到多云有短时阵雨，17~23℃。偏东风 3~4 级，中午转偏西风 3~4 级，沿江沿海 4~5 级。相对湿度 95%~70%。AQI 优（44）。日出06:07，日落17:09。【带伞】今天短时阵雨频繁，出门记得带伞；明天转晴 15~23℃。', meta: '今日天气', stat: '阵雨17~23℃' },
  { name: '本地要闻', desc: '①今天短时阵雨频繁，出门带伞、注意鞋子防水；②第九届进博会 11/5-10 国家会展中心举行，倒计时 7 天。', meta: '上海资讯', stat: '阵雨带伞' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天有短时阵雨，出门记得带伞哦 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月29日 星期四</span>
          <span>第 055 期</span>
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
          <h3>Anthropic 万亿美元独角兽上市前夜：手握 1317 亿现金，但 6570 亿算力合同压顶——理想还剩多少？</h3>
          <p>投中网深度：Anthropic 手握 1317 亿美元现金，但算力合同总额 6570 亿美元——这笔长期支出远高于其 650 亿 H 轮融资，上市后能否撑起万亿美元估值引争议。</p>
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
        <span>我的工作台 · 每日早报 · VOL.055</span>
      </footer>
    </div>
  )
}
