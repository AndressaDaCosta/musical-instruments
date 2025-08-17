import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InstrumentTablePage from './pages/InstrumentTable/InstrumentTablePage';
import InstrumentCardsPage from './pages/InstrumentCards/InstrumentCardsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/cards" replace />} />
          <Route path="/cards" element={<InstrumentCardsPage />} />
          <Route path="/table" element={<InstrumentTablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
