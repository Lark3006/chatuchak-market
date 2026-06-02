function Footer({ t }) {
  return (
    <footer style={{ background: '#0F0600', borderTop: '2px solid #C9A84C' }}>

      {/* Main footer */}
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '4rem 2rem',
        display: 'flex', gap: '3rem',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>

        {/* Brand */}
        <div style={{ flex: 2, minWidth: 220 }}>
          <div style={{
            fontSize: 22, fontWeight: 700,
            color: '#C9A84C', letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: 4
          }}>Chatuchak</div>
          <div style={{
            fontSize: 11, color: '#E8D08A',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            opacity: 0.7, marginBottom: '1.2rem'
          }}>Weekend Market</div>
          <div style={{
            width: 40, height: 1,
            background: '#C9A84C', opacity: 0.5,
            marginBottom: '1.2rem'
          }} />
          <p style={{
            fontSize: '0.9rem', color: '#7A5C40',
            lineHeight: 1.7, maxWidth: 260
          }}>{t.footer.tagline}</p>
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 180 }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#C9A84C',
            marginBottom: '1.2rem'
          }}>Info</div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, color: '#7A5C40', marginBottom: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Lokasi
            </div>
            <div style={{ fontSize: '0.9rem', color: '#B0906A', lineHeight: 1.6 }}>
              {t.footer.location}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, color: '#7A5C40', marginBottom: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Jam Buka
            </div>
            <div style={{ fontSize: '0.9rem', color: '#B0906A', lineHeight: 1.6 }}>
              {t.footer.hours}
            </div>
          </div>
        </div>

        {/* Ornamen */}
        <div style={{
          flex: 1, minWidth: 180,
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-end', justifyContent: 'flex-start'
        }}>
          <div style={{
            fontSize: 48, color: '#C9A84C',
            opacity: 0.15, letterSpacing: '0.2em',
            lineHeight: 1, userSelect: 'none'
          }}>✦✦✦</div>
          <div style={{
            fontSize: 11, color: '#3A2010',
            letterSpacing: '0.1em', marginTop: '1rem',
            textTransform: 'uppercase'
          }}>Est. 1987</div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '1.2rem 2rem',
        display: 'flex', justifyContent: 'center'
      }}>
        <p style={{
          fontSize: 12, color: '#3A2010',
          letterSpacing: '0.08em', textAlign: 'center'
        }}>
          © 2025 Chatuchak Weekend Market · Bangkok, Thailand
        </p>
      </div>

    </footer>
  );
}

export default Footer;