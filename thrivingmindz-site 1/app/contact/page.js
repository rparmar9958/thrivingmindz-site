'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RegisterModal from '../../components/RegisterModal';
import { IMAGES } from '../../content/images';

export default function ContactPage() {
  const [showReg, setShowReg] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });

  return (
    <>
      <Nav onRegister={() => setShowReg(true)} />

      {/* Hero */}
      <section style={{ padding: '120px 0 60px', background: 'linear-gradient(135deg, #E0F7FA, #FFF5F7, #FFF8E1)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -50, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,192,235,0.1), transparent 70%)', animation: 'float 8s ease-in-out infinite' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="section-tag tag-sky">Contact Us</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, color: 'var(--dark)', marginTop: 16 }}>
            Let's work together 💙
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 560, margin: '12px auto 0', lineHeight: 1.7 }}>
            Have questions? Want to partner? Need help? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>

            {/* Contact Form */}
            <div style={{ background: 'white', borderRadius: 28, padding: 40, border: '2px solid #f0f0f0' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, color: 'var(--dark)', marginBottom: 24 }}>Send us a message ✉️</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-light)', display: 'block', marginBottom: 6 }}>Your Name</label>
                  <input className="input" placeholder="First & last name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-light)', display: 'block', marginBottom: 6 }}>Email Address</label>
                  <input className="input" type="email" placeholder="you@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-light)', display: 'block', marginBottom: 6 }}>I am a...</label>
                  <select className="select" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option value="">Select one</option>
                    <option value="student">Student / Teen</option>
                    <option value="parent">Parent / Guardian</option>
                    <option value="professional">Mental Health Professional</option>
                    <option value="school">School Administrator</option>
                    <option value="donor">Potential Donor</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-light)', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea className="textarea" placeholder="How can we help?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>
                <button className="btn btn-pink btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>Send Message →</button>
              </div>
            </div>

            {/* Contact Info & Art */}
            <div>
              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(135deg, #FFF0F5, #FFE0EB)' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>✉️</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Email</h3>
                  <a href="mailto:thrivingmindz@gmail.com" style={{ color: 'var(--pink)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>thrivingmindz@gmail.com</a>
                </div>
                <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(135deg, #E8FFF5, #D4F5E9)' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>📞</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Phone</h3>
                  <a href="tel:2145296208" style={{ color: 'var(--green-deep)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>(214) 529-6208</a>
                  <span style={{ color: 'var(--text-muted)', fontSize: 13, display: 'block' }}>Alt: (214) 529-6146</span>
                </div>
                <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(135deg, #F5F0FF, #EDE0FF)' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>📍</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Location</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: 15 }}>Frisco, Texas</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Serving all of Dallas-Fort Worth</p>
                </div>
                <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(135deg, #F0FAFF, #D6EFFF)' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>📱</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Social Media</h3>
                  <a href="https://instagram.com/thrivingmindz" style={{ color: 'var(--blue)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>@thrivingmindz on Instagram</a>
                </div>
              </div>

              {/* Decorative Art */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}>
                  <img src={IMAGES.paintSplash2} alt="Art" style={{ width: '100%', height: 120, objectFit: 'cover' }} />
                </div>
                <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}>
                  <img src={IMAGES.colorfulArt1} alt="Art" style={{ width: '100%', height: 120, objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis */}
      <section style={{ padding: '40px 0', background: 'linear-gradient(135deg, var(--coral), var(--pink))', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'white', marginBottom: 8 }}>If you need help right now</h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>
          Call or text <a href="tel:988" style={{ color: 'white', fontWeight: 800, textDecoration: 'underline' }}>988</a> (Suicide & Crisis Lifeline) · Text HOME to <a href="sms:741741" style={{ color: 'white', fontWeight: 800, textDecoration: 'underline' }}>741741</a> (Crisis Text Line)
        </p>
      </section>

      <Footer />
      <RegisterModal show={showReg} onClose={() => setShowReg(false)} />
    </>
  );
}
