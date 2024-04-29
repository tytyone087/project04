import './App.scss'
import Header from './pages/Header';
import Main from './pages/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  
  return (
    <BrowserRouter>
    
    <div className="plating">
      <div className="plating_site" >
        <Header />
        <Routes>
          <Route path='/' element={<Main />} /> 
        </Routes>
      </div>
    </div>
    
    
    </BrowserRouter>
    
  )
}
