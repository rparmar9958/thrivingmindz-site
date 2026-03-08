'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RegisterModal from '../components/RegisterModal';
import { IMAGES } from '../content/images';

export default function Home() {
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      {/* Spacer for fixed nav */}
      <div style={{ height: 72 }} />

      {/* Crisis Bar */}
      <div style={{ padding: '14px 20px', background: '#D94400', textAlign: 'center', color: 'white', fontSize: 14, fontWeight: 800, letterSpacing: 0.3 }}>
        ⚠️ If you need help now → Call or text <a href="tel:988" style={{ color: '#FFD93D', textDecoration: 'underline', fontWeight: 900 }}>988</a> · Text HOME to <a href="sms:741741" style={{ color: '#FFD93D', textDecoration: 'underline', fontWeight: 900 }}>741741</a> · You are never alone 💛
      </div>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #FFF5F7 0%, #F0E6FF 30%, #E0F7FA 60%, #FFF8E1 100%)', padding: '80px 0 60px' }}>
        <div style={{ position: 'absolute', top: -100, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,157,0.15), transparent 70%)', animation: 'float 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -100, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.12), transparent 70%)', animation: 'float2 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', left: '40%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,114,207,0.08), transparent 70%)', animation: 'float 12s ease-in-out infinite' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: '2px solid #FFB3D0', padding: '8px 18px', borderRadius: 50, fontSize: 12, fontWeight: 800, color: '#FF6B9D', textTransform: 'uppercase', letterSpacing: 1.5, boxShadow: '0 4px 16px rgba(255,107,157,0.1)' }}>
                💗 501(c)(3) Nonprofit · Frisco, Texas
              </div>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.1, fontWeight: 700, color: '#1a1a2e', margin: '20px 0', letterSpacing: -1 }}>
                Free mental health support for teens in{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF6B9D, #9B72CF, #5BC0EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Frisco & DFW</span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: '#555', fontWeight: 500 }}>
                Therapy, support groups, expressive art, meditation — all <strong>100% free</strong> and confidential. Because every child deserves a thriving mind. 🌱
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <button className="btn btn-pink btn-lg" onClick={() => setShowReg(true)}>I Need Help →</button>
                <button className="btn btn-green" onClick={() => setShowReg(true)}>I'm a Parent 💚</button>
                <button className="btn btn-purple btn-sm" onClick={() => setShowReg(true)}>I'm a Professional</button>
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
                {[['✅','100% Free'],['🧠','Licensed Therapists'],['🔒','Confidential'],['💳','No Insurance']].map(([e,t]) => (
                  <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, padding: '6px 14px', borderRadius: 20, background: 'white', color: '#555', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    {e} {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Hero Photo Collage */}
            <div style={{ position: 'relative', height: 520 }} className="hide-mobile">
              <div style={{ position: 'absolute', width: 220, height: 280, top: 20, left: 10, transform: 'rotate(-4deg)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <img src={IMAGES.eventPhoto1} alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', width: 200, height: 200, top: 0, right: 20, transform: 'rotate(3deg)', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <img src={IMAGES.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', width: 240, height: 180, bottom: 60, left: 40, transform: 'rotate(2deg)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <img src={IMAGES.groupEvent} alt="Group" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', width: 180, height: 240, bottom: 20, right: 0, transform: 'rotate(-3deg)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <img src={IMAGES.eventPhoto4} alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', width: 160, height: 160, top: 180, left: 200, transform: 'rotate(5deg)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', zIndex: 5 }}>
                <img src={IMAGES.paintSplash1} alt="Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <div style={{ padding: '0 32px', marginTop: -40, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1260, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {[
            { emoji: '🎓', num: '500+', label: 'Students Supported', bg: 'linear-gradient(135deg, #FFE0EB, #FFB3D0)' },
            { emoji: '💚', num: '50+', label: 'Free Therapy Sessions', bg: 'linear-gradient(135deg, #D4F5E9, #A8E6CF)' },
            { emoji: '🏫', num: '15', label: 'School Partners', bg: 'linear-gradient(135deg, #E0D4FF, #C4A8E6)' },
            { emoji: '✨', num: '100%', label: 'Free — Always', bg: 'linear-gradient(135deg, #FFF3C4, #FFD93D)' },
          ].map(s => (
            <div key={s.label} style={{ padding: 28, borderRadius: 24, textAlign: 'center', background: s.bg, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s' }}
              onMouseOver={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <div style={{ fontSize: 28, marginBottom: 6 }}>{s.emoji}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 38, fontWeight: 800, color: '#1a1a2e' }}>{s.num}</div>
              <div style={{ fontSize: 13, color: '#555', fontWeight: 600, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag tag-pink">What We Offer</span>
            <h2>Everything is free. No exceptions. 💗</h2>
            <p>Our programs are guided by licensed professionals and designed to meet teens where they are.</p>
          </div>
          {[
            { num: '01', title: 'Teen Support Groups', desc: 'Kids and teenagers talk about anxieties in a friendly environment — guided by a therapist. Practice positive self-talk that becomes part of who you are.', color: '#FF6B9D', bg: 'linear-gradient(135deg, #FFF0F5, #FFE0EB)', img: IMAGES.teensHappy },
            { num: '02', title: 'Free Therapy Appointments', desc: 'One-on-one sessions with therapists, psychiatrists, and psychologists — completely free. No insurance required.', color: '#4ECDC4', bg: 'linear-gradient(135deg, #E8FFF5, #D4F5E9)', img: IMAGES.talking },
            { num: '03', title: 'Expressive Art Therapy', desc: 'Sometimes pain can\'t be put into words. Through painting, drawing & clay, children express feelings and find relief.', color: '#9B72CF', bg: 'linear-gradient(135deg, #F5F0FF, #EDE0FF)', img: IMAGES.teensArt },
            { num: '04', title: 'Meditation & Mindfulness', desc: 'Practical breathing exercises you can use anywhere — before a test, during a panic attack, or any time you need to calm down.', color: '#5BC0EB', bg: 'linear-gradient(135deg, #F0FAFF, #D6EFFF)', img: IMAGES.yoga },
            { num: '05', title: 'School Workshops', desc: 'We bring mental health programming directly to Frisco ISD, Prosper ISD, McKinney ISD, Allen ISD & Plano ISD — free.', color: '#FFD93D', bg: 'linear-gradient(135deg, #FFFDE0, #FFF3C4)', img: IMAGES.school },
          ].map(svc => (
            <div key={svc.num} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 100px', gap: 32, alignItems: 'center', padding: '28px 32px', borderRadius: 24, marginBottom: 12, background: svc.bg, transition: 'all 0.3s', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.transform='translateX(8px)'}
              onMouseOut={e => e.currentTarget.style.transform='translateX(0)'}
            >
              <div style={{ fontFamily: 'var(--serif)', fontSize: 52, fontWeight: 800, color: svc.color }}>{svc.num}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>{svc.title}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{svc.desc}</p>
              </div>
              <div style={{ width: 100, height: 100, borderRadius: 20, overflow: 'hidden' }}>
                <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn btn-pink btn-lg" onClick={() => setShowReg(true)}>Register for Free Programs →</button>
          </div>
        </div>
      </section>

      {/* ═══ PHOTO BANNER ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, height: 200, overflow: 'hidden' }}>
        {[IMAGES.eventPhoto2, IMAGES.wixNature1, IMAGES.eventPhoto5, IMAGES.wixNature2, IMAGES.wixCommunity, IMAGES.groupEvent].map((img,i) => (
          <img key={i} src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)', transition: 'all 0.4s' }}
            onMouseOver={e => { e.target.style.filter='brightness(1)'; e.target.style.transform='scale(1.1)'; }}
            onMouseOut={e => { e.target.style.filter='brightness(0.9)'; e.target.style.transform='scale(1)'; }}
          />
        ))}
      </div>

      {/* ═══ ABOUT ═══ */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #FFF0F5, #E8F4FD, #F0E6FF, #FFF8E1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[IMAGES.eventPhoto2, IMAGES.eventPhoto5, IMAGES.paintSplash2, IMAGES.sunflowers].map((img,i) => (
                <div key={i} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,0.1)' }}>
                  <img src={img} alt="" style={{ width: '100%', height: i < 2 ? 200 : 180, objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
              <div style={{ gridColumn: 'span 2', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,0.1)' }}>
                <img src={IMAGES.groupEvent} alt="Group" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <div>
              <span className="section-tag tag-purple">Who We Are</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 38, fontWeight: 700, color: '#1a1a2e', margin: '16px 0 20px', lineHeight: 1.15 }}>Mental illness is real.<br/>But it does <em>not</em> define you. 💜</h2>
              <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 14 }}>
                ThrivingMindz is a <strong style={{ color: '#FF6B9D' }}>501(c)(3) nonprofit based in Frisco, Texas</strong> dedicated to supporting young people through their mental health journey.
              </p>
              <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 14 }}>
                Our passion stems from experiencing the damaging effects of mental distress firsthand. We want to create a sheltered environment and act as a helping hand on your path through life.
              </p>
              <div style={{ borderLeft: '4px solid #FF6B9D', padding: '16px 20px', margin: '20px 0', background: 'white', borderRadius: '0 16px 16px 0', fontFamily: 'var(--serif)', fontSize: 19, color: '#1a1a2e', lineHeight: 1.5, fontStyle: 'italic', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                "We believe everyone deserves happiness, so we are here to provide for those who cannot provide for themselves."
              </div>
              <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8 }}>Together, we can break the stigma. Let us help you <strong style={{ color: '#4ECDC4' }}>THRIVE</strong>. 🌱</p>
              <Link href="/programs" className="btn btn-green" style={{ marginTop: 20 }}>See Our Programs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag tag-green">Resources & Blog</span>
            <h2>Guides, tools & <em>real talk</em> 📖</h2>
            <p>Evidence-based content for teens, parents, and professionals in Frisco & DFW.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { img: IMAGES.wixNature1, cat: 'Local Resources', catClass: 'bc-pink', title: 'Free Mental Health Resources for Teens in Frisco & DFW', excerpt: 'Complete guide to free therapy, counseling, and support across Frisco, McKinney, Allen, Plano, and beyond.', time: '8 min', slug: 'free-mental-health-resources-frisco-dfw' },
              { img: IMAGES.wixNature2, cat: 'For Students', catClass: 'bc-green', title: 'How to Deal with Depression as a Teenager: A Real Guide', excerpt: 'Not just "think positive." Real tools that actually work.', time: '7 min', slug: 'how-to-deal-with-depression-teenager' },
              { img: IMAGES.wixCommunity, cat: 'For Parents', catClass: 'bc-purple', title: '5 Signs Your Teen May Be Struggling with Anxiety', excerpt: 'Teen anxiety often looks like anger or perfectionism — not worry.', time: '6 min', slug: 'signs-teen-anxiety' },
            ].map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none' }}>
                <div style={{ borderRadius: 24, overflow: 'hidden', border: '2px solid #f0f0f0', background: 'white', transition: 'all 0.35s', cursor: 'pointer' }}
                  onMouseOver={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(0,0,0,0.08)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
                >
                  <div style={{ height: 180, overflow: 'hidden' }}>
                    <img src={post.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: '#FF6B9D', padding: '4px 12px', borderRadius: 12, background: '#FFE0EB', display: 'inline-block', marginBottom: 8 }}>{post.cat}</span>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: '#1a1a2e', marginBottom: 8 }}>{post.title}</h3>
                    <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, marginBottom: 12 }}>{post.excerpt}</p>
                    <span style={{ fontSize: 12, color: '#bbb', fontWeight: 600 }}>{post.time} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/blog" className="btn btn-white">See All Posts →</Link>
          </div>
        </div>
      </section>

      {/* ═══ AUDIENCE ═══ */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #1a1a2e, #2d1b4e)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'rgba(255,179,208,0.2)', color: '#FFB3D0' }}>Join the Community</span>
            <h2 style={{ color: 'white' }}>How can we help you? 🤝</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
            {[
              { emoji: '🎓', title: 'Students & Teens', items: ['Free therapy & counseling','Support groups with peers','Art therapy & meditation','Thrive Ambassador program'], color: '#FF6B9D', bg: 'rgba(255,107,157,0.1)', border: 'rgba(255,107,157,0.2)' },
              { emoji: '👨‍👩‍👧', title: 'Parents & Families', items: ['Understand teen mental health','Connect your child to programs','Parent workshops','Free family resources'], color: '#4ECDC4', bg: 'rgba(78,205,196,0.1)', border: 'rgba(78,205,196,0.2)' },
              { emoji: '🧠', title: 'Professionals', items: ['Volunteer & give back','Paid jobs via ThrivingCare','CE credit opportunities','Professional networking'], color: '#9B72CF', bg: 'rgba(155,114,207,0.1)', border: 'rgba(155,114,207,0.2)' },
              { emoji: '🏫', title: 'Schools', items: ['Free on-site workshops','Student support groups','Staff mental health training','Staffing solutions'], color: '#FFD93D', bg: 'rgba(255,217,61,0.1)', border: 'rgba(255,217,61,0.2)' },
              { emoji: '💝', title: 'Donors & Sponsors', items: ['100% funds go to programs','Tax-deductible (501c3)','Impact reports & transparency','Named sponsorship opportunities'], color: '#FF7F6B', bg: 'rgba(255,127,107,0.1)', border: 'rgba(255,127,107,0.2)' },
            ].map(aud => (
              <div key={aud.title} onClick={() => setShowReg(true)} style={{
                borderRadius: 24, padding: '32px 24px', cursor: 'pointer', background: aud.bg, border: `1px solid ${aud.border}`,
                transition: 'all 0.35s',
              }}
                onMouseOver={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=`0 12px 36px ${aud.border}`; }}
                onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{aud.emoji}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 12 }}>{aud.title}</h3>
                {aud.items.map(item => <p key={item} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 4 }}>{item}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARTWORKS ═══ */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #FFF5F7, #F0E6FF, #E0F7FA)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag tag-purple">Features</span>
            <h2>Student Artworks & Expression 🎨</h2>
            <p>Art created by teens in our programs. Sometimes pain can't be put into words — but it can be painted.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 200, gap: 12 }}>
            {[
              { img: IMAGES.art1, tall: true },
              { img: IMAGES.art2 },
              { img: IMAGES.art5, tall: true },
              { img: IMAGES.art6 },
              { img: IMAGES.wixAbstract, wide: true },
              { img: IMAGES.art3 },
              { img: IMAGES.art4 },
              { img: IMAGES.paintSplash3 },
              { img: IMAGES.colorfulArt2 },
              { img: IMAGES.watercolor1, wide: true },
            ].map((art, i) => (
              <div key={i} style={{
                borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                gridRow: art.tall ? 'span 2' : 'span 1', gridColumn: art.wide ? 'span 2' : 'span 1',
                transition: 'all 0.4s', cursor: 'pointer',
              }}
                onMouseOver={e => { e.currentTarget.style.transform='scale(1.03)'; e.currentTarget.style.zIndex=5; }}
                onMouseOut={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.zIndex=1; }}
              >
                <img src={art.img} alt="Student artwork" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: 'linear-gradient(135deg, #FF6B9D, #9B72CF, #5BC0EB)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\' fill=\'rgba(255,255,255,0.15)\'/%3E%3C/svg%3E")' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 42, color: 'white', marginBottom: 12, textShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>Every child deserves a thriving mind. 🌱</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, marginBottom: 32, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>Join our growing community in Frisco and across DFW. Together, we can break the stigma.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-lg" style={{ background: 'white', color: '#1a1a2e', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} onClick={() => setShowReg(true)}>Register Now →</button>
            <Link href="/get-involved" className="btn btn-yellow btn-lg">Donate ❤️</Link>
          </div>
        </div>
      </section>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
