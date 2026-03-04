/**
 * ============================================================
 * BRAND CONFIGURATION — Single Source of Truth
 * ============================================================
 *
 * To rebrand this app, edit the values below.
 * Every component imports from this file — no hunting through JSX.
 *
 * IMAGES: Replace the placeholder imports with your own assets
 *         in src/assets/ and update the import paths here.
 *
 * COLORS & FONTS: Managed in src/index.css (HSL tokens) and
 *                 tailwind.config.ts (font-family). See comments
 *                 in those files for guidance.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Award,
  Heart,
  Users,
  BookOpen,
  Scale,
  Sparkles,
  Trophy,
  MapPin,
  FlaskConical,
  TrendingUp,
  DollarSign,
  Car,
  Briefcase,
  GraduationCap,
  Gift,
  Shield,
  Rocket,
  Building2,
  Globe,
  Star,
} from "lucide-react";

// --------------- Types ---------------

export interface NavLink {
  label: string;
  href: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  color: "primary" | "secondary";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  years: string;
  initials: string;
}

export interface BenefitCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  benefits: string[];
}

export interface BenefitHighlight {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export interface CareerStep {
  level: number;
  title: string;
  description: string;
  perks: string[];
}

export interface Milestone {
  icon: LucideIcon;
  number: string;
  label: string;
  description: string;
}

export interface VideoItem {
  title: string;
  description: string;
  embedId: string;
}

export interface BulletinItem {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
}

export interface NewsletterArchiveItem {
  month: string;
  emoji: string;
  downloadUrl: string;
  color: "primary" | "secondary";
  icon: LucideIcon;
  image: string;
  highlights: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface ReferralTier {
  role: string;
  bonus: string;
  condition: string;
}

export interface CareerPerk {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// --------------- Config ---------------

export const brandConfig = {
  // ── Company ──────────────────────────────────────────────
  company: {
    name: "UNC Dairy",
    shortName: "UNC",
    tagline: "Milk Is Our Life's Work",
    description:
      "America's premier farmer-owned dairy cooperative. From 200+ family farms across upstate New York and Pennsylvania, we nourish life every day.",
    founderName: "Kevin Ellis",
    founderTitle: "Chief Executive Officer",
    founderCredentials: "Cornell Animal Science | MBA, University of Rochester",
    founderQuote:
      "Upstate Niagara is where excellence thrives and community matters. Our cooperative is committed to creating a rewarding, supportive work environment that embodies our life-nourishing philosophy.",
    founderMessage: [
      "As a farmer-owned cooperative, everything we do honors the tireless effort and care our farming families put in every day, all day, 365 days a year.",
      "Our farmer-owners think in generations — some of our farms have been run by the same families for over a century. That same generational thinking guides how we invest in our people.",
      "Thank you for the important work you do and the difference you make in nourishing life every single day.",
    ],
    address: "6230 Aurora Expressway, Batavia, NY 14020",
    mainWebsiteUrl: "https://uncdairy.com",
    copyrightHolder: "UNC Dairy",
  },

  // ── Assets (replace these imports with your brand assets) ─
  assets: {
    logoColor: "/logo.svg",
    logoWhite: "/logo.svg",
    heroImage: "/hero-bg.jpg",
    teamImage: "/hero-bg.jpg",
    founderImage: "",
    /** Used as the featured bulletin image */
    bulletinFeaturedImage: "/hero-bg.jpg",
  },

  // ── SEO ──────────────────────────────────────────────────
  seo: {
    pageTitle: "Life at UNC Dairy | Culture & Values Hub",
    metaDescription:
      "Discover the culture, values, and career opportunities at UNC Dairy — one of America's largest farmer-owned dairy cooperatives.",
    ogImage: "/logo.png",
    favicon: "/favicon.png",
  },

  // ── Navigation ───────────────────────────────────────────
  nav: {
    links: [
      { label: "Culture", href: "/#values" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Bulletin", href: "/#bulletin" },
      { label: "Growth", href: "/#careers" },
      { label: "Our Journey", href: "/mission" },
    ] as NavLink[],
    ctaLabel: "View Open Roles",
    ctaHref: "/careers",
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    headline: "Where Dairy Is",
    highlightedWord: "Life's Work.",
    subheadline:
      "Join one of America's largest farmer-owned dairy cooperatives. 200+ farms. 7 plants. One mission: nourish life.",
    primaryCta: "View Open Roles",
    secondaryCta: "Our Culture",
  },

  // ── Values ───────────────────────────────────────────────
  values: {
    badge: "What We Stand For",
    heading: "The Values Our People Live Every Day.",
    subheading:
      "These aren't words on a wall — they're how our team members show up for each other every day.",
    items: [
      {
        icon: Award,
        title: "Excellence",
        description:
          "Strive for excellence in everything you do — from farm to plant to table.",
        highlights: ["Award-Winning Products", "Continuous Improvement", "High Standards"],
        color: "primary",
      },
      {
        icon: Scale,
        title: "Integrity",
        description:
          "Act with utmost integrity to safeguard our hard-earned reputation and the trust of our farmer-owners.",
        highlights: ["Farmer Trust", "Transparency", "Accountability"],
        color: "secondary",
      },
      {
        icon: Users,
        title: "Collaboration",
        description:
          "Collaborate with others to gain synergies and share best practices across our cooperative.",
        highlights: ["Cross-Plant Teamwork", "Best Practices", "Shared Success"],
        color: "primary",
      },
      {
        icon: Sparkles,
        title: "Making a Difference",
        description:
          "Commit to making a positive difference, however large or small, every single day.",
        highlights: ["Community Impact", "Daily Contribution", "Purpose-Driven"],
        color: "secondary",
      },
      {
        icon: Shield,
        title: "Safety",
        description:
          "Ensure a safe environment for all team members while providing high-quality dairy foods and beverages.",
        highlights: ["Team Safety", "Food Quality", "Zero Incidents"],
        color: "primary",
      },
      {
        icon: Trophy,
        title: "Accountability",
        description:
          "Assume full accountability and be responsible with the resources entrusted to you by our farming families.",
        highlights: ["Stewardship", "Ownership Mindset", "Responsible Growth"],
        color: "secondary",
      },
    ] as ValueItem[],
    quote:
      "We don't just process milk. We honor a generational promise — to our farmers, our communities, and everyone who nourishes their family with our products.",
  },

  // ── Testimonials ─────────────────────────────────────────
  testimonials: {
    badge: "Our People",
    heading: "Real Stories from Real Team Members.",
    subheading: "The people who make us special, in their own words.",
    items: [
      {
        quote:
          "Upstate Niagara is where excellence thrives and community matters. Our cooperative is committed to creating a rewarding, supportive work environment that embodies our life-nourishing philosophy.",
        name: "Kevin Ellis",
        role: "Chief Executive Officer",
        years: "Since 2022",
        initials: "KE",
      },
      {
        quote:
          "Join a team that nourishes life from farm to table! As employees of a farmer-owned cooperative, we come to work every day trying to honor the tireless effort and care these farming families put in every day.",
        name: "Team Member",
        role: "Plant Operations",
        years: "3 years",
        initials: "TM",
      },
      {
        quote:
          "I've never felt more connected to where my work goes. Knowing our products end up on family tables across the region — that gives everything we do real meaning.",
        name: "Team Member",
        role: "Quality Assurance",
        years: "5 years",
        initials: "TM",
      },
    ] as Testimonial[],
  },

  // ── Benefits ─────────────────────────────────────────────
  benefits: {
    badge: "Why Work With Us",
    heading: "More Than Just a Job —",
    headingHighlight: "It's a Career You'll Love",
    subheading:
      "From day one, you're supported with competitive pay, comprehensive benefits, and real opportunities to grow.",
    categories: [
      {
        title: "Health & Wellness",
        icon: Heart,
        color: "text-secondary",
        benefits: [
          "Best-in-class health benefits",
          "Employer-paid dental plan",
          "Employer-paid life insurance",
          "Health Reimbursement Account (HRA)",
          "Flexible Spending Account (FSA)",
        ],
      },
      {
        title: "Financial",
        icon: DollarSign,
        color: "text-primary",
        benefits: [
          "Competitive pay",
          "401(k) retirement savings plan",
          "Performance and promotion raises",
          "Credit union membership",
        ],
      },
      {
        title: "Time Off & Balance",
        icon: Gift,
        color: "text-secondary",
        benefits: [
          "PTO and vacation packages",
          "Paid holidays",
          "Flexible scheduling where available",
        ],
      },
      {
        title: "Growth & Community",
        icon: GraduationCap,
        color: "text-primary",
        benefits: [
          "Opportunities for advancement",
          "Initial and ongoing paid training",
          "Employee Referral Program",
          "Community involvement initiatives",
        ],
      },
    ] as BenefitCategory[],
    highlights: [
      { icon: Heart, label: "Health Coverage", desc: "Employer-paid dental + life" },
      { icon: DollarSign, label: "401(k) Plan", desc: "Retirement savings" },
      { icon: Users, label: "Cooperative Culture", desc: "Farmer-owned, people-first" },
      { icon: TrendingUp, label: "Career Growth", desc: "Advancement from within" },
    ] as BenefitHighlight[],
    testimonialQuote:
      "Our people are the backbone of everything we make. We invest in them like our farmers invest in their land — for the long haul.",
    testimonialAttribution: "— Kevin Ellis, CEO",
  },

  // ── Career Pathways ──────────────────────────────────────
  careerPathways: {
    badge: "Grow With Us",
    heading: "We Invest in Your Career — Every Step",
    subheading:
      "Clear pathways, real mentorship, and a culture that champions your professional growth from day one.",
    ctaLabel: "Start Your Journey",
    steps: [
      {
        level: 1,
        title: "Entry Level",
        description:
          "Start your journey with hands-on training, mentorship, and real impact from day one.",
        perks: ["Comprehensive onboarding", "Paired with a mentor", "Immediate impact"],
      },
      {
        level: 2,
        title: "Senior Individual Contributor",
        description:
          "Deepen your expertise and begin leading projects with greater independence.",
        perks: ["Advanced training", "Peer leadership", "Development opportunities"],
      },
      {
        level: 3,
        title: "Manager",
        description:
          "Lead programs, supervise team members, and drive operational excellence.",
        perks: ["Supervision experience", "Strategy involvement", "Team leadership"],
      },
      {
        level: 4,
        title: "Director & Leadership",
        description:
          "Shape the future of the organization at the highest levels.",
        perks: ["Strategic leadership", "Program development", "Organizational impact"],
      },
    ] as CareerStep[],
  },

  // ── Milestones / Stats ───────────────────────────────────
  milestones: {
    badge: "By the Numbers",
    heading: "The Community You'd Be Joining",
    subheading:
      "Real numbers that reflect a real commitment to our people and the communities we serve.",
    items: [
      {
        icon: Trophy,
        number: "200+",
        label: "Farmer-Owner Families",
        description: "Multi-generational farms across upstate NY and PA",
      },
      {
        icon: MapPin,
        number: "7",
        label: "Manufacturing Plants",
        description: "Strategically located across New York and Pennsylvania",
      },
      {
        icon: FlaskConical,
        number: "48+",
        label: "Open Positions",
        description: "Across operations, quality, logistics, and leadership",
      },
      {
        icon: TrendingUp,
        number: "$250M",
        label: "West Seneca Expansion",
        description: "Active investment in our future and our people",
      },
    ] as Milestone[],
  },

  // ── Videos ───────────────────────────────────────────────
  videos: {
    badge: "Culture & Values",
    heading: "Our Culture in",
    headingHighlight: "Action.",
    subheading:
      "See the people, passion, and purpose behind our team — straight from our leadership.",
    items: [] as VideoItem[],
  },

  // ── Bulletin / Newsletter ────────────────────────────────
  bulletin: {
    badge: "Company Bulletin",
    heading: "Celebrating Our People, Every Day.",
    subheading:
      "Shoutouts, milestones, wellness spotlights, and the stories that make our community feel like home.",
    featuredTitle: "Latest Bulletin",
    featuredDescription:
      "New beginnings, celebrations, wellness focus, and incredible team momentum.",
    featuredLinkText: "Read Full Bulletin",
    featuredLinkUrl: "/bulletin/latest",
    items: [
      {
        icon: Trophy,
        category: "Award",
        title: "4 Awards at 2025 World Dairy Expo",
        description:
          "UNC Dairy took home multiple first and second place honors — a testament to our team's commitment to excellence.",
        color: "primary",
      },
      {
        icon: Rocket,
        category: "Growth",
        title: "$250M West Seneca Expansion Underway",
        description:
          "Major investment in our West Seneca plant signals our commitment to our farmers, our products, and our people.",
        color: "secondary",
      },
      {
        icon: Star,
        category: "Rebrand",
        title: "Introducing UNC Dairy — Same Mission, Bolder Name",
        description:
          "In April 2025, Upstate Niagara Cooperative became UNC Dairy. Same farmer-owned roots. Fresh, unified identity.",
        color: "primary",
      },
    ] as BulletinItem[],
    newsletterArchive: [] as NewsletterArchiveItem[],
  },

  // ── Mission / Timeline ───────────────────────────────────
  mission: {
    badge: "Our Journey",
    heading: "Mission-Driven from",
    headingHighlight: "Day One.",
    subheading:
      "Every step has been guided by one purpose: making a meaningful difference through our work.",
    founderSectionBadge: "A Message from Our Founder",
    founderHeadline:
      "Upstate Niagara is where excellence thrives and community matters. Our cooperative is committed to creating a rewarding, supportive work environment that embodies our life-nourishing philosophy.",
    videoBadge: "Watch",
    videoHeading: "Our Guiding Principles",
    videoSubheading: "Our founder shares the vision behind the company",
    /** Set to a YouTube embed ID, or empty string to hide the video section */
    videoEmbedId: "",
    timelineBadge: "Our History",
    timelineHeading: "Our Cooperative Journey",
    timelineSubheading:
      "Built by farming families, strengthened by our people, and focused on nourishing life for generations to come.",
    events: [
      {
        year: "Founded",
        title: "Cooperative Roots",
        description:
          "Upstate Niagara Cooperative founded by local dairy farming families committed to collective ownership and sustainable dairy.",
        icon: Rocket,
        highlight: true,
      },
      {
        year: "Expansion",
        title: "7 Plants, 200+ Farms",
        description:
          "Expanded to 7 manufacturing plants across NY and PA, supported by 200+ farmer-owner families.",
        icon: MapPin,
      },
      {
        year: "Brands",
        title: "Building a Family of Brands",
        description:
          "Launched Upstate Farms, Bison, O-AT-KA, and more — reaching consumers across retail and foodservice.",
        icon: Globe,
        highlight: true,
      },
      {
        year: "2022",
        title: "New Leadership",
        description:
          "Kevin Ellis named CEO, bringing deep cooperative and dairy industry expertise to lead the next chapter.",
        icon: Users,
      },
      {
        year: "2025",
        title: "UNC Dairy — Reborn Bold",
        description:
          "Rebranded to UNC Dairy with a $250M expansion investment. The next generation of farmer-owned dairy starts here.",
        icon: TrendingUp,
        highlight: true,
      },
    ] as TimelineEvent[],
  },

  // ── Careers Page ─────────────────────────────────────────
  careers: {
    heroHeading: "Nourish Your Career Here",
    heroSubheading:
      "Join one of America's most respected farmer-owned dairy cooperatives. Real work. Real impact. Real community.",
    perks: [
      { icon: GraduationCap, title: "Paid Training", desc: "Comprehensive onboarding program" },
      { icon: Users, title: "Mentorship", desc: "Grow alongside talented colleagues" },
      { icon: Heart, title: "Meaningful Impact", desc: "Help people reach their goals" },
      { icon: Building2, title: "Career Growth", desc: "Clear advancement pathways" },
    ] as CareerPerk[],
    ctaHeading: "Want to see the culture behind the co-op?",
    ctaSubheading: "Explore our values, team stories, and what makes UNC Dairy different.",
    ctaLabel: "Explore Our Culture",
  },

  // ── Bulletin Detail Page (template) ──────────────────────
  bulletinDetail: {
    /** Set to true to enable the /bulletin/latest route */
    enabled: false,
    title: "Your Latest Bulletin",
    subtitle: "Company Bulletin",
    intro: [
      "A new edition is here, bringing fresh updates, recognition, and resources for the team.",
    ],
    sections: [] as Array<{
      heading: string;
      content: string;
    }>,
    valueChampions: [] as Array<{
      name: string;
      location: string;
      role: string;
      quote: string;
    }>,
    shoutOuts: [] as Array<{
      name: string;
      location: string;
      role: string;
      quote: string;
    }>,
    referralProgram: {
      heading: "Know Someone Amazing?",
      description:
        "We're growing! Refer talented people and earn referral bonuses.",
      tiers: [] as ReferralTier[],
    },
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    description:
      "Farmer-owned. Community-driven. Nourishing life from upstate New York to tables across America.",
    quickLinks: [
      { label: "Culture & Values", href: "/" },
      { label: "Our Journey", href: "/mission" },
      { label: "Open Roles", href: "/careers" },
    ] as NavLink[],
    mainWebsiteLink: { label: "UNCDairy.com", url: "https://uncdairy.com" },
    connectHeading: "Connect",
    connectText:
      "Ready to join a team that nourishes life every day? Explore 48+ open roles across our 7 plants.",
  },
};
