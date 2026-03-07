'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RegisterModal from '../../components/RegisterModal';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../content/blog/posts';

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const [showReg, setShowReg] = useState(false);

  const filtered = filter === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter);

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      <section style={{ padding: '120px 28px 40px', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">BLOG & RESOURCES</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 42, fontWeight: 700, marginTop: 16 }}>
            Guides, tools & <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>real talk</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 560, margin: '12px auto 32px' }}>
            Evidence-based mental health content for teens, parents, and professionals in the Frisco & DFW area.
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {BLOG_CATEGORIES.map(cat => (
              <button key={cat} className={`filter-tag ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 28px 80px' }}>
        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {filtered.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card card-clickable" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 5, width: 50, borderRadius: 3, background: post.color, marginBottom: 16 }} />
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, padding: '3px 8px', background: '#f0f4f8', borderRadius: 6 }}>{post.category}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', padding: '3px 8px', background: '#f0f4f8', borderRadius: 6 }}>{post.audience}</span>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, lineHeight: 1.35, fontFamily: 'var(--serif)', flex: 1 }}>{post.title}</h2>
                  <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.6, marginBottom: 14 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{post.date} · {post.readTime}</span>
                    <span style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 600 }}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
