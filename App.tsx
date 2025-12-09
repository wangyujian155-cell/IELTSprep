
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import AudioPlayer from './components/AudioPlayer';
import VoiceRecorder from './components/VoiceRecorder';
import { TOPICS } from './services/mockData';
import { geminiService, ExpandedContent } from './services/geminiService';
import { vocabService } from './services/vocabService';
import { customTopicService } from './services/customTopicService';
import { SampleAnswer, Vocabulary, VocabCard, TopicCategory, SentenceAnalysis, Topic, Question, EvaluationResult } from './types';
import { Loader2, Sparkles, ChevronRight, Mic, CheckCircle2, Globe, Languages, Book, X, Volume2, Plus, Brain, GraduationCap, PlayCircle, Trophy, RefreshCw, List, AlignLeft, Split, Timer, StopCircle, PencilLine, AlertCircle, Users, Box, MapPin, CalendarClock, ArrowDownAZ, Calendar, Search, ArrowRight, Clock, Star, Library, Scale, Zap, Activity, MessageCircle, AlertTriangle, Settings, Download, Upload, Trash2, FileJson, LayoutDashboard, MessageSquare, Check, PlusCircle, Wand2, Save, PenTool, Lightbulb, Copy, Send, Radio, Music, GitBranch, Hourglass, ExternalLink } from 'lucide-react';
// Import Mermaid directly
import mermaid from 'mermaid';

// ... (Helper functions like parseKeyArgument, ProsodyVisualizer, MermaidChart, SimpleMarkdownRenderer remain same) ...
const parseKeyArgument = (arg: string): Vocabulary => {
  const match = arg.match(/^(.+?)\s*[（(](.+)[)）]$/);
  if (match) {
    return {
      word: match[1].trim(),
      definition: match[2].trim(),
      phonetic: '',
      example: 'Part 3 Strategy Keyword'
    };
  }
  return {
    word: arg,
    definition: 'Context Keyword',
    phonetic: '',
    example: 'Strategic Argument'
  };
};

const ProsodyVisualizer: React.FC<{ markup: string; ipa?: string }> = ({ markup, ipa }) => {
  const parts = markup.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800/50 shadow-sm my-4">
      <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-4 flex items-center gap-2">
        <Music className="w-4 h-4" /> Speaking Guide (Rhythm & Intonation)
      </h4>
      <div className="font-serif text-lg leading-loose text-slate-800 dark:text-slate-200">
        {parts.map((part, i) => {
          const isStressed = part.startsWith('**') && part.endsWith('**');
          const cleanPart = isStressed ? part.slice(2, -2) : part;
          const subParts = cleanPart.split(/([↘↗|‿])/g);
          return (
            <span key={i} className={isStressed ? "font-bold text-indigo-700 dark:text-indigo-400 mx-0.5" : ""}>
              {subParts.map((sub, j) => {
                if (sub === '↘' || sub === '↗') return <span key={`${i}-${j}`} className="text-blue-500 font-bold mx-1 select-none">{sub}</span>;
                if (sub === '|') return <span key={`${i}-${j}`} className="text-slate-300 mx-2 text-xl font-light select-none">|</span>;
                if (sub === '‿') return <span key={`${i}-${j}`} className="text-slate-400 mx-0.5 relative -top-1 select-none">‿</span>;
                return <span key={`${i}-${j}`}>{sub}</span>;
              })}
            </span>
          );
        })}
      </div>
      {ipa && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 font-mono text-sm text-slate-500 dark:text-slate-400 tracking-wide">
          {ipa}
        </div>
      )}
    </div>
  );
};

