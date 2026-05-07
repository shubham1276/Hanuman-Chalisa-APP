/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Languages, 
  Moon, 
  Sun, 
  Home as HomeIcon, 
  BookOpen, 
  Hash, 
  Bell,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  Share2,
  Settings
} from 'lucide-react';
import { HANUMAN_CHALISA, Verse } from './constants';

type Tab = 'home' | 'read' | 'counter';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [accessibility, setAccessibility] = useState({
    fontSize: 1, // multiplier
    lineSpacing: 1.5,
    highContrast: false
  });
  const [showSettings, setShowSettings] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('strong');
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const verseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const VOICES = [
    {
      id: 'strong',
      name: 'Strong & Powerful',
      artist: 'Male Voice (Shankar M. Style)',
      url: 'https://ia801309.us.archive.org/28/items/HanumanChalisa_201905/Hanuman%20Chalisa.mp3'
    },
    {
      id: 'melodious',
      name: 'Temple Chanting',
      artist: 'ISKCON Style',
      url: 'https://www.iskconbangalore.org/wp-content/uploads/2016/05/hanuman-chalisa.mp3'
    }
  ];

  const audioUrl = VOICES.find(v => v.id === selectedVoice)?.url || VOICES[0].url;

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCounterClick = () => {
    setCount(prev => (prev + 1) % 109);
    // Add haptic feedback if available
    if (window.navigator?.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('timeupdate', updateTime);
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, []);

  const seekToVerse = (index: number) => {
    if (index >= 0 && index < HANUMAN_CHALISA.length && audioRef.current) {
      const verse = HANUMAN_CHALISA[index];
      audioRef.current.currentTime = verse.startTime || 0;
      setCurrentTime(verse.startTime || 0);
      
      // Smooth scroll to the verse
      verseRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const shareVerse = (verse: Verse) => {
    const text = `जय हनुमान! \n\n${verse.hindi}\n\nMeaning: ${verse.meaning}\n\nShared from Hanuman Chalisa Devotional App`;
    if (navigator.share) {
      navigator.share({
        title: 'Hanuman Chalisa Blessings',
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert("Verse copied to clipboard!");
    }
  };

  const currentVerseIndex = HANUMAN_CHALISA.findIndex((v, i) => {
    const nextV = HANUMAN_CHALISA[i+1];
    return currentTime >= (v.startTime || 0) && (!nextV || currentTime < (nextV.startTime || 0));
  });

  // Auto-scroll to active verse during playback
  useEffect(() => {
    if (activeTab === 'read' && currentVerseIndex !== -1) {
      verseRefs.current[currentVerseIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [currentVerseIndex, activeTab]);

  const getFontSize = (base: number) => `${base * accessibility.fontSize}px`;

  const [dailyVerse, setDailyVerse] = useState<Verse>(HANUMAN_CHALISA[0]);

  useEffect(() => {
    const today = new Date();
    // Unique seed based on date (YYYYMMDD)
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const verseIndex = seed % HANUMAN_CHALISA.length;
    setDailyVerse(HANUMAN_CHALISA[verseIndex]);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#1a0f0a] text-orange-200' : 'bg-bento-bg text-bento-text'} font-sans select-none flex flex-col p-4 md:p-6 lg:p-8 overflow-hidden h-screen`}>
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        muted={isMuted} 
        onEnded={() => setIsPlaying(false)}
      />

      {/* Header - Bento Style */}
      <header className={`mb-6 p-4 md:p-6 rounded-[32px] flex items-center justify-between shadow-lg transition-colors ${isDarkMode ? 'bg-[#2d1a12] border border-orange-900/30' : 'bg-bento-primary text-white'}`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-4xl shadow-inner font-bold ${isDarkMode ? 'bg-orange-900 text-orange-400' : 'bg-white text-bento-primary'}`}>
            ॐ
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-display font-black leading-none tracking-tight">Hanuman Chalisa</h1>
            <p className="text-[10px] md:text-xs font-medium opacity-90 uppercase tracking-widest mt-1">Devotional Daily Prayer</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowSettings(true)}
            className={`p-3 rounded-2xl transition-all active:scale-90 ${isDarkMode ? 'bg-orange-800/40 text-orange-300' : 'bg-white/20 text-white border border-white/30'}`}
          >
            <Settings size={20} />
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-2xl transition-all active:scale-90 ${isDarkMode ? 'bg-orange-800/40 text-orange-300' : 'bg-white/20 text-white border border-white/30'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Settings Modal (Accessibility) */}
      <AnimatePresence>
        {showSettings && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm rounded-[40px] p-8 shadow-2xl relative ${isDarkMode ? 'bg-[#251610] text-orange-200' : 'bg-white text-bento-text'}`}
            >
              <button 
                onClick={() => setShowSettings(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-orange-100"
              >
                ✕
              </button>
              <h3 className="text-2xl font-display font-black text-bento-primary mb-6">Accessibility</h3>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Text Size</span>
                    <span className="text-xs uppercase opacity-60">Comfort Level</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 1.25, 1.5].map((s) => (
                      <button 
                        key={s}
                        onClick={() => setAccessibility(prev => ({ ...prev, fontSize: s }))}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${accessibility.fontSize === s ? 'bg-bento-primary text-white' : 'bg-orange-100/50 text-bento-primary'}`}
                      >
                        {s === 1 ? 'A' : s === 1.25 ? 'A+' : 'A++'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Spacing</span>
                    <span className="text-xs opacity-60">Visual Clarity</span>
                  </div>
                  <div className="flex gap-2">
                    {[1.2, 1.6, 2].map((s) => (
                      <button 
                        key={s}
                        onClick={() => setAccessibility(prev => ({ ...prev, lineSpacing: s }))}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${accessibility.lineSpacing === s ? 'bg-bento-primary text-white' : 'bg-orange-100/50 text-bento-primary'}`}
                      >
                        {s === 1.2 ? 'Tight' : s === 1.6 ? 'Relaxed' : 'Loose'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Chant Voice</span>
                    <span className="text-xs opacity-60">Vibe selector</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {VOICES.map((v) => (
                      <button 
                        key={v.id}
                        onClick={() => {
                          setSelectedVoice(v.id);
                          if (audioRef.current) {
                            audioRef.current.pause();
                            setIsPlaying(false);
                          }
                        }}
                        className={`flex flex-col items-center py-3 rounded-xl font-bold transition-all border-2 ${selectedVoice === v.id ? 'bg-bento-primary text-white border-bento-primary' : 'bg-orange-100/50 text-bento-primary border-transparent'}`}
                      >
                        <span className="text-xs">{v.name}</span>
                        <span className="text-[8px] opacity-70 font-normal uppercase tracking-tighter">{v.artist}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl">
                  <span className="font-bold">High Contrast</span>
                  <button 
                    onClick={() => setAccessibility(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${accessibility.highContrast ? 'bg-bento-primary' : 'bg-gray-300'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${accessibility.highContrast ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setShowSettings(false)}
                className="w-full mt-8 bg-bento-accent text-white py-4 rounded-2xl font-black shadow-lg"
              >
                SAVE & APPLY
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area - Bento Layout */}
      <main className="flex-1 overflow-hidden relative">
        <div className="h-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 md:gap-6">
          
          {/* Main Display Area (Central Bento Card) */}
          <section className={`${activeTab === 'home' ? 'md:col-span-12' : 'md:col-span-8'} md:row-span-5 rounded-[40px] border-4 flex flex-col justify-center shadow-xl relative overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-[#251610] border-orange-900/50' : 'bg-white border-bento-primary'} ${accessibility.highContrast ? 'border-8 border-black grayscale-[0.2]' : ''}`}>
            <AnimatePresence mode="wait">
              {activeTab === 'home' && (
                <motion.div 
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8 flex flex-col items-center justify-center gap-8 h-full"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className={`relative w-48 h-48 rounded-full flex items-center justify-center border-4 ${isDarkMode ? 'border-orange-900/50 bg-[#2d1a12]' : 'border-orange-200 bg-white'} shadow-2xl overflow-hidden`}>
                      <img 
                        src="https://images.unsplash.com/photo-1619946769344-2636b45a2c4e?auto=format&fit=crop&q=80&w=400" 
                        alt="Lord Hanuman" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-bento-primary uppercase tracking-tighter">जय बजरंग बली</h2>
                    <p className={`text-xl font-serif italic ${isDarkMode ? 'text-orange-400/80' : 'text-bento-text/60'}`}>Hail to the Mighty Hanuman</p>
                  </div>

                  {/* Daily Verse Section */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`w-full max-w-lg p-6 rounded-[32px] border-2 transition-colors relative overflow-hidden flex flex-col gap-4 ${
                      isDarkMode ? 'bg-orange-900/10 border-orange-900/30 text-orange-200' : 'bg-white border-bento-primary/30 shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bento-primary">Daily Blessing</span>
                      <div className="flex gap-2">
                        <button onClick={() => shareVerse(dailyVerse)} className="p-2 rounded-lg hover:bg-orange-100"><Share2 size={14} /></button>
                        <span className="text-[10px] opacity-60 uppercase font-bold">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-2xl md:text-3xl font-display font-bold leading-tight text-center italic" style={{ fontSize: getFontSize(28) }}>
                        "{dailyVerse.hindi.split('\n')[0]}..."
                      </p>
                      <p className={`text-sm text-center md:text-base italic leading-relaxed opacity-80 line-clamp-2`} style={{ fontSize: getFontSize(14) }}>
                        {dailyVerse.meaning}
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveTab('read')}
                      className={`mt-2 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${
                        isDarkMode ? 'bg-orange-800/40 text-orange-300' : 'bg-bento-card-bg text-bento-primary'
                      }`}
                    >
                      Read Full Verse <ChevronRight size={14} />
                    </button>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'read' && (
                <motion.div 
                  key="read"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full overflow-y-auto no-scrollbar p-6 md:p-10"
                >
                  <div className="space-y-12 max-w-3xl mx-auto">
                    {HANUMAN_CHALISA.map((verse, index) => (
                      <div 
                        key={verse.id}
                        ref={(el) => (verseRefs.current[index] = el)}
                        className={`transition-all duration-700 text-center space-y-6 scroll-mt-20 ${index === currentVerseIndex ? 'scale-105' : 'opacity-40 grayscale-[0.5]'}`}
                      >
                        <div className="flex flex-col items-center gap-4">
                          <div className="flex items-center gap-4">
                            <button onClick={() => shareVerse(verse)} className="p-2 rounded-xl bg-orange-100/50 text-bento-primary"><Share2 size={16} /></button>
                            <span className={`px-4 py-1 rounded-full text-xs font-bold ${index === currentVerseIndex ? 'bg-bento-primary text-white' : 'bg-bento-card-bg text-bento-primary'}`}>
                              {verse.id <= 2 ? 'DOHA' : verse.id === 43 ? 'DOHA' : 'CHAUPAI'} {String(verse.id).padStart(2, '0')}
                            </span>
                          </div>
                          <h2 
                            className={`leading-tight font-display font-bold tracking-tight whitespace-pre-wrap ${isDarkMode ? 'text-orange-200' : 'text-bento-accent'}`}
                            style={{ fontSize: getFontSize(32), lineHeight: accessibility.lineSpacing }}
                          >
                            {verse.hindi}
                          </h2>
                        </div>
                        {showEnglish && (
                          <div className={`space-y-4 pt-6 border-t ${isDarkMode ? 'border-orange-900/30' : 'border-bento-card-bg'}`}>
                            <p className="italic opacity-90" style={{ fontSize: getFontSize(20) }}>{verse.english}</p>
                            <p className="leading-relaxed font-serif opacity-75" style={{ fontSize: getFontSize(18) }}>{verse.meaning}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Manual Navigation Controls */}
                  <div className="fixed bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/30 backdrop-blur-md p-2 rounded-3xl border border-white/30 shadow-xl z-30">
                    <button 
                      onClick={() => setShowEnglish(!showEnglish)}
                      className={`p-3 rounded-2xl transition-all active:scale-90 ${showEnglish ? (isDarkMode ? 'bg-orange-600 text-white' : 'bg-bento-primary text-white') : (isDarkMode ? 'bg-orange-900/50 text-orange-400' : 'bg-white/50 text-bento-primary')}`}
                      title={showEnglish ? "Hide English" : "Show English"}
                    >
                      <Languages size={20} />
                    </button>
                    <div className="w-px h-8 bg-white/20 mx-1" />
                    <button 
                      onClick={() => seekToVerse(currentVerseIndex - 1)}
                      className="p-3 bg-bento-accent text-white rounded-2xl active:scale-90 transition-transform disabled:opacity-30"
                      disabled={currentVerseIndex <= 0}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className={`px-4 font-black text-sm rounded-xl py-2 ${isDarkMode ? 'bg-orange-900 text-orange-200' : 'bg-white text-bento-primary'}`}>
                       {currentVerseIndex + 1} / {HANUMAN_CHALISA.length}
                    </span>
                    <button 
                      onClick={() => seekToVerse(currentVerseIndex + 1)}
                      className="p-3 bg-bento-accent text-white rounded-2xl active:scale-90 transition-transform disabled:opacity-30"
                      disabled={currentVerseIndex >= HANUMAN_CHALISA.length - 1}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'counter' && (
                <motion.div 
                  key="counter-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 flex flex-col items-center justify-center gap-8 h-full"
                >
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-black text-bento-primary">Japa Session</h2>
                  </div>
                  <div className="relative">
                    <svg className="w-64 h-64 -rotate-90">
                      <circle cx="128" cy="128" r="110" fill="transparent" stroke={isDarkMode ? "#2d1a12" : "#fef3c7"} strokeWidth="12" />
                      <motion.circle
                        cx="128"
                        cy="128"
                        r="110"
                        fill="transparent"
                        stroke="#f97316"
                        strokeWidth="12"
                        strokeDasharray={2 * Math.PI * 110}
                        animate={{ strokeDashoffset: (2 * Math.PI * 110) * (1 - count / 108) }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-display font-black text-bento-primary">{count}</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleCounterClick}
                    className="bg-bento-primary hover:bg-orange-600 text-white px-10 py-5 rounded-3xl text-2xl font-black shadow-xl active:scale-95 transition-all"
                  >
                    TAP TO JAPA
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Side Bento Panels - Responsive Hide/Show */}
          {activeTab !== 'home' && (
            <>
              {/* Stats Card */}
              <section className="hidden md:flex md:col-span-4 md:row-span-3 bg-bento-accent rounded-[40px] text-white p-8 flex-col items-center justify-between shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl">ॐ</div>
                <div className="text-center">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-60">Total Japa</span>
                  <div className="text-8xl font-display font-black my-2">{count}</div>
                  <span className="text-sm italic opacity-80">{108 - count} beads remaining</span>
                </div>
                <div className="w-full flex justify-center gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < Math.floor(count / 22) ? 'bg-bento-primary' : 'bg-white/20'}`} />
                  ))}
                </div>
                <button 
                  onClick={resetCounter}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl text-sm font-bold transition-colors border border-white/20"
                >
                  RESET SESSION
                </button>
              </section>

              {/* Translation Toggle / Info Card */}
              <section className={`hidden md:flex md:col-span-4 md:row-span-2 rounded-[40px] p-8 flex-col justify-between shadow-inner border-2 ${isDarkMode ? 'bg-[#2d1a12] border-orange-900/50' : 'bg-[#F5E6D3] border-[#D4C3A3]'}`}>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-black uppercase tracking-tight leading-none">English<br/>Translation</h3>
                  <button 
                    onClick={() => setShowEnglish(!showEnglish)}
                    className={`w-14 h-7 rounded-full relative transition-colors ${showEnglish ? 'bg-bento-primary' : 'bg-gray-400'}`}
                  >
                    <motion.div 
                      className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ left: showEnglish ? '32px' : '4px' }}
                    />
                  </button>
                </div>
                <p className="text-sm opacity-70">View literal and spiritual interpretations of every chaupai for deeper daily contemplation.</p>
              </section>
            </>
          )}

          {/* Bottom Audio Controls - Slab Bento */}
          <section className="col-span-12 row-span-1 bg-white dark:bg-[#2d1a12] rounded-[32px] md:rounded-[40px] border-2 border-bento-primary/20 px-6 md:px-10 flex items-center gap-4 md:gap-8 shadow-md">
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={toggleAudio}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-bento-accent text-white flex items-center justify-center text-xl md:text-2xl shadow-lg active:scale-90 transition-transform"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="translate-x-1" />}
              </button>
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <div className="flex justify-between text-[10px] md:text-xs font-bold text-bento-accent dark:text-orange-400">
                <span>{Math.floor(currentTime)}s</span>
                <span>{Math.floor(audioRef.current?.duration || 0)}s</span>
              </div>
              <div className="w-full h-2 md:h-3 bg-bento-card-bg dark:bg-orange-900/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-bento-primary" 
                  animate={{ width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%` }}
                />
              </div>
            </div>
              <div className="hidden sm:flex items-center gap-6">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-bento-primary">Chanting</p>
                  <p className="font-bold text-xs md:text-sm">{VOICES.find(v => v.id === selectedVoice)?.name}</p>
                </div>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${isMuted ? 'bg-orange-100 text-orange-500' : 'bg-bento-card-bg text-bento-primary'}`}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Navigation Bar - Fixed */}
      <nav className={`mt-6 h-20 md:h-24 rounded-[32px] flex items-center px-4 md:px-8 shadow-lg transition-colors ${isDarkMode ? 'bg-[#1a0f0a] border border-orange-900/30' : 'bg-white border border-orange-100'}`}>
        <div className="max-w-md mx-auto w-full flex justify-between items-center gap-2">
          <NavItem icon={<HomeIcon size={24} />} label="Home" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} isDarkMode={isDarkMode} />
          <NavItem icon={<BookOpen size={24} />} label="Reading" isActive={activeTab === 'read'} onClick={() => setActiveTab('read')} isDarkMode={isDarkMode} />
          <NavItem icon={<Hash size={24} />} label="Counter" isActive={activeTab === 'counter'} onClick={() => setActiveTab('counter')} isDarkMode={isDarkMode} />
        </div>
      </nav>

      {/* Decorative Ornaments */}
      <div className="fixed top-0 left-0 p-2 opacity-10 pointer-events-none text-orange-500 z-50">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="fixed top-0 right-0 p-2 opacity-10 pointer-events-none text-orange-500 rotate-90 z-50">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick, isDarkMode }: { 
  icon: React.ReactNode, 
  label: string, 
  isActive: boolean, 
  onClick: () => void,
  isDarkMode: boolean
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all ${
        isActive 
          ? 'text-orange-500 scale-110' 
          : isDarkMode ? 'text-orange-200/40 hover:text-orange-200' : 'text-orange-950/40 hover:text-orange-900'
      }`}
    >
      <div className={`mb-1 transition-transform ${isActive ? 'translate-y-[-2px]' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
      {isActive && (
        <motion.div 
          layoutId="nav-indicator"
          className="h-1 w-4 bg-orange-500 rounded-full mt-1"
        />
      )}
    </button>
  );
}

