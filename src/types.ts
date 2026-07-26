export type Language = 'ar' | 'en';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface AmenityDetail {
  title: string;
  desc: string;
}

export interface UnitTypeItem {
  code?: string; // e.g. "Unit Type A", "Unit Type B"
  name: LocalizedString;
  specs?: LocalizedString;
  count?: number;
  rates: {
    monthly: string;
    threeMonths?: string;
    sixMonths?: string;
    annual: string;
  };
  totalAnnualPrice?: string; // e.g. "702,000 ريال"
}

export interface AddOnService {
  title: LocalizedString;
  price: LocalizedString;
  note?: LocalizedString;
}

export interface VideoItem {
  en: string;
  ar: string;
  url: string;
}

export interface Property {
  id: string;
  badge: LocalizedString;
  badgeStyle: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  unitCount?: number;
  totalPropertyAnnualPrice?: string;
  location: LocalizedString;
  capacity: LocalizedString;
  images: string[];
  videos?: VideoItem[];
  amenities: {
    en: (string | AmenityDetail)[];
    ar: (string | AmenityDetail)[];
  } | (string | AmenityDetail)[];
  unitTypesList: UnitTypeItem[];
  includedServices?: LocalizedString[];
  addOnServices?: AddOnService[];
  termsAndNotes?: LocalizedString[];
}

export interface ProposalMetadata {
  clientName: LocalizedString;
  clientLogoUrl?: string;
  title: LocalizedString;
  proposalId: string;
  date: string;
  dateHijri?: string;
  validUntil: string;
  preparedBy: LocalizedString;
  targetCapacity: LocalizedString;
  locationsSummary: LocalizedString;
  grandTotalUnits?: number;
  grandTotalAnnualPrice?: string;
  officialTerms?: LocalizedString[];
}

export interface FeatureItem {
  title: string;
  text: string;
  icon: string;
}
