import { Routes, Route } from 'react-router-dom'
import Website from './Website'
import Contact from './Contact'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;