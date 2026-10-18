import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, type CategorySlug, getCategory } from '../consts';

export type AnyPost =
  | CollectionEntry<'research'>
  | CollectionEntry<'teaching'>
  | CollectionEntry<'ai'>
  | CollectionEntry<'essays'>;

export async function getPostsByCategory(slug: CategorySlug) {
  const posts = await getCollection(slug, ({ data }) => data.draft !== true);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getAllPosts() {
  const groups = await Promise.all(
    CATEGORIES.map(async (c) => {
      const posts = await getPostsByCategory(c.slug);
      return posts.map((post) => ({
        post,
        category: c,
        href: `/${c.slug}/${post.id}/`,
      }));
    }),
  );
  return groups
    .flat()
    .sort(
      (a, b) => b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf(),
    );
}

export { getCategory };
