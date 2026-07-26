import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header, ViewMode } from './components/Header';
import { PresentationDeck } from './components/PresentationDeck';
import { BudgetCalculator } from './components/BudgetCalculator';
import { CompanyProfile } from './components/CompanyProfile';

export default function App() {
  const [isAr, setIsAr] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<ViewMode>('deck');

  useEffect(() => {
    document.title = isAr
      ? 'مثوى: مقترح حلول السكن المؤسسي'
      : 'Mathwaa: Corporate Housing Proposal';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = isAr ? 'ar' : 'en';
  }, [isAr]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1d1d1f] font-['Cairo',sans-serif] selection:bg-[#B8865F]/20 selection:text-[#8B6F47]">
      <Header
        isAr={isAr}
        setIsAr={setIsAr}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <main className="pb-16">
        <AnimatePresence mode="wait">
          {viewMode === 'deck' ? (
            <PresentationDeck
              key="deck"
              isAr={isAr}
              setIsAr={setIsAr}
              setViewMode={setViewMode}
            />
          ) : viewMode === 'calculator' ? (
            <BudgetCalculator
              key="calculator"
              isAr={isAr}
            />
          ) : (
            <CompanyProfile
              key="profile"
              isAr={isAr}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
