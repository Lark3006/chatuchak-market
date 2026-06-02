import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import translations from './i18n/translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Zones from './components/Zones';
import Culinary from './components/Culinary';
import Tips from './components/Tips';
import Footer from './components/Footer';
import MapModal from './components/MapModal';

function App() {
  const [lang, setLang] = useState('id');
  const [mapOpen, setMapOpen] = useState(false);
  const t = translations[lang];

  return (
    <BrowserRouter>
      <div className="thai-border" />
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<><Hero t={t} onMapOpen={() => setMapOpen(true)} /><About t={t} /></>} />
        <Route path="/zones" element={<><Zones t={t} /><Footer t={t} /></>} />
        <Route path="/culinary" element={<><Culinary t={t} /><Footer t={t} /></>} />
        <Route path="/tips" element={<><Tips t={t} /><Footer t={t} /></>} />
      </Routes>
      <div className="thai-border" />
      <MapModal isOpen={mapOpen} onClose={() => setMapOpen(false)} lang={lang} />
    </BrowserRouter>
  );
}

export default App;