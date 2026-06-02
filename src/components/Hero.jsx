import { useNavigate } from 'react-router-dom';
function Hero({ t }) {
  const navigate = useNavigate();

  return (
    <section id="hero" style={{
      position: 'relative', height: '88vh',
      minHeight: 520, overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <img
        src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1400&q=80"
        alt="Chatuchak Weekend Market"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.45) saturate(0.9)'
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(26,10,0,0.3) 0%, rgba(26,10,0,0.65) 100%)'
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '2rem',
        maxWidth: 780
      }}>
        <div style={{
          fontSize: 13, letterSpacing: '0.25em',
          textTransform: 'uppercase', color: '#E8D08A',
          marginBottom: '1rem',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 12
        }}>
          <span style={{ display: 'inline-block', width: 40, height: 1, background: '#C9A84C', opacity: 0.7 }} />
          {t.hero.label}
          <span style={{ display: 'inline-block', width: 40, height: 1, background: '#C9A84C', opacity: 0.7 }} />
        </div>

        <div style={{
          fontSize: 20, color: '#C9A84C',
          marginBottom: '0.5rem', letterSpacing: '0.3em'
        }}>✦ ✦ ✦</div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
          fontWeight: 700, color: '#FFF8EC',
          lineHeight: 1.1, marginBottom: '0.5rem',
          letterSpacing: '0.02em'
        }}>
          {t.hero.title1}
          <span style={{ color: '#C9A84C', display: 'block' }}>
            {t.hero.title2}
          </span>
        </h1>

        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 10,
          margin: '1rem 0'
        }}>
          <div style={{ width: 60, height: 1, background: '#C9A84C', opacity: 0.6 }} />
          <div style={{ width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)' }} />
          <div style={{ width: 60, height: 1, background: '#C9A84C', opacity: 0.6 }} />
        </div>

        <p style={{
          fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
          color: '#D4C4A0', margin: '0 auto 2rem',
          lineHeight: 1.7, maxWidth: 560,
          letterSpacing: '0.03em'
        }}>{t.hero.subtitle}</p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/zones')}
            style={{
            padding: '14px 40px',
            background: '#C9A84C', color: '#1A0A00',
            border: '2px solid #C9A84C',
            fontSize: 13, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: 'Georgia, serif'
            }}
            >{t.hero.cta}</button>

          <button style={{
            padding: '14px 40px',
            background: 'transparent', color: '#FFF8EC',
            border: '1px solid rgba(255,248,236,0.4)',
            fontSize: 13, letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: 'Georgia, serif'
          }}>{t.hero.ctaOutline}</button>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
        background: 'rgba(26,10,0,0.85)',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        display: 'flex', justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: 900, width: '100%',
          display: 'flex'
        }}>
          {t.stats.map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '18px 16px', textAlign: 'center',
              borderRight: i < t.stats.length - 1
                ? '1px solid rgba(201,168,76,0.2)' : 'none'
            }}>
              <div style={{
                fontSize: '1.7rem', fontWeight: 700,
                color: '#C9A84C', lineHeight: 1, marginBottom: 4
              }}>{s.num}</div>
              <div style={{
                fontSize: 11, color: '#A89070',
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;