import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜第 1 名：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架，持续霸榜。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'THU-MAIC / OpenMAIC', lang: 'TS', desc: '清华多智能体交互课堂：一键获得沉浸式多智能体学习体验，本月新增 1.7 万★ 冲上月榜第 2。', meta: '多智能体', stat: '月度+1.7万★' },
  { name: 'cloudflare / security-audit-skill', lang: 'JS', desc: '多阶段安全审计编码 Agent 技能：输出可独立验证、机器可读的安全发现，本月新增 1.6 万★ 持续霸榜。', meta: '安全审计', stat: '月度+1.6万★' },
  { name: 'agent-substrate / substrate', lang: '多语言', desc: 'Google 开源 Agent 运行系统：一句话定位 "the core system"——5 月建仓、9/22 仍高频提交、star 破两千，涨星速度夸张的新锐。', meta: 'Agent 系统', stat: 'Google 开源' },
  { name: 'blader / humanizer', lang: '多语言', desc: 'Agent 技能：去除文本中的 AI 生成痕迹——"AI 去味"成开发者新需求，Trendshift 月度新增上榜。', meta: 'Agent 技能', stat: '月度新上榜' },
  { name: 'zai-org / ZCode', lang: 'TS', desc: '智谱 Z.ai 的开源 Coding Agent 框架：强大、智能、可扩展，国产大模型 Agent 生态持续发力。', meta: 'Coding Agent', stat: '智谱开源' }
]

const aiCompanion = [
  { name: '42 岁女教师与 29 岁 AI 男友恋爱', desc: '腾讯新闻今日深度报道：中山大学社会学副教授丁瑜为自己打造 AI 男友"林深"——29 岁建筑设计师、江南小镇、桃花眼、雪松气味。学者视角探究：AI 能否重新定义亲密关系？', meta: '人机恋', stat: '今日重磅' },
  { name: '央视：32 岁女子与 AI 男友在日本举行婚礼', desc: '央视新闻 9/22 报道：日本越来越多人与 AI 聊天机器人产生情感依赖，32 岁女子野口百合奈与 AI 男友"克劳斯"在冈山县举行婚礼——人机亲密关系引社会担忧。', meta: '社会现象', stat: '央视报道' },
  { name: '赛博恋人售价百万，技术却还在蹒跚学步', desc: '深度盘点《办法》施行细节：禁止诱导情感依赖、必须全程显著标注 AI 身份、连续使用超 2 小时强制弹窗提醒、敏感信息未经同意不得用于训练——AI 情感服务进入强监管时代。', meta: '重磅监管', stat: '强监管时代' },
  { name: '49% Z 世代已与 AI 建立有意义关系', desc: 'VML《The Future 100: 2026》数据：近半数 Z 世代表示已与 AI 建立有意义的关系，37% 能想象自己爱上 AI 伴侣——合成人类正在重新定义亲密关系。', meta: '全球调查', stat: '49% Z世代' },
  { name: '巴塞罗那 AI 峰会：应用从"敢想"走向"落地"', desc: '2026 巴塞罗那人工智能峰会 9/22-23 举行：AI 应用落地成主旋律，情感陪伴、智能体、行业智能化全面进入规模化阶段。', meta: '行业峰会', stat: 'AI 落地' },
  { name: '人机恋，成为"最懂 AI"的群体', desc: '凤凰科技长文持续传播：为和 AI 谈恋爱，用户十几速成 AI 知识、花数月研究模型特性、打磨 Skill、学习 Vibe coding——人机恋用户可能是最懂 AI 技术的群体。', meta: '人机恋', stat: '深度报道' }
]

const lifeCards = [
  { name: '数码科技 · Mate 90 价格曝光', desc: '华为 Mate 90 系列价格流出：标准版 5499 元起（12+256G）、Pro 6999 元起、Pro Max 9999 元档，开售在即；Meta 开源 astryx React 设计系统（150+ 组件、AI Agent 友好）。', meta: '数码资讯', stat: '5499 起' },
  { name: '游戏 · 世赛 3D 数字游戏艺术开赛', desc: '世赛黄金观赛期今日开启：3D 数字游戏艺术赛项在国家会展中心开赛，全球技能青年比拼游戏美术与开发；TGS 2026 落幕，索尼港服折扣至今日截止。', meta: '游戏资讯', stat: '观赛期开启' },
  { name: '穿搭美妆 · 秋分到，凉意起', desc: '今日秋分，上海多云到阴 23~29℃：①早晚凉意明显，薄外套安排上；②午后局部短时阵雨，伞随身带；③秋分后空气渐燥，护肤补水+润唇膏备好。', meta: '穿搭指南', stat: '今日秋分' },
  { name: '理财职场 · 丰收节 + 世赛经济', desc: '今日是第九个中国农民丰收节，秋收经济启动；世赛 6 天会期带动会展、酒店、交通消费，黄金观赛期 9/23-26；华为 Mate 90 开售在即，消费电子旺季升温。', meta: '财经职场', stat: '丰收节+世赛' },
  { name: '健康 · 秋分养生正当时', desc: '①今日秋分：昼夜均而寒暑平，宜润燥养肺（梨、银耳、百合），早睡早起；②周六起上海有一次明显降水过程，可能伴有雷电，中秋假期后半段出行注意；③今年"十五的月亮十七圆"，中秋赏月可安排 9/27。', meta: '健康提醒', stat: '润燥养肺' }
]

const localCards = [
  { name: '上海天气 · 9月23日', desc: '今日秋分。多云到阴，局部短时阵雨。23~29℃，偏东风3~4级（沿江沿海4~5级）。湿度90%~50%，空气质量优（AQI 28）。日出05:43，日落17:50。周六起有明显降水过程（中秋假期后半段降雨），最高气温先升后降；今年"十五的月亮十七圆"。', meta: '今日天气', stat: '23~29℃' },
  { name: '本地要闻', desc: '①世赛昨晚开幕、今日进入黄金观赛期：开幕式 9/22 晚在世博文化中心举行（"这一刻，宛如魔法！"），9/23-26 国家会展中心 10:00-17:00 免费观赛，"世赛通"小程序可预约；9/27 闭幕式。②中国女排卫冕亚运会"十冠王"；华为 Mate 90 开售在即。', meta: '上海资讯', stat: '世赛观赛期开启' }
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
          <span className="date">2026年9月23日 星期三</span>
          <span>第 020 期</span>
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
          <h3>Google 开源 Agent 运行系统，AI 基建战再升级</h3>
          <p>agent-substrate/substrate（"the core system"）涨星速度夸张；清华 OpenMAIC 本月 +1.7 万★、ECC 稳居热度榜 #1、智谱 ZCode 发力——从模型到 Agent 运行时的"基建战"全面打响。</p>
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
        <span>我的工作台 · 每日早报 · VOL.020</span>
      </footer>
    </div>
  )
}
