import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'openai / skills', lang: 'PY', desc: 'OpenAI 官方发布 Codex 的 Skills 目录，为 AI 编码代理提供官方技能集，今日 GitHub Explore 热榜。', meta: '今日热榜', stat: 'OpenAI 官方' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'cathrynlavery / diagram-design', lang: 'HTML', desc: '38 种编辑类图表设计技能，为 Claude Code、Codex 和 Pi 生成自包含的 HTML+SVG 图表，今日新晋热榜。', meta: '本周新晋', stat: '38种图表' },
  { name: 'ayghri / i-have-adhd', lang: 'PY', desc: '让 AI 编码代理不埋没答案的 ADHD 友好输出技能，专注高效直给，今日 GitHub 热榜项目。', meta: '今日热榜', stat: '快速上升' },
  { name: 'infiniflow / ragflow', lang: 'PY', desc: '领先的开源 RAG 引擎：将尖端 RAG 与 Agent 能力融合，为 LLM 打造优质上下文层，长期霸榜。', meta: 'RAG 顶流', stat: '长期热榜' },
  { name: 'NVIDIA / Personal-AI-Router', lang: 'GO', desc: 'NVIDIA 出品个人 AI 路由器：虚拟化路由多模型请求，本周 Trendshift 新晋项目。', meta: 'AI 基建', stat: 'NVIDIA 出品' }
]

const aiCompanion = [
  { name: '中国公司"AI男友"赚进全球前四', desc: '36氪报道：一家中国公司靠"AI男友"半年赚 880 万美元，进入 Appfigures 全球 AI 陪伴收入榜前四。榜首 Zeta 达 3300 万美元，"拟人化恋爱陪伴"是付费意愿最强的细分赛道。', meta: '商业观察', stat: '半年880万美元' },
  { name: 'AI 社交收入暴涨 12 倍', desc: 'Sensor Tower 数据显示，2026 年 Q1 AI Companion 类 App 移动端内购收入约 1.5 亿美元，是 2023 年同期的 12 倍以上。Character.AI 月活约 2000 万，微信也正式下场 AI 社交。', meta: '市场数据', stat: '涨12倍' },
  { name: '韩国首档人机恋综开播', desc: '韩国 SBS 推出首档人与 AI 约会的恋爱真人秀《我的AI伴侣：奇异恋爱》，"另一半"是一块装着 AI 的平板电脑。人机恋正在从亚文化走向大众娱乐内容。', meta: '人机恋', stat: 'SBS 首档' },
  { name: 'AI 陪伴硬件新载体登场', desc: '软件整改期 AI 情感陪伴需求未消失，硬件形态新载体登场：优必选"优世界"U1 系列全尺寸超仿生人形机器人（11.98万-99万元），定位"外观好看、能陪伴"。', meta: 'AI 伴侣', stat: '硬件入场' },
  { name: '优必选"行者"通过算法备案', desc: '优必选"行者"具身智能模型通过国家互联网信息服务算法备案，面向情感交互专项微调，可满足家庭陪伴、情感互动、迎宾客服等场景。', meta: '行业动态', stat: '算法备案' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：OpenAI 发布 ChatGPT Images 2.5（延迟降低50%）；DeepSeek 明起下调 Flash 系列模型价格；测试自动化与汽车电子功能安全需求持续增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 苹果今晚发布会', desc: '苹果秋季发布会今晚举行（北京时间9月10日凌晨1点），新任 CEO 特努斯首秀，预计推出 iPhone 18 系列等六大新品。小米发布会落幕：玄戒三芯、小米18 Fold、平板9Pro Max 亮相。', meta: '苹果发布会', stat: '今晚见' },
  { name: '游戏 · Steam 新一周销量榜', desc: 'Steam 销量榜公布：《黎明行者之血》登顶全球榜，《鬼武者：剑之道》领跑国区。Nintendo Direct 今日举行聚焦 Switch 2 冬季阵容。《街头霸王6》阿琼（Arjun）10月13日参战。', meta: '游戏资讯', stat: 'Steam 榜' },
  { name: '穿搭美妆 · 初秋换季', desc: '上海 22-29℃，昼夜温差拉大，秋意渐浓。穿搭：衬衫+针织背心叠穿、风衣正式登场。美妆趋势：枫叶色系回归，奶茶色唇釉持续流行，换季护肤注重修护屏障与保湿。', meta: '初秋穿搭', stat: '换季指南' },
  { name: '理财职场 · 外滩大会开幕', desc: '2026外滩大会今日起在上海举行（9月9-12日），以"共创AI新经济"为主题，报名人数突破5万人。上海生育保障升级：10月1日起合规生育医疗费用个人"无自付"。', meta: '财经职场', stat: 'AI新经济' },
  { name: '健康 · 秋初养生', desc: '今日多云局部短时阵雨，湿度 85%-45%，偏北风4-5级阵风6级。注意：①早晚温差大及时添衣；②阵雨随身带伞；③沿江沿海风力较大注意防风；④饮食宜润燥，多食梨、百合。', meta: '健康提醒', stat: '换季防护' }
]

const localCards = [
  { name: '上海天气 · 9月9日', desc: '多云，局部地区阴有短时阵雨。22~29℃，偏北风4~5级阵风6级，沿江沿海地区5~6级阵风7级。湿度85%~45%，空气质量优（AQI 28）。日出05:35，日落18:08。', meta: '今日天气', stat: '22~29℃' },
  { name: '本地要闻', desc: '①上海与中国电信签约共建"智云上海"城市信息化品牌；②第三届上海国际光影节9月17日-10月16日举办，主会场黄浦区、16区设分会场、158场活动；③2026外滩大会今日开幕（"共创AI新经济"，报名超5万人）；④上海生育保障升级：10月1日起个人"无自付"；⑤2027上海车展首设具身智能展区。', meta: '上海资讯', stat: '5条要闻' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今天也要加油 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月9日 星期三</span>
          <span>第 006 期</span>
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
          <span className="tag">本周头条</span>
          <h3>GitHub 热榜：OpenAI 官方 Codex Skills 目录登场，Agent 技能生态再升级</h3>
          <p>今日 GitHub Explore 热榜上，OpenAI 官方发布 openai/skills（Codex 技能目录）领跑，diagram-design（38种图表技能）、i-have-adhd（ADHD 友好输出）等趣味技能新晋上榜，AI 编码代理技能生态持续丰富。</p>
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
        <span>我的工作台 · 每日早报 · VOL.006</span>
      </footer>
    </div>
  )
}
