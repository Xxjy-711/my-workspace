import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'mattpocock / skills', lang: 'SHELL', desc: 'TypeScript 名师 Matt Pocock 的"给真工程师的 Agent 技能"，直接来自他的 .agents 目录，今日暴涨 2,692★。', meta: '今日热榜 #1', stat: '252.7k★' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor。', meta: '今日热榜 #2', stat: '快速上升' },
  { name: 'humanlayer / skills', lang: 'TS', desc: 'HumanLayer 精选 Claude Code Skills 合集，给 AI 编码助手装上"技能包"，覆盖架构、测试、安全等场景。', meta: 'Agent Skills', stat: '2,611★' },
  { name: 'primeintellect-ai / prime-agent', lang: 'TS', desc: '自我改进的 RLM 代理，用于编码工作流和长时间自治任务，具备持续学习与任务拆解能力。', meta: '自主智能体', stat: '上升中' },
  { name: 'NousResearch / hermes-agent', lang: 'PY', desc: '基于大语言模型的智能代理框架工具，让 AI 像人一样自主思考、规划并执行任务，分析数据、写代码。', meta: 'AI 顶流', stat: 'NousResearch' },
  { name: 'openclaw / openclaw', lang: 'RUST', desc: 'The AI that really does things. Any OS. Any Platform. 开源个人 AI 助理，主打 own-your-data 与跨平台。', meta: '个人助理', stat: '新项目' }
]

const aiCompanion = [
  { name: '半数美国人认为 AI 恋爱算出轨', desc: 'AI Girlfriend Coach 对 2,150 名美国成年人调查显示，50.5% 认为伴侣与聊天机器人建立浪漫或性关系可算作出轨。已婚/订婚人群使用 AI 伴侣应用的比例是单身的近两倍。', meta: '人机恋调查', stat: '50.5%' },
  { name: 'AI 拟人监管落地两月', desc: '《人工智能拟人化互动服务管理暂行办法》7月15日正式实施已满两月。豆包、通义千问、腾讯元宝等头部平台已下线 AI 恋人、树洞、虚拟闺蜜等情感陪伴类自定义智能体，工具类 Agent 被保留。', meta: '新规施行', stat: '7月15日生效' },
  { name: '字节推出"猫箱"迁移方案', desc: '豆包智能体功能下线后，字节跳动提供迁移方案，允许用户将部分数据迁移至独立应用"猫箱"，许多与 AI 建立深厚情感连接的用户经历"赛博丧偶"，凸显人机情感关系的脆弱性。', meta: '用户故事', stat: '情感冲击' },
  { name: 'AI 伴侣机器人欧盟合规延期', desc: 'jiuyouhui 电竞网站 AI 伴侣机器人原定于 5 月全球同步开启首批预售，因欧盟 AI 法案新规涉及的合规审查尚未完成，首批发售临时延期至 2026 年第三季度。', meta: '海外动态', stat: '欧盟合规' },
  { name: 'AI 正成为"关系主体"', desc: '2026 年研究报告指出，AI 正从"社交工具"蜕变为"关系主体"，重构从亲密伴侣、代际亲情到陌生人社交的全谱系联结。腾讯元宝用 10 亿红包将 AI 植入家庭群聊是标志性事件。', meta: '深度观察', stat: '关系重构' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：Python 生态持续向 AI 工程倾斜，Agent Skills 成为新热点；测试自动化与汽车电子功能安全（ISO 26262）需求增长，车载 SOA 架构与智能座舱持续演进。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 苹果发布会倒计时', desc: 'iPhone 18 Pro/Ultra 机模再曝光，9月10日苹果秋季发布会（2nm A20 Pro 芯片，首款折叠屏 iPhone Ultra）。Kimi、MiniMax 将在天猫开店。翼龙15 Air 2026 电竞本 9月10日开售，11499元起。', meta: '9月发布季', stat: '9月10日' },
  { name: '游戏 · GTA6 主题手柄 + XGP', desc: 'Sony 发布以 GTA 6 为灵感的 DualSense 限量控制器，融合罪恶城热带霓虹色彩与变色涂装。Xbox Game Pass 9月新增《使命召唤：黑色行动冷战》《VR战士5》等6款游戏。', meta: '游戏资讯', stat: 'GTA6 联名' },
  { name: '穿搭美妆 · 初秋换季', desc: '上海 26-30℃ 多云阵雨，早晚微凉。初秋穿搭：薄针织开衫+吊带内搭，风衣开始登场。美妆趋势：秋季奶茶色系眼影、哑光唇釉回归，换季护肤注重保湿与屏障修复。', meta: '初秋穿搭', stat: '换季指南' },
  { name: '理财职场 · 科普月+消费季', desc: '上海"全国科普月"启动，全市千余场科普活动。2026 上海金秋消费季推出 53 条乡村主题游精品线路和 42 项品牌特色活动，农民丰收节金秋消费季 9月4-6日在沪举办。', meta: '民生关注', stat: '千余场活动' },
  { name: '健康 · 阵雨防潮提醒', desc: '上海今日湿度 60%-90%，分散性短时阵雨频繁，沿江沿海阵风 6-7 级。注意：①出门带晴雨伞；②衣物防潮防霉，适时除湿；③气温波动大，避免空调直吹感冒；④大风天远离广告牌与临时搭建物。', meta: '健康提醒', stat: '换季防护' }
]

const localCards = [
  { name: '上海天气 · 9月6日', desc: '多云到阴有分散性短时阵雨，局部地区雨量可达大雨。26~30℃，北到东北风4~5级，午后到上半夜阵风6级，沿江沿海5级阵风6~7级。湿度60%~90%，空气质量优（AQI 28）。日出05:33，日落18:12。', meta: '今日天气', stat: '26~30℃' },
  { name: '本地要闻', desc: '①上海"全国科普月"启动，全市千余场科普活动；②上马Speed X系列赛·2026耐克少儿跑今晨浦东开跑，1500组亲子家庭3000人参与；③泡泡玛特城市乐园嘉年华首站落地上海；④环上海·新城自行车赛今日迎来奉贤-南汇收官之战（100.2公里）。', meta: '上海资讯', stat: '4条要闻' }
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
          <span className="date">2026年9月6日 星期日</span>
          <span>第 003 期</span>
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
          <h3>GitHub 热榜：Agent Skills 爆发，mattpocock/skills 单日涨 2.7 万星</h3>
          <p>今日 GitHub Trending 上，Agent Skills 生态全面爆发：mattpocock/skills（252.7k★，今日+2,692★）与 affaan-m/ECC 领跑前二，humanlayer/skills、prime-agent 等紧随其后。给 AI 编码助手装"技能包"成为本周最热方向。</p>
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
        <span>我的工作台 · 每日早报 · VOL.003</span>
      </footer>
    </div>
  )
}
