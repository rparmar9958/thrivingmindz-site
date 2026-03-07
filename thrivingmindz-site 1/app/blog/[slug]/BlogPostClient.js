'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import RegisterModal from '../../../components/RegisterModal';
import { BLOG_POSTS } from '../../../content/blog/posts';

// Simple markdown-to-HTML renderer
function renderContent(content) {
  const lines = content.split('\n');
  const html = lines.map(line => {
    if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
    if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
    if (line.startsWith('> ')) return `<blockquote>${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</blockquote>`;
    if (line.startsWith('- **')) {
      const match = line.match(/^- \*\*(.*?)\*\*(.*)/);
      if (match) return `<li><strong>${match[1]}</strong>${match[2]}</li>`;
    }
    if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
    if (/^\d+\. /.test(line)) return `<li>${line.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`;
    if (line.startsWith('| ') || line.startsWith('|--')) return ''; // skip table syntax for now
    if (line.trim() === '') return '<br/>';
    return `<p>${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
  }).join('\n');
  return html;
}

export default function BlogPostClient({ post }) {
  const [showReg, setShowReg] = useState(false);

  // Get related posts
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      <article style={{ padding: '120px 28px 40px' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: 24, fontSize: 13 }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--border)' }}>/</span>
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px', color: 'var(--border)' }}>/</span>
            <span style={{ color: 'var(--teal)', fontWeight: 600 }}>{post.category}</span>
          </div>

          {/* Header */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 11, padding: '4px 12px', borderRadius: 12, background: 'rgba(78,205,196,0.08)', color: 'var(--teal)', fontWeight: 700 }}>{post.category}</span>
            <span style={{ fontSize: 11, padding: '4px 12px', borderRadius: 12, background: '#f0f4f8', color: 'var(--text-muted)', fontWeight: 600 }}>{post.audience}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 16, marginBottom: 32, color: 'var(--text-muted)', fontSize: 14 }}>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>By ThrivingMindz</span>
          </div>

          {/* Content */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />

          {/* CTA Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(78,205,196,0.08), rgba(69,183,209,0.08))',
            borderRadius: 24, padding: 40, textAlign: 'center', margin: '48px 0',
          }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Ready to take the next step?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: 20, fontSize: 15 }}>
              ThrivingMindz offers free therapy, support groups, and resources for teens in Frisco and all of DFW.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-teal" onClick={() => setShowReg(true)}>Register Now →</button>
              <Link href="/blog" className="btn btn-outline btn-sm">Read More Articles</Link>
            </div>
          </div>

          {/* Related posts */}
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Related Articles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card card-clickable" style={{ padding: 20 }}>
                    <div style={{ height: 4, width: 36, borderRadius: 2, background: r.color, marginBottom: 10 }} />
                    <h4 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3, marginBottom: 6 }}>{r.title}</h4>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{r.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
