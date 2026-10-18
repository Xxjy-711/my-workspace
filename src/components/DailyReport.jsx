import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: 'TypeScript', desc: 'AI 逆向风暴继续霸榜：发布至今持续登顶 GitHub 趋势榜（GitHub AI Weekly 第10期 Top1），"让一切软件变免费"运动仍在发酵。', meta: '逆向工程', stat: '趋势榜No.1' },
  { name: 'storytold / artcraft', lang: 'Rust', desc: 'filmcraft 姊妹项目、Adobe 全家桶开源复刻系列新作：设计/图像工具链也用 Rust 重写，免费平替 Adobe。', meta: '设计工具', stat: '榜单No.2' },
  { name: 'anthropics / claude-plugins-official', lang: 'TypeScript', desc: 'Anthropic 官方 Claude 插件库登上热榜：把 Claude 的能力插件化、接入开发者工作流，官方下场做生态。', meta: '官方插件', stat: '榜单No.7' },
  { name: 'earthtojake / text-to-cad', lang: '多语言', desc: '文字直接生成 CAD 设计：用自然语言描述几何与结构，AI 一键出工程图纸，机械/建筑圈狂喜。', meta: 'AIGC CAD', stat: '榜单No.8' },
  { name: 'ranxianglei / billion-context', lang: '多语言', desc: '十亿级上下文项目：把大模型上下文窗口推到 1B tokens 级别，长文档/代码库全量塞进上下文。', meta: '长上下文', stat: '榜单No.9' },
  { name: 'mattpocock / skills', lang: 'TypeScript', desc: 'TypeScript 技能的 Agent 化实践：Matt Pocock 的 skills 集合，教 AI 编程助手高效使用类型系统。', meta: 'TS 技能', stat: '榜单No.3' }
]

const aiCompanion = [
  { name: 'OpenCode 爆雷：开发者 API Key 遭大规模盗刷', desc: '新智元/凤凰网 10/18：开源 AI 编程工具 OpenCode 遭遇大规模蒸馏攻击安全漏洞，1.4% Console 用户工作区里的 OpenAI/Claude/Gemini 密钥裸奔；黑客几小时内把 Token 全部刷去"训练自己的模型"，有人被刷走 1700 美元；Anthropic 已强制注销疑似泄露密钥，联创 Dax Raad 自己账号也被攻击。', meta: '安全警示', stat: '1.4%用户中招' },
  { name: 'Reflection 开源 Beam：501B 开放权重模型', desc: 'Reflection AI 10/5 发布 Beam 501B 开放权重模型；FT 报道其与英伟达的收购谈判未证实，此时开源权重被解读为"让 Beam 先普及再说"的主动布局。', meta: '开源模型', stat: '501B开放' },
  { name: '台积电净利涨 69% 至 236 亿美元', desc: 'DEV 10/17：台积电净利润同比增 69% 至 236 亿美元、营收增 51% 至 470 亿美元，并上调 2026 年资本支出指引——AI 芯片浪潮继续抬轿。', meta: '芯片景气', stat: '净利+69%' },
  { name: 'Anthropic 官方 Claude 插件生态上线', desc: 'GitHub AI Weekly 10/17：#07 anthropics/claude-plugins-official 上榜——Anthropic 把 Claude 做成官方插件库，AI 编程与工作流插件化提速。', meta: '生态布局', stat: '官方插件上榜' },
  { name: 'Character.AI 破产后的 AI 陪伴反思', desc: '36氪 10/16：曾经的 AI 陪伴顶流 1200 万用户仍月亏 800-900 万美元、接盘底价仅 2000 万；国内玩家同步"折戟"。中国 7/15 已施行《人工智能拟人化互动服务管理暂行办法》——全球首部禁止"情感成瘾式"AI 伴侣的法律框架。', meta: 'AI 伴侣', stat: '全球首部立法' },
  { name: '每天互动 60 次：年轻人开始"养"小机器人', desc: '新浪财经 10/18：情感陪伴机器人形态多元——聊天机器人、毛绒玩具宠物、人形机器人各有拥趸；行业共识未定，但"听懂、看懂、记住、自然反馈情绪"已成方向共识。', meta: '陪伴机器人', stat: '日互动60次' }
]

