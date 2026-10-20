import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'anujasid / blender-ai-mcp-addon', lang: 'Python', desc: '今日热度再涨 +327%：Blender 里接入 AI 智能体团队——聊天、审批、Agent 协作全部搬进 3D 建模软件侧边栏。', meta: '3D建模', stat: '热度+327%' },
  { name: 'feder-cr / git-ai', lang: '多语言', desc: 'Git 的 AI 助手热度 +277%：自然语言操作版本库，提交信息、冲突解决、历史分析一站搞定。', meta: '开发者工具', stat: '热度+277%' },
  { name: 'Leonxlnx / earshot', lang: '多语言', desc: '音频 AI 新锐热度 +250%：让 AI 做"顺风耳"，听声辨意，音频理解与语音处理。', meta: '音频AI', stat: '热度+250%' },
  { name: 'chenglou / handwired', lang: '多语言', desc: '今日热度 +234%：手搓直连的 AI 硬件/工具链新项目，硬核极客向。', meta: '极客工具', stat: '热度+234%' },
  { name: 'openclaw / openclaw', lang: '多语言', desc: '"The lobster way"：个人 AI 助手登顶今日 GitHub Trending，星数已达 283K——但"零可见用户"引发热议。', meta: 'AI助手', stat: '283K★' },
  { name: 'morluto / rea', lang: 'TypeScript', desc: 'AI 逆向风暴长尾依旧：Trendshift 今日活跃度继续领跑，"让一切软件变免费"运动持续。', meta: '逆向工程', stat: '持续霸榜' }
]

const aiCompanion = [
  { name: 'OpenAI 加速融资，估值或超 1.4 万亿美元', desc: '财联社 10/20：OpenAI 正急于在竞争对手 Anthropic 预计 11 月中旬上市前推进新一轮约 300 亿美元融资；软银、阿布扎比 MGX 及现有支持者洽谈加入，估值或超 1.4 万亿美元——AI 双雄正面交锋。', meta: '行业格局', stat: '估值1.4万亿美元' },
  { name: '全球首个机器人大脑 API 开放', desc: '新浪财经 10/20：英伟达 DreamZero 团队创立的 Dream Labs 结束隐身，完成 9000 万美元种子轮，上线 Dream API——输入自然语言指令即可生成电机控制指令，还能适配训练中从未见过的机器人。', meta: '具身智能', stat: '9000万美元种子轮' },
  { name: '黄仁勋柏林谈 AI 工业化', desc: '东方财富 10/20 早报：10/19 黄仁勋与德国总理默茨公开讨论 AI 工业化；业内判断 AI 产业焦点正由模型与 GPU 扩展至智能体所需的 CPU、基础设施与治理机制。', meta: '产业趋势', stat: 'AI工业化' },
  { name: 'AI 伴侣市场爆发：2028 年或达 595 亿元', desc: '北京师范大学新闻传播学院报告：2024 年中国 AI 伴侣市场规模 12.11 亿元，2025 年预计增至 38.66 亿元，2028 年有望突破 595 亿元，年复合增长率高达 148.74%。', meta: 'AI伴侣', stat: 'CAGR 148.74%' },
  { name: '10 万星级的"个人 AI 助手"，用户在哪？', desc: 'top10.dev 10/19：openclaw（283K★）与 hermes-agent（115K★）两个"个人 AI 助手"今日同登 GitHub Trending，但都"零可见用户"——百星神话与真实使用量之间的鸿沟引发讨论。', meta: '开源观察', stat: '283K★ vs 0用户' },
  { name: 'OpenCode 安全事件继续处置中', desc: 'OpenCode 官方披露控制台漏洞、1.4% 用户第三方 API 密钥或遭泄露后，联合 OpenAI/Anthropic/谷歌处置仍在进行；开发者请及时轮换密钥、紧盯账单，完整技术报告待发布。', meta: '安全事件', stat: '报告待发' }
]

const lifeCards = [
  { name: '数码科技 · 全球首个"机器人大脑"API 上线', desc: '英伟达 DreamZero 团队创业项目 Dream Labs 开放 Dream API：给机器人接上"大脑"，说句话就能让它执行任务，还能适配没训练过的机器人——普通人也能玩机器人开发了。', meta: '前沿科技', stat: 'Dream API' },
  { name: '游戏文娱 · 大师赛落幕，营收破 5 亿创新高', desc: '2026 上海大师赛收官：18 天、24.8 万人次观赛，总营收 5 亿元人民币创历史新高；中网同样火爆——45 万人次入园、票房 1.32 亿元同比增长 48%，网球经济腾飞。', meta: '文娱体育', stat: '营收5亿元' },
  { name: '穿搭美妆 · 今天闷热，明天冷空气到', desc: '今天多云到阴，最高 28℃、体感闷热（湿度 95%~55%），短袖或薄衫即可，但上午局部有雾、下午转阵雨记得带伞；明天冷空气抵达，大风降温，洋葱式穿衣安排上。', meta: '穿搭指南', stat: '最高28℃' },
  { name: '理财职场 · OpenAI 拟再融 300 亿，Anthropic 将 IPO', desc: 'OpenAI 赶在 Anthropic 11 月中旬上市前加速融资约 300 亿美元（软银、MGX 洽谈中）、估值或超 1.4 万亿；AI 一级市场热度拉满，留意算力、芯片与智能体概念。', meta: '财经职场', stat: '300亿美元' },
  { name: '健康 · 雾天出行 + 冷空气后温差大', desc: '今天上午局部有雾，早高峰出行注意交通安全；明天冷空气大风降温，周四最低重回"1"字头，晴雨转换频繁、气温起伏大——及时添衣、谨防感冒。', meta: '健康提醒', stat: '谨防感冒' }
]

const localCards = [
  { name: '上海天气 · 10月20日', desc: '多云到阴，上午以前局部地区有雾，下午转阴到多云有时有阵雨、局部雨量可达中到大雨。22~28℃。西南风、下午转西北风，风力 3-4 级。相对湿度 95%~55%，体感闷热。AQI 良（55）午后转优。日出06:00，日落17:18。趋势：明天冷空气抵达，大风降温、阴转雨；周三最低跌破 20℃，10/27-28 最低或降至 14~15℃。', meta: '今日天气', stat: '闷热28℃' },
  { name: '本地要闻', desc: '①2026 上海劳力士大师赛落幕：18 天赛期 24.8 万人次观赛，总营收破 5 亿元创历史新高，叠加赛前嘉年华，"网球氛围铺满申城"。②第九届进博会进入最后筹备冲刺：168 名进博会专业志愿者今日上岗，11/5-10 国家会展中心举行、倒计时 16 天，社会观众报名火热。', meta: '上海资讯', stat: '大师赛5亿' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天闷热、明天冷空气到，洋葱式穿衣 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月20日 星期二</span>
          <span>第 047 期</span>
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
          <h3>OpenAI 加速融资估值或超 1.4 万亿美元，Anthropic IPO 在即</h3>
          <p>软银、MGX 洽谈加入约 300 亿美元融资——AI 双雄正面交锋，一场烧钱大赛进入白热化。</p>
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
        <span>我的工作台 · 每日早报 · VOL.047</span>
      </footer>
    </div>
  )
}
