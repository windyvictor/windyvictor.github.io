/** 站点基础信息，可随时改 */
export const SITE_TITLE = '胡进的博客';
export const SITE_DESCRIPTION =
  '科研、教学、AI 与随笔——记录思考与日常。';
export const SITE_AUTHOR = '胡进';

/** 四个栏目：slug 用于 URL，label 用于导航展示 */
export const CATEGORIES = [
  {
    slug: 'research',
    label: '科研笔记',
    description: '研究想法、论文笔记与实验记录。',
  },
  {
    slug: 'teaching',
    label: '教学札记',
    description: '课堂内外的备课与教学反思。',
  },
  {
    slug: 'ai',
    label: 'AI 时代',
    description: '人工智能相关的观察、工具与实践。',
  },
  {
    slug: 'essays',
    label: '闲情偶记',
    description: '生活随笔与不设边界的闲谈。',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
