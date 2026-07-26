import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Building2, CheckCircle2 } from 'lucide-react';
import { properties } from '../data';

interface BudgetCalculatorProps {
  isAr: boolean;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ isAr }) => {
  const langKey = isAr ? 'ar' : 'en';

  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(properties[0].id);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState<number>(0);
  const [unitCount, setUnitCount] = useState<number>(10);
  const [durationTerm, setDurationTerm] = useState<'monthly' | 'threeMonths' | 'sixMonths' | 'annual'>('annual');

  const selectedProp = properties.find((p) => p.id === selectedPropertyId) || properties[0];
  const selectedUnit = selectedProp.unitTypesList[selectedUnitIndex] || selectedProp.unitTypesList[0];

  // Helper to parse rate strings e.g. "SAR 98,930" or "SAR 9,200"
  const parseRate = (rateStr?: string): number => {
    if (!rateStr) return 0;
    const nums = rateStr.replace(/[^0-9]/g, '');
    return parseInt(nums, 10) || 0;
  };

  const currentRateStr = selectedUnit.rates[durationTerm] || selectedUnit.rates.annual;
  const unitRateValue = parseRate(currentRateStr);

  const termMonths = durationTerm === 'monthly' ? 1 : durationTerm === 'threeMonths' ? 3 : durationTerm === 'sixMonths' ? 6 : 12;
  const totalContractEstimate = unitRateValue * unitCount * (durationTerm === 'annual' ? 1 : termMonths);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8"
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#B8865F]/10 border border-[#C89565]/30 text-[#8B6F47] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-4 h-4 text-[#B8865F]" />
          <span>{isAr ? 'حاسبة تقدير ميزانية الإيجار للشركات' : 'Corporate Budget & Quote Estimator'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f]">
          {isAr ? 'تخطيط تقديرات العقود والميزانيات' : 'Estimate Corporate Lease Costs'}
        </h1>
        <p className="text-sm sm:text-base text-[#5d5d5f] max-w-xl mx-auto">
          {isAr
            ? 'احسب التكلفة التقديرية لباقات السكن بناءً على عدد الوحدات المطلوبة وفترة العقد الإيجاري.'
            : 'Calculate expected corporate commitments based on total requested units and lease duration.'}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C89565]/20 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {/* Step 1: Select Property */}
          <div>
            <label className="block text-xs font-bold text-[#8B6F47] uppercase tracking-wider mb-2">
              {isAr ? '1. اختر العقار والمجمع السكني:' : '1. Select Property / Compound:'}
            </label>
            <div className="space-y-2">
              {properties.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPropertyId(p.id);
                    setSelectedUnitIndex(0);
                  }}
                  className={`w-full text-start p-3 rounded-2xl border transition flex items-center justify-between ${
                    selectedPropertyId === p.id
                      ? 'border-[#B8865F] bg-[#FAF7F2] font-bold text-[#1d1d1f]'
                      : 'border-[#EDE5DC] hover:bg-[#FAF7F2]/50 text-[#5d5d5f]'
                  }`}
                >
                  <div>
                    <span className="block text-sm">{p.name[langKey]}</span>
                    <span className="text-xs text-[#8B6F47] font-normal">{p.location[langKey]}</span>
                  </div>
                  {selectedPropertyId === p.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#B8865F]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Unit Type */}
          <div>
            <label className="block text-xs font-bold text-[#8B6F47] uppercase tracking-wider mb-2">
              {isAr ? '2. نوع الوحدة السكنية:' : '2. Select Unit Type:'}
            </label>
            <select
              value={selectedUnitIndex}
              onChange={(e) => setSelectedUnitIndex(parseInt(e.target.value, 10))}
              className="w-full bg-[#FAF7F2] border border-[#EDE5DC] rounded-xl p-3 text-sm font-semibold text-[#1d1d1f] focus:outline-none focus:border-[#B8865F]"
            >
              {selectedProp.unitTypesList.map((unit, idx) => (
                <option key={idx} value={idx}>
                  {unit.code ? `${unit.code} - ` : ''}{unit.name[langKey]}
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Duration Term */}
          <div>
            <label className="block text-xs font-bold text-[#8B6F47] uppercase tracking-wider mb-2">
              {isAr ? '3. مدة العقد الإيجاري:' : '3. Lease Duration:'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'annual', labelAr: 'سنوي (أفضل سعر)', labelEn: 'Annual (Best Rate)' },
                { key: 'sixMonths', labelAr: '6 أشهر', labelEn: '6 Months' },
                { key: 'threeMonths', labelAr: '3 أشهر', labelEn: '3 Months' },
                { key: 'monthly', labelAr: 'شهري', labelEn: 'Monthly' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setDurationTerm(item.key as any)}
                  className={`p-2.5 text-xs font-bold rounded-xl border transition ${
                    durationTerm === item.key
                      ? 'bg-[#B8865F] text-white border-[#B8865F]'
                      : 'bg-[#FAF7F2] border-[#EDE5DC] text-[#5d5d5f] hover:text-[#1d1d1f]'
                  }`}
                >
                  {isAr ? item.labelAr : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Unit Quantity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider">
                {isAr ? '4. عدد الوحدات المطلوبة:' : '4. Number of Units:'}
              </label>
              <span className="text-base font-extrabold text-[#B8865F] bg-[#F5EFE7] px-3 py-1 rounded-full border border-[#EDE5DC]">
                {unitCount} {isAr ? 'وحدة' : 'Units'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={unitCount}
              onChange={(e) => setUnitCount(parseInt(e.target.value, 10))}
              className="w-full accent-[#B8865F] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#8B6F47] mt-1">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </div>

        {/* Output Calculation Card */}
        <div className="bg-[#1d1d1f] text-white rounded-3xl p-6 sm:p-8 border border-[#C89565]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C89565] text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-3">
              <Building2 className="w-4 h-4" />
              <span>{isAr ? 'ملخص التقدير المالي' : 'Estimated Financial Summary'}</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                <span>{isAr ? 'العقار المختارة:' : 'Selected Property:'}</span>
                <span className="text-white font-semibold">{selectedProp.name[langKey]}</span>
              </div>
              <div className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                <span>{isAr ? 'نوع الوحدة:' : 'Unit Type:'}</span>
                <span className="text-white font-semibold">{selectedUnit.name[langKey]}</span>
              </div>
              <div className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                <span>{isAr ? 'سعر الوحدة بالخيار:' : 'Rate per Unit:'}</span>
                <span className="text-amber-200 font-bold">{currentRateStr}</span>
              </div>
              <div className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                <span>{isAr ? 'إجمالي الوحدات:' : 'Total Units:'}</span>
                <span className="text-white font-semibold">{unitCount} {isAr ? 'وحدات' : 'Units'}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/15 space-y-2 text-center">
            <span className="text-xs text-white/70 uppercase tracking-widest block font-semibold">
              {isAr ? 'إجمالي الميزانية التقديرية العقدية' : 'Estimated Total Contract Budget'}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#C89565] block">
              SAR {totalContractEstimate.toLocaleString()}
            </span>
            <span className="text-[11px] text-white/50 block">
              {isAr ? '* شاملة جميع الصيانة والخدمات والإدارة' : '* Includes full maintenance & management services'}
            </span>
          </div>

          <a
            href="mailto:info@mathwaa.com"
            className="w-full bg-gradient-to-r from-[#B8865F] to-[#C89565] text-white text-center py-3.5 rounded-xl text-sm font-bold shadow-md hover:opacity-95 transition"
          >
            {isAr ? 'طلب عرض سعر رسمي مخصص' : 'Request Official Custom B2B Quote'}
          </a>
        </div>
      </div>
    </motion.div>
  );
};
