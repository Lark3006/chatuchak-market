import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: 'about', path: '/#about' },
    { key: 'zones', path: '/zones' },
    { key: 'culinary', path: '/culinary' },
    { key: 'tips', path: '/tips' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#1A0A00', borderBottom: '2px solid #C9A84C'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 2rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 60
      }}>

        <Link to="/" style={{ textDecoration: 'none', lineHeight: 1.1 }}>
          <div style={{
            fontSize: 15, fontWeight: 700, color: '#C9A84C',
            letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>Chatuchak</div>
          <div style={{
            fontSize: 10, color: '#E8D08A', letterSpacing: '0.15em',
            textTransform: 'uppercase', opacity: 0.8
          }}>Weekend Market</div>
        </Link>

        <ul style={{
          display: 'flex', gap: '2rem', listStyle: 'none'
        }} className="desktop-nav">
          {navItems.map(({ key, path }) => (
            <li key={key}>
              <Link to={path} style={{
                color: '#D4C4A0', textDecoration: 'none',
                fontSize: 13, letterSpacing: '0.06em',
                textTransform: 'uppercase', fontFamily: 'Georgia, serif'
              }}>{t.nav[key]}</Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {['id','en','th'].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: '4px 10px', fontSize: 11,
                letterSpacing: '0.06em',
                border: `1px solid ${lang === l ? '#C9A84C' : 'rgba(201,168,76,0.4)'}`,
                background: lang === l ? '#C9A84C' : 'transparent',
                color: lang === l ? '#1A0A00' : '#D4C4A0',
                fontWeight: lang === l ? 700 : 400,
                cursor: 'pointer', borderRadius: 2,
                fontFamily: 'Georgia, serif'
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none',
              color: '#C9A84C', fontSize: 22,
              cursor: 'pointer', padding: 4
            }}
            className="hamburger"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          background: '#0F0600',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          padding: '1rem 2rem'
        }}>
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#D4C4A0', textDecoration: 'none',
                fontSize: 13, letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'Georgia, serif',
                padding: '12px 0',
                borderBottom: '1px solid rgba(201,168,76,0.1)'
              }}
            >{t.nav[key]}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;