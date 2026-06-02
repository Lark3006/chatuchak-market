import { useState, useEffect } from 'react';

function Zones({ t }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const zone = t.zones.data[activeTab];

  const handleTab = (i) => {
    setActiveTab(i);
    setActiveImg(0);
  };

  // Auto slideshow
  useEffect(() => {
    if (!zone.gallery || zone.gallery.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImg(prev => (prev + 1) % zone.gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab, zone.gallery]);

  return (
    <section id="zones" style={{ background: '#F0E8D8', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#9A7A2E', border: '1px solid #C9A84C',
            padding: '4px 14px', marginBottom: '1.2rem'
          }}>{t.zones.tag}</span>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            fontWeight: 700, color: '#1A0A00', lineHeight: 1.2
          }}>{t.zones.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: '1rem' }}>
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          flexWrap: 'wrap', gap: 8, marginBottom: '3rem'
        }}>
          {t.zones.tabs.map((tab, i) => (
            <button key={i} onClick={() => handleTab(i)} style={{
              padding: '8px 18px',
              background: activeTab === i ? '#1A0A00' : 'transparent',
              color: activeTab === i ? '#C9A84C' : '#6B4C35',
              border: activeTab === i ? '2px solid #1A0A00' : '1px solid #C9A84C',
              fontSize: 12, letterSpacing: '0.08em',
              textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'Georgia, serif', transition: 'all 0.2s'
            }}>{tab}</button>
          ))}
        </div>

        {/* Konten — stack di mobile, side by side di desktop */}
        <div style={{
          display: 'flex', gap: '3rem',
          alignItems: 'flex-start',
          flexDirection: 'column'
        }} className="zones-content">

          {/* Foto + slideshow */}
          <div style={{ width: '100%' }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: -8, right: -8,
                width: '100%', height: '100%',
                border: '2px solid #C9A84C', opacity: 0.35, zIndex: 0
              }} />

              {/* Gambar dengan fade */}
              <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                {zone.gallery && zone.gallery.length > 0 ? zone.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${zone.title} ${i + 1}`}
                    style={{
                      width: '100%',
                      height: 'clamp(220px, 45vw, 380px)',
                      objectFit: 'cover',
                      display: 'block',
                      position: i === 0 ? 'relative' : 'absolute',
                      top: 0, left: 0,
                      opacity: activeImg === i ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                      zIndex: activeImg === i ? 1 : 0,
                    }}
                  />
                )) : (
                  <img
                    src={zone.img}
                    alt={zone.title}
                    style={{
                      width: '100%',
                      height: 'clamp(220px, 45vw, 380px)',
                      objectFit: 'cover', display: 'block'
                    }}
                  />
                )}

                {/* Overlay judul */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  zIndex: 2,
                  background: 'linear-gradient(to top, rgba(26,10,0,0.85), transparent)',
                  padding: '2rem 1.5rem 1rem'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF8EC' }}>{zone.title}</div>
                </div>
              </div>
            </div>

            {/* Dot indicator */}
            {zone.gallery && zone.gallery.length > 1 && (
              <div style={{
                display: 'flex', gap: 6,
                justifyContent: 'center', marginTop: 12
              }}>
                {zone.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      width: activeImg === i ? 20 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: activeImg === i ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                      border: 'none', cursor: 'pointer',
                      transition: 'all 0.3s', padding: 0
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Deskripsi + list */}
          <div style={{ width: '100%' }}>
            <p style={{
              fontSize: '0.95rem', lineHeight: 1.85,
              color: '#4A3020', marginBottom: '1.5rem',
              borderLeft: '3px solid #C9A84C',
              paddingLeft: '1rem'
            }}>{zone.desc}</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '10px 24px'
            }}>
              {zone.items.map((item, i) => {
                const isHeader = item.startsWith('—');
                return isHeader ? (
                  <div key={i} style={{
                    gridColumn: '1 / -1',
                    fontSize: 11, fontWeight: 700,
                    color: '#9A7A2E', letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    paddingBottom: '0.4rem',
                    marginTop: i === 0 ? 0 : '0.8rem'
                  }}>{item.replaceAll('—', '').trim()}</div>
                ) : (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 6, height: 6, flexShrink: 0, background: '#C9A84C', transform: 'rotate(45deg)' }} />
                    <span style={{ fontSize: '0.9rem', color: '#4A3020', lineHeight: 1.4 }}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Zones;