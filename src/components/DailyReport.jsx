import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'THU-MAIC / OpenMAIC', lang: 'TS', desc: '清华开源多智能体互动课堂：上传资料一键生成可提问、可练习、可聊改的课程，本周 +10.1k★，总计 32.2k★，本周开源周榜明星。', meta: '本周热榜', stat: '+10.1k★' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor，AI 热度榜 #1。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'debpalash / VoiceStudio', lang: 'PY', desc: '开源的本地版 ElevenLabs：语音克隆、语音设计、视频配音、听写转录与有声书创作，支持 646 种语言，本月新晋项目。', meta: '语音 AI', stat: '646种语言' },
  { name: 'lobehub / lobehub', lang: 'TS', desc: '你的 AI 团队首席 Agent 运营官：招募、调度、汇报你的整个 AI 团队，7×24 小时自动化运营，长期热榜。', meta: 'Agent 运营', stat: '7×24' },
  { name: 'mattpocock / skills', lang: 'MD', desc: '让 AI 先问对问题再写代码：给编码代理装上"需求澄清"技能，避免在模糊需求上建错东西，今日 +2.8k★。', meta: '今日新晋', stat: '+2.8k★' },
  { name: 'DietrichGebert / ponytail', lang: 'JS', desc: '阻止 AI 把小修复变成新框架：一组指令让 AI 编码代理优先复用现有代码，今日 +2.3k★。', meta: '今日新晋', stat: '+2.3k★' }
]

const aiCompanion = [
  { name: '"AI恋人"下架整改满月', desc: '华西都市报调查：《人工智能拟人化互动服务管理暂行办法》施行一个月，许多"AI恋人"被下架整改，豆包、千问、元宝等大厂的 AI 角色对话功能也纷纷宣布下线，人机恋进入强监管时代。', meta: '监管落地', stat: '大厂下线' },
  { name: 'OpenAI 拟推 1 亿台 AI 伴侣设备', desc: '据财联社，OpenAI CEO 奥特曼向员工展示与苹果前设计师 Jony Ive 共同开发的设备，计划推出 1 亿个人工智能"伙伴"（AI companions），目标 2026 年末开始出货。', meta: '海外动态', stat: '1亿台' },
  { name: '机器人伴侣持续热销', desc: '仿生人形机器人 11.98 万元起预售、多款角色可选、搭载情感大模型，不到一个月收获超 1.3 万台订单，"机器人伴侣"概念持续升温。', meta: '硬件伴侣', stat: '1.3万台' },
  { name: 'AI 男友/女友怎么选', desc: '大厂 AI 角色下线后，市场转向"长期陪伴"产品：能记住你、主动关心、支持管理记忆与退出关系的 AI 伴侣成为新标准，"人机恋"进入精细化产品时代。', meta: '产品观察', stat: '长期记忆' },
  { name: 'AI 角色大模型分层记忆', desc: '角色大模型分层记忆专利（短期/中期/长期三层结构+人格偏置检索算法）让 AI 伴侣实现"记忆新陈代谢"，长期情感联结的基础设施日趋成熟。', meta: '技术前沿', stat: '分层记忆' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：开源语音（VoiceStudio）、多智能体课堂（OpenMAIC）等场景化项目密集上新；AI 编码 Agent 的"问清楚再做"成为新趋势；测试与汽车电子需求稳步增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 麒麟9050 Pro 实测', desc: '华为 Mate XT 2 展翼三折叠首发麒麟 9050 Pro（19999 元起）：极客湾实测能效出色，游戏体验比肩骁龙 8 Elite 产品。智谱官宣 50 亿美元融资，国产大模型资本热度不减。', meta: '数码资讯', stat: '旗舰实测' },
  { name: '游戏 · 赛博朋克2077登陆战网', desc: 'CD Projekt RED 今日宣布《赛博朋克2077》年内上线暴雪战网（含《往日之影》资料片），《巫师3》重制版同步确认；苹果被曝开发 iPhone 游戏手柄（The Verge）；2026 PCL 秋季赛今晚开赛。', meta: '游戏资讯', stat: '跨界登陆' },
  { name: '穿搭美妆 · 阵雨微凉', desc: '今日多云到阴局部短时阵雨，24~30℃，北到东北风4~5级。穿搭：防风薄外套+长裤应对阵雨降温，通勤建议随身带伞。美妆趋势：初秋"湿发感"造型与雾面底妆流行。', meta: '穿搭指南', stat: '阵雨降温' },
  { name: '理财职场 · 大模型融资潮', desc: '智谱官宣 50 亿美元融资，国产大模型进入资本深水区；外滩大会落幕：50 余项成果首发首展、80 多项合作达成意向、7.8 万人次现场参会，AI 产业商业化加速。', meta: '财经职场', stat: '50亿美元' },
  { name: '健康 · 防风防雨提醒', desc: '今日北到东北风4~5级（沿江沿海阵风6级），局部短时阵雨。注意：①大风天出行远离临时搭建物与广告牌；②阵雨时段路滑慢行；③本周15-16日适合洗晒，17日有弱降水；④湿度85%-40%变化大，注意衣物防潮。', meta: '健康提醒', stat: '大风6级' }
]

const localCards = [
  { name: '上海天气 · 9月14日', desc: '多云到阴，局部地区有短时阵雨。24~30℃，北到东北风4~5级，沿江沿海地区阵风6级。湿度85%~40%，空气质量优（AQI 29）。日出05:38，日落18:02。', meta: '今日天气', stat: '24~30℃' },
  { name: '本地要闻', desc: '①第48届世界技能大赛在沪举行，今日0时起8条入沪高速省际道口实施交通管制（至9月27日24时）；②2026外滩大会闭幕：50余项成果首发、80多项合作意向、7.8万人次参会；③上海综合科创水平保持全国第一；④MXGP上海站收官，赛事红利持续释放；⑤第二届全国青少年智能无人系统应用大赛总决赛在沪开幕。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月14日 星期一</span>
          <span>第 011 期</span>
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
          <h3>GitHub 热榜：多智能体课堂领跑，AI 编码进入"问清楚再做"时代</h3>
          <p>今日热榜上，清华 OpenMAIC（资料一键变互动课）本周 +10.1k★ 领跑；VoiceStudio（本地版 ElevenLabs）补齐开源语音拼图；mattpocock/skills 与 ponytail 代表的"需求澄清派"走红——AI 编码正从"埋头快写"转向"先问对问题"。</p>
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
        <span>我的工作台 · 每日早报 · VOL.011</span>
      </footer>
    </div>
  )
}