const MermaidChart: React.FC<{ code: string }> = ({ code }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const editUrl = useMemo(() => {
    try {
        const state = {
            code: code,
            mermaid: { theme: 'default' }
        };
        const json = JSON.stringify(state);
        // UTF-8 friendly base64 encoding
        const base64 = btoa(unescape(encodeURIComponent(json)));
        return `https://mermaid.live/edit#base64:${base64}`;
    } catch (e) {
        return '#';
    }
  }, [code]);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({ 
        startOnLoad: false, 
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'base',
        securityLevel: 'loose',
        flowchart: { useMaxWidth: false, htmlLabels: true, curve: 'basis' },
        themeVariables: { fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }
      });
      const renderChart = async () => {
        try {
          let sanitizedCode = code.replace(/graph TD(?!\n)/g, 'graph TD\n');
          sanitizedCode = sanitizedCode.replace(/([A-Za-z0-9_]+)\[([^"'][^\]]*)\]/g, '$1["$2"]');
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, sanitizedCode);
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
            const svgElement = containerRef.current.querySelector('svg');
            if (svgElement) { svgElement.style.height = 'auto'; svgElement.style.maxWidth = 'none'; }
          }
        } catch (error) {
          console.error("Mermaid rendering failed:", error);
          if (containerRef.current) containerRef.current.innerHTML = `<div class="text-red-500 text-xs p-2">Failed to render chart.</div>`;
        }
      };
      renderChart();
    }
  }, [code]);

  return (
    <div className="w-full">
        <div className="overflow-x-auto bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 min-h-[200px]">
            <div ref={containerRef} className="min-w-full flex justify-center" />
        </div>
        <div className="mt-3 flex justify-end">
            <a 
                href={editUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
            >
                <ExternalLink className="w-3.5 h-3.5" />
                View Full Screen / Edit
            </a>
        </div>
    </div>
  );
};

const SimpleMarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  const tableRows: string[][] = [];
  let inTable = false;
  let tableHeader: string[] = [];

  const renderContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      return <span key={i}>{part}</span>;
    });
  };

  const renderedLines = lines.map((line, idx) => {
    if (line.trim().startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHeader = line.split('|').filter(c => c.trim()).map(c => c.trim());
        return null;
      }
      if (line.includes('---')) return null;
      const cols = line.split('|').filter(c => c.trim()).map(c => c.trim());
      tableRows.push(cols);
      const nextLine = lines[idx + 1];
      if (!nextLine || !nextLine.trim().startsWith('|')) {
        const currentTableRows = [...tableRows];
        tableRows.length = 0;
        inTable = false;
        return (
          <div key={`table-${idx}`} className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase font-bold">
                <tr>{tableHeader.map((h, i) => <th key={i} className="px-6 py-4 whitespace-nowrap">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                {currentTableRows.map((row, rI) => (
                  <tr key={rI} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    {row.map((cell, cI) => <td key={cI} className="px-6 py-4 text-slate-700 dark:text-slate-300 align-top">{renderContent(cell)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      return null;
    }
    if (line.trim().startsWith('###')) return <h3 key={idx} className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">{renderContent(line.replace(/^###\s*/, ''))}</h3>;
    if (line.trim().startsWith('##')) return <h2 key={idx} className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">{renderContent(line.replace(/^##\s*/, ''))}</h2>;
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('- ')) {
       const leadingSpaces = line.search(/\S|$/);
       const indentClass = leadingSpaces >= 2 ? "ml-8" : "ml-4";
       return <li key={idx} className={`${indentClass} list-disc pl-1 mb-1.5 text-slate-700 dark:text-slate-300 leading-relaxed`}>{renderContent(trimmedLine.replace(/^- /, ''))}</li>;
    }
    if (line.trim() === '') return <div key={idx} className="h-2"></div>;
    return <p key={idx} className="mb-2 text-slate-700 dark:text-slate-300 leading-relaxed">{renderContent(line)}</p>;
  });
  return <div>{renderedLines}</div>;
};

const VocabModal: React.FC<{ vocab: Vocabulary; onClose: () => void }> = ({ vocab, onClose }) => {
  // ... (keeping existing implementation) ...
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => { setIsSaved(vocabService.hasCard(vocab.word)); }, [vocab]);
  const handleSave = () => { try { vocabService.addCard(vocab); setIsSaved(true); } catch (e) { console.error(e); } };
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-10 zoom-in-95 duration-300 border border-white/20 dark:border-slate-700">
        <div className="relative h-24 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-white/10 pattern-dots"></div>
           <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white transition-colors"><X className="w-5 h-5" /></button>
           <h3 className="text-3xl font-bold text-white relative z-10 drop-shadow-md">{vocab.word}</h3>
        </div>
        <div className="p-6">
          <div className="text-center -mt-10 mb-6"><span className="inline-block px-4 py-1 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-lg font-bold rounded-full shadow-md border border-slate-100 dark:border-slate-700">{vocab.phonetic}</span></div>
          <div className="space-y-6 mb-8">
            <div><h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Book className="w-3 h-3" /> Definition</h4><p className="text-slate-700 dark:text-slate-200 text-lg leading-snug font-medium">{vocab.definition}</p></div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-800 relative"><div className="absolute top-0 left-0 w-1 h-full bg-blue-300 dark:bg-blue-600 rounded-l-2xl"></div><h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Example Usage</h4><p className="text-blue-900 dark:text-blue-200 italic font-serif text-lg leading-relaxed">"{vocab.example}"</p></div>
          </div>
          <button onClick={handleSave} disabled={isSaved} className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-200 ${isSaved ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 cursor-default' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transform active:scale-[0.98]'}`}>{isSaved ? <><CheckCircle2 className="w-5 h-5" /> Saved to Deck</> : <><Plus className="w-5 h-5" /> Add to Flashcards</>}</button>
        </div>
      </div>
    </div>
  );
};

// --- Page Components ---

const TopicListPage: React.FC = () => {
  const [filter, setFilter] = useState<'part1' | 'part2' | 'custom'>('part1');
  const [customTopics, setCustomTopics] = useState<Topic[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCustomTopics(customTopicService.getTopics());
  }, []);

  // Filter topics
  const displayTopics = useMemo(() => {
    if (filter === 'custom') return customTopics;
    return TOPICS.filter(t => t.part === filter);
  }, [filter, customTopics]);

  const handleCreateTopic = () => {
    const title = prompt("Enter topic title:");
    if (!title) return;
    const newTopic: Topic = {
        id: Date.now(),
        title,
        part: 'part2', // Default to part 2 structure for custom
        category: 'Events', // Default
        description: 'Custom topic',
        questions: []
    };
    customTopicService.saveTopic(newTopic);
    setCustomTopics(customTopicService.getTopics());
    setFilter('custom');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Practice Topics</h1>
        <button onClick={handleCreateTopic} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <PlusCircle className="w-4 h-4" /> Custom Topic
        </button>
      </div>

      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-1 overflow-x-auto">
        {(['part1', 'part2', 'custom'] as const).map(f => (
            <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all whitespace-nowrap ${filter === f ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
                {f === 'part1' ? 'Part 1: Interview' : f === 'part2' ? 'Part 2 & 3: Long Turn' : 'My Custom Topics'}
            </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayTopics.map(topic => (
            <Link to={`/topic/${topic.id}`} key={topic.id} className="group block p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded-md uppercase tracking-wider ${topic.category === 'People' ? 'bg-purple-100 text-purple-600' : topic.category === 'Places' ? 'bg-emerald-100 text-emerald-600' : topic.category === 'Objects' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                        {topic.category}
                    </span>
                    {topic.season && <span className="text-xs text-slate-400 font-mono">{topic.season}</span>}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{topic.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{topic.description}</p>
            </Link>
        ))}
        {displayTopics.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400">
                <Box className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No topics found in this category.</p>
            </div>
        )}
      </div>
    </div>
  );
};

const QuestionExpanderPage: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [part, setPart] = useState("part1");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExpandedContent | null>(null);

  const handleGenerate = async () => {
    if(!question.trim()) return;
    setLoading(true);
    setResult(null);
    try {
        const res = await geminiService.generateSampleAnswerText(question, part);
        setResult(res);
    } catch(e) {
        console.error(e);
        alert("Failed to generate content.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3"><Wand2 className="w-8 h-8" /> AI Question Expander</h1>
            <p className="text-blue-100 text-lg opacity-90 mb-8">Turn any simple question into a comprehensive IELTS learning resource with vocabulary, strategy, and sample answers.</p>
            
            <div className="space-y-4">
                <input 
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder="Enter your question here (e.g. 'Do you like rainy days?')"
                    className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <div className="flex gap-4">
                    <select 
                        value={part} 
                        onChange={e => setPart(e.target.value)}
                        className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none cursor-pointer [&>option]:text-slate-900"
                    >
                        <option value="part1">Part 1 (Short)</option>
                        <option value="part2">Part 2 (Cue Card)</option>
                        <option value="part3">Part 3 (Discussion)</option>
                    </select>
                    <button 
                        onClick={handleGenerate} 
                        disabled={loading || !question.trim()}
                        className="flex-1 bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                        Generate Resource
                    </button>
                </div>
            </div>
        </div>

        {result && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Thinking Logic</h3>
                    <p className="text-slate-700 dark:text-slate-300">{result.thinking_logic}</p>
                </div>
                
                {result.prosody_markup && (
                    <ProsodyVisualizer markup={result.prosody_markup} ipa={result.ipa} />
                )}

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Sample Answer</h3>
                    <p className="text-lg leading-relaxed text-slate-900 dark:text-white mb-4">{result.english}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{result.chinese}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {result.vocabularies.map((v, i) => (
                        <div key={i} className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer" onClick={() => vocabService.addCard(v)}>
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-bold text-blue-600 dark:text-blue-400">{v.word}</span>
                                <Plus className="w-4 h-4 text-slate-400" />
                            </div>
                            <p className="text-xs text-slate-500 mb-1">{v.phonetic}</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{v.definition}</p>
                            <p className="text-xs text-slate-400 italic">"{v.example}"</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  );
};

const CriteriaPage: React.FC = () => {
  const criteria = [
    {
        title: "Fluency & Coherence",
        description: "Your ability to speak at length without noticeable effort or loss of coherence.",
        points: ["Speak without long pauses", "Use a range of connectives (however, furthermore)", "Expand your answers"]
    },
    {
        title: "Lexical Resource",
        description: "Your ability to use a wide range of vocabulary and idiomatic language.",
        points: ["Use less common and idiomatic vocabulary", "Paraphrase effectively", "Use correct collocations"]
    },
    {
        title: "Grammatical Range",
        description: "Your ability to use a wide range of structures accurately.",
        points: ["Mix simple and complex sentences", "Use a variety of tenses", "Avoid systematic errors"]
    },
    {
        title: "Pronunciation",
        description: "Your ability to produce comprehensible speech.",
        points: ["Use intonation to convey meaning", "Speak clearly with correct sounds", "Group words into thought chunks"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">IELTS Speaking Assessment Criteria</h1>
        <div className="grid md:grid-cols-2 gap-6">
            {criteria.map((c, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
                        {i + 1}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{c.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{c.description}</p>
                    <ul className="space-y-3">
                        {c.points.map((p, j) => (
                            <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {p}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  );
};

const VocabularyPage: React.FC = () => {
  const [deck, setDeck] = useState<VocabCard[]>([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  useEffect(() => {
    setDeck(vocabService.getDeck());
  }, []);

  const handleReview = (remembered: boolean) => {
    const card = deck[currentCardIdx];
    vocabService.processReview(card.id, remembered);
    // Move to next
    if (currentCardIdx < deck.length - 1) {
        setCurrentCardIdx(prev => prev + 1);
        setShowDefinition(false);
    } else {
        alert("Review session complete!");
        setReviewMode(false);
        setDeck(vocabService.getDeck()); // Refresh
    }
  };

  if (reviewMode && deck.length > 0) {
      const card = deck[currentCardIdx];
      return (
          <div className="max-w-md mx-auto py-20 text-center">
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-12 mb-8 min-h-[300px] flex flex-col justify-center items-center">
                  <h2 className="text-4xl font-bold mb-4">{card.word}</h2>
                  <p className="text-slate-400 mb-8">{card.phonetic}</p>
                  
                  {showDefinition ? (
                      <div className="animate-in fade-in slide-in-from-bottom-4">
                          <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">{card.definition}</p>
                          <p className="text-blue-600 dark:text-blue-400 italic">"{card.example}"</p>
                      </div>
                  ) : (
                      <button onClick={() => setShowDefinition(true)} className="px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Show Definition</button>
                  )}
              </div>
              
              {showDefinition && (
                  <div className="grid grid-cols-2 gap-4">
                      <button onClick={() => handleReview(false)} className="py-4 rounded-xl bg-red-100 text-red-600 font-bold hover:bg-red-200 transition-colors">Again</button>
                      <button onClick={() => handleReview(true)} className="py-4 rounded-xl bg-emerald-100 text-emerald-600 font-bold hover:bg-emerald-200 transition-colors">Good</button>
                  </div>
              )}
          </div>
      )
  }

  return (
    <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Vocabulary Deck</h1>
                <p className="text-slate-500 dark:text-slate-400">{deck.length} words saved</p>
            </div>
            {deck.length > 0 && (
                <button onClick={() => { setCurrentCardIdx(0); setShowDefinition(false); setReviewMode(true); }} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <PlayCircle className="w-5 h-5" /> Start Review
                </button>
            )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {deck.map(card => (
                <div key={card.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors relative group">
                    <button 
                        onClick={(e) => { e.stopPropagation(); vocabService.removeCard(card.id); setDeck(vocabService.getDeck()); }}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                    <h3 className="font-bold text-lg mb-1">{card.word}</h3>
                    <p className="text-xs text-slate-400 mb-3">{card.phonetic}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{card.definition}</p>
                </div>
            ))}
            {deck.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                    <Library className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Your deck is empty. Start practicing to add words!</p>
                </div>
            )}
        </div>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const handleClearData = () => {
      if(window.confirm("Are you sure you want to clear all vocabulary and custom topics?")) {
          localStorage.clear();
          window.location.reload();
      }
  };

  return (
    <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
            <div className="p-6 flex items-center justify-between">
                <div>
                    <h3 className="font-bold">Clear App Data</h3>
                    <p className="text-sm text-slate-500">Reset your progress, vocabulary deck, and custom topics.</p>
                </div>
                <button onClick={handleClearData} className="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg hover:bg-red-100 transition-colors">
                    Clear Data
                </button>
            </div>
            <div className="p-6 flex items-center justify-between">
                <div>
                    <h3 className="font-bold">About</h3>
                    <p className="text-sm text-slate-500">IELTS Prep.AI v1.0.0</p>
                </div>
            </div>
        </div>
    </div>
  );
};

// --- Practice Page Logic ---

type Stage = 'idle' | 'prep' | 'recording' | 'editing' | 'evaluating' | 'results';

const PracticePage: React.FC = () => {
  const { id } = useParams();
  const allTopics = useMemo(() => [...TOPICS, ...customTopicService.getTopics()], []);
  const topic = allTopics.find(t => t.id === Number(id));
  
  // Navigation & Data State
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<SampleAnswer | null>(null);
  const [generatedAudio, setGeneratedAudio] = useState<AudioBuffer | null>(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [selectedVocab, setSelectedVocab] = useState<Vocabulary | null>(null);

  // Workflow State
  const [stage, setStage] = useState<Stage>('idle');
  const [userAnswerText, setUserAnswerText] = useState('');
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [prepTimeLeft, setPrepTimeLeft] = useState(60); // 1 minute for Part 2
  
  // Refs
  const prepTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset state on topic change
    setCurrentQIdx(0);
    resetWorkflow();
  }, [id]);

  useEffect(() => {
    // Update sample answer when question changes
    if (topic?.questions && topic.questions[currentQIdx]) {
      const q = topic.questions[currentQIdx];
      setCurrentAnswer(q.sample_answer || null);
      
      // Auto-enter prep mode if it's Part 2 Cue Card (Question 1)
      if (topic.part === 'part2' && currentQIdx === 0) {
        startPrep();
      } else {
        setStage('idle');
      }
    }
  }, [topic, currentQIdx]);

  useEffect(() => {
    return () => {
      if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    };
  }, []);

  if (!topic || !topic.questions || topic.questions.length === 0) return <div>Topic not found</div>;

  const currentQuestion = topic.questions[currentQIdx];
  const isLastQuestion = currentQIdx === topic.questions.length - 1;
  const isPart2CueCard = topic.part === 'part2' && currentQIdx === 0;

  const resetWorkflow = () => {
    setStage('idle');
    setUserAnswerText('');
    setEvaluation(null);
    setGeneratedAudio(null);
    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
  };

  const startPrep = () => {
    setStage('prep');
    setPrepTimeLeft(60);
    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    
    prepTimerRef.current = window.setInterval(() => {
      setPrepTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(prepTimerRef.current!);
          return 0; // Timer ends, user can click start
        }
        return prev - 1;
      });
    }, 1000);
  };

  const skipPrep = () => {
    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    setStage('recording');
  };

  const handleRecordingComplete = async (blob: Blob, transcript: string) => {
    // Enhance transcript with AI (simulated via service call or direct usage)
    // Here we assume transcript is "raw" from browser, we move to EDITING stage
    // Ideally we would trigger the AI refine call here if implemented
    setUserAnswerText(transcript);
    
    // Optional: Trigger high-fidelity transcription here
    setStage('editing');
    try {
        const refined = await geminiService.transcribeAudio(blob);
        if (refined) setUserAnswerText(refined);
    } catch(e) {
        console.error("Transcription refine failed", e);
    }
  };

  const handleSubmitAnswer = async () => {
    const answerToSubmit = userAnswerText.trim();
    if (!answerToSubmit) return;

    setStage('evaluating');
    try {
      const evalResult = await geminiService.evaluateUserAnswer(currentQuestion.content, answerToSubmit);
      setEvaluation(evalResult);
      
      // Auto-generate sample answer if missing
      if (!currentAnswer) {
         const genResult = await geminiService.generateSampleAnswerText(currentQuestion.content, topic.part);
         const newAnswer: SampleAnswer = {
            id: Date.now(),
            question_id: currentQuestion.id,
            english_text: genResult.english,
            chinese_translation: genResult.chinese,
            vocabularies: genResult.vocabularies,
            sentences: genResult.sentences
         };
         setCurrentAnswer(newAnswer);
      }
      setStage('results');
    } catch (e) {
      console.error(e);
      alert("Evaluation failed. Please try again.");
      setStage('editing');
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      alert("Practice completed!");
      return;
    }
    setCurrentQIdx(prev => prev + 1);
    // Reset handled by useEffect on currentQIdx change
  };

  const handlePlayAudio = async (text: string) => {
    if (generatedAudio) return;
    setIsAudioLoading(true);
    try {
      const buffer = await geminiService.generateSpeech(text);
      setGeneratedAudio(buffer);
    } catch (e) { console.error(e); } finally { setIsAudioLoading(false); }
  };

  // --- Render Steps ---

  const renderStepper = () => {
    const steps = [
      { id: 'prep', label: 'Preparation', icon: <Hourglass className="w-4 h-4" /> },
      { id: 'recording', label: 'Speak', icon: <Mic className="w-4 h-4" /> },
      { id: 'editing', label: 'Review', icon: <PenTool className="w-4 h-4" /> },
      { id: 'results', label: 'Analysis', icon: <Brain className="w-4 h-4" /> },
    ];

    // Determine active index
    let activeIdx = 0;
    if (stage === 'recording') activeIdx = 1;
    if (stage === 'editing' || stage === 'evaluating') activeIdx = 2;
    if (stage === 'results') activeIdx = 3;
    if (stage === 'idle' && !isPart2CueCard) activeIdx = 1; // Direct to speak for Part 1/3

    return (
      <div className="flex items-center justify-between mb-8 px-4">
        {steps.map((s, i) => (
          <div key={s.id} className={`flex flex-col items-center gap-2 relative z-10 ${i <= activeIdx ? 'text-blue-600 dark:text-blue-400' : 'text-slate-300 dark:text-slate-600'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i <= activeIdx 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none scale-110' 
                : 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}>
              {i < activeIdx ? <Check className="w-4 h-4" /> : (i === activeIdx ? s.icon : i + 1)}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">{s.label}</span>
            
            {/* Connector Line */}
            {i < steps.length - 1 && (
              <div className={`absolute top-4 left-1/2 w-full h-0.5 -z-10 ${i < activeIdx ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'}`} style={{ width: 'calc(100% + 2rem)', left: '50%' }}></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="mb-6">
         <Link to="/" className="text-slate-500 hover:text-blue-600 flex items-center gap-2 mb-4 font-bold text-sm">
           <ChevronRight className="w-4 h-4 rotate-180" /> Back to Topics
         </Link>
         <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white line-clamp-1">{topic.title}</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Part {topic.part === 'part1' ? '1: Interview' : '2 & 3: Long Turn'}</p>
            </div>
            <span className="text-sm font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500">
               Question {currentQIdx + 1} / {topic.questions.length}
            </span>
         </div>
         <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 mt-4 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full transition-all duration-500" style={{ width: `${((currentQIdx + 1) / topic.questions.length) * 100}%` }}></div>
         </div>
       </div>

       {renderStepper()}

       {/* Question Card */}
       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden mb-8 relative transition-all duration-500">
          
          {/* Prep Stage Overlay (Part 2 Only) */}
          {stage === 'prep' && isPart2CueCard && (
            <div className="absolute inset-0 z-20 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center text-white p-8 text-center animate-in fade-in">
                <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center mb-6 relative">
                    <span className="text-3xl font-mono font-bold">{prepTimeLeft}s</span>
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" style={{ animationDuration: '60s' }}></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Preparation Time</h3>
                <p className="text-slate-300 mb-8 max-w-md">Take a minute to read the question and write down some notes. The recording will start automatically or you can start now.</p>
                <button onClick={skipPrep} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-transform active:scale-95 flex items-center gap-2">
                    <Mic className="w-5 h-5" /> Start Speaking Now
                </button>
            </div>
          )}

          <div className="p-8">
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-8">
               {currentQuestion.content}
             </h2>

             {/* Dynamic Content based on Stage */}
             
             {/* 1. IDLE / RECORDING / PREP(hidden) */}
             {(stage === 'idle' || stage === 'recording' || stage === 'prep') && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                   <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                          <Mic className="w-4 h-4" /> Your Response
                        </p>
                        {isPart2CueCard && <span className="text-xs font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">2 Min Limit</span>}
                      </div>
                      
                      <VoiceRecorder 
                        onTranscriptUpdate={(text) => setUserAnswerText(text)}
                        onRecordingComplete={handleRecordingComplete}
                        timeLimit={isPart2CueCard ? 120 : undefined} // 2 min limit for Part 2
                        autoStart={stage === 'recording'}
                      />
                   </div>
                   
                   {/* Manual Start for Part 1/3 if in idle */}
                   {stage === 'idle' && !isPart2CueCard && (
                       <div className="text-center text-slate-400 text-sm italic">
                           Click the microphone above to start recording.
                       </div>
                   )}
                </div>
             )}

             {/* 2. EDITING (Transcript Review) */}
             {stage === 'editing' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                          <PenTool className="w-4 h-4" /> Review Transcript
                        </p>
                        <button onClick={() => setStage('recording')} className="text-xs font-bold text-blue-600 hover:underline">Retake Recording</button>
                    </div>
                    <textarea 
                        value={userAnswerText}
                        onChange={(e) => setUserAnswerText(e.target.value)}
                        className="w-full h-48 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-slate-900 dark:text-white text-lg leading-relaxed"
                        placeholder="Waiting for transcript..."
                    />
                    <button 
                      onClick={handleSubmitAnswer}
                      disabled={!userAnswerText.trim()}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                      <Sparkles className="w-5 h-5" /> Analyze My Answer
                    </button>
                </div>
             )}

             {/* 3. EVALUATING (Loading) */}
             {stage === 'evaluating' && (
                 <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in">
                     <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Analyzing your response...</h3>
                     <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Our AI examiner is evaluating your fluency, vocabulary, grammar, and pronunciation.</p>
                 </div>
             )}

             {/* 4. RESULTS (Review) */}
             {stage === 'results' && evaluation && (
               <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  
                  {/* --- Logic Analysis Section --- */}
                  {evaluation.logic_analysis && (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <GitBranch className="w-5 h-5" />
                                <span className="font-bold">Logic X-Ray</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-purple-500">
                                <p className="text-slate-800 dark:text-slate-200 font-medium">{evaluation.logic_analysis.logic_xray}</p>
                            </div>
                            <MermaidChart code={evaluation.logic_analysis.mermaid_code} />
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl">
                                    <h4 className="text-blue-700 dark:text-blue-300 font-bold mb-2 text-sm">Supporting Reasons</h4>
                                    <ul className="space-y-2">{evaluation.logic_analysis.argument_structure.Supporting_Reasons.map((r, i) => <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><Check className="w-4 h-4 text-blue-500 shrink-0" />{r}</li>)}</ul>
                                </div>
                                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl">
                                    <h4 className="text-emerald-700 dark:text-emerald-300 font-bold mb-2 text-sm">Evidence</h4>
                                    <ul className="space-y-2">{evaluation.logic_analysis.argument_structure.Examples.map((e, i) => <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />{e}</li>)}</ul>
                                </div>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 flex gap-3">
                                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-amber-800 dark:text-amber-200 text-sm">Actionable Advice</h4>
                                    <p className="text-sm text-amber-700 dark:text-amber-300">{evaluation.logic_analysis.next_step_advice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}

                  {/* Language Assessment */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                           <GraduationCap className="w-5 h-5" /> Assessment Report
                        </h3>
                        <div className="px-4 py-1 bg-white dark:bg-slate-900 rounded-full border border-indigo-100 dark:border-indigo-800 shadow-sm">
                           <span className="text-sm font-bold text-slate-500 dark:text-slate-400 mr-2">Band</span>
                           <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">{evaluation.score}</span>
                        </div>
                     </div>
                     <div className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                       <SimpleMarkdownRenderer text={evaluation.feedback} />
                     </div>
                     {evaluation.prosody_markup && <ProsodyVisualizer markup={evaluation.prosody_markup} ipa={evaluation.ipa} />}
                     <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl mt-4">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1 block">Better Version</span>
                        <p className="text-indigo-900 dark:text-indigo-200 italic">"{evaluation.better_version}"</p>
                     </div>
                  </div>

                  {/* Sample Answer & Strategy */}
                  {currentAnswer && (
                     <div className="border-t border-slate-100 dark:border-slate-800 pt-8">
                        <div className="flex items-center justify-between mb-4">
                           <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" /> Model Answer</h3>
                           <button onClick={() => handlePlayAudio(currentAnswer.english_text)} disabled={isAudioLoading} className="text-blue-600 dark:text-blue-400 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                               {isAudioLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Volume2 className="w-5 h-5" />}
                           </button>
                        </div>
                        {generatedAudio && <AudioPlayer audioBuffer={generatedAudio} label="Model Audio" />}
                        <div className="prose prose-slate dark:prose-invert max-w-none mb-6 text-sm">
                           <p className="whitespace-pre-wrap">{currentAnswer.english_text}</p>
                        </div>
                        
                        {/* Strategy Box */}
                        {(currentQuestion.thinking_logic || currentQuestion.key_arguments) && (
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-100 dark:border-amber-800/50 mb-6">
                                <h4 className="font-bold text-amber-700 dark:text-amber-400 text-sm mb-2 flex items-center gap-2"><Brain className="w-4 h-4" /> Examiner's Logic</h4>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{currentQuestion.thinking_logic}</p>
                                <div className="flex flex-wrap gap-2">
                                    {currentQuestion.key_arguments?.map((arg, i) => (
                                        <button key={i} onClick={() => { const v = parseKeyArgument(arg); if(!vocabService.hasCard(v.word)) vocabService.addCard(v); }} className="px-2 py-1 text-xs bg-white dark:bg-slate-800 border rounded hover:border-amber-400 transition-colors">{arg}</button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentAnswer.vocabularies && (
                           <div className="grid sm:grid-cols-2 gap-3">
                              {currentAnswer.vocabularies.map((vocab, idx) => (
                                 <button key={idx} onClick={() => setSelectedVocab(vocab)} className="text-left px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-md transition-all border border-transparent hover:border-slate-200">
                                    <span className="font-bold text-slate-900 dark:text-white block text-sm">{vocab.word}</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 truncate block">{vocab.definition}</span>
                                 </button>
                              ))}
                           </div>
                        )}
                     </div>
                  )}

                  <div className="pt-6 flex justify-end">
                     <button onClick={handleNextQuestion} className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                        {isLastQuestion ? 'Finish Practice' : 'Next Question'} <ArrowRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>
             )}
          </div>
       </div>

       {selectedVocab && <VocabModal vocab={selectedVocab} onClose={() => setSelectedVocab(null)} />}
    </div>
  );
};

// ... App Component ... (No changes needed to App export)
const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TopicListPage />} />
          <Route path="/topic/:id" element={<PracticePage />} />
          <Route path="/expander" element={<QuestionExpanderPage />} />
          <Route path="/criteria" element={<CriteriaPage />} />
          <Route path="/vocabulary" element={<VocabularyPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/progress" element={<div className="p-10 text-center font-bold text-slate-400">Progress Tracking Coming Soon</div>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
