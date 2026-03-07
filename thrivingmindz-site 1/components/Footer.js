import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '56px 32px 24px', background: '#1a1a2e', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32, maxWidth: 1260, margin: '0 auto' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 30, height: 30, borderRadius: 10, background: 'linear-gradient(135deg,#FF6B9D,#9B72CF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 13 }}>T</div>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 700, color: 'white' }}>ThrivingMindz</span>
          </div>
          <p style={{ lineHeight: 1.7 }}>501(c)(3) Nonprofit · EIN: 84-1820560</p>
          <p style={{ marginTop: 8 }}>📍 Frisco, Texas</p>
          <p>✉️ thrivingmindz@gmail.com</p>
          <p>📞 (214) 529-6208</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href="https://instagram.com/thrivingmindz" style={{ color: '#FF6B9D', textDecoration: 'none', fontWeight: 700, fontSize: 12 }}>Instagram</a>
            <a href="#" style={{ color: '#5BC0EB', textDecoration: 'none', fontWeight: 700, fontSize: 12 }}>Facebook</a>
            <a href="#" style={{ color: '#9B72CF', textDecoration: 'none', fontWeight: 700, fontSize: 12 }}>TikTok</a>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: 13, color: 'white', marginBottom: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Programs</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Support Groups</Link>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Free Therapy</Link>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Art Therapy</Link>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Meditation</Link>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>School Workshops</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: 13, color: 'white', marginBottom: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Serving</h4>
          <p style={{ lineHeight: 1.8 }}>Frisco · Prosper · McKinney</p>
          <p style={{ lineHeight: 1.8 }}>Allen · Plano · The Colony</p>
          <p style={{ lineHeight: 1.8 }}>Little Elm · Celina · Denton</p>
          <p style={{ lineHeight: 1.8, marginTop: 4, color: '#FFB3D0' }}>& all of DFW 💗</p>
        </div>

        <div>
          <h4 style={{ fontSize: 13, color: '#FF7F6B', marginBottom: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>If You Need Help Now</h4>
          <p style={{ color: '#FF7F6B', fontWeight: 700, marginBottom: 4 }}>988 Suicide & Crisis Lifeline</p>
          <p>Call or text 988 (24/7)</p>
          <p style={{ marginTop: 10, color: '#FF7F6B', fontWeight: 700, marginBottom: 4 }}>Crisis Text Line</p>
          <p>Text HOME to 741741</p>
        </div>
      </div>

      <div style={{
        maxWidth: 1260, margin: '32px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, flexWrap: 'wrap', gap: 12,
      }}>
        <div>© 2026 ThrivingMindz. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <span>Partner: <a href="https://thrivingcarestaffing.com" style={{ color: '#4ECDC4', textDecoration: 'none' }}>ThrivingCare Staffing</a></span>
        </div>
      </div>
    </footer>
  );
}
