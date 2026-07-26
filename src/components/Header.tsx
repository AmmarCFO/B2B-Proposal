import React from 'react';
import { motion } from 'motion/react';
import { Globe, Presentation, Calculator, Building2, Printer } from 'lucide-react';
import { logoUrl, proposalMeta } from '../data';

export type ViewMode = 'deck' | 'calculator' | 'profile';

interface HeaderProps {
  isAr: boolean;
  setIsAr: React.Dispatch<React.SetStateAction<boolean>>;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAr,
  setIsAr,
  viewMode,
  setViewMode
}) => {
  const clientName = proposalMeta.clientName[isAr ? 'ar' : 'en'];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EDE5DC] transition-all print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Logo & Client Info */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setViewMode('deck')}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F2] p-1.5 flex items-center justify-center border border-[#EDE5DC] shadow-xs group-hover:border-[#C89565]/50 transition">
            <img src={logoUrl} alt="Mathwaa Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg text-[#1d1d1f] tracking-tight">
                {isAr ? 'مثوى' : 'Mathwaa'}
              </span>
              <span className="text-[10px] sm:text-xs bg-[#B8865F]/15 border border-[#C89565]/30 text-[#8B6F47] px-2.5 py-0.5 rounded-full font-bold">
                {clientName}
              </span>
            </div>
            <p className="text-[11px] text-[#8B6F47] hidden sm:block font-medium">
              {isAr ? 'عرض إيجار سكن الموظفين المعروض' : 'B2B Executive Proposal Deck'}
            </p>
          </div>
        </motion.div>

        {/* View Mode Nav Tabs (Desktop) */}
        <div className="hidden md:flex items-center bg-[#FAF7F2] p-1 rounded-2xl border border-[#EDE5DC] relative">
          <button
            onClick={() => setViewMode('deck')}
            className={`relative z-10 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-colors duration-200 ${
              viewMode === 'deck'
                ? 'text-[#1d1d1f]'
                : 'text-[#8B6F47] hover:text-[#1d1d1f]'
            }`}
          >
            {viewMode === 'deck' && (
              <motion.div
                layoutId="activeTabHeader"
                className="absolute inset-0 bg-white rounded-xl border border-[#EDE5DC] shadow-xs -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Presentation className="w-3.5 h-3.5 text-[#B8865F]" />
            <span>{isAr ? 'العرض التقديمي التنفيذي' : 'Executive Deck'}</span>
          </button>

          <button
            onClick={() => setViewMode('calculator')}
            className={`relative z-10 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-colors duration-200 ${
              viewMode === 'calculator'
                ? 'text-[#1d1d1f]'
                : 'text-[#8B6F47] hover:text-[#1d1d1f]'
            }`}
          >
            {viewMode === 'calculator' && (
              <motion.div
                layoutId="activeTabHeader"
                className="absolute inset-0 bg-white rounded-xl border border-[#EDE5DC] shadow-xs -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Calculator className="w-3.5 h-3.5 text-[#B8865F]" />
            <span>{isAr ? 'حاسبة الميزانية' : 'Budget Calculator'}</span>
          </button>

          <button
            onClick={() => setViewMode('profile')}
            className={`relative z-10 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-colors duration-200 ${
              viewMode === 'profile'
                ? 'text-[#1d1d1f]'
                : 'text-[#8B6F47] hover:text-[#1d1d1f]'
            }`}
          >
            {viewMode === 'profile' && (
              <motion.div
                layoutId="activeTabHeader"
                className="absolute inset-0 bg-white rounded-xl border border-[#EDE5DC] shadow-xs -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Building2 className="w-3.5 h-3.5 text-[#B8865F]" />
            <span>{isAr ? 'ملف الشركة' : 'Company Profile'}</span>
          </button>
        </div>

        {/* Actions (Print PDF & Lang) */}
        <div className="flex items-center gap-2">
          {viewMode === 'deck' && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => window.print()}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#1d1d1f] hover:bg-[#2d2d2f] px-4 py-2 rounded-xl transition shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#C89565]" />
              <span className="hidden sm:inline">{isAr ? 'طباعة / تصدير PDF' : 'Print / Save PDF'}</span>
              <span className="sm:hidden">PDF</span>
            </motion.button>
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAr(!isAr)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1d1d1f] bg-white hover:bg-[#FAF7F2] border border-[#EDE5DC] px-3.5 py-2 rounded-xl shadow-xs transition"
            title={isAr ? 'Switch to English' : 'التحويل للعربية'}
          >
            <Globe className="w-4 h-4 text-[#B8865F]" />
            <span>{isAr ? 'English' : 'عربي'}</span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Sub Nav bar with smooth spring pill movement */}
      <div className="flex md:hidden overflow-x-auto px-4 py-2 bg-[#FAF7F2] border-t border-[#EDE5DC] gap-2 scrollbar-none justify-center relative">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => setViewMode('deck')}
          className={`relative z-10 flex-shrink-0 text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors ${
            viewMode === 'deck' ? 'text-white' : 'text-[#8B6F47] bg-white border border-[#EDE5DC]'
          }`}
        >
          {viewMode === 'deck' && (
            <motion.div
              layoutId="mobileActiveTab"
              className="absolute inset-0 bg-[#B8865F] rounded-xl -z-10 shadow-xs"
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            />
          )}
          {isAr ? 'العرض التقديمي' : 'Proposal Deck'}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => setViewMode('calculator')}
          className={`relative z-10 flex-shrink-0 text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors ${
            viewMode === 'calculator' ? 'text-white' : 'text-[#8B6F47] bg-white border border-[#EDE5DC]'
          }`}
        >
          {viewMode === 'calculator' && (
            <motion.div
              layoutId="mobileActiveTab"
              className="absolute inset-0 bg-[#B8865F] rounded-xl -z-10 shadow-xs"
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            />
          )}
          {isAr ? 'حاسبة الميزانية' : 'Calculator'}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => setViewMode('profile')}
          className={`relative z-10 flex-shrink-0 text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors ${
            viewMode === 'profile' ? 'text-white' : 'text-[#8B6F47] bg-white border border-[#EDE5DC]'
          }`}
        >
          {viewMode === 'profile' && (
            <motion.div
              layoutId="mobileActiveTab"
              className="absolute inset-0 bg-[#B8865F] rounded-xl -z-10 shadow-xs"
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            />
          )}
          {isAr ? 'عن الشركة' : 'Company Profile'}
        </motion.button>
      </div>
    </header>
  );
};
