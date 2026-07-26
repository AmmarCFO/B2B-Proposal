import React from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Building2,
  Users,
  ShieldCheck,
  Award,
  Crown,
  Venus,
  Home,
  CheckCircle2,
  Globe,
  Wifi,
  Key,
  Flame,
  HeartHandshake,
  Heart,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import {
  logoUrl,
  mathwaaBrandInfo,
  mathwaaPdfStats,
  oasisModels,
  servicePillarsData,
  riyadhDistrictsCoverage,
  mathwaaPartnersList,
  mathwaaTeamQuote
} from '../data';

interface CompanyProfileProps {
  isAr: boolean;
}

export const CompanyProfile: React.FC<CompanyProfileProps> = ({ isAr }) => {
  const langKey = isAr ? 'ar' : 'en';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-12 font-['Cairo',sans-serif]"
    >
      {/* ==========================================
          1. HERO HEADER & BRAND SLOGAN
          ========================================== */}
      <div className="bg-white rounded-3xl border border-[#EDE5DC] shadow-sm p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8865F]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B6F47]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        {/* Brand Logo & Edition Pill */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-20 h-20 rounded-2xl bg-[#FAF7F2] p-3 border border-[#EDE5DC] flex items-center justify-center shadow-xs">
            <img src={logoUrl} alt="Mathwaa Logo" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex items-center gap-2 bg-[#B8865F]/10 border border-[#C89565]/30 text-[#8B6F47] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#B8865F]" />
            <span>{isAr ? mathwaaBrandInfo.versionAr : mathwaaBrandInfo.version}</span>
          </div>
        </div>

        {/* Title & Brand Slogan */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-[#1d1d1f] tracking-tight">
            {isAr ? 'مؤسسة مثوى للنزل السياحية والعقارات' : 'Mathwaa Hospitality & Real Estate'}
          </h1>
          <div className="text-xl sm:text-2xl font-black text-[#B8865F] tracking-tight">
            "{isAr ? mathwaaBrandInfo.slogan.ar : mathwaaBrandInfo.slogan.en}"
          </div>
          <p className="text-sm sm:text-base text-[#5d5d5f] leading-relaxed pt-2">
            {isAr
              ? 'نبتكر النماذج السكنية بما يلبي حاجات كل منتقل للرياض وساعياً لعمل أو علم. نسعى للريادة في قطاع الضيافة والتسكين للمؤسسات والشركات عبر تحويل الوحدات السكنية إلى واحات متكاملة ورائعة.'
              : 'Pioneering corporate housing models in Riyadh tailored for professionals, students, and executive teams. Turning residential units into fully integrated oases of comfort and security.'}
          </p>
        </div>

        {/* Quick Location & HQ Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B6F47] bg-[#FAF7F2] px-4 py-2 rounded-xl border border-[#EDE5DC]">
          <MapPin className="w-4 h-4 text-[#B8865F]" />
          <span>{isAr ? mathwaaBrandInfo.hqAddress.ar : mathwaaBrandInfo.hqAddress.en}</span>
        </div>
      </div>

      {/* ==========================================
          2. OFFICIAL 2025 PERFORMANCE METRICS
          ========================================== */}
      <div className="space-y-4">
        <div className="text-center">
          <span className="text-xs font-bold text-[#B8865F] uppercase tracking-wider">
            {isAr ? 'أرقام واحاتنا 2025' : 'OUR 2025 PERFORMANCE IN NUMBERS'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
            {isAr ? 'حجم المحفظة العقارية والانتشار' : 'Our Real Estate Portfolio & Track Record'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mathwaaPdfStats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE5DC] shadow-xs text-center space-y-2 hover:border-[#C89565]/40 transition group"
            >
              <span className="text-4xl sm:text-5xl font-black text-[#B8865F] block group-hover:scale-105 transition duration-300">
                {st.number}
              </span>
              <h3 className="text-base font-extrabold text-[#1d1d1f]">
                {isAr ? st.labelAr : st.labelEn}
              </h3>
              <p className="text-xs text-[#8B6F47] font-semibold">
                {isAr ? st.subAr : st.subEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          3. THE "OASIS" CONCEPT & 3 SPECIALIZED HOUSING MODELS
          ========================================== */}
      <div className="bg-white rounded-3xl border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm">
        <div className="space-y-3 border-b border-[#EDE5DC] pb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8865F]"></span>
            <span className="text-xs font-bold text-[#B8865F] uppercase tracking-wider">
              {isAr ? 'فلسفة النماذج السكنية' : 'HOUSING MODEL PHILOSOPHY'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
            {isAr ? 'مسمى "الواحة" والحلول السكنية المبتكرة' : 'The "Oasis" Concept & Specialized Housing Models'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5d5d5f] leading-relaxed">
            {isAr
              ? 'نطلق على كل نموذج سكني لدينا مسمى "واحة"، قياساً على تكامل الخدمات في الواحة الطبيعية وتجانس نباتها، واحتوائها لمختلف أبعادها بسور خضري دائري يحمي داخلها ويمدّه بالحاجة والراحة.'
              : 'Every housing complex at Mathwaa is styled as an "Oasis". Inspired by natural desert oases that offer self-sustaining harmony, protective perimeter security, and all essentials for complete peace of mind.'}
          </p>
        </div>

        {/* 3 Oasis Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oasisModels.map((m) => {
            const Icon = m.id === 'executive' ? Crown : m.id === 'women' ? Venus : Home;
            return (
              <div
                key={m.id}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EDE5DC] flex flex-col justify-between space-y-4 hover:shadow-md transition duration-300 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#EDE5DC] flex items-center justify-center text-[#B8865F] shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-[#B8865F]/15 text-[#8B6F47] px-2.5 py-1 rounded-full border border-[#C89565]/30">
                      {m.badge[langKey]}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#1d1d1f]">{m.title[langKey]}</h3>
                  <p className="text-xs font-bold text-[#8B6F47]">{m.target[langKey]}</p>
                  <p className="text-xs text-[#5d5d5f] leading-relaxed pt-1">{m.desc[langKey]}</p>
                </div>

                <div className="pt-3 border-t border-[#EDE5DC] flex items-center gap-1.5 text-[11px] font-bold text-[#B8865F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isAr ? 'إدارة وفندقة شاملة 100%' : '100% Fully Managed'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==========================================
          4. THREE-TIER SERVICE INFRASTRUCTURE
          ========================================== */}
      <div className="bg-[#1d1d1f] text-white rounded-3xl p-6 sm:p-12 space-y-8 shadow-xl border border-[#C89565]/30">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <span className="text-xs font-bold text-[#C89565] uppercase tracking-wider block">
            {isAr ? 'منظومة الخدمات والتشغيل' : 'SERVICE INFRASTRUCTURE & SLA'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">
            {isAr ? 'خدماتنا الأساسية والمتكاملة لقطاع الأعمال' : '360° Corporate Service Capabilities'}
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            {isAr
              ? 'نصوغ كافة التفاصيل التشغيلية بما يتناسب مع كل فئة من شركائنا لتقديم أرقى المعايير الفندقية.'
              : 'We fine-tune operational workflows to deliver hospitality-grade reliability across every property.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicePillarsData.map((pillar, pIdx) => (
            <div key={pIdx} className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-[#C89565] font-bold text-sm border-b border-white/10 pb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>{pillar.category[langKey]}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-white/90">
                {pillar.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89565] shrink-0 mt-0.5" />
                    <span>{item[langKey]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          5. GEOGRAPHIC COVERAGE IN RIYADH (14 DISTRICTS)
          ========================================== */}
      <div className="bg-white rounded-3xl border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm">
        <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#EDE5DC] pb-5">
          <div>
            <span className="text-xs font-bold text-[#B8865F] uppercase tracking-wider block mb-1">
              {isAr ? 'التغطية الجغرافية بمدينة الرياض' : 'RIYADH GEOGRAPHIC COVERAGE'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
              {isAr ? 'انتشار واحاتنا في 14 حياً استراتيجياً' : 'Presence Across 14 Prime Riyadh Districts'}
            </h2>
          </div>
          <span className="bg-[#FAF7F2] border border-[#EDE5DC] text-[#8B6F47] px-4 py-2 rounded-2xl text-xs font-bold">
            {isAr ? '14 حياً سكنياً بمدينة الرياض' : '14 Key Districts in Riyadh'}
          </span>
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {riyadhDistrictsCoverage.map((dist, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition text-start flex items-center gap-3 ${
                dist.isHq
                  ? 'bg-[#B8865F] text-white border-[#B8865F] font-bold shadow-xs'
                  : dist.isFeatured
                  ? 'bg-amber-50 border-amber-300 text-[#8B6F47] font-bold'
                  : 'bg-[#FAF7F2] border-[#EDE5DC] text-[#1d1d1f] hover:border-[#C89565]/40'
              }`}
            >
              <MapPin className={`w-4 h-4 shrink-0 ${dist.isHq ? 'text-white' : 'text-[#B8865F]'}`} />
              <div>
                <span className="text-xs sm:text-sm font-bold block">{dist[langKey]}</span>
                {dist.isHq && (
                  <span className="text-[10px] opacity-90 block">{isAr ? 'المقر الرئيسي' : 'Head Office'}</span>
                )}
                {dist.isFeatured && (
                  <span className="text-[10px] text-[#8B6F47] block">{isAr ? 'موقع العرض الحالي' : 'Current Quotation Site'}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          6. OUR TEAM VISION (فريقنا - Slide 8)
          ========================================== */}
      <div className="bg-gradient-to-r from-[#FAF7F2] via-white to-[#F5EFE7] rounded-3xl border-2 border-[#C89565]/30 p-8 sm:p-12 space-y-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-white border border-[#EDE5DC] flex items-center justify-center text-[#B8865F] mx-auto shadow-xs">
          <Users className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider block">
          {isAr ? 'فريق عمل مثوى' : 'MATHWAA TEAM VISION'}
        </span>
        <blockquote className="text-lg sm:text-2xl font-black text-[#1d1d1f] max-w-3xl mx-auto leading-relaxed">
          "{mathwaaTeamQuote[langKey]}"
        </blockquote>
      </div>

      {/* ==========================================
          7. INSTITUTIONAL PARTNERS (شركاؤنا - Slide 9)
          ========================================== */}
      <div className="bg-white rounded-3xl border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm">
        <div className="text-center space-y-2 border-b border-[#EDE5DC] pb-6">
          <span className="text-xs font-bold text-[#B8865F] uppercase tracking-wider">
            {isAr ? 'شركاء النجاح والثقة' : 'OUR ENTERPRISE PARTNERS'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
            {isAr ? 'شركاؤنا من القطاعات الحكومية والطبية والتعليمية' : 'Trusted by Leading Healthcare, Academic & Enterprise Entities'}
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mathwaaPartnersList.map((partner, pIdx) => (
            <div
              key={pIdx}
              className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EDE5DC] flex items-center gap-3 hover:border-[#C89565]/40 transition group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#EDE5DC] flex items-center justify-center text-[#B8865F] shrink-0 font-bold text-xs shadow-2xs group-hover:bg-[#B8865F] group-hover:text-white transition">
                0{pIdx + 1}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1d1d1f]">
                {partner[langKey]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          8. CONTACT & HEADQUARTERS FOOTER
          ========================================== */}
      <div className="bg-[#1d1d1f] text-white rounded-3xl p-8 sm:p-12 space-y-6 text-center border border-[#C89565]/30 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          {isAr ? 'تواصل مع إدارة العلاقات والحلول المؤسسية' : 'Contact Mathwaa Enterprise Accounts'}
        </h2>
        <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto">
          {isAr
            ? 'مقرنا الرئيسي بمدينة الرياض (حي الصحافة). فريقنا جاهز لتنسيق الاجتماعات والجولات الميدانية لاستعراض وحدات سكن الموظفين.'
            : 'Headquartered in Riyadh (Al Sahafah District). Our corporate team is ready to host property tours and detail lease packages.'}
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-2">
          <a
            href={`tel:${mathwaaBrandInfo.phoneDirect}`}
            className="flex items-center gap-2 bg-[#B8865F] hover:bg-[#a6754f] px-6 py-3 rounded-2xl text-white text-sm font-bold transition shadow-xs"
          >
            <Phone className="w-4 h-4 text-white" />
            <span dir="ltr">{mathwaaBrandInfo.phoneDirect}</span>
          </a>

          <a
            href={`tel:${mathwaaBrandInfo.phoneTollFree}`}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-2xl text-white text-sm font-bold transition"
          >
            <Phone className="w-4 h-4 text-[#C89565]" />
            <span dir="ltr">{mathwaaBrandInfo.phoneTollFree}</span>
          </a>

          <a
            href={`mailto:${mathwaaBrandInfo.email}`}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-2xl text-white text-sm font-bold transition"
          >
            <Mail className="w-4 h-4 text-[#C89565]" />
            <span>{mathwaaBrandInfo.email}</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-white/50 flex flex-wrap justify-between items-center gap-2">
          <span>{isAr ? 'مؤسسة مثوى للنزل السياحية والعقارات © 2025' : 'Mathwaa Hospitality & Real Estate Establishment © 2025'}</span>
          <span>{isAr ? 'حي الصحافة، الرياض، المملكة العربية السعودية' : 'Al Sahafah, Riyadh, KSA'}</span>
        </div>
      </div>
    </motion.div>
  );
};
