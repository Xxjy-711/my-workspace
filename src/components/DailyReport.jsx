import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'dream-num / univer', lang: 'TypeScript', desc: '约 2.63 万星、当日新增约 1.0K：面向 AI 代理的办公套件 SDK，支持表格、文档、幻灯片、画布、关系表与 PDF，可嵌入 Web 应用，方便给 Agent 工具流配表格与文档编辑能力。', meta: '办公套件 SDK', stat: '26.3K★/日+1.0K' },
  { name: 'ag-ui-protocol / ag-ui', lang: 'TypeScript', desc: '约 1.8 万星、当日新增约 393：定义智能体与应用界面之间的开放事件协议，用于流式输出、状态同步与人工确认，是 Agent 接前端界面的一套通信规范。', meta: 'Agent 前端协议', stat: '18K★/日+393' },
  { name: 'google-labs-code / stitch-skills', lang: 'TypeScript', desc: '约 9.4K 星、当日新增约 248：为 Google Stitch MCP 服务器设计的 Agent Skills 技能库，用于生成界面、管理设计系统与转换组件，供编程智能体直接调用。', meta: '设计技能库', stat: '9.4K★/日+248' },
  { name: 'backnotprop / plannotator', lang: 'TypeScript', desc: '约 1.19 万星、当日新增约 866：跑在本地浏览器端的 AI 编码代理审查与标注工作区，可在页面上批注智能体的计划、文档与代码差异，并把反馈回传给 Agent。', meta: 'Agent 评审标注', stat: '11.9K★/日+866' },
  { name: 'Tencent / LoopForge', lang: 'Go', desc: '约 1.6K 星、当日新增约 484：腾讯开源的自托管工作流平台，把编码智能体、脚本与人工审批组织成可重复的交付步骤，协调多个 Agent 完成软件交付。', meta: '自托管工作流', stat: '1.6K★/日+484' },
  { name: 'GoogleChrome / modern-web-guidance-src', lang: 'TypeScript', desc: '约 7.3K 星、当日新增约 1.22K：维护供编程智能体查询的浏览器兼容性与现代网页开发指南源码、评测工具，把 Web 平台专业知识注入编码 Agent。', meta: 'Web 指南技能', stat: '7.3K★/日+1.22K' }
]

const aiCompanion = [
  { name: '华为云开源昇腾原生具身世界模型 CloudRobo-WM1.2', desc: '今日头条数智早参 11/17：华为云 11/16 举办具身世界模型发布会，发布首款昇腾原生的具身世界模型 CloudRobo-WM1.2，并宣布权重、推理与代码开源；模型基于国产算力昇腾训练，采用共享世界模型骨干网络实现预测增强，面向具身智能场景。', meta: '具身智能', stat: '昇腾原生开源' },
  { name: '阿里推进新一代基座 Qwen4-Max，国产模型密集上新', desc: '今日头条数智早参 11/17：阿里巴巴发布新一代基座大模型 Qwen4-Max；延续近期国产旗舰集中上新节奏，基座能力与多模态、Agent 场景持续迭代，可作为跟踪国产开源/闭源模型动向的参考。', meta: '基座模型', stat: 'Qwen4-Max' },
  { name: '李飞飞 World Labs 正式加入 AMD，交易估值约 82 亿美元', desc: '财联社 11/17：World Labs 正式并入 AMD，苏姿丰主持庆祝仪式；该交易最早于 9 月 28 日宣布达成最终协议，采用全股票方式、估值约 82 亿美元，体量在 AMD 并购史上仅次于 2022 年收购赛灵思，双方将协同优化计算平台与模型路线图。', meta: '产业并购', stat: '约 82 亿美元' },
  { name: '美国加州起诉 OpenAI，指控涉嫌危害公众安全', desc: '腾讯新闻/中新经纬 11/17、路透社：美国加利福尼亚州总检察长 Rob Bonta 于当地时间 16 日对 OpenAI 提起诉讼，指控其在缺乏足够安全防护与监控的情况下开发先进 AI 模型，涉嫌危害公众安全；AI 安全与监管合规议题再度升温。', meta: '监管诉讼', stat: '加州起诉' },
  { name: 'Google Gemini Notebook 新增"一键生成交互式网站"', desc: 'Infinitum 11/17：Google 宣布 Gemini Notebook 新增将资料生成交互式网站的功能，用户在聊天中输入 "make me a site" 并描述工作或学习需求，即可把笔记、研究与来源资料转换为可视化讲解、交互式数据看板或项目管理追踪器。', meta: 'AI 创作工具', stat: '笔记转网站' },
  { name: 'NVIDIA / SkillEvaluator：评估 Agent 技能质量的多层框架', desc: 'GitHub 11/16 榜：NVIDIA 开源 SkillEvaluator（Python，约 1.8K 星、当日 +122），用于评估 AI 智能体技能的静态质量、重复内容与任务实际效果，并生成分层评估报告，适合搭建 Agent 技能体系时做质检。', meta: 'Agent 评测', stat: '1.8K★/日+122' }
]

