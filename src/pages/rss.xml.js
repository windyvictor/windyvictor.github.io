import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getAllPosts } from '../lib/posts';

export async function GET(context) {
  const items = await getAllPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: '<language>zh-CN</language>',
    items: items.map(({ post, href }) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: href,
    })),
  });
}
