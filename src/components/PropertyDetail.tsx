import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Users,
  Check,
  Play,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Headset,
  Award,
  Sparkles,
  Building2,
  LucideIcon,
  Clock,
  Coins,
  ShieldAlert
} from 'lucide-react';
import {
  whyMathwaaAr,
  whyMathwaaEn,
  properties
} from '../data';
import {
  Property,
  VideoItem,
  AmenityDetail
} from '../types';
import { ImageSlider } from './ImageSlider';
import { VideoModal } from './VideoModal';

interface PropertyDetailProps {
  property: Property;
  isAr: boolean;
  onSelectProperty: (id: string) => void;
  onBack: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Headset,
  Award,
  Users,
  Sparkles,
  Building2
};

export const PropertyDetail: React.FC<PropertyDetailProps> = ({
  property,
  isAr,
  onSelectProperty,
  onBack
}) => {
  const langKey = isAr ? 'ar' : 'en';
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<'monthly' | 'threeMonths' | 'sixMonths' | 'annual'>('annual');

  const features = isAr ? whyMathwaaAr : whyMathwaaEn;

  // Get raw amenities array for current language
  const amenitiesList = Array.isArray(property.amenities)
    ? property.amenities
    : property.amenities[langKey] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8"
    >
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C89565]/20 shadow-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6F47] hover:text-[#1d1d1f] transition"
          >
            {isAr ? (
              <>
                <ChevronRight className="w-4 h-4" />
                <span>العودة للخيارات</span>
              </>
            ) : (
              <>
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Options</span>
              </>
            )}
          </button>

          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${property.badgeStyle}`}>
            {property.badge[langKey]}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-2">
            {property.name[langKey]}
          </h1>
          <p className="text-base sm:text-lg text-[#8B6F47] font-medium">
            {property.tagline[langKey]}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#EDE5DC] text-sm text-[#5d5d5f]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#B8865F]" />
            <span className="font-medium">{isAr ? 'الموقع:' : 'Location:'}</span>
            <span>{property.location[langKey]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#B8865F]" />
            <span className="font-medium">{isAr ? 'الطاقة الاستيعابية:' : 'Capacity:'}</span>
            <span>{property.capacity[langKey]}</span>
          </div>
        </div>

        {/* Gallery Slider */}
        <ImageSlider images={property.images} name={property.name[langKey]} isAr={isAr} />

        {/* Video Tour Buttons if present */}
        {property.videos && property.videos.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider w-full sm:w-auto">
              {isAr ? 'جولات الفيديو للمعاينة:' : 'Video Tours:'}
            </span>
            {property.videos.map((vid, idx) => (
              <button
                key={idx}
                onClick={() => setActiveVideo(vid)}
                className="flex items-center gap-2 bg-[#F5EFE7] hover:bg-[#EDE5DC] border border-[#EDE5DC] text-[#1d1d1f] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition active:scale-95 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#B8865F] text-white flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>{vid[langKey]}</span>
              </button>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="pt-2">
          <p className="text-[#3d3d3d] text-sm sm:text-base leading-relaxed">
            {property.description[langKey]}
          </p>
        </div>
      </div>

      {/* Unit Pricing Table & Rental Periods (Inspired by Matera PDF) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C89565]/20 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#EDE5DC] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B6F47] uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4 text-[#B8865F]" />
              <span>{isAr ? 'تفاصيل أنواع الوحدات وأسعار التعاقد' : 'Unit Types & Contract Pricing'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              {isAr ? 'جدول أسعار الوحدات السكنية' : 'Residential Unit Rate Matrix'}
            </h3>
          </div>

          {/* Rental Duration Term Selector Buttons */}
          <div className="flex bg-[#FAF7F2] p-1 rounded-2xl border border-[#EDE5DC] text-xs font-bold">
            <button
              onClick={() => setSelectedTerm('annual')}
              className={`px-3 py-1.5 rounded-xl transition ${
                selectedTerm === 'annual' ? 'bg-[#B8865F] text-white shadow-xs' : 'text-[#8B6F47] hover:text-[#1d1d1f]'
              }`}
            >
              {isAr ? 'سنوي' : 'Annual'}
            </button>
            <button
              onClick={() => setSelectedTerm('sixMonths')}
              className={`px-3 py-1.5 rounded-xl transition ${
                selectedTerm === 'sixMonths' ? 'bg-[#B8865F] text-white shadow-xs' : 'text-[#8B6F47] hover:text-[#1d1d1f]'
              }`}
            >
              {isAr ? '6 أشهر' : '6 Months'}
            </button>
            <button
              onClick={() => setSelectedTerm('threeMonths')}
              className={`px-3 py-1.5 rounded-xl transition ${
                selectedTerm === 'threeMonths' ? 'bg-[#B8865F] text-white shadow-xs' : 'text-[#8B6F47] hover:text-[#1d1d1f]'
              }`}
            >
              {isAr ? '3 أشهر' : '3 Months'}
            </button>
            <button
              onClick={() => setSelectedTerm('monthly')}
              className={`px-3 py-1.5 rounded-xl transition ${
                selectedTerm === 'monthly' ? 'bg-[#B8865F] text-white shadow-xs' : 'text-[#8B6F47] hover:text-[#1d1d1f]'
              }`}
            >
              {isAr ? 'شهري' : 'Monthly'}
            </button>
          </div>
        </div>

        {/* Unit Types Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] text-[#8B6F47] font-bold border-b border-[#EDE5DC]">
                <th className="py-3 px-4 text-start">{isAr ? 'رمز الكود' : 'Code'}</th>
                <th className="py-3 px-4 text-start">{isAr ? 'نوع الوحدة السكنية' : 'Unit Type'}</th>
                <th className="py-3 px-4 text-start">{isAr ? 'المواصفات والتجهيز' : 'Specifications'}</th>
                <th className="py-3 px-4 text-end">
                  {selectedTerm === 'annual'
                    ? isAr ? 'السعر السنوي' : 'Annual Rate'
                    : selectedTerm === 'sixMonths'
                    ? isAr ? 'سعر 6 أشهر' : '6-Month Rate'
                    : selectedTerm === 'threeMonths'
                    ? isAr ? 'سعر 3 أشهر' : '3-Month Rate'
                    : isAr ? 'السعر الشهري' : 'Monthly Rate'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE5DC]">
              {property.unitTypesList.map((unit, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition">
                  <td className="py-3.5 px-4 font-bold text-[#B8865F]">
                    {unit.code || `Type ${idx + 1}`}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#1d1d1f]">
                    {unit.name[langKey]}
                  </td>
                  <td className="py-3.5 px-4 text-[#5d5d5f]">
                    {unit.specs ? unit.specs[langKey] : '-'}
                  </td>
                  <td className="py-3.5 px-4 text-end font-extrabold text-[#B8865F] text-sm sm:text-base">
                    {unit.rates[selectedTerm] || unit.rates.annual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add-on Services & Security Deposit Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {property.addOnServices && (
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC] space-y-2">
              <span className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider block">
                {isAr ? 'الخدمات المساندة والإضافية:' : 'Optional Add-on Services:'}
              </span>
              <ul className="space-y-1.5 text-xs text-[#3d3d3d]">
                {property.addOnServices.map((srv, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-[#EDE5DC]/60 pb-1">
                    <span>{srv.title[langKey]}</span>
                    <span className="font-bold text-[#B8865F]">{srv.price[langKey]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {property.termsAndNotes && (
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC] space-y-2">
              <span className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider block">
                {isAr ? 'الشروط وأحكام التأمين:' : 'Lease Terms & Security Deposit:'}
              </span>
              <ul className="space-y-1.5 text-xs text-[#3d3d3d]">
                {property.termsAndNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#B8865F] font-bold">•</span>
                    <span>{note[langKey]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Amenities Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C89565]/20 shadow-md space-y-4">
        <h3 className="text-xl font-bold text-[#1d1d1f]">
          {isAr ? 'المرافق والخدمات المشمولة' : 'Included Amenities & Facilities'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {amenitiesList.map((item, idx) => {
            if (typeof item === 'string') {
              return (
                <div key={idx} className="flex items-start gap-3 bg-[#FAF7F2] p-3.5 rounded-xl border border-[#EDE5DC]">
                  <Check className="w-4 h-4 text-[#B8865F] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#1d1d1f]">{item}</span>
                </div>
              );
            } else {
              const detail = item as AmenityDetail;
              return (
                <div key={idx} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#1d1d1f]">
                    <Check className="w-4 h-4 text-[#B8865F] flex-shrink-0" />
                    <span>{detail.title}</span>
                  </div>
                  <p className="text-xs text-[#5d5d5f] leading-relaxed pr-6">{detail.desc}</p>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* Why Mathwaa Card */}
      <div className="bg-white rounded-3xl border border-[#C89565]/20 shadow-md overflow-hidden p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
            {isAr ? 'لماذا مثوى؟' : 'Why Mathwaa?'}
          </h2>
          <p className="text-[#5d5d5f] text-sm">
            {isAr
              ? 'نحن لسنا مجرد شركة إيجار — نحن شركاء في بناء بيئة معيشية استثنائية لفريقكم.'
              : "We're not just a rental company — we're partners in building an exceptional living environment for your team."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feat, idx) => {
            const IconComponent = iconMap[feat.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#1d1d1f] text-sm mb-1">{feat.title}</p>
                  <p className="text-[#5d5d5f] text-xs leading-relaxed">{feat.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="border border-[#C89565]/30 shadow-xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] rounded-3xl overflow-hidden p-6 sm:p-10 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {isAr ? 'الخطوات التالية والتنسيق الميداني' : 'Next Steps & Site Visit Coordination'}
        </h2>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          {isAr
            ? 'نحن على أتم الاستعداد لمرافقتكم في جولة معاينة ميدانية وتخصيص باقات السداد المناسبة لمدارس الرياض.'
            : 'We are ready to schedule site visits and personalize corporate lease terms for Riyadh Schools.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="tel:+966920015627"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl text-white text-sm font-semibold transition active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#C89565]" />
            <span dir="ltr">+966 9200 15627</span>
          </a>
          <a
            href="mailto:info@mathwaa.com"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl text-white text-sm font-semibold transition active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#C89565]" />
            <span>info@mathwaa.com</span>
          </a>
        </div>
      </div>

      {/* Explore Other Options */}
      <div className="space-y-4 pt-2">
        <p className="text-sm font-semibold text-[#8B6F47] uppercase tracking-widest text-center">
          {isAr ? 'استعرض الخيارات الأخرى' : 'Explore Other Options'}
        </p>

        <div className="space-y-3">
          {properties
            .filter((p) => p.id !== property.id)
            .map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectProperty(p.id)}
                className="w-full text-start bg-white border border-[#C89565]/20 rounded-2xl overflow-hidden shadow-sm flex items-center gap-4 p-3 hover:shadow-md transition-all group cursor-pointer"
              >
                <img
                  src={p.images[0]}
                  alt={p.name[langKey]}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1">
                  <p className="font-bold text-[#1d1d1f] text-sm">{p.name[langKey]}</p>
                  <p className="text-xs text-[#8B6F47]">{p.tagline[langKey]}</p>
                </div>
                {isAr ? (
                  <ChevronLeft className="w-4 h-4 text-[#C89565] flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-[#C89565] flex-shrink-0" />
                )}
              </button>
            ))}
        </div>
      </div>

      <p className="text-center text-sm text-[#8B6F47] pb-6">
        {isAr
          ? 'مثوى لإدارة العقارات | هذا المستند سري ومخصص لمدارس الرياض'
          : 'Mathwaa Property Management | Confidential – Riyadh Schools'}
      </p>

      {/* Active Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} isAr={isAr} onClose={() => setActiveVideo(null)} />
      )}
    </motion.div>
  );
};