const lifeCards = [
  { name: '数码科技 · 办公 SDK 与 Agent 前端协议上榜，做界面可直接参考', desc: 'univer 把表格、文档、幻灯片等办公能力做成可嵌入 SDK，ag-ui 定义智能体与前端的流式输出、状态同步和人工确认协议。想给自己的 Agent 套一个网页界面、或嵌入文档表格处理，可以先研究这两个项目的接入方式。', meta: 'Agent 前端', stat: 'SDK + 协议' },
  { name: '游戏 · 《GTA6》临近发售，多款手游/主机新作排期公布', desc: '游民星空 11/16：《GTA6》临近 11 月 19 日发售；手游《哈利波特：魔法觉醒》公布停服安排，12 月 21 日停充值下架、2027 年 3 月 3 日关服；《仓库猎人模拟器》11 月 24 日登陆主机，《超级弹丸论破 2×2》定档 2027 年 1 月 14 日。', meta: '游戏排期', stat: 'GTA6·11/19' },
  { name: '穿搭美妆 · 周二偏北风不小，白天薄外套、早晚添一件', desc: '周二多云到阴、13~18℃，偏北风 3-4 级、沿江沿海阵风更大：白天薄外套或针织即可，早晚 11~13℃ 偏凉，通勤叠穿方便脱卸；夜间有短时小雨，出门备伞，风大注意发型定型与底妆持妆，护肤侧重保湿。', meta: '周二穿搭', stat: '13~18℃ 防风' },
  { name: '理财职场 · 具身与基座模型密集发布，关注国产算力配套岗位', desc: '华为云开源昇腾原生具身世界模型、阿里推进 Qwen4-Max，AMD 约 82 亿美元并入 World Labs；国产算力与具身智能配套提速，智驾、具身机器人、硬件适配相关岗位可留意。看机会仍优先选现金流健康、有真实付费落地的公司。', meta: '职场财经', stat: '具身/算力' },
  { name: '健康 · 强冷空气周三抵沪，明后天最低 4~5℃ 注意添衣', desc: '今日气温尚可，18 日阴 4~14℃、西北风 4 级，19 日多云 5~10℃，昼夜温差进一步拉大。呼吸道和关节敏感人群早晚注意保暖、可备薄口罩；今天起把厚外套翻出来，赶在降温前完成换季衣物收纳。', meta: '健康提醒', stat: '周三降温至 4℃' }
]

const localCards = [
  { name: '上海天气 · 11月17日', desc: '多云到阴，13~18℃（实时 16℃、体感 16℃，午后最高 18℃）。偏北风 3-4 级，沿江沿海地区阵风 4-5 级。相对湿度 50%~90%，实时 72%；AQI 60 良，能见度约 11.6 公里，上午局部有雾；夜间 21-22 时短时小雨、降水概率 50%。日出06:23，日落16:55。明天阴 4~14℃、西北风 4 级、湿度 62%、AQI 90 良；19 日多云 5~10℃。', meta: '今日天气', stat: '13~18℃ 多云到阴' },
  { name: '本地要闻', desc: '①白天多云到阴、无明显降水，夜间转短时小雨，通勤建议备伞；上午有雾，骑车、开车注意能见度。②强冷空气周三起影响上海，风力增大、气温下探至 4℃ 上下，体感转冷，提前备好厚外套；沿江沿海风大，阳台物品及时收稳。', meta: '上海资讯', stat: '冷空气周三到' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">周二早安，今天多云到阴、13~18℃，偏北风 3-4 级；上午有雾、夜间转短时小雨，出门备伞注意防风，冷空气周三抵达，记得提前添衣 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年11月17日 星期二</span>
          <span>第 074 期</span>
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
          <h3>华为云开源昇腾原生具身世界模型；阿里推进 Qwen4-Max；World Labs 约 82 亿美元并入 AMD；加州起诉 OpenAI；Gemini Notebook 可一键生成网站</h3>
          <p>华为云发布并开源首款昇腾原生具身世界模型 CloudRobo-WM1.2，权重、推理与代码开放；阿里推进新一代基座 Qwen4-Max。产业侧李飞飞 World Labs 以全股票、约 82 亿美元正式加入 AMD；监管侧美国加州起诉 OpenAI，指其安全防护与监控不足。工具侧 Google Gemini Notebook 新增"生成交互式网站"能力；GitHub 榜单上办公套件 SDK univer、Agent 前端协议 ag-ui 与多款 Agent 技能库走热。</p>
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
        <span>我的工作台 · 每日早报 · VOL.074</span>
      </footer>
    </div>
  )
}
