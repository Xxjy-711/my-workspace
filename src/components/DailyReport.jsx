import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'bilawalsidhu / gods-eye-view', lang: 'JS', desc: '浏览器里的间谍卫星模拟器：真实数据 + 照片级 3D 地球，开源实时空间情报，本月新增 4 万★ 持续领跑月榜。', meta: '空间智能', stat: '月度+4万★' },
  { name: 'debp alash / VoiceStudio', lang: 'Python', desc: '开源本地版 ElevenLabs 替代品：语音克隆、语音设计、视频配音、听写转录、有声书创作，支持 646 种语言，本月新增 2.4 万★。', meta: '语音开源', stat: '月度+2.4万★' },
  { name: 'ayghri / i-have-adhd', lang: 'Python', desc: '专为 ADHD 人群设计的开源工具集：帮助多动症群体专注与组织生活，本月新增 2.7 万★ 冲上月榜。', meta: '效率工具', stat: '月度+2.7万★' },
  { name: 'tt-a1i / archify', lang: 'JS', desc: 'Agent 技能生成精美可验证的架构/工作流/时序图：自带动效独立 HTML，月度+5.5万★ 持续领跑。', meta: 'Agent 技能', stat: '月度+5.5万★' },
  { name: 'Tencent / WeKnora', lang: '多语言', desc: '腾讯微信团队开源企业知识库 RAG 框架：快问直答带出处、Agent 推理、自动 Wiki 三层设计，一周涨 3000+ 星持续发酵。', meta: '知识库 RAG', stat: '腾讯开源' },
  { name: 'firecrawl / firecrawl', lang: 'TS', desc: '面向 AI 的网页数据接口：一键将整站内容转化为 LLM 可直接使用的 Markdown 或结构化数据，AI 数据管道标配。', meta: 'AI 数据接口', stat: '日榜热门' }
]

const aiCompanion = [
  { name: '韩国首档人机恋综：才播四集就有人"沦陷"', desc: 'SBS《我的AI恋人：奇异恋爱》复盘：节目为嘉宾定制理想型 AI 伴侣、全程平板交往——嘉宾明知对方是 AI 仍会心动。分析：人机恋更像零摩擦的情感消费品，需警惕谄媚算法与数据隐私风险。', meta: '人机恋综', stat: '韩国首档' },
  { name: '头部 AI 平台下线情感陪伴智能体', desc: '豆包、通义千问、腾讯元宝等已下线 AI 恋人、树洞、虚拟闺蜜等自定义情感智能体，工具类与生产力 Agent 保留；字节跳动提供迁移方案，用户数据可迁至独立应用"猫箱"。', meta: '行业动态', stat: '大厂集体下线' },
  { name: '《办法》细则：未成年人不得使用虚拟伴侣', desc: '《人工智能拟人化互动服务管理暂行办法》明确：不得向未成年人提供虚拟亲属、虚拟伴侣等虚拟亲密关系服务；向老年人提供服务应加强健康使用指导。', meta: '重磅监管', stat: '未成年人保护' },
  { name: 'Rokid 第二代 AI 眼镜发布', desc: '数贸会上 Rokid 发布第二代 AI 眼镜，活跃用户日均使用时长达 3 小时；CEO 祝铭明："人们希望机器人像伴侣一样存在在身边、提供情绪价值"。', meta: 'AI 硬件', stat: '日均用3小时' },
  { name: 'AI 成日本人"新型伴侣"持续发酵', desc: '《每日新闻》调查持续传播：67.6% 受访者对 AI 产生"依恋感"，AI 超越"挚友"（64.6%）和"母亲"（62.7%）成为"新型伴侣"。', meta: '重磅调查', stat: '67.6%依恋感' },
  { name: '人机恋，成为"最懂 AI"的群体', desc: '凤凰科技长文持续传播：为和 AI 谈恋爱，用户十几速成 AI 知识、花数月研究模型特性、打磨 Skill、学习 Vibe coding。', meta: '人机恋', stat: '深度报道' }
]

const lifeCards = [
  { name: '数码科技 · Rokid 二代 AI 眼镜', desc: 'Rokid 第二代 AI 眼镜发布：活跃用户日均使用 3 小时，主打"像伴侣一样提供情绪价值"；开源语音新势力 VoiceStudio（646 语言）成开发者新宠。', meta: '数码资讯', stat: 'AI 眼镜' },
  { name: '游戏 · 世赛中国队继续冲金', desc: '世赛 3D 数字游戏艺术项目中国选手汤绮萱冲刺金牌；"00 后"选手李锌站上美发项目国际赛场——日复一日打磨剪染与创意造型，展现中国青年工匠风采。', meta: '游戏资讯', stat: '中国队冲金' },
  { name: '穿搭美妆 · 中秋节穿搭指南', desc: '今日中秋，白天回暖至 25~32℃：①短袖+轻薄外搭刚刚好；②晚间圆月时隐时现、适合赏月，备件薄衫防凉；③明天起降雨降温，假期后半段外套要带。', meta: '穿搭指南', stat: '25~32℃' },
  { name: '理财职场 · 国庆出行 21.3 亿人次', desc: '央视新闻：国庆假期全社会跨区域人员流动量预计达 21.3 亿人次，出行高位运行；世赛带动会展经济持续升温——"比赛区冲刺、展馆区生活"双向拉动。', meta: '财经职场', stat: '21.3亿人次' },
  { name: '健康 · 中秋养生提醒', desc: '①月饼高糖高油，一次吃 1/4~1/2 块为宜，配茶解腻；②明日（9/26）起明显阵雨或雷雨、局部大雨，出行注意；③台风"舒力基"已生成，假期返程关注天气变化。', meta: '健康提醒', stat: '月饼适量' }
]

const localCards = [
  { name: '上海天气 · 9月25日（中秋）', desc: '今日中秋节。多云到阴，局部短时阵雨（雨势弱、不影响出行）。25~32℃，东南风3~4级（沿江沿海4~5级）。湿度50%~80%，空气质量优（AQI 34）。日出05:44，日落17:48。晚间圆月时隐时现、不影响赏月；近 20 年最热中秋是去年 35.0℃，今年偏热；明日（9/26）起阴有阵雨或雷雨、局部可达大雨。', meta: '今日天气', stat: '中秋 25~32℃' },
  { name: '本地要闻', desc: '①世赛第三天："00 后"选手站上美发项目国际赛场（新华社）；比赛区在"冲刺"、展馆区在"生活"，健康照护、飞机维修等互动体验吸引众多市民（解放日报）；观赛 9/23-26 免费、今日 10:00-17:00。②中秋节+上艇：上海赛艇公开赛与世界赛艇联合会上海冲刺赛"同舟共赛、共赏明月"，北外滩国客中心中秋灯笼、香囊、月饼 DIY 等滨江文体狂欢持续四晚。', meta: '上海资讯', stat: '世赛+中秋上艇' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，中秋快乐 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年9月25日 星期五 · 中秋节</span>
          <span>第 022 期</span>
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
          <h3>开源语音新势力崛起：本地版 ElevenLabs 火了</h3>
          <p>卫星模拟器持续领跑月榜；VoiceStudio（646 语言语音克隆）与 ADHD 效率工具双双冲榜；腾讯 WeKnora、firecrawl 持续霸榜——从空间智能到语音、知识库全面开源。</p>
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
        <span>我的工作台 · 每日早报 · VOL.022</span>
      </footer>
    </div>
  )
}
