'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RegisterModal from '../../components/RegisterModal';
import { IMAGES } from '../../content/images';

const upcomingEvents = [
  {
    title: 'Teen Support Group — Frisco',
    date: 'Every Saturday',
    time: '10:00 AM – 11:30 AM',
    location: 'Frisco, TX',
    type: 'Support Group',
    color: '#FF6B9D',
    bg: 'linear-gradient(135deg, #FFF0F5, #FFE0EB)',
    emoji: '👥',
    desc: 'A safe, welcoming space for teens to share, listen, and support each other. Guided by a licensed therapist.',
  },
  {
    title: 'Expressive Art Workshop',
    date: 'March 15, 2026',
    time: '2:00 PM – 4:00 PM',
    location: 'Frisco, TX',
    type: 'Workshop',
    color: '#9B72CF',
    bg: 'linear-gradient(135deg, #F5F0FF, #EDE0FF)',
    emoji: '🎨',
    desc: 'Create abstract art using paint, clay, and mixed media. No experience needed — just bring your feelings.',
  },
  {
    title: 'Meditation & Mindfulness for Teens',
    date: 'March 22, 2026',
    time: '11:00 AM – 12:00 PM',
    location: 'Frisco, TX',
    type: 'Workshop',
    color: '#5BC0EB',
    bg: 'linear-gradient(135deg, #F0FAFF, #D6EFFF)',
    emoji: '🧘',
    desc: 'Learn breathing techniques and mindfulness exercises you can use anywhere — before tests, during stress, or just to feel calmer.',
  },
  {
    title: 'Mental Health Awareness Assembly',
    date: 'April 5, 2026',
    time: '9:00 AM – 10:30 AM',
    location: 'Frisco ISD Campus',
    type: 'School Event',
    color: '#FFD93D',
    bg: 'linear-gradient(135deg, #FFFDE0, #FFF3C4)',
    emoji: '🏫',
    desc: 'Bringing mental health education directly to schools. Interactive presentation with Q&A and resource giveaways.',
  },
  {
    title: 'Parent Workshop: Understanding Teen Anxiety',
    date: 'April 12, 2026',
    time: '6:30 PM – 8:00 PM',
    location: 'Frisco, TX',
    type: 'Parent Event',
    color: '#4ECDC4',
    bg: 'linear-gradient(135deg, #E8FFF5, #D4F5E9)',
    emoji: '👨‍👩‍👧',
    desc: 'Learn the signs of teen anxiety, how to start conversations, and when to seek professional help. Free for all parents.',
  },
];

const pastHighlights = [
  { img: IMAGES.eventPhoto1, caption: 'Community gathering' },
  { img: IMAGES.eventPhoto2, caption: 'Team event' },
  { img: IMAGES.groupEvent, caption: 'Group support session' },
  { img: IMAGES.eventPhoto5, caption: 'Outreach event' },
  { img: IMAGES.art1, caption: 'Student artwork' },
  { img: IMAGES.wixNature1, caption: 'Hope & healing' },
];

export default function EventsPage() {
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      {/* Hero */}
      <section style={{ padding: '120px 0 60px', background: 'linear-gradient(135deg, #E0F7FA, #F0E6FF, #FFF5F7)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -60, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.12), transparent 70%)', animation: 'float2 10s ease-in-out infinite' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="section-tag tag-green">Events & Workshops</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, color: 'var(--dark)', marginTop: 16 }}>
            Join us & help make change 🌈
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 560, margin: '12px auto 28px', lineHeight: 1.7 }}>
            All events are free and open to teens, parents, educators, and mental health professionals across Frisco & DFW.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag tag-pink">Upcoming</span>
            <h2>Events & Workshops</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {upcomingEvents.map((evt, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 24, alignItems: 'center',
                padding: '28px 32px', borderRadius: 24, background: evt.bg, transition: 'all 0.3s',
                cursor: 'pointer',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36 }}>{evt.emoji}</div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 10px', borderRadius: 10, fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, background: 'rgba(255,255,255,0.7)', color: evt.color }}>{evt.type}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>{evt.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.6, marginBottom: 6 }}>{evt.desc}</p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>
                    <span>📅 {evt.date}</span>
                    <span>🕐 {evt.time}</span>
                    <span>📍 {evt.location}</span>
                  </div>
                </div>
                <button className="btn btn-sm" style={{ background: evt.color, color: 'white', boxShadow: 'none', whiteSpace: 'nowrap' }} onClick={() => setShowReg(true)}>
                  RSVP Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Event Photos */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #FFF5F7, #F0E6FF, #E0F7FA)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag tag-purple">Memories</span>
            <h2>Past Event Highlights 📸</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {pastHighlights.map((ph, i) => (
              <div key={i} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,0.08)', transition: 'transform 0.4s', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={ph.img} alt={ph.caption} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, var(--green), var(--sky), var(--purple))', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'white', marginBottom: 12 }}>Want to host an event? 🤝</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>We bring free workshops to schools, community centers, and organizations across DFW.</p>
        <button className="btn btn-lg" style={{ background: 'white', color: 'var(--dark)' }} onClick={() => setShowReg(true)}>Get In Touch →</button>
      </section>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
