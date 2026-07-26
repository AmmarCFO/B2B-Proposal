import { Property, ProposalMetadata, FeatureItem } from './types';

export const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png";

export const proposalMeta: ProposalMetadata = {
  clientName: {
    ar: "الجهة المستفيدة (شعار واسم العميل)",
    en: "Valued Enterprise Partner Client"
  },
  clientLogoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=80",
  title: {
    ar: "عرض سعر وإطار تعاقدي لإيجار وحدات سكن الموظفين",
    en: "Corporate Housing Quotation & Lease Proposal"
  },
  proposalId: "MATHWAA-QUOT-2026-45U",
  date: "2026-07-19",
  dateHijri: "1447/02/05",
  validUntil: "2026-08-02",
  preparedBy: {
    ar: "مؤسسة مثوى للنزل السياحية (إدارة العقارات والحلول المؤسسية)",
    en: "Mathwaa Property & Hospitality Management Establishment"
  },
  targetCapacity: {
    ar: "45 وحدة سكنية مجهزة بالكامل (استوديو وغرفة وصالة)",
    en: "45 Fully Equipped Units (Studios & 1BR Apartments)"
  },
  locationsSummary: {
    ar: "شمال الرياض (حي الملقا: 33 وحدة | حي العقيق: 12 وحدة)",
    en: "North Riyadh (Al Malqa: 33 Units | Al Aqiq: 12 Units)"
  },
  grandTotalUnits: 45,
  grandTotalAnnualPrice: "2,670,000 ريال",
  officialTerms: [
    {
      ar: "يسري عرض السعر لمدة (14) يومًا من تاريخ إصداره (19/07/2026).",
      en: "Quotation remains valid for 14 days from date of issuance (19/07/2026)."
    },
    {
      ar: "يشمل عرض السعر تقديم الخدمات الأساسية المرتبطة بالوحدات السكنية (الماء، الكهرباء، الإنترنت، النظافة الأسبوعية، والصيانة).",
      en: "Rates include fundamental services: water, electricity, fiber internet, weekly housekeeping, and full maintenance."
    },
    {
      ar: "لا يشمل عرض السعر ضريبة القيمة المضافة (15%)، وسيتم إضافتها وفقًا للأنظمة المعمول بها.",
      en: "Excludes 15% Value Added Tax (VAT), applied per applicable laws."
    },
    {
      ar: "الحد الأدنى لمدة التعاقد هو (12) شهرًا، وذلك وفقًا للأسعار المذكورة في هذا العرض.",
      en: "Minimum corporate contract duration is 12 months."
    },
    {
      ar: "الأسعار المذكورة أعلاه مشروطة بسداد كامل قيمة الإيجار مقدمًا عند بداية العقد.",
      en: "Prices subject to full upfront annual lease payment upon contract execution."
    }
  ]
};

export const optionNumbersAr = ["الأول", "الثاني", "الثالث"];

export const whyMathwaaAr: FeatureItem[] = [
  {
    title: "إدارة متكاملة 100%",
    text: "إدارة شاملة للعقار من صيانة وتنظيف ودعم واستقبال، دون أي أعباء تشغيلية على مؤسستكم.",
    icon: "ShieldCheck"
  },
  {
    title: "دعم كونسيرج على مدار الساعة",
    text: "فريق مخصص لخدمة القاطنين وحل جميع طلبات السكن فورًا في أي وقت.",
    icon: "Headset"
  },
  {
    title: "خبرة وسجل إنجازات",
    text: "إدارة مجمعات سكنية فاخرة للشركات والجهات المؤسسية والتنفيذية بمدينة الرياض.",
    icon: "Award"
  },
  {
    title: "باقات وسداد مرن للشركات",
    text: "حلول تعاقدية مخصصة تشمل خيارات سداد شهرية، ربع سنوية، ونصف سنوية أو سنوية.",
    icon: "Users"
  },
  {
    title: "معايير فندقية رفيعة",
    text: "نحافظ على أعلى معايير الجودة والراحة والنظافة والصيانة الوقائية لجميع الوحدات.",
    icon: "Sparkles"
  },
  {
    title: "محفظة عقارية متنوعة",
    text: "من الشقق الفندقية والستوديوهات إلى التاون هاوس والفلل، لتلبية احتياجات مختلف المستويات الوظيفية.",
    icon: "Building2"
  }
];

