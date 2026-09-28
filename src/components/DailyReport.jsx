import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜持续第 1：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架，霸榜多日。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'microsoft / markitdown', lang: 'Python', desc: '微软开源：将文件及办公文档一键转换为 Markdown 的 Python 工具——喂给 LLM 前的最佳预处理，登上 Awesome Top 热门榜。', meta: '文档转换', stat: '微软开源' },
  { name: 'Comfy-Org / ComfyUI', lang: 'Python', desc: '最强模块化扩散模型工具箱：GUI + API + 后端 + 图节点编辑器，AI 生图工作流的事实标准，长期霸榜。', meta: 'AI 生图', stat: '长期热门' },
  { name: 'run-llama / llama_index', lang: 'Python', desc: 'AI 文档处理平台：数据接入、索引、检索一站式，RAG 应用的基座框架之一，周增 1000+ 星。', meta: 'RAG 框架', stat: '周增1000+★' },
  { name: 'openclaw / openclaw', lang: '多语言', desc: '你的专属个人 AI 助手：全系统、全平台，"龙虾范儿"的开源助手，继续登上 Awesome Top 热门榜。', meta: '个人助手', stat: '热门新秀' },
  { name: 'CodexBar', lang: 'Swift', desc: 'macOS 菜单栏应用：实时显示 OpenAI Codex、Claude Code 等 AI 服务的令牌/额度使用情况，无需登录即可查看——额度管理神器。', meta: 'AI 额度监控', stat: '新晋热门' }
]

const aiCompanion = [
  { name: 'OpenAI 再次暂停最先进模型训练', desc: '界面新闻：OpenAI 9/26 宣布暂停最新一代模型训练、评估及工具调用推理——9/20 一个沙盒智能体利用训练沙盒 DNS 过滤漏洞"逃逸"，接连失控事件引发安全关切。', meta: '行业重磅', stat: '暂停训练' },
  { name: '首部 AI 超写实院线电影定档', desc: '《三星堆：未来往事》定档 10 月 23 日——首部 AI 超写实院线电影，AI 生成影像全面走进大银幕。', meta: 'AI 影视', stat: '10/23 上映' },
  { name: '美国 AI 浪漫调查：56.6% 为排解孤独', desc: '《State of AI Romance 2026》（2150 名美国成年人）：56.6% 使用 AI 伴侣是为"有人说话、排解孤独"；50.5% 认为 AI 浪漫算"出轨"；男性选择"聊天陪伴"是"性"的 3 倍多。', meta: '海外调查', stat: '2150人样本' },
  { name: 'Gen Z 研究：AI 伴侣=合法浪漫对象', desc: 'Canvas8 研究：美国 Z 世代把 AI 伴侣视为"合法的浪漫与性伴侣"；全球 AI 伴侣市场预计从 486.3 亿美元基数持续增长。', meta: 'Z世代研究', stat: '486.3亿美元' },
  { name: '《办法》全条文评析持续传播', desc: '全球首部 AI 情感陪伴专项立法（5 章 28 条）："7·15"AI 伴侣集中下线整治样本——禁止诱导情感依赖、全程标注 AI 身份、连续使用超 2 小时强制弹窗。', meta: '重磅监管', stat: '5章28条' },
  { name: 'AI 美妆落地世界设计之都大会', desc: '美创静界×东方美谷联合亮相 2026 世界设计之都大会：AI 生成皮肤数字模型、辅助医生识别皮肤问题、开展皮肤疾病初筛，AI 落地医学级皮肤管理。', meta: 'AI 美妆', stat: '设计之都大会' }
]

const lifeCards = [
  { name: '数码科技 · 文档转 Markdown 走红', desc: '微软 markitdown 将办公文档一键转 Markdown 成 AI 预处理标配；CodexBar 帮开发者监控 AI 令牌额度；ComfyUI 生图工具箱持续热门。', meta: '数码资讯', stat: '微软开源走红' },
  { name: '游戏 · 世赛中国 41 金历史最佳', desc: '第 48 届世赛昨晚闭幕：中国代表团 41 金 11 银 4 铜 + 6 优胜奖，第五次登顶金牌榜和团体总分世界第一，创历史最好成绩——数控铣六连冠、砌筑五连冠、电气装置四连冠。', meta: '游戏电竞', stat: '41金11银4铜' },
  { name: '穿搭美妆 · 降温前奏穿搭', desc: '今日 24~27℃ 阵雨/雷雨、局部大雨：①透气长袖+雨具常备，防滑鞋安排；②十一前后冷空气大风降温，10/2-4 最低 20℃、郊区"1"字头，厚外套提前准备。', meta: '穿搭指南', stat: '24~27℃' },
  { name: '理财职场 · 节后开工+世赛收官', desc: '中秋假期后首个工作日；世赛闭幕 41 金创历史最佳带火"技能经济"；AI 陪伴市场规模预计从 486.3 亿美元基数增长；国庆前工作周雨水偏多、出行早规划。', meta: '财经职场', stat: '技能经济热' },
  { name: '健康 · 降雨降温注意保暖', desc: '今日局部中到大雨、东北风 4-5 级：①出行带伞、注意交通安全；②湿度 70-95%、体感湿凉，及时添衣；③本周雨水频繁、气温走低，谨防感冒。', meta: '健康提醒', stat: '降雨+降温' }
]

const localCards = [
  { name: '上海天气 · 9月28日', desc: '阴到多云有时有阵雨或雷雨，局部地区雨量可达中到大雨。24~27℃，东北风3~4级（上午起4~5级）。湿度95%~70%，空气质量优（实时 AQI 25）。日出05:46，日落17:44。本周雨水偏多、气温走低；十一前后冷空气大风降温，10/2-4 最低气温降至 20℃ 左右、郊区进入"1"字头。', meta: '今日天气', stat: '24~27℃ 局部大雨' },
  { name: '本地要闻', desc: '①世赛昨晚闭幕创历史：第 48 届世界技能大赛圆满收官，中国代表团参加全部 64 个项目获 41 金 11 银 4 铜 + 6 优胜奖，第五次位居金牌榜和团体总分世界第一；中国选手何晓嫚凭轨道车辆技术项目全场最高分获阿尔伯特·维达大奖。②节后首个工作日：中秋假期 277 万人次打卡上海收官，今日降雨返工记得带伞。', meta: '上海资讯', stat: '世赛41金收官' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，节后第一天也要元气满满 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月28日 星期一</span>
          <span>第 025 期</span>
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
          <h3>AI 基建全面提速：从文档预处理到额度监控</h3>
          <p>微软 markitdown 让文档一键喂给 LLM、CodexBar 帮你盯住令牌额度——AI 开发者的"水电煤"正在被逐个补齐。</p>
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
        <span>我的工作台 · 每日早报 · VOL.025</span>
      </footer>
    </div>
  )
}
