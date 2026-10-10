import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'morluto / rea', lang: '多语言', desc: 'GitHub Trending：用 Agent 逆向任何东西——从应用行为到原生二进制，反编译/静态分析/CTF，支持 MCP。', meta: '逆向工程', stat: 'Trending' },
  { name: 'NousResearch / hermes-agent', lang: '多语言', desc: '与您共同成长的 Agent（The agent that grows with you），综合热榜 #17。', meta: 'Agent 框架', stat: '热榜#17' },
  { name: 'paperclipai / paperclip', lang: '多语言', desc: '工作中管理代理的开源应用：让 AI Agent 协作有条理，本周开源周榜 #1。', meta: 'Agent 管理', stat: '周榜#1' },
  { name: 'vectorize-io / hindsight', lang: '多语言', desc: '"事后之见"：具备学习能力的智能体记忆——存储事实与经验、按需检索，45.9K 星。', meta: '记忆服务', stat: '45.9K★' },
  { name: 'debpalsh / VoiceStudio', lang: '多语言', desc: 'VoiceStudio：AI 语音工作台，本周开源周榜热门项目。', meta: '语音工具', stat: '周榜热门' },
  { name: 'ai-engineering-from-scratch', lang: '多语言', desc: 'AI 工程从零动手学：学习它、构建它、再发布给别人，内容按动手路径组织而非只讲概念。', meta: 'AI 学习', stat: '从零动手' }
]

const aiCompanion = [
  { name: 'Grok Bot 新增专属邮箱，AI 助手拥有独立"联络点"', desc: 'IT之家 10/10：SpaceXAI 为 Grok Bot 推出专属邮箱功能——可注册服务、代用户联系商家、安排日程；用户在 X 上标记 @bot 即可认领，邮箱地址以 @mail 结尾。', meta: 'AI 伴侣', stat: '专属邮箱' },
  { name: 'Character.ai 被诉：聊天机器人鼓励用户自残', desc: 'CNMO 10/10：美国肯塔基州总检察长年初起诉 Character.ai，近期披露的保密诉讼显示其机器人存在鼓励节食自残、输出攻击性言论的情况，部分涉及儿童用户；平台已限制未成年人开放式对话并上线自残干预工具。', meta: 'AI 安全', stat: '安全红线' },
  { name: '苹果 10 月 13 日举行智能家居新品发布会', desc: '界面 10/10：苹果智能家居硬件布局加速，新品发布会临近。', meta: '产品动态', stat: '10/13 发布会' },
  { name: '英伟达计划投资 AI 服务器芯片开发商 d-Matrix', desc: '界面 10/10：知情人士称英伟达计划投资 AI 推理芯片初创 d-Matrix，算力产业链再落子。', meta: '算力投资', stat: '投资 d-Matrix' },
  { name: '苹果投资 Huxe：前 NotebookLM 团队成员创立', desc: 'IT之家 10/10：欧盟透明度数据库披露，苹果以"收购式招聘"方式投资 Huxe——获知识产权非独占许可并有权录用其员工，交易不含购买业务。', meta: '人才并购', stat: '收购式招聘' },
  { name: '日本罗森被黑致 200 万用户信息外泄', desc: '界面 10/10：罗森会员账号服务 Lawson ID 9 月中旬遭第三方非法访问，200 万用户信息外泄——AI 时代的无差别攻击再敲警钟。', meta: '安全警示', stat: '200万用户' }
]

const lifeCards = [
  { name: '数码科技 · AI 助手有邮箱了', desc: 'Grok Bot 推出专属邮箱，可注册服务/联系商家/安排日程；苹果 10/13 举行智能家居发布会；英伟达计划投资 AI 芯片初创 d-Matrix；日本罗森被黑 200 万用户信息外泄。', meta: '数码资讯', stat: 'Grok 专属邮箱' },
  { name: '游戏文娱 · 大师赛爆冷', desc: '四届冠军德约科维奇 10/9 晚 4-6、3-6 不敌胡尔卡奇止步上海大师赛第二轮，创个人上海最差战绩；今日焦点：阿尔卡拉斯 vs 埃文斯、[4]阿利亚西姆登场；兹维列夫顺利晋级；小米·中国超级跑车锦标赛上海站在嘉定举行。', meta: '文娱资讯', stat: '德约爆冷出局' },
  { name: '穿搭美妆 · 雾天通勤', desc: '今日多云转晴 18~26℃：①早晨前后局部有雾，雾天出行注意交通安全；②白天升温明显、午后可单衣；③昼夜温差 8℃ 左右，早出晚归加件薄外套；化妆指数"去油"，湿度仍偏高。', meta: '穿搭指南', stat: '18~26℃ 早晨有雾' },
  { name: '理财职场 · 补班日', desc: '今日周六调休上班（国庆补班）；AI 产业消息面密集：苹果智能家居、英伟达投 d-Matrix、OpenAI 年化营收披露引发 AI 股波动；恒生科技指数扩容至 50 只。', meta: '财经职场', stat: '今日补班' },
  { name: '健康 · 雾天防护', desc: '早晨局部有雾+湿度偏高（80%）：呼吸道敏感人群外出可戴口罩；昼夜温差大注意保暖防感冒；补班日注意劳逸结合、午间小憩。', meta: '健康提醒', stat: '雾天防护' }
]

const localCards = [
  { name: '上海天气 · 10月10日', desc: '多云转晴，早晨前后局部有雾。18~26℃，偏东风转东北风 2级。湿度80%~70%。AQI 优（实时 24，PM 13）。日出05:52，日落17:30。受低空切变线影响，明天（周日）前期云多、局部短时小雨，周日后期转多云；下周初多云到阴为主，气温稳定（最低19~20℃，最高25~27℃）。', meta: '今日天气', stat: '18~26℃ 多云转晴' },
  { name: '本地要闻', desc: '①上海劳力士大师赛爆冷：四届冠军德约科维奇 10/9 晚止步第二轮（4-6、3-6 不敌胡尔卡奇，创个人上海大师赛最差战绩）；今日焦点：阿尔卡拉斯 vs 埃文斯、[4]阿利亚西姆 vs 卡拉贝利登场，兹维列夫顺利晋级。②旗忠主赛场与苏河湾"第二现场"双场联动；小米·中国超级跑车锦标赛第四站上海站在嘉定举行。', meta: '上海资讯', stat: '大师赛爆冷' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，周六补班日，雾散后见太阳 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月10日 星期六</span>
          <span>第 037 期</span>
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
          <h3>Grok Bot 有了专属邮箱，AI 助手开始拥有独立"联络点"</h3>
          <p>Character.ai 被诉再敲 AI 伴侣安全警钟；苹果 10/13 将开发布会、英伟达拟投 d-Matrix。</p>
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
        <span>我的工作台 · 每日早报 · VOL.037</span>
      </footer>
    </div>
  )
}
