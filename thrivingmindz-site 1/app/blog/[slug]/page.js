import { BLOG_POSTS } from '../../../content/blog/posts';
import BlogPostClient from './BlogPostClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }));
}

// Generate metadata for each blog post (SEO)
export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.targetKeyword, ...post.relatedKeywords],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: ['ThrivingMindz'],
      tags: [post.category, post.targetKeyword, 'teen mental health', 'Frisco TX'],
    },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription },
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return <div style={{ padding: 100, textAlign: 'center' }}>Post not found</div>;

  // Article structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'ThrivingMindz', url: 'https://thrivingmindz.org' },
    publisher: { '@type': 'Organization', name: 'ThrivingMindz' },
    keywords: [post.targetKeyword, ...post.relatedKeywords].join(', '),
    about: { '@type': 'Thing', name: 'Youth Mental Health' },
    spatialCoverage: { '@type': 'Place', name: 'Frisco, Texas, Dallas-Fort Worth' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient post={post} />
    </>
  );
}