export const whyMathwaaEn: FeatureItem[] = [
  {
    title: "100% Turnkey Management",
    text: "Complete end-to-end management covering maintenance, cleaning, and support with zero operational hassle.",
    icon: "ShieldCheck"
  },
  {
    title: "24/7 Concierge & Support",
    text: "Dedicated resident support team handling all requests and maintenance SLAs around the clock.",
    icon: "Headset"
  },
  {
    title: "Proven Corporate Track Record",
    text: "Years of excellence managing premium residential compounds for enterprise and corporate entities in Riyadh.",
    icon: "Award"
  },
  {
    title: "Flexible B2B Lease Terms",
    text: "Custom billing cycles including Monthly, Quarterly, Semi-Annual, and Annual corporate lease packages.",
    icon: "Users"
  },
  {
    title: "Hospitality Standard Quality",
    text: "Rigorous quality control, continuous maintenance, and housekeeping keeping properties in prime condition.",
    icon: "Sparkles"
  },
  {
    title: "Versatile Property Portfolio",
    text: "From executive studios and apartments to luxury townhouses, fitting every staff grade and budget.",
    icon: "Building2"
  }
];

export const properties: Property[] = [
  {
    id: "al-malqa",
    badge: {
      en: "Primary Location (33 Units)",
      ar: "الموقع الرئيسي (33 وحدة)"
    },
    badgeStyle: "bg-[#B8865F]/15 text-[#8B6F47] border-[#C89565]/40",
    name: {
      en: "Mathwaa Al Malqa Property",
      ar: "عقار الملقا (مثوى الملقا)"
    },
    tagline: {
      en: "Prestigious Living in Al Malqa, North Riyadh",
      ar: "سكن راقي في حي الملقا الاستراتيجي شمال الرياض"
    },
    description: {
      en: "Located in the prime Al Malqa district, this property provides 33 premium move-in ready units featuring executive studios and 1-bedroom apartments. The location offers swift access to King Fahd Road, Boulevard Riyadh, and key corporate hubs.",
      ar: "يقع في حي الملقا الحيوي والمطلوب شمال الرياض، ويضم 33 وحدة سكنية فاخرة ومكتملة الجاهزية تتنوع بين الاستوديوهات التنفيذية وشقق الغرفة وصالة، مع قرب ممتاز من الطرق الرئيسية ومراكز الأعمال."
    },
    unitCount: 33,
    totalPropertyAnnualPrice: "1,974,000 ريال",
    location: {
      en: "Al Malqa, North Riyadh",
      ar: "حي الملقا، شمال الرياض"
    },
    capacity: {
      en: "33 Total Units (13 Studios + 20 1BR)",
      ar: "33 وحدة (13 استوديو + 20 غرفة وصالة)"
    },
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/68174dcc4_PHOTO-2025-11-25-10-40-05.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/6e02386b6_PHOTO-2025-11-25-10-40-04.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/65790e7a5_PHOTO-2025-11-25-10-40-041.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/c47322534_PHOTO-2025-11-25-10-40-0413.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/fea99f0c5_PHOTO-2025-11-25-10-40-051.jpg"
    ],
    videos: [
      {
        en: "Property & Unit Walkthrough",
        ar: "جولة الشقق والوحدات السكنية",
        url: "https://drive.google.com/file/d/10XQGIhgn6CxgR-MojxiBPOg6spQ_LpQf/preview"
      }
    ],
    includedServices: [
      { ar: "استهلاك الماء والكهرباء مجاناً", en: "Free Water & Electricity Utilities" },
      { ar: "إنترنت فايبر عالي السرعة شامل", en: "High-Speed Fiber Wi-Fi Included" },
      { ar: "خدمة النظافة الأسبوعية للوحدات", en: "Weekly Housekeeping & Unit Cleaning" },
      { ar: "الصيانة الوقائية والفنية الشاملة 24/7", en: "24/7 Full Maintenance SLA & Repairs" }
    ],
    amenities: {
      ar: [
        { title: "أثاث وتجهيز فندقي فاخر", desc: "أثاث عصري مريح، مفارش عالية الجودة، وأجهزة كهربائية متكاملة." },
        { title: "إنترنت فايبر عالي السرعة", desc: "تغطية إنترنت سريعة مخصصة لكل وحدة مع شاشات سمارت." },
        { title: "نظام أمني وكاميرات مراقبة", desc: "حراسة وأمن متكامل مع دخول ذكي للمبنى والوحدات." },
        { title: "خدمات صيانة ونظافة دورية", desc: "فريق صيانة وتدبير منزلي مخصص لضمان أرقى معايير الراحة." }
      ],
      en: [
        { title: "Luxury Hospitality Furnishings", desc: "Modern ergonomic furniture, premium linens, and complete appliances." },
        { title: "High-Speed Fiber Internet", desc: "Dedicated fast Wi-Fi connection with Smart TV package." },
        { title: "CCTV & Gated Security", desc: "24/7 secure access control and building surveillance." },
        { title: "Regular Cleaning & Maintenance", desc: "Dedicated maintenance team and weekly housekeeping." }
      ]
    },
    unitTypesList: [
      {
        code: "فئة A",
        name: { ar: "استوديو فاخر مؤثث", en: "Furnished Studio" },
        specs: { ar: "استوديو متكامل، مطبخ صغير، حمام خاص", en: "Studio layout with kitchenette & private bath" },
        count: 13,
        rates: {
          monthly: "4,500 ريال",
          threeMonths: "13,500 ريال",
          sixMonths: "27,000 ريال",
          annual: "54,000 ريال"
        },
        totalAnnualPrice: "702,000 ريال"
      },
      {
        code: "فئة B",
        name: { ar: "شقة غرفة وصالة", en: "1-Bedroom & Living Room" },
        specs: { ar: "غرفة نوم، صالة معيشة، مطبخ مجهز، حمام", en: "1 Bedroom, Living Room, Kitchen & Bath" },
        count: 20,
        rates: {
          monthly: "5,300 ريال",
          threeMonths: "15,900 ريال",
          sixMonths: "31,800 ريال",
          annual: "63,600 ريال"
        },
        totalAnnualPrice: "1,272,000 ريال"
      }
    ],
    termsAndNotes: [
      { ar: "عرض السعر شامل لـ 33 وحدة سكنية بـ 1,974,000 ريال سنوياً.", en: "Quotation covers 33 total units for SAR 1,974,000 annually." },
      { ar: "يشمل الماء، الكهرباء، الإنترنت، النظافة الأسبوعية، والصيانة.", en: "Includes water, electricity, internet, weekly cleaning, & maintenance." }
    ]
  },
  {
    id: "al-aqiq",
    badge: {
      en: "Secondary Location (12 Units)",
      ar: "موقع العقيق (12 وحدة)"
    },
    badgeStyle: "bg-emerald-50 text-emerald-800 border-emerald-300",
    name: {
      en: "Mathwaa Al Aqiq Property",
      ar: "عقار العقيق (مثوى العقيق)"
    },
    tagline: {
      en: "Prime Executive Living in Al Aqiq",
      ar: "سكن تنفيذي متميز في حي العقيق المالي"
    },
    description: {
      en: "Situated in the strategic Al Aqiq district adjacent to KAFD (King Abdullah Financial District), this property features 12 move-in ready units (7 Studios and 5 1-Bedroom apartments) offering high comfort and convenience.",
      ar: "يقع في حي العقيق المتميز القريب من مركز الملك عبد الله المالي (KAFD)، ويضم 12 وحدة سكنية جاهزة للسكن (7 استوديوهات + 5 شقق غرفة وصالة) تتميز بالهدوء والراحة والخدمات المتكاملة."
    },
    unitCount: 12,
    totalPropertyAnnualPrice: "696,000 ريال",
    location: {
      en: "Al Aqiq, North Riyadh",
      ar: "حي العقيق، شمال الرياض"
    },
    capacity: {
      en: "12 Total Units (7 Studios + 5 1BR)",
      ar: "12 وحدة (7 استوديو + 5 غرفة وصالة)"
    },
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/b05e0b8d2_AWA-1.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/5302a9274_AWA-2.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/5dc99f682_AWA-3.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/5df9b6fc7_AWA-4.jpg"
    ],
    videos: [
      {
        en: "Al Aqiq Building Tour",
        ar: "جولة مبنى العقيق والوحدات",
        url: "https://drive.google.com/file/d/1_aWFrIeoEktgTglhetAzUIzOFtxC6x-E/preview"
      }
    ],
    includedServices: [
      { ar: "استهلاك الماء والكهرباء مجاناً", en: "Free Water & Electricity Utilities" },
      { ar: "إنترنت فايبر عالي السرعة شامل", en: "High-Speed Fiber Wi-Fi Included" },
      { ar: "خدمة النظافة الأسبوعية للوحدات", en: "Weekly Housekeeping & Unit Cleaning" },
      { ar: "الصيانة الوقائية والفنية الشاملة 24/7", en: "24/7 Full Maintenance SLA & Repairs" }
    ],
    amenities: {
      ar: [
        { title: "موقع مميز قرب KAFD والطرق الرئيسية", desc: "وصول سريع لطريق الملك فهد وطريق الدائري الشمالي." },
        { title: "تأثيث راقي ومطبخ مجهز", desc: "تجهيز مكتمل بأرقى المستويات الجاهزة للاستخدام الفوري." },
        { title: "صيانة ونظافة أسبوعية شاملة", desc: "نظافة دورية وصيانة شاملة فورية على مدار الساعة." }
      ],
      en: [
        { title: "Prime Location near KAFD", desc: "Direct access to King Fahd Road & Northern Ring Road." },
        { title: "Fully Furnished & Equipped Kitchen", desc: "Move-in ready with modern luxury furniture and appliances." },
        { title: "Weekly Cleaning & Rapid Maintenance", desc: "Continuous housekeeping and round-the-clock maintenance." }
      ]
    },
    unitTypesList: [
      {
        code: "فئة A",
        name: { ar: "استوديو مؤثث بالكامل", en: "Furnished Studio" },
        specs: { ar: "استوديو متكامل، مطبخ صغير، حمام", en: "Studio layout with kitchenette & private bath" },
        count: 7,
        rates: {
          monthly: "4,500 ريال",
          threeMonths: "13,500 ريال",
          sixMonths: "27,000 ريال",
          annual: "54,000 ريال"
        },
        totalAnnualPrice: "378,000 ريال"
      },
      {
        code: "فئة B",
        name: { ar: "شقة غرفة وصالة", en: "1-Bedroom & Living Room" },
        specs: { ar: "غرفة نوم، صالة، مطبخ مجهز، حمام", en: "1 Bedroom, Living Room, Kitchen & Bath" },
        count: 5,
        rates: {
          monthly: "5,300 ريال",
          threeMonths: "15,900 ريال",
          sixMonths: "31,800 ريال",
          annual: "63,600 ريال"
        },
        totalAnnualPrice: "318,000 ريال"
      }
    ],
    termsAndNotes: [
      { ar: "عرض السعر شامل لـ 12 وحدة سكنية بـ 696,000 ريال سنوياً.", en: "Quotation covers 12 total units for SAR 696,000 annually." },
      { ar: "يشمل الماء، الكهرباء، الإنترنت، النظافة الأسبوعية، والصيانة.", en: "Includes water, electricity, internet, weekly cleaning, & maintenance." }
    ]
  },
  {
    id: "al-aarid-narjis",
    badge: {
      en: "Luxury Compound Option",
      ar: "مجمع سكني مغلق"
    },
    badgeStyle: "bg-amber-50 text-amber-800 border-amber-300",
    name: {
      en: "Mathwaa Al Aarid & Al Narjis Compounds",
      ar: "مجمعات مثوى بالعارض والنرجس"
    },
    tagline: {
      en: "Gated Communities with Executive Amenities",
      ar: "مجمعات مسوّرة راقية بمرافق ترفيهية وخدمية"
    },
    description: {
      en: "A premium gated residential compound offering enhanced lifestyle facilities including fitness centers, outdoor garden lounges, and kids playgrounds. Ideal for larger teams and executive personnel.",
      ar: "مجمعات سكنية مغلقة ومحوّطة توفر بيئة معيشية متكاملة تضم صالات لياقة بدنية، حدائق مفتوحة، ومساحات آمنة تناسب الكوادر الإدارية والتنفيذية."
    },
    unitCount: 35,
    totalPropertyAnnualPrice: "2,200,000 ريال",
    location: {
      en: "Al Aarid & Al Narjis, North Riyadh",
      ar: "العارض والنرجس، شمال الرياض"
    },
    capacity: {
      en: "Up to 60+ Staff Capacity",
      ar: "طاقة استيعابية تتسع لـ 60+ موظف"
    },
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/9fa044f16_DSC04139.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/05d9da676_DSC04140.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/f1ca3b5ac_DSC04141.jpg"
    ],
    videos: [
      {
        en: "Compound Grounds Tour",
        ar: "جولة المجمع السكني والمرافق",
        url: "https://drive.google.com/file/d/1FiP6SXJB9Zjp8z1s5vu4aiSwoJHA949P/preview"
      }
    ],
    includedServices: [
      { ar: "حراسة وأمن 24/7 ودخول ذكي", en: "24/7 Gated Security & Smart Entry" },
      { ar: "خدمة كونسيرج وصيانة فورية", en: "Concierge Desk & Instant Maintenance SLA" },
      { ar: "إنترنت فايبر عالي السرعة", en: "High-Speed Fiber Wi-Fi" }
    ],
    amenities: {
      ar: [
        { title: "صالة لياقة بدنية مجهزة", desc: "أجهزة كارديو وأثقال متكاملة للقاطنين." },
        { title: "مساحات خضراء وجلسات خارجية", desc: "حدائق مفتوحة ومناطق شوي وتجمع اجتماعي." }
      ],
      en: [
        { title: "Equipped Gym Center", desc: "Cardio & weight equipment for residents." },
        { title: "Green Courtyards & Outdoor Lounges", desc: "Landscaped gardens and BBQ social areas." }
      ]
    },
    unitTypesList: [
      {
        code: "فئة C",
        name: { ar: "شقة غرفتين وصالة فاخرة", en: "2-Bedroom Executive Apartment" },
        specs: { ar: "غرفتين نوم، صالة واسعة، 2 حمام، مطبخ", en: "2 Bedrooms, Living Room, 2 Baths, Kitchen" },
        rates: {
          monthly: "8,500 ريال",
          threeMonths: "25,500 ريال",
          sixMonths: "51,000 ريال",
          annual: "96,000 ريال"
        }
      }
    ]
  }
];

