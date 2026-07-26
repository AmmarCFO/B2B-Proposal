import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Building2,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  Clock,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Camera,
  FileText,
  UserCheck,
  ArrowUpRight,
  Globe
} from 'lucide-react';
import { properties, proposalMeta, logoUrl, whyMathwaaAr, whyMathwaaEn } from '../data';
import { Property } from '../types';
import { ViewMode } from './Header';
import { MediaModal } from './MediaModal';

interface PresentationDeckProps {
  isAr: boolean;
  setIsAr?: (val: boolean) => void;
  setViewMode?: (mode: ViewMode) => void;
}

export const PresentationDeck: React.FC<PresentationDeckProps> = ({
  isAr,
  setIsAr,
  setViewMode
}) => {
  const [selectedPropertyForMedia, setSelectedPropertyForMedia] = useState<Property | null>(null);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState<boolean>(false);

  const langKey = isAr ? 'ar' : 'en';

  const handleOpenMedia = (property: Property) => {
    setSelectedPropertyForMedia(property);
    setIsMediaModalOpen(true);
  };

  const handleGoToProfile = (targetLang?: 'ar' | 'en') => {
    if (targetLang && setIsAr) {
      setIsAr(targetLang === 'ar');
    }
    if (setViewMode) {
      setViewMode('profile');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1d1d1f] font-['Cairo',sans-serif] selection:bg-[#B8865F]/20 selection:text-[#8B6F47] pb-20">
      
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#EDE5DC] px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between text-xs sm:text-sm shadow-xs print:hidden">
        <div className="flex items-center gap-2.5 text-[#8B6F47] font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8865F] animate-pulse"></span>
          <span>
            {isAr
              ? 'نموذج عرض سعر وعرض تقديمي مؤسسي جاهز للتصدير (Corporate Proposal Deck)'
              : 'Mathwaa B2B Corporate Quotation Deck'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition active:scale-95"
          >
            <Printer className="w-3.5 h-3.5 text-[#C89565]" />
            <span>{isAr ? 'طباعة الوثيقة / حفظ PDF' : 'Print / Save PDF'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-12">
        
        {/* ==========================================
            SLIDE 1: Cover Page with Client Logo & Mathwaa Intro
            ========================================== */}
        <div className="rounded-3xl bg-white border border-[#EDE5DC] shadow-sm p-6 sm:p-12 min-h-[640px] flex flex-col justify-between relative overflow-hidden print:min-h-[96vh] print:break-after-page print:shadow-none print:border-gray-200">
          
          {/* Subtle Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8865F]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* Header Row: Mathwaa Logo + Prepared For Client Logo & Name */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-[#EDE5DC] pb-6">
            
            {/* Lessor Brand: Mathwaa */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] p-2.5 border border-[#EDE5DC] flex items-center justify-center shadow-xs">
                <img src={logoUrl} alt="Mathwaa Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-black text-[#1d1d1f] tracking-tight block">
                  {isAr ? 'مثوى' : 'MATHWAA'}
                </span>
                <span className="text-xs text-[#8B6F47] font-semibold block pt-0.5">
                  {proposalMeta.preparedBy[langKey]}
                </span>
              </div>
            </div>

            {/* Recipient Client Badge with Logo */}
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EDE5DC] flex items-center gap-3 self-stretch sm:self-auto">
              {proposalMeta.clientLogoUrl && (
                <div className="w-12 h-12 rounded-xl bg-white p-1.5 border border-[#EDE5DC] flex items-center justify-center shadow-2xs">
                  <img
                    src={proposalMeta.clientLogoUrl}
                    alt="Client Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              )}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8B6F47] font-bold block">
                  {isAr ? 'مُعد خصيصاً إلى:' : 'PREPARED EXCLUSIVELY FOR:'}
                </span>
                <span className="text-sm font-black text-[#1d1d1f]">
                  {proposalMeta.clientName[langKey]}
                </span>
              </div>
            </div>
          </div>

          {/* Main Title & Proposal Hero Banner */}
          <div className="my-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#B8865F]/10 border border-[#C89565]/30 text-[#8B6F47] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-[#B8865F]" />
              <span>{isAr ? 'عرض سعر إيجار سكن الموظفين' : 'OFFICIAL B2B CORPORATE HOUSING PROPOSAL'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight tracking-tight">
              {proposalMeta.title[langKey]}
            </h1>

            <p className="text-base sm:text-lg text-[#5d5d5f] max-w-3xl leading-relaxed">
              {isAr
                ? 'عرض سعر شامل وتنافسي موجه لتأمين 45 وحدة سكنية مجهزة بالكامل في شمال الرياض (حي الملقا وحي العقيق)، متضمنة الإدارة الفندقية الكاملة، صيانة وتدبير منزلي أسبوعي لتوفير أرقى بيئة معيشية لمنتسبيكم.'
                : 'A comprehensive B2B quotation for 45 fully equipped units in prime North Riyadh (Al Malqa & Al Aqiq), backed by 100% turnkey hospitality management, housekeeping, and round-the-clock maintenance.'}
            </p>
          </div>

          {/* Brief Introduction to Mathwaa (Muthwa) with Clickable Links */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#C89565]/30 space-y-4 my-2 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EDE5DC] pb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#B8865F]" />
                <h3 className="font-extrabold text-sm sm:text-base text-[#1d1d1f]">
                  {isAr ? 'نبذة عن مؤسسة مثوى للنزل السياحية' : 'Brief Introduction to Mathwaa Hospitality'}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleGoToProfile('ar')}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-[#B8865F] hover:text-white border border-[#EDE5DC] px-3 py-1.5 rounded-xl text-xs font-bold text-[#8B6F47] transition shadow-2xs active:scale-95"
                >
                  <Globe className="w-3.5 h-3.5 text-[#B8865F]" />
                  <span>{isAr ? 'ملف الشركة (بالعربية)' : 'Profile in Arabic'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleGoToProfile('en')}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-[#B8865F] hover:text-white border border-[#EDE5DC] px-3 py-1.5 rounded-xl text-xs font-bold text-[#8B6F47] transition shadow-2xs active:scale-95"
                >
                  <Globe className="w-3.5 h-3.5 text-[#B8865F]" />
                  <span>{isAr ? 'Profile (English)' : 'Company Profile (English)'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5d5d5f] leading-relaxed">
              {isAr
                ? 'تُعتبر مؤسسة مثوى شركة متخصصة في إدارة وتطوير الحلول السكنية والنزل الفندقية الموجهة للشركات والقطاعات الحكومية والتنفيذية بمدينة الرياض. نمتلك ونقود محفظة عقارية تضم أكثر من 500 وحدة سكنية مجهزة بأعلى معايير الجودة، ونقدم خدمة إدارية شاملة 100% تعفي مؤسستكم من أي مشقة تشغيلية.'
                : 'Mathwaa Hospitality & Real Estate is a leading corporate housing provider in Riyadh, managing over 500 turnkey residential units for enterprise and government clients. We specialize in end-to-end facility oversight, housekeeping, and resident concierge services.'}
            </p>
          </div>

          {/* Quick Quotation Metrics Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#EDE5DC] text-xs">
            <div className="space-y-0.5">
              <span className="text-[#8B6F47] block font-bold text-[10px] uppercase">{isAr ? 'رقم عرض السعر' : 'Quotation ID'}</span>
              <span className="text-sm font-extrabold text-[#1d1d1f]">{proposalMeta.proposalId}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[#8B6F47] block font-bold text-[10px] uppercase">{isAr ? 'تاريخ الإصدار' : 'Issue Date'}</span>
              <span className="text-sm font-extrabold text-[#1d1d1f]">{proposalMeta.date}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[#8B6F47] block font-bold text-[10px] uppercase">{isAr ? 'مدة الصلاحية' : 'Valid Until'}</span>
              <span className="text-sm font-extrabold text-emerald-700">{proposalMeta.validUntil}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[#8B6F47] block font-bold text-[10px] uppercase">{isAr ? 'إجمالي السعر السنوي' : 'Grand Annual Total'}</span>
              <span className="text-sm font-extrabold text-[#B8865F]">{proposalMeta.grandTotalAnnualPrice}</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            VISUAL PHOTO SEPARATOR 1
            ========================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#C89565]/30 group">
          <div className="h-64 sm:h-80 w-full relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/68174dcc4_PHOTO-2025-11-25-10-40-05.jpg"
              alt="Mathwaa Luxury Interior Visual Separator"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs font-bold text-[#C89565] uppercase tracking-wider mb-1">
                {isAr ? 'فخامة المعيشة المجهزة بالكامل' : 'FULLY FURNISHED EXECUTIVE RESIDENCES'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                {isAr ? 'تصاميم فندقية راقية تمنح موظفيكم أعلى مستويات الراحة' : 'Hospitality Standard Interiors Designed for Staff Comfort'}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-2xl">
                {isAr
                  ? 'جميع الوحدات مزودة بأثاث عصري، أجهزة كهربائية متكاملة، شبكات فايبر سريعة، ونظافة دورية.'
                  : 'All units feature modern ergonomics, complete home appliances, fiber Wi-Fi, and weekly housekeeping.'}
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SLIDE 2: Quotation Table & Unit Pricing
            ========================================== */}
        <div className="rounded-3xl bg-white border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm print:break-after-page print:shadow-none print:border-gray-200">
          <div className="border-b border-[#EDE5DC] pb-5 flex flex-wrap justify-between items-center gap-4">
            <div>
              <span className="text-xs font-bold text-[#B8865F] uppercase tracking-wider block mb-1">
                {isAr ? 'التفاصيل المالية والكميات' : 'FINANCIAL & UNIT ALLOCATION'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
                {isAr ? 'جدول تسعير الوحدات السكنية المخصصة للعميل' : 'Offered Products, Units & Pricing Breakdown'}
              </h2>
            </div>
            <div className="bg-[#FAF7F2] border border-[#EDE5DC] px-5 py-2.5 rounded-2xl text-end">
              <span className="text-xs text-[#8B6F47] block font-semibold">{isAr ? 'إجمالي السعر السنوي' : 'Grand Annual Total'}</span>
              <span className="text-xl font-extrabold text-[#B8865F]">{proposalMeta.grandTotalAnnualPrice}</span>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#EDE5DC]">
            <table className="w-full text-start text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#EDE5DC] text-[#8B6F47]">
                  <th className="py-4 px-4 text-start font-bold">{isAr ? 'العقار والموقع' : 'Property & District'}</th>
                  <th className="py-4 px-4 text-start font-bold">{isAr ? 'فئة الوحدة المعروضة' : 'Unit Product Offered'}</th>
                  <th className="py-4 px-4 text-center font-bold">{isAr ? 'العدد' : 'Count'}</th>
                  <th className="py-4 px-4 text-end font-bold">{isAr ? 'السعر الشهري/الوحدة' : 'Monthly Rate/Unit'}</th>
                  <th className="py-4 px-4 text-end font-bold">{isAr ? 'السعر السنوي/الوحدة' : 'Annual Rate/Unit'}</th>
                  <th className="py-4 px-4 text-end font-bold bg-[#B8865F]/10 text-[#1d1d1f]">{isAr ? 'الإجمالي السنوي للفئة' : 'Category Annual Total'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE5DC] text-[#1d1d1f]">
                {/* Property 1: Al Malqa */}
                <tr>
                  <td rowSpan={2} className="py-4 px-4 font-extrabold align-top border-e border-[#EDE5DC] bg-[#FAF7F2]/50">
                    <span className="text-[#B8865F] block text-sm">{isAr ? 'عقار الملقا' : 'Al Malqa Property'}</span>
                    <span className="text-[#5d5d5f] font-medium text-xs block">{isAr ? 'حي الملقا (33 وحدة)' : 'Al Malqa District (33 Units)'}</span>
                    <button
                      onClick={() => handleOpenMedia(properties[0])}
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#B8865F] hover:text-[#1d1d1f] bg-white border border-[#EDE5DC] px-2.5 py-1 rounded-lg shadow-2xs transition"
                    >
                      <Camera className="w-3 h-3" />
                      <span>{isAr ? 'معرض الصور' : 'View Photos'}</span>
                    </button>
                  </td>
                  <td className="py-3.5 px-4 font-bold">{isAr ? 'استوديو فاخر مؤثث' : 'Furnished Executive Studio'}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#B8865F]">13 {isAr ? 'وحدة' : 'units'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">4,500 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">54,000 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-extrabold text-[#1d1d1f] bg-[#B8865F]/5">702,000 {isAr ? 'ريال' : 'SAR'}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold">{isAr ? 'شقة غرفة وصالة مؤثثة' : '1-Bedroom Apartment'}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#B8865F]">20 {isAr ? 'وحدة' : 'units'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">5,300 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">63,600 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-extrabold text-[#1d1d1f] bg-[#B8865F]/5">1,272,000 {isAr ? 'ريال' : 'SAR'}</td>
                </tr>

                {/* Property 2: Al Aqiq */}
                <tr>
                  <td rowSpan={2} className="py-4 px-4 font-extrabold align-top border-e border-[#EDE5DC] bg-[#FAF7F2]/50">
                    <span className="text-[#B8865F] block text-sm">{isAr ? 'عقار العقيق' : 'Al Aqiq Property'}</span>
                    <span className="text-[#5d5d5f] font-medium text-xs block">{isAr ? 'حي العقيق (12 وحدة)' : 'Al Aqiq District (12 Units)'}</span>
                    <button
                      onClick={() => handleOpenMedia(properties[1])}
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#B8865F] hover:text-[#1d1d1f] bg-white border border-[#EDE5DC] px-2.5 py-1 rounded-lg shadow-2xs transition"
                    >
                      <Camera className="w-3 h-3" />
                      <span>{isAr ? 'معرض الصور' : 'View Photos'}</span>
                    </button>
                  </td>
                  <td className="py-3.5 px-4 font-bold">{isAr ? 'استوديو فاخر مؤثث' : 'Furnished Executive Studio'}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#B8865F]">7 {isAr ? 'وحدات' : 'units'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">4,500 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">54,000 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-extrabold text-[#1d1d1f] bg-[#B8865F]/5">378,000 {isAr ? 'ريال' : 'SAR'}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold">{isAr ? 'شقة غرفة وصالة مؤثثة' : '1-Bedroom Apartment'}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#B8865F]">5 {isAr ? 'وحدات' : 'units'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">5,300 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-semibold">63,600 {isAr ? 'ريال' : 'SAR'}</td>
                  <td className="py-3.5 px-4 text-end font-extrabold text-[#1d1d1f] bg-[#B8865F]/5">318,000 {isAr ? 'ريال' : 'SAR'}</td>
                </tr>

                {/* Grand Total Row */}
                <tr className="bg-[#1d1d1f] text-white text-sm sm:text-base">
                  <td colSpan={2} className="py-4 px-4 font-extrabold">
                    {isAr ? 'الإجمالي السنوي الكلي (45 وحدة سكنية)' : 'GRAND TOTAL (45 Total Units)'}
                  </td>
                  <td className="py-4 px-4 text-center font-extrabold text-[#C89565]">
                    45 {isAr ? 'وحدة' : 'Units'}
                  </td>
                  <td colSpan={2} className="py-4 px-4 text-end font-semibold text-xs text-gray-300">
                    {isAr ? 'شامل استهلاك المرافق، الإنترنت والصيانة' : 'Includes utilities, fiber Wi-Fi & maintenance'}
                  </td>
                  <td className="py-4 px-4 text-end font-extrabold text-amber-300 bg-[#8B6F47]">
                    2,670,000 {isAr ? 'ريال' : 'SAR'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            VISUAL PHOTO SEPARATOR 2
            ========================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#C89565]/30 group">
          <div className="h-64 sm:h-80 w-full relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/6e02386b6_PHOTO-2025-11-25-10-40-04.jpg"
              alt="Al Malqa Property Separator"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs font-bold text-[#C89565] uppercase tracking-wider mb-1">
                {isAr ? 'الموقع الأول: حي الملقا (33 وحدة سكنية)' : 'LOCATION 1: AL MALQA PROPERTY (33 UNITS)'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                {isAr ? 'موقع استراتيجي بشمال الرياض بالقرب من طريق الملك فهد' : 'Strategic Location in North Riyadh Near King Fahd Road'}
              </h3>
            </div>
          </div>
        </div>

        {/* ==========================================
            SLIDE 3: Property 1 Detail (Al Malqa)
            ========================================== */}
        <div className="rounded-3xl bg-white border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm print:break-after-page print:shadow-none print:border-gray-200">
          <div className="flex flex-wrap justify-between items-start gap-4 border-b border-[#EDE5DC] pb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-[#B8865F] text-white px-3 py-1 rounded-full uppercase">
                  {isAr ? 'الموقع الرئيسي' : 'PRIMARY LOCATION'}
                </span>
                <span className="text-xs font-bold bg-amber-50 text-[#8B6F47] px-3 py-1 rounded-full border border-amber-200">
                  33 {isAr ? 'وحدة سكنية' : 'Units'}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#1d1d1f]">{properties[0].name[langKey]}</h2>
              <p className="text-sm text-[#8B6F47] font-medium">{properties[0].tagline[langKey]}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => handleOpenMedia(properties[0])}
                className="flex items-center gap-2 bg-[#B8865F] hover:bg-[#a6754f] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition active:scale-95"
              >
                <Camera className="w-4 h-4" />
                <span>{isAr ? 'عرض كافة صور عقار الملقا والفيديو' : 'View Photos & Video Tour'}</span>
              </button>
              <span className="text-xs text-emerald-700 font-bold">
                {isAr ? 'الإجمالي السنوي: 1,974,000 ريال' : 'Annual Total: SAR 1,974,000'}
              </span>
            </div>
          </div>

          <p className="text-sm text-[#5d5d5f] leading-relaxed">
            {properties[0].description[langKey]}
          </p>

          {/* Photos Grid & Direct Gallery Link */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {properties[0].images.slice(0, 3).map((img, i) => (
              <div
                key={i}
                onClick={() => handleOpenMedia(properties[0])}
                className="h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-xs cursor-pointer group relative"
              >
                <img src={img} alt="Al Malqa Property" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100 text-white font-bold text-xs gap-1.5">
                  <Camera className="w-4 h-4" />
                  <span>{isAr ? 'تجميع الصور' : 'Enlarge'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Unit Categories Offered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {properties[0].unitTypesList.map((unit, uIdx) => (
              <div key={uIdx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE5DC] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1d1d1f] text-base">{unit.name[langKey]}</span>
                  <span className="bg-[#B8865F] text-white px-3 py-0.5 rounded-full text-xs font-bold">{unit.count} {isAr ? 'وحدات' : 'units'}</span>
                </div>
                <p className="text-xs text-[#5d5d5f]">{unit.specs ? unit.specs[langKey] : ''}</p>
                <div className="pt-2 border-t border-[#EDE5DC] flex justify-between items-center text-xs">
                  <span className="text-[#8B6F47] font-semibold">{isAr ? 'الإيجار السنوي/الوحدة:' : 'Annual/Unit:'} {unit.rates.annual}</span>
                  <span className="font-extrabold text-[#1d1d1f]">{isAr ? 'إجمالي الفئة:' : 'Total:'} {unit.totalAnnualPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            VISUAL PHOTO SEPARATOR 3
            ========================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#C89565]/30 group">
          <div className="h-64 sm:h-80 w-full relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/b05e0b8d2_AWA-1.jpg"
              alt="Al Aqiq Property Separator"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs font-bold text-[#C89565] uppercase tracking-wider mb-1">
                {isAr ? 'الموقع الثاني: حي العقيق (12 وحدة سكنية)' : 'LOCATION 2: AL AQIQ PROPERTY (12 UNITS)'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                {isAr ? 'سكن تنفيذي جوار مركز الملك عبد الله المالي (KAFD)' : 'Executive Living Adjacent to King Abdullah Financial District'}
              </h3>
            </div>
          </div>
        </div>

        {/* ==========================================
            SLIDE 4: Property 2 Detail (Al Aqiq)
            ========================================== */}
        <div className="rounded-3xl bg-white border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm print:break-after-page print:shadow-none print:border-gray-200">
          <div className="flex flex-wrap justify-between items-start gap-4 border-b border-[#EDE5DC] pb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-[#8B6F47] text-white px-3 py-1 rounded-full uppercase">
                  {isAr ? 'الموقع الثاني' : 'SECONDARY LOCATION'}
                </span>
                <span className="text-xs font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                  12 {isAr ? 'وحدة سكنية' : 'Units'}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#1d1d1f]">{properties[1].name[langKey]}</h2>
              <p className="text-sm text-[#8B6F47] font-medium">{properties[1].tagline[langKey]}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => handleOpenMedia(properties[1])}
                className="flex items-center gap-2 bg-[#8B6F47] hover:bg-[#725a38] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition active:scale-95"
              >
                <Camera className="w-4 h-4" />
                <span>{isAr ? 'عرض كافة صور عقار العقيق والفيديو' : 'View Photos & Video Tour'}</span>
              </button>
              <span className="text-xs text-emerald-700 font-bold">
                {isAr ? 'الإجمالي السنوي: 696,000 ريال' : 'Annual Total: SAR 696,000'}
              </span>
            </div>
          </div>

          <p className="text-sm text-[#5d5d5f] leading-relaxed">
            {properties[1].description[langKey]}
          </p>

          {/* Photos Grid & Direct Gallery Link */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {properties[1].images.slice(0, 3).map((img, i) => (
              <div
                key={i}
                onClick={() => handleOpenMedia(properties[1])}
                className="h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-xs cursor-pointer group relative"
              >
                <img src={img} alt="Al Aqiq Property" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100 text-white font-bold text-xs gap-1.5">
                  <Camera className="w-4 h-4" />
                  <span>{isAr ? 'تجميع الصور' : 'Enlarge'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Unit Categories Offered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {properties[1].unitTypesList.map((unit, uIdx) => (
              <div key={uIdx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE5DC] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1d1d1f] text-base">{unit.name[langKey]}</span>
                  <span className="bg-[#8B6F47] text-white px-3 py-0.5 rounded-full text-xs font-bold">{unit.count} {isAr ? 'وحدات' : 'units'}</span>
                </div>
                <p className="text-xs text-[#5d5d5f]">{unit.specs ? unit.specs[langKey] : ''}</p>
                <div className="pt-2 border-t border-[#EDE5DC] flex justify-between items-center text-xs">
                  <span className="text-[#8B6F47] font-semibold">{isAr ? 'الإيجار السنوي/الوحدة:' : 'Annual/Unit:'} {unit.rates.annual}</span>
                  <span className="font-extrabold text-[#1d1d1f]">{isAr ? 'إجمالي الفئة:' : 'Total:'} {unit.totalAnnualPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            VISUAL PHOTO SEPARATOR 4
            ========================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#C89565]/30 group">
          <div className="h-64 sm:h-80 w-full relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/9fa044f16_DSC04139.jpg"
              alt="Compound Amenity Separator"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs font-bold text-[#C89565] uppercase tracking-wider mb-1">
                {isAr ? 'المعايير التشغيلية والخدمات المشمولة' : 'TURNKEY HOSPITALITY & MAINTENANCE SLA'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                {isAr ? 'إدارة عقارية متكاملة تعفي مؤسستكم من أعباء التشغيل والصيانة' : '100% Hassle-Free Management for Corporate Peace of Mind'}
              </h3>
            </div>
          </div>
        </div>

        {/* ==========================================
            SLIDE 5: Terms & Conditions
            ========================================== */}
        <div className="rounded-3xl bg-white border border-[#EDE5DC] p-6 sm:p-12 space-y-8 shadow-sm print:break-after-page print:shadow-none print:border-gray-200">
          <div className="border-b border-[#EDE5DC] pb-5">
            <span className="text-xs font-bold text-[#B8865F] uppercase tracking-wider block mb-1">
              {isAr ? 'الإطار التعاقدي والمالي' : 'TERMS & CONDITIONS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
              {isAr ? 'الشروط والأحكام الرسمية لعرض السعر' : 'Official Proposal Terms & Conditions'}
            </h2>
          </div>

          <div className="space-y-4">
            {proposalMeta.officialTerms?.map((term, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE5DC] flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#B8865F] text-white flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 shadow-xs">
                  0{idx + 1}
                </div>
                <div>
                  <p className="font-bold text-[#1d1d1f] text-sm sm:text-base leading-relaxed">{term[langKey]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SLA Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EDE5DC] text-xs">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 text-[#8B6F47] font-bold">
                <Clock className="w-4 h-4 text-[#B8865F]" />
                <span>{isAr ? 'صيانة فورية SLA' : '24/7 SLA Repairs'}</span>
              </div>
              <p className="text-[#5d5d5f]">{isAr ? 'استجابة فورية لأي طارئ فني أو صيانة بالوحدات' : 'Immediate response team for maintenance requests'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 text-[#8B6F47] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#B8865F]" />
                <span>{isAr ? 'تسليم جاهز للتشغيل' : 'Turnkey Delivery'}</span>
              </div>
              <p className="text-[#5d5d5f]">{isAr ? 'تأثيث كامل وأجهزة كهربائية وجاهزية تامة للسكن' : 'Move-in ready with premium appliances & furniture'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 text-[#8B6F47] font-bold">
                <Award className="w-4 h-4 text-[#B8865F]" />
                <span>{isAr ? 'إدارة حساب مخصصة' : 'Account Management'}</span>
              </div>
              <p className="text-[#5d5d5f]">{isAr ? 'مدير حساب مخصص لمتابعة جميع شؤون السكن والتواصل المباشر' : 'Dedicated account manager for corporate communications'}</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SLIDE 6: Dual Acceptance & Sign-off
            ========================================== */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F5EFE7] border-2 border-[#C89565]/40 p-6 sm:p-12 space-y-10 shadow-sm print:break-after-page print:shadow-none print:border-gray-300">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#EDE5DC] p-2.5 mx-auto flex items-center justify-center shadow-xs">
              <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
              {isAr ? 'اعتماد وقبول عرض السعر الرسمي' : 'Proposal Acceptance & Sign-off'}
            </h2>
            <p className="text-[#5d5d5f] text-xs sm:text-sm leading-relaxed">
              {isAr
                ? 'يعتبر توقيع هذه الوثيقة موافقة مبدئية على الأسعار والتوزيع الجغرافي المعروض تمهيداً لتوقيع العقد الإيجاري النهائي بين الطرفين.'
                : 'Signing below confirms formal acceptance of the offered quotation terms and unit allocation for contract execution.'}
            </p>
          </div>

          {/* Signature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#C89565]/30 text-xs">
            {/* Mathwaa Management */}
            <div className="p-6 rounded-2xl bg-white border border-[#EDE5DC] space-y-4">
              <div className="border-b border-[#EDE5DC] pb-3">
                <span className="text-xs font-bold text-[#B8865F] uppercase block mb-1">{isAr ? 'الطرف الأول (المؤجر)' : 'First Party (Lessor)'}</span>
                <span className="font-extrabold text-[#1d1d1f] text-sm block">{proposalMeta.preparedBy[langKey]}</span>
              </div>
              <div className="space-y-2 text-[#5d5d5f]">
                <p><span className="font-bold text-[#1d1d1f]">{isAr ? 'الممثل المعتمد:' : 'Representative:'}</span> {isAr ? 'إدارة العقارات والتعاقدات' : 'Property & Leasing Management'}</p>
                <p><span className="font-bold text-[#1d1d1f]">{isAr ? 'التاريخ:' : 'Date:'}</span> 19 / 07 / 2026</p>
                <div className="pt-8 border-t border-dashed border-gray-300 flex justify-between items-end text-gray-400">
                  <span>{isAr ? 'التوقيع والختم الرسمي:' : 'Signature & Official Stamp:'}</span>
                  <div className="w-20 h-20 border-2 border-dashed border-[#C89565]/40 rounded-full flex items-center justify-center text-[10px] text-[#8B6F47] font-bold rotate-12">
                    {isAr ? 'ختم مثوى' : 'Mathwaa Stamp'}
                  </div>
                </div>
              </div>
            </div>

            {/* Client Management */}
            <div className="p-6 rounded-2xl bg-white border border-[#EDE5DC] space-y-4">
              <div className="border-b border-[#EDE5DC] pb-3 text-start">
                <span className="text-xs font-bold text-[#B8865F] uppercase block mb-1">{isAr ? 'الطرف الثاني (المستأجر)' : 'Second Party (Lessee)'}</span>
                <span className="font-extrabold text-[#1d1d1f] text-sm block">{proposalMeta.clientName[langKey]}</span>
              </div>
              <div className="space-y-2 text-[#5d5d5f]">
                <p><span className="font-bold text-[#1d1d1f]">{isAr ? 'الممثل المعتمد:' : 'Representative:'}</span> ....................................................</p>
                <p><span className="font-bold text-[#1d1d1f]">{isAr ? 'الصفة / المسمى:' : 'Title:'}</span> ....................................................</p>
                <p><span className="font-bold text-[#1d1d1f]">{isAr ? 'التاريخ:' : 'Date:'}</span> ..... / ..... / 2026</p>
                <div className="pt-8 border-t border-dashed border-gray-300 flex justify-between items-end text-gray-400">
                  <span>{isAr ? 'توقيع واعتماد الجهة المستفيدة:' : 'Authorized Client Signature:'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-[#EDE5DC] text-xs text-[#5d5d5f]">
            <div className="flex items-center gap-4">
              <a href="tel:+966920015627" className="flex items-center gap-1.5 hover:text-[#B8865F] transition font-bold">
                <Phone className="w-4 h-4 text-[#B8865F]" />
                <span dir="ltr">+966 9200 15627</span>
              </a>
              <a href="mailto:info@mathwaa.com" className="flex items-center gap-1.5 hover:text-[#B8865F] transition font-bold">
                <Mail className="w-4 h-4 text-[#B8865F]" />
                <span>info@mathwaa.com</span>
              </a>
            </div>
            <p className="font-semibold text-[#8B6F47]">
              {isAr ? 'مؤسسة مثوى للنزل السياحية، الرياض، المملكة العربية السعودية' : 'Mathwaa Hospitality & Real Estate, Riyadh, KSA'}
            </p>
          </div>
        </div>

      </div>

      {/* Media Modal Lightbox */}
      <MediaModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        property={selectedPropertyForMedia}
        isAr={isAr}
      />
    </div>
  );
};
