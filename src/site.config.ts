export type NavItem = {
  text: string;
  link: string;
};

export type SocialLinks = {
  github?: string;
  email?: string;
  twitter?: string;
  rss?: string;
};

export type SiteConfig = {
  site: {
    title: string;
    description: string;
    author: string;
    url: string;
    language: string;
  };
  nav: NavItem[];
  social: SocialLinks;
  footer: {
    copyright: string;
    poweredBy: string;
  };
  comments: {
    enabled: boolean;
    envId: string;
  };
};

/** 四个栏目：URL slug ↔ frontmatter.category（中文 label） */
export const CATEGORIES = [
  { slug: 'research', label: '科研笔记', description: '研究想法、论文笔记与实验记录。' },
  { slug: 'teaching', label: '教学札记', description: '课堂内外的备课与教学反思。' },
  { slug: 'ai', label: 'AI 时代', description: '人工智能相关的观察、工具与实践。' },
  { slug: 'essays', label: '闲情偶记', description: '生活随笔与不设边界的闲谈。' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryByLabel(label: string) {
  return CATEGORIES.find((c) => c.label === label);
}

const siteConfig: SiteConfig = {
  site: {
    title: '老胡胡说',
    description: '老胡的胡言乱语',
    author: '似水流年 Victor',
    url: 'https://windyvictor.github.io',
    language: 'zh-CN',
  },
  nav: [
    { text: '首页', link: '/' },
    { text: '科研笔记', link: '/research' },
    { text: '教学札记', link: '/teaching' },
    { text: 'AI 时代', link: '/ai' },
    { text: '闲情偶记', link: '/essays' },
    { text: '标签', link: '/tags' },
    { text: '关于', link: '/about' },
  ],
  social: {
    github: 'https://github.com/windyvictor',
    rss: '/rss.xml',
  },
  footer: {
    copyright: '© 2026 似水流年 Victor · 老胡胡说',
    poweredBy: 'Powered by Astro · Sify theme',
  },
  comments: {
    enabled: false,
    envId: '',
  },
};

export { siteConfig };
