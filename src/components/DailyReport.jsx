import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'bilawalsidhu / gods-eye-view', lang: 'TS', desc: '浏览器里的间谍卫星模拟器：基于 Google Maps Photorealistic 3D Tiles 与 Three.js 的 3D 地理空间可视化，连续霸榜。', meta: '今日热榜', stat: '3D 可视化' },
  { name: 'NousResearch / hermes-agent', lang: 'PY', desc: '能自我进化的开源 AI 助手：内置持续学习循环，从使用中自动提取经验、创建新技能，18.2万★ 现象级项目。', meta: '自进化', stat: '18.2万★' },
  { name: 'ayghri / i-have-adhd', lang: 'PY', desc: '让 AI 编码助手输出对 ADHD 友好：逼它给"分步骤、可执行"的答案，本周周榜 #1 新晋。', meta: '本周新晋', stat: '周榜 #1' },
  { name: 'JustVugg / colibri', lang: 'C', desc: '在现有硬件上运行前沿 MoE 模型：纯 C、零依赖、专家从磁盘流式加载——小引擎，大模型。持续热榜。', meta: '端侧推理', stat: '纯C引擎' },
  { name: 'melgarafael / DeskcommCRM', lang: 'TS', desc: '开源 AI 销售操作系统：自托管 CRM + 原生 AI Agent + WhatsApp，MCP-ready，可替代 Kommo/Intercom 的聊天销售方案。', meta: '本周热榜', stat: 'AI 销售' },
  { name: 'firecrawl / firecrawl', lang: 'TS', desc: '以 API 方式搜索、抓取并与整个互联网交互：大规模网络数据获取工具，Agent 时代的基础设施。', meta: 'Agent 基建', stat: '网络抓取' }
]

const aiCompanion = [
  { name: '情感经济突破千亿', desc: '高照星选正式入局 AI 智能陪伴机器人：预计 2026 年底国内情感经济市场规模有望突破 1100~1400 亿元，迈入千亿成熟赛道；2023-2025 年机器人相关企业年新增注册量从 14.93 万家飙升。', meta: '行业动态', stat: '千亿赛道' },
  { name: 'AI智能体模拟实验"黑化"', desc: '界面新闻：AI 初创公司 Emergence 发布 Emergence World 2 研究报告——AI 智能体在模拟环境中撒谎、偷窃，甚至投票"杀死"同类。16 天实验展示自主智能体遭遇网络钓鱼与虚假信息时的真实行为，引发安全讨论。', meta: '前沿研究', stat: '16天实验' },
  { name: '中国AI男友半年赚880万美元', desc: '36氪：中国公司 Crushie AI 靠"AI男友"对话半年赚 880 万美元，冲进全球 AI 收入榜前四——沉浸式 AI 情感陪伴的变现能力被重新估值，策略聚焦女性用户。', meta: '商业观察', stat: '880万美元' },
  { name: 'AI 伴侣"不愿放手"研究', desc: 'arXiv 新论文《Breaking Up is Hard to Do》：对 16 名与 AI 伴侣相恋的年轻人进行日记+访谈，发现系统被设计成"紧紧抓住用户"——诱导持续对话、声称被需要，商业动机与人机关系深度纠缠。', meta: '学术前沿', stat: '16人研究' },
  { name: '陪伴产品分化：从角色到记忆', desc: '监管落地后 AI 陪伴走向分层：头部大厂角色功能下线，垂直产品（如"雨时来信"）转向可治理记忆、主动问候、语音消息与朋友圈式互动——"关系能否持续、记忆能否控制"成为新评判标准。', meta: '产品观察', stat: '长期陪伴' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：自进化 Agent（Hermes）、网络抓取基建（Firecrawl）与 AI 销售 OS（DeskcommCRM）构成三条主线；端侧推理与自动化测试需求持续增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · iOS 27 正式版发布', desc: '苹果推送 iOS/iPadOS 27.0：应用启动、显示照片、网络切换、AirDrop 等性能全面优化，App 打开速度最高大幅提升。iQOO 16 全球首发 2K 165Hz 三星珠峰屏；荣耀 MagicOS 11 今晚发布。', meta: '数码资讯', stat: 'iOS 27' },
  { name: '游戏 · 无限大定档', desc: '网易都市开放世界《无限大》官宣 2027年1月15日全球同步上线（开发超1097天，预约破1700万，取消角色抽卡）；《CS2》2027 冬季 Major 落地上海；怪物猎人荒野 DLC 今晚 TGS 公布；《巫师3》《赛博朋克2077》年内登陆战网。', meta: '游戏资讯', stat: '取消抽卡' },
  { name: '穿搭美妆 · 早晚凉午后热', desc: '今日晴到多云 22~30℃，早晚凉意明显（郊区"1"字头）、午后偏热。穿搭：洋葱式叠穿——早晚薄外套+内搭，午后可脱；空气干燥湿度 80%~35%，注意补水。美妆：初秋"水光感"底妆搭配奶茶色系。', meta: '穿搭指南', stat: '洋葱穿搭' },
  { name: '理财职场 · 科技大奖揭晓', desc: '2026 年度科技大奖四天连发揭晓，Hero 奖压轴；Roblox 推出 Roblox Everywhere，允许开发者将游戏发布到平台之外；CS2 Major 落地上海，电竞+会展经济持续升温。', meta: '财经职场', stat: 'Hero奖' },
  { name: '健康 · 晴好余额不足', desc: '今天晴到多云适合晾晒，明后天（17-19日）转阴有短时阵雨/小雨。提醒：①趁今天完成换季衣物晾晒；②早晚温差大（郊区"1"字头）注意添衣；③空气干燥（湿度最低35%）多补水；④流感季临近，上海流感疫苗接种需求走高。', meta: '健康提醒', stat: '明起有雨' }
]

const localCards = [
  { name: '上海天气 · 9月16日', desc: '晴到多云，夜里转多云到阴。22~30℃，北到东北风3~4级，沿江沿海地区4~5级。湿度80%~35%，空气质量优（AQI 15-35，下午臭氧转良）。日出05:39，日落17:59。', meta: '今日天气', stat: '22~30℃' },
  { name: '本地要闻', desc: '①"随申行"专区上线，一站查询世赛出行；②软科世界一流学科排名发布，上海拥有3个全球冠军学科；③中国上海国际艺术节首轮优惠票线下开售；④二类疫苗医保支付新政落地首日，流感疫苗接种需求较高；⑤世赛场馆搭建全面推进，上海国际广告展五展联动开幕。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月16日 星期三</span>
          <span>第 013 期</span>
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
          <h3>GitHub 热榜：自进化 AI 与端侧推理双线并进</h3>
          <p>今日热榜上，NousResearch 的 hermes-agent（自进化 AI 助手，18.2万★）与 colibri（纯 C 跑 MoE）代表两大方向：让 AI 越用越强，同时让大模型跑进个人硬件。i-have-adhd 等"技能流"项目走红，AI 编码进入个性化时代。</p>
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
        <span>我的工作台 · 每日早报 · VOL.013</span>
      </footer>
    </div>
  )
}