export const mathwaaBrandInfo = {
  slogan: {
    ar: "مسكنك واحة وراحة",
    en: "Your Home is an Oasis & Comfort"
  },
  year: "2025",
  version: "2025 Official Edition",
  versionAr: "نسخة عام 2025 الرسمية",
  hqAddress: {
    ar: "الصحافة، الرياض، المملكة العربية السعودية",
    en: "Al Sahafah District, Riyadh, Kingdom of Saudi Arabia"
  },
  phoneDirect: "+966 56 208 9171",
  phoneTollFree: "+966 9200 15627",
  email: "info@mathwaa.com",
  website: "www.mathwaa.com"
};

export const mathwaaPdfStats = [
  {
    number: "350+",
    labelAr: "وحدة سكنية مؤثثة بالكامل",
    labelEn: "Furnished Residential Units",
    subAr: "موزعة في مواقع استراتيجية بالرياض",
    subEn: "Across prime Riyadh districts"
  },
  {
    number: "44",
    labelAr: "واحة ومجمع سكني",
    labelEn: "Residential Oases & Compounds",
    subAr: "نماذج سكنية مبتكرة ومكتملة",
    subEn: "Customized housing models"
  },
  {
    number: "900+",
    labelAr: "نزيل ومستفيد موثق",
    labelEn: "Satisfied Residents & Guests",
    subAr: "من الموظفين والتنفيذيين والضيوف",
    subEn: "Executives, staff & corporate guests"
  }
];

