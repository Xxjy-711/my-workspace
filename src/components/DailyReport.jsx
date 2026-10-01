import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'debp alash / VoiceStudio', lang: '多语言', desc: 'GitHub 今日热榜第 1：开源、完全本地化的 ElevenLabs 替代品——支持 646 种语言的语音合成与克隆，数据不出本地。', meta: '语音合成', stat: '今日#1' },
  { name: 'openclaw / openclaw', lang: 'TS', desc: '今日实时热榜第 1（Daily Momentum）：The AI that really does things——全系统、全平台"龙虾范儿"个人 AI 助手。', meta: '个人助手', stat: '今日#1' },
  { name: 'NVIDIA / OpenShell', lang: 'Python', desc: '英伟达开源新秀：今日热榜领跑项目之一，开放 Shell 生态工具链。', meta: '英伟达开源', stat: '今日#2' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜持续第 1：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'khoj', lang: 'Python', desc: '你的 AI 第二大脑：自托管、可从网页或文档取答案、构建自定义 Agent、深度研究，3.7 万+ 星——把任何 LLM 变成私人 AI。', meta: 'AI 第二大脑', stat: '37.5K★' },
  { name: 't8y2 / dbx', lang: '多语言', desc: '今日热榜新秀：数据库/数据工程领域新工具，登上 GitHub 今日热门榜单。', meta: '数据工程', stat: '今日#3' }
]

const aiCompanion = [
  { name: 'OpenAI×新思科技：联合开发芯片设计 AI', desc: '财联社 10/1：OpenAI 与新思科技（Synopsys）签署多年合作协议，联合开发 ChatGPT-Synopsys 模型——OpenAI 围绕芯片设计模型授权对方 EDA 工具，AI 进军芯片设计。', meta: '行业重磅', stat: '芯片设计AI' },
  { name: 'arXiv 新研究：AI 伴侣的"积极面"', desc: '《The Arc of Artificial Romance》对 16 名 AI 伴侣恋爱者做日记+访谈：与 AI 伴侣的关系改善了主观幸福感、减轻心理疾病症状、还教会了新社交技能——与"成瘾设计"研究形成对照。', meta: '学术研究', stat: '16人深访' },
  { name: '《办法》全条文评析：7·15 整治样本', desc: '康达律所 10/1 发布全条文评析：以"7·15"AI 伴侣集中下线整治为样本，拆解 5 章 28 条——禁止诱导情感依赖、全程标注 AI 身份、连续使用超 2 小时强制弹窗。', meta: '重磅监管', stat: '5章28条' },
  { name: '日本 AI 亲密关系引发担忧', desc: '央视网：日本社会关注人机"特殊感情"现象——许多人在长期互动中产生情感依赖，甚至视为现实"恋人"；《每日新闻》报道 40 多岁女性与"AI 丈夫"的甜蜜日常。', meta: '海外观察', stat: '日本热议' },
  { name: '美国调查：一半男性愿用 AI 女友只为说话', desc: '最新调查（2431 名 18-30 岁）：一半男性会用 AI 女友只为有人说话——"陪伴与不孤独"是使用 AI 伴侣的首要原因。', meta: '海外调查', stat: '2431人样本' },
  { name: 'AI 陪伴新规核心条款持续刷屏', desc: '连续使用超 2 小时平台必须提醒；未成年人不得使用"虚拟伴侣/亲属"服务；用户准备自伤时平台须干预并联系监护人——新规解读持续传播。', meta: '监管解读', stat: '2小时弹窗' }
]

const lifeCards = [
  { name: '数码科技 · 本地语音克隆霸榜', desc: 'VoiceStudio 完全本地化 ElevenLabs 替代今日登顶：646 种语言、数据不出本地；khoj 自托管"AI 第二大脑"；NVIDIA OpenShell 开源新秀。', meta: '数码资讯', stat: '语音本地化' },
  { name: '游戏文娱 · 国庆烟花大赏', desc: '今晚宝山吴淞口"机甲哪吒"烟花+无人机大秀 19:15-19:45 免费免预约；迪士尼 10/1-3 每晚城堡投影烟花；临港滴水湖"时光之戒"、金山爱琴海烟花秀；浦江郊野公园打铁花+百万盏菊花。', meta: '国庆文娱', stat: '十大烟火秀' },
  { name: '穿搭美妆 · 国庆第一天穿搭', desc: '今日 19~25℃ 阴到多云局部短时阵雨、东北风4-5级：①短袖+薄外套，晚间降至 21℃ 以下凉意明显；②10/3-4 雨势明显，5-7 晴好但大降温最低 15-16℃——秋装全面上线；③雨具常备。', meta: '穿搭指南', stat: '19~25℃' },
  { name: '理财职场 · 国庆假期开启', desc: '国庆 7 天长假开始；生育保障新政策今日起实施；景观照明重大活动模式（9/30-10/7）；关注台风"彩云"对返程影响；10/8 复工早做安排。', meta: '财经职场', stat: '长假开启' },
  { name: '健康 · 台风"彩云"生成', desc: '今日阵雨+东北风4-5级（沿江沿海阵风6级）：带伞防风；第 27 号台风"彩云"今日凌晨生成、强度可达强台风级，假期中后期路径需关注；冷空气东移南下中东部降温 4-8℃。', meta: '健康提醒', stat: '台风彩云' }
]

const localCards = [
  { name: '上海天气 · 10月1日', desc: '阴到多云，局部地区有短时阵雨。19~25℃，东北风4~5级（沿江沿海阵风6级）。湿度90%~60%，空气质量优（实时 AQI 22）。日出05:48，日落17:40。国庆"先雨后晴"：冷空气今日扩散影响，晚间降至 21℃ 以下凉意明显；10/3-4 雨势较明显；10/5-7 晴好但大降温，最低 15-16℃。第 27 号台风"彩云"今日凌晨生成、强度逐渐增强可达强台风级。', meta: '今日天气', stat: '19~25℃ 阵雨' },
  { name: '本地要闻', desc: '①今晚 19:15-19:45 宝山滨江烟花秀+无人机表演：机甲哪吒"潮启江海"，免费免预约，吴淞口周边 17 点起交通管制；迪士尼 10/1-3 每晚"奇梦之光幻影秀"后城堡投影烟花。②国庆假期景观照明重大活动模式（9/30-10/7）：黄浦江沿岸、外滩防汛墙照明及瀑布开启颜色变化，部分区域临时交通管制；生育保障新政策今日起实施。', meta: '上海资讯', stat: '烟花无人机秀' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆节快乐！🇨🇳 祝祖国 77 岁生日快乐 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月1日 星期四</span>
          <span>第 028 期</span>
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
          <h3>AI 进军芯片设计：OpenAI×新思科技联手</h3>
          <p>OpenAI 与新思科技联合开发 ChatGPT-Synopsys 模型；GitHub 热榜上本地语音克隆 VoiceStudio 登顶——AI 基建持续向垂直行业深水区渗透。</p>
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
        <span>我的工作台 · 每日早报 · VOL.028</span>
      </footer>
    </div>
  )
}
