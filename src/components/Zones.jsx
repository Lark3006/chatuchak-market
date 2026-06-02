import { useState } from 'react';

function Zones({ t }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const zone = t.zones.data[activeTab];

  const handleTab = (i) => {
    setActiveTab(i);
    setActiveImg(0);
  };

  return (
    <section id="zones" style={{ background: '#F0E8D8', padding: '6rem 2rem' }}>
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
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: '#1A0A00', lineHeight: 1.2
          }}>{t.zones.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: '1rem' }}>
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.6 }} />
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: '3rem' }}>
          {t.zones.tabs.map((tab, i) => (
            <button key={i} onClick={() => handleTab(i)} style={{
              padding: '10px 24px',
              background: activeTab === i ? '#1A0A00' : 'transparent',
              color: activeTab === i ? '#C9A84C' : '#6B4C35',
              border: activeTab === i ? '2px solid #1A0A00' : '1px solid #C9A84C',
              fontSize: 13, letterSpacing: '0.08em',
              textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'Georgia, serif', transition: 'all 0.2s'
            }}>{tab}</button>
          ))}
        </div>

        {/* Konten */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Kiri - Foto utama + galeri */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -10, right: -10,
                width: '100%', height: '100%',
                border: '2px solid #C9A84C', opacity: 0.35, zIndex: 0
              }} />
              <img
                src={zone.gallery.length > 0 ? zone.gallery[activeImg] : zone.img}
                alt={zone.title}
                style={{
                  width: '100%', height: 340,
                  objectFit: 'cover',
                  position: 'relative', zIndex: 1, display: 'block'
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                background: 'linear-gradient(to top, rgba(26,10,0,0.85), transparent)',
                padding: '2rem 1.5rem 1rem'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFF8EC' }}>{zone.title}</div>
              </div>
            </div>

            {/* Thumbnail galeri */}
            {zone.gallery.length > 0 && (
              <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                {zone.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${zone.title} ${i + 1}`}
                    onClick={() => setActiveImg(i)}
                    style={{
                      width: 70, height: 55,
                      objectFit: 'cover', cursor: 'pointer',
                      border: activeImg === i ? '2px solid #C9A84C' : '2px solid transparent',
                      opacity: activeImg === i ? 1 : 0.7,
                      transition: 'all 0.2s'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Kanan - Deskripsi + list */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <p style={{
              fontSize: '0.95rem', lineHeight: 1.85,
              color: '#4A3020', marginBottom: '2rem',
              borderLeft: '3px solid #C9A84C',
              paddingLeft: '1rem'
            }}>{zone.desc}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
              {zone.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, flexShrink: 0, background: '#C9A84C', transform: 'rotate(45deg)' }} />
                  <span style={{ fontSize: '0.9rem', color: '#4A3020', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Zones;