export const oasisModels = [
  {
    id: "executive",
    title: { ar: "واحة تنفيذية", en: "Executive Oasis" },
    target: { ar: "للتنفيذيين ورجال الأعمال وكبار الموظفين", en: "For Executives & Senior Corporate Leaders" },
    desc: {
      ar: "تجربة سكنية فاخرة، يُقدّم من خلالها خدمات راقية تلبي احتياجات التنفيذيين ورجال الأعمال وكبار القيادات المؤسسية مع الخصوصية التامة والدعم الفندقي.",
      en: "A premium luxury residential experience delivering bespoke hospitality, concierge support, and high-end living for executive leadership and VIP personnel."
    },
    badge: { ar: "فئة فاخرة", en: "Executive Luxury" },
    color: "from-amber-700/20 to-amber-900/10 border-amber-600/30 text-amber-900"
  },
  {
    id: "women",
    title: { ar: "واحة نسائية", en: "Women's Oasis" },
    target: { ar: "مخصصة للموظفات والكوادر النسائية", en: "Exclusively for Female Staff & Executives" },
    desc: {
      ar: "تجربة سكنية مخصصة للنساء فقط، يتم الإشراف عليها وتقديم الخدمات فيها من قبل طاقم نسائي متكامل، تتميز بالأناقة، والراحة، وأعلى معايير الأمان.",
      en: "A dedicated residential environment tailored exclusively for female staff and professionals, 100% managed and operated by a specialized female team for absolute privacy, safety, and comfort."
    },
    badge: { ar: "إشراف نسائي 100%", en: "100% Female Operated" },
    color: "from-rose-700/20 to-pink-900/10 border-pink-500/30 text-pink-950"
  },
  {
    id: "residential",
    title: { ar: "واحة سكنية", en: "Residential Oasis" },
    target: { ar: "للموظفين والأفراد والعوائل", en: "For Corporate Teams, Employees & Families" },
    desc: {
      ar: "تجربة سكنية متكاملة تهتم بالساكن وتلبي كافة احتياجاته اليومية مع إحاطته ببيئة آمنة وخدمات صيانة ونظافة مستمرة.",
      en: "A comprehensive turnkey living environment caring for resident wellbeing with continuous maintenance, fiber Wi-Fi, and housekeeping services."
    },
    badge: { ar: "متكاملة ومجهزة", en: "Full Turnkey Living" },
    color: "from-emerald-700/20 to-teal-900/10 border-emerald-600/30 text-emerald-950"
  }
];

