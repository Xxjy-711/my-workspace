import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'debpalash / VoiceStudio', lang: 'PY', desc: '开源 ElevenLabs 替代品：语音克隆、语音设计、视频配音，支持 646 种语言。', meta: '本周热榜', stat: '快速上升' },
  { name: 'deepseek-ai / deepseek-harness', lang: 'TS', desc: 'Everything is a Plugin 架构，基于插件的 AI 编程框架。', meta: 'LLM 顶流', stat: '208k★' },
  { name: 'K-Dense-AI / scientific-agent-skills', lang: 'PY', desc: '把任何 AI Agent 变成 AI 科学家，#1 Agent Skills 项目。', meta: '本周热榜', stat: '37.9k★' },
  { name: 'Imbad0202 / academic-research-skills', lang: 'PY', desc: 'Claude Code 学术研究技能：研究→写作→审稿→修订→定稿全流程。', meta: '本周热榜', stat: '上升中' },
  { name: 'google-research / timesfm', lang: 'PY', desc: 'Google 时序预测模型，基于深度学习的开源时序预测工具。', meta: 'AI 顶流', stat: 'Google 出品' },
  { name: 'ollama / ollama', lang: 'GO', desc: '本地一键跑大模型：DeepSeek、Qwen、GLM、Kimi 等，新手最友好。', meta: 'LLM 顶流', stat: '180k★' }
]

const aiCompanion = [
  { name: 'AI 伴侣监管落地', desc: '《人工智能拟人化互动服务管理暂行办法》7月15日正式实施，AI不得诱导情感依赖，连续使用超2小时须提醒，未成年人禁用虚拟伴侣服务。', meta: '人机恋', stat: '新规施行' },
  { name: '赛博伴侣百万售价', desc: '优必选推出 U1 系列全尺寸超仿生人形机器人，定价 11.98万-99万元，男款"霸总"一米八三，女款可自定义妆容。', meta: 'AI伴侣', stat: '11.98万起' },
  { name: '海信发布 AI 伴侣套系', desc: 'IFA 2026 上海信发布 AI 伴侣套系，加速从智能设备到智能伴侣升级，家电产品开始具备情感交互与主动陪伴能力。', meta: '行业动态', stat: 'IFA 2026' },
  { name: '全球 AI 伴侣市场爆发', desc: '全球 AI 伴侣市场预计从 2025 年 377.3 亿美元增长到 2034 年 4359 亿美元，Replika、小冰、Gatebox 等持续扩展。', meta: '市场预测', stat: '11.5倍增长' },
  { name: '智能体下线用户"丧偶"', desc: '7月豆包、千问智能体功能下线，许多与 AI 建立深厚情感连接的用户经历"赛博丧偶"，凸显人机情感关系的脆弱性。', meta: '用户故事', stat: '情感冲击' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：Python 生态持续向 AI 工程倾斜，测试自动化与汽车电子功能安全（ISO 26262）需求增长，车载 SOA 架构成为行业热点。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 9月旗舰扎堆', desc: 'iPhone 18 Pro/Ultra（9月10日，2nm A20 Pro芯片，首款折叠屏）、华为Mate XT2三折叠（9月7日，17999起）、华为Mate90系列（9月23日，麒麟9050）、小米18系列、vivo X500、OPPO Find X10 集体登场。', meta: '9月发布季', stat: '22款新机' },
  { name: '游戏 · 仙剑世界更新', desc: '《仙剑世界》9月3日版本更新，仙剑IP最新力作，江南全景+磅礴仙侠世界。《仙剑奇侠传3D回合怀旧版》9月4日更新，8年情怀回归。', meta: '仙剑系列', stat: '持续更新' },
  { name: '穿搭美妆 · 入秋换季', desc: '上海气温26-31℃，早晚微凉。初秋穿搭推荐：薄针织开衫+吊带内搭，风衣开始登场。美妆趋势：秋季奶茶色系眼影、哑光唇釉回归。', meta: '初秋穿搭', stat: '换季指南' },
  { name: '理财职场 · 养老金', desc: '截至9月5日，上海2026年退休人员养老金调整正式文件尚未发布，网传上涨表格、定额金额均非官方。建议关注上海市人社局官方渠道。', meta: '民生关注', stat: '待官方发布' },
  { name: '健康 · 换季提醒', desc: '上海今日湿度89%，阵雨频繁，气温波动大。注意：①出门带晴雨伞；②空调温度别太低，避免感冒；③沿江沿海阵风6-7级，注意防风。', meta: '健康提醒', stat: '换季防护' }
]

const localCards = [
  { name: '上海天气 · 9月5日', desc: '多云转阵雨，26~31℃，东北风4-5级，沿江沿海阵风6-7级。湿度89%，空气质量优（AQI 22）。日出05:32，日落18:13。出门请带晴雨伞。', meta: '今日天气', stat: '26~31℃' },
  { name: '本地要闻', desc: '①朱忠明任上海市副市长、代理市长；②第37届上海旅游节9月开启，推出170余项文旅活动；③2026浦江创新论坛9月11-14日举办；④东金线轮渡9月12日提前至17:00收渡。', meta: '上海资讯', stat: '4条要闻' }
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
          <span className="date">2026年9月5日 星期六</span>
          <span>第 002 期</span>
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
          <div className="stat-value">8</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">生活板块</div>
          <div className="stat-value">5</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">本地资讯</div>
          <div className="stat-value">2</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">更新时间</div>
          <div className="stat-value">10:00</div>
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
          <h3>GitHub 热榜：开源语音克隆与 AI Agent 技能生态爆发</h3>
          <p>本周 GitHub Trending 上，VoiceStudio（开源 ElevenLabs 替代品，支持 646 种语言）与 deepseek-harness（208k★，Everything is a Plugin 架构）领跑，AI 语音与 Agent 技能成为最热方向。</p>
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
        <span>我的工作台 · 每日早报 · VOL.002</span>
      </footer>
    </div>
  )
}
