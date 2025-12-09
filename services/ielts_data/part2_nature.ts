
import { IPart2Topic } from './types';

export const PART2_NATURE_TOPICS: IPart2Topic[] = [
  {
    id: 290,
    title: "想了解的野生动物",
    part: "part2",
    category: "Objects", // Keeping category compatible with existing types, logically Nature fits under Objects or needs new category
    season: "Sep-Dec 2025",
    status: "active",
    description: "Describe a wild animal that you want to learn more about.",
    questions: [
      {
        id: 29001,
        topic_id: 290,
        content: "Describe a wild animal that you want to learn more about. You should say: What it is, When/where you saw it, Why you want to learn more about it, And explain what you want to learn more about it.",
        sample_answer: {
          id: 29001,
          question_id: 29001,
          english_text: "I want to learn more about the Snow Leopard. It is often called the 'Ghost of the Mountains'.\n\nI’ve never seen one in the wild, obviously, because they are extremely elusive. I first saw it in a BBC documentary narrated by David Attenborough. The footage showed a snow leopard hunting on a steep cliff in the Himalayas.\n\nI want to learn more about it because it is such a mysterious and majestic creature. They live in some of the harshest environments on Earth, yet they thrive. I’m curious about their solitary lifestyle and how they manage to survive in freezing temperatures with so little food.\n\nSpecifically, I want to learn about conservation efforts. I know they are an endangered species due to poaching and climate change. I want to understand what is being done to protect their habitat and if their population is recovering.",
          chinese_translation: "我想更多地了解雪豹。它常被称为“山中幽灵”。\n\n显然，我从未在野外见过它，因为它们极难寻觅。我第一次是在大卫·爱登堡解说的BBC纪录片里看到的。镜头展示了一只雪豹在喜马拉雅山陡峭的悬崖上捕猎。\n\n我想了解更多，因为它是一种如此神秘和威严的生物。它们生活在地球上最恶劣的环境中，却能茁壮成长。我对它们独居的生活方式以及如何在极寒温度和食物匮乏的情况下生存感到好奇。\n\n具体来说，我想了解保护工作。我知道由于偷猎和气候变化，它们是濒危物种。我想了解人们正在采取什么措施来保护它们的栖息地，以及它们的种群数量是否正在恢复。",
          vocabularies: [
            { word: "elusive", definition: "Difficult to find, catch, or achieve.", phonetic: "/iˈluː.sɪv/", example: "Snow leopards are elusive." },
            { word: "majestic", definition: "Beautiful, powerful, or causing great admiration and respect.", phonetic: "/məˈdʒes.tɪk/", example: "A majestic creature." },
            { word: "poaching", definition: "The illegal catching or killing of animals.", phonetic: "/ˈpoʊ.tʃɪŋ/", example: "Endangered due to poaching." },
            { word: "habitat", definition: "The natural environment in which an animal or plant usually lives.", phonetic: "/ˈhæb.ə.tæt/", example: "Protect their habitat." }
          ],
          sentences: [
            {
              english: "They live in some of the harshest environments on Earth, yet they thrive.",
              chinese: "它们生活在地球上最恶劣的环境中，却能茁壮成长。",
              key_words: ["harshest", "thrive"]
            },
            {
              english: "I know they are an endangered species due to poaching and climate change.",
              chinese: "我知道由于偷猎和气候变化，它们是濒危物种。",
              key_words: ["endangered", "poaching"]
            }
          ]
        }
      },
      {
        id: 29002,
        topic_id: 290,
        content: "Part 3: Why should we protect wild animals?",
        thinking_logic: "生物多样性（Biodiversity）：每个物种都在生态系统（Ecosystem）中扮演角色，无论是捕食者还是传粉者（Pollinator）。如果一环断裂，整个系统可能崩溃。伦理责任（Ethical responsibility）：人类作为地球的管理者（Stewards），有道德义务保护其他生命。",
        key_arguments: ["Biodiversity (生物多样性)", "Ecosystem (生态系统)", "Balance of nature (自然平衡)", "Extinction (灭绝)", "Stewardship (管理职责)", "Interconnected (相互关联的)"]
      },
      {
        id: 29003,
        topic_id: 290,
        content: "Part 3: Why are some people more willing to protect wild animals than others?",
        thinking_logic: "教育与意识（Education & Awareness）。了解动物的人更容易产生同理心（Empathy）。个人价值观（Values）：有些人是环境主义者（Environmentalists），而另一些人可能更关注经济发展，认为动物保护阻碍了开发。",
        key_arguments: ["Empathy (同理心)", "Awareness (意识)", "Values (价值观)", "Priorities (优先事项)", "Connection to nature (与自然的联系)", "Ignorance (无知)"]
      },
      {
        id: 29004,
        topic_id: 290,
        content: "Part 3: Do you think it's important to take children to the zoo to see animals?",
        thinking_logic: "有争议（Controversial）。支持：教育意义，让孩子亲眼看到（First-hand experience），激发兴趣。反对：动物园可能涉及虐待（Cruelty），动物失去自由（Captivity）。理想情况是去野生动物保护区（Sanctuaries）或通过VR技术。",
        key_arguments: ["Captivity (囚禁)", "Educational value (教育价值)", "Conservation (保护)", "Natural habitat (自然栖息地)", "Ethical concerns (伦理担忧)", "First-hand experience (亲身体验)"]
      },
      {
        id: 29005,
        topic_id: 290,
        content: "Part 3: Why do some people attach more importance to protecting rare animals?",
        thinking_logic: "稀缺性（Scarcity）。越稀有的东西越珍贵。旗舰物种（Flagship species）效应：像熊猫这样可爱的稀有动物能吸引更多资金，从而间接保护了同一栖息地的其他物种（Umbrella effect）。",
        key_arguments: ["Scarcity (稀缺性)", "Flagship species (旗舰物种)", "Umbrella effect (伞护效应)", "Irreversible (不可逆转的)", "Priority (优先)", "Public attention (公众关注)"]
      },
      {
        id: 29006,
        topic_id: 290,
        content: "Part 3: Should people educate children to protect wild animals?",
        thinking_logic: "绝对应该。孩子是未来的决策者。从小培养环保意识（Environmental consciousness）能确保可持续的未来。教育能消除恐惧和误解，培养尊重（Respect）。",
        key_arguments: ["Future generation (下一代)", "Sustainability (可持续性)", "Consciousness (意识)", "Curriculum (课程)", "Instill (灌输)", "Respect for life (尊重生命)"]
      },
      {
        id: 29007,
        topic_id: 290,
        content: "Part 3: Is it more important to protect wild animals or the environment?",
        thinking_logic: "这是一个伪命题（False dichotomy）。两者密不可分。动物需要环境生存，环境也依赖动物（如传播种子）来维持健康。保护环境就是保护动物的家园（Habitat preservation）。必须采取整体方法（Holistic approach）。",
        key_arguments: ["Inseparable (不可分割的)", "Habitat (栖息地)", "Holistic approach (整体方法)", "Interdependent (相互依赖的)", "False dichotomy (伪二分法)", "Symbiosis (共生)"]
      },
      {
        id: 29008,
        topic_id: 290,
        content: "Part 3: How can vegetarians improve the environment?",
        thinking_logic: "减少碳足迹（Carbon footprint）。畜牧业（Livestock farming）是温室气体排放的主要来源之一，且消耗大量水和土地资源。素食主义减少了对饲料作物的需求，从而减少森林砍伐（Deforestation）。",
        key_arguments: ["Carbon footprint (碳足迹)", "Livestock (家畜)", "Deforestation (森林砍伐)", "Greenhouse gases (温室气体)", "Resource intensive (资源密集型的)", "Sustainable diet (可持续饮食)"]
      }
    ]
  }
];
