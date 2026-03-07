'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RegisterModal from '../../components/RegisterModal';
import { IMAGES } from '../../content/images';

const ways = [
  {
    emoji: '💗', title: 'Donate', color: '#FF6B9D', bg: 'linear-gradient(135deg, #FFF0F5, #FFE0EB)',
    desc: 'Your donation directly funds free therapy sessions, support groups, art supplies, and mental health workshops for teens who can\'t afford them.',
    impact: ['$25 = Art supplies for one workshop', '$50 = One free therapy session', '$200 = Support group materials for a month', '$500 = Full school workshop program'],
  },
  {
    emoji: '🤝', title: 'Volunteer', color: '#4ECDC4', bg: 'linear-gradient(135deg, #E8FFF5, #D4F5E9)',
    desc: 'Help us run events, mentor teens, assist with outreach, organize art workshops, or support our social media and community building.',
    impact: ['Event setup & coordination', 'Teen mentoring & peer support', 'Art workshop facilitation', 'Social media & content creation', 'Community outreach in Frisco & DFW'],
  },
  {
    emoji: '🧠', title: 'Join as a Professional', color: '#9B72CF', bg: 'linear-gradient(135deg, #F5F0FF, #EDE0FF)',
    desc: 'Licensed therapists, counselors, psychologists, and other mental health professionals can volunteer their time or find paid opportunities through our partner ThrivingCare Staffing.',
    impact: ['Volunteer clinical hours', 'Paid positions via ThrivingCare Staffing', 'Advisory & board roles', 'Speaking & workshop facilitation', 'CE credit opportunities'],
  },
  {
    emoji: '🏫', title: 'Partner as a School', color: '#FFD93D', bg: 'linear-gradient(135deg, #FFFDE0, #FFF3C4)',
    desc: 'We bring free mental health programming to schools across DFW. Invite us to your campus for workshops, assemblies, support groups, or staff training.',
    impact: ['Mental health awareness assemblies', 'Student support group programs', 'Staff wellness training', 'Crisis resource distribution', 'Ongoing partnership opportunities'],
  },
  {
    emoji: '📣', title: 'Spread the Word', color: '#5BC0EB', bg: 'linear-gradient(135deg, #F0FAFF, #D6EFFF)',
    desc: 'Follow us on social media, share our content, tell a friend, or write about us. Every share reaches a teen who might need help.',
    impact: ['Follow @thrivingmindz on Instagram', 'Share our posts & stories', 'Tell a friend, teacher, or counselor', 'Write about us or feature our work', 'Join our email newsletter'],
  },
];

export default function GetInvolvedPage() {
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      {/* Hero */}
      <section style={{ padding: '120px 0 60px', background: 'linear-gradient(135deg, #FFF8E1, #FFF5F7, #E0F7FA)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, left: '30%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,217,61,0.1), transparent 70%)', animation: 'float 9s ease-in-out infinite' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="section-tag tag-yellow">Get Involved</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, color: 'var(--dark)', marginTop: 16 }}>
            Be part of the change ✨
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 580, margin: '12px auto 0', lineHeight: 1.7 }}>
            Whether you donate, volunteer, or simply share our story — every action helps a teen who is struggling.
          </p>
        </div>
      </section>

      {/* Photo Banner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, height: 180, overflow: 'hidden' }}>
        {[IMAGES.communityHands, IMAGES.sunflowers, IMAGES.eventPhoto1, IMAGES.paintSplash1, IMAGES.handsHeart].map((img, i) => (
          <img key={i} src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
        ))}
      </div>

      {/* Ways to Help */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          {ways.map((w, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
              marginBottom: 48, direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr', padding: 40, borderRadius: 28, background: w.bg }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{w.emoji}</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>{w.title}</h2>
                <p style={{ fontSize: 15, color: 'var(--text-light)', lineHeight: 1.8, marginBottom: 20 }}>{w.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {w.impact.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-light)' }}>
                      <span style={{ color: w.color, fontWeight: 800 }}>→</span> {item}
                    </div>
                  ))}
                </div>
                <button className="btn btn-sm" style={{ marginTop: 20, background: w.color, color: 'white' }} onClick={() => setShowReg(true)}>
                  {w.title === 'Donate' ? 'Donate Now' : 'Get Started'} →
                </button>
              </div>
              <div style={{ direction: 'ltr', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[IMAGES.teensHappy, IMAGES.painting, IMAGES.flowers, IMAGES.communityHands].slice(i % 3, i % 3 + 2).concat([IMAGES.sunrise, IMAGES.garden].slice(i % 2, i % 2 + 2)).map((img, j) => (
                  <div key={j} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 6px 24px rgba(0,0,0,0.06)' }}>
                    <img src={img} alt="" style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tax Info */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(135deg, #FFF0F5, #EDE0FF)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: 15, color: 'var(--text-light)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--pink)' }}>ThrivingMindz</strong> is recognized by the IRS as a 501(c)(3) charitable organization (EIN: 84-1820560).
            Your donation is tax-deductible to the full extent of the law. 💗
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, var(--yellow), var(--orange), var(--coral))', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'white', marginBottom: 12 }}>Every action matters 💛</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>Donate, volunteer, partner, or share. Together we can help every teen thrive.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-lg" style={{ background: 'white', color: 'var(--dark)' }} onClick={() => setShowReg(true)}>Join Us →</button>
          <button className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid rgba(255,255,255,0.4)' }}>Donate ❤️</button>
        </div>
      </section>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
