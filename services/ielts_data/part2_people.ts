

import { IPart2Topic } from './types';

export const PART2_PEOPLE_TOPICS: IPart2Topic[] = [
  {
    id: 202, title: "敬佩的运动员", part: "part2", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Describe a successful sportsperson you admire.",
    questions: [
      { 
        id: 20201, 
        topic_id: 202, 
        content: "Describe a successful sportsperson you admire. You should say: Who this person is, What sport they play, Why you admire them, And explain what makes them successful.",
        sample_answer: {
          id: 20201,
          question_id: 20201,
          english_text: "I’d like to talk about one of the most famous athletes in the world, Lionel Messi. He is a legendary football player from Argentina, and honestly, almost everyone knows his name even if they don’t watch football. He played for Barcelona for a long time and now plays for Inter Miami.\n\nI’ve been following his career since I was in high school. I know that he had a growth hormone deficiency when he was a kid, but he didn't let that stop him. He moved to Spain at a young age to train, which shows how determined he was. I usually watch his match highlights on YouTube because his dribbling skills are just out of this world.\n\nAlthough I haven’t met him in person, from what I see in interviews, he seems very down-to-earth and quiet. Unlike some other superstars who are quite flashy or arrogant, Messi comes across as a family man who loves his wife and kids. He seems a bit shy, actually, which makes him even more likeable.\n\nIn terms of achievements, the list is endless. But the biggest one has to be winning the World Cup for Argentina recently. That was the only trophy missing from his collection. I admire him not just because of his talent, but because of his perseverance. He lost many finals before, but he kept trying until he succeeded. That never-give-up attitude is really inspiring to me.",
          chinese_translation: "我想谈谈世界上最著名的运动员之一，莱昂内尔·梅西。他是一位来自阿根廷的传奇足球运动员，老实说，即使是不看足球的人也几乎都知道他的名字。他在巴塞罗那效力了很长时间，现在在迈阿密国际踢球。\n\n我从高中起就关注他的职业生涯。我知道他小时候患有生长激素缺乏症，但他没有因此停下脚步。他很小的时候就搬到西班牙接受训练，这表明他是多么的坚定。我经常在YouTube上看他的比赛集锦，因为他的运球技巧简直出神入化。\n\n虽然我没有见过他本人，但从采访中看，他似乎非常脚踏实地且安静。不像其他一些超级巨星那样浮夸或傲慢，梅西给人的印象是一个爱妻子和孩子的顾家男人。实际上他看起来有点害羞，这让他更讨人喜欢。\n\n说到成就，那真是数不胜数。但最大的成就一定是最近带领阿根廷队夺得世界杯。那是他收藏中唯一缺少的奖杯。我钦佩他不仅仅是因为他的天赋，还因为他的毅力。他在成功之前输掉了很多次决赛，但他一直在尝试。这种永不放弃的态度真的激励了我。",
          vocabularies: [
            { word: "legendary", definition: "Remarkable enough to be famous; very well known.", phonetic: "/ˈledʒ.ən.der.i/", example: "He is a legendary player in the history of football." },
            { word: "deficiency", definition: "A lack or shortage.", phonetic: "/dɪˈfɪʃ.ən.si/", example: "He overcame a growth hormone deficiency." },
            { word: "determined", definition: "Having made a firm decision and being resolved not to change it.", phonetic: "/dɪˈtɝː.mɪnd/", example: "She was determined to win the match." },
            { word: "down-to-earth", definition: "Practical, reasonable, and friendly.", phonetic: "/ˌdaʊn.tuːˈɝːθ/", example: "Despite his fame, he remains very down-to-earth." },
            { word: "arrogant", definition: "Unhpleasantly proud and behaving as if you are more important than, or know more than, other people.", phonetic: "/ˈer.ə.ɡənt/", example: "He was talented but arrogant." },
            { word: "perseverance", definition: "Continued effort to do or achieve something despite difficulties, failure, or opposition.", phonetic: "/ˌpɝː.səˈvɪr.əns/", example: "His perseverance finally paid off." }
          ],
          sentences: [
             {
                 english: "He moved to Spain at a young age to train, which shows how determined he was.",
                 chinese: "他很小的时候就搬到西班牙接受训练，这表明他是多么的坚定。",
                 key_words: ["determined", "train"]
             },
             {
                 english: "Unlike some other superstars who are quite flashy or arrogant, Messi comes across as a family man who loves his wife and kids.",
                 chinese: "不像其他一些超级巨星那样浮夸或傲慢，梅西给人的印象是一个爱妻子和孩子的顾家男人。",
                 key_words: ["flashy", "arrogant", "family man"]
             },
             {
                english: "I admire him not just because of his talent, but because of his perseverance.",
                chinese: "我钦佩他不仅仅是因为他的天赋，还因为他的毅力。",
                key_words: ["admire", "perseverance"]
             }
          ]
        }
      },
      { 
        id: 20202, 
        topic_id: 202, 
        content: "Part 3: Should students have physical education and do sports at school?",
        thinking_logic: "这是一个典型的“教育决策”类问题。不要只说“健康”，要扩展到心理层面（减压）和社会层面（团队合作）。",
        key_arguments: ["sedentary lifestyle (久坐的生活方式)", "obesity (肥胖)", "team spirit (团队精神)", "resilience (韧性/抗压能力)"]
      },
      { 
        id: 20203, 
        topic_id: 202, 
        content: "Part 3: What qualities should an athlete have?",
        thinking_logic: "心理韧性与抗压能力 (Mental Fortitude & Resilience)：顶级运动员的区别往往不在于肌肉力量，而在于高压下的决策能力和面对逆境的恢复力。延迟满足与纪律性 (Delayed Gratification & Discipline)：真正的天赋在于能够忍受枯燥、重复的训练。战术素养与适应性 (Tactical Acumen & Adaptability)：现代体育不仅是体力的比拼，更是智力的博弈。",
        key_arguments: [
          "Mental fortitude (精神力量)",
          "Perseverance (毅力)",
          "Tactical acumen (战术敏锐度)",
          "Discipline (自律)",
          "Sportsmanship (体育精神)",
          "Adversity (逆境)"
        ]
      },
      { 
        id: 20204, 
        topic_id: 202, 
        content: "Part 3: Is talent important in sports?",
        thinking_logic: "天赋作为入场券 (Talent as a Prerequisite)：在精英级别，生理结构是不可逾越的鸿沟。基因优势 (genetic predisposition) 是基础门槛。\n努力作为决定因素 (Effort as the Differentiator)：天赋本身走不远。由于“龟兔赛跑”效应，自满 (complacency) 会导致失败，而极度自律的运动员往往能通过“刻意练习” (deliberate practice) 超越前者。\n动态发展观 (Dynamic Development)：天赋是先天特质与后天环境交互的结果。没有合适的教练和环境，天赋可能永远处于休眠状态 (dormant)。",
        key_arguments: [
          "Genetic predisposition (基因预设)", 
          "Innate ability (与生俱来的能力)", 
          "Propel (推进)", 
          "Complacency (自满)", 
          "Overshadow (遮盖/超越)", 
          "Prerequisite (先决条件)"
        ]
      },
      { 
        id: 20205, 
        topic_id: 202, 
        content: "Part 3: Is it easy to identify children's talents?",
        thinking_logic: "相对年龄效应与发育差异 (Relative Age Effect & Maturation)：许多所谓的“天赋”其实只是“早熟”（early maturation）。同一个年级的孩子，出生在年初和年末的生理发育差距巨大。教练往往误把发育早当成有天赋，从而忽视了那些发育晚但技术潜力更好的孩子 (late bloomers)。\n潜在性与暴露机会 (Latency & Exposure)：天赋往往是隐性的 (latent)。识别天赋的前提是提供多样化的尝试机会 (diverse stimuli)。\n多维度的识别指标 (Multidimensional Indicators)：天赋不仅仅是跑得快，还包括“协调性与平衡” (Coordination and Balance)、“可教性” (Coachability) 以及“内在动机” (Intrinsic Motivation)。",
        key_arguments: [
          "Latent potential (潜在潜力)", 
          "Early bloomer (早熟者)", 
          "Deceptive (欺骗性)", 
          "Coachability (可教性)", 
          "Discern (识别)", 
          "Exposure (接触)"
        ] 
      },
      { 
        id: 20206, 
        topic_id: 202, 
        content: "Part 3: What is the most popular sport in your country?",
        thinking_logic: "如果考生在中国，应区分“参与度最高”的运动和“商业价值/观看人数最高”的运动。乒乓球（Table Tennis）是“国球”，普及度极高。篮球（Basketball）和足球（Football）在年轻一代和商业化方面占据统治地位。户外运动（Outdoor sports）如滑雪、露营正在爆发式增长。",
        key_arguments: [
          "Ubiquitous (无处不在)",
          "National pastime (全民消遣)",
          "Gain traction (流行起来)",
          "Accessibility (易接近性)",
          "Fan base (粉丝群体)",
          "Grassroots (草根/基层)"
        ]
      },
      { 
        id: 20207, 
        topic_id: 202, 
        content: "Part 3: Why are there so few top athletes?",
        thinking_logic: "金字塔筛选机制 (The Pyramid Screening Process)：竞技体育是残酷的“适者生存”。系统性障碍与资源 (Systemic Barriers & Resources)：缺乏设施、专业教练及高昂的训练成本阻碍了贫困地区的天赋。生活方式的牺牲 (Lifestyle Sacrifices)：苦行僧式的生活（ascetic lifestyle）是大多数人无法坚持的。",
        key_arguments: [
          "Attrition rate (淘汰率)",
          "Bottleneck (瓶颈)",
          "Prohibitive (高昂的)",
          "Infrastructure (基础设施)",
          "Dedication (奉献)",
          "Elite echelon (精英阶层)"
        ]
      }
    ]
  },
  {
    id: 203, title: "喜欢的歌手", part: "part2", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Describe a singer whose music or songs you like.",
    questions: [
      { 
        id: 20301, 
        topic_id: 203, 
        content: "Describe a singer whose music or songs you like. You should say: Who the singer is, What kind of music they sing, When you listen to their music, And explain why you like their music.",
        sample_answer: {
          id: 20301,
          question_id: 20301,
          english_text: "I’m going to describe Adele, who is a world-famous British singer. I think almost everyone knows her song 'Hello'.\n\nI first heard her voice on the radio when I was in high school. Her voice is very deep and soulful, which immediately caught my attention. I remember looking her up on the internet to find more of her songs.\n\nI like her because she writes her own songs based on her real-life experiences, usually about heartbreak or relationships. When I listen to her, I feel very emotional. Unlike many pop singers who focus on dancing or looking glamorous, she just stands there and sings from her heart, which I think is very powerful.",
          chinese_translation: "我要描述的是阿黛尔，她是一位世界著名的英国歌手。我想几乎每个人都知道她的歌《Hello》。\n\n我第一次听到她的声音是在我上高中的时候。她的声音非常深沉和深情，立刻引起了我的注意。我记得我在网上查了她的资料，想找更多她的歌。\n\n我喜欢她是因为她根据自己的真实经历写歌，通常是关于心碎或人际关系的。当我听她的歌时，我会感到非常情绪化。不像许多注重舞蹈或外表迷人的流行歌手，她只是站在那里发自内心地歌唱，我认为这非常震撼。",
          vocabularies: [
            { word: "soulful", definition: "Expressing deep feelings, often sadness.", phonetic: "/ˈsoʊl.fəl/", example: "Her voice is very deep and soulful." },
            { word: "catch attention", definition: "To make someone notice you.", phonetic: "/kætʃ əˈten.ʃən/", example: "Her voice immediately caught my attention." },
            { word: "heartbreak", definition: "Feelings of great sadness or distress.", phonetic: "/ˈhɑːrt.breɪk/", example: "She sings about heartbreak." },
            { word: "glamorous", definition: "Attractive in an exciting and special way.", phonetic: "/ˈɡlæm.ɚ.əs/", example: "Many pop singers try to look glamorous." }
          ],
          sentences: [
            {
              english: "Her voice is very deep and soulful, which immediately caught my attention.",
              chinese: "她的声音非常深沉和深情，立刻引起了我的注意。",
              key_words: ["soulful", "caught my attention"]
            },
            {
              english: "Unlike many pop singers who focus on dancing or looking glamorous, she just stands there and sings from her heart.",
              chinese: "不像许多注重舞蹈或外表迷人的流行歌手，她只是站在那里发自内心地歌唱。",
              key_words: ["glamorous", "sings from her heart"]
            }
          ]
        }
      },
      {
        id: 20302,
        topic_id: 203,
        content: "Part 3: What kind of music do people like at different ages?",
        thinking_logic: "青少年期：强烈的身份表达 (Adolescence: Identity & Intensity) - 倾向于“激烈的”或“反叛的”音乐以建立自我认同。成年早期：社交与功能性 (Young Adulthood: Social & Functional) - 音乐具有社交属性（派对）或功能性（专注工作）。中年及以后：怀旧与放松 (Middle Age & Beyond) - 受“记忆隆起”(Reminiscence Bump) 影响，偏爱年轻时的音乐，追求情感慰藉。",
        key_arguments: [
            "Reminiscence bump (记忆隆起)",
            "Sonic identity (音乐身份认同)",
            "Rebellious (叛逆的)",
            "Sophisticated (精致的)",
            "Sentimental value (情感价值)",
            "Mellow (柔和的)"
        ]
      },
      {
        id: 20303,
        topic_id: 203,
        content: "Part 3: What kind of music is popular in China now and what kind will be in the future?",
        thinking_logic: "现状：多元化与国风崛起 (Diversity & Guofeng) - “国风音乐”爆发反映文化自信，传统乐器与现代节拍融合；短视频平台推动“洗脑旋律”。未来：AI与极度细分 (AI & Hyper-segmentation) - 趋势走向“超个性化”。AI生成定制音乐，风格界限模糊（如戏曲+电音），以及沉浸式多感官体验。",
        key_arguments: [
            "Cultural heritage (文化遗产)",
            "Fusion (融合)",
            "Niche (小众的)",
            "Algorithm-driven (算法驱动的)",
            "Hyper-personalization (超个性化)",
            "Resurgence (复兴)"
        ]
      },
      {
        id: 20304,
        topic_id: 203,
        content: "Part 3: Do Chinese parents require their children to learn to play musical instruments?",
        thinking_logic: "注意题目中的动词是 'Require'（要求/强制），而非 'Encourage'（鼓励）。这触及了中国家庭教育的功利性与竞争焦虑。功利主义与升学筹码 (Utilitarianism & Academic Leverage)：许多家长将乐器学习视为“竞争优势”，考级证书是亮点，动机往往是结果导向。纪律与品格培养 (Discipline & Character Building)：受儒家文化影响，家长认为学习乐器能培养“吃苦”精神和纪律性，相信“熟能生巧”和延迟满足。阶层焦虑与素质教育 (Status Anxiety)：学习乐器（如钢琴）被视为中产阶级身份的象征，代表家庭有能力培养孩子的“素质”。",
        key_arguments: [
          "Mandatory (强制性的)",
          "Competitive edge (竞争优势)",
          "Utilitarian (功利主义的)",
          "Discipline (纪律)",
          "Rote learning (机械练习)",
          "Prestige (声望)"
        ]
      },
      {
        id: 20305,
        topic_id: 203,
        content: "Part 3: Why do some people like to listen to live music while others prefer CDs?",
        thinking_logic: "这是一个关于“体验 vs. 质量”以及“社交 vs. 私密”的对比。现场音乐：氛围与社交共鸣 (Live Music: Atmosphere & Connection) - 追求不可复制的体验，内脏般的震撼 (Visceral Impact) 引发强情感反应，声波、灯光、人群创造“电光石火般的气氛”。这是一种集体仪式 (Communal Experience)，带来归属感。不完美与其真实性：即兴发挥 (Improvisation) 是魅力所在。CD/唱片：音质与掌控感 (CDs: Audio Fidelity & Control) - 喜欢 CD 的人往往是发烧友。强调高保真音质 (High Fidelity)，无损且无噪音。完整性与仪式感 (Intent & Ritual)：按艺术家设计的顺序欣赏整张专辑。私密性与拥有感：私人的、可控的体验，拥有实体光盘的收藏价值。",
        key_arguments: [
          "Visceral (发自肺腑的)",
          "Electrifying (令人极其兴奋的)",
          "Communal (集体的)",
          "High fidelity (高保真)",
          "Improvisation (即兴创作)",
          "Tangible (可触摸的)"
        ]
      }
    ]
  },
  {
    id: 204, title: "擅长音乐的朋友", part: "part2", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Describe a friend of yours who is good at music/singing.",
    questions: [
      { 
        id: 20401, 
        topic_id: 204, 
        content: "Describe a friend of yours who is good at music/singing. You should say: Who this person is, How they learned music, What they do with this talent, And explain how you feel about their talent.",
        sample_answer: {
          id: 20401,
          question_id: 20401,
          english_text: "I want to talk about a friend of mine named Leo. He is not a professional singer, but he is extremely talented when it comes to music. He plays the guitar and sings in a local band during the weekends.\n\nUsually, I listen to him sing when we go to Karaoke (KTV) together or when his band has a small gig at a local café. Sometimes, when we hang out at his apartment, he just picks up his acoustic guitar and plays some songs for us casually.\n\nHe is really good at singing Pop and Soft Rock ballads. He has a slightly husky voice which sounds very emotional. He is a big fan of Ed Sheeran, so he covers a lot of his songs.\n\nListening to him makes me feel really relaxed. He has a way of expressing feelings through his voice that catches everyone's attention. When he sings sad songs, it can be quite touching. Honestly, I always feel a bit jealous of his talent because I’m terrible at singing!",
          chinese_translation: "我想谈谈我的一个朋友，叫Leo。他不是专业歌手，但在音乐方面非常有天赋。他周末会在当地一支乐队弹吉他和唱歌。\n\n通常，当我们一起去卡拉OK（KTV）或者他的乐队在当地咖啡馆有小型演出时，我会听他唱歌。有时候，当我们在他的公寓闲逛时，他会拿起木吉他随便给我们弹几首。\n\n他非常擅长唱流行和软摇滚情歌。他的声音略带沙哑，听起来非常有感情。他是艾德·希兰的超级粉丝，所以他翻唱了很多他的歌。\n\n听他唱歌让我感到非常放松。他有一种通过声音表达情感的方式，能吸引所有人的注意力。当他唱悲伤的歌时，可能会非常感人。老实说，我总是有点嫉妒他的天赋，因为我唱歌太难听了！",
          vocabularies: [
            { word: "talented", definition: "Having a natural ability to do something well.", phonetic: "/ˈtæl.ən.tɪd/", example: "He is a talented musician." },
            { word: "gig", definition: "A single performance by a musician or group of musicians.", phonetic: "/ɡɪɡ/", example: "The band has a gig tonight." },
            { word: "acoustic", definition: "Used to refer to a musical instrument that is not made louder by electrical equipment.", phonetic: "/əˈkuː.stɪk/", example: "He played an acoustic guitar." },
            { word: "husky", definition: "(of a voice) low and rough, often in an attractive way.", phonetic: "/ˈhʌs.ki/", example: "He has a husky voice." },
            { word: "jealous", definition: "Unhappy and angry because someone has something that you want.", phonetic: "/ˈdʒel.əs/", example: "I was jealous of his singing ability." }
          ],
          sentences: [
            {
              english: "He is not a professional singer, but he is extremely talented when it comes to music.",
              chinese: "他不是专业歌手，但在音乐方面非常有天赋。",
              key_words: ["talented"]
            },
            {
              english: "He has a way of expressing feelings through his voice that catches everyone's attention.",
              chinese: "他有一种通过声音表达情感的方式，能吸引所有人的注意力。",
              key_words: ["expressing", "catches attention"]
            }
          ]
        }
      },
      {
        id: 20402,
        topic_id: 204,
        content: "Part 3: What kind of music is popular in your country?",
        thinking_logic: "如果以中国为例，需要描述多元化的现状。主流与偶像 (Mainstream Pop)：华语流行 (Mandopop) 依然占据主导，尤其是受 K-pop 影响的偶像团体音乐。亚文化的崛起 (Rise of Subcultures)：得益于综艺节目，说唱 (Hip-hop/Rap) 和民谣 (Folk) 已经从地下走向大众。短视频神曲 (Viral Hits)：抖音 (Douyin/TikTok) 制造了大量“洗脑神曲” (Earworms)，这些歌通常片段化、旋律简单，传播极快。",
        key_arguments: [
          "Mainstream (主流的)",
          "Niche (小众的)",
          "Viral (病毒式传播的)",
          "Diverse (多元的)",
          "Resonate (共鸣)",
          "Ubiquitous (无处不在的)"
        ]
      },
      {
        id: 20403,
        topic_id: 204,
        content: "Part 3: What kind of music do young people like?",
        thinking_logic: "融合与个性 (Fusion & Identity)：年轻人不再局限于单一风格，趋势是“去风格化” (Genre-bending)。他们喜欢混合了电子、摇滚、传统元素的“大杂烩”，音乐是表达个性的工具。功能性聆听 (Functional Listening)：根据“心情” (Mood) 听歌，而不是根据“流派”，例如“学习用的 Lo-fi 音乐”。快节奏与 Hyperpop：高能量、混乱、受互联网文化影响的电子音乐，符合数字原住民的审美和碎片化注意力。",
        key_arguments: [
          "Genre-bending (风格融合的)",
          "Eclectic (不拘一格的)",
          "Aesthetic (审美风格)",
          "Algorithm (算法)",
          "Fragmented (碎片化的)",
          "Authenticity (真实性)"
        ]
      },
      {
        id: 20404,
        topic_id: 204,
        content: "Part 3: Do you think music is beneficial for children at school?",
        thinking_logic: "情绪调节 (Emotional Regulation)：学校生活压力大，音乐课提供了宝贵的“减压阀” (stress relief)。跨学科益处 (Cross-curricular Benefits)：音乐中的节奏训练有助于数学思维（模式识别），而歌词和旋律有助于语言习得 (phonemic awareness)。文化传承 (Cultural Heritage)：通过学习传统歌曲，孩子们建立了与本国文化的连接。",
        key_arguments: [
          "Curriculum (课程)",
          "Holistic (整体的)",
          "Alleviate (减轻)",
          "Enhance (增强)",
          "Integration (整合)",
          "Outlet (出口)"
        ]
      },
      {
        id: 20405,
        topic_id: 204,
        content: "Part 3: What are the benefits of children learning a musical instrument?",
        thinking_logic: "侧重于“技能习得”的过程。大脑结构改变 (Brain Structure)：长期练习乐器能增加大脑灰质体积，改善执行功能 (executive function)。精细动作与毅力 (Fine Motor Skills & Grit)：控制乐器需要极高的手眼协调能力。从生疏到精通的漫长过程教会了孩子“刻意练习”和面对失败的韧性。",
        key_arguments: [
          "Dexterity (灵巧)",
          "Perseverance (毅力)",
          "Cognitive (认知的)",
          "Mastery (精通)",
          "Self-esteem (自尊自信)",
          "Neuroplasticity (神经可塑性)"
        ]
      },
      {
        id: 20406,
        topic_id: 204,
        content: "Part 3: Do you know what kind of music children like today?",
        thinking_logic: "重复与简单 (Repetition & Simplicity)：像《Baby Shark》这样的歌曲之所以流行，是因为其简单的旋律和高度重复性，符合儿童大脑的学习模式。视觉驱动 (Visual-driven)：孩子们通常通过动画片 (cartoons) 接触音乐。他们喜欢的不仅仅是听觉，而是视听结合的体验 (multimedia experience)。互动性 (Interactivity)：带有舞蹈动作的歌曲 (Action songs) 更受欢迎，因为孩子喜欢模仿和参与。",
        key_arguments: [
          "Repetitive (重复的)",
          "Catchy (朗朗上口的)",
          "Animated (动画的)",
          "Engaging (引人入胜的)",
          "Mimic (模仿)",
          "Stimulating (刺激的)"
        ]
      },
      {
        id: 20407,
        topic_id: 204,
        content: "Part 3: Do you think the government should invest more money on concerts?",
        thinking_logic: "支持方：文化权利与经济溢出 (Cultural Rights & Economic Spillover)：艺术是公共产品 (public good)。政府资助能让低收入群体也能享受艺术 (accessibility)。此外，活跃的演出市场能带动旅游、餐饮等周边经济 (economic ripple effect)。反对方：机会成本 (Opportunity Cost)：资金是有限的。在医疗、教育资金短缺的情况下，资助娱乐活动被视为一种浪费或“奢侈品” (luxury)。折中方案：政府应资助那些“高雅但非商业”的小众艺术（如交响乐、传统戏曲），而让流行音乐交给市场去运作。",
        key_arguments: [
          "Subsidize (补贴)",
          "Allocation (分配)",
          "Opportunity cost (机会成本)",
          "Accessibility (可获得性)",
          "Vibrant (充满活力的)",
          "Taxpayer (纳税人)"
        ]
      }
    ]
  },
  {
    id: 222,
    title: "侍花弄草之人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person who you know loves to grow plants (e.g. vegetables/fruits/flowers etc.).",
    questions: [
      { 
        id: 22201, 
        topic_id: 222, 
        content: "Describe a person who you know loves to grow plants. You should say: Who this person is, What he/she grows, Where he/she grows them, And explain why he/she enjoys growing plants.",
        sample_answer: {
          id: 22201,
          question_id: 22201,
          english_text: "I’d like to describe my neighbor, Mrs. Green (pun intended!). She is a retired lady living next door to my apartment. She is in her 60s and she definitely has a green thumb.\n\nShe has turned her balcony into a mini jungle. She grows all kinds of things, but mostly vegetables and herbs like tomatoes, chilies, and basil. She also has some beautiful orchids hanging from the ceiling. Every inch of her balcony is filled with pots.\n\nI think she enjoys it because it gives her a sense of accomplishment. She loves seeing a small seed turn into something she can eat. She often tells me that organic food tastes much better than what you buy in the supermarket. Also, since she is retired, gardening is a great way for her to kill time and stay active. It keeps her busy and happy.",
          chinese_translation: "我想描述一下我的邻居格林太太（双关语！）。她是一位住在我公寓隔壁的退休女士。她六十多岁了，而且她绝对有园艺天赋。\n\n她把阳台变成了一个迷你丛林。她种各种各样的东西，但主要是蔬菜和香草，比如西红柿、辣椒和罗勒。她还有一些漂亮的兰花挂在天花板上。她阳台的每一寸地方都摆满了花盆。\n\n我认为她喜欢这样做是因为这给了她一种成就感。她喜欢看着一颗小种子变成她可以吃的东西。她经常告诉我，有机食品比在超市买的好吃得多。此外，由于她已经退休，园艺是她消磨时间和保持活力的好方法。这让她既忙碌又快乐。",
          vocabularies: [
             { word: "green thumb", definition: "A special ability to make plants grow.", phonetic: "/ˌɡriːn ˈθʌm/", example: "My mother has a green thumb." },
             { word: "accomplishment", definition: "Something that is successful, or that is achieved after a lot of work or effort.", phonetic: "/əˈkɑːm.plɪʃ.mənt/", example: "Finishing the course gave me a sense of accomplishment." },
             { word: "organic", definition: "Produced without using artificial chemicals.", phonetic: "/ɔːrˈɡæn.ɪk/", example: "She only buys organic vegetables." },
             { word: "kill time", definition: "To do something while waiting for something else to happen.", phonetic: "/kɪl taɪm/", example: "I read a book to kill time." },
             { word: "retired", definition: "Having stopped working, usually because of old age.", phonetic: "/rɪˈtaɪrd/", example: "He is a retired teacher." }
          ],
          sentences: [
              {
                  english: "She is in her 60s and she definitely has a green thumb.",
                  chinese: "她六十多岁了，而且她绝对有园艺天赋。",
                  key_words: ["green thumb"]
              },
              {
                  english: "She has turned her balcony into a mini jungle.",
                  chinese: "她把阳台变成了一个迷你丛林。",
                  key_words: ["mini jungle"]
              },
              {
                  english: "Also, since she is retired, gardening is a great way for her to kill time and stay active.",
                  chinese: "此外，由于她已经退休，园艺是她消磨时间和保持活力的好方法。",
                  key_words: ["retired", "kill time", "active"]
              }
          ]
        }
      },
      {
        id: 22202,
        topic_id: 222,
        content: "Part 3: Are there many people growing their own vegetables now?",
        thinking_logic: "趋势是上升的，驱动力有三点：食品安全焦虑 (Food Safety Anxiety)：人们担心农药残留，倾向于认为自己种的“有机”食品更安全。疫情效应 (The Pandemic Effect)：疫情期间的封锁让人们意识到食品供应的脆弱性，促使更多人尝试“阳台农业”以求自给自足。心理疗愈 (Therapeutic Hobby)：在这个高科技时代，接触泥土是一种难得的放松和“数字排毒” (digital detox)。",
        key_arguments: [
          "Self-sufficiency (自给自足)",
          "Organic (有机的)",
          "Pesticide (农药)",
          "Therapeutic (疗愈的)",
          "Resurgence (复苏)",
          "Urban gardening (都市园艺)"
        ]
      },
      {
        id: 22203,
        topic_id: 222,
        content: "Part 3: Do you think it’s good to let kids learn how to plant?",
        thinking_logic: "反快餐文化 (Anti-Instant Gratification)：在这个点击即得的时代，种植教会孩子“等待”。植物生长需要时间，这培养了极大的耐心和责任感。食物来源教育 (Food Provenance)：很多城市孩子以为食物就是超市里长出来的。种植让他们理解“盘中餐”的来之不易，从而减少浪费。科学启蒙：这是最生动的生物课，涉及光合作用、生命周期等概念。",
        key_arguments: [
          "Responsibility (责任感)",
          "Provenance (起源)",
          "Patience (耐心)",
          "Hands-on (亲身实践的)",
          "Appreciate (感激)",
          "Life cycle (生命周期)"
        ]
      },
      {
        id: 22204,
        topic_id: 222,
        content: "Part 3: What do you think of the job of a farmer?",
        thinking_logic: "需要打破刻板印象，从“低端劳动”转向“重要且技术化”。社会脊梁 (Backbone of Society)：没有农民就没有粮食安全（food security）。被低估的艰辛 (Undervalued Hardship)：农民常常要看天吃饭（at the mercy of the weather），承受巨大的经济风险。技术转型 (Technological Transformation)：现代农民不再只是面朝黄土，他们需要掌握无人机、数据分析等技术（Precision Agriculture）。",
        key_arguments: [
          "Backbone (脊梁)",
          "Food security (粮食安全)",
          "Undervalued (被低估的)",
          "Arduous (艰辛的)",
          "Unpredictable (不可预测的)",
          "Vital (至关重要的)"
        ]
      },
      {
        id: 22205,
        topic_id: 222,
        content: "Part 3: What are the differences between traditional and modern agriculture?",
        thinking_logic: "效率与产量 (Efficiency & Yield)：传统农业依赖人力（manpower）和自然规律，产量低但环保。现代农业依赖机械化（mechanization）、转基因技术（GMO）和化肥，追求高产高效。环境影响 (Environmental Impact)：现代农业过度使用化学品导致土壤退化（soil degradation）和污染。技术应用：现代农业使用大数据、无人机监控作物健康，是数据驱动的（data-driven）。",
        key_arguments: [
          "Mechanization (机械化)",
          "Yield (产量)",
          "Sustainable (可持续的)",
          "Labor-intensive (劳动密集型的)",
          "Degradation (退化)",
          "Efficient (高效的)"
        ]
      },
      {
        id: 22206,
        topic_id: 222,
        content: "Part 3: What happened to the farmers' income during the pandemic?",
        thinking_logic: "这是一个经济学问题。供应链断裂 (Supply Chain Disruption)：由于封锁，物流中断，导致农产品无法运出，只能烂在地里（rot in the fields）。需求端崩溃 (Demand Collapse)：餐馆、学校食堂等大宗买家（bulk buyers）关闭，导致某些特定农产品需求归零。例外情况：那些能快速转向“社区团购”或直接面对消费者（Direct-to-Consumer）的农民可能反而增加了收入。",
        key_arguments: [
          "Disruption (中断)",
          "Plummet (暴跌)",
          "Logistics (物流)",
          "Rot (腐烂)",
          "Vulnerable (脆弱的)",
          "Volatility (波动性)"
        ]
      },
      {
        id: 22207,
        topic_id: 222,
        content: "Part 3: How do people grow plants in cities?",
        thinking_logic: "空间利用创新 (Space Innovation)：由于土地稀缺，城市农业向“天空”发展。屋顶花园 (Rooftop gardens) 和阳台种植 (Balcony gardening) 非常普遍。高科技方案 (High-tech Solutions)：垂直农业 (Vertical Farming) 和水培 (Hydroponics)/气培 (Aeroponics) 技术允许在室内无土栽培，且节水90%。这被视为未来城市的解决方案。社区花园 (Community Gardens)：在公共空间开辟共享地块 (allotments)，既能种菜，又能促进社区邻里关系。",
        key_arguments: [
            "Vertical farming (垂直农业)",
            "Hydroponics (水培法)",
            "Space-efficient (节省空间的)",
            "Concrete jungle (混凝土丛林)",
            "Allotment (小块菜地)",
            "Sustainable (可持续的)"
        ]
      }
    ]
  },
  {
    id: 223,
    title: "聪明的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an intelligent person you know.",
    questions: [
      { 
        id: 22301, 
        topic_id: 223, 
        content: "Describe an intelligent person you know. You should say: Who this person is, How you knew this person, What this person does, And explain why you think this person is intelligent.",
        sample_answer: {
          id: 22301,
          question_id: 22301,
          english_text: "I’d like to talk about my former high school math teacher, Mr. Wang. He taught me for three years, and honestly, he is one of the smartest people I’ve ever met. He wasn’t just a teacher; he was like a walking encyclopedia.\n\nAs I mentioned, he was my teacher in high school. I saw him almost every day during math class. At first, I was actually quite scared of him because he seemed very strict, but later I realized he just took his subject very seriously.\n\nCurrently, I believe he is still teaching at the same high school. Apart from teaching from textbooks, he often helps students prepare for national math competitions. He has a unique way of solving complex problems in just a few steps, which always amazed us.\n\nThe main reason I think he is intelligent is not just because he knows math well, but because he can explain difficult concepts in a very simple way. For me, true intelligence is being able to make others understand complex things. Also, he has a great memory; he could remember every student's name and their grades without looking at a list. That really impressed me.",
          chinese_translation: "我想谈谈我以前的高中数学老师，王老师。他教了我三年，老实说，他是我见过的最聪明的人之一。他不仅仅是一名老师，他就像一本行走的百科全书。\n\n正如我提到的，他是我高中的老师。在数学课上我几乎每天都见到他。起初，我其实很怕他，因为他看起来非常严厉，但后来我意识到他只是对他的学科非常认真。\n\n目前，我相信他还在那所高中教书。除了教教科书上的内容，他还经常帮助学生准备全国数学竞赛。他有一种独特的方法，只需几步就能解决复杂的问题，这总是让我们感到惊讶。\n\n我认为他聪明的主要原因不仅仅是因为他精通数学，而是因为他能用非常简单的方式解释困难的概念。对我来说，真正的智慧是能够让别人理解复杂的事情。此外，他的记忆力很好；不需要看名单就能记住每个学生的名字和成绩。这真的给我留下了深刻的印象。",
          vocabularies: [
            { word: "walking encyclopedia", definition: "A person who has a very impressive knowledge of facts or words.", phonetic: "/ˈwɔːkɪŋ ɪnˌsaɪkləˈpiːdiə/", example: "My teacher was a walking encyclopedia." },
            { word: "strict", definition: "Demanding that rules concerning behavior are obeyed and observed.", phonetic: "/strɪkt/", example: "He seemed very strict at first." },
            { word: "concept", definition: "An abstract idea; a general notion.", phonetic: "/ˈkɑːnsept/", example: "He explained difficult concepts simply." },
            { word: "impressed", definition: "Feeling or showing admiration or respect for someone or something.", phonetic: "/ɪmˈprest/", example: "I was really impressed by his memory." }
          ],
          sentences: [
            {
              english: "He wasn’t just a teacher; he was like a walking encyclopedia.",
              chinese: "他不仅仅是一名老师，他就像一本行走的百科全书。",
              key_words: ["walking encyclopedia"]
            },
            {
              english: "For me, true intelligence is being able to make others understand complex things.",
              chinese: "对我来说，真正的智慧是能够让别人理解复杂的事情。",
              key_words: ["intelligence", "complex"]
            }
          ]
        }
      },
      { 
        id: 22302, 
        topic_id: 223, 
        content: "Part 3: Why are some children more intelligent than others?",
        thinking_logic: "这是一个经典的“先天（Nature）与后天（Nurture）”的辩题。回答时应避免单一归因，而应采用“交互作用”（Interactionist approach）的视角。基因蓝图 (Genetic Blueprint)：智商（IQ）具有高度的遗传性（Heritability），称为“基因预设”（Genetic Predisposition）。环境的催化作用 (Environmental Catalysts)：基因设定反应范围，环境（产前、认知刺激、社会经济地位 SES）决定落点。神经可塑性 (Neuroplasticity)：早期环境输入重塑大脑网络。",
        key_arguments: [
          "Genetic predisposition (基因预设)",
          "Heritability (遗传性)",
          "Cognitive stimulation (认知刺激)",
          "Socioeconomic Status (社会经济地位)",
          "Neuroplasticity (神经可塑性)",
          "Nature vs. Nurture (先天与后天)"
        ]
      },
      { 
        id: 22303, 
        topic_id: 223, 
        content: "Part 3: Who do you think plays a more important role in a child’s development, teachers or parents?",
        thinking_logic: "此题不应简单选择其一，而应侧重于“角色分工”与“阶段性差异”。父母：基础构建者 (Parents as Foundational Architects)：提供情感安全感、价值观和初级社会化，是终身榜样。老师：学术与社会引导者 (Teachers as Academic & Social Guides)：负责认知发展和次级社会化（非亲属群体运作）。互补关系 (Complementary Roles)：父母给根（Roots），老师给翅膀（Wings），是合作伙伴关系。",
        key_arguments: [
          "Foundational (基础的)",
          "Primary socialization (初级社会化)",
          "Collaborative (协作的)",
          "Holistic development (全面发展)",
          "Role model (榜样)",
          "Complementary (互补的)"
        ]
      },
      { 
        id: 22304, 
        topic_id: 223, 
        content: "Part 3: Do you think smart people tend to be selfish?",
        thinking_logic: "旨在打破刻板印象。反驳偏见：智力与利他主义的关联 (Intelligence & Altruism)：研究表明高智商人群更倾向于利他，基于“昂贵信号理论”。长远眼光 (Long-term Perspective)：聪明人具备系统思维，明白合作与互惠 (Reciprocity) 比自私更能带来长远利益（非零和博弈）。例外：仅有逻辑智力缺乏情商可能导致精于算计 (Machiavellian)。",
        key_arguments: [
          "Altruistic (利他的)",
          "Stereotype (刻板印象)",
          "Reciprocity (互惠原则)",
          "Machiavellian (权谋的)",
          "Foresight (远见)",
          "Correlation (相关性)"
        ]
      },
      { 
        id: 22305, 
        topic_id: 223, 
        content: "Part 3: Are smart people happier than others?",
        thinking_logic: "这是一个非常复杂的关联，通常呈现“U型”或非线性关系。资源获取优势 (Resource Acquisition)：高智商通常与更好的学业、收入和健康相关，减少生存压力。 “无知是福”的反面 (The Burden of Awareness)：高智商人群更容易过度思考 (Over-analysis) 和存在主义危机 (Existential crisis)，即“海明威效应”。结论：智力本身不能保证幸福，幸福更多取决于情商 (EQ) 和心态。",
        key_arguments: [
          "Existential crisis (存在主义危机)",
          "Ignorance is bliss (无知是福)",
          "Over-analyze (过度分析)",
          "Correlation (相关性)",
          "Contentment (满足感)",
          "Burden (负担)"
        ]
      },
      { 
        id: 22306, 
        topic_id: 223, 
        content: "Part 3: Do you think it is necessary for managers to share their experience with their subordinates?",
        thinking_logic: "此题考察对领导力 (Leadership) 和知识管理的理解。mentorship 与成长 (Mentorship & Growth)：绝对必要。经验是“机构记忆”，分享经验 (Knowledge transfer) 能帮助下属避免陷阱 (Avoid pitfalls)，加速成长。避免微观管理 (Avoiding Micromanagement)：不应变成“强加方式”或扼杀创新 (Stifle innovation)。平衡点：分享“原则”和“教训”，目标是赋能 (Empower) 下属。",
        key_arguments: [
          "Knowledge transfer (知识转移)",
          "Mentorship (导师制度)",
          "Pitfall (陷阱)",
          "Empower (赋能)",
          "Micromanagement (微观管理)",
          "Insight (洞察力)"
        ]
      },
      { 
        id: 22307, 
        topic_id: 223, 
        content: "Part 3: Do you think an intelligence test is a must in company recruitment?",
        thinking_logic: "此题需要权衡“效率”与“公平/全面性”。支持：预测效率 (Predictive Validity)：对于需要快速学习、复杂解决问题的岗位，智力测试是高效工具，筛选高通用智力 (g-factor) 候选人。反对：局限性与偏见 (Limitations & Bias)：无法衡量软技能 (Soft skills) 如情商、毅力，且可能存在文化偏见 (Cultural bias)。结论：不应是“必须的” (Must)，应作为整体评估 (Holistic assessment) 的一部分。",
        key_arguments: [
          "Predictive validity (预测效度)",
          "Soft skills (软技能)",
          "Cognitive ability (认知能力)",
          "Holistic (整体的)",
          "Cultural bias (文化偏见)",
          "Indispensable (不可或缺的)"
        ]
      }
    ]
  },
  {
    id: 224,
    title: "会穿搭的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a well-dressed person you know.",
    questions: [
      { 
        id: 22401, 
        topic_id: 224, 
        content: "Describe a friend of yours who is well dressed and is good at dressing up. You should say: Who he/she is, How you knew him/her, What his/her dressing style is, And explain why he/she dresses this way.",
        sample_answer: {
          id: 22401,
          question_id: 22401,
          english_text: "I want to describe a friend of mine named Jessica. We were classmates at university and we also lived in the same dormitory building, so we hung out a lot. She is definitely a fashionista among my friends.\n\nHer style is very versatile. Sometimes she wears very professional outfits, like a blazer and trousers, which make her look like a businesswoman. But on weekends, she prefers a more casual and trendy look, like vintage jeans and colorful t-shirts. She is really good at matching colors and accessories, like using a scarf or a hat to make a simple outfit look special.\n\nI think she dresses this way because she believes that looking good gives her confidence. She often tells me that 'clothes make the man', or in this case, the woman. Also, she follows a lot of fashion bloggers on Instagram, so she gets a lot of inspiration from them. She just really enjoys the process of picking out clothes every morning.",
          chinese_translation: "我想描述我的一个朋友，叫杰西卡。我们是大学同学，也住在同一栋宿舍楼里，所以我们经常一起玩。她绝对是我朋友中的时尚达人。\n\n她的风格非常多变。有时她穿不搭配的袜子和戴巨大的手工帽子。有时她穿的衣服看起来像维多利亚时代的，混搭着现代运动鞋。这是一种非常复古的造型，但又带着疯狂的转折。\n\n我认为她这样穿是因为她相信好看的外表能给她自信。她经常告诉我‘人靠衣装’。此外，她在Instagram上关注了很多时尚博主，所以她从他们那里获得了很多灵感。她真的很享受每天早上挑选衣服的过程。",
          vocabularies: [
            { word: "fashionista", definition: "A person who follows trends in the fashion industry very closely.", phonetic: "/ˌfæʃəˈniːstə/", example: "She is a real fashionista." },
            { word: "versatile", definition: "Able to adapt or be adapted to many different functions or activities.", phonetic: "/ˈvɜːrsətl/", example: "Her style is very versatile." },
            { word: "outfit", definition: "A set of clothes worn together, especially for a particular occasion or purpose.", phonetic: "/ˈaʊtfɪt/", example: "She wears professional outfits." },
            { word: "inspiration", definition: "The process of being mentally stimulated to do or feel something.", phonetic: "/ˌɪnspəˈreɪʃn/", example: "She gets inspiration from fashion bloggers." }
          ],
          sentences: [
            {
              english: "She is really good at matching colors and accessories, like using a scarf or a hat to make a simple outfit look special.",
              chinese: "她非常擅长搭配颜色和配饰，比如用围巾或帽子让简单的衣服看起来很特别。",
              key_words: ["matching", "accessories"]
            },
            {
              english: "I think she dresses this way because she believes that looking good gives her confidence.",
              chinese: "我认为她这样穿是因为她相信好看的外表能给她自信。",
              key_words: ["confidence"]
            }
          ]
        }
      },
      {
        id: 22402,
        topic_id: 224,
        content: "Part 3: Do most people in your country prefer to buy clothes online or at the street market? Why?",
        thinking_logic: "趋势对比：年轻人倾向网购（Online Shopping）因为便捷（convenience）和种类丰富（variety）。老年人或注重体验的人倾向实体店/市场（Brick-and-mortar stores），因为可以试穿（try on）和触摸面料（tactile experience）。网购的弊端：尺码不符（sizing issues）。",
        key_arguments: [
          "E-commerce (电子商务)",
          "Tactile experience (触觉体验)",
          "Bargain (讨价还价)",
          "Convenience (便利)",
          "Virtual try-on (虚拟试穿)",
          "Return policy (退货政策)"
        ]
      },
      {
        id: 22403,
        topic_id: 224,
        content: "Part 3: Do you think young people know more about fashion and are better at dressing up than elderly people?",
        thinking_logic: "避免绝对化。年轻人更追逐潮流（Trend-conscious），受社交媒体影响大，倾向于快时尚（Fast Fashion）。老年人虽然可能不追逐最新款，但往往有独特的风格（Timeless Style）和对品质的坚持，这叫“Sartorial Wisdom”（着装智慧）。",
        key_arguments: [
          "Trend-conscious (有潮流意识的)",
          "Fast fashion (快时尚)",
          "Timeless elegance (永恒的优雅)",
          "Sartorial (着装的)",
          "Stereotype (刻板印象)",
          "Aesthetic (审美)"
        ]
      },
      {
        id: 22404,
        topic_id: 224,
        content: "Part 3: Do you think people would use clothing to show their identity?",
        thinking_logic: "绝对肯定。服装是非语言交流（Non-verbal communication）的主要形式。亚文化认同（Subculture affiliation）：如朋克、嘻哈风格。社会地位（Social Status）：奢侈品或职业装（suits）。文化身份（Cultural Identity）：传统服饰（Hanfu/Kimono）。",
        key_arguments: [
          "Self-expression (自我表达)",
          "Status symbol (地位象征)",
          "Affiliation (从属关系)",
          "Non-verbal communication (非语言交流)",
          "Conformity (从众)",
          "Individuality (个性)"
        ]
      },
      {
        id: 22405,
        topic_id: 224,
        content: "Part 3: Why do many people prefer to buy rather expensive clothes?",
        thinking_logic: "品质与耐用性（Quality & Durability）：一分钱一分货，好衣服穿得久（Cost-per-wear）。心理满足与自信（Psychological Boost）：穿名牌让人感觉更好（Enclothed Cognition）。社会信号（Social Signaling）：展示经济实力。",
        key_arguments: [
          "Durability (耐用性)",
          "Prestige (声望)",
          "Craftsmanship (工艺)",
          "Investment piece (投资单品)",
          "Psychological satisfaction (心理满足)",
          "Status symbol (地位象征)"
        ]
      },
      {
        id: 22406,
        topic_id: 224,
        content: "Part 3: What are the differences between cheap and expensive clothes?",
        thinking_logic: "面料（Fabric）：天然纤维（丝绸、羊毛）vs 合成纤维（聚酯）。剪裁（Cut/Fit）：廉价衣服通常是大规模生产的通码，昂贵衣服更注重剪裁贴合。道德成本（Ethical Cost）：廉价衣服背后可能是血汗工厂（Sweatshops）。",
        key_arguments: [
          "Synthetic fibers (合成纤维)",
          "Tailoring (剪裁)",
          "Mass-produced (大规模生产的)",
          "Ethical manufacturing (道德制造)",
          "Longevity (寿命)",
          "Texture (质感)"
        ]
      },
      {
        id: 22407,
        topic_id: 224,
        content: "Part 3: Why do some people care so much about their clothing?",
        thinking_logic: "首因效应（First Impressions）：外表影响他人的判断（Halo Effect）。职业需求（Professional Necessity）：律师、银行家需要显得专业。艺术表达（Artistic Expression）：把身体当画布。不安全感（Insecurity）：用外表掩饰内在。",
        key_arguments: [
          "First impression (第一印象)",
          "Self-esteem (自尊)",
          "Validation (认可)",
          "Artistic expression (艺术表达)",
          "Professional image (职业形象)",
          "Vanity (虚荣)"
        ]
      }
    ]
  },
  {
    id: 225,
    title: "童年朋友",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a friend from your childhood.",
    questions: [
      { 
        id: 22501, 
        topic_id: 225, 
        content: "Describe a friend from your childhood. You should say: Who he/she is, Where and how you met each other, What you often did together, And explain what made you like him/her.",
        sample_answer: {
          id: 22501,
          question_id: 22501,
          english_text: "I’m going to talk about Tom, who was my neighbor when I was a little kid. We were born in the same year, so we basically grew up together.\n\nWe met even before primary school because our parents were friends and lived next door. I don't remember the exact moment we met, but my earliest memory is playing with toy cars in his backyard.\n\nWe did almost everything together. We used to ride our bikes around the neighborhood until it got dark. We also played a lot of video games, especially on weekends. I remember we would sometimes get into trouble for breaking a window or making too much noise, but it was always fun.\n\nI like him because we have a strong bond. Even though we don't see each other as often now because we study in different cities, whenever we meet, it feels like nothing has changed. He is a very loyal friend. He knows all my embarrassing childhood stories, and I trust him completely.",
          chinese_translation: "我要谈谈汤姆，他是我小时候的邻居。我们是同一年出生的，所以我们基本上是一起长大的。\n\n我们在上小学之前就认识了，因为我们的父母是朋友，而且住在隔壁。我不记得我们相遇的确切时刻，但我最早的记忆是在他家后院玩玩具车。\n\n我们几乎什么都一起做。我们几乎骑自行车在附近转悠，直到天黑。我们也玩了很多电子游戏，尤其是在周末。我记得我们有时会因为打破窗户或制造太多噪音而惹上麻烦，但这总是很有趣。\n\n我喜欢他因为我们有很深的羁绊。尽管我们现在因为在不同的城市学习而不常常见面，但每当我见面时，感觉一切都没有变。他是一个非常忠诚的朋友。他知道我所有尴尬的童年故事，我完全信任他。",
          vocabularies: [
            { word: "bond", definition: "A relationship between people or groups based on shared feelings, interests, or experiences.", phonetic: "/bɑːnd/", example: "We have a strong bond." },
            { word: "loyal", definition: "Giving or showing firm and constant support or allegiance to a person or institution.", phonetic: "/ˈlɔɪəl/", example: "He is a loyal friend." },
            { word: "embarrassing", definition: "Causing a feeling of self-consciousness, shame, or awkwardness.", phonetic: "/ɪmˈbærəsɪŋ/", example: "He knows my embarrassing stories." },
            { word: "trouble", definition: "Difficulty or problems.", phonetic: "/ˈtrʌbl/", example: "We used to get into trouble." }
          ],
          sentences: [
            {
              english: "We met even before primary school because our parents were friends and lived next door.",
              chinese: "我们在上小学之前就认识了，因为我们的父母是朋友，而且住在隔壁。",
              key_words: ["next door"]
            },
            {
              english: "Whenever we meet, it feels like nothing has changed.",
              chinese: "每当我们见面时，感觉一切都没有变。",
              key_words: ["changed"]
            }
          ]
        }
      },
      {
        id: 22502,
        topic_id: 225,
        content: "Part 3: Do you still keep in touch with your friends from childhood? Why or why not?",
        thinking_logic: "个人经历与普遍趋势的结合。生活轨迹的偏离 (Diverging life paths)：因为搬家、升学、工作，物理距离导致关系疏远（drift apart）。技术的弥补 (Technological Bridge)：虽然不常见面，但通过社交媒体（social media）保持“弱连接”（weak ties）。怀旧与纽带 (Nostalgia & Bond)：童年朋友见证了成长，这种共同记忆（shared memory）是不可替代的。",
        key_arguments: [
          "Drift apart (渐行渐远)",
          "Nostalgia (怀旧)",
          "Diverging paths (不同的人生道路)",
          "Shared memory (共同记忆)",
          "Low maintenance (低维护成本)",
          "Sentimental value (情感价值)"
        ]
      },
      {
        id: 22503,
        topic_id: 225,
        content: "Part 3: How important is childhood friendship to children?",
        thinking_logic: "社交技能的实验室 (Laboratory for Social Skills)：孩子在友谊中学习分享、解决冲突 (conflict resolution) 和同理心 (empathy)。情感支持 (Emotional Support)：朋友提供了除家庭以外的安全感，有助于建立自尊 (self-esteem)。社会化过程 (Socialization)：如同伴群体 (peer group) 影响个人的价值观形成。",
        key_arguments: [
          "Social skills (社交技能)",
          "Conflict resolution (冲突解决)",
          "Formative years (性格形成期)",
          "Companionship (陪伴)",
          "Peer influence (同伴影响)",
          "Emotional resilience (情感韧性)"
        ]
      },
      {
        id: 22504,
        topic_id: 225,
        content: "Part 3: What do you think of communicating via social media?",
        thinking_logic: "双刃剑 (Double-edged sword)。优势：便捷 (Convenience)、打破地理限制、维持人脉。劣势：肤浅 (Superficial)、缺乏非语言线索 (Lack of non-verbal cues) 导致误解、精心修饰的展示 (Curated personas) 引发焦虑。结论：是面对面交流的补充，而非替代。",
        key_arguments: [
          "Convenient (便捷的)",
          "Superficial (肤浅的)",
          "Non-verbal cues (非语言线索)",
          "Instant gratification (即时满足)",
          "Cyberbullying (网络霸凌)",
          "Disconnect (脱节)"
        ]
      },
      {
        id: 22505,
        topic_id: 225,
        content: "Part 3: Do you think online communication through social media will replace face-to-face communication?",
        thinking_logic: "不太可能 (Unlikely)。人类的本质需求：我们渴望物理接触和真实的亲密感 (Intimacy)。信息的丰富度：面对面包含肢体语言、语气、眼神接触，这些是文字无法传达的细微差别 (Nuance)。补充关系 (Supplement vs Substitute)：在线交流适合传递信息，线下交流适合建立情感。",
        key_arguments: [
          "Irreplaceable (不可替代的)",
          "Nuance (细微差别)",
          "Body language (肢体语言)",
          "Intimacy (亲密感)",
          "Supplement (补充)",
          "Virtual interaction (虚拟互动)"
        ]
      },
      {
        id: 22506,
        topic_id: 225,
        content: "Part 3: What's the difference between having younger friends and older friends?",
        thinking_logic: "年长朋友：导师角色 (Mentorship)，提供智慧 (Wisdom)、生活经验和稳定性，有助于职业指导。年轻朋友：活力源泉 (Source of Energy)，带来新观念、流行趋势 (Trends) 和激情，让人保持心态年轻。代沟与互补 (Generation Gap & Complementarity)：不同年龄的朋友提供不同的视角 (Perspective)。",
        key_arguments: [
          "Wisdom (智慧)",
          "Life experience (生活经验)",
          "Mentorship (指导)",
          "Perspective (视角)",
          "Generation gap (代沟)",
          "Vitality (活力)"
        ]
      },
      {
        id: 22507,
        topic_id: 225,
        content: "Part 3: Has technology changed people's friendships? How?",
        thinking_logic: "维护成本降低 (Lower Maintenance)：以前搬家意味着失联，现在可以轻松保持联系。关系的广度 vs 深度 (Width vs Depth)：虽然朋友数量增加了（Facebook好友），但深层交流可能减少了。‘准社会关系’ (Parasocial Relationships)：我们觉得了解某人，其实只是在看他们的动态。数字化记忆 (Digital Memories)：照片和聊天记录让回忆更容易保存。",
        key_arguments: [
          "Superficial (表面的)",
          "Maintenance (维护)",
          "Connectivity (连接性)",
          "Digital footprint (数字足迹)",
          "Paradox of choice (选择的悖论)",
          "Alienation (疏离感)"
        ]
      }
    ]
  },
  {
    id: 226,
    title: "从不喜欢到喜欢的朋友",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person you disliked at first but ended up being friends with.",
    questions: [
      {
        id: 22601,
        topic_id: 226,
        content: "Describe a person you disliked at first but ended up being friends with. You should say: Who he/she is, How you knew him/her, Why you disliked him/her at first but changed your mind, And explain how you feel about the experience.",
        sample_answer: {
          id: 22601,
          question_id: 22601,
          english_text: "I’d like to describe a colleague of mine named John. I met him about two years ago when I was my part-time job at a coffee shop. He was the senior staff member there who was supposed to train me.\n\nTo be honest, my first impression of him was terrible. He seemed very cold and arrogant. He didn't smile much and he was very critical of my mistakes when I was making coffee. I thought he was just being mean and bossy, so I tried to avoid him as much as possible.\n\nHowever, things changed after a few weeks. One day, the shop was extremely busy and I dropped a tray of cups. Instead of shouting at me, he immediately helped me clean up and told the customers to be patient. I realized then that he wasn't mean; he was just very professional and maybe a bit shy. We started talking more during our breaks and I found out we shared similar hobbies.\n\nI feel that this experience taught me a valuable lesson: don't judge a book by its cover. It takes time to really know someone. Now we are good friends, and I’m glad I didn't stay angry at him.",
          chinese_translation: "我想描述我的一位同事，叫约翰。我大约两年前开始在一家咖啡店做兼职时认识了他。他是那里的老员工，负责培训我。\n\n老实说，我对他的第一印象糟透了。他看起来非常冷漠和傲慢。他不怎么笑，而且我在做咖啡出错时他非常挑剔。我觉得他很刻薄、爱发号施令，所以我尽量避开他。\n\n然而，几周后情况发生了变化。有一天，店里非常忙，我不小心打翻了一托盘杯子。他没有对我大喊大叫，而是立刻帮我清理，并告诉顾客要有耐心。那时我意识到他并不刻薄；他只是非常专业，可能还有点害羞。我们在休息时间开始更多地交谈，发现我们要有相似的爱好。\n\n我觉得这次经历教会了我一个宝贵的教训：不要以貌取人。真正了解一个人是需要时间的。现在我们是好朋友，我很高兴没有一直生他的气。",
          vocabularies: [
            { word: "impression", definition: "An idea or opinion of what something or someone is like.", phonetic: "/ɪmˈpreʃ.ən/", example: "My first impression of him was terrible." },
            { word: "arrogant", definition: "Unhpleasantly proud and behaving as if you are more important than, or know more than, other people.", phonetic: "/ˈer.ə.ɡənt/", example: "He seemed very cold and arrogant." },
            { word: "critical", definition: "Saying that someone or something is bad or wrong.", phonetic: "/ˈkrɪt̬.ɪ.kəl/", example: "He was very critical of my mistakes." },
            { word: "bossy", definition: "A bossy person is always telling people what to do.", phonetic: "/ˈbɑː.si/", example: "I thought he was just being mean and bossy." },
            { word: "judge a book by its cover", definition: "To judge someone or something based only on appearance.", phonetic: "/dʒʌdʒ/", example: "Don't judge a book by its cover." }
          ],
          sentences: [
            {
              english: "To be honest, my first impression of him was terrible.",
              chinese: "老实说，我对他的第一印象糟透了。",
              key_words: ["first impression"]
            },
            {
              english: "I feel that this experience taught me a valuable lesson: don't judge a book by its cover.",
              chinese: "我觉得这次经历教会了我一个宝贵的教训：不要以貌取人。",
              key_words: ["lesson", "judge a book by its cover"]
            }
          ]
        }
      },
      {
        id: 22602,
        topic_id: 226,
        content: "Part 3: What do you think of making friends online?",
        thinking_logic: "权衡利弊（Weighing pros and cons）。优点是打破地理限制（geographical barriers），能找到志同道合（like-minded）的人。缺点是缺乏真实感（lack of authenticity），存在安全隐患（safety concerns/catfishing）。",
        key_arguments: [
          "Digital native (数字原住民)",
          "Catfishing (网络欺诈/虚假身份)",
          "Like-minded (志同道合的)",
          "Superficial (肤浅的)",
          "Authenticity (真实性)",
          "Accessibility (易接近性)"
        ]
      },
      {
        id: 22603,
        topic_id: 226,
        content: "Part 3: Is it a good idea to make friends who are much older than you?",
        thinking_logic: "肯定态度。跨代友谊（Intergenerational friendship）非常有益。年长者提供智慧（wisdom）、经验（life experience）和不同的视角（perspective）。年轻人提供活力（vitality）和新趋势的知识。这是一种互补关系（complementary relationship）。",
        key_arguments: [
          "Intergenerational (跨代的)",
          "Wisdom (智慧)",
          "Perspective (视角)",
          "Mentor (导师)",
          "Mutual benefit (互惠互利)",
          "Generation gap (代沟)"
        ]
      },
      {
        id: 22604,
        topic_id: 226,
        content: "Part 3: Do you enjoy meeting new people?",
        thinking_logic: "个人偏好题，可以回答“是”或“否”，关键是解释原因。外向者（Extroverts）从社交中获得能量（energized by social interaction），喜欢新鲜感（novelty）。内向者（Introverts）可能觉得累（draining），更喜欢深层关系（deep connections）而非广泛的社交。",
        key_arguments: [
          "Extrovert (外向者)",
          "Introvert (内向者)",
          "Social butterfly (交际花)",
          "Energizing (充满活力的)",
          "Draining (消耗精力的)",
          "Small talk (闲聊)"
        ]
      },
      {
        id: 22605,
        topic_id: 226,
        content: "Part 3: Do you think friendship is important?",
        thinking_logic: "绝对重要。社会性动物（Social animals）。朋友提供情感支持（emotional support）、归属感（sense of belonging）和缓解压力（stress relief）。没有朋友会导致孤独（isolation）和心理健康问题。",
        key_arguments: [
          "Indispensable (不可或缺的)",
          "Emotional support (情感支持)",
          "Sense of belonging (归属感)",
          "Social support network (社会支持网络)",
          "Isolation (孤立)",
          "Well-being (幸福感)"
        ]
      },
      {
        id: 22606,
        topic_id: 226,
        content: "Part 3: Why is it difficult for some people to make friends with others?",
        thinking_logic: "分析原因。性格因素：害羞（shyness）、社交焦虑（social anxiety）、缺乏自信（low self-esteem）。生活方式：忙碌（hectic lifestyle）、数字化隔离（digital isolation）。社交技能缺乏（Lack of social skills）。过去的创伤（Trust issues）。",
        key_arguments: [
          "Social anxiety (社交焦虑)",
          "Introversion (内向)",
          "Trust issues (信任问题)",
          "Hectic lifestyle (忙碌的生活方式)",
          "Vulnerable (脆弱的)",
          "Barrier (障碍)"
        ]
      },
      {
        id: 22607,
        topic_id: 226,
        content: "Part 3: Do we benefit from having friends with different personalities?",
        thinking_logic: "绝对受益。走出舒适区（Comfort zone）。不同性格的朋友（如乐观者 vs 现实主义者）能提供平衡（balance）和多元化的视角（diverse perspectives）。“回声室效应”（Echo chamber）是危险的，我们需要不同的声音来成长。",
        key_arguments: [
          "Echo chamber (回声室效应)",
          "Complementary (互补的)",
          "Perspective (视角)",
          "Comfort zone (舒适区)",
          "Challenge (挑战)",
          "Broaden horizons (开阔视野)"
        ]
      }
    ]
  },
  {
    id: 227,
    title: "激励你做有趣事情的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person who inspired you to do something interesting.",
    questions: [
      {
        id: 22701,
        topic_id: 227,
        content: "Describe a person who inspired you to do something interesting. You should say: Who he/she is, How you knew him/her, What interesting thing you did, And explain how he/she inspired you to do it.",
        sample_answer: {
          id: 22701,
          question_id: 22701,
          english_text: "I’d like to talk about my cousin, Alex. We grew up together, so I’ve known him all my life. He is a very adventurous person who always likes to try new things.\n\nThe interesting thing I did was learning to surf. Last summer, Alex invited me to go to a beach town for a holiday. I had never touched a surfboard before and honestly, I was a bit scared of the ocean.\n\nHe inspired me by showing me how exciting it is to catch a wave. He didn't force me; instead, he just led by example. He told me that life is about overcoming fears. Seeing him having so much fun in the water made me feel like I was missing out. So, I finally gave it a try, and it turned out to be an amazing experience.",
          chinese_translation: "我想谈谈我的表弟亚历克斯。我们一起长大，所以我这辈子都认识他。他是一个非常喜欢冒险的人，总是喜欢尝试新事物。\n\n我做的有趣的事情是学习冲浪。去年夏天，亚历克斯邀请我去一个海滨小镇度假。我以前从未接触过冲浪板，老实说，我有点害怕大海。\n\n他向我展示了乘风破浪是多么令人兴奋，从而激励了我。他没有强迫我；相反，他只是以身作则。他告诉我，生活就是克服恐惧。看到他在水里玩得那么开心，让我觉得自己好像错过了什么。所以，我终于试了一下，结果那是一次奇妙的经历。",
          vocabularies: [
            { word: "adventurous", definition: "Willing to try new or difficult things.", phonetic: "/ədˈven.tʃɚ.əs/", example: "He is a very adventurous person." },
            { word: "led by example", definition: "To show others what you want them to do by doing it yourself.", phonetic: "/led baɪ ɪɡˈzæm.pəl/", example: "He just led by example." },
            { word: "missing out", definition: "To fail to use an opportunity to enjoy or gain something.", phonetic: "/ˈmɪs.ɪŋ aʊt/", example: "I felt like I was missing out." }
          ],
          sentences: [
            {
              english: "He didn't force me; instead, he just led by example.",
              chinese: "他没有强迫我；相反，他只是以身作则。",
              key_words: ["led by example"]
            },
            {
              english: "Seeing him having so much fun in the water made me feel like I was missing out.",
              chinese: "看到他在水里玩得那么开心，让我觉得自己好像错过了什么。",
              key_words: ["missing out"]
            }
          ]
        }
      },
      {
        id: 22702,
        topic_id: 227,
        content: "Part 3: What qualities make someone a role model?",
        thinking_logic: "核心在于“值得效仿的特质”。不仅仅是成功 (Success)，更重要的是品格 (Character)。正直 (Integrity)：言行一致。韧性 (Resilience)：面对失败不放弃。利他主义 (Altruism)：关心他人和社会。专业能力 (Competence)：在某个领域表现卓越。",
        key_arguments: [
          "Integrity (正直)",
          "Resilience (韧性)",
          "Altruism (利他主义)",
          "Emulate (效仿)",
          "Exemplary (模范的)",
          "Inspire (激励)"
        ]
      },
      {
        id: 22703,
        topic_id: 227,
        content: "Part 3: Why should children learn from role models?",
        thinking_logic: "观察学习理论 (Observational Learning)：儿童通过模仿 (Mimicry) 学习。榜样提供了具体的行为模板 (Behavioral Template)。价值观的具象化：抽象的概念（如勇敢、诚实）在榜样身上变得可见。激励作用 (Aspiration)：榜样展示了“可能性”，鼓励孩子设定更高的目标。",
        key_arguments: [
          "Observational learning (观察学习)",
          "Mimic (模仿)",
          "Behavioral template (行为模板)",
          "Aspiration (抱负)",
          "Moral compass (道德指南)",
          "Tangible (可触知的)"
        ]
      },
      {
        id: 22704,
        topic_id: 227,
        content: "Part 3: Who can influence children more, teachers or parents?",
        thinking_logic: "分阶段和分领域讨论。父母：早期影响 (Early Impact) 和价值观基础 (Foundational Values)，提供情感安全感。老师：学龄期影响 (School-age Impact)，负责学术发展和社会化 (Socialization)，是家庭之外的权威人物。结论：互补关系，但父母的影响通常更深远且终身。",
        key_arguments: [
          "Foundational (基础的)",
          "Primary caregiver (主要照顾者)",
          "Socialization (社会化)",
          "Academic guidance (学术指导)",
          "Formative years (性格形成期)",
          "Complementary (互补的)"
        ]
      },
      {
        id: 22705,
        topic_id: 227,
        content: "Part 3: What kind of international news inspires people?",
        thinking_logic: "克服逆境的故事 (Triumph over adversity)：如救援行动、残奥会运动员。科学突破 (Scientific Breakthroughs)：如治愈疾病、太空探索，展示人类智慧。人道主义援助 (Humanitarian Aid)：展示全球团结 (Solidarity) 和同理心。",
        key_arguments: [
          "Humanitarian (人道主义的)",
          "Breakthrough (突破)",
          "Solidarity (团结)",
          "Resilience (韧性)",
          "Uplifting (令人振奋的)",
          "Triumph (胜利)"
        ]
      },
      {
        id: 22706,
        topic_id: 227,
        content: "Part 3: Besides parents and teachers, who else can motivate children?",
        thinking_logic: "同龄人 (Peers)：同伴压力 (Peer pressure) 可以是积极的竞争动力。公众人物 (Public Figures)：运动员、科学家、艺术家展示了成功的路径。虚构人物 (Fictional Characters)：超级英雄或书中的主角教会孩子勇气和正义。",
        key_arguments: [
          "Peer influence (同伴影响)",
          "Role model (榜样)",
          "Public figure (公众人物)",
          "Fictional character (虚构人物)",
          "Idol (偶像)",
          "Intrinsic motivation (内在动机)"
        ]
      },
      {
        id: 22707,
        topic_id: 227,
        content: "Part 3: Can online teaching motivate students to learn? How?",
        thinking_logic: "可以，但方式不同。游戏化 (Gamification)：排行榜、徽章让学习变得有趣。个性化节奏 (Self-paced)：学生可以掌控自己的进度，减少挫败感。多媒体互动 (Multimedia Interactivity)：视频、动画比课本更吸引人。挑战：需要自律 (Self-discipline)，缺乏面对面的监督。",
        key_arguments: [
          "Gamification (游戏化)",
          "Self-paced (自定进度的)",
          "Interactive (互动的)",
          "Engagement (参与度)",
          "Self-discipline (自律)",
          "Accessibility (可获得性)"
        ]
      }
    ]
  },
  {
    id: 228,
    title: "劝你做某事的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person who persuaded you to do something.",
    questions: [
      {
        id: 22801,
        topic_id: 228,
        content: "Describe a person who persuaded you to do something. You should say: When it happened, What he/she persuaded you to do, Why he/she persuaded you to do it, And explain whether you did it at last.",
        sample_answer: {
          id: 22801,
          question_id: 22801,
          english_text: "This happened about two years ago. My best friend, Lisa, tried to persuade me to join a gym with her. At that time, I was quite lazy and preferred staying at home playing video games.\n\nShe kept telling me that our health is the most important thing. She noticed that I was gaining weight and getting tired easily. She argued that if we went together, we could motivate each other, so it wouldn't be boring.\n\nYes, eventually, I agreed. I signed up for a membership. Although it was really hard for the first few weeks, I’m glad she persuaded me because now I feel much more energetic and fit. It was definitely a good decision.",
          chinese_translation: "这发生在两年前。我最好的朋友丽莎试图说服我和她一起去健身房。那时，我很懒，更喜欢呆在家里玩电子游戏。\n\n她一直告诉我健康是最重要的。她注意到我体重增加，而且容易疲劳。她认为如果我们一起去，我们可以互相激励，这样就不会无聊了。\n\n是的，最终我同意了。我报名成为了会员。虽然前几周真的很难，但我很高兴她说服了我，因为现在我感觉精力充沛，身体健康。这绝对是一个正确的决定。",
          vocabularies: [
            { word: "persuade", definition: "To make someone do or believe something by giving them a good reason to do it.", phonetic: "/pɚˈsweɪd/", example: "She tried to persuade me." },
            { word: "motivate", definition: "To cause someone to behave in a particular way.", phonetic: "/ˈmoʊ.t̬ə.veɪt/", example: "We could motivate each other." },
            { word: "energetic", definition: "Having or involving a lot of energy.", phonetic: "/ˌen.ɚˈdʒet̬.ɪk/", example: "I feel much more energetic." }
          ],
          sentences: [
            {
              english: "She argued that if we went together, we could motivate each other, so it wouldn't be boring.",
              chinese: "她认为如果我们一起去，我们可以互相激励，这样就不会无聊了。",
              key_words: ["motivate"]
            },
            {
              english: "I’m glad she persuaded me because now I feel much more energetic and fit.",
              chinese: "我很高兴她说服了我，因为现在我感觉精力充沛，身体健康。",
              key_words: ["persuaded", "energetic"]
            }
          ]
        }
      },
      {
        id: 22802,
        topic_id: 228,
        content: "Part 3: What impact does advertising have on children and their parents?",
        thinking_logic: "关注‘纠缠力’ (Pester Power)。广告针对儿童，制造欲望，导致孩子纠缠父母购买。这不仅造成经济压力 (financial strain)，还可能引发家庭冲突。此外，它从小培养了物质主义 (materialism)。",
        key_arguments: [
          "Pester power (纠缠力)",
          "Materialism (物质主义)",
          "Financial strain (经济压力)",
          "Manipulation (操纵)",
          "Consumerism (消费主义)"
        ]
      },
      {
        id: 22803,
        topic_id: 228,
        content: "Part 3: What do parents often persuade their children to do?",
        thinking_logic: "通常围绕‘长期利益’ vs ‘短期快乐’。父母劝说孩子做那些‘虽然枯燥但有益’的事情，如学习、吃蔬菜、早睡。这是为了培养纪律 (discipline) 和健康习惯。",
        key_arguments: [
          "Academic excellence (学业优秀)",
          "Nutritious diet (营养饮食)",
          "Discipline (纪律)",
          "Delayed gratification (延迟满足)",
          "Extracurriculars (课外活动)"
        ]
      },
      {
        id: 22804,
        topic_id: 228,
        content: "Part 3: Who do children listen to more, their parents or their teachers? Why?",
        thinking_logic: "分阶段讨论。幼儿期：父母是绝对权威。学龄期：老师具有‘专家权威’ (Expert Authority)，孩子可能觉得老师‘更懂’。青春期：可能谁都不听，只听同龄人 (Peers)。",
        key_arguments: [
          "Authority figure (权威人物)",
          "Role model (榜样)",
          "Emotional bond (情感纽带)",
          "Rebellion (叛逆)",
          "Peer influence (同伴影响)"
        ]
      },
      {
        id: 22805,
        topic_id: 228,
        content: "Part 3: What are some good ways to persuade children?",
        thinking_logic: "对比‘强制’与‘引导’。最好的方式是‘正向强化’ (Positive Reinforcement) 和‘讲道理’ (Reasoning)。以身作则 (Role Modeling) 也是一种无声的劝说。恐吓或贿赂 (Bribery) 通常不可持续。",
        key_arguments: [
          "Positive reinforcement (正向强化)",
          "Incentivize (激励)",
          "Reasoning (讲道理)",
          "Role modeling (榜样作用)",
          "Coercion (强迫)"
        ]
      },
      {
        id: 22806,
        topic_id: 228,
        content: "Part 3: What advice should young people follow?",
        thinking_logic: "区分‘实用建议’和‘道德指南’。理财建议 (Financial literacy) 和职业规划非常重要。但更关键的是培养‘批判性思维’ (Critical Thinking)，学会筛选建议，而不是盲从。",
        key_arguments: [
          "Financial literacy (金融素养)",
          "Critical thinking (批判性思维)",
          "Blindly follow (盲从)",
          "Constructive criticism (建设性批评)",
          "Mentorship (指导)"
        ]
      },
      {
        id: 22807,
        topic_id: 228,
        content: "Part 3: How do advertisements persuade people?",
        thinking_logic: "利用心理触发点 (Psychological Triggers)。1. 制造焦虑 (FOMO - 错失恐惧症)。2. 情感共鸣 (Emotional Appeal)。3. 名人效应 (Celebrity Endorsement)。4. 创造虚假需求 (Artificial Needs)。",
        key_arguments: [
          "FOMO (错失恐惧症)",
          "Emotional appeal (情感诉求)",
          "Celebrity endorsement (名人代言)",
          "Subliminal (潜意识的)",
          "Bandwagon effect (从众效应)",
          "Aspirational (梦寐以求的)"
        ]
      }
    ]
  },
  {
    id: 229,
    title: "奇装异服的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person who you think wears unusual clothes.",
    questions: [
      {
        id: 22901,
        topic_id: 229,
        content: "Describe a person who you think wears unusual clothes. You should say: Who this person is, How you knew this person, What his/her clothes are like, And explain why you think his/her clothes are unusual.",
        sample_answer: {
          id: 22901,
          question_id: 22901,
          english_text: "I want to describe a girl named Luna who was in my art class at university. We weren't very close friends, but everyone on campus knew her because of her appearance.\n\nHer style is very eccentric and colorful. She often wears mismatched socks and huge, handmade hats. Sometimes she wears clothes that look like they are from the Victorian era, mixed with modern sneakers. It’s a very vintage look but with a crazy twist.\n\nI think her clothes are unusual because they don't follow any mainstream fashion trends. Most people just wear jeans and T-shirts, but she treats her body like a canvas. While some people might think it looks weird, I actually admire her confidence to stand out from the crowd.",
          chinese_translation: "我想描述一个叫Luna的女孩，她是我大学艺术课上的同学。我们不是非常亲密的朋友，但校园里的每个人都知道她，因为她的外表。\n\n她的风格非常古怪和多彩。她经常穿不搭配的袜子和戴巨大的手工帽子。有时她穿的衣服看起来像维多利亚时代的，混搭着现代运动鞋。这是一种非常复古的造型，但又带着疯狂的转折。\n\n我认为她的衣服不寻常，因为它们不追随任何主流时尚潮流。大多数人只穿牛仔裤和T恤，但她把自己的身体当作画布。虽然有些人可能觉得这看起来很奇怪，但我其实很佩服她敢于在人群中脱颖而出的自信。",
          vocabularies: [
            { word: "eccentric", definition: "Strange or unusual, sometimes in a humorous way.", phonetic: "/ɪkˈsen.trɪk/", example: "Her style is very eccentric." },
            { word: "mismatched", definition: "Putting together things that do not go well with each other.", phonetic: "/ˌmɪsˈmætʃt/", example: "She wears mismatched socks." },
            { word: "canvas", definition: "A piece of cloth used by artists for painting on.", phonetic: "/ˈkæn.vəs/", example: "She treats her body like a canvas." }
          ],
          sentences: [
            {
              english: "Her style is very eccentric and colorful.",
              chinese: "她的风格非常古怪和多彩。",
              key_words: ["eccentric"]
            },
            {
              english: "Most people just wear jeans and T-shirts, but she treats her body like a canvas.",
              chinese: "大多数人只穿牛仔裤和T恤，但她把自己的身体当作画布。",
              key_words: ["canvas"]
            }
          ]
        }
      },
      {
        id: 22902,
        topic_id: 229,
        content: "Part 3: What are the differences between clothes worn by old people and those by young people?",
        thinking_logic: "趋势对比：年轻人更注重时尚表达 (self-expression) 和追逐潮流 (trendy)，容易受同伴影响，倾向于快时尚。老年人更注重舒适 (comfort) 和实用 (practicality)，风格偏向保守 (conservative) 和经典，不太在意别人的眼光。",
        key_arguments: [
          "Generation gap (代沟)",
          "Conservative (保守的)",
          "Trendy (时髦的)",
          "Practicality (实用性)",
          "Self-expression (自我表达)",
          "Durability (耐用性)"
        ]
      },
      {
        id: 22903,
        topic_id: 229,
        content: "Part 3: What kind of clothes do people wear in the workplace?",
        thinking_logic: "分情况讨论。传统行业（金融、法律）要求正装 (formal attire/suits) 以显示专业性 (professionalism)。创意行业或科技公司倾向于商务休闲 (smart-casual) 甚至完全休闲，强调舒适和个性。远程办公 (Remote work) 的兴起也让着装变得更加随意。",
        key_arguments: [
          "Dress code (着装规范)",
          "Professional attire (职业装)",
          "Smart-casual (商务休闲)",
          "Corporate image (企业形象)",
          "Uniform (制服)",
          "Remote work (远程办公)"
        ]
      },
      {
        id: 22904,
        topic_id: 229,
        content: "Part 3: Do you think it is a good idea to buy clothes online?",
        thinking_logic: "利弊分析。利：方便 (Convenience)、种类多 (Variety)、价格透明易比价。弊：无法试穿导致尺码问题 (Sizing issues)、面料手感未知 (Tactile experience)、退换货麻烦 (Return hassle)。结论：适合买标准品，不适合买讲究剪裁的衣服。",
        key_arguments: [
          "E-commerce (电子商务)",
          "Convenience (便利)",
          "Sizing issues (尺码问题)",
          "Tactile experience (触觉体验)",
          "Return policy (退货政策)",
          "Visual discrepancy (视觉差异)"
        ]
      },
      {
        id: 22905,
        topic_id: 229,
        content: "Part 3: Do you think young people wear unusual clothes more than other age groups?",
        thinking_logic: "是的。身份探索 (Identity Exploration)：年轻人正处于寻找自我的阶段，服装是表达个性的工具和叛逆 (Rebellion) 的工具。同伴压力 (Peer Pressure) 和亚文化 (Subculture) 影响也更大。老年人通常已经形成了稳定的审美，不太需要通过奇装异服来博眼球。",
        key_arguments: [
          "Identity exploration (身份探索)",
          "Rebellion (叛逆)",
          "Subculture (亚文化)",
          "Conformity (从众)",
          "Experimentation (实验)",
          "Peer pressure (同伴压力)"
        ]
      },
      {
        id: 22906,
        topic_id: 229,
        content: "Part 3: Do you think that the style of the clothing is more important than its comfort?",
        thinking_logic: "因人而异，因场合而异。日常生活中，舒适 (Comfort) 通常是首选，尤其是随着“运动休闲风” (Athleisure) 的兴起。但在特殊场合（晚宴、面试），风格 (Style) 和得体 (Appropriateness) 可能优先于舒适，“美丽是痛苦的” (Beauty is pain) 在时尚界依然存在。",
        key_arguments: [
          "Aesthetics (美学)",
          "Functionality (功能性)",
          "Occasion-dependent (视场合而定)",
          "Athleisure (运动休闲)",
          "Compromise (妥协)",
          "Beauty is pain (美丽是痛苦的)"
        ]
      },
      {
        id: 22907,
        topic_id: 229,
        content: "Part 3: What factors affect people’s decisions when buying clothes?",
        thinking_logic: "多维度因素。经济因素：价格 (Price) 和性价比 (Value for money)。实用因素：舒适度、耐用性、场合需求。心理/社会因素：品牌 (Brand)、潮流趋势 (Trends)、同伴评价。道德因素：近年来，可持续性 (Sustainability) 也越来越重要。",
        key_arguments: [
          "Price point (价位)",
          "Brand loyalty (品牌忠诚度)",
          "Durability (耐用性)",
          "Sustainability (可持续性)",
          "Peer influence (同伴影响)",
          "Impulse buying (冲动购物)"
        ]
      }
    ]
  },
  {
    id: 230,
    title: "来自不同文化背景的朋友",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person from a different cultural background with whom you enjoy spending time.",
    questions: [
      {
        id: 23001,
        topic_id: 230,
        content: "Describe a person from a different cultural background with whom you enjoy spending time. You should say: Who he/she is, Where he/she is from, Where/how you knew him/her, And explain how you feel about him/her.",
        sample_answer: {
          id: 23001,
          question_id: 23001,
          english_text: "I’d like to talk about my former colleague, Hiro. He is from Japan, specifically from Osaka. He came to work in our branch office for a year as part of an exchange program.\n\nWe sat next to each other in the office, so we naturally started talking during lunch breaks. At first, we just talked about work, but later we became friends.\n\nI really enjoy spending time with him because he is very polite and respectful, which I think is part of his culture. I find it fascinating when he tells me about Japanese customs and festivals. Also, he taught me some simple Japanese phrases. Spending time with him really broadened my horizons.",
          chinese_translation: "我想谈谈我的前同事Hiro。他来自日本，具体说是大阪。作为交换项目的一部分，他来我们分公司工作了一年。\n\n我们在办公室坐在一起，所以我们在午休时间自然而然地开始交谈。起初，我们只谈工作，但后来我们成了朋友。\n\n我真的很喜欢和他在一起，因为他非常有礼貌和尊重人，我认为这是他文化的一部分。当他告诉我日本的风俗和节日时，我觉得很迷人。此外，他还教了我一些简单的日语短语。和他在一起真的开阔了我的眼界。",
          vocabularies: [
            { word: "polite", definition: "Behaving in a way that is socially correct and shows understanding of and care for other people's feelings.", phonetic: "/pəˈlaɪt/", example: "He is very polite." },
            { word: "fascinating", definition: "Extremely interesting.", phonetic: "/ˈfæs.ən.eɪ.tɪd/", example: "I find it fascinating." },
            { word: "broadened my horizons", definition: "To increase the range of one's knowledge, understanding, or experience.", phonetic: "/brɔːdnd maɪ həˈraɪ.zənz/", example: "Spending time with him broadened my horizons." }
          ],
          sentences: [
            {
              english: "I really enjoy spending time with him because he is very polite and respectful.",
              chinese: "我真的很喜欢和他在一起，因为他非常有礼貌和尊重人。",
              key_words: ["polite", "respectful"]
            },
            {
              english: "Spending time with him really broadened my horizons.",
              chinese: "和他在一起真的开阔了我的眼界。",
              key_words: ["broadened my horizons"]
            }
          ]
        }
      },
      {
        id: 23002,
        topic_id: 230,
        content: "Part 3: Is it easy to meet people from different cultural backgrounds in your country?",
        thinking_logic: "视地区而定。在一线城市 (Metropolitan cities) 或旅游热点，非常容易遇到外籍人士 (Expats) 和游客。但在农村地区，人口结构相对单一 (Homogeneous)。随着全球化，这种机会总体在增加。",
        key_arguments: ["Cosmopolitan (国际化的)", "Expat community (外籍人士社区)", "Globalization (全球化)", "Homogeneous (同质的)", "Cultural exchange (文化交流)"]
      },
      {
        id: 23003,
        topic_id: 230,
        content: "Part 3: What do people from different cultural backgrounds usually talk with each other?",
        thinking_logic: "破冰话题通常围绕差异 (Differences)。食物 (Cuisine) 是最通用的语言。还有节日习俗 (Festivals/Customs)、语言学习的趣事。之后可能会深入到价值观和社会现象的比较。",
        key_arguments: ["Ice-breaker (破冰话题)", "Cultural nuances (文化细微差别)", "Stereotypes (刻板印象)", "Cuisine (烹饪/美食)", "Customs (习俗)"]
      },
      {
        id: 23004,
        topic_id: 230,
        content: "Part 3: Is it good to live in a multicultural society?",
        thinking_logic: "利大于弊。多样性 (Diversity) 带来创新和丰富的文化体验（如美食节）。它能减少偏见 (Prejudice)，培养包容性 (Tolerance)。挑战在于语言障碍和潜在的文化冲突 (Cultural clash)，但这是可以通过沟通解决的。",
        key_arguments: ["Diversity (多样性)", "Tolerance (包容性)", "Prejudice (偏见)", "Cultural clash (文化冲突)", "Vibrant (充满活力的)", "Integration (融合)"]
      },
      {
        id: 23005,
        topic_id: 230,
        content: "Part 3: What are the advantages of being friends with people from different cultural backgrounds?",
        thinking_logic: "开阔眼界 (Broaden horizons)。挑战你的固有思维 (Challenge assumptions)。学习新语言和技能。培养同理心 (Empathy) 和全球视野 (Global perspective)。",
        key_arguments: ["Broaden horizons (开阔视野)", "Global perspective (全球视野)", "Empathy (同理心)", "Stereotype (刻板印象)", "Enriching (丰富的)"]
      },
      {
        id: 23006,
        topic_id: 230,
        content: "Part 3: Why do people choose to travel or live abroad?",
        thinking_logic: "推拉理论 (Push and Pull factors)。推力：逃离舒适区，寻找冒险，国内竞争压力大。拉力：更好的教育资源 (Quality education)，职业发展 (Career prospects)，生活质量，或仅仅是对异国文化的好奇。",
        key_arguments: ["Comfort zone (舒适区)", "Career prospects (职业前景)", "Immersion (沉浸)", "Curiosity (好奇心)", "Standard of living (生活水平)"]
      },
      {
        id: 23007,
        topic_id: 230,
        content: "Part 3: What are the benefits of living in another country?",
        thinking_logic: "个人成长加速器。独立性 (Independence)：必须自己解决所有问题。适应能力 (Adaptability)。语言流利度。成为世界公民 (Global citizen)。",
        key_arguments: ["Independence (独立)", "Adaptability (适应能力)", "Resilience (韧性)", "Language fluency (语言流利度)", "Global citizen (世界公民)"]
      }
    ]
  },
  {
    id: 231,
    title: "喜欢共度时光的朋友",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe someone you really want to spend time with.",
    questions: [
      {
        id: 23101,
        topic_id: 231,
        content: "Describe someone you really want to spend time with. You should say: Who this person is, How you knew him/her, What you usually do together, And explain why you like to spend time with him/her.",
        sample_answer: {
          id: 23101,
          question_id: 23101,
          english_text: "I want to talk about my grandmother. She lives in the countryside, so I don't get to see her very often, maybe just once or twice a year during holidays.\n\nWhen I visit her, we usually sit in her garden and drink tea. She loves to tell me stories about our family history and what life was like when she was young. Sometimes we also cook traditional meals together.\n\nI really want to spend more time with her because she is getting older. She is a very wise and calm person. Whenever I am stressed about my work or studies, talking to her makes me feel peaceful. Her advice is always very helpful, and I cherish every moment I have with her.",
          chinese_translation: "我想谈谈我的祖母。她住在乡下，所以我不能经常见到她，也许一年只有在假期见一两次。\n\n当我去探望她时，我们通常坐在她的花园里喝茶。她喜欢给我讲家族历史和她年轻时的生活。有时我们也一起做传统饭菜。\n\n我真的很想花更多时间和她在一起，因为她年纪大了。她是一个非常睿智和冷静的人。每当我因工作或学习而感到压力时，和她交谈会让我感到平静。她的建议总是很有帮助，我珍惜和她在一起的每一刻。",
          vocabularies: [
            { word: "countryside", definition: "Land not in towns, cities, or industrial areas, that is either used for farming or left in its natural condition.", phonetic: "/ˈkʌn.tri.saɪd/", example: "She lives in the countryside." },
            { word: "wise", definition: "Having or showing the ability to make good judgments, based on a deep understanding and experience of life.", phonetic: "/waɪz/", example: "She is a very wise person." },
            { word: "cherish", definition: "To love, protect, and care for someone or something that is important to you.", phonetic: "/ˈtʃer.ɪʃ/", example: "I cherish every moment with her." }
          ],
          sentences: [
            {
              english: "She loves to tell me stories about our family history and what life was like when she was young.",
              chinese: "她喜欢给我讲家族历史和她年轻时的生活。",
              key_words: ["family history"]
            },
            {
              english: "Her advice is always very helpful, and I cherish every moment I have with her.",
              chinese: "她的建议总是很有帮助，我珍惜和她在一起的每一刻。",
              key_words: ["cherish"]
            }
          ]
        }
      },
      {
        id: 23102,
        topic_id: 231,
        content: "Part 3: What kinds of people are easy to get along with?",
        thinking_logic: "性格特征：随和 (Easy-going)、开放 (Open-minded)、幽默感 (Sense of humor)。同理心 (Empathy) 很重要，能站在别人角度思考。好的倾听者 (Good listeners) 也受欢迎。",
        key_arguments: ["Easy-going (随和的)", "Approachable (平易近人的)", "Empathy (同理心)", "Sense of humor (幽默感)", "Non-judgmental (不予评判的)"]
      },
      {
        id: 23103,
        topic_id: 231,
        content: "Part 3: How do leaders get along with their subordinates?",
        thinking_logic: "平衡权威与亲和力 (Authority & Approachability)。好的领导是导师 (Mentor) 而不是独裁者。建立信任 (Trust)，有效沟通，给予反馈 (Feedback) 和认可 (Recognition)。职业界限 (Professional boundaries) 也是必须的。",
        key_arguments: ["Approachability (亲和力)", "Mentorship (指导)", "Professional boundaries (职业界限)", "Mutual respect (相互尊重)", "Hierarchy (层级)"]
      },
      {
        id: 23104,
        topic_id: 231,
        content: "Part 3: Do people have time for themselves nowadays?",
        thinking_logic: "越来越少。生活节奏快 (Fast-paced life)，竞争激烈 (Rat race)。数字设备让我们时刻在线 (Always-on culture)，很难真正断开连接 (Disconnect)。‘独处时间’ (Me-time) 变成了奢侈品。",
        key_arguments: ["Hectic (忙碌的)", "Me-time (独处时间)", "Burnout (倦怠)", "Work-life balance (工作与生活的平衡)", "Always-on culture (时刻在线的文化)"]
      },
      {
        id: 23105,
        topic_id: 231,
        content: "Part 3: Do you like talking with older people? Why?",
        thinking_logic: "通常喜欢。智慧的源泉 (Source of wisdom)。他们有丰富的生活阅历 (Life experience) 和历史见证。虽然有时有代沟 (Generation gap)，但他们的故事往往很迷人 (Fascinating)。",
        key_arguments: ["Wisdom (智慧)", "Life experience (生活阅历)", "Generation gap (代沟)", "Perspective (视角)", "Storytelling (讲故事)"]
      }
    ]
  },
  {
    id: 232,
    title: "有活力的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an energetic person that you know.",
    questions: [
      {
        id: 23201,
        topic_id: 232,
        content: "Describe an energetic person that you know. You should say: Who this person is, How you knew this person, Why you think this person is energetic, And explain how you feel about this person.",
        sample_answer: {
          id: 23201,
          question_id: 23201,
          english_text: "I’d like to talk about my aunt, Linda. She is in her late 40s, but honestly, she has more energy than most teenagers I know. I’ve known her all my life, obviously, but I really started noticing her energy levels when we went on a family trip together last year.\n\nShe is the kind of person who is always on the go. She wakes up at 5 AM to go jogging, then works a full-time job as a nurse, which is very demanding. After work, instead of resting, she usually attends a dance class or does gardening. It seems like she never gets tired. Even at family gatherings, she is the one organizing games and cooking for everyone. She just has this endless supply of energy.\n\nTo be honest, sometimes I feel exhausted just watching her! But at the same time, I really admire her. Her positive attitude is infectious. Whenever I feel lazy or unmotivated, thinking about her makes me want to get up and do something productive. She is a great role model for maintaining an active lifestyle.",
          chinese_translation: "我想谈谈我的阿姨琳达。她快50岁了，但老实说，她的精力比我认识的大多数青少年都要充沛。显然，我一辈子都认识她，但我真正开始注意到她的精力水平是去年我们一起去家庭旅行的时候。\n\n她是那种总是忙个不停的人。她早上5点起床去慢跑，然后做护士的全职工作，这非常辛苦。下班后，她通常不休息，而是去参加舞蹈班或做园艺。她似乎从不感到累。即使在家庭聚会上，她也是那个组织游戏和为大家做饭的人。她似乎有无穷无尽的精力。\n\n老实说，有时我光是看着她就觉得累了！但与此同时，我真的很佩服她。她的积极态度具有感染力。每当我感到懒惰或没有动力时，想到她就会让我想起来做点有成效的事情。她是保持积极生活方式的好榜样。",
          vocabularies: [
            { word: "on the go", definition: "Very busy and active.", phonetic: "/ɒn ðə ɡəʊ/", example: "She is always on the go." },
            { word: "demanding", definition: "Needing a lot of time, attention, or energy.", phonetic: "/dɪˈmɑːn.dɪŋ/", example: "Her job is very demanding." },
            { word: "infectious", definition: "Something that spreads quickly to other people.", phonetic: "/ɪnˈfek.ʃəs/", example: "Her positive attitude is infectious." },
            { word: "productive", definition: "Resulting in or providing a large amount or supply of something.", phonetic: "/prəˈdʌk.tɪv/", example: "I want to do something productive." }
          ],
          sentences: [
            {
              english: "She is the kind of person who is always on the go.",
              chinese: "她是那种总是忙个不停的人。",
              key_words: ["on the go"]
            },
            {
              english: "Whenever I feel lazy or unmotivated, thinking about her makes me want to get up and do something productive.",
              chinese: "每当我感到懒惰或没有动力时，想到她就会让我想起来做点有成效的事情。",
              key_words: ["unmotivated", "productive"]
            }
          ]
        }
      },
      {
        id: 23202,
        topic_id: 232,
        content: "Part 3: What kinds of jobs need a lot of physical work?",
        thinking_logic: "分类讨论。体力劳动（Manual labor）主要集中在建筑业（construction）、物流业（logistics）、农业（agriculture）和紧急服务（emergency services）。这些工作需要耐力（stamina）和力量。虽然自动化正在减少重体力活，但技术工种（skilled trades）如水管工、电工依然需要大量身体活动。",
        key_arguments: ["Manual labor (体力劳动)", "Stamina (耐力)", "Blue-collar jobs (蓝领工作)", "Physically demanding (体力要求高的)", "Construction (建筑)", "Logistics (物流)"]
      },
      {
        id: 23203,
        topic_id: 232,
        content: "Part 3: What's the difference between the payment for physical work and that for mental work?",
        thinking_logic: "历史差异与现代变化。传统上，白领（White-collar）脑力工作者薪水更高，因为学历要求高。蓝领（Blue-collar）通常薪水较低。但这种差距正在缩小（narrowing the gap）。由于技术工人短缺（shortage of skilled workers），某些体力工作（如电焊、装修）的薪水现在甚至超过了普通办公室文员。供需关系（Supply and demand）是关键。",
        key_arguments: ["Wage gap (工资差距)", "White-collar (白领)", "Academic qualifications (学历)", "Disparity (差异)", "Skilled trades (技术工种)", "Supply and demand (供需)"]
      },
      {
        id: 23204,
        topic_id: 232,
        content: "Part 3: Can physical workers receive higher salaries in the future?",
        thinking_logic: "很有可能。劳动力短缺（Labor shortage）：随着人口老龄化和年轻人不愿意从事体力劳动，蓝领工人变得稀缺（scarce）。稀缺性推高价格。此外，随着自动化取代低技能重复性劳动，留下的体力工作通常是高技能、复杂的，因此价值更高。",
        key_arguments: ["Labor shortage (劳动力短缺)", "Scarcity (稀缺性)", "Supply and demand (供需)", "Reluctance (不情愿)", "Vocational (职业的)", "Appreciation (升值)"]
      },
      {
        id: 23205,
        topic_id: 232,
        content: "Part 3: Do you think machines should replace human workers in the future?",
        thinking_logic: "辩证看待。对于危险（hazardous）、重复（repetitive）和繁重的工作，机器取代是好事，能提高效率和安全性。但对于需要同理心（empathy）、创造力（creativity）和复杂手眼协调的工作，人类是不可替代的。理想的未来是人机协作（human-machine collaboration）而非完全替代。",
        key_arguments: ["Automation (自动化)", "Repetitive (重复的)", "Hazardous (危险的)", "Displacement (取代/置换)", "Efficiency (效率)", "Human touch (人情味)", "Augmentation (增强)"]
      }
    ]
  },
  {
    id: 248,
    title: "重要的朋友",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a good friend who is important to you.",
    questions: [
      {
        id: 24801,
        topic_id: 248,
        content: "Describe a good friend who is important to you. You should say: Who he/she is, How/where you got to know him/her, How long you have known each other, And explain why he/she is important to you.",
        sample_answer: {
          id: 24801,
          question_id: 24801,
          english_text: "I’d like to talk about my best friend, Michael. We’ve known each other for over 10 years now. We first met back in middle school when we were both assigned to the same basketball team.\n\nAt first, we didn't talk much, but after a few matches, we realized we had a lot in common, especially our love for sports and video games. Since then, we have been inseparable.\n\nHe is important to me because he has always been there for me through thick and thin. When I was going through a tough time with my studies last year, he was the one who encouraged me and helped me study late into the night. He is like a brother to me, someone I can trust with my life.",
          chinese_translation: "我想谈谈我最好的朋友迈克尔。我们认识已经超过10年了。我们初中时第一次见面，当时我们都被分到了同一个篮球队。\n\n起初我们说话不多，但几场比赛后，我们意识到我们有很多共同点，特别是对运动和电子游戏的热爱。从那时起，我们就形影不离了。\n\n他对我很重要，因为他总是同甘共苦地支持我。去年我学习遇到困难时，是他鼓励我并陪我学习到深夜。他就像我的亲兄弟一样，是一个我可以以命相托的人。",
          vocabularies: [
            { word: "inseparable", definition: "Always together; never separated.", phonetic: "/ɪnˈsep.ər.ə.bəl/", example: "We have been inseparable." },
            { word: "through thick and thin", definition: "Under all circumstances, no matter how difficult.", phonetic: "/θruː θɪk ənd θɪn/", example: "He supported me through thick and thin." },
            { word: "trust", definition: "To believe that someone is good and honest and will not harm you.", phonetic: "/trʌst/", example: "Someone I can trust." }
          ],
          sentences: [
            {
              english: "Since then, we have been inseparable.",
              chinese: "从那时起，我们就形影不离了。",
              key_words: ["inseparable"]
            },
            {
              english: "He has always been there for me through thick and thin.",
              chinese: "他总是同甘共苦地支持我。",
              key_words: ["through thick and thin"]
            }
          ]
        }
      },
      {
        id: 24802,
        topic_id: 248,
        content: "Part 3: What qualities make a good friend?",
        thinking_logic: "核心品质：诚实 (Honesty)、忠诚 (Loyalty) 和同理心 (Empathy)。好朋友应该是可靠的 (Reliable)，在需要时提供支持。此外，共同的价值观 (Shared values) 也是维持长期友谊的基础。",
        key_arguments: [
          "Loyalty (忠诚)",
          "Trustworthiness (可信赖)",
          "Empathy (同理心)",
          "Reliability (可靠性)",
          "Shared values (共同价值观)",
          "Supportive (支持的)"
        ]
      },
      {
        id: 24803,
        topic_id: 248,
        content: "Part 3: Do you think friendship is important for mental health?",
        thinking_logic: "至关重要。人类是社会性动物 (Social animals)。朋友提供情感支持 (Emotional support)，减少孤独感 (Loneliness) 和抑郁。他们是我们应对压力的缓冲 (Buffer against stress)。",
        key_arguments: [
            "Emotional support (情感支持)",
            "Well-being (幸福感)",
            "Isolation (孤立)",
            "Buffer (缓冲)",
            "Belonging (归属感)",
            "Mental resilience (心理韧性)"
        ]
      },
      {
        id: 24804,
        topic_id: 248,
        content: "Part 3: How do children make friends at school?",
        thinking_logic: "孩子主要通过共同的活动 (shared activities) 和邻近性 (proximity) 建立友谊。操场 (playground) 是主要的社交场所。他们的友谊通常比较单纯 (innocent)，基于谁有相同的玩具或谁坐得近。",
        key_arguments: [
            "Shared activities (共同活动)",
            "Proximity (邻近)",
            "Playground (操场)",
            "Innocent (单纯的)",
            "Spontaneous (自发的)",
            "Common interests (共同兴趣)"
        ]
      },
      {
        id: 24805,
        topic_id: 248,
        content: "Part 3: How do children make friends when they are not at school?",
        thinking_logic: "通过社区 (Community) 和课外活动 (Extracurricular activities)。邻居家的孩子、公园里的玩伴，或者父母朋友的孩子（Playdates）。共同的兴趣班（如绘画、足球）也是结识新朋友的渠道。",
        key_arguments: [
            "Extracurricular activities (课外活动)",
            "Neighborhood (社区/邻里)",
            "Playdates (安排好的玩耍时间)",
            "Social circle (社交圈)",
            "Interaction (互动)",
            "Clubs (俱乐部)"
        ]
      },
      {
        id: 24806,
        topic_id: 248,
        content: "Part 3: Do you think it is better for children to have a few close friends or many casual friends?",
        thinking_logic: "平衡很重要。少数亲密朋友 (Close friends) 教会孩子信任 (trust) 和亲密感 (intimacy)。许多普通朋友 (Casual friends) 帮助孩子适应不同的社交情境 (social adaptability) 和建立广泛的网络。两者都有益处。",
        key_arguments: [
            "Intimacy (亲密感)",
            "Trust (信任)",
            "Social adaptability (社交适应性)",
            "Broad network (广泛的网络)",
            "Quality over quantity (质量胜于数量)",
            "Interpersonal skills (人际交往技能)"
        ]
      },
      {
        id: 24807,
        topic_id: 248,
        content: "Part 3: Do you think a child's relationship with friends can be replaced by that with other people, like parents or other family members?",
        thinking_logic: "不能被替代 (Irreplaceable)。同伴关系是水平的 (Horizontal relationship)，基于平等 (Equality) 和协商。亲子关系是垂直的 (Vertical relationship)，基于权威。同伴互动教会孩子如何处理冲突、竞争和合作，这是家庭关系无法完全提供的。",
        key_arguments: [
            "Irreplaceable (不可替代的)",
            "Horizontal relationship (水平关系)",
            "Vertical relationship (垂直关系)",
            "Equality (平等)",
            "Conflict resolution (冲突解决)",
            "Peer group (同龄群体)"
        ]
      },
      {
        id: 24808,
        topic_id: 248,
        content: "Part 3: What are the differences between friends made inside and outside the workplace?",
        thinking_logic: "职场友谊往往有界限 (Professional boundaries) 和利益冲突 (Conflict of interest)。大家有共同的职业奋斗，但可能存在竞争。工作之外的朋友更多基于兴趣爱好 (Hobbies) 和纯粹的放松 (Relaxation)，关系更纯粹，是情感宣泄的出口 (Outlet)。",
        key_arguments: [
            "Professional boundaries (职业界限)",
            "Conflict of interest (利益冲突)",
            "Competition (竞争)",
            "Unwind (放松)",
            "Genuine (真诚的)",
            "Common ground (共同点)"
        ]
      },
      {
        id: 24809,
        topic_id: 248,
        content: "Part 3: Do you think it's possible for bosses and their employees to become friends?",
        thinking_logic: "可能，但很棘手 (Tricky)。权力动态 (Power dynamic) 可能会让友谊变得复杂。可能会出现偏袒 (Favoritism) 的嫌疑，或者难以在工作中给予客观的反馈。最好保持“友好的专业关系” (Friendly but professional) 而非亲密的私交。",
        key_arguments: [
            "Power dynamic (权力动态)",
            "Favoritism (偏袒)",
            "Professionalism (专业主义)",
            "Objectivity (客观性)",
            "Blur boundaries (模糊界限)",
            "Complicated (复杂的)"
        ]
      }
    ]
  },
  {
    id: 249,
    title: "享受在家族企业工作的人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a person you know who enjoys working for a family business.",
    questions: [
      {
        id: 24901,
        topic_id: 249,
        content: "Describe a person you know who enjoys working for a family business. You should say: Who he/she is, What the business is, What his/her job is, And explain why he/she enjoys working there.",
        sample_answer: {
          id: 24901,
          question_id: 24901,
          english_text: "I’d like to describe my cousin, David, who works in his family’s bakery business. The bakery was established by his grandfather over 40 years ago and is quite a landmark in our hometown.\n\nDavid is essentially the operations manager. Since it’s a small family enterprise, he wears many hats. He oversees the supply chain, manages the staff, and handles customer service. On busy days, you can even find him behind the counter serving pastries.\n\nHe really enjoys working there for a few reasons. Firstly, he takes immense pride in continuing the family legacy. He feels a deep sense of ownership that he wouldn't feel in a corporate job. Secondly, he loves the autonomy. He can implement new ideas, like introducing a new line of gluten-free cakes, without going through layers of bureaucracy. Finally, the atmosphere is very tight-knit; the staff feel like extended family, which creates a very supportive work environment.",
          chinese_translation: "我想描述我的表弟大卫，他在家族的面包店工作。这家面包店是他祖父在40多年前创办的，在我们家乡是个地标。\n\n大卫本质上是运营经理。因为这是一个小型家族企业，他身兼数职。他负责供应链、管理员工和处理客户服务。在忙碌的日子里，你甚至可以发现他在柜台后面提供糕点。\n\n他真的很喜欢在那工作，原因有几个。首先，他对延续家族遗产感到无比自豪。他感到一种在企业工作中无法体会到的深深的主人翁感。其次，他喜欢这种自主权。他可以实施新想法，比如推出一系列无麸质蛋糕，而无需经过层层官僚审批。最后，氛围非常紧密；员工感觉像大家庭的一员，这创造了一个非常支持的工作环境。",
          vocabularies: [
            { word: "landmark", definition: "A building or place that is easily recognized.", phonetic: "/ˈlænd.mɑːrk/", example: "The bakery is a landmark." },
            { word: "wears many hats", definition: "To have many jobs or roles.", phonetic: "/wɛrz ˈmeni hæts/", example: "He wears many hats at work." },
            { word: "legacy", definition: "Something that is a part of your history or that remains from an earlier time.", phonetic: "/ˈleɡ.ə.si/", example: "Continuing the family legacy." },
            { word: "autonomy", definition: "The right or condition of self-government.", phonetic: "/ɑːˈtɑː.nə.mi/", example: "He loves the autonomy." },
            { word: "bureaucracy", definition: "A system for controlling or managing a country, company, or organization that is operated by a large number of officials employed to follow rules carefully.", phonetic: "/bjʊˈrɑː.krə.si/", example: "Without layers of bureaucracy." }
          ],
          sentences: [
            {
              english: "Since it’s a small family enterprise, he wears many hats.",
              chinese: "因为这是一个小型家族企业，他身兼数职。",
              key_words: ["wears many hats"]
            },
            {
              english: "He feels a deep sense of ownership that he wouldn't feel in a corporate job.",
              chinese: "他感到一种在企业工作中无法体会到的深深的主人翁感。",
              key_words: ["ownership"]
            }
          ]
        }
      },
      {
        id: 24902,
        topic_id: 249,
        content: "Part 3: Would you like to start a family business?",
        thinking_logic: "权衡自主权 (Autonomy) 与风险 (Risk)。如果你喜欢做自己的老板 (Be your own boss) 并希望建立家族遗产 (Legacy)，那么是肯定的。但如果你更看重工作与生活的平衡 (Work-life balance) 和稳定的收入，可能会犹豫，因为创业初期往往需要全天候投入 (24/7 commitment)。",
        key_arguments: [
          "Autonomy (自主权)",
          "Legacy (遗产)",
          "Entrepreneurship (创业精神)",
          "Commitment (承诺)",
          "Financial risk (财务风险)",
          "Work-life balance (工作与生活的平衡)"
        ]
      },
      {
        id: 24903,
        topic_id: 249,
        content: "Part 3: Would you like to work in a family business?",
        thinking_logic: "区分‘自己的家族’和‘别人的家族’。如果是自己的：信任度高，但可能公私不分 (Blur boundaries)。如果是别人的：可能面临玻璃天花板 (Glass ceiling)，因为重要职位通常留给家庭成员 (Nepotism)。",
        key_arguments: [
          "Nepotism (裙带关系)",
          "Glass ceiling (玻璃天花板)",
          "Loyalty (忠诚)",
          "Conflict of interest (利益冲突)",
          "Career progression (职业发展)",
          "Trust (信任)"
        ]
      },
      {
        id: 24904,
        topic_id: 249,
        content: "Part 3: Why do some people choose to start their own company?",
        thinking_logic: "核心驱动力：财务独立 (Financial Independence)、追求激情 (Passion) 和自由 (Freedom)。有些人厌倦了朝九晚五 (9-to-5 grind) 和办公室政治 (Office politics)。他们希望实现自我价值 (Self-actualization) 并对社会产生直接影响。",
        key_arguments: [
          "Financial independence (财务独立)",
          "Autonomy (自主权)",
          "Self-actualization (自我实现)",
          "Passion project (激情项目)",
          "Innovation (创新)",
          "Flexibility (灵活性)"
        ]
      },
      {
        id: 24905,
        topic_id: 249,
        content: "Part 3: What are the advantages and disadvantages of family businesses?",
        thinking_logic: "优点：信任 (Trust)、承诺 (Commitment) 和长远眼光 (Long-term view)。缺点：家庭冲突 (Family feuds)、缺乏专业技能 (Lack of skills) 和继任问题 (Succession planning)。情感可能干扰理性的商业决策。",
        key_arguments: [
          "Commitment (承诺)",
          "Trust (信任)",
          "Family feuds (家庭不和)",
          "Succession (继任)",
          "Emotional bias (情感偏见)",
          "Resilience (韧性)"
        ]
      },
      {
        id: 24906,
        topic_id: 249,
        content: "Part 3: What family businesses do you know in your local area?",
        thinking_logic: "举具体的例子。通常是餐厅 (Restaurants)、零售店 (Retail shops) 或手工艺作坊 (Craft workshops)。强调它们对当地社区 (Local community) 的贡献，如提供就业和保留传统。",
        key_arguments: [
          "Mom-and-pop shops (夫妻店)",
          "Local economy (当地经济)",
          "Heritage (遗产)",
          "Community staple (社区主要产品)",
          "Personalized service (个性化服务)",
          "Hospitality (好客)"
        ]
      },
      {
        id: 24907,
        topic_id: 249,
        content: "Part 3: What makes a successful family business?",
        thinking_logic: "关键在于平衡家庭与生意。清晰的治理结构 (Governance) 和规则至关重要。需要引入外部专业管理 (Professional management) 以避免裙带关系。持续创新 (Innovation) 和适应市场变化也是生存之道。",
        key_arguments: [
          "Governance (治理)",
          "Professionalism (专业主义)",
          "Separation of duties (职责分离)",
          "Innovation (创新)",
          "Meritocracy (任人唯贤)",
          "Adaptability (适应性)"
        ]
      }
    ]
  },
  {
    id: 253,
    title: "有趣的老人",
    part: "part2",
    category: "People",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an old person who has an interesting life and you enjoy talking to him/her.",
    questions: [
      {
        id: 25301,
        topic_id: 253,
        content: "Describe an old person who has an interesting life and you enjoy talking to him/her. You should say: Who this person is, Where he/she lives, What his/her life is like, What you like to talk about with him/her, And explain why you enjoy talking to him/her.",
        sample_answer: {
          id: 25301,
          question_id: 25301,
          english_text: "I’d like to talk about my neighbor, Mr. Chen. He is in his 70s and lives just down the street from my house in a cozy bungalow with a beautiful garden.\n\nHis life is fascinating because he used to be a photojournalist for a major newspaper. He traveled to over 50 countries during his career, covering everything from wars to cultural festivals. Now, his life is much quieter; he spends his mornings gardening and his afternoons sorting through his massive collection of photographs.\n\nI love talking to him about his adventures. He doesn't just tell stories; he shows me the photos he took. We talk about history, different cultures, and sometimes he teaches me a bit about photography techniques. He has a way of making history feel alive.\n\nI enjoy talking to him because he has so much wisdom and a unique perspective on the world. Unlike many people who complain about aging, he sees life as a collection of stories. He is open-minded and always curious, which I find very inspiring. Talking to him feels like reading a living history book.",
          chinese_translation: "我想谈谈我的邻居陈先生。他七十多岁了，住在离我家不远的一栋舒适的平房里，有一个漂亮的花园。\n\n他的生活很迷人，因为他曾是一家大报社的摄影记者。在他的职业生涯中，他去过50多个国家，报道了从战争到文化节日的各种事情。现在，他的生活安静多了；他早上做园艺，下午整理他大量的照片收藏。\n\n我喜欢和他谈论他的冒险经历。他不只是讲故事；他还给我看他拍的照片。我们谈论历史、不同的文化，有时他还会教我一些摄影技巧。他有一种让历史活灵活现的方法。\n\n我喜欢和他交谈，因为他有如此多的智慧和对世界独特的看法。不像许多抱怨变老的人，他把生活看作是故事的集合。他思想开明，总是充满好奇，我觉得这非常鼓舞人心。和他交谈感觉就像在读一本活的历史书。",
          vocabularies: [
            { word: "photojournalist", definition: "A journalist who presents news by means of photographs.", phonetic: "/ˌfoʊ.t̬oʊˈdʒɝː.nəl.ɪst/", example: "He worked as a photojournalist." },
            { word: "bungalow", definition: "A house that usually has only one level.", phonetic: "/ˈbʌŋ.ɡəl.oʊ/", example: "He lives in a cozy bungalow." },
            { word: "open-minded", definition: "Willing to consider ideas and opinions that are new or different to your own.", phonetic: "/ˌoʊ.pənˈmaɪn.dɪd/", example: "He is very open-minded." },
            { word: "living history book", definition: "A metaphor describing someone with extensive knowledge of the past through personal experience.", phonetic: "/ˈlɪv.ɪŋ ˈhɪs.tər.i bʊk/", example: "Talking to him is like reading a living history book." }
          ],
          sentences: [
            {
              english: "He traveled to over 50 countries during his career, covering everything from wars to cultural festivals.",
              chinese: "在他的职业生涯中，他去过50多个国家，报道了从战争到文化节日的各种事情。",
              key_words: ["covering", "career"]
            },
            {
              english: "Unlike many people who complain about aging, he sees life as a collection of stories.",
              chinese: "不像许多抱怨变老的人，他把生活看作是故事的集合。",
              key_words: ["aging", "collection"]
            }
          ]
        }
      },
      {
        id: 25302,
        topic_id: 253,
        content: "Part 3: Should companies employ older workers?",
        thinking_logic: "应该。多样性（Diversity）。老年员工带来稳定性（Stability）和经验（Experience），可以作为年轻员工的导师（Mentors）。虽然体力可能下降，但软技能（Soft skills）和判断力通常更好。混合年龄的团队往往效率更高。",
        key_arguments: ["Mentorship (指导)", "Stability (稳定性)", "Soft skills (软技能)", "Institutional memory (机构记忆)", "Work ethic (职业道德)", "Diversity (多样性)"]
      },
      {
        id: 25303,
        topic_id: 253,
        content: "Part 3: What do you think older people can contribute at work?",
        thinking_logic: "智慧与人脉。他们拥有行业知识（Industry knowledge）和深厚的人际网络（Network）。在危机时刻，他们往往更冷静（Composed），能提供更周全的解决方案。他们也是企业文化（Corporate culture）的传承者。",
        key_arguments: ["Industry knowledge (行业知识)", "Networking (人脉)", "Crisis management (危机管理)", "Composure (镇静)", "Guidance (指导)", "Reliability (可靠性)"]
      },
      {
        id: 25304,
        topic_id: 253,
        content: "Part 3: Why do governments make retirement policies?",
        thinking_logic: "平衡劳动力市场和社会保障。腾出职位给年轻人（Job creation for youth），防止失业率过高。保障老年人福利（Social security），确保他们在失去劳动能力后有生活来源。基于健康数据（Life expectancy）调整。",
        key_arguments: ["Labor market (劳动力市场)", "Social security (社会保障)", "Pension (养老金)", "Youth unemployment (青年失业)", "Sustainability (可持续性)", "Demographics (人口统计)"]
      },
      {
        id: 25305,
        topic_id: 253,
        content: "Part 3: When do you think is the best time to retire?",
        thinking_logic: "因人而异。财务自由（Financial independence）是硬指标。身体健康状况（Health status）也是关键。有些人即使老了也想继续工作以保持活跃（Stay active），有些人想早点退休去旅行。没有统一标准。",
        key_arguments: ["Financial readiness (财务准备)", "Health status (健康状况)", "Personal fulfillment (个人满足感)", "Passion (激情)", "Flexible retirement (弹性退休)", "Golden years (黄金岁月)"]
      },
      {
        id: 25306,
        topic_id: 253,
        content: "Part 3: Do you think people should spend more time with their grandparents?",
        thinking_logic: "绝对应该。代际传承（Intergenerational transmission）。祖父母是家庭历史的守护者（Keepers of family history）。陪伴能减少老人的孤独感（Isolation），同时年轻人也能学到耐心和感恩。",
        key_arguments: ["Family heritage (家族遗产)", "Emotional bond (情感纽带)", "Loneliness (孤独)", "Wisdom (智慧)", "Respect (尊重)", "Support system (支持系统)"]
      },
      {
        id: 25307,
        topic_id: 253,
        content: "Part 3: Is it beneficial to live with elderly people?",
        thinking_logic: "利弊共存。利：互相照应（Mutual care），老人帮忙带孩子（Childcare），分担家务。弊：生活习惯不同（Lifestyle differences）导致摩擦，代沟（Generation gap）导致沟通困难。需要相互包容（Compromise）。",
        key_arguments: ["Mutual support (相互支持)", "Childcare (照看孩子)", "Generation gap (代沟)", "Conflict (冲突)", "Compromise (妥协)", "Harmony (和谐)"]
      }
    ]
  }
];