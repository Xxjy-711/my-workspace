import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'affaan-m / ECC', lang: '多语言', desc: 'GitHub AI 项目热度榜第 1（10/6）：代理线束性能优化系统——Claude Code、Codex、OpenCode、Cursor 等的技能、直觉、记忆、安全与研究优先开发。', meta: 'Agent 工程', stat: '热度榜#1' },
  { name: 'paperclipai / paperclip', lang: '多语言', desc: 'Week 41 Trending 第 1：大家都在用的开源应用——管理工作中的 AI Agent（paperclip.ing）。', meta: 'Agent 管理', stat: '周榜#1' },
  { name: 'debpalash / VoiceStudio', lang: 'Python', desc: '连续多日登顶的本地优先多引擎语音平台：克隆、配音、长音频制作，主打数据隐私与自托管高吞吐，50.4k 星。', meta: '语音平台', stat: '50.4K★' },
  { name: 'nexu-io / open-design', lang: 'TS', desc: '2026 新星：开源 Claude Design 替代——本地优先设计引擎，编码 Agent 直接产出原型/落地页/看板/幻灯片/图片视频，可导出 HTML/PDF/PPTX/MP4。', meta: '设计引擎', stat: '2026 新星' },
  { name: 'open-webui', lang: 'Python', desc: '自托管 AI 界面首选（支持 Ollama、OpenAI API 等），153k 星：把大模型服务变成自己的 Web 应用。', meta: 'AI 界面', stat: '153K★' },
  { name: 'obra / superpowers', lang: '多语言', desc: 'Agentic skills 框架与软件开发方法论，总星 204k+：给 AI Agent 装上"超级技能"。', meta: 'Agent 技能', stat: '204K★' }
]

const aiCompanion = [
  { name: 'OpenAI 洽谈 300 亿美元融资，估值 1.4 万亿美元', desc: '财联社/凤凰网 10/6：MGX 等多家阿联酋基金正在洽谈参与 OpenAI 最新一轮 300 亿美元融资（合计最高 100 亿美元），贝莱德亦在商谈；计划固定价格、不设领投方。', meta: '资本重磅', stat: '估值1.4万亿$' },
  { name: 'GPT-6 提速 50% + ChatGPT 文字水印', desc: '凤凰网 10/6：28 天计划 Day 1 兑现——订阅用户使用 GPT-6 Astra 和 GPT-6.1 Sol 默认速度提升约 50%；ChatGPT 和 Codex 部分文字输出开始加入不可见水印。', meta: '产品更新', stat: '提速50%' },
  { name: 'OpenAI、Meta、Manus 同时下注"智能体 2.0"', desc: '蓝鲸新闻 10/6：OpenAI 个人智能体 Dots 宣传片出圈，Meta Muse 爆火——同样主动能力、C 端定位、云端虚拟机 7×24 小时运转，个人 Agent 从"助手"走向"管家"。', meta: '行业共识', stat: '智能体2.0' },
  { name: 'ChatGPT 广告继续扩张', desc: '鞭牛士 10/6：视觉展示广告正式加入 OpenAI 广告产品库，用户要求 ChatGPT 生成图像时，画面旁将同步出现商业展示广告；本月下旬率先在美国测试。', meta: '商业模式', stat: '生图嵌广告' },
  { name: '智谱涨逾 7%，GLM-5.3 上架 Amazon', desc: '每经 10/6：智谱股价涨逾 7%，GLM-5.3 上架 Amazon，打开海外收入分成通道——国产大模型出海再进一步。', meta: '国产大模型', stat: '涨逾7%' },
  { name: 'Auros 推出 ARQ™：衡量 AI 关系的"人性面"', desc: 'AI Reporter 10/6：Auros 发布 AI Relationship Quality（ARQ™）指标，尝试量化人与 AI 关系的质量——AI 伴侣赛道的新评估维度。', meta: 'AI 伴侣', stat: 'ARQ 新指标' }
]

