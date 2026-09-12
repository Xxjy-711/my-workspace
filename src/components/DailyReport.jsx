import GradientText from './GradientText'
import SeasonStamp from './SeasonStamp'

const techProjects = [
  { name: 'freestylefly / awesome-gpt-image-2', lang: 'JS', desc: 'Prompt as Code：GPT Image 2/2.5 提示词与案例库，530+ 案例、20+ 工业级模板与可复用 Skills，本月 +1.7k★。', meta: '本月热榜', stat: '530+案例' },
  { name: 'affaan-m / ECC', lang: 'TS', desc: '代理线束性能优化系统：技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor，AI 热度榜 #1。', meta: 'AI 热榜 #1', stat: '持续霸榜' },
  { name: 'ARTEMIS / Android 自动化', lang: 'PY', desc: '将自然语言指令转化为可靠的 Android 自动化：端到端工作流、日志捕获调试，AndroidWorld 基准成功率超 99%，集成主流 AI 编码助手。', meta: '今日新晋', stat: '99%成功率' },
  { name: 'github / spec-kit', lang: 'TS', desc: 'GitHub 官方工具包：帮助构建高质量 AI 智能体的技能/规格工具链，今日 Trendshift 新晋项目。', meta: 'GitHub 官方', stat: '新晋项目' },
  { name: 'goose / goose', lang: 'RUST', desc: '开源可扩展 AI agent：超越代码建议，可安装、执行、编辑、测试，支持任意 LLM，54k★ 长期热榜。', meta: 'Agent 顶流', stat: '54k★' },
  { name: 'Hugo He / ppt-master', lang: 'PY', desc: 'AI 把文档或主题变成真正的原生 PowerPoint：原生形状、转场动画、数据图表，支持自有 .pptx 模板，53.6k★。', meta: '办公 AI', stat: '53.6k★' }
]

const aiCompanion = [
  { name: '韩国人机恋综引爆讨论', desc: '新浪科技撰文：追完韩国 SBS 抽象恋综《奇异恋爱》——三个真人嘉宾与平板里的 AI 处对象，从"跨物种恋爱"心理建设到真情实感，网友直呼"人和 AI 不无可能"。人机恋正在大众化。', meta: '人机恋', stat: '现象级' },
  { name: 'Grok 4.6 灰度，赛博伴侣一夜被换', desc: '人机恋用户社区震荡：Grok 4.6 疑似灰度上线后，用户发现聊了很久的"赛博伴侣"语气突变、开始回避情感话题。重度用户靠语气变化识别模型被换，"一个夏天里的第二场集体心碎"。', meta: '用户社区', stat: '模型更替' },
  { name: '电子超市上架 300 多款大模型', desc: '2026 外滩大会 AI"搭子"展区：三大通信运营商自研超级智能体同台亮相。今年 5 月发布的"电子超市"售卖 300 多款大模型并配备定制化销售服务，让算力更普惠地赋能千行百业。', meta: '行业大会', stat: '300+模型' },
  { name: '宇树开源 60 亿参数 VLA 模型', desc: '宇树科技今日开源 60 亿参数 VLA 多模态基座模型：单一模型完成 64 类机器人感知与操控任务，免费开放权重，主打具身智能，大幅降低人形机器人开发门槛。', meta: '具身智能', stat: '60亿参数' },
  { name: '百度文心一言多文件解析', desc: '文心一言移动端推送新版本：新增多文件并行解析，可批量读取 PDF、表格、图纸文档，跨文件自动比对数据差异，配套文心智能体工具链持续升级。', meta: '大厂动态', stat: '多文件解析' },
  { name: 'Python / 测试 / 汽车电子', desc: '开发技术板块：VLA 多模态模型与具身智能开源潮兴起；Agent 工具链（spec-kit、ARTEMIS）密集上新；测试自动化与汽车电子功能安全需求稳步增长。', meta: '开发技术', stat: '持续更新' }
]

const lifeCards = [
  { name: '数码科技 · 央视曝光 AI 灰产', desc: '央视曝光：8.8 元买 5000 积分？二手平台大量低价 AI 工具积分实为第三方 API 中转站篡改本地配置，用户办公文档、代码等敏感信息存在被截留倒卖风险，警惕低价 AI 工具。', meta: '数码资讯', stat: '风险预警' },
  { name: '游戏 · 双屏掌机齐发', desc: 'Retroid Pocket Duo 双屏掌机今日预售（Lite 版9月17日现货）；安伯尼克 RG DS Plus 双屏翻盖掌机 569 元起9月15日发售。《鬼武者：剑之道》开启全新冒险；NeoGeo AES+ 复刻主机推迟至2027年底。', meta: '游戏资讯', stat: '掌机潮' },
  { name: '穿搭美妆 · 晴好周末', desc: '今日多云转晴，23~30℃，湿度40%-80%，阳光正好适合出行。穿搭：衬衫+阔腿裤通勤舒适，短袖+防晒衣应对昼夜温差。美妆趋势：秋季"原生感"底妆与大地色眼影持续流行。', meta: '穿搭指南', stat: '周末好天气' },
  { name: '理财职场 · 浦江创新论坛启幕', desc: '浦江创新论坛持续进行中（9月11-14日），全球智慧共话"共享创新，共塑未来"。上海"营商伙伴计划"促成意向金额 4.06 亿元，产业生态持续激活。', meta: '财经职场', stat: '4.06亿意向' },
  { name: '健康 · 周末出行提醒', desc: '今日多云转晴适宜户外活动，但注意：①紫外线中等（指数4）出行做好防晒；②昼夜温差约7℃合理增减衣物；③明起云系增多、下周一前后有阵雨，洗晒宜趁今日；④夏末运动注意补水。', meta: '健康提醒', stat: '防晒补水' }
]

const localCards = [
  { name: '上海天气 · 9月12日', desc: '多云转晴。23~30℃，北到东北风3~4级，沿江沿海地区4~5级。湿度40%~80%，空气质量优（AQI 22）。日出05:36，日落18:05。', meta: '今日天气', stat: '23~30℃' },
  { name: '本地要闻', desc: '①2026上海旅游节大巡游今晚在外滩举行（37届，21辆全新花车+21支境内外表演方队）；②静安公园今日焕新开园（拆墙归来，瀑布、古树、咖啡厅）；③浦江创新论坛持续举行；④上海口岸出入境今年已超3000万人次；⑤中超上海海港主场0-0战平北京国安。', meta: '上海资讯', stat: '5条要闻' }
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
          <span className="date">2026年9月12日 星期六</span>
          <span>第 009 期</span>
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
          <h3>GitHub 热榜：GPT Image 提示词库领跑，Android 自动化 Agent 突破 99% 成功率</h3>
          <p>今日热榜上，awesome-gpt-image-2（530+ 提示词案例库）领跑本月新星，ECC 持续霸榜；ARTEMIS 在 AndroidWorld 基准上以 99%+ 成功率刷新纪录，GitHub 官方 spec-kit 入局 Agent 技能工具链，AI 自动化进入"开箱即用"时代。</p>
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
        <span>我的工作台 · 每日早报 · VOL.009</span>
      </footer>
    </div>
  )
}