export const servicePillarsData = [
  {
    category: { ar: "خدمات أساسية", en: "Essential Infrastructure Services" },
    items: [
      { ar: "نظافة وتدبير منزلي دوري", en: "Regular Housekeeping & Cleaning" },
      { ar: "صيانة فنية طارئة ووقائية SLA", en: "24/7 SLA Technical & Preventive Maintenance" },
      { ar: "إنترنت فايبر عالي السرعة", en: "High-Speed Fiber Optic Internet" },
      { ar: "شامل الكهرباء والماء", en: "Full Utility Coverage (Water & Electricity)" },
      { ar: "أنظمة دخول ذكي وأمان", en: "Smart Digital Access Control" }
    ]
  },
  {
    category: { ar: "خدمات متكاملة", en: "Integrated Hospitality Services" },
    items: [
      { ar: "حراسة وأمن على مدار الساعة", en: "24/7 Gated Security & Patrols" },
      { ar: "خدمات الكونسيرج والاستقبال", en: "Concierge Desk & Reception" },
      { ar: "المرافق الرياضية واللياقة", en: "Fitness Centers & Sports Amenities" },
      { ar: "خدمات السكان والكونسيرج 24/7", en: "Round-the-Clock Resident Assistance" },
      { ar: "غسيل الملابس والكي", en: "Laundry & Dry Cleaning Services" },
      { ar: "الضيافة وتقديم الأطعمة", en: "Catering & Hospitality Services" }
    ]
  },
  {
    category: { ar: "تخصيص قطاع الأعمال", en: "B2B Tailored Solutions" },
    items: [
      { ar: "تفصيل النموذج السكني بخدماته لكل عميل", en: "Bespoke Housing Model Customized to Client Needs" },
      { ar: "ملائمة الفئات السكنية لمستويات الموظفين", en: "Flexible Unit Allocation Matching Staff Hierarchy" },
      { ar: "عقود موحدة وفواتير ضريبية مجمعة", en: "Consolidated Master Agreements & Unified Invoicing" }
    ]
  }
];

