function MapModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;

  const zones = [
    { num: '1 & 29', desc: { id: 'Barang antik, accessories, instrumen Thailand, dan buku', en: 'Antiques, accessories, Thai instruments, and books', th: 'ของเก่า อุปกรณ์เสริม เครื่องดนตรีไทย และหนังสือ' } },
    { num: '2 & 4', desc: { id: 'Pakaian remaja dan aneka accessories', en: 'Teen clothing and accessories', th: 'เสื้อผ้าวัยรุ่นและอุปกรณ์เสริม' } },
    { num: '5 & 6', desc: { id: 'Beragam pakaian dan sepatu', en: 'Clothing and shoes', th: 'เสื้อผ้าและรองเท้า' } },
    { num: '7', desc: { id: 'Art dan lukisan', en: 'Art and paintings', th: 'งานศิลปะและภาพวาด' } },
    { num: '8', desc: { id: 'Produk spa, ukiran, dan berbagai dupa', en: 'Spa products, carvings, and incense', th: 'ผลิตภัณฑ์สปา งานแกะสลัก และธูป' } },
    { num: '9 & 11', desc: { id: 'Artificial flowers, handcraft, dan souvenir', en: 'Artificial flowers, handcrafts, and souvenirs', th: 'ดอกไม้ประดิษฐ์ งานหัตถกรรม และของที่ระลึก' } },
    { num: '12,14,21,24', desc: { id: 'Pakaian, accessories, tas, dan sepatu', en: 'Clothing, accessories, bags, and shoes', th: 'เสื้อผ้า อุปกรณ์เสริม กระเป๋า และรองเท้า' } },
    { num: '13', desc: { id: 'Souvenir, kartu pos, dan peralatan perawatan hewan', en: 'Souvenirs, postcards, and pet care equipment', th: 'ของที่ระลึก โปสการ์ด และอุปกรณ์ดูแลสัตว์เลี้ยง' } },
    { num: '15,19,20', desc: { id: 'Peralatan makan, keramik, perak, dekorasi rumah, perlengkapan rumah tangga', en: 'Tableware, ceramics, silverware, home decor, homewares', th: 'ภาชนะ เซรามิก เครื่องเงิน ของตกแต่งบ้าน' } },
    { num: '16,17,18', desc: { id: 'Pakaian, peralatan hiking, dan produk berbahan kulit', en: 'Clothing, hiking equipment, and leather goods', th: 'เสื้อผ้า อุปกรณ์ไฮกิ้ง และสินค้าหนัง' } },
    { num: '25', desc: { id: 'Keramik dan sutra', en: 'Ceramics and silk', th: 'เซรามิกและผ้าไหม' } },
    { num: '26', desc: { id: 'Barang antik, dekorasi rumah, sutra, dan bingkai foto', en: 'Antiques, home decor, silk, and photo frames', th: 'ของเก่า ของตกแต่งบ้าน ผ้าไหม และกรอบรูป' } },
    { num: '27 & 28', desc: { id: 'Buku, handcraft, dan aneka barang lainnya', en: 'Books, handcrafts, and miscellaneous items', th: 'หนังสือ งานหัตถกรรม และสินค้าเบ็ดเตล็ด' } },
    { num: '30', desc: { id: 'Pakaian dan barang lainnya', en: 'Clothing and miscellaneous', th: 'เสื้อผ้าและสินค้าอื่นๆ' } },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(26,10,0,0.85)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '1rem',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#FAF6EF',
          maxWidth: 900, width: '100%',
          maxHeight: '90vh', overflowY: 'auto',
          border: '2px solid #C9A84C',
          position: 'relative'
        }}
      >
        {/* Header modal */}
        <div style={{
          background: '#1A0A00',
          padding: '1.2rem 1.5rem',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #C9A84C',
          position: 'sticky', top: 0, zIndex: 1
        }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#C9A84C', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {lang === 'id' ? 'Peta Chatuchak' : lang === 'en' ? 'Chatuchak Map' : 'แผนที่จตุจักร'}
            </div>
            <div style={{ fontSize: 11, color: '#A89070', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>
              {lang === 'id' ? 'Denah & Panduan Zona' : lang === 'en' ? 'Layout & Zone Guide' : 'ผังและคู่มือโซน'}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: '1px solid rgba(201,168,76,0.4)',
              color: '#C9A84C', fontSize: 18,
              cursor: 'pointer', padding: '4px 10px',
              lineHeight: 1
            }}
          >✕</button>
        </div>

        {/* Peta */}
        <div style={{ padding: '1.5rem 1.5rem 0' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: -6, left: -6,
              width: '100%', height: '100%',
              border: '2px solid #C9A84C', opacity: 0.3, zIndex: 0
            }} />
            <img
              src="/images/peta.jpg"
              alt="Chatuchak Market Map"
              style={{
                width: '100%', display: 'block',
                position: 'relative', zIndex: 1
              }}
            />
          </div>
        </div>

        {/* Penjelasan denah */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{
            fontSize: 11, fontWeight: 700,
            color: '#9A7A2E', letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(201,168,76,0.3)',
            paddingBottom: '0.6rem', marginBottom: '1.2rem'
          }}>
            {lang === 'id' ? 'Keterangan Zona' : lang === 'en' ? 'Zone Guide' : 'คำอธิบายโซน'}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '0.8rem'
          }}>
            {zones.map((z, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: '0.8rem',
                background: '#F0E8D8',
                border: '1px solid rgba(201,168,76,0.2)'
              }}>
                <div style={{
                  flexShrink: 0,
                  background: '#1A0A00',
                  color: '#C9A84C',
                  fontSize: 11, fontWeight: 700,
                  padding: '3px 8px',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}>No. {z.num}</div>
                <span style={{ fontSize: '0.85rem', color: '#4A3020', lineHeight: 1.5 }}>
                  {z.desc[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Thai border bottom */}
        <div style={{
          height: 5,
          background: 'repeating-linear-gradient(90deg, #C9A84C 0px, #C9A84C 8px, #8B1A1A 8px, #8B1A1A 10px, #C9A84C 10px, #C9A84C 14px, transparent 14px, transparent 18px)'
        }} />
      </div>
    </div>
  );
}

export default MapModal;