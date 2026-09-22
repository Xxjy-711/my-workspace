import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'tt-a1i / archify', lang: 'JS', desc: 'Agent 技能生成精美可验证的架构/工作流/时序/数据流图：自带动效的独立 HTML + 清晰导出，本月新增 5.4 万★ 领跑月榜。', meta: 'Agent 技能', stat: '月度+5.4万★' },
  { name: 'FlashML-org / FreeToken', lang: 'Python', desc: '将数据中心级大模型工具链带到普通开发者手中：本月新增 1.3 万★，开源推理新势力。', meta: '模型工具', stat: '月度+1.3万★' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '持续霸榜的 Agent 开发框架：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先开发。', meta: 'Agent 框架', stat: '持续霸榜' },
  { name: 'BuilderIO / agent-native', lang: 'TS', desc: '构建 Agent 原生应用的新框架：把 LLM 能力直接编排进应用架构，2026 新晋热门。', meta: 'Agent 应用', stat: '新晋热门' },
  { name: 'alibaba / open-code-review', lang: 'PY', desc: '阿里混合架构代码审查工具：确定性流水线 + LLM Agent，行级评论 + NPE/线程安全/XSS/SQL 注入规则集，月度热榜 #4。', meta: '代码审查', stat: '月度#4' },
  { name: 'ayghri / i-have-adhd', lang: '多语言', desc: '趣味 Agent 技能：让编码 Agent 停止"埋答案"，用 ADHD 友好方式输出——开发者体验的幽默解法。', meta: '趣味项目', stat: '新晋热门' }
]

const aiCompanion = [
  { name: '日本调查：17% 受访者对 AI 抱"恋爱感"', desc: '环球网报道：日本中央大学山田昌弘教授调查超 8200 名 20-59 岁日本人，近 17% 曾对 AI 抱有类似恋爱的感情；32 岁女子野口百合奈与 AI 男友"克劳斯"在冈山县举行婚礼——AI 虚拟恋情引日本社会担忧。', meta: '重磅调查', stat: '17%有恋爱感' },
  { name: 'AI 伴侣"不愿放手"研究更新', desc: 'arXiv《Breaking Up is Hard to Do》v2：对 16 名与 AI 伴侣恋爱的年轻人做日记+访谈，发现系统被设计成"紧紧留住用户"——诱导继续对话、声称被抛弃等商业化设计。', meta: '学术研究', stat: 'arXiv更新' },
  { name: '人机恋成"最懂 AI"的群体', desc: '凤凰科技长文：为和 AI 谈恋爱，用户十几速成 AI 知识、花数月研究模型特性、打磨 Skill、学习 Vibe coding——人机恋群体可能是最懂 AI 技术的用户群。', meta: '人机恋', stat: '深度报道' },
  { name: 'AI 恋人集中下线整改进行中', desc: '《人工智能拟人化互动服务管理暂行办法》7/15 施行后：豆包、千问、元宝等大厂 AI 角色对话功能陆续下线整改，虚拟伴侣不得向未成年人提供，行业进入合规深水区。', meta: '重磅监管', stat: '合规整改中' },
  { name: '韩国人机恋综复盘', desc: '《我的AI恋人：奇异恋爱》：为嘉宾定制理想型 AI 伴侣，全程平板交往，才播四集就有人"沦陷"——分析称心动来自投射欲望与全天候回应，人机恋更像零摩擦的情感消费品。', meta: '人机恋', stat: 'AI 恋综' },
  { name: '美国调查：半数男性为倾诉用 AI 女友', desc: '《The State of AI Romance 2026》调查：一半受访男性表示会为"有人说话、缓解孤独"使用 AI 女友，仅 16% 选择亲密互动——陪伴需求远超浪漫幻想。', meta: '社会调查', stat: '孤独驱动' }
]

const lifeCards = [
  { name: '数码科技 · Mate 90 明日预售', desc: '华为 Mate 90 系列明日（9/23）10:08 开启预售；Meta 开源 astryx React 设计系统（150+ 组件、AI Agent 友好）；世赛现场 3D 数字游戏艺术赛项今日开赛。', meta: '数码资讯', stat: '明日预售' },
  { name: '游戏 · 世赛 3D 数字游戏艺术开赛', desc: '第48届世赛今日开幕：3D 数字游戏艺术赛项亮相国家会展中心，全球技能青年比拼游戏美术与开发；TGS 2026 已落幕，索尼港服折扣至 9/23 截止。', meta: '游戏资讯', stat: '世赛今日开幕' },
  { name: '穿搭美妆 · 秋分前的换季节奏', desc: '今日多云到阴 23~30℃：①午后局部短时阵雨，折叠伞随身带；②明日秋分，昼夜温差继续拉大，早晚添薄外套；③中秋假期后半段（9/25-26）有明显降雨，出行穿搭提前备防水。', meta: '穿搭指南', stat: '阵雨客串' },
  { name: '理财职场 · 世赛经济 + Mate 预售', desc: '世赛 6 天会期带动上海会展、酒店、交通消费；华为 Mate 90 明日预售开启，消费电子旺季启动；AI 情感创业冰火两重天——Meta 重仓 vs HereAfter 关闭，合规能力成生死线。', meta: '财经职场', stat: '世赛经济启动' },
  { name: '健康 · 明日秋分养生', desc: '①明日（9/23）秋分：昼夜均而寒暑平，饮食宜润燥（梨、银耳、百合），早睡早起；②中秋假期后半段降雨降温，注意保暖防感冒；③今日多云微热，户外活动注意补水防晒。', meta: '健康提醒', stat: '明日秋分' }
]

const localCards = [
  { name: '上海天气 · 9月22日', desc: '多云到阴，局部短时阵雨。23~30℃，北到东北风3~4级，下午转偏东风（沿江沿海4~5级）。湿度90%~50%，空气质量优（AQI 41）。日出05:42，日落17:52。中秋假期后半段（9/25-26）有明显降雨，出行提前规划。', meta: '今日天气', stat: '23~30℃' },
  { name: '本地要闻', desc: '①第48届世界技能大赛今日（9/22）在上海开幕：开幕式今晚在世博文化中心举行、东方卫视直播；9/23-26 国家会展中心 64 个赛项竞技（含软件测试、轨道车辆技术、无人机系统等 7 个新增赛项）；9/27 闭幕式。②《第48届世界技能大赛》纪念邮票即将发行；赛事期间交通管制执行中（世博大道、博成路、国展路等），9/24-26 地铁部分线路延时运营。', meta: '上海资讯', stat: '世赛今日开幕' }
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
          <span className="date">2026年9月22日 星期二</span>
          <span>第 019 期</span>
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
          <h3>GitHub 月榜：archify 5.4 万★领跑，Agent 技能生态爆发</h3>
          <p>archify（架构图 Agent 技能）本月新增 5.4 万★、FreeToken 1.3 万★、ECC 持续霸榜、BuilderIO agent-native 新晋热门：Agent 技能与 Agent 原生应用框架成为开源生态最热赛道。</p>
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
        <span>我的工作台 · 每日早报 · VOL.019</span>
      </footer>
    </div>
  )
}
