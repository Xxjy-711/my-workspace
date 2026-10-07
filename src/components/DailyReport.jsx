import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'DietrichGebert / ponytail', lang: 'JavaScript', desc: '日增长榜第 1（10/7 数据，155.8K★）：JS 生态热门项目，今日增星势头最猛。', meta: '日增榜首', stat: '155.8K★' },
  { name: 'mvschwarz / openrig', lang: '多语言', desc: '今日 +2,209★：OpenRig 是本地控制层，把 Claude Code 和 Codex 会话跑成"持久团队"。', meta: 'Agent 团队', stat: '今日+2.2K' },
  { name: 'obra / superpowers', lang: '多语言', desc: '今日 +2,192★（累计 295.6K★）：编码 Agent 的开发方法论技能包，给 AI 装上"超级技能"。', meta: 'Agent 技能', stat: '295.6K★' },
  { name: 'vectorize-io / hindsight', lang: '多语言', desc: '今日 +2,014★（45.9K★）：AI Agent 的记忆服务器——存储事实与经验、按需检索相关材料。', meta: '记忆服务', stat: '45.9K★' },
  { name: 'cc-switch', lang: 'Rust', desc: '跨平台桌面 All-in-One 助手：统一管理 Claude Code、Codex、OpenCode、OpenClaw、Grok Build 与 Hermes Agent，140K 星。', meta: '桌面助手', stat: '140K★' },
  { name: 'AstrBot', lang: 'Python', desc: 'AI Agent 助手与开发框架：集成大量 IM 平台、LLM、插件与 AI 功能，可作 OpenClaw 的替代方案，41.2K 星。', meta: 'Agent 框架', stat: '41.2K★' }
]

const aiCompanion = [
  { name: 'OpenAI 四连更：API 最高档付费砍半、Auto-review 全面免费', desc: '新浪财经 10/7：28 天计划持续兑现——继 GPT-6 提速 50% 后，API 最高档付费砍半、Auto-review 全面免费，连续 4 天每天一更。', meta: '产品更新', stat: '四连更' },
  { name: '可灵 AI 要赴港上市', desc: '观察者网/华商网 10/7：快手旗下可灵 AI 已选定中金、高盛、瑞银作为承销商，计划未来 12 个月内启动港股上市程序、预计 2027 年初递表，至少募资 10 亿美元。', meta: '资本重磅', stat: '至少募资10亿$' },
  { name: '月之暗面估值 500 亿美元 + Claude 中文版上线', desc: '观察者网硬科技早报 10/7：月之暗面估值达 500 亿美元；Claude 中文版正式上线，国产 AI 与海外巨头同台竞技加速。', meta: '行业动态', stat: '估值500亿$' },
  { name: '美国西南航空上线 ChatGPT 插件', desc: '财联社 10/7：西南航空与 OpenAI、AWS 合作，上线 ChatGPT 插件——用户可直接在 ChatGPT 内查询、选购西南航空航班。', meta: 'AI 落地', stat: 'ChatGPT 订票' },
  { name: 'OpenAI 发布前沿大模型数学能力测试新成果', desc: '财联社 10/7：OpenAI 发布针对前沿大模型的全新数学能力测试成果，评测体系再升级。', meta: '模型评测', stat: '数学能力' },
  { name: '节后 A 股 AI 修复窗口预期', desc: '每经微博 10/7：美光财报超预期、韩国 9 月出口增长提振情绪；OpenRouter 数据显示国产大模型贡献重要 Token 增量——节后 A 股 AI 板块有望迎来修复窗口。', meta: '资本市场', stat: '修复窗口' }
]

const lifeCards = [
  { name: '数码科技 · OpenAI 连续四天更新', desc: 'OpenAI 28 天计划四连更：API 最高档付费砍半、Auto-review 全面免费；可灵 AI 拟赴港上市（至少 10 亿美元）；月之暗面估值 500 亿美元；西南航空上线 ChatGPT 插件可订票。', meta: '数码资讯', stat: 'AI 资本大年' },
  { name: '游戏文娱 · 假期收官指南', desc: '谢娜主演话剧《十三角关系》上海站今日最后一场（美罗城上剧场）；故宫帝后服饰展今日最后一天（101 件织绣文物离沪回京）；劳力士大师赛激战正酣；木偶艺术周持续至假期后。', meta: '文娱资讯', stat: '今日收官多场' },
  { name: '穿搭美妆 · 寒露节气穿搭', desc: '今日寒露+晴到多云 15~26℃：①今晨气温近期谷底（市区 15℃、崇明等远郊或跌破 10℃）；②白天升温给力（最高 25-26℃）、昼夜温差超 10℃；③空气干燥（湿度 35%-80%）——洋葱式叠穿、注意补水润燥。', meta: '穿搭指南', stat: '15~26℃ 温差大' },
  { name: '理财职场 · 假期收官日', desc: '可灵 AI 拟赴港上市（承销商中金/高盛/瑞银）；节后 A 股 AI 修复窗口预期升温；OpenAI 300 亿美元融资推进中、API 定价再调整。', meta: '财经职场', stat: '港股IPO潮' },
  { name: '健康 · 寒露养生', desc: '今日寒露：空气干燥（湿度低至 35%）注意补水润燥；昼夜温差超 10℃、早晚寒意明显，洋葱式穿衣防感冒；返程高峰人潮密集，注意个人防护与休息。', meta: '健康提醒', stat: '寒露润燥' }
]

const localCards = [
  { name: '上海天气 · 10月7日', desc: '晴到多云（今日寒露）。15~26℃，西北风3~4级。湿度35%~80%（空气干燥）。AQI 良（实时 74，下午预报 85-105 良到轻度污染，首要污染物 O3）。日出05:51，日落17:33。今晨气温近期谷底（市区 15℃、崇明等远郊或跌破 10℃），白天升温给力、昼夜温差超 10℃；明日多云转暖（18~26℃）。', meta: '今日天气', stat: '寒露 15~26℃' },
  { name: '本地要闻', desc: '①返程最高峰今日到来：虹桥枢纽预计单日到达 44.3 万人次，长三角铁路预计发送旅客 415 万人次（同比 +17.7%，增开 557 列）；G40 长江隧桥预计 15 万辆车通行，崇明/浦东公安联动保障；上海地铁 1/2/10/17 号线今晚加开夜间定点加班车。②故宫帝后服饰展今日最后一天（101 件织绣文物将离沪回京）；谢娜主演《十三角关系》上海站收官；劳力士大师赛激战正酣（10/5-18）。', meta: '上海资讯', stat: '返程最高峰' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期最后一天，寒露至、返程顺 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月7日 星期三</span>
          <span>第 034 期</span>
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
          <h3>OpenAI 四连更：API 付费砍半、Auto-review 免费</h3>
          <p>28 天计划持续兑现；可灵 AI 拟赴港上市，GitHub 上 Agent 生态项目集体走高。</p>
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
        <span>我的工作台 · 每日早报 · VOL.034</span>
      </footer>
    </div>
  )
}
