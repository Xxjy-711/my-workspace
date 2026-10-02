import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'NVIDIA / OpenShell', lang: 'Python', desc: 'GitHub 今日热榜第 1（连续 2 天领跑）：OpenShell——自主 AI 的安全、私有运行时，英伟达开源。', meta: '英伟达开源', stat: '今日#1' },
  { name: 'DietrichGebert / ponytail', lang: '多语言', desc: '今日热榜第 2：新晋热门开源项目，登上 GitHub 今日榜单。', meta: '今日新秀', stat: '今日#2' },
  { name: 'mattpocock / skills', lang: 'TS', desc: '今日热榜第 3：Matt Pocock（TypeScript 教育家）的技能库项目，Agent 技能方向持续火热。', meta: 'Agent 技能', stat: '今日#3' },
  { name: 'OpenRig', lang: 'CLI', desc: '免费 Apache-2.0 CLI：把 Claude Code 和 Codex 变成持久化 Agent 团队——YAML 定义、lead agent + checker 分工，今日 +640 星。', meta: 'Agent 团队', stat: '今日+640★' },
  { name: 'firecrawl', lang: 'TS', desc: '7 天 +2860 星：给 AI Agent 喂网页数据的 API——搜索、抓取、访问更多信源，Agent 的"数据补给站"。', meta: '网页数据', stat: '7天+2860★' },
  { name: 'simstudioai / sim', lang: 'TS', desc: 'AI Agents 协作工作区：构建、部署、监控 Agent 与工作流，10 万+ 构建者使用，29.7k 星。', meta: 'Agent 工作区', stat: '29.7K★' }
]

const aiCompanion = [
  { name: 'Anthropic 寻求最早 11 月中旬上市', desc: 'IT之家 10/2 引彭博社：Anthropic 最早 11 月 9 日当周启动 IPO 推介，争取 11 月 26 日感恩节前挂牌交易——AI 巨头冲刺资本市场。', meta: '行业重磅', stat: '11月中旬' },
  { name: '马斯克：Optimus 量产，AI5 芯片内存砍半', desc: '马斯克 10/2 宣布：为调配内存满足 Optimus 机器人量产，计划削减特斯拉 AI5/AI6 芯片内存用量；美光 CFO 预测人形机器人成内存需求新增长点。', meta: '硬件风向', stat: 'Optimus量产' },
  { name: 'AI 陪伴硬件比拼"言外之意"', desc: '钛媒体：2025 全球 AI 陪伴市场约 368 亿美元、2026 预计 480 亿美元；日本生态多元——RoBoHoN 语音对话、Aibo 眼神/动作/触摸互动、NICOBO 用呢喃表达情绪。', meta: '市场数据', stat: '480亿美元' },
  { name: 'FF 亮相 IROS 2026 展示 EAI 机器人', desc: 'Faraday Future 在 2026 IEEE/RSJ 智能机器人与系统国际会议集中展示多款 EAI（Embodied AI）机器人产品。', meta: '具身智能', stat: 'IROS 2026' },
  { name: '2026 最受欢迎 AI 伴侣平台榜', desc: 'top10grid 年度盘点：Replika、Character.AI 及多款新玩家领跑，按情感健康、角色扮演、社交技能等细分定位分化。', meta: '平台盘点', stat: '年度榜单' },
  { name: '《办法》：严禁向未成年人提供虚拟伴侣', desc: '央视网重申新规核心：严禁向未成年人提供虚拟亲属、虚拟伴侣等虚拟亲密关系服务；不满 14 周岁需监护人同意；建立未成年人模式、限制充值消费。', meta: '重磅监管', stat: '未成年人保护' }
]

const lifeCards = [
  { name: '数码科技 · AI 运行时安全化', desc: 'OpenShell 安全私有 AI 运行时连续 2 天登顶；OpenRig 让 Claude Code+Codex 组队开发（今日+640星）；firecrawl 网页数据 API 7 天+2860星。', meta: '数码资讯', stat: 'Agent 安全' },
  { name: '游戏文娱 · 世界摩托车赛落户上海', desc: '世界超级摩托车锦标赛（WSBK）落户上海，明年 10/29-31 举行；第二十五届中国上海国际艺术节 10/17 开幕；静安国际光影艺术大赛慎余里展映（免费免预约，还有"潦草小狗"彩蛋）；TYPE-MOON 同人漫展今日最后一天。', meta: '文娱资讯', stat: 'WSBK 来沪' },
  { name: '穿搭美妆 · 国庆第2天穿搭', desc: '今日 19~25℃ 阴到多云局部短时阵雨、东北风4-5级：①短袖+薄外套，夜间 20℃ 转小雨带伞；②10/3 傍晚至 4 日降水明显，5 日起晴好+大风降温，市区最低 16-18℃——风衣/针织衫全面上线；③昼夜温差拉大。', meta: '穿搭指南', stat: '19~25℃' },
  { name: '理财职场 · 假期第2天', desc: '上海口岸国庆期间预计出入境旅客超 86 万人次；假期首日铁路发客量创新高；市医保中心 10/6-7 开放非现金业务；《上海市大件垃圾管理办法（试行）》今日起实施。', meta: '财经职场', stat: '出入境86万+' },
  { name: '健康 · 台风"彩云"路径关注', desc: '今日东北风4-5级（沿江沿海阵风6级）：带伞防风；10/3 傍晚至 4 日申城明显降水、局部中等；5 日起冷高压控制、大风降温，昼夜温差拉大；第 27 号台风"彩云"继续向强台风级增强，假期返程路径需持续关注。', meta: '健康提醒', stat: '风雨降温' }
]

const localCards = [
  { name: '上海天气 · 10月2日', desc: '阴到多云，局部地区有短时阵雨（夜间转小雨）。19~25℃，东北风4~5级（沿江沿海阵风6级）。湿度72%~90%，空气质量优（实时 AQI 22）。日出05:48，日落17:39。10/2-4 仍以阴雨为主，3 日傍晚至 4 日降水较明显（局部中等）；5 日起受冷高压控制雨止转多云、伴大风和降温，市区最低降至 16-18℃、郊区更低；第 27 号台风"彩云"生成后持续增强。', meta: '今日天气', stat: '19~25℃ 阵雨' },
  { name: '本地要闻', desc: '①吴淞口烟花绽放！国产大邮轮开启国庆航次；假期首日铁路发客量创新高；静安国际光影艺术大赛在慎余里展映（免费免预约）；世界超级摩托车锦标赛落户上海（明年 10/29-31 举行）；第二十五届中国上海国际艺术节 10/17 开幕。②上海口岸国庆期间预计出入境旅客超 86 万人次；《上海市大件垃圾管理办法（试行）》今日起实施；市医保中心 10/6-7 开放非现金业务服务。', meta: '上海资讯', stat: '邮轮国庆航次' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期第 2 天，继续开心 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月2日 星期五</span>
          <span>第 029 期</span>
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
          <h3>Anthropic 冲刺 11 月上市，AI 资本化提速</h3>
          <p>AI 巨头 Anthropic 最早 11 月 9 日启动 IPO 推介、争取感恩节前挂牌；GitHub 热榜上 NVIDIA OpenShell 连续 2 天领跑，Agent 安全运行时成为新热点。</p>
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
        <span>我的工作台 · 每日早报 · VOL.029</span>
      </footer>
    </div>
  )
}
