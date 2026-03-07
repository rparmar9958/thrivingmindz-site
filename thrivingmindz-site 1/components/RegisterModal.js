'use client';
import { useState } from 'react';

const DISTRICTS = ['Frisco ISD','Prosper ISD','McKinney ISD','Allen ISD','Plano ISD','Little Elm ISD','Celina ISD','Denton ISD','Lewisville ISD','Other'];
const INTERESTS = ['Anxiety/Stress','Depression','Bullying','Social Media Impact','Self-Esteem','Academic Pressure','Art Therapy','Meditation','Peer Support','LGBTQ+ Support'];
const DISCIPLINES = ['LCSW','LPC','LMFT','Psychologist','School Psychologist','Psychiatrist','PMHNP','BCBA','Counseling Intern','Other'];

export default function RegisterModal({ show, onClose }) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const [form, setForm] = useState({});
  const [interests, setInterests] = useState([]);

  if (!show) return null;

  const toggleInterest = (tag) => setInterests(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  const types = [
    { id: 'student', emoji: '🎓', label: "I'm a Student / Teen", desc: 'Free therapy, support groups, art therapy & more', color: '#FF6B9D', hoverBg: '#FFF5F8' },
    { id: 'parent', emoji: '👨‍👩‍👧', label: "I'm a Parent / Guardian", desc: 'Connect your child to free programs', color: '#4ECDC4', hoverBg: '#F0FBF9' },
    { id: 'professional', emoji: '🧠', label: "I'm a Professional", desc: 'Volunteer, paid roles, advisory positions', color: '#9B72CF', hoverBg: '#F8F0FF' },
    { id: 'school', emoji: '🏫', label: "I'm a School Admin", desc: 'Free workshops & programs for your school', color: '#FFD93D', hoverBg: '#FFFBE0' },
  ];

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) { onClose(); setStep(1); setType(''); } }}>
      <div className="modal">
        <button onClick={() => { onClose(); setStep(1); setType(''); }} style={{ position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>✕</button>

        {/* Progress */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {[1,2,3].map(s => (
            <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: step >= s ? 'linear-gradient(90deg, #FF6B9D, #9B72CF)' : '#eee', transition: 'all 0.3s' }} />
          ))}
        </div>

        {/* STEP 1: Choose type */}
        {step === 1 && (
          <>
            <div style={{ textAlign: 'center', fontSize: 40, marginBottom: 8 }}>🌈</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 4 }}>Join ThrivingMindz</h2>
            <p style={{ color: '#888', fontSize: 14, textAlign: 'center', marginBottom: 24 }}>Free programs for teens in Frisco & DFW 💗</p>
            {types.map(t => (
              <div key={t.id} onClick={() => { setType(t.id); setStep(2); }}
                style={{
                  padding: 16, borderRadius: 20, border: '2px solid #f0f0f0', cursor: 'pointer',
                  transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10,
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.background = t.hoverBg; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = '#f0f0f0'; e.currentTarget.style.background = 'white'; }}
              >
                <span style={{ fontSize: 30 }}>{t.emoji}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: '#1a1a2e' }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </>
        )}

        {/* STEP 2: Basic info */}
        {step === 2 && (
          <>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Tell us about yourself</h2>
            <p style={{ color: '#888', fontSize: 14, marginBottom: 24 }}>All information is kept confidential.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input className="input" placeholder="Full Name" onChange={e => setForm({...form, name: e.target.value})} />
              <input className="input" type="email" placeholder="Email Address" onChange={e => setForm({...form, email: e.target.value})} />
              <input className="input" type="tel" placeholder="Phone Number" onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn btn-white btn-sm" onClick={() => setStep(1)}>← Back</button>
              <button className="btn btn-pink" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(3)}>Continue →</button>
            </div>
          </>
        )}

        {/* STEP 3: Type-specific */}
        {step === 3 && type === 'student' && (
          <>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Almost done! 🎓</h2>
            <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>Help us match you with the right programs.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <select className="select" onChange={e => setForm({...form, district: e.target.value})}>
                <option value="">Select your school district</option>
                {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <input className="input" placeholder="School Name" onChange={e => setForm({...form, school: e.target.value})} />
              <select className="select" onChange={e => setForm({...form, grade: e.target.value})}>
                <option value="">Grade Level</option>
                {['6th','7th','8th','9th','10th','11th','12th','College Freshman','College Sophomore','College Junior','College Senior'].map(g => <option key={g}>{g}</option>)}
              </select>
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: '#555', display: 'block', marginBottom: 8 }}>What interests you? (select all that apply)</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {INTERESTS.map(tag => (
                    <span key={tag} className={`chip ${interests.includes(tag) ? 'selected' : ''}`} onClick={() => toggleInterest(tag)}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn btn-white btn-sm" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-pink" style={{ flex: 1, justifyContent: 'center' }} onClick={() => alert('Registration submitted! We will contact you soon. 💗')}>Submit →</button>
            </div>
          </>
        )}

        {step === 3 && type === 'parent' && (
          <>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>About your child 👨‍👩‍👧</h2>
            <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>We'll connect them with the right support.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <select className="select" onChange={e => setForm({...form, childAge: e.target.value})}>
                <option value="">Child's age range</option>
                <option>10-12</option><option>13-15</option><option>16-18</option><option>18+</option>
              </select>
              <select className="select" onChange={e => setForm({...form, district: e.target.value})}>
                <option value="">School District</option>
                {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select className="select" onChange={e => setForm({...form, concern: e.target.value})}>
                <option value="">Primary concern</option>
                <option>Anxiety</option><option>Depression</option><option>Bullying</option><option>Social/peer issues</option><option>Academic stress</option><option>Behavior changes</option><option>General wellness</option><option>Other</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn btn-white btn-sm" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-green" style={{ flex: 1, justifyContent: 'center' }} onClick={() => alert('Registration submitted! We will contact you soon. 💚')}>Submit →</button>
            </div>
          </>
        )}

        {step === 3 && type === 'professional' && (
          <>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Your credentials 🧠</h2>
            <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>Tell us about your professional background.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <select className="select" onChange={e => setForm({...form, discipline: e.target.value})}>
                <option value="">Discipline / License Type</option>
                {DISCIPLINES.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <input className="input" placeholder="License #" onChange={e => setForm({...form, license: e.target.value})} />
              <input className="input" placeholder="Specialty (e.g., teen anxiety, trauma)" onChange={e => setForm({...form, specialty: e.target.value})} />
              <select className="select" onChange={e => setForm({...form, interest: e.target.value})}>
                <option value="">I'm interested in...</option>
                <option>Volunteer with ThrivingMindz</option>
                <option>Paid positions via ThrivingCare</option>
                <option>Both volunteer & paid</option>
                <option>Advisory / Board role</option>
                <option>Speaking / Workshop facilitation</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn btn-white btn-sm" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-purple" style={{ flex: 1, justifyContent: 'center' }} onClick={() => alert('Registration submitted! We will contact you soon. 💜')}>Submit →</button>
            </div>
          </>
        )}

        {step === 3 && type === 'school' && (
          <>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>School information 🏫</h2>
            <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>We'll tailor our programs to your school's needs.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <select className="select" onChange={e => setForm({...form, district: e.target.value})}>
                <option value="">School District</option>
                {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <input className="input" placeholder="School Name" onChange={e => setForm({...form, school: e.target.value})} />
              <input className="input" placeholder="Your Role (e.g., Principal, Counselor)" onChange={e => setForm({...form, role: e.target.value})} />
              <select className="select" onChange={e => setForm({...form, interest: e.target.value})}>
                <option value="">Interested in...</option>
                <option>Student workshops</option>
                <option>Staff training</option>
                <option>Staffing solutions</option>
                <option>All of the above</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn btn-white btn-sm" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-yellow" style={{ flex: 1, justifyContent: 'center', color: '#1a1a2e' }} onClick={() => alert('Registration submitted! We will contact you soon. 💛')}>Submit →</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
