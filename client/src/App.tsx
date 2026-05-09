import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Particuliers from './pages/Particuliers';
import Entreprises from './pages/Entreprises';
import FAQ from './pages/FAQ';
import './App.css';

import { ScrollToHash } from './ScrollToHash';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/particuliers" element={<Particuliers />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </div>
  );
}
