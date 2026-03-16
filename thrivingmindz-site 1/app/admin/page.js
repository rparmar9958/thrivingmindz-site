'use client';
import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://exemplary-learning-production-3217.up.railway.app';

export default function AdminPage() {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [stats, setStats] = useState(null);
  const [regs, setRegs] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState({ type: '', status: '', search: '' });
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('dashboard');

  const headers = () => ({ 'Authorization': 'Basic ' + btoa(auth.user + ':' + auth.pass), 'Content-Type': 'application/json' });

  const login = async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/stats`, { headers: { 'Authorization': 'Basic ' + btoa(user + ':' + pass) } });
      if (res.ok) {
        setAuth({ user, pass });
      } else {
        alert('Invalid credentials');
      }
    } catch { alert('Connection error'); }
  };

  useEffect(() => {
    if (!auth) return;
    fetchStats();
    fetchRegs();
  }, [auth]);

  const fetchStats = async () => {
    const res = await fetch(`${API_URL}/api/admin/stats`, { headers: headers() });
    if (res.ok) setStats(await res.json());
  };

  const fetchRegs = async () => {
    setLoading(true);
    let url = `${API_URL}/api/admin/registrations?limit=100`;
    if (filter.type) url += `&type=${filter.type}`;
    if (filter.status) url += `&status=${filter.status}`;
    if (filter.search) url += `&search=${filter.search}`;
    const res = await fetch(url, { headers: headers() });
    if (res.ok) {
      const data = await res.json();
      setRegs(data.registrations);
      setTotal(data.total);
    }
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    await fetch(`${API_URL}/api/admin/registrations/${id}/status`, { method: 'PUT', headers: headers(), body: JSON.stringify({ status }) });
    fetchRegs();
    fetchStats();
  };

  const deleteReg = async (id) => {
    if (!confirm('Delete this registration?')) return;
    await fetch(`${API_URL}/api/admin/registrations/${id}`, { method: 'DELETE', headers: headers() });
    fetchRegs();
    fetchStats();
  };

  const exportCSV = () => {
    let url = `${API_URL}/api/admin/export`;
    if (filter.type) url += `?type=${filter.type}`;
    window.open(url.replace('://', `://${auth.user}:${auth.pass}@`), '_blank');
  };

  if (!auth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f8fc', paddingTop: 100 }}>
        <div style={{ background: 'white', padding: 40, borderRadius: 24, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', width: 400, maxWidth: '90%' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>🔐 Admin Login</h1>
          <p style={{ color: '#888', textAlign: 'center', marginBottom: 24, fontSize: 14 }}>ThrivingMindz Dashboard</p>
          <input className="input" placeholder="Username" value={user} onChange={e => setUser(e.target.value)} style={{ marginBottom: 12, width: '100%' }} />
          <input className="input" type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && login()} style={{ marginBottom: 20, width: '100%' }} />
          <button className="btn btn-pink" onClick={login} style={{ width: '100%', justifyContent: 'center' }}>Login →</button>
        </div>
      </div>
    );
  }

  const typeColors = { student: '#FF6B9D', parent: '#4ECDC4', professional: '#9B72CF', school: '#FFD93D', donor: '#FF7F6B' };
  const statusColors = { new: '#3B82F6', contacted: '#F59E0B', enrolled: '#10B981', active: '#8B5CF6' };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f8fc', paddingTop: 120, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 700 }}>ThrivingMindz Admin</h1>
            <p style={{ color: '#888', fontSize: 14 }}>Registration Dashboard</p>
          </div>
          <button className="btn btn-white btn-sm" onClick={() => setAuth(null)}>Logout</button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {['dashboard', 'registrations'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '10px 24px', borderRadius: 12, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, background: tab === t ? '#1a1a2e' : '#e8e8f0', color: tab === t ? 'white' : '#666', transition: 'all 0.2s' }}>
              {t === 'dashboard' ? '📊 Dashboard' : '👥 Registrations'}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {tab === 'dashboard' && stats && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 30 }}>
              <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#FF6B9D' }}>{stats.total}</div>
                <div style={{ color: '#888', fontSize: 13, fontWeight: 600 }}>Total Registrations</div>
              </div>
              <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#4ECDC4' }}>{stats.this_week}</div>
                <div style={{ color: '#888', fontSize: 13, fontWeight: 600 }}>This Week</div>
              </div>
              <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#9B72CF' }}>{stats.today}</div>
                <div style={{ color: '#888', fontSize: 13, fontWeight: 600 }}>Today</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>By Type</h3>
                {stats.by_type.map(t => (
                  <div key={t.type} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: typeColors[t.type] || '#ccc' }} />
                      {t.type}
                    </span>
                    <strong>{t.count}</strong>
                  </div>
                ))}
              </div>
              <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>By Status</h3>
                {stats.by_status.map(s => (
                  <div key={s.status} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: statusColors[s.status] || '#ccc' }} />
                      {s.status}
                    </span>
                    <strong>{s.count}</strong>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Registrations Tab */}
        {tab === 'registrations' && (
          <>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <select className="select" value={filter.type} onChange={e => setFilter({...filter, type: e.target.value})} style={{ width: 'auto' }}>
                <option value="">All Types</option>
                <option value="student">Student</option><option value="parent">Parent</option><option value="professional">Professional</option><option value="school">School</option><option value="donor">Donor</option>
              </select>
              <select className="select" value={filter.status} onChange={e => setFilter({...filter, status: e.target.value})} style={{ width: 'auto' }}>
                <option value="">All Statuses</option>
                <option value="new">New</option><option value="contacted">Contacted</option><option value="enrolled">Enrolled</option><option value="active">Active</option>
              </select>
              <input className="input" placeholder="Search name/email..." value={filter.search} onChange={e => setFilter({...filter, search: e.target.value})} style={{ width: 220 }} />
              <button className="btn btn-pink btn-sm" onClick={fetchRegs}>Search</button>
              <button className="btn btn-white btn-sm" onClick={exportCSV}>📥 Export CSV</button>
            </div>
            <p style={{ color: '#888', fontSize: 13, marginBottom: 12 }}>{total} registrations found</p>
            <div style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#f8f8fc' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Date</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Type</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Name</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Email</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Phone</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Status</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={7} style={{ padding: 40, textAlign: 'center', color: '#888' }}>Loading...</td></tr>
                  ) : regs.length === 0 ? (
                    <tr><td colSpan={7} style={{ padding: 40, textAlign: 'center', color: '#888' }}>No registrations yet</td></tr>
                  ) : regs.map(r => (
                    <tr key={r.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '10px 16px' }}>{new Date(r.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: '10px 16px' }}>
                        <span style={{ padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: (typeColors[r.type] || '#ccc') + '22', color: typeColors[r.type] || '#666' }}>{r.type}</span>
                      </td>
                      <td style={{ padding: '10px 16px', fontWeight: 600 }}>{r.name}</td>
                      <td style={{ padding: '10px 16px' }}>{r.email}</td>
                      <td style={{ padding: '10px 16px' }}>{r.phone}</td>
                      <td style={{ padding: '10px 16px' }}>
                        <select value={r.status} onChange={e => updateStatus(r.id, e.target.value)} style={{ padding: '4px 8px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 12, fontWeight: 600, color: statusColors[r.status] || '#666' }}>
                          <option value="new">New</option><option value="contacted">Contacted</option><option value="enrolled">Enrolled</option><option value="active">Active</option>
                        </select>
                      </td>
                      <td style={{ padding: '10px 16px' }}>
                        <button onClick={() => deleteReg(r.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF4444', fontSize: 12, fontWeight: 600 }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