const lifeCards = [
  { name: '数码科技 · OpenAI 估值 1.4 万亿美元', desc: 'OpenAI 洽谈 300 亿美元融资（估值 1.4 万亿美元）；GPT-6 提速 50% 并引入不可见文字水印；ChatGPT 生图界面试点嵌入展示广告；智谱 GLM-5.3 上架 Amazon 涨逾 7%。', meta: '数码资讯', stat: '资本大年' },
  { name: '游戏文娱 · 木偶艺术周启幕', desc: '第十届上海国际木偶艺术周 10/5 启幕：联动第四届"炫偶狂欢周"，全新原创大型木偶巡游《玩偶世界》全城首秀；2026 世界水上摩托锦标赛中国上海大奖赛开赛；国庆档电影票房突破 9 亿（连续 5 天单日破亿）；劳力士大师赛激战正酣。', meta: '文娱资讯', stat: '木偶艺术周' },
  { name: '穿搭美妆 · 假期第6天穿搭', desc: '今日晴 15~23℃、西北风2级：①秋高气爽、阳光正好；②昼夜温差大（郊区最低 13℃ 左右）；③午后体感温暖、早晚凉——薄外套+可穿脱叠穿最实用，紫外线中等注意防晒。', meta: '穿搭指南', stat: '晴 15~23℃' },
  { name: '理财职场 · 假期第6天', desc: 'OpenAI 融资估值 1.4 万亿美元、智谱 GLM-5.3 出海涨逾 7%；"智能体 2.0"成行业共识（OpenAI/Meta/Manus 同时下注）；Auros 推出 ARQ 指标量化 AI 关系质量。', meta: '财经职场', stat: 'AI 资本大年' },
  { name: '健康 · 返程高峰开启', desc: '今日晴天温差大（15~23℃）：早晨偏凉注意保暖、紫外线中等注意防晒；国庆返程高峰（10/6-7）开启，中东部大范围晴朗利于出行——路上注意补水休息。', meta: '健康提醒', stat: '返程好天气' }
]

const localCards = [
  { name: '上海天气 · 10月6日', desc: '晴。15~23℃，西北风2~4级。湿度38%~61%，空气质量优（实时 AQI 50，预报 60-80 良）。日出05:51，日落17:34。冷空气影响基本结束、秋高气爽；昼夜温差大（郊区最低 13℃ 左右）；明晨仍偏凉、白天快速回暖——"入秋"在望。', meta: '今日天气', stat: '晴 15~23℃' },
  { name: '本地要闻', desc: '①中国第 16 次北冰洋考察"雪龙"号"雪龙2"号返回上海（央视 10/6）；第十届上海国际木偶艺术周启幕（10/5，《玩偶世界》全城首秀）；2026 世界水上摩托锦标赛中国上海大奖赛开赛；上海劳力士大师赛进行中（10/5-18）。②国庆档电影票房突破 9 亿（连续 5 天单日破亿）；上海旅游节花车巡游今日收官（至 10/6）；WF2026 上海国际手办模型文化博览会落幕（首发新品超 700 款）。', meta: '上海资讯', stat: '雪龙号归来' }
]

export default function DailyReport() {
  return (
    <div className="daily-report">
      {/* 头部 */}
      <header className="report-header">
        <div className="greeting">早上好，国庆假期第 6 天，秋高气爽 ♡</div>
        <h1 className="report-title">
          <GradientText>每日早报</GradientText>
        </h1>
        <div className="dateline">
          <span className="date">2026年10月6日 星期二</span>
          <span>第 033 期</span>
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
          <h3>OpenAI 洽谈 300 亿美元融资，估值冲 1.4 万亿</h3>
          <p>阿联酋基金与贝莱德齐上桌；GPT-6 提速 50% 兑现"28 天计划"首日，GitHub 上 ECC 登顶热度榜。</p>
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
        <span>我的工作台 · 每日早报 · VOL.033</span>
      </footer>
    </div>
  )
}
