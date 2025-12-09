
import React, { useEffect, useState } from 'react';
import { BookOpen, BarChart2, Menu, Mic, Library, GraduationCap, Moon, Sun, Scale, Settings, Wand2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navItems = [
    { path: '/', label: 'Practice Topics', icon: <BookOpen className="w-5 h-5" /> },
    { path: '/expander', label: 'AI Question Expander', icon: <Wand2 className="w-5 h-5" /> },
    { path: '/criteria', label: 'Scoring Criteria', icon: <Scale className="w-5 h-5" /> },
    { path: '/vocabulary', label: 'Vocabulary Deck', icon: <Library className="w-5 h-5" /> },
    { path: '/progress', label: 'My Progress', icon: <BarChart2 className="w-5 h-5" /> },
    { path: '/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-900 dark:selection:text-blue-300 transition-colors duration-300">
      {/* Mobile Header */}
      <div className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 text-lg">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
             <Mic className="w-5 h-5" />
          </div>
          <span>IELTS Prep.AI</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg active:scale-95 transition-transform text-slate-600 dark:text-slate-400">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col shadow-2xl md:shadow-none
        md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 border-b border-slate-50 dark:border-slate-800 hidden md:flex items-center gap-3">
           <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
             <Mic className="w-6 h-6" />
           </div>
           <div>
             <h1 className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Prep.AI</h1>
             <p className="text-xs text-slate-400 font-medium tracking-wider">IELTS SPEAKING</p>
           </div>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 mt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-sm ring-1 ring-blue-200 dark:ring-blue-800' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className={`transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                  {item.icon}
                </span>
                {item.label}
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4">
          <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <GraduationCap className="w-16 h-16 transform rotate-12" />
            </div>
            <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Pro Tip</p>
            <p className="text-sm font-medium leading-relaxed opacity-90 relative z-10">
              Speak clearly and naturally. Fluency matters more than complex vocabulary.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 text-xs font-medium">
             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
             Powered by Gemini 2.5
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen relative scroll-smooth bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-50 dark:bg-blue-900/10 blur-3xl opacity-60"></div>
            <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-50 dark:bg-cyan-900/10 blur-3xl opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto p-4 md:p-8 lg:p-12 text-slate-900 dark:text-slate-100">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