const lifeCards = [
  { name: '数码科技 · OpenCode 爆雷，快查你的 Key', desc: '开源 AI 编程工具 OpenCode 遭大规模蒸馏攻击，1.4% 用户工作区的 OpenAI/Claude/Gemini API Key 泄露被盗刷（最惨被刷 1700 美元）。收到邮件的开发者请立刻去官方控制台吊销并重配 Key——改密码没用！', meta: '安全警报', stat: '快吊销Key' },
  { name: '游戏文娱 · 大师赛决赛上演"西班牙德比"', desc: '上海大师赛男单决赛今日 16:30 开打：20 岁小将霍达尔（昨日半决赛 2-0 胜梅德韦杰夫）VS 福基纳（淘汰兹维列夫）——无论谁夺冠，都将成为赛事史上首位西班牙男单冠军。', meta: '文娱资讯', stat: '西班牙德比' },
  { name: '穿搭美妆 · 午后转雨，晚归带伞', desc: '今日上午多云、下午转阴到多云有时有阵雨或雷雨，24~31℃：①偏南风 4-5 级沿江沿海阵风 6 级，下午转西北风 3-4 级，风大易乱发型可扎起；②湿度 90%~60%，体感闷热穿轻薄透气款；③晚归务必带伞，明天小雨降温到 21~23℃。', meta: '穿搭指南', stat: '午后转雨31℃' },
  { name: '理财职场 · 台积电净利 +69%，AI 浪潮持续', desc: '台积电 Q3 净利 236 亿美元、同比涨 69%，营收 470 亿美元涨 51%，上调 2026 资本开支指引——AI 硬件景气度依旧；同时 OpenCode 事件提醒：API Key 是开发者"第二张身份证"，别乱交给第三方控制台。', meta: '财经职场', stat: '台积电+69%' },
  { name: '健康 · 今日重阳 + 蔷琵或将升级超强台风', desc: '今天是九月初九重阳节，登高望远记得下午前出发（午后转阵雨）；第 30 号台风"蔷琵"预计 18 日傍晚升级为超强台风，未来 5 天对我国海区无影响；冷空气已在路上，下周最低或降至 15℃ 左右，注意添衣。', meta: '健康提醒', stat: '重阳+蔷琵' }
]

const localCards = [
  { name: '上海天气 · 10月18日', desc: '上午多云，下午转阴到多云有时有阵雨或雷雨（冷暖空气交汇）。24~31℃。偏南风4-5级、沿江沿海阵风6级，下午转西北风3-4级、沿江沿海4-5级。相对湿度90%~60%。AQI 优（23）。日出05:59，日落17:20。明天（10/19）小雨 21~23℃ 明显降温，10/21 最低或降至 15℃ 左右。今日九月初九重阳节。', meta: '今日天气', stat: '午后转雨31℃' },
  { name: '本地要闻', desc: '①上海大师赛男单决赛今日上演"西班牙德比"：16:30 20岁小将霍达尔（昨日半决赛2-0胜梅德韦杰夫，即时排名升至第12）VS 达维多维奇-福基纳（半决赛淘汰兹维列夫）——无论谁夺冠都将成为赛事史上首位西班牙男单冠军。②第九届进博会 11/5-10 国家会展中心举办、虹桥论坛同期，倒计时 18 天，社会观众报名火热进行中。', meta: '上海资讯', stat: '大师赛决赛' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，今日重阳、午后或有雷雨 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月18日 星期日</span>
          <span>第 045 期</span>
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
          <h3>OpenCode 爆雷：开发者 API Key 遭大规模盗刷</h3>
          <p>1.4% 用户 OpenAI/Claude/Gemini 密钥被黑客"借刀"刷去训练模型，有人损失 1700 美元——API Key 是开发者的第二张身份证。</p>
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
        <span>我的工作台 · 每日早报 · VOL.045</span>
      </footer>
    </div>
  )
}
