



import { IPart2Topic } from './types';

export const PART2_OBJECTS_TOPICS: IPart2Topic[] = [
  {
    id: 250,
    title: "家庭旧物",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an important old thing that your family has kept for a long time.",
    questions: [
      {
        id: 25001,
        topic_id: 250,
        content: "Describe an important old thing that your family has kept for a long time. You should say: What it is, How/when your family first got this thing, How long your family has kept it, And explain why this thing is important to your family.",
        sample_answer: {
          id: 25001,
          question_id: 25001,
          english_text: "I’d like to talk about an old mechanical sewing machine that my grandmother passed down to my mother. It’s a vintage 'Butterfly' brand machine, which was extremely famous in China back in the 1970s and 80s.\n\nMy grandmother bought it with her savings over 40 years ago. Back then, having a sewing machine was a sign of wealth and capability. It has a black metal body with intricate gold patterns painted on it, and it sits on a sturdy wooden table with a foot pedal.\n\nOur family has kept it for three generations now. Although we don't use it to make clothes from scratch anymore, my mother still uses it for minor repairs or hemming trousers.\n\nIt is important to our family because it represents the industrious spirit of my grandmother. It reminds us of the times when life was simpler but harder, and how she used this machine to stitch clothes for the whole family to save money. It’s not just a tool; it’s a family heirloom that carries our history.",
          chinese_translation: "我想谈谈我祖母传给我母亲的一台旧机械缝纫机。这是一台复古的“蝴蝶”牌缝纫机，在七八十年代的中国非常有名。\n\n我祖母在40多年前用积蓄买了它。那时候，拥有一台缝纫机是财富和能力的象征。它有一个黑色的金属机身，上面画着复杂的金色图案，放在一张结实的木桌上，还有一个脚踏板。\n\n我们家已经保存了三代了。虽然我们不再用它从头开始做衣服，但我母亲仍然用它来进行小修补或缝裤边。\n\n它对我们家很重要，因为它代表了我祖母勤劳的精神。它提醒我们生活简单但艰难的时代，以及她是如何用这台机器为全家人缝制衣服以节省开支的。它不仅仅是一个工具；它是承载我们历史的传家宝。",
          vocabularies: [
            { word: "vintage", definition: "Of high quality and lasting value, or showing the best and most typical characteristics of a particular type of thing, usually from the past.", phonetic: "/ˈvɪn.tɪdʒ/", example: "A vintage sewing machine." },
            { word: "intricate", definition: "Having a lot of small parts that are arranged in a complicated or delicate way.", phonetic: "/ˈɪn.trə.kət/", example: "Intricate gold patterns." },
            { word: "heirloom", definition: "A valuable object that has been given by older members of a family to younger members of the same family over many years.", phonetic: "/ˈer.luːm/", example: "A family heirloom." },
            { word: "industrious", definition: "Working hard.", phonetic: "/ɪnˈdʌs.tri.əs/", example: "The industrious spirit." }
          ],
          sentences: [
            {
              english: "It sits on a sturdy wooden table with a foot pedal.",
              chinese: "它放在一张结实的木桌上，还有一个脚踏板。",
              key_words: ["sturdy", "pedal"]
            },
            {
              english: "It’s not just a tool; it’s a family heirloom that carries our history.",
              chinese: "它不仅仅是一个工具；它是承载我们历史的传家宝。",
              key_words: ["heirloom"]
            }
          ]
        }
      },
      {
        id: 25002,
        topic_id: 250,
        content: "Part 3: What things do families keep for a long time?",
        thinking_logic: "通常是具有情感价值（Sentimental value）或极高实用价值的东西。照片相册（Photo albums）记录回忆。珠宝（Jewelry）作为传家宝。家具（Furniture）如果是实木的好家具也能用很久。还有荣誉证书或奖章。",
        key_arguments: ["Sentimental value (情感价值)", "Heirloom (传家宝)", "Longevity (长寿/耐用)", "Photo albums (相册)", "Memorabilia (纪念品)", "Heritage (遗产)"]
      },
      {
        id: 25003,
        topic_id: 250,
        content: "Part 3: What is the difference between things we keep now and things we kept in the past?",
        thinking_logic: "过去：注重耐用性（Durability）和实用性。东西坏了会修（Repair culture）。现在：消费主义（Consumerism）盛行，东西往往是“一次性的”（Disposable）或迭代很快的电子产品。现在我们保存更多的是“数字资产”（Digital assets）如照片数据。",
        key_arguments: ["Disposable (一次性的)", "Repair culture (维修文化)", "Durability (耐用性)", "Digital assets (数字资产)", "Consumerism (消费主义)", "Obsolescence (过时)"]
      },
      {
        id: 25004,
        topic_id: 250,
        content: "Part 3: Which do you think is better, old things or new things?",
        thinking_logic: "各有所长。老物件：有故事、工艺（Craftsmanship）好、独特。新物件：技术先进、效率高、方便。取决于用途。收藏看老，使用看新。",
        key_arguments: ["Craftsmanship (工艺)", "Efficiency (效率)", "Nostalgia (怀旧)", "Technological advancement (技术进步)", "Uniqueness (独特性)", "Reliability (可靠性)"]
      }
    ]
  },
  {
    id: 252,
    title: "丰盛晚餐",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a great dinner you and your friends or family members enjoyed.",
    questions: [
      {
        id: 25201,
        topic_id: 252,
        content: "Describe a great dinner you and your friends or family members enjoyed. You should say: What you had, Who you had the dinner with, What you talked about during the dinner, And explain why you enjoyed it.",
        sample_answer: {
          id: 25201,
          question_id: 25201,
          english_text: "I’d like to describe a hot pot dinner I had with my family last Chinese New Year's Eve. It’s a tradition for us to have a big reunion dinner.\n\nWe had a spicy Sichuan hot pot. The table was filled with plates of sliced lamb, beef, meatballs, tofu, and various vegetables. My mom also prepared her signature handmade dumplings.\n\nDuring the dinner, we talked about everything. My parents asked about my work, and we reminisced about funny things that happened when I was a child. We also made video calls to relatives who couldn't make it home.\n\nI enjoyed it because it wasn't just about the food, which was delicious, but about the atmosphere. The steam rising from the hot pot, the laughter, and the feeling of togetherness made it very special. It was a warm and fuzzy feeling that you can only get when you are with your loved ones.",
          chinese_translation: "我想描述一下去年除夕我和家人吃的一顿火锅晚餐。吃一顿丰盛的团圆饭是我们的传统。\n\n我们吃了四川麻辣火锅。桌上摆满了羊肉片、牛肉、肉丸、豆腐和各种蔬菜。我妈妈还准备了她招牌的手工饺子。\n\n吃饭时，我们无所不谈。父母问起我的工作，我们回忆了我小时候发生的趣事。我们还给没能回家的亲戚打了视频电话。\n\n我很享受这次晚餐，不仅因为食物美味，更因为那种氛围。火锅里升起的蒸汽、笑声以及团聚的感觉让它变得非常特别。这是一种温暖而模糊的感觉，只有当你和你爱的人在一起时才能体会到。",
          vocabularies: [
            { word: "reunion", definition: "A social event for a group of people who have not seen each other for a long time.", phonetic: "/ˌriːˈjuː.njən/", example: "A family reunion." },
            { word: "signature", definition: "A particular quality or thing that makes someone or something different from others.", phonetic: "/ˈsɪɡ.nə.tʃɚ/", example: "Her signature dish." },
            { word: "reminisce", definition: "To talk or write about past experiences that you remember with pleasure.", phonetic: "/ˌrem.əˈnɪs/", example: "We reminisced about the past." },
            { word: "togetherness", definition: "The pleasant feeling of being united with other people in friendship and understanding.", phonetic: "/təˈɡeð.ɚ.nəs/", example: "A feeling of togetherness." }
          ],
          sentences: [
            {
              english: "The steam rising from the hot pot, the laughter, and the feeling of togetherness made it very special.",
              chinese: "火锅里升起的蒸汽、笑声以及团聚的感觉让它变得非常特别。",
              key_words: ["togetherness", "steam"]
            }
          ]
        }
      },
      {
        id: 25202,
        topic_id: 252,
        content: "Part 3: Do people prefer to eat out at restaurants or eat at home during the Spring Festival?",
        thinking_logic: "传统上是在家吃（At home），象征团圆和温馨。但现在趋势变了，越来越多家庭选择去餐厅（Eat out），特别是“年夜饭”（Reunion dinner），为了省去繁琐的准备和清洁工作（Hassle of cooking and cleaning）。方便（Convenience）成为主要考量。",
        key_arguments: ["Tradition (传统)", "Convenience (便利)", "Hassle (麻烦)", "Reunion dinner (年夜饭)", "Book in advance (提前预订)", "Atmosphere (氛围)"]
      },
      {
        id: 25203,
        topic_id: 252,
        content: "Part 3: What food do you eat on special occasions?",
        thinking_logic: "具有象征意义的食物（Symbolic food）。春节吃饺子（Dumplings）象征财富，吃鱼象征“年年有余”（Surplus）。中秋节吃月饼（Mooncakes）象征团圆。生日吃长寿面（Longevity noodles）。",
        key_arguments: ["Symbolic meaning (象征意义)", "Dumplings (饺子)", "Prosperity (繁荣)", "Longevity (长寿)", "Mooncakes (月饼)", "Surplus (盈余)"]
      },
      {
        id: 25204,
        topic_id: 252,
        content: "Part 3: Why do people like to have meals together during important festivals?",
        thinking_logic: "食物是社交的媒介（Social medium）。共餐（Communal dining）加强情感纽带（Strengthen bonds）。这是一种分享和庆祝的仪式（Ritual），确认家庭成员之间的关系和归属感。",
        key_arguments: ["Social bonding (社会纽带)", "Ritual (仪式)", "Communal dining (共餐)", "Belonging (归属感)", "Communication (交流)", "Harmony (和谐)"]
      },
      {
        id: 25205,
        topic_id: 252,
        content: "Part 3: Is it a hassle to prepare a meal at home?",
        thinking_logic: "是的，尤其是大餐。涉及买菜（Grocery shopping）、备菜（Prep work）、烹饪和清理（Clean up）。非常耗时（Time-consuming）。但很多人享受这个过程，认为这是一种表达爱的方式（Labor of love）。",
        key_arguments: ["Time-consuming (耗时的)", "Labor of love (爱的劳动)", "Prep work (准备工作)", "Clean up (清理)", "Hassle (麻烦)", "Satisfaction (满足感)"]
      },
      {
        id: 25206,
        topic_id: 252,
        content: "Part 3: What do people often talk about during meals?",
        thinking_logic: "轻松的话题（Light-hearted topics）。近况（Updates）、工作、学习、八卦（Gossip）、时事（Current events）。避免沉重或争议性话题以保持良好的消化和氛围。",
        key_arguments: ["Catch up (叙旧)", "Gossip (八卦)", "Current events (时事)", "Light-hearted (轻松的)", "Taboo (禁忌)", "Atmosphere (氛围)"]
      },
      {
        id: 25207,
        topic_id: 252,
        content: "Part 3: People are spending less and less time having meals with their families these days. Is this good or bad?",
        thinking_logic: "通常被认为是坏事。家庭聚餐是沟通的关键时刻。减少共餐导致家庭关系疏远（Alienation）和沟通减少。这是现代忙碌生活（Hectic lifestyle）的副作用。应该努力保护这段时间。",
        key_arguments: ["Alienation (疏远)", "Communication gap (沟通鸿沟)", "Family cohesion (家庭凝聚力)", "Hectic lifestyle (忙碌的生活方式)", "Prioritize (优先考虑)", "Disconnection (断联)"]
      }
    ]
  },
  {
    id: 254,
    title: "有趣的传统故事",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an interesting traditional story.",
    questions: [
      {
        id: 25401,
        topic_id: 254,
        content: "Describe an interesting traditional story. You should say: What the story is about, When you first heard it, Who told you the story, And explain why you think it is interesting.",
        sample_answer: {
          id: 25401,
          question_id: 25401,
          english_text: "I’d like to talk about the story of 'Journey to the West', specifically the part about the Monkey King causing havoc in Heaven. It’s one of the Four Great Classical Novels of Chinese literature.\n\nI first heard it from my grandfather when I was a toddler, probably around 4 or 5 years old. He used to tell me bedtime stories every night.\n\nThe story is about a magical monkey named Sun Wukong who acquires supernatural powers. He becomes so arrogant that he challenges the gods and demands a title in Heaven. When he is disrespected, he fights the entire army of Heaven single-handedly.\n\nI find it interesting because the Monkey King is such a rebellious yet charismatic character. He represents the desire for freedom and the courage to fight against authority. Also, the magic spells and transformations captured my imagination as a child. It’s a perfect blend of action, humor, and philosophy.",
          chinese_translation: "我想谈谈《西游记》的故事，特别是美猴王大闹天宫的那部分。这是中国文学四大名著之一。\n\n我第一次听这个故事是还是个蹒跚学步的孩子时，大概4或5岁。我祖父过去每天晚上都给我讲睡前故事。\n\n这个故事讲的是一只叫孙悟空的神奇猴子，他获得了超自然的力量。他变得非常傲慢，以至于挑战众神并在天庭索要封号。当他不被尊重时，他单枪匹马地对抗整个天庭大军。\n\n我觉得这很有趣，因为美猴王是一个如此叛逆但充满魅力的角色。他代表了对自由的渴望和反抗权威的勇气。此外，魔法咒语和变身在我小时候抓住了我的想象力。它是动作、幽默和哲学的完美融合。",
          vocabularies: [
            { word: "havoc", definition: "Confusion and lack of order, especially causing damage or trouble.", phonetic: "/ˈhæv.ək/", example: "Causing havoc in Heaven." },
            { word: "supernatural", definition: "Caused by forces that cannot be explained by science.", phonetic: "/ˌsuː.pɚˈnætʃ.ɚ.əl/", example: "Supernatural powers." },
            { word: "rebellious", definition: "If a group of people are rebellious, they oppose the ideas of the people in authority and plan to change the system, often using force.", phonetic: "/rɪˈbel.i.əs/", example: "A rebellious character." },
            { word: "charismatic", definition: "Used to describe a person who has charisma.", phonetic: "/ˌker.ɪzˈmæt̬.ɪk/", example: "A charismatic leader." }
          ],
          sentences: [
            {
              english: "He represents the desire for freedom and the courage to fight against authority.",
              chinese: "他代表了对自由的渴望和反抗权威的勇气。",
              key_words: ["rebellious", "authority"]
            }
          ]
        }
      }
    ]
  },
  {
    id: 256,
    title: "想要培养的好习惯",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a good habit your friend has and you want to develop.",
    questions: [
      {
        id: 25601,
        topic_id: 256,
        content: "Describe a good habit your friend has and you want to develop. You should say: Who your friend is, What habit he/she has, When you noticed this habit, And explain why you want to develop this habit.",
        sample_answer: {
          id: 25601,
          question_id: 25601,
          english_text: "I’d like to talk about my friend Sarah and her habit of journaling daily. We’ve been friends since college, and she is one of the most organized people I know.\n\nShe writes in her journal every single evening for about 15 minutes. I noticed this habit when we went on a trip together last year. No matter how tired she was, she would sit down and reflect on her day before sleeping.\n\nI want to develop this habit because I often feel my life is passing by in a blur. Journaling seems like a great way to practice mindfulness and preserve memories. Sarah says it helps her process emotions and reduce stress. I tend to bottle up my feelings, so having an outlet like that would be very beneficial for my mental health.",
          chinese_translation: "我想谈谈我的朋友萨拉和她每天记日记的习惯。我们从大学起就是朋友，她是我认识的最有条理的人之一。\n\n她每天晚上都会在日记本上写大约15分钟。去年我们一起去旅行时，我注意到了这个习惯。不管她有多累，她都会坐下来，在睡觉前反思她的一天。\n\n我想养成这个习惯，因为我经常觉得我的生活过得浑浑噩噩。记日记似乎是练习正念和保存记忆的好方法。萨拉说这有助于她处理情绪和减轻压力。我倾向于压抑自己的感情，所以拥有像那样的出口对我的心理健康非常有益。",
          vocabularies: [
            { word: "journaling", definition: "The activity of keeping a journal.", phonetic: "/ˈdʒɝː.nəl.ɪŋ/", example: "Daily journaling." },
            { word: "mindfulness", definition: "The practice of being aware of your body, mind, and feelings in the present moment, thought to create a feeling of calm.", phonetic: "/ˈmaɪnd.fəl.nəs/", example: "Practice mindfulness." },
            { word: "bottle up", definition: "To refuse to talk about something that makes you angry or worried.", phonetic: "/ˈbɑː.t̬əl ʌp/", example: "Bottle up feelings." }
          ],
          sentences: [
            {
              english: "Journaling seems like a great way to practice mindfulness and preserve memories.",
              chinese: "记日记似乎是练习正念和保存记忆的好方法。",
              key_words: ["mindfulness"]
            }
          ]
        }
      },
      {
        id: 25602,
        topic_id: 256,
        content: "Part 3: What habits should children have?",
        thinking_logic: "基本生活习惯和社交礼仪。卫生习惯（Hygiene）如刷牙洗手。礼貌（Manners）如说请和谢谢。条理性（Organization）如整理玩具。守时（Punctuality）和规律的睡眠（Routine）。这些是成长的基础。",
        key_arguments: ["Hygiene (卫生)", "Manners (礼貌)", "Tidiness (整洁)", "Punctuality (守时)", "Routine (常规)", "Responsibility (责任感)"]
      },
      {
        id: 25603,
        topic_id: 256,
        content: "Part 3: What should parents do to teach their children good habits?",
        thinking_logic: "言传身教（Lead by example）。父母是孩子最好的榜样。保持一致性（Consistency），规则不能朝令夕改。正向强化（Positive reinforcement），当孩子做得好时给予表扬或奖励。解释原因（Explain why），而不仅仅是强迫。",
        key_arguments: ["Role model (榜样)", "Consistency (一致性)", "Positive reinforcement (正向强化)", "Incentive (激励)", "Patience (耐心)", "Imitation (模仿)"]
      },
      {
        id: 25604,
        topic_id: 256,
        content: "Part 3: What influences do children with bad habits have on other children?",
        thinking_logic: "同伴压力（Peer pressure）和模仿（Mimicry）。孩子喜欢模仿同龄人以寻求认同感。如果一个孩子有坏习惯（如说脏话、霸凌），其他孩子可能会觉得这是“酷”的或者是常态，从而导致不良行为的扩散（Normalization）。会扰乱课堂秩序（Disruptive）。",
        key_arguments: ["Peer pressure (同伴压力)", "Mimicry (模仿)", "Bad influence (坏影响)", "Disruptive (破坏性的)", "Conformity (从众)", "Normalization (常态化)"]
      },
      {
        id: 25605,
        topic_id: 256,
        content: "Part 3: Why do some habits change when people get older?",
        thinking_logic: "成熟（Maturity）和优先级的变化（Priorities）。随着年龄增长，人们更关注健康（Health conscious），可能会戒烟或开始锻炼。生活方式的改变（Lifestyle shift），如工作或结婚，迫使人们调整作息。环境适应（Adaptability）。",
        key_arguments: ["Maturity (成熟)", "Health consciousness (健康意识)", "Priorities (优先事项)", "Lifestyle shift (生活方式转变)", "Self-discipline (自律)", "Adaptability (适应性)"]
      },
      {
        id: 25606,
        topic_id: 256,
        content: "Part 3: How do we develop bad habits?",
        thinking_logic: "通常作为应对压力的机制（Coping mechanism）或寻求即时满足（Instant gratification）。比如吃垃圾食品会释放多巴胺（Dopamine）。环境的触发（Triggers）和重复（Repetition）强化了神经通路。有时候是因为无聊或缺乏自律。",
        key_arguments: ["Instant gratification (即时满足)", "Dopamine (多巴胺)", "Coping mechanism (应对机制)", "Triggers (触发因素)", "Repetition (重复)", "Stress relief (缓解压力)"]
      },
      {
        id: 25607,
        topic_id: 256,
        content: "Part 3: What can we do to get rid of bad habits?",
        thinking_logic: "识别触发点（Identify triggers）。用好习惯替代坏习惯（Substitution），而不是单纯压抑。需要意志力（Willpower）和纪律（Discipline）。寻求支持系统（Support system）或问责（Accountability）。从小目标开始（Baby steps）。",
        key_arguments: ["Substitution (替代)", "Willpower (意志力)", "Accountability (问责)", "Trigger (触发点)", "Discipline (纪律)", "Mindfulness (正念)"]
      }
    ]
  },
  {
    id: 260,
    title: "空中所见之物",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe something interesting you saw in the sky.",
    questions: [
      {
        id: 26001,
        topic_id: 260,
        content: "Describe something interesting you saw in the sky. You should say: What it was, When and where you saw it, Who you were with, And explain why you thought it was interesting.",
        sample_answer: {
          id: 26001,
          question_id: 26001,
          english_text: "I want to describe a drone light show I saw in Shanghai last year. It was during the National Day holiday, at the Bund.\n\nI was with a group of friends. We were waiting for the usual light show on the buildings, but suddenly, hundreds of drones flew up into the night sky.\n\nThey formed various shapes, like a giant dragon, the Chinese flag, and even Chinese characters welcoming visitors. The coordination was perfect. The lights changed colors in sync with the music.\n\nIt was interesting because it was a perfect blend of technology and art. I had never seen so many drones working together like a swarm of fireflies. It felt very futuristic and magical, much better than traditional fireworks because it’s eco-friendly.",
          chinese_translation: "我想描述一下去年在上海看到的无人机灯光秀。那是在国庆假期，在外滩。\n\n我和一群朋友在一起。我们本来在等建筑物上的常规灯光秀，但突然间，数百架无人机飞入夜空。\n\n它们组成了各种形状，比如一条巨龙、中国国旗，甚至是欢迎游客的汉字。协调得完美无缺。灯光随着音乐同步变色。\n\n这很有趣，因为它是科技与艺术的完美融合。我从未见过这么多无人机像萤火虫群一样协同工作。感觉非常有未来感和魔力，比传统的烟花好多了，因为它是环保的。",
          vocabularies: [
            { word: "drone", definition: "An aircraft without a pilot that is controlled from the ground.", phonetic: "/droʊn/", example: "Drone light show." },
            { word: "synchronization", definition: "The fact of happening at the same time.", phonetic: "/ˌsɪŋ.krə.nəˈzeɪ.ʃən/", example: "In sync with music." },
            { word: "eco-friendly", definition: "Designed to have little or no damaging effect on the environment.", phonetic: "/ˌiː.koʊˈfrend.li/", example: "It is eco-friendly." }
          ],
          sentences: [
            {
              english: "It was interesting because it was a perfect blend of technology and art.",
              chinese: "这很有趣，因为它是科技与艺术的完美融合。",
              key_words: ["blend", "technology"]
            }
          ]
        }
      }
    ]
  },
  {
    id: 272,
    title: "想做的户外运动",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an outdoor sport you would like to do.",
    questions: [
      {
        id: 27201,
        topic_id: 272,
        content: "Describe an outdoor sport you would like to do. You should say: What it is, Where you would do it, What preparation you would need, And explain why you would like to do it.",
        sample_answer: {
          id: 27201,
          question_id: 27201,
          english_text: "I’ve always wanted to try rock climbing, specifically outdoor rock climbing on natural cliffs. I’ve done indoor climbing a few times, but doing it in nature is a different beast.\n\nI would love to do it in Yangshuo, which is famous for its karst peaks and is a mecca for climbers in China. The scenery there is stunning.\n\nTo prepare, I would need to improve my upper body strength and finger grip. I’d also need professional gear like climbing shoes, a harness, and a helmet. Most importantly, I’d need a certified instructor to ensure safety.\n\nI want to do it because it challenges both the body and the mind. You have to solve the 'puzzle' of the rock face while managing your fear. Reaching the top and seeing the view would give me a massive sense of accomplishment.",
          chinese_translation: "我一直想尝试攀岩，特别是天然悬崖上的户外攀岩。我做过几次室内攀岩，但在大自然中做是完全不同的两码事。\n\n我很想去阳朔做这件事，那里以喀斯特山峰闻名，是中国攀岩者的圣地。那里的景色令人惊叹。\n\n为了准备，我需要提高我的上肢力量和手指抓地力。我还需要专业的装备，如攀岩鞋、安全带和头盔。最重要的是，我需要一位认证教练来确保安全。\n\n我想做这件事，因为它既挑战身体也挑战头脑。你必须在控制恐惧的同时解开岩壁的“谜题”。到达顶峰并看到景色会给我巨大的成就感。",
          vocabularies: [
            { word: "rock climbing", definition: "The sport of climbing on rocks or mountains.", phonetic: "/ˈrɑːk ˌklaɪ.mɪŋ/", example: "Outdoor rock climbing." },
            { word: "mecca", definition: "A place that many people visit because it is famous for something.", phonetic: "/ˈmek.ə/", example: "A mecca for climbers." },
            { word: "harness", definition: "A piece of equipment with straps and belts, used to control or hold in place a person, animal, or object.", phonetic: "/ˈhɑːr.nəs/", example: "Safety harness." }
          ],
          sentences: [
            {
              english: "You have to solve the 'puzzle' of the rock face while managing your fear.",
              chinese: "你必须在控制恐惧的同时解开岩壁的“谜题”。",
              key_words: ["puzzle", "rock face"]
            }
          ]
        }
      }
    ]
  },
  {
    id: 273,
    title: "想看的体育赛事",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a sports event you would like to watch.",
    questions: [
      {
        id: 27301,
        topic_id: 273,
        content: "Describe a sports event you would like to watch. You should say: What it is, When it takes place, Where it takes place, And explain why you would like to watch it.",
        sample_answer: {
          id: 27301,
          question_id: 27301,
          english_text: "I dream of watching the Wimbledon Tennis Championships final live. It is the oldest and most prestigious tennis tournament in the world.\n\nIt takes place every year in late June and early July in London, UK. The matches are played on grass courts, which is quite rare nowadays.\n\nI want to watch it because of its history and tradition. Players must wear all-white outfits, and there are no advertisements around the courts. It feels very classy and elegant. Seeing the world's best players, like Djokovic or Alcaraz, battling it out on the Centre Court would be a once-in-a-lifetime experience. Plus, I’d love to try the traditional strawberries and cream!",
          chinese_translation: "我梦想去现场观看温布尔登网球锦标赛决赛。它是世界上最古老、最负盛名的网球锦标赛。\n\n它每年六月下旬和七月上旬在英国伦敦举行。比赛在草地网球场上进行，这在今天非常罕见。\n\n我想看它是因为它的历史和传统。球员必须穿全白色的衣服，球场周围没有广告。感觉非常高档和优雅。看到世界上最好的球员，如德约科维奇或阿尔卡拉斯，在中央球场决一死战，将是一生难得的经历。另外，我很想尝尝传统的草莓配奶油！",
          vocabularies: [
            { word: "prestigious", definition: "Very much respected and admired, usually because of being important.", phonetic: "/presˈtɪdʒ.əs/", example: "The most prestigious tournament." },
            { word: "classy", definition: "Stylish and sophisticated.", phonetic: "/ˈklæs.i/", example: "It feels very classy." },
            { word: "once-in-a-lifetime", definition: "Very special because you will probably only have it once.", phonetic: "/ˌwʌns.ɪn.əˈlaɪf.taɪm/", example: "A once-in-a-lifetime experience." }
          ],
          sentences: [
            {
              english: "Seeing the world's best players battling it out on the Centre Court would be a once-in-a-lifetime experience.",
              chinese: "看到世界上最好的球员在中央球场决一死战，将是一生难得的经历。",
              key_words: ["battling it out", "once-in-a-lifetime"]
            }
          ]
        }
      }
    ]
  },
  {
    id: 289,
    title: "知名产品的广告",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an advertisement you have seen that introduced a well-known product.",
    questions: [
      {
        id: 28901,
        topic_id: 289,
        content: "Describe an advertisement you have seen that introduced a well-known product. You should say: When and where you saw the advertisement, What the product was, How you liked the advertisement, And explain how you felt about it.",
        sample_answer: {
          id: 28901,
          question_id: 28901,
          english_text: "I’d like to talk about an advertisement for the iPhone 15 that I saw recently on YouTube. It was a short video clip, maybe 30 seconds long, that played before the video I wanted to watch.\n\nThe product, of course, was the latest smartphone from Apple. The ad focused on the durability of the phone's new titanium frame. It showed the phone being dropped, bumped, and splashed with water, but remaining perfectly intact.\n\nI really liked the advertisement because it was simple but effective. It didn't use a lot of technical jargon; instead, it used humor and visual storytelling. The background music was catchy, and the editing was fast-paced.\n\nI felt impressed by how confident the brand is. They didn't need to shout about features; they just showed the phone surviving daily life. It made me feel that the product is reliable and robust, which is exactly what I look for in a phone.",
          chinese_translation: "我想谈谈我最近在YouTube上看到的iPhone 15的广告。那是一个短视频片段，大概30秒长，在我想要看的视频之前播放。\n\n产品当然是苹果最新的智能手机。这则广告侧重于手机新钛金属边框的耐用性。它展示了手机被摔、被撞、被水溅，但仍然完好无损。\n\n我真的很喜欢这则广告，因为它简单而有效。它没有使用大量的技术术语；相反，它使用了幽默和视觉叙事。背景音乐朗朗上口，剪辑节奏很快。\n\n我对品牌的自信感到印象深刻。他们不需要大声宣传功能；他们只是展示了手机在日常生活中的幸存。这让我觉得产品可靠且坚固，这正是我在手机中寻找的。",
          vocabularies: [
            { word: "durability", definition: "The quality of being able to last a long time without becoming damaged.", phonetic: "/ˌdʊr.əˈbɪl.ə.t̬i/", example: "Focused on durability." },
            { word: "intact", definition: "Complete and in the original state.", phonetic: "/ɪnˈtækt/", example: "Remaining perfectly intact." },
            { word: "catchy", definition: "(especially of a tune or song) pleasing and easy to remember.", phonetic: "/ˈkætʃ.i/", example: "The music was catchy." },
            { word: "robust", definition: "(of a person or animal) strong and healthy, or (of an object or system) strong and unlikely to break or fail.", phonetic: "/roʊˈbʌst/", example: "The product is robust." }
          ],
          sentences: [
            {
              english: "I really liked the advertisement because it was simple but effective.",
              chinese: "我真的很喜欢这则广告，因为它简单而有效。",
              key_words: ["simple", "effective"]
            },
            {
               english: "It didn't use a lot of technical jargon; instead, it used humor and visual storytelling.",
               chinese: "它没有使用大量的技术术语；相反，它使用了幽默和视觉叙事。",
               key_words: ["jargon", "storytelling"]
            }
          ]
        }
      },
      {
        id: 28902,
        topic_id: 289,
        content: "Part 3: Where do we often see advertisements?",
        thinking_logic: "无处不在（Ubiquitous）。线上：社交媒体（Social media feeds）、视频网站前贴片、网页横幅。线下：公交车站、地铁、广告牌（Billboards）、电梯里。甚至在电影里的植入式广告（Product placement）。",
        key_arguments: ["Ubiquitous (无处不在的)", "Social media (社交媒体)", "Billboards (广告牌)", "Product placement (植入式广告)", "Digital footprint (数字足迹)", "Targeted ads (定向广告)"]
      },
      {
        id: 28903,
        topic_id: 289,
        content: "Part 3: What are the benefits of advertising?",
        thinking_logic: "对消费者：提供信息（Informative），了解新产品和折扣。对企业：提高品牌知名度（Brand awareness），增加销量。对经济：促进竞争（Competition）和创新，资助免费的媒体内容（如免费的电视节目或网站）。",
        key_arguments: ["Brand awareness (品牌知名度)", "Informative (提供信息的)", "Competition (竞争)", "Economic growth (经济增长)", "Revenue (收入)", "Market reach (市场覆盖)"]
      },
      {
        id: 28904,
        topic_id: 289,
        content: "Part 3: Are advertisements good or bad for children?",
        thinking_logic: "大多是负面的。儿童缺乏批判性思维（Critical thinking），容易被操纵（Manipulated）。广告制造物质主义（Materialism）和不切实际的期望。垃圾食品广告导致肥胖（Obesity）。需要监管（Regulation）。",
        key_arguments: ["Vulnerable (脆弱的)", "Manipulation (操纵)", "Materialism (物质主义)", "Pester power (纠缠力)", "Obesity (肥胖)", "Regulation (监管)"]
      },
      {
        id: 28905,
        topic_id: 289,
        content: "Part 3: How does advertising affect people?",
        thinking_logic: "潜意识影响（Subconscious influence）。它塑造我们的欲望（Desires）和价值观。创造“虚假需求”（Artificial needs），让我们买不需要的东西。利用FOMO（错失恐惧症）和社会比较（Social comparison）。",
        key_arguments: ["Subconscious (潜意识的)", "Artificial needs (虚假需求)", "Consumerism (消费主义)", "Social status (社会地位)", "Persuasion (说服)", "Behavior (行为)"]
      },
      {
        id: 28906,
        topic_id: 289,
        content: "Part 3: Do people pay attention to advertisements on public transport?",
        thinking_logic: "取决于情况。如果在等车或在车上无聊（Boredom），人们会看。因为这是“被动观看”（Passive viewing）。但现在大家多看手机，对物理广告的关注度下降。不过，有创意的互动广告仍能吸引眼球。",
        key_arguments: ["Captive audience (受众)", "Passive viewing (被动观看)", "Distraction (分心)", "Smartphone (智能手机)", "Eye-catching (引人注目的)", "Boredom (无聊)"]
      },
      {
        id: 28907,
        topic_id: 289,
        content: "Part 3: Do you think it is good to see the same advertisements everywhere?",
        thinking_logic: "不好。这叫“广告疲劳”（Ad fatigue）。重复过多会让人厌烦（Annoying），产生逆反心理。多样化（Variety）更好。但从营销角度看，重复有助于记忆（Retention）。",
        key_arguments: ["Ad fatigue (广告疲劳)", "Repetitive (重复的)", "Annoying (恼人的)", "Brand recall (品牌回忆)", "Overexposure (过度曝光)", "Intrusive (侵入性的)"]
      }
    ]
  },
  {
    id: 291,
    title: "二手交易网站",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a website that sells second-hand items.",
    questions: [
      {
        id: 29101,
        topic_id: 291,
        content: "Describe a website that sells second-hand items. You should say: What it is, How you found out about it, What people can buy from it, And explain whether you like it.",
        sample_answer: {
          id: 29101,
          question_id: 29101,
          english_text: "I’d like to talk about 'Xianyu', which literally translates to 'Idle Fish'. It is the most popular second-hand trading platform in China, owned by Alibaba.\n\nI found out about it a few years ago when I needed to get rid of some old textbooks after graduating from university. My roommate recommended it to me, saying it was super easy to list items there.\n\nPeople can buy virtually anything on it. From used electronics like iPhones and cameras to clothes, furniture, and even concert tickets. It’s not just for cheap stuff; you can also find luxury handbags or limited-edition collectibles. It’s like a massive online flea market.\n\nI really like it for two reasons. First, it promotes sustainability. Instead of throwing things away, we can extend their lifecycle, which is good for the environment. Second, it’s a treasure hunt. You can often find great deals or rare items that are no longer available in stores. The community aspect is also fun; you can chat with sellers and sometimes make friends with people who share similar hobbies.",
          chinese_translation: "我想谈谈“闲鱼”。这是中国最受欢迎的二手交易平台，归阿里巴巴所有。\n\n几年前我大学毕业需要处理一些旧教科书时发现了它。我的室友把它推荐给我，说在那里列出物品超级容易。\n\n人们几乎可以在上面买到任何东西。从像iPhone和相机这样的二手电子产品到衣服、家具，甚至音乐会门票。它不仅仅是为了便宜货；你也可以找到奢侈手袋或限量版收藏品。它就像一个巨大的在线跳蚤市场。\n\n我真的很喜欢它，原因有两个。首先，它促进了可持续性。我们可以延长它们的生命周期，而不是把东西扔掉，这对环境有益。其次，这是一次寻宝。你经常可以找到很棒的交易或商店里不再出售的稀有物品。社区方面也很有趣；你可以和卖家聊天，有时还可以和有相似爱好的人交朋友。",
          vocabularies: [
            { word: "sustainability", definition: "The quality of causing little or no damage to the environment and therefore able to continue for a long time.", phonetic: "/səˌsteɪ.nəˈbɪl.ə.t̬i/", example: "Promotes sustainability." },
            { word: "lifecycle", definition: "The series of changes that a living thing goes through from the beginning of its life until death.", phonetic: "/ˈlaɪfˌsaɪ.kəl/", example: "Extend their lifecycle." },
            { word: "flea market", definition: "A market, usually taking place outside, where old or used goods are sold cheaply.", phonetic: "/ˈfliː ˌmɑːr.kɪt/", example: "Online flea market." },
            { word: "treasure hunt", definition: "A search for valuable or interesting things.", phonetic: "/ˈtreʒ.ɚ ˌhʌnt/", example: "It’s a treasure hunt." }
          ],
          sentences: [
            {
              english: "Instead of throwing things away, we can extend their lifecycle, which is good for the environment.",
              chinese: "我们可以延长它们的生命周期，而不是把东西扔掉，这对环境有益。",
              key_words: ["lifecycle", "environment"]
            },
            {
              english: "You can often find great deals or rare items that are no longer available in stores.",
              chinese: "你经常可以找到很棒的交易或商店里不再出售的稀有物品。",
              key_words: ["great deals", "rare items"]
            }
          ]
        }
      },
      {
        id: 29102,
        topic_id: 291,
        content: "Part 3: Some people think it’s a waste to buy too many clothes for children. What do you think?",
        thinking_logic: "同意。孩子长得快（Outgrow quickly），衣服很快就穿不下了。买太多既浪费钱也不环保（Eco-friendly）。二手衣物或亲友赠送（Hand-me-downs）是更好的选择。",
        key_arguments: ["Outgrow (长得比...快)", "Wasteful (浪费的)", "Hand-me-downs (旧衣服)", "Sustainability (可持续性)", "Rapid growth (快速生长)", "Budget (预算)"]
      },
      {
        id: 29103,
        topic_id: 291,
        content: "Part 3: What do people do with the clothes they don’t want anymore?",
        thinking_logic: "几种处理方式。捐赠（Donate）给慈善机构。在二手平台（Second-hand platforms）转卖。改造（Upcycle）成抹布或其他用品。或者直接扔掉（Discard），但这造成了纺织品浪费（Textile waste）。",
        key_arguments: ["Donate (捐赠)", "Resell (转卖)", "Upcycle (升级改造)", "Textile waste (纺织品浪费)", "Recycle bin (回收箱)", "Declutter (清理)"]
      },
      {
        id: 29104,
        topic_id: 291,
        content: "Part 3: Why do people buy second-hand clothes?",
        thinking_logic: "省钱（Cost-effective），特别是名牌。追求复古风格（Vintage style），不想撞衫（Unique）。环保意识（Environmental awareness），反对快时尚（Fast fashion）的浪费。",
        key_arguments: ["Cost-effective (划算的)", "Vintage (复古)", "Unique (独特的)", "Fast fashion (快时尚)", "Eco-conscious (环保意识)", "Bargain hunting (淘便宜货)"]
      },
      {
        id: 29105,
        topic_id: 291,
        content: "Part 3: What problems will occur if people don’t recycle?",
        thinking_logic: "环境灾难。垃圾填埋场（Landfills）溢出，污染土壤和水源。资源枯竭（Resource depletion），因为我们需要不断开采新原料。温室气体排放增加，加剧气候变化（Climate change）。",
        key_arguments: ["Landfill (垃圾填埋场)", "Pollution (污染)", "Resource depletion (资源枯竭)", "Climate change (气候变化)", "Sustainable (可持续的)", "Waste management (废物管理)"]
      },
      {
        id: 29106,
        topic_id: 291,
        content: "Part 3: Should the government encourage people to recycle items?",
        thinking_logic: "必须的。政府有资源和权力制定政策（Policies）。可以通过激励措施（Incentives）如押金返还制度，或者罚款（Fines）来强制分类。教育宣传（Public awareness campaigns）也很重要。",
        key_arguments: ["Policy (政策)", "Incentive (激励)", "Mandatory (强制的)", "Public awareness (公众意识)", "Subsidy (补贴)", "Infrastructure (基础设施)"]
      }
    ]
  },
  {
    id: 292,
    title: "有趣的小说或故事",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a story or novel you have read that you found interesting.",
    questions: [
      {
        id: 29201,
        topic_id: 292,
        content: "Describe a story or novel you have read that you found interesting. You should say: When you read it, What the story or novel was about, Who wrote it, And explain why you would like to read it.",
        sample_answer: {
          id: 29201,
          question_id: 29201,
          english_text: "I want to talk about 'The Three-Body Problem', a science fiction novel by the Chinese author Liu Cixin. I read it about three years ago, just before it became a global sensation.\n\nThe story is about humanity's first contact with an alien civilization called Trisolaris. Unlike typical alien stories where they just invade, this one spans centuries and involves complex physics, history, and sociology. It starts during the Cultural Revolution in China and goes all the way to the end of the universe.\n\nI found it interesting because it is mind-bending. The scientific concepts, like the 'three-body problem' in orbital mechanics, are woven into the plot so brilliantly. It makes you feel very small in the vast universe. It’s not just an adventure; it makes you think deeply about human nature, survival, and the dark forest theory of the cosmos. It was so gripping that I finished the whole book in two days.",
          chinese_translation: "我想谈谈中国作家刘慈欣的科幻小说《三体》。我大约三年前读的，就在它轰动全球之前。\n\n这个故事关于人类与一个叫三体人的外星文明的第一次接触。不像典型的外星人入侵故事，这个故事跨越了几个世纪，涉及复杂的物理学、历史和社会学。它从中国的文革时期开始，一直讲到宇宙的尽头。\n\n我觉得它很有趣，因为它让人脑洞大开。像轨道力学中的“三体问题”这样的科学概念被如此精彩地编织进情节中。它让你在浩瀚的宇宙中感觉非常渺小。这不仅仅是一次冒险；它让你深刻思考人性、生存和宇宙的黑暗森林理论。它太引人入胜了，我两天就读完了整本书。",
          vocabularies: [
            { word: "sensation", definition: "Something very exciting or interesting, or something that causes great excitement or interest.", phonetic: "/senˈseɪ.ʃən/", example: "A global sensation." },
            { word: "mind-bending", definition: "Describing something that is difficult to understand or imagine because it is very strange or complicated.", phonetic: "/ˈmaɪndˌben.dɪŋ/", example: "A mind-bending story." },
            { word: "woven", definition: "Past participle of weave (to combine several different things).", phonetic: "/ˈwoʊ.vən/", example: "Woven into the plot." },
            { word: "gripping", definition: "So interesting or exciting that it holds your attention completely.", phonetic: "/ˈɡrɪp.ɪŋ/", example: "It was so gripping." }
          ],
          sentences: [
            {
              english: "It makes you feel very small in the vast universe.",
              chinese: "它让你在浩瀚的宇宙中感觉非常渺小。",
              key_words: ["vast", "universe"]
            },
            {
              english: "It was so gripping that I finished the whole book in two days.",
              chinese: "它太引人入胜了，我两天就读完了整本书。",
              key_words: ["gripping"]
            }
          ]
        }
      },
      {
        id: 29202,
        topic_id: 292,
        content: "Part 3: Do you prefer to read e-books or printed books?",
        thinking_logic: "各有千秋。纸质书（Printed books）：有触感（Tactile），有书香，不伤眼，适合收藏。电子书（E-books）：便携（Portable），能存几千本书，有背光，查字典方便。我通常旅行用电子书，在家看纸质书。",
        key_arguments: ["Tactile experience (触觉体验)", "Portable (便携的)", "Eye strain (眼疲劳)", "Collection (收藏)", "Convenience (便利)", "Fragrance of books (书香)"]
      },
      {
        id: 29203,
        topic_id: 292,
        content: "Part 3: What kinds of novels are suitable for a film adaptation?",
        thinking_logic: "情节驱动（Plot-driven）的小说。这类小说有强烈的视觉冲突（Visual conflict）、动作场面和清晰的故事线，如惊悚片或科幻片。那些重心理描写（Psychological description）或意识流的小说很难改编，因为无法直接展示内心戏。",
        key_arguments: ["Adaptation (改编)", "Visual appeal (视觉吸引力)", "Plot-driven (情节驱动的)", "Internal monologue (内心独白)", "Cinematic (电影感的)", "Action-packed (动作丰富的)"]
      },
      {
        id: 29204,
        topic_id: 292,
        content: "Part 3: How does technology help people tell stories?",
        thinking_logic: "媒介更丰富。CGI（电脑生成图像）能创造不可能的视觉奇观。互动叙事（Interactive storytelling）如游戏，让观众参与其中。社交媒体让普通人也能分享自己的故事（User-generated content）。VR提供沉浸式体验（Immersive）。",
        key_arguments: ["CGI (电脑生成图像)", "Interactive (互动的)", "Immersive (沉浸式的)", "Medium (媒介)", "Visual effects (视觉特效)", "Accessibility (可获得性)"]
      },
      {
        id: 29205,
        topic_id: 292,
        content: "Part 3: Why are mystery novels so popular nowadays?",
        thinking_logic: "智力挑战（Intellectual challenge）。读者喜欢解谜（Solve puzzles），与侦探比赛。悬念（Suspense）让人肾上腺素飙升，欲罢不能。它提供了一种逃避（Escapism），在混乱的世界中寻找逻辑和正义（Justice）。",
        key_arguments: ["Suspense (悬念)", "Curiosity (好奇心)", "Puzzle-solving (解谜)", "Adrenaline (肾上腺素)", "Escapism (逃避现实)", "Justice (正义)"]
      },
      {
        id: 29206,
        topic_id: 292,
        content: "Part 3: Is there any difference between the popular novels now and those in the past?",
        thinking_logic: "节奏（Pacing）和主题。现代小说节奏更快，更注重钩子（Hooks）来抓住读者短暂的注意力。主题更现代，涉及科技、心理健康等。过去的小说可能更慢热，描写更细腻（Descriptive），语言更正式。",
        key_arguments: ["Pacing (节奏)", "Attention span (注意力持续时间)", "Themes (主题)", "Descriptive (描写的)", "Contemporary (当代的)", "Language style (语言风格)"]
      },
      {
        id: 29207,
        topic_id: 292,
        content: "Part 3: Why do some people prefer reading novels to playing computer games?",
        thinking_logic: "想象力（Imagination）。阅读是被动的输入但主动的构建（Active construction），每个人脑中的哈姆雷特都不一样。游戏通常有固定的画面。阅读更安静，是一种深度的独处（Solitude）。而且阅读没有胜负压力。",
        key_arguments: ["Imagination (想象力)", "Passive entertainment (被动娱乐)", "Active engagement (主动参与)", "Solitude (独处)", "Visuals (视觉效果)", "Pace (节奏)"]
      }
    ]
  },
  {
    id: 293,
    title: "感兴趣的科学领域",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an area/subject of science that you are interested in and would like to learn more about.",
    questions: [
      {
        id: 29301,
        topic_id: 293,
        content: "Describe an area/subject of science (biology, robotics, etc.) that you are interested in and would like to learn more about. You should say: Which area/subject it is, When and where you came to know this area/subject, How you get information about this area/subject, And explain why you are interested in this area/subject.",
        sample_answer: {
          id: 29301,
          question_id: 29301,
          english_text: "I’d like to talk about Robotics and Artificial Intelligence. It’s a field that combines engineering and computer science to create machines that can perform tasks autonomously.\n\nI first became really interested in this when I watched the movie 'Big Hero 6' a few years ago, and then later I saw real-world applications like the Boston Dynamics robots dancing online.\n\nI mostly get information from tech blogs like TechCrunch, YouTube channels dedicated to engineering, and sometimes I read research papers if they aren't too technical.\n\nI’m interested in it because it feels like the future. The idea that we can create 'life' or at least intelligent entities from metal and code is fascinating. Also, it has the potential to solve huge problems like elderly care or dangerous rescue missions, though it also brings ethical challenges which I find intellectually stimulating.",
          chinese_translation: "我想谈谈机器人技术和人工智能。这是一个结合了工程学和计算机科学的领域，旨在创造能够自主执行任务的机器。\n\n几年前看了电影《超能陆战队》后，我第一次对这个领域产生了浓厚的兴趣，后来我在网上看到了像波士顿动力公司的机器人跳舞那样的现实应用。\n\n我主要从TechCrunch这样的科技博客、专门介绍工程学的YouTube频道获取信息，有时如果研究论文不太深奥，我也会读一读。\n\n我对它感兴趣是因为它感觉像是未来。我们可以用金属和代码创造“生命”或至少是智能实体的想法很迷人。此外，它有潜力解决像养老或危险救援任务这样的巨大问题，尽管它也带来了伦理挑战，我觉得这在智力上很有刺激性。",
          vocabularies: [
            { word: "autonomously", definition: "Independently; without outside control.", phonetic: "/ɑːˈtɑː.nə.məs.li/", example: "Robots can work autonomously." },
            { word: "fascinating", definition: "Extremely interesting.", phonetic: "/ˈfæs.ən.eɪ.tɪŋ/", example: "AI is fascinating." },
            { word: "ethical", definition: "Relating to beliefs about what is morally right and wrong.", phonetic: "/ˈeθ.ɪ.kəl/", example: "Ethical challenges." },
            { word: "stimulating", definition: "Encouraging or focusing interest or enthusiasm.", phonetic: "/ˈstɪm.jə.leɪ.tɪŋ/", example: "Intellectually stimulating." }
          ],
          sentences: [
            {
              english: "The idea that we can create 'life' or at least intelligent entities from metal and code is fascinating.",
              chinese: "我们可以用金属和代码创造“生命”或至少是智能实体的想法很迷人。",
              key_words: ["fascinating", "entities"]
            },
            {
              english: "It has the potential to solve huge problems like elderly care or dangerous rescue missions.",
              chinese: "它有潜力解决像养老或危险救援任务这样的巨大问题。",
              key_words: ["potential", "rescue missions"]
            }
          ]
        }
      },
      {
        id: 29302,
        topic_id: 293,
        content: "Part 3: Why do some children not like learning science at school?",
        thinking_logic: "通常因为教学方法枯燥（Dry teaching methods）。科学概念往往是抽象的（Abstract concepts），如果老师只是照本宣科，孩子很难理解。此外，它被认为是困难的学科，容易让人产生挫败感（Frustration）。",
        key_arguments: ["Abstract (抽象的)", "Dry (枯燥的)", "Frustration (挫败感)", "Hands-on (动手的)", "Curriculum (课程)", "Engagement (参与度)"]
      },
      {
        id: 29303,
        topic_id: 293,
        content: "Part 3: Is it important to study science at school?",
        thinking_logic: "非常重要。科学培养批判性思维（Critical thinking）和解决问题的能力（Problem-solving）。它帮助我们理解世界是如何运作的（How the world works），从气候变化到疫苗原理，这对现代公民（Scientific literacy）至关重要。",
        key_arguments: ["Critical thinking (批判性思维)", "Scientific literacy (科学素养)", "Problem-solving (解决问题)", "Innovation (创新)", "Foundation (基础)", "Curiosity (好奇心)"]
      },
      {
        id: 29304,
        topic_id: 293,
        content: "Part 3: Which science subject is the most important for children to learn?",
        thinking_logic: "很难选，但生物学（Biology）可能最贴近生活，因为它涉及健康和身体。物理学（Physics）是理解自然规律的基础。现在的趋势是STEM教育，强调跨学科（Interdisciplinary）学习，而不是孤立的学科。",
        key_arguments: ["Biology (生物学)", "Physics (物理学)", "Foundational (基础的)", "Health (健康)", "Interdisciplinary (跨学科的)", "STEM (理工科)"]
      },
      {
        id: 29305,
        topic_id: 293,
        content: "Part 3: Should people continue to study science after graduating from school?",
        thinking_logic: "是的，终身学习（Lifelong learning）。科技发展迅速，我们需要保持更新（Stay updated）以免被淘汰。了解科学有助于我们在医疗、环保等问题上做出明智的决定（Informed decisions）。",
        key_arguments: ["Lifelong learning (终身学习)", "Stay updated (保持更新)", "Informed decisions (明智的决定)", "Evolution (进化)", "Technology (技术)", "Curiosity (好奇心)"]
      },
      {
        id: 29306,
        topic_id: 293,
        content: "Part 3: How do you get to know about scientific news?",
        thinking_logic: "多种渠道。社交媒体（Social media）如Twitter或YouTube频道。科普网站和播客（Podcasts）。纪录片（Documentaries）也是很好的来源。不过要注意甄别信息的来源（Credibility）。",
        key_arguments: ["Social media (社交媒体)", "Podcasts (播客)", "Documentaries (纪录片)", "Credibility (可信度)", "Accessibility (可获得性)", "Journalism (新闻业)"]
      },
      {
        id: 29307,
        topic_id: 293,
        content: "Part 3: Should scientists explain the research process to the public?",
        thinking_logic: "应该。这能增加透明度（Transparency）和公众信任（Public trust）。解释过程能让人们明白科学不是魔法，而是严谨的验证（Rigorous verification）。这也有助于争取研究资金（Funding）。",
        key_arguments: ["Transparency (透明度)", "Public trust (公众信任)", "Misinformation (错误信息)", "Funding (资金)", "Methodology (方法论)", "Demystify (揭秘)"]
      }
    ]
  },
  {
    id: 294,
    title: "想提升的天赋",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a natural talent (sports, music, etc.) you want to improve.",
    questions: [
      {
        id: 29401,
        topic_id: 294,
        content: "Describe a natural talent (sports, music, etc.) you want to improve. You should say: What it is, When you discovered it, How you want to improve it, And how you feel about it.",
        sample_answer: {
          id: 29401,
          question_id: 29401,
          english_text: "I’d like to talk about my talent for drawing and sketching. Ever since I was a child, I’ve had a knack for capturing what I see on paper.\n\nI discovered this talent when I was in primary school. During art classes, my teachers would often praise my work for its detail and perspective, which were apparently advanced for my age. I remember doodling in the margins of my notebooks constantly.\n\nHowever, I never pursued it professionally. Now, I want to improve it by taking a formal course in digital art. I want to learn how to use software like Procreate or Photoshop to create illustrations. I plan to practice for at least an hour every day to refine my technique.\n\nI feel very passionate about it. Drawing is not just a skill for me; it’s a form of therapy. When I draw, I enter a state of flow and forget about all my stress. Improving this talent would give me a huge sense of personal achievement and maybe even a side career in the future.",
          chinese_translation: "我想谈谈我在绘画和素描方面的天赋。从我很小的时候起，我就有一种把所见之物画在纸上的诀窍。\n\n我在上小学时发现了这个天赋。在美术课上，老师经常称赞我的作品细节丰富、透视准确，这显然超出了我的年龄水平。我记得我经常在笔记本的空白处涂鸦。\n\n然而，我从未专业地追求过它。现在，我想通过参加正规的数字艺术课程来提升它。我想学习如何使用Procreate或Photoshop等软件来创作插图。我计划每天至少练习一个小时来磨练我的技巧。\n\n我对它充满热情。绘画对我来说不仅仅是一项技能；它是一种治疗方式。当我画画时，我会进入心流状态，忘记所有的压力。提升这项天赋会给我带来巨大的个人成就感，甚至可能在未来成为一种副业。",
          vocabularies: [
            { word: "knack", definition: "A skill or an ability to do something easily and well.", phonetic: "/næk/", example: "She has a knack for remembering names." },
            { word: "perspective", definition: "The art of creating an effect of depth and distance in a picture.", phonetic: "/pɚˈspek.tɪv/", example: "The drawing has excellent perspective." },
            { word: "therapy", definition: "A treatment that helps someone feel better, grow stronger, etc.", phonetic: "/ˈθer.ə.pi/", example: "Art can be a form of therapy." },
            { word: "state of flow", definition: "A mental state of being completely focused and immersed in an activity.", phonetic: "/steɪt əv floʊ/", example: "I enter a state of flow when I paint." }
          ],
          sentences: [
            {
              english: "Ever since I was a child, I’ve had a knack for capturing what I see on paper.",
              chinese: "从我很小的时候起，我就有一种把所见之物画在纸上的诀窍。",
              key_words: ["knack", "capturing"]
            },
            {
              english: "When I draw, I enter a state of flow and forget about all my stress.",
              chinese: "当我画画时，我会进入心流状态，忘记所有的压力。",
              key_words: ["state of flow"]
            }
          ]
        }
      },
      {
        id: 29402,
        topic_id: 294,
        content: "Part 3: Do you think artists with talents should focus on their talents?",
        thinking_logic: "是的，专注（Specialization）是精通的关键。但也要平衡（Balance）。如果只关注天赋而忽视其他生活技能，可能会变得与社会脱节。而且，多面手（All-rounder）在现代社会适应性更强。",
        key_arguments: ["Specialization (专业化)", "Mastery (精通)", "Well-rounded (全面发展的)", "Obsession (痴迷)", "Burnout (倦怠)", "Adaptability (适应性)"]
      },
      {
        id: 29403,
        topic_id: 294,
        content: "Part 3: Is it possible for us to know whether children who are 3 or 4 years old will become musicians and painters when they grow up?",
        thinking_logic: "很难（Difficult to predict）。虽然早期迹象（Early signs）如音准或色彩敏感度可能存在，但成长过程中的环境、教育和兴趣变化（Shifting interests）影响巨大。很多神童（Child prodigies）长大后并未从事相关职业。",
        key_arguments: ["Unpredictable (不可预测的)", "Potential (潜力)", "Child prodigy (神童)", "Nurture (后天培养)", "Developmental stages (发展阶段)", "Interest shift (兴趣转移)"]
      },
      {
        id: 29404,
        topic_id: 294,
        content: "Part 3: Why do people like to watch talent shows？",
        thinking_logic: "娱乐性（Entertainment value）和情感共鸣。看到普通人实现梦想（Rags-to-riches stories）很励志。还有戏剧性（Drama）和评委的犀利点评。这也是一种替代性满足（Vicarious satisfaction）。",
        key_arguments: ["Inspirational (励志的)", "Underdog story (弱者的故事)", "Drama (戏剧性)", "Vicarious (替代的)", "Entertainment (娱乐)", "Emotional connection (情感联系)"]
      },
      {
        id: 29405,
        topic_id: 294,
        content: "Part 3: Do you think it is more interesting to watch famous people's or ordinary people's shows?",
        thinking_logic: "各有千秋。名人秀：看重专业水平（Professionalism）和明星魅力（Star power）。普通人秀：看重真实性（Authenticity）和惊喜感（Surprise factor）。普通人的逆袭往往更能打动观众。",
        key_arguments: ["Relatable (有共鸣的)", "Authenticity (真实性)", "Star power (明星效应)", "Professionalism (专业度)", "Surprise element (惊喜元素)", "Polished (打磨过的)"]
      },
      {
        id: 29406,
        topic_id: 294,
        content: "Part 3: Do you think it's important to develop children's talents?",
        thinking_logic: "非常重要。建立自信（Self-esteem）。提供自我表达（Self-expression）的出口。即使未来不以此为生，这些技能也能丰富生活，培养纪律（Discipline）和专注力。",
        key_arguments: ["Confidence (自信)", "Self-expression (自我表达)", "Holistic development (全面发展)", "Discipline (纪律)", "Creativity (创造力)", "Enrichment (丰富)"]
      },
      {
        id: 29407,
        topic_id: 294,
        content: "Part 3: Why do some people like to show their talents online?",
        thinking_logic: "寻求认可（Validation）和关注（Attention）。建立个人品牌（Personal branding）可能带来职业机会（Monetization）。互联网提供了低门槛的展示平台（Platform），能接触到全球观众。",
        key_arguments: ["Validation (认可)", "Exposure (曝光)", "Monetization (变现)", "Personal branding (个人品牌)", "Instant feedback (即时反馈)", "Community (社区)"]
      }
    ]
  },
  {
    id: 295,
    title: "童年玩具",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a toy you liked in your childhood.",
    questions: [
      {
        id: 29501,
        topic_id: 295,
        content: "Describe a toy you liked in your childhood. You should say: What kind of toy it is, When you received it, How you played it, And how you felt about it.",
        sample_answer: {
          id: 29501,
          question_id: 29501,
          english_text: "I want to talk about a Lego set that I received for my 7th birthday. It was a huge bucket filled with hundreds of colorful bricks of all shapes and sizes.\n\nI received it from my parents as a birthday present. I remember being so excited that I dumped all the bricks onto the living room floor immediately.\n\nI played with it almost every day. Unlike modern sets that come with specific instructions to build a movie scene, this was just raw material. I used to build castles, spaceships, and sometimes entire cities. I would create stories for the little plastic people living in my Lego world.\n\nI felt incredibly creative and free when playing with it. It was my favorite toy because the possibilities were endless. It taught me patience and how to solve structural problems. Even now, looking back, I think that simple bucket of bricks sparked my interest in engineering and design.",
          chinese_translation: "我想谈谈我在7岁生日时收到的一套乐高积木。那是一个巨大的桶，装满了数百块形状和大小各异的彩色积木。\n\n这是我父母送给我的生日礼物。我记得我当时太兴奋了，立马把所有积木都倒在了客厅的地板上。\n\n我几乎每天都玩它。不像现代套装那样带有构建电影场景的具体说明，这只是原材料。我过去常常建造城堡、宇宙飞船，有时甚至是整个城市。我会为生活在我的乐高世界里的塑料小人创造故事。\n\n玩它的时候，我感到无比的创造力和自由。这是我最喜欢的玩具，因为可能性是无限的。它教会了我耐心以及如何解决结构问题。即使现在回想起来，我认为那桶简单的积木激发了我对工程和设计的兴趣。",
          vocabularies: [
            { word: "raw material", definition: "Basic material from which a product is made.", phonetic: "/ˌrɑː məˈtɪr.i.əl/", example: "It was just raw material for building." },
            { word: "endless", definition: "Never finishing, or seeming never to finish.", phonetic: "/ˈend.ləs/", example: "The possibilities were endless." },
            { word: "spark", definition: "To cause the start of something, especially an argument or fighting.", phonetic: "/spɑːrk/", example: "Sparked my interest." }
          ],
          sentences: [
            {
              english: "I felt incredibly creative and free when playing with it.",
              chinese: "玩它的时候，我感到无比的创造力和自由。",
              key_words: ["creative", "free"]
            },
            {
              english: "It taught me patience and how to solve structural problems.",
              chinese: "它教会了我耐心以及如何解决结构问题。",
              key_words: ["structural problems"]
            }
          ]
        }
      },
      {
        id: 29502,
        topic_id: 295,
        content: "Part 3: What's the difference between the toys boys play with and girls play with?",
        thinking_logic: "传统刻板印象 (Stereotypes)。男孩通常玩动作导向 (Action-oriented) 的玩具，如汽车、枪、建筑积木，培养空间技能。女孩通常玩社交导向 (Socially-oriented) 的玩具，如洋娃娃、过家家，培养同理心。但现在这种界限正在模糊 (Blurring lines)，很多玩具是中性的 (Gender-neutral)。",
        key_arguments: ["Stereotypes (刻板印象)", "Action-oriented (动作导向的)", "Social skills (社交技能)", "Gender-neutral (中性的)", "Marketing (营销)", "Spatial awareness (空间意识)"]
      },
      {
        id: 29503,
        topic_id: 295,
        content: "Part 3: What are the advantages and disadvantages of modern toys?",
        thinking_logic: "优点：教育性强 (Educational)，互动性好 (Interactive)，尤其是STEM玩具。缺点：过度依赖电子屏幕 (Screen time)，扼杀想象力 (Stifle imagination) 因为玩法单一，且往往很贵。塑料垃圾 (Plastic waste) 也是环境问题。",
        key_arguments: ["Educational (有教育意义的)", "Interactive (互动的)", "Stifle imagination (扼杀想象力)", "Screen time (屏幕时间)", "Passive entertainment (被动娱乐)", "Overstimulation (过度刺激)"]
      },
      {
        id: 29504,
        topic_id: 295,
        content: "Part 3: How do advertisements influence children?",
        thinking_logic: "制造欲望。孩子缺乏批判性思维 (Critical thinking)，容易被广告中夸大的快乐所吸引。这导致“纠缠力” (Pester power)，孩子会不断纠缠父母购买。广告也设定了社会规范，让孩子觉得没有某个玩具就不合群 (FOMO)。",
        key_arguments: ["Pester power (纠缠力)", "Critical thinking (批判性思维)", "Manipulative (操纵性的)", "Consumerism (消费主义)", "Peer pressure (同伴压力)", "Unrealistic expectations (不切实际的期望)"]
      },
      {
        id: 29505,
        topic_id: 295,
        content: "Part 3: Should advertising aimed at kids be prohibited?",
        thinking_logic: "支持：儿童是弱势群体 (Vulnerable)，容易受骗。这能减少家庭冲突和过度消费。反对：商业自由 (Commercial freedom)。父母有责任监管 (Parental guidance) 孩子看什么，并教育他们如何辨别广告。",
        key_arguments: ["Vulnerable (脆弱的)", "Regulation (监管)", "Parental responsibility (父母责任)", "Ethical marketing (道德营销)", "Ban (禁止)", "Commercial interests (商业利益)"]
      },
      {
        id: 29506,
        topic_id: 295,
        content: "Part 3: What's the difference between the toys kids play now and those they played in the past?",
        thinking_logic: "技术含量。过去：简单 (Simple)、手工制作 (Handmade)、户外为主 (Outdoors)，如跳绳、弹珠。现在：高科技 (High-tech)、电子化 (Electronic)、室内为主。现在的玩具更复杂但可能限制了开放式玩法 (Open-ended play)。",
        key_arguments: ["High-tech (高科技的)", "Open-ended play (开放式游戏)", "Sedentary (久坐的)", "Craftsmanship (工艺)", "Digitalization (数字化)", "Simplicity (简单)"]
      },
      {
        id: 29507,
        topic_id: 295,
        content: "Part 3: Do you think parents should buy more toys for their kids or spend more time with them?",
        thinking_logic: "肯定是花时间。陪伴 (Companionship) 是无法用物质替代的。玩具只能提供短暂的快乐 (Short-term happiness)，而亲子互动建立情感纽带 (Emotional bond) 和安全感。有些父母买玩具是为了弥补 (Compensate) 自己没时间的愧疚感。",
        key_arguments: ["Quality time (优质时间)", "Emotional bond (情感纽带)", "Substitute (替代品)", "Guilt (愧疚)", "Materialism (物质主义)", "Interaction (互动)"]
      }
    ]
  },
  {
    id: 296,
    title: "有用的书",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a book you read that you found useful.",
    questions: [
      {
        id: 29601,
        topic_id: 296,
        content: "Describe a book you read that you found useful. You should say: What it is, When you read it, Why you think it is useful, And explain how you felt about it.",
        sample_answer: {
          id: 29601,
          question_id: 29601,
          english_text: "I’d like to describe a book called 'Atomic Habits' by James Clear. It falls under the self-help genre and focuses on how tiny changes can lead to remarkable results.\n\nI read it at the beginning of last year, around New Year's, when I was trying to set my resolutions. I was feeling stuck with some bad habits and wanted a fresh start.\n\nI think it is incredibly useful because it offers practical strategies, not just vague motivation. For example, it introduces the concept of the '1% improvement' rule, meaning if you get 1% better each day, you'll end up 37 times better by the end of the year. It also taught me about 'habit stacking', which is linking a new habit to an existing one.\n\nI felt empowered after reading it. Unlike other books that made me feel guilty about my lack of discipline, this one gave me a roadmap. It made me realize that success isn't about willpower, but about designing your environment and systems. It was a real eye-opener.",
          chinese_translation: "我想描述一本叫《原子习惯》的书，作者是詹姆斯·克利尔。它属于自助类书籍，专注于微小的改变如何导致显著的结果。\n\n我是去年年初读的，大概在新年左右，当时我正试图制定我的决心。我对一些坏习惯感到束手无策，想要一个新的开始。\n\n我认为它非常有用，因为它提供了实用的策略，而不仅仅是模糊的激励。例如，它介绍了“1%改进”规则的概念，意味着如果你每天进步1%，到年底你会进步37倍。它还教会了我“习惯叠加”，即将新习惯与现有习惯联系起来。\n\n读完后我感到充满了力量。不像其他让我对缺乏自律感到内疚的书，这本书给了我一张路线图。它让我意识到成功不在于意志力，而在于设计你的环境和系统。这真让人大开眼界。",
          vocabularies: [
            { word: "self-help", definition: "Designed to assist people in achieving things for themselves.", phonetic: "/ˌselfˈhelp/", example: "A self-help book." },
            { word: "remarkable", definition: "Unusual or special and therefore surprising and worth mentioning.", phonetic: "/rɪˈmɑːr.kə.bəl/", example: "Remarkable results." },
            { word: "empowered", definition: "Having the official authority or freedom to do something.", phonetic: "/ɪmˈpaʊ.ɚd/", example: "I felt empowered to change." },
            { word: "eye-opener", definition: "Something that surprises you and teaches you new facts about life, people, etc.", phonetic: "/ˈaɪˌoʊ.pən.ɚ/", example: "The book was an eye-opener." }
          ],
          sentences: [
            {
              english: "It offers practical strategies, not just vague motivation.",
              chinese: "它提供了实用的策略，而不仅仅是模糊的激励。",
              key_words: ["practical", "vague"]
            },
            {
              english: "It made me realize that success isn't about willpower, but about designing your environment and systems.",
              chinese: "它让我意识到成功不在于意志力，而在于设计你的环境和系统。",
              key_words: ["willpower", "systems"]
            }
          ]
        }
      },
      {
        id: 29602,
        topic_id: 296,
        content: "Part 3: What are the types of books that young people like to read?",
        thinking_logic: "趋势多样化。虚构类（Fiction）：奇幻（Fantasy）、科幻（Sci-fi）如哈利波特，因为能提供逃避现实（Escapism）。非虚构类（Non-fiction）：自我提升（Self-help）、传记。还有漫画（Comics/Manga）也非常流行。",
        key_arguments: ["Fantasy (奇幻)", "Sci-fi (科幻)", "Self-help (自我提升)", "Escapism (逃避现实)", "Manga (漫画)", "Page-turner (引人入胜的书)"]
      },
      {
        id: 29603,
        topic_id: 296,
        content: "Part 3: What's the difference between the reading habits of old people and young people?",
        thinking_logic: "媒介与内容。年轻人：偏好电子书（E-books）和有声书（Audiobooks），习惯碎片化阅读（Fragmented reading），喜欢快节奏的小说。老年人：偏好纸质书（Paper books）和报纸，习惯深度阅读（Deep reading），关注历史、养生或经典文学。",
        key_arguments: ["Medium (媒介)", "Fragmented reading (碎片化阅读)", "Deep reading (深度阅读)", "Digital native (数字原住民)", "Attention span (注意力跨度)", "Tactile (触觉的)"]
      },
      {
        id: 29604,
        topic_id: 296,
        content: "Part 3: What's the difference between paper books and e-books?",
        thinking_logic: "体验与便携性。纸质书：有触感（Tactile experience）、书香，适合收藏，不伤眼。电子书：便携（Portable），能存几千本，有搜索和字典功能（Built-in dictionary），由于背光可能导致眼疲劳（Eye strain）。",
        key_arguments: ["Tactile experience (触觉体验)", "Portability (便携性)", "Eye strain (眼疲劳)", "Storage (存储)", "Environmentally friendly (环保的)", "Searchable (可搜索的)"]
      },
      {
        id: 29605,
        topic_id: 296,
        content: "Part 3: Some people say that it is easier for children who start reading from a young age to succeed. Do you agree?",
        thinking_logic: "同意。早期阅读能扩充词汇量（Vocabulary expansion），提高认知能力（Cognitive development）和专注力（Concentration）。它也培养了同理心（Empathy）。这些都是学业和职业成功的基础。",
        key_arguments: ["Cognitive development (认知发展)", "Vocabulary (词汇量)", "Empathy (同理心)", "Academic performance (学业表现)", "Imagination (想象力)", "Head start (先发优势)"]
      },
      {
        id: 29606,
        topic_id: 296,
        content: "Part 3: What should the government do to make libraries better?",
        thinking_logic: "资金与现代化。增加资金（Funding）更新书籍和设施。数字化转型（Digitalization），提供电子书借阅。将图书馆变成社区中心（Community hubs），举办讲座和工作坊。延长开放时间（Opening hours）。",
        key_arguments: ["Funding (资金)", "Digitalization (数字化)", "Community hub (社区中心)", "Accessibility (便利性)", "Workshops (工作坊)", "Modernize (现代化)"]
      },
      {
        id: 29607,
        topic_id: 296,
        content: "Part 3: Do you think old people spend more time reading than young people?",
        thinking_logic: "通常是的。退休后有更多闲暇时间（Leisure time）。他们成长的年代没有互联网，阅读是主要的娱乐方式。年轻人被社交媒体和游戏分散了注意力（Distracted），阅读时间相对较少。",
        key_arguments: ["Leisure time (闲暇时间)", "Distraction (分心)", "Habit (习惯)", "Digital age (数字时代)", "Attention economy (注意力经济)", "Retirement (退休)"]
      },
      {
        id: 29608,
        topic_id: 296,
        content: "Part 3: Which one is better, paper books or e-books?",
        thinking_logic: "没有绝对的好坏，取决于场景。旅行时（Travel）电子书完胜。在家深度学习或收藏时，纸质书更好。环保方面有争议：造纸砍树 vs 电子垃圾（E-waste）。现在的趋势是混合阅读（Hybrid reading）。",
        key_arguments: ["Scenario-dependent (视场景而定)", "Preference (偏好)", "Eco-footprint (生态足迹)", "Hybrid (混合的)", "Blue light (蓝光)", "Sentiment (情怀)"]
      },
      {
        id: 29609,
        topic_id: 296,
        content: "Part 3: Have libraries changed a lot with the development of the internet?",
        thinking_logic: "巨大的变化。从藏书楼变成了信息中心（Information centers）。现在提供电脑使用、免费Wi-Fi和在线数据库。如果不改变，它们就会被淘汰（Obsolete）。它们现在更强调公共空间（Public space）的功能。",
        key_arguments: ["Transformation (转型)", "Information center (信息中心)", "Obsolete (过时的)", "Digital resources (数字资源)", "Public space (公共空间)", "Adaptability (适应性)"]
      },
      {
        id: 29610,
        topic_id: 296,
        content: "Part 3: What should we do to prevent modern libraries from closing down?",
        thinking_logic: "增加相关性（Relevance）。举办社区活动（Events），吸引年轻人。提供独特的体验，如VR体验区或创客空间（Makerspaces）。政府补贴是必须的，但图书馆也需要自我造血或展示其社会价值（Social value）。",
        key_arguments: ["Relevance (相关性)", "Makerspace (创客空间)", "Social value (社会价值)", "Subsidize (补贴)", "Innovation (创新)", "Engagement (参与)"]
      }
    ]
  },
  {
    id: 297,
    title: "健康文章",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an article on health you read in a magazine or on the Internet.",
    questions: [
      {
        id: 29701,
        topic_id: 297,
        content: "Describe an article on health you read in a magazine or on the Internet. You should say: What it was, Where you read it, Why you read it, And explain how you felt about it.",
        sample_answer: {
          id: 29701,
          question_id: 29701,
          english_text: "I’d like to talk about an article I read recently titled 'The Hidden Dangers of Added Sugar'. I came across it on a popular health website called Healthline while I was browsing the internet for healthy diet tips.\n\nI decided to read it because I had been feeling quite sluggish and tired lately, and I suspected my diet might be the culprit. The headline caught my eye because I have a bit of a sweet tooth.\n\nThe article explained how excessive sugar consumption can lead to inflammation, weight gain, and even affect mental health. It wasn't just about candy; it highlighted how sugar is hidden in things like bread and pasta sauces.\n\nI felt quite shocked and a bit alarmed after reading it. I didn't realize how much sugar I was consuming unknowingly. However, I also felt empowered because the article gave practical tips on how to reduce sugar intake. It motivated me to start reading food labels more carefully and make healthier choices.",
          chinese_translation: "我想谈谈我最近读的一篇题为《添加糖的隐患》的文章。我在浏览互联网寻找健康饮食建议时，在一个名为Healthline的流行健康网站上偶然发现了它。\n\n我决定读它是因为我最近感觉很迟钝和疲倦，我怀疑我的饮食可能是罪魁祸首。标题引起了我的注意，因为我有点爱吃甜食。\n\n文章解释了过量摄入糖分如何导致炎症、体重增加，甚至影响心理健康。不仅仅是糖果；它强调了糖是如何隐藏在面包和意大利面酱等东西里的。\n\n读完后，我感到很震惊，也有点惊恐。我没有意识到我在不知不觉中摄入了多少糖。然而，我也感到了力量，因为文章给出了关于如何减少糖分摄入的实用建议。它激励我开始更仔细地阅读食品标签，并做出更健康的选择。",
          vocabularies: [
            { word: "sluggish", definition: "Moving or operating more slowly than usual and with less energy or power.", phonetic: "/ˈslʌɡ.ɪʃ/", example: "I felt sluggish after lunch." },
            { word: "culprit", definition: "A fact or situation that is the reason for something bad happening.", phonetic: "/ˈkʌl.prɪt/", example: "Sugar was the culprit." },
            { word: "inflammation", definition: "A red, painful, and often swollen area in or on a part of your body.", phonetic: "/ˌɪn.fləˈmeɪ.ʃən/", example: "Sugar causes inflammation." },
            { word: "empowered", definition: "Confident and in control of your life.", phonetic: "/ɪmˈpaʊ.ɚd/", example: "I felt empowered to change." }
          ],
          sentences: [
            {
              english: "I suspected my diet might be the culprit.",
              chinese: "我怀疑我的饮食可能是罪魁祸首。",
              key_words: ["culprit"]
            },
            {
              english: "It motivated me to start reading food labels more carefully.",
              chinese: "它激励我开始更仔细地阅读食品标签。",
              key_words: ["motivated", "labels"]
            }
          ]
        }
      },
      {
        id: 29702,
        topic_id: 297,
        content: "Part 3: How do today’s people keep healthy?",
        thinking_logic: "多方面。饮食（Diet）控制，如低碳水或间歇性断食。锻炼（Exercise），去健身房或户外跑步。使用科技（Technology），如智能手表监测健康。还有关注心理健康（Mental health），如冥想。",
        key_arguments: ["Balanced diet (均衡饮食)", "Gym membership (健身房会员)", "Wearable tech (可穿戴科技)", "Mental well-being (心理健康)", "Hydration (补水)", "Routine (常规)"]
      },
      {
        id: 29703,
        topic_id: 297,
        content: "Part 3: Is it difficult to keep healthy?",
        thinking_logic: "是的，很有挑战性。现代生活节奏快（Fast-paced），压力大，导致久坐（Sedentary）和饮食不规律。快餐（Fast food）便宜且方便，但由于缺乏自律（Self-discipline），很容易养成坏习惯。",
        key_arguments: ["Sedentary lifestyle (久坐的生活方式)", "Processed food (加工食品)", "Time constraints (时间限制)", "Discipline (自律)", "Stress (压力)", "Accessibility (可获得性)"]
      },
      {
        id: 29704,
        topic_id: 297,
        content: "Part 3: Why can’t many people keep healthy?",
        thinking_logic: "缺乏动力（Motivation）和毅力（Consistency）。健康需要长期投入，看不到即时效果。成本问题（Cost），健康食品通常比垃圾食品贵。还有缺乏正确的知识（Misinformation）。",
        key_arguments: ["Consistency (坚持)", "Affordability (负担能力)", "Instant gratification (即时满足)", "Misinformation (错误信息)", "Willpower (意志力)", "Priorities (优先事项)"]
      },
      {
        id: 29705,
        topic_id: 297,
        content: "Part 3: Where can people find information about keeping healthy?",
        thinking_logic: "互联网（Internet）是最主要的来源，如健康网站、YouTube和社交媒体。但也需要甄别。专业来源包括医生（Doctors）、营养师（Nutritionists）和政府卫生部门的指南。书籍和纪录片也是。",
        key_arguments: ["Online resources (在线资源)", "Medical professionals (医疗专业人士)", "Credible sources (可靠来源)", "Social media influencers (社交媒体网红)", "Documentaries (纪录片)", "Public health campaigns (公共卫生运动)"]
      },
      {
        id: 29706,
        topic_id: 297,
        content: "Part 3: Do schools have the responsibility to provide health education?",
        thinking_logic: "绝对有。学校不仅是学习知识的地方，也是培养生活技能（Life skills）的地方。早期教育能帮助孩子建立终身受益的健康习惯，预防儿童肥胖（Childhood obesity）。体育课（PE）和营养课都很重要。",
        key_arguments: ["Mandatory (强制性的)", "Obesity prevention (肥胖预防)", "Holistic development (全面发展)", "Curriculum (课程)", "Healthy habits (健康习惯)", "Physical education (体育教育)"]
      },
      {
        id: 29707,
        topic_id: 297,
        content: "Part 3: What can parents do to help improve their children's health awareness?",
        thinking_logic: "以身作则（Role modeling）。如果父母吃得健康并经常锻炼，孩子会模仿。让孩子参与烹饪（Cooking），了解食物来源。限制屏幕时间（Screen time），鼓励户外活动。不要把垃圾食品作为奖励。",
        key_arguments: ["Role model (榜样)", "Outdoor activities (户外活动)", "Screen time limits (屏幕时间限制)", "Cooking together (一起做饭)", "Home environment (家庭环境)", "Positive reinforcement (正向强化)"]
      }
    ]
  },
  {
    id: 298,
    title: "能教别人的技能",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a skill that you think you can teach other people.",
    questions: [
      {
        id: 29801,
        topic_id: 298,
        content: "Describe a skill that you think you can teach other people. You should say: What it is, When you learned it, How you can teach others, And how you feel about this skill.",
        sample_answer: {
          id: 29801,
          question_id: 29801,
          english_text: "I think a skill I could teach others is smartphone photography and basic photo editing. Specifically, how to take professional-looking photos using just a phone.\n\nI learned this skill over the past few years. I’ve always enjoyed taking pictures, but during my university years, I started watching tutorials on YouTube about composition, lighting, and editing apps like Snapseed and Lightroom Mobile.\n\nTo teach others, I would start with the basics of composition, like the 'rule of thirds' and leading lines. Then, I would take them outside for a practical session to practice capturing natural light. Finally, I would show them how to edit the photos to enhance colors and remove distractions.\n\nI feel very passionate about this skill. It allows me to capture memories beautifully. Teaching it would be rewarding because most people have a smartphone, but few know how to use the camera to its full potential. Helping someone take a photo they are proud of is a great feeling.",
          chinese_translation: "我认为我可以教给别人的一项技能是智能手机摄影和基本的照片编辑。具体来说，就是如何仅用手机拍出看起来专业的照片。\n\n我在过去几年里学会了这项技能。我一直喜欢拍照，但在大学期间，我开始在YouTube上观看关于构图、光线以及像Snapseed和Lightroom Mobile这样的编辑应用程序的教程。\n\n为了教别人，我会从构图的基础知识开始，比如“三分法”和引导线。然后，我会带他们去户外进行实践环节，练习捕捉自然光。最后，我会向他们展示如何编辑照片以增强色彩和消除干扰。\n\n我对这项技能充满热情。它让我能够精美地捕捉回忆。教它会很有回报，因为大多数人都有智能手机，但很少有人知道如何充分利用摄像头。帮助别人拍出一张他们引以为豪的照片是一种很棒的感觉。",
          vocabularies: [
            { word: "composition", definition: "The way that people or things are arranged in a painting or photograph.", phonetic: "/ˌkɑːm.pəˈzɪʃ.ən/", example: "Good composition is key." },
            { word: "tutorial", definition: "A period of study with a tutor and a small group of students.", phonetic: "/tuːˈtɔːr.i.əl/", example: "I watched online tutorials." },
            { word: "enhance", definition: "To improve the quality, amount, or strength of something.", phonetic: "/ɪnˈhæns/", example: "Enhance the colors." },
            { word: "potential", definition: "Someone's or something's ability to develop, achieve, or succeed.", phonetic: "/poʊˈten.ʃəl/", example: "Use it to its full potential." }
          ],
          sentences: [
            {
              english: "I started watching tutorials on YouTube about composition, lighting, and editing apps.",
              chinese: "我开始在YouTube上观看关于构图、光线和编辑应用程序的教程。",
              key_words: ["tutorials", "composition"]
            },
            {
              english: "Helping someone take a photo they are proud of is a great feeling.",
              chinese: "帮助别人拍出一张他们引以为豪的照片是一种很棒的感觉。",
              key_words: ["proud"]
            }
          ]
        }
      },
      {
        id: 29802,
        topic_id: 298,
        content: "Part 3: Should teachers be funny when they teach?",
        thinking_logic: "应该适度幽默。幽默（Humor）能活跃气氛，吸引学生的注意力（Engagement），让枯燥的知识变得有趣。这有助于建立良好的师生关系（Rapport）。但不能过度，以免分散注意力或失去权威性（Authority）。",
        key_arguments: ["Engagement (参与度)", "Rapport (融洽关系)", "Atmosphere (氛围)", "Retention (记忆保留)", "Distraction (分心)", "Balance (平衡)"]
      },
      {
        id: 29803,
        topic_id: 298,
        content: "Part 3: What qualities should teachers have?",
        thinking_logic: "耐心（Patience）是首要的。深厚的专业知识（Knowledgeable）。良好的沟通能力（Communication skills），能把复杂的概念讲简单。还要有激情（Passion）和同理心（Empathy），关心学生的成长。",
        key_arguments: ["Patience (耐心)", "Communication (沟通)", "Empathy (同理心)", "Passion (激情)", "Adaptability (适应性)", "Inspirational (鼓舞人心的)"]
      },
      {
        id: 29804,
        topic_id: 298,
        content: "Part 3: Which do you think is more important, practical skills or academic skills?",
        thinking_logic: "取决于职业目标，但两者都很重要。学术技能（Academic skills）提供理论基础和批判性思维。实用技能（Practical skills）确保能胜任工作（Employability）。现代社会更看重两者的结合，即“知行合一”。",
        key_arguments: ["Theory vs Practice (理论与实践)", "Employability (就业能力)", "Critical thinking (批判性思维)", "Hands-on (动手的)", "Balance (平衡)", "Career path (职业道路)"]
      },
      {
        id: 29805,
        topic_id: 298,
        content: "Part 3: Which age group is the best at learning new things?",
        thinking_logic: "儿童。神经可塑性（Neuroplasticity）最强，像海绵一样吸收知识（Absorb like a sponge），特别是语言。但成年人也有优势，如专注力（Focus）、逻辑思维和学习策略（Learning strategies）。",
        key_arguments: ["Neuroplasticity (神经可塑性)", "Absorb (吸收)", "Cognitive development (认知发展)", "Experience (经验)", "Motivation (动力)", "Learning curve (学习曲线)"]
      },
      {
        id: 29806,
        topic_id: 298,
        content: "Part 3: What can be done to improve modern teaching methods?",
        thinking_logic: "利用科技（Technology integration），如AI和VR。从填鸭式教学（Rote learning）转向互动式和项目式学习（Project-based learning）。个性化教学（Personalization），根据学生的能力调整进度。",
        key_arguments: ["Interactive (互动的)", "Technology (技术)", "Personalized learning (个性化学习)", "Critical thinking (批判性思维)", "Engagement (参与度)", "Innovation (创新)"]
      },
      {
        id: 29807,
        topic_id: 298,
        content: "Part 3: What are the differences between online and face-to-face teaching?",
        thinking_logic: "互动与灵活性。在线教学：灵活（Flexible），打破地理限制，但缺乏肢体语言和即时反馈，容易分心。面对面：互动性强（Interactive），有监督，社交氛围好（Social atmosphere），但成本高且受地点限制。",
        key_arguments: ["Flexibility (灵活性)", "Interaction (互动)", "Self-discipline (自律)", "Non-verbal cues (非语言线索)", "Accessibility (可获得性)", "Atmosphere (氛围)"]
      }
    ]
  },
  {
    id: 299,
    title: "想再看的电影",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a movie you watched recently and would like to watch again.",
    questions: [
      {
        id: 29901,
        topic_id: 299,
        content: "Describe a movie you watched recently and would like to watch again. You should say: What type of movie it was, What it was about, Where you watched it, And explain why you would like to watch it again.",
        sample_answer: {
          id: 29901,
          question_id: 29901,
          english_text: "I’d like to talk about the sci-fi movie 'Dune: Part Two'. It belongs to the science fiction and adventure genre.\n\nI watched it at an IMAX cinema recently with my friends. The large screen and immersive sound system really enhanced the experience.\n\nIt is set in a distant future and follows the journey of Paul Atreides as he unites with the Fremen people of the desert planet Arrakis to wage war against the House Harkonnen. It’s a story about destiny, politics, and revenge, set against a stunning backdrop of sand dunes and futuristic technology.\n\nI want to watch it again because the visuals and sound design were absolutely overwhelming in the best way possible. There were so many details in the costumes, the set designs, and the background lore that I feel I missed the first time. Also, the plot is quite complex, so watching it a second time would help me understand the subtleties of the characters' motivations better.",
          chinese_translation: "我想谈谈科幻电影《沙丘2》。它属于科幻和冒险类电影。\n\n我最近和朋友在IMAX影院看了这部电影。巨大的屏幕和身临其境的音响系统真正增强了体验。\n\n故事发生在遥远的未来，讲述了保罗·厄崔迪联合沙漠星球厄拉科斯的弗雷曼人，向哈克南家族发动战争的旅程。这是一个关于命运、政治和复仇的故事，背景是令人惊叹的沙丘和未来科技。\n\n我想再看一遍，因为视觉效果和音效设计绝对令人震撼。服装、场景设计和背景传说中有太多细节，我觉得第一次看时错过了。此外，情节相当复杂，所以再看一遍可以帮助我更好地理解人物动机的微妙之处。",
          vocabularies: [
            { word: "immersive", definition: "Seeming to surround the audience, player, etc. so that they feel completely involved in something.", phonetic: "/ɪˈmɝː.sɪv/", example: "An immersive experience." },
            { word: "backdrop", definition: "The general situation in which particular events happen.", phonetic: "/ˈbæk.drɑːp/", example: "Set against a stunning backdrop." },
            { word: "overwhelming", definition: "Very great or very strong.", phonetic: "/ˌoʊ.vɚˈwel.mɪŋ/", example: "The visuals were overwhelming." },
            { word: "subtlety", definition: "A small but important detail.", phonetic: "/ˈsʌt.əl.ti/", example: "Understand the subtleties." }
          ],
          sentences: [
            {
              english: "It is set in a distant future and follows the journey of Paul Atreides.",
              chinese: "故事发生在遥远的未来，讲述了保罗·厄崔迪的旅程。",
              key_words: ["set in", "distant future"]
            },
            {
              english: "Watching it a second time would help me understand the subtleties of the characters' motivations better.",
              chinese: "再看一遍可以帮助我更好地理解人物动机的微妙之处。",
              key_words: ["subtleties", "motivations"]
            }
          ]
        }
      },
      {
        id: 29902,
        topic_id: 299,
        content: "Part 3: Where do people normally watch movies?",
        thinking_logic: "电影院（Cinema）和家（Home）。大片通常去电影院看，享受视听效果（Audio-visual effects）。老电影或电视剧则在家通过流媒体（Streaming services）如Netflix观看，更方便。",
        key_arguments: ["Cinema (电影院)", "Streaming services (流媒体服务)", "Atmosphere (氛围)", "Convenience (便利)", "Audio-visual experience (视听体验)", "Home theater (家庭影院)"]
      },
      {
        id: 29903,
        topic_id: 299,
        content: "Part 3: What are the differences between watching movies at home and in a cinema?",
        thinking_logic: "体验与成本。电影院：沉浸式（Immersive），屏幕大，音效好，社交活动（Social activity），但票价贵且不能暂停。家：舒适（Comfort），便宜，可以随时暂停（Pause），吃自己喜欢的零食，但缺乏氛围。",
        key_arguments: ["Immersive (沉浸式的)", "Screen size (屏幕尺寸)", "Sound system (音响系统)", "Comfort (舒适)", "Cost-effective (划算的)", "Distraction (分心)"]
      },
      {
        id: 29904,
        topic_id: 299,
        content: "Part 3: Are actors or actresses important to movies?",
        thinking_logic: "非常重要。他们是角色的灵魂（Soul of the character）。好的演技（Acting skills）能让观众产生共鸣（Empathize）。此外，明星效应（Star power）能吸引票房（Box office），保证电影的商业成功。",
        key_arguments: ["Star power (明星效应)", "Box office (票房)", "Acting skills (演技)", "Empathy (同理心)", "Character development (角色发展)", "Performance (表演)"]
      },
      {
        id: 29905,
        topic_id: 299,
        content: "Part 3: Why are there fewer people going to the cinema to watch movies nowadays?",
        thinking_logic: "流媒体的兴起（Rise of streaming）。在家看电影更方便、更便宜。电影票价上涨（Rising ticket prices）。此外，现代家庭影院设备的提升也缩小了体验差距。疫情也改变了人们的习惯。",
        key_arguments: ["Streaming (流媒体)", "Convenience (便利)", "Ticket prices (票价)", "Home entertainment (家庭娱乐)", "Subscription (订阅)", "COVID-19 impact (疫情影响)"]
      },
      {
        id: 29906,
        topic_id: 299,
        content: "Part 3: What makes a movie a blockbuster?",
        thinking_logic: "大预算（Big budget）、大明星（A-list actors）、震撼的视觉效果（Visual effects/CGI）和广泛的市场营销（Marketing campaign）。通常也是通俗易懂的题材，如动作片或超级英雄电影，能吸引全球观众（Mass appeal）。",
        key_arguments: ["Big budget (大预算)", "CGI (电脑生成图像)", "Marketing (营销)", "Mass appeal (大众吸引力)", "A-list actors (一线演员)", "Franchise (系列电影)"]
      },
      {
        id: 29907,
        topic_id: 299,
        content: "Part 3: Why do people of different ages like different types of movies?",
        thinking_logic: "生活经历（Life experience）和心理需求。年轻人喜欢快节奏（Fast-paced）、刺激的动作片或科幻片。老年人可能更喜欢节奏较慢、注重情节（Plot-driven）的剧情片或历史片，能引发思考。代沟（Generation gap）也影响审美。",
        key_arguments: ["Life experience (生活经历)", "Pacing (节奏)", "Generation gap (代沟)", "Preferences (偏好)", "Action-packed (动作丰富的)", "Sentimental (情感的)"]
      }
    ]
  },
  {
    id: 300,
    title: "印象深刻的英语课",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an impressive English lesson you had and enjoyed.",
    questions: [
      {
        id: 30001,
        topic_id: 300,
        content: "Describe an impressive English lesson you had and enjoyed. You should say: What it was about, When you had it, What the teacher did, And why you enjoyed the lesson.",
        sample_answer: {
          id: 30001,
          question_id: 30001,
          english_text: "I’d like to describe an English lesson I had back in high school, about 3 years ago. The lesson was about 'American Slang and Idioms'.\n\nMy teacher, Mr. Smith, didn't just write words on the blackboard. Instead, he started the class by playing clips from the TV show 'Friends'. We had to guess the meaning of phrases like 'break a leg' or 'piece of cake' based on the context. Then, we did a role-play activity where we had to use these idioms in a conversation.\n\nI enjoyed it because it was so interactive and practical. Usually, English classes were focused on boring grammar rules, but this one felt like we were learning 'real' English that people actually use. It was hilarious watching my classmates try to act out the scenes, and I remember those idioms perfectly to this day.",
          chinese_translation: "我想描述大约3年前我在高中上的一堂英语课。这节课是关于“美国俚语和习语”的。\n\n我的老师史密斯先生不仅仅是在黑板上写单词。相反，他通过播放电视剧《老友记》的片段开始上课。我们必须根据上下文猜测像“break a leg”（祝好运）或“piece of cake”（小菜一碟）这样的短语的意思。然后，我们进行了一个角色扮演活动，我们必须在对话中使用这些习语。\n\n我喜欢这节课是因为它非常互动且实用。通常，英语课专注于枯燥的语法规则，但这节课感觉我们在学习人们实际使用的“真正的”英语。看着我的同学试图表演这些场景非常滑稽，直到今天我都清楚地记得那些习语。",
          vocabularies: [
            { word: "slang", definition: "Very informal language that is usually spoken rather than written, used especially by particular groups of people.", phonetic: "/slæŋ/", example: "American slang." },
            { word: "idiom", definition: "A group of words in a fixed order that have a particular meaning that is different from the meanings of each word on its own.", phonetic: "/ˈɪd.i.əm/", example: "Piece of cake is an idiom." },
            { word: "interactive", definition: "Involving communication between people.", phonetic: "/ˌɪn.t̬ɚˈræk.tɪv/", example: "Interactive lesson." },
            { word: "hilarious", definition: "Extremely funny and causing a lot of laughter.", phonetic: "/hɪˈler.i.əs/", example: "It was hilarious." }
          ],
          sentences: [
            {
              english: "My teacher, Mr. Smith, didn't just write words on the blackboard.",
              chinese: "我的老师史密斯先生不仅仅是在黑板上写单词。",
              key_words: ["blackboard"]
            },
            {
              english: "Usually, English classes were focused on boring grammar rules, but this one felt like we were learning 'real' English.",
              chinese: "通常，英语课专注于枯燥的语法规则，但这节课感觉我们在学习“真正的”英语。",
              key_words: ["grammar rules", "real English"]
            }
          ]
        }
      },
      {
        id: 30002,
        topic_id: 300,
        content: "Part 3: What is the impact of information technology on learning foreign languages",
        thinking_logic: "巨大的积极影响。获取资源（Access to resources）：通过YouTube、Podcast接触真实语料。工具辅助（Tools）：Duolingo等APP让学习游戏化，谷歌翻译帮助理解。在线交流（Online communication）：可以很容易地找到语伴（Language partners）或外教。",
        key_arguments: ["Accessibility (可获得性)", "Gamification (游戏化)", "Authentic materials (真实语料)", "Translation tools (翻译工具)", "Interactive (互动的)", "Self-paced (自定进度的)"]
      },
      {
        id: 30003,
        topic_id: 300,
        content: "Part 3: What effect will it have on the students if the teacher is impatient with them?",
        thinking_logic: "负面影响。打击自信心（Demotivating），学生会不敢提问或开口说（Fear of making mistakes）。导致焦虑（Anxiety）和对学科的厌恶（Resentment）。学习效果下降。",
        key_arguments: ["Demotivation (失去动力)", "Anxiety (焦虑)", "Self-esteem (自尊)", "Fear of failure (害怕失败)", "Disengagement (脱离)", "Hostile environment (敌对环境)"]
      },
      {
        id: 30004,
        topic_id: 300,
        content: "Part 3: Why do people learn foreign languages?",
        thinking_logic: "多种动机。职业发展（Career opportunities）：外企工作或国际贸易。旅行（Travel）：方便交流，深度体验文化。认知益处（Cognitive benefits）：预防老年痴呆，锻炼大脑。文化兴趣（Cultural interest）：喜欢动漫、电影或文学。",
        key_arguments: ["Career prospects (职业前景)", "Globalization (全球化)", "Travel (旅行)", "Cognitive function (认知功能)", "Cultural immersion (文化沉浸)", "Communication (沟通)"]
      },
      {
        id: 30005,
        topic_id: 300,
        content: "Part 3: What makes a good foreign language teacher?",
        thinking_logic: "除了语言能力，还需要教学技巧（Pedagogical skills）。耐心（Patience）和鼓励（Encouragement）至关重要。创造沉浸式环境（Immersive environment）。了解文化背景（Cultural nuances）。能适应不同学生的学习风格（Adaptability）。",
        key_arguments: ["Patience (耐心)", "Pedagogy (教学法)", "Immersion (沉浸)", "Encouragement (鼓励)", "Cultural awareness (文化意识)", "Adaptability (适应性)"]
      },
      {
        id: 30006,
        topic_id: 300,
        content: "Part 3: Do you think grammar is important when learning foreign languages?",
        thinking_logic: "重要，但不是全部。语法是骨架（Skeleton），没有它语言会崩塌，无法表达复杂意思。但过分强调语法会阻碍流利度（Fluency）。初学者应注重沟通（Communication），高级阶段注重准确性（Accuracy）。平衡是关键。",
        key_arguments: ["Structure (结构)", "Accuracy (准确性)", "Fluency (流利度)", "Foundation (基础)", "Communication (沟通)", "Balance (平衡)"]
      },
      {
        id: 30007,
        topic_id: 300,
        content: "Part 3: Is it interesting to be a foreign language teacher? Why?",
        thinking_logic: "是的，很有趣。可以接触不同的人，通过语言传播文化（Cultural ambassador）。看到学生进步很有成就感（Rewarding）。但也可能枯燥（Repetitive），因为要不断重复基础知识。总体来说是充满活力的职业。",
        key_arguments: ["Rewarding (有回报的)", "Cultural exchange (文化交流)", "Job satisfaction (工作满意度)", "Repetitive (重复的)", "Dynamic (动态的)", "Influence (影响力)"]
      }
    ]
  },
  {
    id: 301,
    title: "让人发笑的电影",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a film that made you laugh.",
    questions: [
      {
        id: 30101,
        topic_id: 301,
        content: "Describe a film that made you laugh. You should say: What it is, When you watched it, Who you watched it with, And explain why it made you laugh.",
        sample_answer: {
          id: 30101,
          question_id: 30101,
          english_text: "I’d like to talk about the animated movie 'Zootopia', produced by Disney. It’s a comedy-adventure film set in a city inhabited by anthropomorphic animals.\n\nI watched it a few years ago with my best friend at the local cinema. We were actually looking for a light-hearted movie to relax after a stressful exam week.\n\nIt made me laugh because the humor was so clever and relatable. There is one specific scene that had the whole theater roaring with laughter: the scene at the Department of Motor Vehicles where the staff are all sloths. The contrast between the rush of the main character, a rabbit, and the agonizingly slow movement of the sloth named Flash was pure comedic genius. It perfectly poked fun at the inefficiency of bureaucracy.\n\nBesides the visual gags, the dialogue was witty. I laughed not just because it was silly, but because it was smart. It managed to be funny while also delivering a meaningful message about prejudice and stereotypes.",
          chinese_translation: "我想谈谈迪士尼出品的动画电影《疯狂动物城》。这是一部以此拟人化动物居住的城市为背景的喜剧冒险片。\n\n几年前，我和我最好的朋友在当地电影院看了这部电影。实际上，我们当时正在寻找一部轻松的电影来在紧张的考试周后放松一下。\n\n它让我发笑，因为幽默非常聪明且令人产生共鸣。有一个特定的场景让整个剧院哄堂大笑：在车管所的场景，那里的员工都是树懒。主角兔子匆忙的状态与名叫“闪电”的树懒极其缓慢的动作形成了鲜明对比，这简直是喜剧天才之作。它完美地嘲讽了官僚机构的低效。\n\n除了视觉笑话，对话也很诙谐。我笑不仅仅是因为它很傻，而是因为它很聪明。它在搞笑的同时，也传递了关于偏见和刻板印象的有意义的信息。",
          vocabularies: [
            { word: "anthropomorphic", definition: "Treating animals, gods, or objects as if they are human in appearance, character, or behaviour.", phonetic: "/ˌæn.θrə.pəˈmɔːr.fɪk/", example: "Anthropomorphic animals." },
            { word: "light-hearted", definition: "Happy and not serious.", phonetic: "/ˌlaɪtˈhɑːr.t̬ɪd/", example: "A light-hearted movie." },
            { word: "agonizingly", definition: "In a way that causes great pain, worry, or difficulty.", phonetic: "/ˈæɡ.ə.naɪ.zɪŋ.li/", example: "Agonizingly slow." },
            { word: "bureaucracy", definition: "A system for controlling or managing a country, company, or organization that is operated by a large number of officials.", phonetic: "/bjʊˈrɑː.krə.si/", example: "Inefficiency of bureaucracy." },
            { word: "witty", definition: "Using words in a clever and funny way.", phonetic: "/ˈwɪt̬.i/", example: "The dialogue was witty." }
          ],
          sentences: [
            {
              english: "There is one specific scene that had the whole theater roaring with laughter.",
              chinese: "有一个特定的场景让整个剧院哄堂大笑。",
              key_words: ["roaring with laughter"]
            },
            {
              english: "It perfectly poked fun at the inefficiency of bureaucracy.",
              chinese: "它完美地嘲讽了官僚机构的低效。",
              key_words: ["poked fun", "bureaucracy"]
            }
          ]
        }
      },
      {
        id: 30102,
        topic_id: 301,
        content: "Part 3: Do people like comedy?",
        thinking_logic: "是的，绝大多数人都喜欢。生活充满压力（Stressful），喜剧是一种逃避（Escapism）和释放（Release）。笑能释放内啡肽（Endorphins），让人感觉良好。它是社交润滑剂，能拉近人与人的距离。",
        key_arguments: ["Stress relief (缓解压力)", "Escapism (逃避现实)", "Endorphins (内啡肽)", "Universal language (通用语言)", "Mood booster (情绪助推器)", "Bonding (纽带)"]
      },
      {
        id: 30103,
        topic_id: 301,
        content: "Part 3: Why do people of all ages like cartoons?",
        thinking_logic: "对于孩子，是因为色彩鲜艳、形象可爱和简单的故事。对于成年人，是因为怀旧（Nostalgia）和复杂的幽默（Adult humor hidden in layers）。卡通往往构建一个完美的、没有现实后果的世界，提供了一种纯粹的快乐。",
        key_arguments: ["Nostalgia (怀旧)", "Visual appeal (视觉吸引力)", "Simplicity (简单)", "Creativity (创造力)", "Multi-layered (多层次的)", "Innocence (纯真)"]
      },
      {
        id: 30104,
        topic_id: 301,
        content: "Part 3: Why do some people like to make others laugh?",
        thinking_logic: "寻求认可（Validation）和关注（Attention）。幽默感是智力（Intelligence）和社交能力（Social skills）的体现。看到别人笑会让自己有成就感。这也是一种打破僵局（Ice breaker）和缓解紧张气氛的有效方式。",
        key_arguments: ["Validation (认可)", "Social lubricant (社交润滑剂)", "Ice breaker (破冰)", "Charisma (魅力)", "Coping mechanism (应对机制)", "Connection (连接)"]
      },
      {
        id: 30105,
        topic_id: 301,
        content: "Part 3: Should teachers tell jokes in class?",
        thinking_logic: "应该，适度的话。幽默能提高学生的参与度（Engagement）和记忆力（Retention）。它能创造轻松的学习氛围（Atmosphere），减少焦虑。但不能过度，也不能开冒犯性（Offensive）的玩笑，需保持专业性（Professionalism）。",
        key_arguments: ["Engagement (参与度)", "Atmosphere (氛围)", "Rapport (融洽关系)", "Retention (记忆保留)", "Professionalism (专业性)", "Balance (平衡)"]
      },
      {
        id: 30106,
        topic_id: 301,
        content: "Part 3: What kind of people like comedy?",
        thinking_logic: "几乎所有人，特别是乐观（Optimistic）的人。但即使是悲观或压力大的人也需要喜剧作为疗愈（Therapy）。喜欢智力挑战的人可能更喜欢讽刺（Satire）或机智的幽默（Wit）。",
        key_arguments: ["Optimistic (乐观的)", "Open-minded (思想开明的)", "Stress-prone (易受压力的)", "Intellectual (智力的)", "Universal appeal (普遍吸引力)", "Therapeutic (治疗性的)"]
      },
      {
        id: 30107,
        topic_id: 301,
        content: "Part 3: Is it good to tell jokes in business activities?",
        thinking_logic: "双刃剑（Double-edged sword）。恰当的幽默能建立融洽关系（Rapport），缓解谈判的紧张。但不恰当的笑话（Inappropriate jokes）可能被视为不专业（Unprofessional）甚至冒犯（Offensive），导致灾难性后果。需要极高的情商（EQ）来判断场合。",
        key_arguments: ["Rapport building (建立融洽关系)", "Ice breaker (破冰)", "Risk (风险)", "Cultural sensitivity (文化敏感性)", "Professionalism (专业性)", "Read the room (察言观色)"]
      }
    ]
  },
  {
    id: 302,
    title: "引以为豪的照片",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a photo you took that you are proud of.",
    questions: [
      {
        id: 30201,
        topic_id: 302,
        content: "Describe a photo you took that you are proud of. You should say: When you took it, Where you took it, What is in this photo, And explain why you are proud of it.",
        sample_answer: {
          id: 30201,
          question_id: 30201,
          english_text: "I’d like to describe a photo I took of my grandmother on her 80th birthday. It’s a candid portrait, not a staged one.\n\nI took it last autumn in the garden of our family home. The lighting was perfect because it was during the 'golden hour', just before sunset.\n\nIn the photo, my grandmother is laughing heartily, with her eyes crinkled up in joy. She is blowing out the candles on a large birthday cake, surrounded by my little cousins who are clapping their hands. The background is slightly blurred, focusing all attention on her expression.\n\nI am proud of this photo because it captured a genuine moment of pure happiness. Usually, when people pose for photos, their smiles can look a bit stiff or fake. But in this shot, the emotion is raw and beautiful. It perfectly encapsulates the love and warmth of our family. Every time I look at it, I can almost hear the laughter from that day. It’s not just a picture; it’s a treasured memory frozen in time.",
          chinese_translation: "我想描述一张我在祖母80岁生日时给她拍的照片。这是一张抓拍的肖像，而不是摆拍的。\n\n我是去年秋天在我们家的花园里拍的。光线非常完美，因为那是在“黄金时刻”，就在日落之前。\n\n在照片中，我的祖母正在开怀大笑，眼睛笑得眯成了一条缝。她正在吹灭大生日蛋糕上的蜡烛，周围是我的小堂弟妹们，他们正在鼓掌。背景稍微模糊，将所有注意力都集中在她的表情上。\n\n我为这张照片感到自豪，因为它捕捉到了纯粹幸福的真实时刻。通常，当人们摆姿势拍照时，他们的笑容看起来会有点僵硬或虚假。但在这张照片中，情感是原始而美丽的。它完美地概括了我们家庭的爱和温暖。每次看它，我似乎都能听到那天的笑声。这不仅仅是一张照片；这是冻结在时间里的珍贵记忆。",
          vocabularies: [
            { word: "candid", definition: "A candid photograph is one that is taken without the person knowing that they are being photographed.", phonetic: "/ˈkæn.dɪd/", example: "A candid shot." },
            { word: "staged", definition: "Planned, organized, or arranged in advance.", phonetic: "/steɪdʒd/", example: "It didn't look staged." },
            { word: "golden hour", definition: "The period of daytime shortly after sunrise or before sunset.", phonetic: "/ˈɡoʊl.dən aʊ.ɚ/", example: "Taken during the golden hour." },
            { word: "encapsulate", definition: "To express or show the most important facts about something.", phonetic: "/ɪnˈkæp.sjə.leɪt/", example: "Encapsulates the love." }
          ],
          sentences: [
            {
              english: "It’s a candid portrait, not a staged one.",
              chinese: "这是一张抓拍的肖像，而不是摆拍的。",
              key_words: ["candid", "staged"]
            },
            {
              english: "It perfectly encapsulates the love and warmth of our family.",
              chinese: "它完美地概括了我们家庭的爱和温暖。",
              key_words: ["encapsulates"]
            }
          ]
        }
      },
      {
        id: 30202,
        topic_id: 302,
        content: "Part 3: Why do some people like to record important things with photos?",
        thinking_logic: "为了对抗遗忘（Combat forgetfulness）。人的记忆是不可靠的（Unreliable）。照片提供了有形的证据（Tangible proof）和视觉触发器（Visual triggers），能瞬间把人带回那个时刻。也是为了分享（Social sharing）和传承（Legacy）。",
        key_arguments: ["Preserve memories (保存记忆)", "Tangible proof (有形证据)", "Visual triggers (视觉触发器)", "Nostalgia (怀旧)", "Legacy (遗产)", "Fleeting moments (转瞬即逝的时刻)"]
      },
      {
        id: 30203,
        topic_id: 302,
        content: "Part 3: What can people learn from historical photographs?",
        thinking_logic: "了解过去的生活方式（Lifestyle）、时尚（Fashion）、建筑（Architecture）和社会变迁。照片比文字更直观（Intuitive）。它们能唤起情感连接（Emotional connection），让我们对历史人物产生共鸣。它们也是历史真相的证据。",
        key_arguments: ["Historical context (历史背景)", "Lifestyle changes (生活方式改变)", "Architecture (建筑)", "Evidence (证据)", "Empathy (同理心)", "Visual record (视觉记录)"]
      },
      {
        id: 30204,
        topic_id: 302,
        content: "Part 3: Is taking photos the best way to remember something?",
        thinking_logic: "不一定是最好的，但最便捷。缺点是可能会分散注意力（Distraction），导致“拍照而不体验”（Capture but not experience）。日记或单纯的用心感受（Mindfulness）能留下更深刻的情感记忆。最好的方式可能是结合。",
        key_arguments: ["Convenience (便利)", "Distraction (分心)", "Mindfulness (正念)", "Superficial (表面的)", "Complementary (互补的)", "Vivid (生动的)"]
      },
      {
        id: 30205,
        topic_id: 302,
        content: "Part 3: Which is better, taking photos or keeping a diary?",
        thinking_logic: "各有所长。照片：视觉冲击力强（Visual impact），瞬间定格，客观。日记：情感深度（Emotional depth），记录内心独白（Inner monologue），主观。照片记录“发生了什么”，日记记录“感觉如何”。",
        key_arguments: ["Visual (视觉的)", "Emotional depth (情感深度)", "Subjective vs Objective (主观与客观)", "Reflection (反思)", "Snapshot (快照)", "Narrative (叙述)"]
      },
      {
        id: 30206,
        topic_id: 302,
        content: "Part 3: When do people take photos?",
        thinking_logic: "重要时刻（Milestones）如婚礼、毕业。旅行（Travel）时记录风景。日常生活中的美好瞬间（Mundane moments），如美食、宠物。现在的趋势是随时随地（Documenting life），为了社交媒体打卡。",
        key_arguments: ["Milestones (里程碑)", "Scenery (风景)", "Social media (社交媒体)", "Documentation (记录)", "Celebration (庆祝)", "Daily life (日常生活)"]
      },
      {
        id: 30207,
        topic_id: 302,
        content: "Part 3: Why do some people like to keep old photos?",
        thinking_logic: "怀旧（Nostalgia）。那是他们个人历史（Personal history）的一部分。看到年轻时的自己或已故的亲人（Deceased relatives）能带来情感慰藉。这也是一种家族传承（Family heirloom），让后代了解祖先。",
        key_arguments: ["Nostalgia (怀旧)", "Ancestry (祖先)", "Sentimental value (情感价值)", "Identity (身份)", "Reflection (反思)", "Pass down (传承)"]
      }
    ]
  },
  {
    id: 303,
    title: "努力实现的目标",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a goal you set that you tried your best to achieve.",
    questions: [
      {
        id: 30301,
        topic_id: 303,
        content: "Describe a goal you set that you tried your best to achieve. You should say: What it was, When you set it, What you did to achieve it, And how you felt about it.",
        sample_answer: {
          id: 30301,
          question_id: 30301,
          english_text: "I’d like to describe my goal of running a half-marathon, which is about 21 kilometers. I’ve always been active, but I had never run such a long distance before.\n\nI set this goal at the beginning of last year as one of my New Year’s resolutions. I wanted to challenge my physical limits and improve my overall endurance.\n\nTo achieve it, I followed a strict 12-week training plan. I woke up at 6 AM four times a week to run before work, gradually increasing the distance. I also changed my diet, eating more protein and carbs to fuel my body. There were days when my legs were sore and I wanted to quit, but I kept pushing myself.\n\nWhen I finally crossed the finish line on race day, I felt absolutely exhausted but incredibly proud. My legs were shaking, but my heart was full. It proved to me that with discipline and consistency, I can achieve difficult things. It was a huge confidence booster.",
          chinese_translation: "我想描述一下我跑半程马拉松的目标，大约是21公里。我一直很活跃，但以前从未跑过这么长的距离。\n\n我在去年年初设定了这个目标，作为我的新年决心之一。我想挑战我的身体极限，提高我的整体耐力。\n\n为了实现这个目标，我遵循了一个严格的12周训练计划。我每周有四天早上6点起床，在上班前跑步，逐渐增加距离。我还改变了饮食，摄入更多的蛋白质和碳水化合物来为身体提供能量。有些日子我的腿很酸痛，我想放弃，但我坚持鞭策自己。\n\n当我在比赛当天最终越过终点线时，我感到筋疲力尽，但无比自豪。我的腿在发抖，但我的内心充满了喜悦。这向我证明，只要有纪律和坚持，我就能实现困难的事情。这是一个巨大的信心助推器。",
          vocabularies: [
            { word: "endurance", definition: "The ability to keep doing something difficult, unpleasant, or painful for a long time.", phonetic: "/ɪnˈdʊr.əns/", example: "Running builds endurance." },
            { word: "strict", definition: "Exact and must be obeyed.", phonetic: "/strɪkt/", example: "A strict training plan." },
            { word: "discipline", definition: "Training that makes people more willing to obey or to be able to control themselves.", phonetic: "/ˈdɪs.ə.plɪn/", example: "It takes discipline to train." },
            { word: "booster", definition: "Something that improves or increases something.", phonetic: "/ˈbuː.stɚ/", example: "A confidence booster." }
          ],
          sentences: [
            {
              english: "I wanted to challenge my physical limits and improve my overall endurance.",
              chinese: "我想挑战我的身体极限，提高我的整体耐力。",
              key_words: ["challenge", "endurance"]
            },
            {
              english: "It proved to me that with discipline and consistency, I can achieve difficult things.",
              chinese: "这向我证明，只要有纪律和坚持，我就能实现困难的事情。",
              key_words: ["discipline", "consistency"]
            }
          ]
        }
      },
      {
        id: 30302,
        topic_id: 303,
        content: "Part 3: Do people in your country set goals?",
        thinking_logic: "是的，特别是年轻人和职业人士。设定目标（Goal-setting）被视为成功的关键。学生设定学业目标（如考上好大学），职员设定职业目标（如升职加薪）。这是社会竞争（Competitive society）驱动的。",
        key_arguments: ["Goal-setting (目标设定)", "Career progression (职业发展)", "Competitive (竞争激烈的)", "Motivation (动力)", "Ambition (雄心)", "Self-improvement (自我提升)"]
      },
      {
        id: 30303,
        topic_id: 303,
        content: "Part 3: Do people usually set long-term goals or short-term ones?",
        thinking_logic: "两者都有，但侧重不同。年轻人倾向于长期目标（Long-term goals），如职业规划。随着年龄增长，人们可能更关注短期目标（Short-term goals），如完成某个项目或改善健康。短期目标更容易管理（Manageable）和获得反馈。",
        key_arguments: ["Long-term vision (长远眼光)", "Immediate gratification (即时满足)", "Manageable (可管理的)", "Milestones (里程碑)", "Flexibility (灵活性)", "Life stages (人生阶段)"]
      },
      {
        id: 30304,
        topic_id: 303,
        content: "Part 3: Why is setting goals important in the workplace?",
        thinking_logic: "提供方向（Direction）和焦点。KPI（关键绩效指标）帮助衡量进度（Measure progress）。目标能激励员工（Motivate），提高生产力。它也让团队协作（Team alignment）更有效，大家朝着同一个方向努力。",
        key_arguments: ["KPI (关键绩效指标)", "Direction (方向)", "Productivity (生产力)", "Accountability (问责制)", "Motivation (动力)", "Alignment (一致性)"]
      },
      {
        id: 30305,
        topic_id: 303,
        content: "Part 3: What is the difference between goals set by old people and young people?",
        thinking_logic: "关注点不同。年轻人关注成就（Achievement）、财富积累和职业发展。老年人关注健康（Health）、家庭关系和内心平静（Inner peace）。年轻人的目标更具扩张性（Expansive），老年人的更具内省性（Introspective）。",
        key_arguments: ["Achievement (成就)", "Legacy (遗产)", "Health preservation (养生)", "Career-oriented (职业导向的)", "Introspective (内省的)", "Stability (稳定性)"]
      },
      {
        id: 30306,
        topic_id: 303,
        content: "Part 3: How do people set goals?",
        thinking_logic: "通常遵循SMART原则（Specific, Measurable, Achievable, Relevant, Time-bound）。人们会反思现状，确定差距（Identify gaps），然后制定计划。有些人会在新年（New Year resolutions）或生日时设定目标。",
        key_arguments: ["SMART criteria (SMART原则)", "Reflection (反思)", "Action plan (行动计划)", "Resolutions (决心)", "Timeline (时间表)", "Ambition (雄心)"]
      },
      {
        id: 30307,
        topic_id: 303,
        content: "Part 3: Do you think people should have their personal life goals?",
        thinking_logic: "绝对应该。生活不仅仅是工作。个人目标（如学习乐器、旅行）能带来满足感（Fulfillment）和平衡（Work-life balance）。它们定义了我们是谁，防止我们成为工作的机器（Robots）。",
        key_arguments: ["Fulfillment (满足感)", "Work-life balance (工作生活平衡)", "Identity (身份)", "Passion (激情)", "Holistic growth (全面成长)", "Purpose (目的)"]
      }
    ]
  },
  {
    id: 304,
    title: "美丽的物品",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an object that you think is beautiful.",
    questions: [
      {
        id: 30401,
        topic_id: 304,
        content: "Describe an object that you think is beautiful. You should say: What it is, Where you saw it, What it looks like, And explain why you think it is beautiful.",
        sample_answer: {
          id: 30401,
          question_id: 30401,
          english_text: "I’d like to describe a traditional blue and white porcelain vase that I saw at the National Museum in Beijing. It’s a masterpiece from the Ming Dynasty.\n\nI saw it about a year ago when I visited the museum with my friends. It was displayed in a glass case in the center of the ceramics hall, illuminated by soft spotlights.\n\nThe vase is quite tall, with a slender neck and a rounded body. It features intricate patterns of dragons flying among clouds, painted in a deep, vibrant blue against a pure white background. The glaze is incredibly smooth and glossy, making it look almost like a jewel.\n\nI think it is beautiful because of its craftsmanship and elegance. The detail in the painting is exquisite; you can see every scale on the dragon. It represents a perfect balance of simplicity and complexity. Knowing that it was made by hand hundreds of years ago without modern technology makes it even more awe-inspiring. It’s not just an object; it’s a piece of frozen history.",
          chinese_translation: "我想描述我在北京国家博物馆看到的一个传统的青花瓷瓶。这是明代的杰作。\n\n大约一年前，我和朋友参观博物馆时看到了它。它陈列在陶瓷馆中央的一个玻璃柜里，被柔和的聚光灯照亮。\n\n这个花瓶很高，颈部细长，瓶身圆润。它的特色是复杂的龙在云中飞翔的图案，在纯白色的背景上画着深沉、充满活力的蓝色。釉面非常光滑有光泽，使它看起来几乎像一颗宝石。\n\n我认为它很美，因为它的工艺和优雅。绘画的细节非常精致；你可以看到龙身上的每一片鳞片。它代表了简单与复杂的完美平衡。知道它是几百年前在没有现代技术的情况下手工制作的，这让它更加令人敬畏。它不仅仅是一个物体；它是一段冻结的历史。",
          vocabularies: [
            { word: "masterpiece", definition: "A work of art such as a painting, film, or book that is made with great skill.", phonetic: "/ˈmæs.tɚ.piːs/", example: "A masterpiece of art." },
            { word: "intricate", definition: "Having a lot of small parts that are arranged in a complicated or delicate way.", phonetic: "/ˈɪn.trə.kət/", example: "Intricate patterns." },
            { word: "exquisite", definition: "Very beautiful and delicate.", phonetic: "/ɪkˈskwɪz.ɪt/", example: "Exquisite craftsmanship." },
            { word: "awe-inspiring", definition: "Causing you to feel great respect or admiration.", phonetic: "/ˈɑː.ɪnˌspaɪr.ɪŋ/", example: "An awe-inspiring sight." }
          ],
          sentences: [
            {
              english: "It features intricate patterns of dragons flying among clouds.",
              chinese: "它的特色是复杂的龙在云中飞翔的图案。",
              key_words: ["intricate", "patterns"]
            },
            {
              english: "It represents a perfect balance of simplicity and complexity.",
              chinese: "它代表了简单与复杂的完美平衡。",
              key_words: ["balance", "simplicity"]
            }
          ]
        }
      },
      {
        id: 30402,
        topic_id: 304,
        content: "Part 3: Do people in your country prefer listening to music to appreciating paintings and literature?",
        thinking_logic: "总体来说是的。音乐更易得（Accessible）且被动（Passive）。你可以在做家务或通勤时听音乐。而欣赏绘画或文学需要专注（Concentration）和一定的教育背景（Visual literacy）。音乐是大众娱乐，高雅艺术相对小众。",
        key_arguments: ["Accessibility (易接近性)", "Passive consumption (被动消费)", "Visual literacy (视觉素养)", "Ubiquitous (无处不在的)", "Background noise (背景噪音)", "Engagement (参与度)"]
      },
      {
        id: 30403,
        topic_id: 304,
        content: "Part 3: Why do many people go to scenic spots in person instead of just reading about them in books?",
        thinking_logic: "为了沉浸式体验（Immersive experience）。身临其境能感受到声音、气味和氛围（Atmosphere），这是书本无法提供的。还有社交需求（Social aspect），拍照打卡分享。亲眼所见（Seeing is believing）带来的震撼感是独特的。",
        key_arguments: ["Immersion (沉浸)", "Sensory experience (感官体验)", "Atmosphere (氛围)", "Awe (敬畏)", "Social sharing (社交分享)", "Authenticity (真实性)"]
      },
      {
        id: 30404,
        topic_id: 304,
        content: "Part 3: Do you think there are more beautiful things now than in the past? Why?",
        thinking_logic: "很难比较。数量上可能更多，因为技术（Technology）允许大规模生产设计精美的产品。但质量上，过去的手工艺品（Handcrafts）具有独特的灵魂和独特性（Uniqueness）。现在的美往往更标准化（Standardized），过去的美更个性化。",
        key_arguments: ["Mass production (大规模生产)", "Craftsmanship (工艺)", "Standardization (标准化)", "Aesthetics (美学)", "Variety (多样性)", "Nostalgia (怀旧)"]
      },
      {
        id: 30405,
        topic_id: 304,
        content: "Part 3: What beautiful scenery spots are there in your country?",
        thinking_logic: "中国有很多。自然景观：桂林山水（Karst mountains）、九寨沟（Colorful lakes）、张家界（Avatar mountains）。人文景观：长城（Great Wall）、故宫。这些地方结合了自然美和历史深度。",
        key_arguments: ["Natural wonder (自然奇观)", "Landscape (景观)", "Cultural heritage (文化遗产)", "Biodiversity (生物多样性)", "Scenic (风景优美的)", "Iconic (标志性的)"]
      },
      {
        id: 30406,
        topic_id: 304,
        content: "Part 3: Why do you think people create beautiful things?",
        thinking_logic: "自我表达（Self-expression）和情感宣泄。艺术家通过创作传达思想。这也是为了留下遗产（Legacy），对抗死亡。商业上，美能增加价值（Commercial value），吸引消费者。这是一种人类本能（Instinct）。",
        key_arguments: ["Self-expression (自我表达)", "Legacy (遗产)", "Commercial value (商业价值)", "Emotion (情感)", "Aesthetics (美学)", "Instinct (本能)"]
      },
      {
        id: 30407,
        topic_id: 304,
        content: "Part 3: Where do you think people usually come into contact with beautiful things?",
        thinking_logic: "无处不在。自然界（Nature）是最大的画廊。博物馆和美术馆（Museums/Galleries）。日常生活中（Daily life），如设计精良的电子产品、汽车或时尚。甚至在网络上（Digital art）。美存在于观察者的眼中。",
        key_arguments: ["Nature (自然)", "Museums (博物馆)", "Design (设计)", "Everyday objects (日常物品)", "Digital platforms (数字平台)", "Architecture (建筑)"]
      }
    ]
  },
  {
    id: 277,
    title: "不寻常但有趣的建筑",
    part: "part2",
    category: "Objects",
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe an unusual but interesting building you would like to visit.",
    questions: [
      {
        id: 27701,
        topic_id: 277,
        content: "Describe an unusual but interesting building you would like to visit. You should say: Where it is, What it looks like, Why you think it is unusual and interesting, And explain why you would like to visit it.",
        sample_answer: {
          id: 27701,
          question_id: 27701,
          english_text: "I’d like to visit the CCTV Headquarters located in the Central Business District of Beijing. It is one of the most iconic skyscrapers in China, designed by the famous architect Rem Koolhaas.\n\nIt looks incredibly futuristic. Unlike traditional towers that point straight up to the sky, this building is a loop of six horizontal and vertical sections. Local people jokingly call it 'Big Underpants' because of its shape, which looks like a pair of giant trousers floating in the air.\n\nI think it is unusual because it defies gravity. The two towers lean towards each other and join at the top, creating a huge overhang. It challenges the conventional definition of a skyscraper. It’s interesting not just structurally, but visually; it looks different from every angle.\n\nI would like to visit it mainly to experience the 'glass floor' on the overhang. I’ve heard you can stand there and look straight down at the traffic 160 meters below. It would be a thrilling experience. Also, I appreciate modern architecture and would love to see how such a complex structure was engineered.",
          chinese_translation: "我想参观位于北京中央商务区的中央电视台总部大楼。这是中国最具标志性的摩天大楼之一，由著名建筑师雷姆·库哈斯设计。\n\n它看起来极具未来感。与直指天空的传统塔楼不同，这座建筑是由六个水平和垂直部分组成的环形。当地人戏称它为“大裤衩”，因为它的形状看起来像一条漂浮在空中的巨大裤子。\n\n我认为它不寻常，因为它对抗地心引力。两座塔楼相互倾斜并在顶部连接，形成一个巨大的悬挑。它挑战了摩天大楼的传统定义。它不仅在结构上有趣，在视觉上也是如此；从每个角度看它都不一样。\n\n我想去参观主要是为了体验悬挑上的“玻璃地板”。听说你可以站在那里，直视下方160米处的交通。这将是一次惊险的体验。此外，我欣赏现代建筑，很想看看如此复杂的结构是如何设计出来的。",
          vocabularies: [
            { word: "iconic", definition: "Very famous or popular, especially being considered to represent particular opinions or a particular time.", phonetic: "/aɪˈkɑː.nɪk/", example: "An iconic skyscraper." },
            { word: "futuristic", definition: "Strange and very modern, or intended or seeming to come from some time in the future.", phonetic: "/ˌfjuː.tʃəˈrɪs.tɪk/", example: "It looks futuristic." },
            { word: "defies gravity", definition: "To seem impossible according to the laws of gravity.", phonetic: "/dɪˈfaɪz ˈɡræv.ə.t̬i/", example: "The structure defies gravity." },
            { word: "overhang", definition: "A part of something that sticks out over something below it.", phonetic: "/ˈoʊ.vɚ.hæŋ/", example: "A huge overhang." }
          ],
          sentences: [
            {
              english: "Local people jokingly call it 'Big Underpants' because of its shape.",
              chinese: "当地人戏称它为“大裤衩”，因为它的形状。",
              key_words: ["jokingly", "shape"]
            },
            {
              english: "It challenges the conventional definition of a skyscraper.",
              chinese: "它挑战了摩天大楼的传统定义。",
              key_words: ["challenges", "conventional"]
            }
          ]
        }
      },
      {
        id: 27702,
        topic_id: 277,
        content: "Part 3: Why do some people choose to build houses by themselves?",
        thinking_logic: "个性化（Customization）。满足特定需求（Specific needs），比如更大的厨房或工作室。成本控制（Cost control）：虽然不一定便宜，但可以控制预算分配。成就感（Sense of achievement）：看着自己的家从无到有。",
        key_arguments: ["Customization (个性化)", "Tailored (量身定做的)", "Sense of achievement (成就感)", "Budget control (预算控制)", "Specific preferences (特定偏好)", "Creativity (创造力)"]
      },
      {
        id: 27703,
        topic_id: 277,
        content: "Part 3: What factors do you consider when choosing a house or an apartment?",
        thinking_logic: "位置（Location）：离公司近，有学校。便利设施（Amenities）：超市、公园、交通。价格（Price/Affordability）。安全性（Safety）。房屋本身的布局（Layout）和朝向（Orientation/Lighting）。",
        key_arguments: ["Location (位置)", "Commute (通勤)", "Amenities (便利设施)", "Affordability (可负担性)", "Layout (布局)", "Safety (安全)"]
      },
      {
        id: 27704,
        topic_id: 277,
        content: "Part 3: Do you think a city’s buildings affect its vibe or atmosphere?",
        thinking_logic: "绝对影响。摩天大楼（Skyscrapers）带来现代、繁忙、商业化的氛围。历史建筑（Historical buildings）带来文化底蕴和宁静。建筑的密度（Density）和绿化（Greenery）也影响人们的压力水平。天际线（Skyline）是城市的指纹。",
        key_arguments: ["Vibe (氛围)", "Skyline (天际线)", "Modernity (现代性)", "Cultural heritage (文化遗产)", "Density (密度)", "Aesthetics (美学)"]
      },
      {
        id: 27705,
        topic_id: 277,
        content: "Part 3: Do you think old buildings should be preserved?",
        thinking_logic: "是的。它们是历史的见证（Witnesses of history），承载文化记忆。具有旅游价值（Tourism value）。但如果建筑物不安全（Unsafe）或维护成本过高（Too costly），可能需要改建或拆除。关键是平衡保护与发展。",
        key_arguments: ["Preservation (保护)", "Cultural identity (文化认同)", "Heritage (遗产)", "Maintenance cost (维护成本)", "Safety hazard (安全隐患)", "Renovation (翻新)"]
      }
    ]
  }
];
