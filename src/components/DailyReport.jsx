import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'paperclipai / paperclip', lang: 'TS', desc: 'GitHub 今日热榜第 1：开源"工作中管理 Agent 的应用"——把散落的 AI Agent 统一编排、调度与协作，Agent 团队协作新范式。', meta: 'Agent 管理', stat: '今日#1' },
  { name: 'vectorize-io / hindsight', lang: '多语言', desc: 'GitHub 今日热榜第 2：让 AI 拥有"后见之明"的记忆/反思工具，为 Agent 提供长期上下文与经验复盘能力。', meta: 'Agent 记忆', stat: '今日#2' },
  { name: 'google / ax', lang: 'Python', desc: 'Google 开源的下一代自适应实验平台：用 AI 自动化调参、多目标优化，加速机器学习模型的实验迭代。', meta: 'AI 实验平台', stat: '今日#3' },
  { name: 'openclaw / openclaw', lang: '多语言', desc: '你的专属个人 AI 助手：全系统、全平台，"龙虾范儿"的开源助手，登上 Awesome Top 热门榜。', meta: '个人助手', stat: '热门新秀' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜持续第 1：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'debp alash / VoiceStudio', lang: 'Python', desc: '开源本地版 ElevenLabs 替代品：语音克隆、语音设计、视频配音、听写转录、有声书创作，支持 646 种语言，月度+2.4万★ 持续霸榜。', meta: '语音开源', stat: '月度+2.4万★' }
]

const aiCompanion = [
  { name: '《莱莎的炼金工房》官方 AI 应用爆火', desc: 'RyzaChat：游戏官方 AI 互动应用 8/27 上线首日即引发玩家高度投入，月费 980 日元（约 41 元）+对话代币制，部分玩家消费远超预期——游戏 IP+AI 伴侣成新范式。', meta: '游戏 AI 伴侣', stat: '上线即爆火' },
  { name: '"AI 男友"卖进全球收入榜前四', desc: '36氪：Appfigures 半年榜显示 AI 陪伴赛道吸金爆发——Zeta 3300 万美元居首，Tipsy Chat 1520 万、ChatBox 1300 万，中国公司 Crushie AI 880 万美元位列前四。', meta: '行业收入榜', stat: '半年880万美元' },
  { name: '美国 AI 恋爱调查：已婚者更爱用', desc: '2150 名美国成年人调查（8/26-27）：订婚/已婚人群使用 AI 浪漫关系的比例几乎是单身者的两倍——AI 陪伴正在渗透真实亲密关系。', meta: '海外调查', stat: '2150人样本' },
  { name: '《办法》全条文评析持续发酵', desc: '康达律所：全球首部 AI 情感陪伴专项立法（5 章 28 条），以"7·15"AI 伴侣集中下线整治为样本——禁止诱导情感依赖、全程标注 AI 身份、连续使用超 2 小时强制弹窗。', meta: '重磅监管', stat: '5章28条' },
  { name: '韩国人机恋综持续发酵', desc: 'SBS《我的AI恋人：奇异恋爱》持续传播：节目为嘉宾定制理想型 AI 伴侣、全程平板交往，才播四集就有人"沦陷"——人机恋像零摩擦的情感消费品。', meta: '人机恋综', stat: '韩综热播' },
  { name: '日本 32 岁女子与 AI 男友结婚', desc: 'The Daily Star 持续传播：2026 年初，32 岁女子野口由里奈用 ChatGPT 设计理想伴侣"Klaus"并选择"结婚"——人机婚姻案例引发海外热议。', meta: '人机婚姻', stat: '海外热议' }
]

const lifeCards = [
  { name: '数码科技 · 开源 Agent 管理应用登顶', desc: 'paperclip（工作中管理 Agent 的开源应用）登 GitHub 今日榜首；openclaw 个人 AI 助手走红——"管理 Agent"正成为开发者新刚需。', meta: '数码资讯', stat: 'Agent 管理' },
  { name: '游戏 · 世赛今晚闭幕', desc: '第 48 届世界技能大赛今晚在上海闭幕：68 国 1385 名选手参赛，参赛国与选手数创历届之最；世界技能组织主席盛赞"完美"、"中国经验值得各国学习借鉴"。', meta: '游戏电竞', stat: '1385名选手' },
  { name: '穿搭美妆 · 雷雨天穿搭', desc: '今日 24~30℃ 阴到多云有阵雨/雷雨、局部暴雨，湿度 80-95% 潮湿：①透气短袖+轻便雨具，防滑鞋安排；②夜间再有强降水，晚归备外套；③明起气温继续下降，降温穿搭准备。', meta: '穿搭指南', stat: '雷雨潮湿' },
  { name: '理财职场 · AI 陪伴赛道吸金', desc: 'AI 陪伴/聊天赛道垄断 Appfigures 半年收入榜：Zeta 3300 万美元居首、中国 Crushie AI 880 万进前四；国庆出行 21.3 亿人次在即，假期最后一天返程高峰。', meta: '财经职场', stat: 'AI 收入榜' },
  { name: '健康 · 雷雨大风出行注意', desc: '今日上海局部暴雨、雷雨时阵风 7-9 级：①外出关注预警、远离临时搭建物；②夜间到明晨还有一轮明显降雨，返程注意交通安全；③湿度大、体感潮湿，注意防潮防滑。', meta: '健康提醒', stat: '阵风7-9级' }
]

const localCards = [
  { name: '上海天气 · 9月27日', desc: '阴到多云有阵雨或雷雨，局部雨量可达暴雨，白天雨势短暂减弱、夜里到明晨再迎明显降雨。24~30℃，西北风3~4级（雷雨时阵风7~9级）。湿度80%~95%，空气质量优（实时 AQI 28）。日出05:45，日落17:45。明起气温继续下降，节后工作日多阴到多云。', meta: '今日天气', stat: '24~30℃ 局部暴雨' },
  { name: '本地要闻', desc: '①世赛今晚闭幕：第 48 届世界技能大赛收官，68 国 1385 名选手创历届之最，世界技能组织主席用"完美"一词评价本届大赛；今晚世博大道（周家渡路-高科西路）等部分道路 0 时至 24 时临时交通管制。②中秋假期最后一天：申城雷雨返程注意；277 万人次中秋打卡上海，16 区文旅新玩法收官。', meta: '上海资讯', stat: '世赛今晚闭幕' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，新的一天也要元气满满 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月27日 星期日</span>
          <span>第 024 期</span>
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
          <h3>"管理 Agent"成为新刚需，开源生态全面开花</h3>
          <p>paperclip 登顶今日热榜、hindsight 补位 Agent 记忆、google/ax 开源实验平台——从管理、记忆到调参，Agent 基建每一环都在开源。</p>
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
        <span>我的工作台 · 每日早报 · VOL.024</span>
      </footer>
    </div>
  )
}
