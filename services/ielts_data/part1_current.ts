
import { IPart1Topic } from './types';

export const PART1_CURRENT_TOPICS: IPart1Topic[] = [
  {
    id: 110, title: "Snacks", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Eating habits and preferences.",
    questions: [
      { id: 11001, topic_id: 110, content: "What kind of snacks do you like to eat?" },
      { id: 11002, topic_id: 110, content: "Is it healthy to eat snacks between meals?" },
      { id: 11003, topic_id: 110, content: "What was the most popular snack when you were young?" },
      { id: 11004, topic_id: 110, content: "Do your parents allow you to eat snacks?" },
      { id: 11005, topic_id: 110, content: "Do you prefer sweet or savory snacks?" }
    ]
  },
  {
    id: 111, title: "Weather", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Climate and preferences.",
    questions: [
      { id: 11101, topic_id: 111, content: "What’s the weather usually like in your hometown?" },
      { id: 11102, topic_id: 111, content: "Do you have a habit of checking the weather forecast?" },
      { id: 11103, topic_id: 111, content: "Do you like hot weather or cold weather?" },
      { id: 11104, topic_id: 111, content: "What do you usually do in hot weather?" },
      { id: 11105, topic_id: 111, content: "Would you like to visit a country with a very hot climate?" }
    ]
  },
  {
    id: 112, title: "Text Messages", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Communication habits.",
    questions: [
      { id: 11201, topic_id: 112, content: "Do you often send text messages?" },
      { id: 11202, topic_id: 112, content: "Do you prefer making calls or sending text messages?" },
      { id: 11203, topic_id: 112, content: "Have you ever received a confusing text message?" },
      { id: 11204, topic_id: 112, content: "In what situations is it better to send a text message than to call?" }
    ]
  },
  {
    id: 113, title: "Patience", part: "part1", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Personal character.",
    questions: [
      { id: 11301, topic_id: 113, content: "Do you think you are a patient person?" },
      { id: 11302, topic_id: 113, content: "Have you ever lost your patience?" },
      { id: 11303, topic_id: 113, content: "What makes you feel impatient?" },
      { id: 11304, topic_id: 113, content: "Were you more patient when you were a child or now?" },
      { id: 11305, topic_id: 113, content: "Do you think patience is important for success?" }
    ]
  },
  {
    id: 114, title: "Making Plans", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Time management.",
    questions: [
      { id: 11401, topic_id: 114, content: "Do you like making plans for the future?" },
      { id: 11402, topic_id: 114, content: "How do you organize your time?" },
      { id: 11403, topic_id: 114, content: "What is the hardest part about making plans?" },
      { id: 11404, topic_id: 114, content: "Do you prefer a planned life or a spontaneous one?" }
    ]
  },
  {
    id: 115, title: "Puzzles", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Games and hobbies.",
    questions: [
      { id: 11501, topic_id: 115, content: "Did you like doing puzzles when you were a child?" },
      { id: 11502, topic_id: 115, content: "Do you think puzzles are good for old people?" },
      { id: 11503, topic_id: 115, content: "Do you prefer word puzzles or number puzzles?" },
      { id: 11504, topic_id: 115, content: "Do you often do puzzles now?" }
    ]
  },
  {
    id: 116, title: "Housework and Cooking", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Daily chores.",
    questions: [
      { id: 11601, topic_id: 116, content: "Do you do housework at home?" },
      { id: 11602, topic_id: 116, content: "What kind of housework do you dislike the most?" },
      { id: 11603, topic_id: 116, content: "Do you think children should help with housework?" },
      { id: 11604, topic_id: 116, content: "Do you want to learn how to cook well?" },
      { id: 11605, topic_id: 116, content: "Do you usually eat breakfast at home?" }
    ]
  },
  {
    id: 117, title: "Outer Space and Stars", part: "part1", category: "Places",
    season: "Sep-Dec 2025", status: "active",
    description: "Science and imagination.",
    questions: [
      { id: 11701, topic_id: 117, content: "Have you ever learned about outer space and stars?" },
      { id: 11702, topic_id: 117, content: "Are you interested in films about outer space?" },
      { id: 11703, topic_id: 117, content: "Do you want to travel to outer space?" },
      { id: 11704, topic_id: 117, content: "What would you do if you had the opportunity to go to space?" }
    ]
  },
  {
    id: 118, title: "Small Businesses", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Shopping habits.",
    questions: [
      { id: 11801, topic_id: 118, content: "Do you prefer buying things from big companies or small businesses?" },
      { id: 11802, topic_id: 118, content: "Do you know many small businesses where you live?" },
      { id: 11803, topic_id: 118, content: "Have you ever thought about starting your own small business?" }
    ]
  },
  {
    id: 119, title: "Doing Something Well", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Achievements and praise.",
    questions: [
      { id: 11901, topic_id: 119, content: "Do you have an experience that you did something well?" },
      { id: 11902, topic_id: 119, content: "Do you have an experience that your teacher thought you did a good job?" },
      { id: 11903, topic_id: 119, content: "Do you often tell your friends when they do something well?" }
    ]
  },
  {
    id: 120, title: "Rules", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "School regulations and teachers.",
    questions: [
      { id: 12001, topic_id: 120, content: "Are there any rules for students at your school?" },
      { id: 12002, topic_id: 120, content: "Do you think students would benefit more from more rules?" },
      { id: 12003, topic_id: 120, content: "Have you ever had a really dedicated teacher?" },
      { id: 12004, topic_id: 120, content: "Do you prefer to have more or fewer rules at school?" },
      { id: 12005, topic_id: 120, content: "Have you ever had a really strict teacher?" },
      { id: 12006, topic_id: 120, content: "Would you like to work as a teacher in a rule-free school?" }
    ]
  },
  {
    id: 121, title: "Public Places", part: "part1", category: "Places",
    season: "Sep-Dec 2025", status: "active",
    description: "Social interaction in public.",
    questions: [
      { id: 12101, topic_id: 121, content: "Have you ever talked with someone you don't know in public places?" },
      { id: 12102, topic_id: 121, content: "Do you wear headphones in public places?" },
      { id: 12103, topic_id: 121, content: "Would you like to see more public places near where you live?" },
      { id: 12104, topic_id: 121, content: "Do you often go to public places with your friends?" }
    ]
  },
  {
    id: 122, title: "Staying with Old People", part: "part1", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Interacting with the elderly.",
    questions: [
      { id: 12201, topic_id: 122, content: "Have you ever worked with old people?" },
      { id: 12202, topic_id: 122, content: "Are you happy to work with people who are older than you?" },
      { id: 12203, topic_id: 122, content: "What are the benefits of being friends with or working with old people?" },
      { id: 12204, topic_id: 122, content: "Do you enjoy spending time with old people?" }
    ]
  },
  {
    id: 123, title: "Going Out", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Habits when leaving home.",
    questions: [
      { id: 12301, topic_id: 123, content: "Do you bring food or snacks with you when going out?" },
      { id: 12302, topic_id: 123, content: "Do you always take your mobile phone with you when going out?" },
      { id: 12303, topic_id: 123, content: "Do you often bring cash with you?" },
      { id: 12304, topic_id: 123, content: "How often do you use cash?" }
    ]
  },
  {
    id: 124, title: "Crowded Place", part: "part1", category: "Places",
    season: "Sep-Dec 2025", status: "active",
    description: "Crowds and cities.",
    questions: [
      { id: 12401, topic_id: 124, content: "Is the city where you live crowded?" },
      { id: 12402, topic_id: 124, content: "Is there a crowded place near where you live?" },
      { id: 12403, topic_id: 124, content: "Do you like crowded places?" },
      { id: 12404, topic_id: 124, content: "Do you prefer to chat with a group of people or with only one friend?" },
      { id: 12405, topic_id: 124, content: "When was the last time you were in a crowded place?" }
    ]
  },
  {
    id: 125, title: "Chatting", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Communication with friends.",
    questions: [
      { id: 12501, topic_id: 125, content: "Do you like chatting with friends?" },
      { id: 12502, topic_id: 125, content: "What do you usually chat about with friends?" },
      { id: 12503, topic_id: 125, content: "Do you prefer to chat with a group of people or with only one friend?" },
      { id: 12504, topic_id: 125, content: "Do you prefer to communicate face - to - face or via social media?" },
      { id: 12505, topic_id: 125, content: "Do you argue with friends?" }
    ]
  },
  {
    id: 126, title: "Growing Vegetables/Fruits", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Gardening and nature.",
    questions: [
      { id: 12601, topic_id: 126, content: "Are you interested in growing vegetables and fruits?" },
      { id: 12602, topic_id: 126, content: "Is growing vegetables popular in your country?" },
      { id: 12603, topic_id: 126, content: "Do many people grow vegetables in your city?" },
      { id: 12604, topic_id: 126, content: "Do you think it's easy to grow vegetables?" },
      { id: 12605, topic_id: 126, content: "Should schools teach students how to grow vegetables?" }
    ]
  },
  {
    id: 127, title: "Museum", part: "part1", category: "Places",
    season: "Sep-Dec 2025", status: "active",
    description: "Culture and history.",
    questions: [
      { id: 12701, topic_id: 127, content: "Do you think museums are important?" },
      { id: 12702, topic_id: 127, content: "Are there many museums in your hometown?" },
      { id: 12703, topic_id: 127, content: "Do you often visit a museum?" },
      { id: 12704, topic_id: 127, content: "When was the last time you visited a museum?" }
    ]
  },
  {
    id: 128, title: "Advertisement", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Marketing and media influence.",
    questions: [
      { id: 12801, topic_id: 128, content: "Is there an advertisement that made an impression on you when you were a child?" },
      { id: 12802, topic_id: 128, content: "Do you see a lot of advertising on trains or other transport?" },
      { id: 12803, topic_id: 128, content: "Do you like advertisements?" },
      { id: 12804, topic_id: 128, content: "What kind of advertising do you like?" },
      { id: 12805, topic_id: 128, content: "Do you often see advertisements when you are on your phone or computer?" }
    ]
  },
  {
    id: 129, title: "Borrowing/Lending", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Sharing and trust.",
    questions: [
      { id: 12901, topic_id: 129, content: "Have you borrowed books from others?" },
      { id: 12902, topic_id: 129, content: "Have you ever borrowed money from others?" },
      { id: 12903, topic_id: 129, content: "Do you like to lend things to others?" },
      { id: 12904, topic_id: 129, content: "How do you feel when people don't return things they borrowed from you?" },
      { id: 12905, topic_id: 129, content: "Do you mind if others borrow money from you?" }
    ]
  },
  {
    id: 130, title: "Sharing", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Social habits and generosity.",
    questions: [
      { id: 13001, topic_id: 130, content: "Did your parents teach you to share when you were a child?" },
      { id: 13002, topic_id: 130, content: "What kind of things do you like to share with others?" },
      { id: 13003, topic_id: 130, content: "What kind of things are not suitable for sharing?" },
      { id: 13004, topic_id: 130, content: "Do you have anything to share with others recently?" },
      { id: 13005, topic_id: 130, content: "Who is the first person you would like to share good news with?" },
      { id: 13006, topic_id: 130, content: "Do you prefer to share news with your friends or your parents?" }
    ]
  },
  {
    id: 131, title: "Having a Break", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Relaxation and downtime.",
    questions: [
      { id: 13101, topic_id: 131, content: "How often do you take a rest or a break?" },
      { id: 13102, topic_id: 131, content: "What do you usually do when you are resting?" },
      { id: 13103, topic_id: 131, content: "Do you take a nap when you are taking your rest?" },
      { id: 13104, topic_id: 131, content: "How do you feel after taking a nap?" }
    ]
  },
  {
    id: 132, title: "Praise / Encouragement", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Motivation and social support.",
    questions: [
      { id: 13201, topic_id: 132, content: "Have you had any achievements recently?" },
      { id: 13202, topic_id: 132, content: "How do you feel when you are praised?" },
      { id: 13203, topic_id: 132, content: "When was the last time you praised someone?" },
      { id: 13204, topic_id: 132, content: "Do you think parents should often praise their children?" },
      { id: 13205, topic_id: 132, content: "Have you ever been praised or encouraged by your teacher?" }
    ]
  },
  {
    id: 133, title: "Happy Things", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Joy and positive emotions.",
    questions: [
      { id: 13301, topic_id: 133, content: "Is there anything that has made you feel happy lately?" },
      { id: 13302, topic_id: 133, content: "What made you happy when you were little?" },
      { id: 13303, topic_id: 133, content: "What do you think will make you feel happy in the future?" },
      { id: 13304, topic_id: 133, content: "When do you feel happy at work? Why?" },
      { id: 13305, topic_id: 133, content: "Do you feel happy when buying new things?" },
      { id: 13306, topic_id: 133, content: "Do you think people are happy when buying new things?" }
    ]
  },
  {
    id: 134, title: "Mobile Phone", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Technology usage.",
    questions: [
      { id: 13401, topic_id: 134, content: "What was your first mobile phone?" },
      { id: 13402, topic_id: 134, content: "Do you often use your mobile phone for texting or calls?" },
      { id: 13403, topic_id: 134, content: "Will you buy a new one in the future?" },
      { id: 13404, topic_id: 134, content: "How has your mobile phone changed your life?" }
    ]
  },
  {
    id: 135, title: "Taking Photos", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Photography habits.",
    questions: [
      { id: 13501, topic_id: 135, content: "Do you like taking photos?" },
      { id: 13502, topic_id: 135, content: "Do you like taking selfies?" },
      { id: 13503, topic_id: 135, content: "What is your favorite family photo?" },
      { id: 13504, topic_id: 135, content: "Do you want to improve your photography skills?" }
    ]
  },
  {
    id: 136, title: "List", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Organization habits.",
    questions: [
      { id: 13601, topic_id: 136, content: "Do you make a list when you shop?" },
      { id: 13602, topic_id: 136, content: "Do you make a list for your work? Does it work?" },
      { id: 13603, topic_id: 136, content: "Why don't some people like making lists?" },
      { id: 13604, topic_id: 136, content: "Do you prefer to make a list on paper or your phone?" }
    ]
  },
  {
    id: 137, title: "Sing", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Singing habits and preferences.",
    questions: [
      { id: 13701, topic_id: 137, content: "Do you like singing? Why?" },
      { id: 13702, topic_id: 137, content: "Have you ever learned how to sing?" },
      { id: 13703, topic_id: 137, content: "Who do you want to sing for?" },
      { id: 13704, topic_id: 137, content: "Do you think singing can bring happiness to people?" }
    ]
  },
  {
    id: 138, title: "Chocolate", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Food preferences.",
    questions: [
      { id: 13801, topic_id: 138, content: "Do you like eating chocolate? Why or why not?" },
      { id: 13802, topic_id: 138, content: "How often do you eat chocolate?" },
      { id: 13803, topic_id: 138, content: "Did you often eat chocolate when you were a kid?" },
      { id: 13804, topic_id: 138, content: "Why do you think chocolate is popular around the world?" },
      { id: 13805, topic_id: 138, content: "What's your favourite flavour of chocolate?" },
      { id: 13806, topic_id: 138, content: "Do you think it is good to use chocolate as gifts to others?" }
    ]
  },
  {
    id: 139, title: "Internet", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Online habits.",
    questions: [
      { id: 13901, topic_id: 139, content: "When did you start using the internet?" },
      { id: 13902, topic_id: 139, content: "How often do you go online?" },
      { id: 13903, topic_id: 139, content: "How does the internet influence people?" },
      { id: 13904, topic_id: 139, content: "Do you think you spend too much time online?" },
      { id: 13905, topic_id: 139, content: "What would you do without the internet?" }
    ]
  },
  {
    id: 140, title: "Memory", part: "part1", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Cognitive habits.",
    questions: [
      { id: 14001, topic_id: 140, content: "Are you good at memorising things?" },
      { id: 14002, topic_id: 140, content: "Have you ever forgotten something important?" },
      { id: 14003, topic_id: 140, content: "What do you need to remember in your daily life?" },
      { id: 14004, topic_id: 140, content: "How do you remember important things?" }
    ]
  },
  {
    id: 141, title: "Being Busy", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Daily schedule and stress.",
    questions: [
      { id: 14101, topic_id: 141, content: "Are you often busy?" },
      { id: 14102, topic_id: 141, content: "Why are you busy?" },
      { id: 14103, topic_id: 141, content: "When are you busy?" },
      { id: 14104, topic_id: 141, content: "Are you busier now than when you were a child?" }
    ]
  },
  {
    id: 142, title: "Spending Time by Yourself", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Solitude and hobbies.",
    questions: [
      { id: 14201, topic_id: 142, content: "Do you usually spend time by yourself?" },
      { id: 14202, topic_id: 142, content: "What did you do last time you were by yourself?" },
      { id: 14203, topic_id: 142, content: "How do you usually spend your time by yourself?" },
      { id: 14204, topic_id: 142, content: "Do you like spending time by yourself?" }
    ]
  },
  {
    id: 143, title: "Spare Time", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Leisure activities.",
    questions: [
      { id: 14301, topic_id: 143, content: "Do you often have free time?" },
      { id: 14302, topic_id: 143, content: "What do you usually do in your spare time?" },
      { id: 14303, topic_id: 143, content: "Which day do you have more free time on, Saturday or Sunday?" },
      { id: 14304, topic_id: 143, content: "Would you like to have more free time in the future?" }
    ]
  },
  {
    id: 144, title: "Machine", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Household appliances and usage.",
    questions: [
      { id: 14401, topic_id: 144, content: "What is your favourite machine in your home?" },
      { id: 14402, topic_id: 144, content: "Do you think washing machines and sweeping machines are important?" },
      { id: 14403, topic_id: 144, content: "Do you read the instructions before using a machine?" },
      { id: 14404, topic_id: 144, content: "Do you think it is important to read the instructions?" }
    ]
  },
  {
    id: 145, title: "Writing", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Handwriting vs typing.",
    questions: [
      { id: 14501, topic_id: 145, content: "Do you write a lot?" },
      { id: 14502, topic_id: 145, content: "What do you like to write? Why?" },
      { id: 14503, topic_id: 145, content: "Do you think the things you write would change?" },
      { id: 14504, topic_id: 145, content: "Do you prefer typing or handwriting when you are writing?" },
      { id: 14505, topic_id: 145, content: "How often do you write diaries?" },
      { id: 14506, topic_id: 145, content: "What other ways do you use to record your life?" }
    ]
  },
  {
    id: 146, title: "Saying 'Thank You'", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Social etiquette.",
    questions: [
      { id: 14601, topic_id: 146, content: "Have you ever sent a thank you card to others?" },
      { id: 14602, topic_id: 146, content: "Do people in your country often say 'thank you'?" },
      { id: 14603, topic_id: 146, content: "On what occasions do you say 'thank you'?" },
      { id: 14604, topic_id: 146, content: "Why do people need to say 'thank you'?" }
    ]
  },
  {
    id: 147, title: "Staying Up", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Sleep habits.",
    questions: [
      { id: 14701, topic_id: 147, content: "Do you often stay up late?" },
      { id: 14702, topic_id: 147, content: "Did you stay up late when you were a kid?" },
      { id: 14703, topic_id: 147, content: "What do you do when you stay up late?" },
      { id: 14704, topic_id: 147, content: "What does it feel like the next morning if you stay up late?" }
    ]
  },
  {
    id: 148, title: "Public Transportation", part: "part1", category: "Places",
    season: "Sep-Dec 2025", status: "active",
    description: "Commuting habits.",
    questions: [
      { id: 14801, topic_id: 148, content: "What kind of public transportation do you usually take?" },
      { id: 14802, topic_id: 148, content: "When do you usually take public transportation, in your everyday life or when you are travelling?" },
      { id: 14803, topic_id: 148, content: "Do most people prefer public transportation in your country?" },
      { id: 14804, topic_id: 148, content: "Did you take public transportation when you were a kid?" },
      { id: 14805, topic_id: 148, content: "Will there be more people taking public transportation in the future?" }
    ]
  },
  {
    id: 149, title: "Flowers", part: "part1", category: "Objects",
    season: "Sep-Dec 2025", status: "active",
    description: "Nature and gifts.",
    questions: [
      { id: 14901, topic_id: 149, content: "Do you love flowers?" },
      { id: 14902, topic_id: 149, content: "Do you know anyone who loves flowers?" },
      { id: 14903, topic_id: 149, content: "Are there a lot of flowers where you live?" },
      { id: 14904, topic_id: 149, content: "Do you take photos of flowers in your daily life?" },
      { id: 14905, topic_id: 149, content: "Do people in your country often send flowers to others?" }
    ]
  },
  {
    id: 150, title: "Birthday", part: "part1", category: "Events",
    season: "Sep-Dec 2025", status: "active",
    description: "Celebrations and traditions.",
    questions: [
      { id: 15001, topic_id: 150, content: "What do you usually do on your birthday?" },
      { id: 15002, topic_id: 150, content: "What did you do on your birthday when you were young?" },
      { id: 15003, topic_id: 150, content: "Do you think it is important for you to celebrate your birthday?" },
      { id: 15004, topic_id: 150, content: "Whose birthday do you think is the most important to celebrate in China?" }
    ]
  },
  {
    id: 151, title: "Geography", part: "part1", category: "Places",
    season: "Sep-Dec 2025", status: "active",
    description: "World knowledge and study.",
    questions: [
      { id: 15101, topic_id: 151, content: "How do you like geography?" },
      { id: 15102, topic_id: 151, content: "Do you think geography is useful?" },
      { id: 15103, topic_id: 151, content: "Have you ever learned geography?" },
      { id: 15104, topic_id: 151, content: "Do you want to be a geography teacher?" },
      { id: 15105, topic_id: 151, content: "Will you learn more about the geography of other countries?" }
    ]
  },
  {
    id: 152, title: "Names", part: "part1", category: "People",
    season: "Sep-Dec 2025", status: "active",
    description: "Identity and meaning.",
    questions: [
      { id: 15201, topic_id: 152, content: "Does your name have any special meaning?" },
      { id: 15202, topic_id: 152, content: "How would you choose names for your next generation?" },
      { id: 15203, topic_id: 152, content: "Does anyone in your family have the same name as you?" },
      { id: 15204, topic_id: 152, content: "Are there any differences between how Chinese name their children now and in the past?" },
      { id: 15205, topic_id: 152, content: "Are there any names that are more popular than others in China?" }
    ]
  }
];
