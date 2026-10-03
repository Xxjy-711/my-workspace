import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'debpalash / VoiceStudio', lang: 'Python', desc: '上周 GitHub 增长之最（+10,933★）：开源、完全本地化的 ElevenLabs 替代品——语音克隆、配音、听写、转写、有声书，支持 646 种语言。', meta: '语音合成', stat: '周+10933★' },
  { name: 'paperclipai / paperclip', lang: 'TS', desc: 'GitHub Trending Week 40 第 1（+10,700★）：The open-source app everyone uses to manage agents at work——工作中管理 AI Agent 的开源应用。', meta: 'Agent 管理', stat: '周+10700★' },
  { name: 'firecrawl', lang: 'TS', desc: '面向 AI 的网页数据 API：一键把整站内容转化为 LLM 可直接使用的 Markdown 或结构化数据，中文社区日热门。', meta: '网页数据', stat: '日热门' },
  { name: 'rohitg00 / agentmemory', lang: 'TS', desc: '#1 AI 编程 Agent 持久记忆（基于真实世界基准）：给 coding agent 装上跨会话记忆，29k 星。', meta: 'Agent 记忆', stat: '29.0K★' },
  { name: 'harvard-edge / cs249r_book', lang: 'Python', desc: '哈佛 CS249r 开源教材《Machine Learning Systems》：Foundations、Scaling、Agentic AI、Physical AI 四卷，28.7k 星。', meta: '哈佛教材', stat: '28.7K★' },
  { name: 'dify', lang: 'TS', desc: '一站式 Agentic 工作流与 RAG 平台：支持云上/VPC/自托管，从原型到生产不重搭，15.7 万星、AI 榜第 10。', meta: 'Agent 平台', stat: '157K★' }
]

const aiCompanion = [
  { name: '科技公司集体"卖萌"：AI 助手变卡通', desc: '华尔街日报 10/3：面对公众对 AI 取代工作、威胁安全的担忧，OpenAI、Meta 尝试新营销——为 AI 助手配上可爱卡通形象。OpenAI 新 AI 智能体 Dots 色彩鲜艳、有的戴眼镜系领结；Meta Muse 吉祥物亮相。', meta: '行业风向', stat: 'AI 卡通化' },
  { name: '英伟达 DGX SPARK：本地跑千亿参数模型', desc: '英伟达宣布 DGX SPARK 64GB 配置本月起推出：本地可运行最高 1000 亿参数 AI 模型，10/23 起发售、起售价 4999 美元；英伟达称 AI 智能体已成开源社区增长最快赛道。', meta: 'AI 硬件', stat: '$4999 起' },
  { name: 'Stability AI 完成 7600 万美元融资', desc: '钛媒体 10/3：Stability AI 完成 7600 万美元 B 轮融资——Universal、Sony、Warner 三大唱片首次同时作为投资者与版权授权方入股，Sean Parker（Napster 创始人）任董事会主席，开创 AI 音乐"授权+投资"合规新范式。', meta: 'AI 音乐', stat: '$7600万' },
  { name: '华为与赛力斯达成新五年战略合作', desc: '新华网 10/3：华为与赛力斯签署新的五年战略合作——持续锚定问界高端智能汽车品牌核心定位，联合组建问界业务专属团队，推动中国新豪华智能汽车标杆。', meta: '智能汽车', stat: '五年合作' },
  { name: 'AI 拟人化新规落地周年观察', desc: '网经社复盘：新规落地前后，豆包、通义千问同日下线自定义智能体，腾讯元宝提前关闭入口，网易云"妙时"停运——"虚拟恋人"下架整改到"数字亲人"被叫停，赛道告别野蛮生长。', meta: '重磅监管', stat: '行业洗牌' },
  { name: '《办法》：未成年人保护红线', desc: '央视网重申：严禁向未成年人提供虚拟亲属、虚拟伴侣等虚拟亲密关系服务；不满 14 周岁提供其他拟人化互动需监护人同意；建立未成年人模式、支持监护人管控与限制充值。', meta: '监管解读', stat: '未成年人保护' }
]

const lifeCards = [
  { name: '数码科技 · 语音克隆登顶周榜', desc: 'VoiceStudio 上周暴涨 1.09 万星成增长之最；paperclip 管理 AI Agent 应用登顶 Week 40；英伟达 DGX SPARK 让本地跑千亿参数模型。', meta: '数码资讯', stat: '周榜双雄' },
  { name: '游戏文娱 · 秋日 B 计划游园会', desc: 'Plan Bund 秋日游园会今日 13:00 起杨浦滨江秀带广场（10/3-5，免费免预约）；泡泡玛特城市乐园嘉年华巡展·上海站（至 11/1）；上海网球大师赛嘉年华 10/1-4 旗忠网球中心"0元购"畅玩；上海国际光影节至 10/16。', meta: '文娱资讯', stat: '游园会开幕' },
  { name: '穿搭美妆 · 假期第3天穿搭', desc: '今日 18~24℃ 中雨转小雨、东北风2级：①中雨带伞+防水鞋、体感凉（实时18℃）；②10/4 冷空气影响、北风增大、降水持续；③10/5 起雨止转晴+大降温，市区最低 15-16℃——毛衣/风衣备好。', meta: '穿搭指南', stat: '18~24℃ 中雨' },
  { name: '理财职场 · 假期第3天', desc: 'Stability AI 7600 万美元融资（三大唱片入股）；华为赛力斯五年战略合作升级问界；黄浦江推出科技主题游船：智能机器人互动+两岸夜景，打造科技感夜游新体验。', meta: '财经职场', stat: 'AI 融资热' },
  { name: '健康 · 中雨降温防感冒', desc: '今日中雨、湿度 66%~95%：带伞防滑、体感湿凉；10/4 冷空气携大风降温，10/5 起昼夜温差拉大（最低 15-16℃）——及时添衣防感冒；第 27 号台风"彩云"持续增强，返程路径继续关注。', meta: '健康提醒', stat: '降温添衣' }
]

const localCards = [
  { name: '上海天气 · 10月3日', desc: '中雨转小雨（东部南部局部可达中到大雨）。18~24℃，东北风2级。湿度66%~95%，空气质量优（实时 AQI 21）。日出05:49，日落17:38。今日降水较明显，傍晚到夜里雨势增强；10/4 受冷空气影响北风风力增大、降水持续；10/5 起雨止转晴并伴有大风和降温，市区最低降至 15-16℃、郊区更低。', meta: '今日天气', stat: '18~24℃ 中雨' },
  { name: '本地要闻', desc: '①秋日 B 计划游园会（Plan Bund）今日 13:00 起在杨浦滨江秀带广场开幕（10/3-5，免费免预约）；上海国际光影节持续至 10/16，黄浦江畔灯光璀璨、科技主题游船（智能机器人互动夜游）上新；泡泡玛特城市乐园嘉年华巡展·上海站（即日起至 11/1）。②上海网球大师赛嘉年华 10/1-4 旗忠网球中心"0元购"畅玩；国庆假期活力涌动、文旅消费火热。', meta: '上海资讯', stat: '游园会开幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期第 3 天，雨天也要开心 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月3日 星期六</span>
          <span>第 030 期</span>
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
          <h3>科技公司集体"卖萌"：AI 助手卡通化</h3>
          <p>为缓解公众对 AI 取代工作的担忧，OpenAI、Meta 给 AI 助手配上了可爱卡通形象；GitHub 上周 VoiceStudio 与 paperclip 双星暴涨破万。</p>
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
        <span>我的工作台 · 每日早报 · VOL.030</span>
      </footer>
    </div>
  )
}
