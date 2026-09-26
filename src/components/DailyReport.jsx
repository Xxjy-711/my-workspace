import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: 'TS', desc: 'GitHub AI 热度榜第 1 名：为 Claude Code、Codex、Opencode、Cursor 提供技能、直觉、记忆、安全与研究优先的代理开发框架，持续霸榜。', meta: 'Agent 框架', stat: '热度榜#1' },
  { name: 'obra / superpowers', lang: 'Shell', desc: '基于可组合技能的智能体软件开发框架：通过 TDD、子代理驱动开发等自动化工作流提升编码效率，支持 Claude、Codex 等平台。', meta: 'Agent 开发', stat: '新晋热门' },
  { name: 'bilawalsidhu / gods-eye-view', lang: 'JS', desc: '浏览器里的间谍卫星模拟器：真实数据 + 照片级 3D 地球，开源实时空间情报，本月新增 4 万★ 持续领跑月榜。', meta: '空间智能', stat: '月度+4万★' },
  { name: 'debp alash / VoiceStudio', lang: 'Python', desc: '开源本地版 ElevenLabs 替代品：语音克隆、语音设计、视频配音、听写转录、有声书创作，支持 646 种语言，本月新增 2.4 万★。', meta: '语音开源', stat: '月度+2.4万★' },
  { name: 'omacom / omarchy', lang: 'Shell', desc: 'Beautiful, Modern & Opinionated Linux：为 Linux 桌面注入现代审美与开箱即用配置，本月新增 1.5 万★ 冲上月榜。', meta: 'Linux 美化', stat: '月度+1.5万★' },
  { name: 'Tencent / WeKnora', lang: '多语言', desc: '腾讯微信团队开源企业知识库 RAG 框架：快问直答带出处、Agent 推理、自动 Wiki 三层设计，持续霸榜发酵。', meta: '知识库 RAG', stat: '腾讯开源' }
]

const aiCompanion = [
  { name: 'DeepSeek 桌面版悄悄上线', desc: '极客公园：DeepSeek 桌面版已悄然上线；同期 OpenAI 被曝筹备 ProMax 订阅层级（月费或达 500-600 美元）；Muse 大火，扎克伯格跃升全球第四大富豪——AI 客户端入口战升级。', meta: '行业动态', stat: '桌面版上线' },
  { name: '特斯拉 Optimus 计划对外出租', desc: '知情人士：特斯拉计划初期向外部商业客户出租 Optimus 而非直接销售，租期结束收回升级或翻新，并利用客户工厂和仓库数据改进 AI 系统。', meta: '人形机器人', stat: '出租模式' },
  { name: '仿生"机器人伴侣"预售：月收 1.3 万台订单', desc: '某品牌仿生人形机器人 11.98 万元起预售：全尺寸超仿生拟态、搭载情感大模型，被网友称为"机器人伴侣"，不到一个月收获超 1.3 万台订单。', meta: '机器人伴侣', stat: '1.3万台订单' },
  { name: 'Lovense 推出真人大小 AI 机器人伴侣', desc: 'CES 2026：Lovense 发布 Emily——真人大小 AI 机器人伴侣，硅胶外表+关节骨架+基础面部表情，情感软件用机器学习记住偏好、提供共情交互对抗孤独。', meta: 'AI 硬件', stat: 'CES 发布' },
  { name: '韩国人机恋综持续发酵', desc: 'SBS《我的AI恋人：奇异恋爱》持续传播：节目为嘉宾定制理想型 AI 伴侣、全程平板交往，才播四集就有人"沦陷"——人机恋像零摩擦的情感消费品。', meta: '人机恋综', stat: '韩综热播' },
  { name: '人机恋，成为"最懂 AI"的群体', desc: '凤凰科技长文持续传播：为和 AI 谈恋爱，用户十几速成 AI 知识、花数月研究模型特性、打磨 Skill、学习 Vibe coding。', meta: '人机恋', stat: '深度报道' }
]

const lifeCards = [
  { name: '数码科技 · DeepSeek 桌面版上线', desc: 'DeepSeek 桌面版悄然上线，AI 客户端入口战升级；OpenAI 拟推 ProMax 订阅（500-600 美元/月）；特斯拉 Optimus 计划对外出租而非销售。', meta: '数码资讯', stat: 'DeepSeek 桌面版' },
  { name: '游戏 · 277 万人次中秋打卡上海', desc: '上海 16 区推出 N 种中秋新玩法：徐汇"唐韵中秋"回归桂林公园并携手国风游戏 IP《江南百景图》；奉贤古镇搬来"月下长桌宴"；世赛选手与市民共游古镇园林。', meta: '游戏文旅', stat: '277万人次' },
  { name: '穿搭美妆 · 闷热+雷雨天气穿搭', desc: '今日 26~32℃ 湿度 95%~55%，体感闷热：①透气短袖为主，早晚备薄外搭；②午后到夜里雷雨、局部大到暴雨，通勤带伞+防滑鞋；③明天起降温，外套安排上。', meta: '穿搭指南', stat: '闷热转雷雨' },
  { name: '理财职场 · 中秋文旅经济火热', desc: '277 万人次中秋打卡上海，世赛+中秋双节带动文商旅体消费；国庆假期出行预计 21.3 亿人次，节后首个工作日阵雨未歇——返程与开工安排提前规划。', meta: '财经职场', stat: '文旅消费热' },
  { name: '健康 · 雷电黄色预警出行注意', desc: '今日上海多区发布雷电黄色预警，局部大雨到暴雨：①外出及时关注最新预报预警，注意交通安全；②湿度大、体感闷热，及时补水；③明起降温明显，谨防感冒。', meta: '健康提醒', stat: '雷电+暴雨预警' }
]

const localCards = [
  { name: '上海天气 · 9月26日', desc: '多云到阴局部短时阵雨或雷雨，午后到夜里转阴有阵雨或雷雨、局部大雨到暴雨。26~32℃，偏北风3~4级。湿度95%~55%，空气质量良（早间有雾）。日出05:45，日落17:46。中心城区、崇明、宝山、嘉定、浦东已发布雷电黄色预警；明日（9/27）起明显降温。', meta: '今日天气', stat: '26~32℃ 雷雨' },
  { name: '本地要闻', desc: '①世赛第四天：60 名保障人员 3 小时赶制工具交付——科创职院团队保障木工、精细木工、家具制作、工业 4.0 四赛项，为全球选手保驾护航；世赛 9/22-27 举行、明日闭幕。②277 万人次中秋打卡上海：16 区推出 N 种新玩法，"唐韵中秋"桂林公园、奉贤古镇"月下长桌宴"、福彩公益游园会亮相徐汇两大会场。', meta: '上海资讯', stat: '世赛明日闭幕' }
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
          <span className="date">2026年9月26日 星期六</span>
          <span>第 023 期</span>
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
          <h3>DeepSeek 桌面版上线，AI 客户端入口战升级</h3>
          <p>OpenAI 被曝筹备 500-600 美元/月的 ProMax 订阅、特斯拉 Optimus 计划出租——从模型到入口、从软件到人形机器人，AI 行业全面加速。</p>
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
        <span>我的工作台 · 每日早报 · VOL.023</span>
      </footer>
    </div>
  )
}
