function Culinary({ t }) {
  return (
    <section id="culinary" style={{ background: '#FAF6EF', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block', fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#9A7A2E', border: '1px solid #C9A84C',
            padding: '4px 14px', marginBottom: '1.2rem'
          }}>{t.culinary.tag}</span>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: '#1A0A00', lineHeight: 1.2
          }}>{t.culinary.title}</h2>

          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10, marginTop: '1rem'
          }}>
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
          </div>
        </div>

        {/* Deskripsi */}
        <p style={{
          fontSize: '1rem', lineHeight: 1.8,
          color: '#4A3020', maxWidth: 780,
          margin: '0 auto 3rem',
          textAlign: 'center'
        }}>{t.culinary.desc}</p>

        {/* Grid Kuliner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          {t.culinary.items.map((item, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid rgba(201,168,76,0.25)',
              overflow: 'hidden',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '100%', height: 180,
                    objectFit: 'cover', display: 'block',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', top: 10, left: 10,
                  background: '#1A0A00', color: '#C9A84C',
                  fontSize: 11, fontWeight: 700,
                  padding: '3px 10px', letterSpacing: '0.08em'
                }}>0{i + 1}</div>
              </div>

              <div style={{ padding: '1.2rem' }}>
                <h3 style={{
                  fontSize: '1rem', fontWeight: 700,
                  color: '#1A0A00', marginBottom: '0.5rem',
                  fontFamily: 'Georgia, serif'
                }}>{item.name}</h3>
                <p style={{
                  fontSize: '0.85rem', color: '#6B4C35',
                  lineHeight: 1.6
                }}>{item.desc}</p>
              </div>

              <div style={{
                height: 3,
                background: 'repeating-linear-gradient(90deg, #C9A84C 0px, #C9A84C 6px, transparent 6px, transparent 10px)'
              }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Culinary;