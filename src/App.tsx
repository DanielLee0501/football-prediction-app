import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputPage from './pages/Input';
import PredictPage from './pages/Predict';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/predict" element={<PredictPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
