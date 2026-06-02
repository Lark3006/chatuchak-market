function About({ t }) {
  return (
    <section id="about" style={{ background: '#FAF6EF', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ display: 'flex', gap: '5rem', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Kiri - Teks */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <span style={{
              display: 'inline-block', fontSize: 11,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#9A7A2E', border: '1px solid #C9A84C',
              padding: '4px 14px', marginBottom: '1.2rem'
            }}>{t.about.tag}</span>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: '#1A0A00',
              lineHeight: 1.2, marginBottom: '1rem'
            }}>{t.about.title}</h2>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 6, height: 6, background: '#C9A84C', transform: 'rotate(45deg)' }} />
              <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
            </div>

            <p style={{
              fontSize: '1rem', lineHeight: 1.8,
              color: '#4A3020', marginBottom: '1rem'
            }}>{t.about.body1}</p>

            <p style={{
              fontSize: '1rem', lineHeight: 1.8,
              color: '#4A3020'
            }}>{t.about.body2}</p>
          </div>

          {/* Kanan - Foto + ornamen */}
          <div style={{ flex: 1, minWidth: 300, position: 'relative' }}>
            <div style={{
              position: 'absolute', top: -12, left: -12,
              width: '100%', height: '100%',
              border: '2px solid #C9A84C',
              opacity: 0.4, zIndex: 0
            }} />
            <img
              src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80"
              alt="Chatuchak Market"
              style={{
                width: '100%', height: 380,
                objectFit: 'cover',
                position: 'relative', zIndex: 1,
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute', bottom: -1, left: 0, right: 0,
              zIndex: 2, background: '#1A0A00',
              padding: '14px 20px',
              display: 'flex', justifyContent: 'space-around',
              borderTop: '2px solid #C9A84C'
            }}>
              {t.stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.2rem', fontWeight: 700,
                    color: '#C9A84C', lineHeight: 1
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: 10, color: '#A89070',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    marginTop: 3
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;