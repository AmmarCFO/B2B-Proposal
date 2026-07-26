import React from 'react';
import { motion } from 'motion/react';
import { Users, Building2, ShieldCheck, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { properties, logoUrl, optionNumbersAr } from '../data';

interface OverviewProps {
  isAr: boolean;
  onSelectProperty: (id: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ isAr, onSelectProperty }) => {
  const langKey = isAr ? 'ar' : 'en';

  const overviewBadges = [
    { icon: Users, text: isAr ? '60–80 معلمًا' : '60–80 Educators' },
    { icon: Building2, text: isAr ? '3 خيارات سكنية' : '3 Housing Options' },
    { icon: ShieldCheck, text: isAr ? 'مُدار باحترافية' : 'Professionally Managed' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-10"
    >
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-3xl bg-white p-3 flex items-center justify-center shadow-2xl border border-[#C89565]/20">
            <img src={logoUrl} alt="Mathwaa Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="inline-block bg-[#B8865F]/10 border border-[#C89565]/30 text-[#8B6F47] text-sm font-semibold px-5 py-2 rounded-full mb-5">
          {isAr ? 'مقدَّم من: مثوى لإدارة العقارات' : 'Prepared by: Mathwaa Property Management'}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
          {isAr ? 'مقترح سكني لمدارس الرياض' : 'Housing Proposal for Riyadh Schools'}
        </h1>

        <p className="text-base sm:text-lg text-[#5d5d5f] leading-relaxed max-w-xl mx-auto mb-6">
          {isAr
            ? 'حلول سكنية متكاملة لنخبة المعلمين — 60 إلى 80 معلمًا. اختر الخيار المناسب للاطلاع على التفاصيل.'
            : 'Premium accommodation solutions for 60–80 distinguished educators. Select an option below to explore the details.'}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-2">
          {overviewBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white border border-[#EDE5DC] px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-[#3d3d3d]"
              >
                <Icon className="w-4 h-4 text-[#B8865F]" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-center text-sm font-semibold text-[#8B6F47] uppercase tracking-widest">
          {isAr ? 'الخيارات المتاحة — انقر للتفاصيل' : 'Available Options — Click to Explore'}
        </p>

        {properties.map((prop, idx) => (
          <motion.button
            key={prop.id}
            onClick={() => onSelectProperty(prop.id)}
            whileHover={{ scale: 1.015, boxShadow: '0 20px 60px rgba(0,0,0,0.09)' }}
            whileTap={{ scale: 0.99 }}
            className="w-full text-start bg-white border border-[#C89565]/20 rounded-3xl overflow-hidden shadow-md flex flex-col sm:flex-row group transition-all cursor-pointer"
          >
            <div className="sm:w-48 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
              <img
                src={prop.images[0]}
                alt={prop.name[langKey]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wide text-[#8B6F47] bg-[#F5EFE7] border border-[#EDE5DC] px-3 py-1 rounded-full">
                  {isAr ? `الخيار ${optionNumbersAr[idx] || idx + 1}` : `Option ${idx + 1}`}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${prop.badgeStyle}`}>
                  {prop.badge[langKey]}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">{prop.name[langKey]}</h2>

              <p className="text-sm text-[#8B6F47] font-medium">{prop.tagline[langKey]}</p>

              <div className="flex items-center gap-4 mt-1">
                <span className="flex items-center gap-1.5 text-xs text-[#5d5d5f]">
                  <MapPin className="w-3.5 h-3.5 text-[#B8865F]" />
                  <span>{prop.location[langKey]}</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#5d5d5f]">
                  <Users className="w-3.5 h-3.5 text-[#B8865F]" />
                  <span>{prop.capacity[langKey]}</span>
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center px-6">
              {isAr ? (
                <ChevronLeft className="w-5 h-5 text-[#C89565] group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ChevronRight className="w-5 h-5 text-[#C89565] group-hover:translate-x-1 transition-transform" />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <p className="text-center text-sm text-[#8B6F47] pb-4">
        {isAr
          ? 'مثوى للنزل السياحية | هذا المستند سري ومخصص لمدارس الرياض فقط'
          : 'Mathwaa Tourist Lodges | This document is confidential and intended for Riyadh Schools only'}
      </p>
    </motion.div>
  );
};
