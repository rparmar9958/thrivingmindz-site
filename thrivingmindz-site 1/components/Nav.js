'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav({ onRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const linkStyle = { color: '#555', textDecoration: 'none', fontSize: 14, fontWeight: 700, transition: 'color 0.3s' };

  return (
    <>
      {/* Fixed header: crisis bar + nav together */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        {/* Crisis Bar */}
        <div style={{
          padding: '8px 20px', background: '#D94400', textAlign: 'center', color: 'white',
          fontSize: 13, fontWeight: 700, letterSpacing: 0.3,
        }}>
          ⚠️ Need help now? Call or text{' '}
          <a href="tel:988" style={{ color: '#FFD93D', textDecoration: 'underline', fontWeight: 900 }}>988</a>
          {' '}·{' '}Text HOME to{' '}
          <a href="sms:741741" style={{ color: '#FFD93D', textDecoration: 'underline', fontWeight: 900 }}>741741</a>
          {' '}· You are never alone 💛
        </div>

        {/* Nav Bar */}
        <nav style={{
          padding: '0 32px',
          background: 'rgba(255,251,245,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : '0 1px 8px rgba(0,0,0,0.02)',
          transition: 'box-shadow 0.4s',
        }}>
          <div style={{ maxWidth: 1260, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #FF6B9D, #9B72CF)', color: 'white',
                fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 18, transform: 'rotate(-3deg)',
              }}>T</div>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: '#1a1a2e' }}>
                Thriving<span style={{ color: '#FF6B9D' }}>Mindz</span>
              </span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="hide-mobile">
              <Link href="/programs" style={linkStyle}>Programs</Link>
              <Link href="/events" style={linkStyle}>Events</Link>
              <Link href="/blog" style={linkStyle}>Blog</Link>
              <Link href="/get-involved" style={linkStyle}>Get Involved</Link>
              <Link href="/contact" style={linkStyle}>Contact</Link>
              <button className="btn btn-pink btn-sm" onClick={onRegister}>Join Us 💗</button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="show-mobile" style={{
              display: 'none', background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', padding: 4,
            }}>
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer to push page content below fixed header (crisis bar ~36px + nav ~64px = ~100px) */}
      <div style={{ height: 100 }} />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 100, left: 0, right: 0, bottom: 0, background: 'rgba(255,251,245,0.98)',
          zIndex: 99, padding: 32, display: 'flex', flexDirection: 'column', gap: 20, backdropFilter: 'blur(20px)',
        }}>
          {[
            { href: '/programs', label: 'Programs 💗' },
            { href: '/events', label: 'Events 🌈' },
            { href: '/blog', label: 'Blog 📖' },
            { href: '/get-involved', label: 'Get Involved ✨' },
            { href: '/contact', label: 'Contact 💙' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, color: '#1a1a2e', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
          <button className="btn btn-pink btn-lg" style={{ marginTop: 16 }} onClick={() => { setMobileOpen(false); onRegister?.(); }}>
            Join Us →
          </button>
        </div>
      )}
    </>
  );
}
