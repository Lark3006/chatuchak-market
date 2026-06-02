function Tips({ t }) {
  return (
    <section id="tips" style={{ background: '#1A0A00', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#9A7A2E', border: '1px solid #C9A84C',
            padding: '4px 14px', marginBottom: '1.2rem'
          }}>{t.tips.tag}</span>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: '#FFF8EC', lineHeight: 1.2
          }}>{t.tips.title}</h2>

          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10, marginTop: '1rem'
          }}>
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
          </div>
        </div>

        {/* Grid Tips */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {t.tips.items.map((tip, i) => (
            <div key={i} style={{
              background: 'rgba(255,248,236,0.04)',
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '2rem',
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'flex-start',
              transition: 'border-color 0.2s, background 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
                e.currentTarget.style.background = 'rgba(255,248,236,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                e.currentTarget.style.background = 'rgba(255,248,236,0.04)';
              }}
            >
              <div style={{
                fontSize: '2rem', lineHeight: 1,
                flexShrink: 0, marginTop: 2
              }}>{tip.icon}</div>

              <div>
                <h3 style={{
                  fontSize: '1rem', fontWeight: 700,
                  color: '#C9A84C', marginBottom: '0.5rem',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.03em'
                }}>{tip.title}</h3>
                <p style={{
                  fontSize: '0.9rem', color: '#B0906A',
                  lineHeight: 1.7
                }}>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tips;