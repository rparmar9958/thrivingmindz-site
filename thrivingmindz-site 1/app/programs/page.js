'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RegisterModal from '../../components/RegisterModal';
import { IMAGES } from '../../content/images';

const programs = [
  {
    num: '01', title: 'Teen Support Groups', color: '#FF6B9D', bg: 'linear-gradient(135deg, #FFF0F5, #FFE0EB)',
    img: IMAGES.teensHappy,
    desc: 'Our talk groups allow kids and teenagers to discuss their anxieties and emotions in a friendly, supportive environment — guided by a therapist. Children practice positive self-talk sessions where they say uplifting words about their strengths. Over time, these positive words become integrated into their subconscious mind.',
    details: ['Organized by age group and needs', 'All sessions guided by a licensed therapist', 'Practice positive self-talk techniques', 'Build connections with peers who understand', 'Weekly sessions in Frisco & DFW'],
    emoji: '👥',
  },
  {
    num: '02', title: 'Free Therapy Appointments', color: '#4ECDC4', bg: 'linear-gradient(135deg, #E8FFF5, #D4F5E9)',
    img: IMAGES.talking,
    desc: 'One-on-one sessions with therapists, psychiatrists, and psychologists — completely free and based on need. No insurance required. Appointments involve personalized sessions where teens learn to recognize and address cognitive distortions.',
    details: ['Licensed therapists, psychiatrists & psychologists', 'Completely free — no insurance needed', 'Based on individual need', 'Confidential and judgment-free', 'Available in Frisco and across DFW'],
    emoji: '💚',
  },
  {
    num: '03', title: 'Expressive Art Therapy', color: '#9B72CF', bg: 'linear-gradient(135deg, #F5F0FF, #EDE0FF)',
    img: IMAGES.teensArt,
    desc: 'Sometimes pain can\'t be put into words. Through painting, drawing, clay, and mixed media, children create abstract art to express themselves and relieve stress. Art becomes a way to release daily pressures and explore emotions safely.',
    details: ['Painting, drawing, clay & mixed media', 'No artistic skill required', 'Therapeutic — not just creative', 'Display your work in our gallery', 'Led by trained art therapy facilitators'],
    emoji: '🎨',
  },
  {
    num: '04', title: 'Meditation & Mindfulness', color: '#5BC0EB', bg: 'linear-gradient(135deg, #F0FAFF, #D6EFFF)',
    img: IMAGES.yoga,
    desc: 'We teach practical breathing exercises teens can use anywhere — before a test, during a panic attack, or any time they need to calm down. Over time, meditation builds lasting focus, concentration, and emotional resilience.',
    details: ['Practical techniques for everyday use', 'Works for anxiety, stress & panic', 'Builds long-term focus & concentration', 'Can be practiced anywhere', 'Guided by experienced practitioners'],
    emoji: '🧘',
  },
  {
    num: '05', title: 'School Workshops', color: '#FFD93D', bg: 'linear-gradient(135deg, #FFFDE0, #FFF3C4)',
    img: IMAGES.school,
    desc: 'We bring mental health programming directly to schools. Our workshops educate students and staff about mental health symptoms, coping strategies, and available resources — all at zero cost to the school.',
    details: ['Free to all participating schools', 'Customized for each school\'s needs', 'Staff training available', 'Currently serving Frisco ISD, Prosper ISD, McKinney ISD, Allen ISD, Plano ISD', 'Assemblies, classroom sessions & more'],
    emoji: '🏫',
  },
];

export default function ProgramsPage() {
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      {/* Hero */}
      <section style={{ padding: '120px 0 60px', background: 'linear-gradient(135deg, #FFF5F7, #F0E6FF, #E0F7FA)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,157,0.1), transparent 70%)', animation: 'float 8s ease-in-out infinite' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="section-tag tag-pink">Our Programs</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, color: 'var(--dark)', marginTop: 16 }}>
            Everything is free. No exceptions. 💗
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 580, margin: '12px auto 28px', lineHeight: 1.7 }}>
            All programs are guided by licensed professionals, completely confidential, and designed to meet teens where they are.
          </p>
          <button className="btn btn-pink btn-lg" onClick={() => setShowReg(true)}>Register for Free →</button>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          {programs.map((prog, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 48, alignItems: 'center', marginBottom: 64, direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 24px',
                  borderRadius: 20, background: prog.bg, marginBottom: 16,
                }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 800, color: prog.color }}>{prog.num}</span>
                  <span style={{ fontSize: 28 }}>{prog.emoji}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>{prog.title}</h2>
                <p style={{ color: 'var(--text-light)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{prog.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  {prog.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--text-light)' }}>
                      <span style={{ color: prog.color, fontWeight: 800, marginTop: 2 }}>✓</span>{d}
                    </div>
                  ))}
                </div>
                <button className="btn btn-pink btn-sm" onClick={() => setShowReg(true)}>Sign Up Free →</button>
              </div>
              <div style={{ direction: 'ltr', borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
                <img src={prog.img} alt={prog.title} style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, var(--pink), var(--purple), var(--sky))', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'white', marginBottom: 12 }}>Ready to get started? 🌱</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 28 }}>All programs are free. Register today and we'll connect you with the right support.</p>
        <button className="btn btn-lg" style={{ background: 'white', color: 'var(--dark)' }} onClick={() => setShowReg(true)}>Register Now →</button>
      </section>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
