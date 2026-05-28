import { Routes, Route } from 'react-router-dom'
import Website from './Website'
import Contact from './Contact'
import Services from './Services'
import About from './About';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;