export const riyadhDistrictsCoverage = [
  { ar: "الصحافة (المقر الرئيسي)", en: "Al Sahafah (HQ)", isHq: true },
  { ar: "الملقا", en: "Al Malqa", isFeatured: true },
  { ar: "العقيق", en: "Al Aqiq", isFeatured: true },
  { ar: "النرجس", en: "Al Narjis" },
  { ar: "العارض", en: "Al Aarid" },
  { ar: "الياسمين", en: "Al Yasmin" },
  { ar: "الندى", en: "Al Nada" },
  { ar: "العليا", en: "Al Olaya" },
  { ar: "السليمانية", en: "Al Sulaimaniyah" },
  { ar: "النخيل", en: "Al Nakheel" },
  { ar: "الوادي", en: "Al Wadi" },
  { ar: "الملك فيصل", en: "King Faisal" },
  { ar: "الزهرة", en: "Al Zahra" },
  { ar: "السلام", en: "Al Salam" }
];

export const mathwaaPartnersList = [
  { ar: "مدينة الملك فهد الطبية", en: "King Fahad Medical City" },
  { ar: "مستشفى الملك فيصل التخصصي ومركز الأبحاث", en: "King Faisal Specialist Hospital & Research Centre" },
  { ar: "جامعة الأميرة نورة بنت عبدالرحمن", en: "Princess Nourah bint Abdulrahman University" },
  { ar: "جامعة المعرفة", en: "Almaarefa University" },
  { ar: "مسكن رخاء", en: "Maskan Ekhaa" },
  { ar: "شركة التنمية المتكاملة", en: "Integrated Development Co." },
  { ar: "دار بيات", en: "Dar Biyat" },
  { ar: "شركة صحتي الطبية القابضة", en: "My Health Medical Holding Co." },
  { ar: "الأساس للتطوير العقاري", en: "Asas Real Estate Development" }
];

export const mathwaaTeamQuote = {
  ar: "أبطال مثوى هم مزيج بين كفاءات عريقة في مجال الضيافة والفندقة، وشباب وشابات يملكون همة عالية، وشغف لا ينتهي للتطوير والإبداع. باختصار: نحن مزيج بين الكفاءة والإبداع.",
  en: "Mathwaa's team is a synthesis of seasoned hospitality leaders and passionate young Saudi talents with unbounded ambition for innovation. In short: Expertise meets Creativity."
};

