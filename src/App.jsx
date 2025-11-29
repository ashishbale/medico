
import './App.css'
import HypnotherapyBooking from './components/HypnotherapyBooking'
import MedicalTourismLanding from './components/MedicalTourismLanding'  
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NaturopathyBooking from './components/NaturopathyBooking'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MedicalTourismLanding/>} />
        <Route path="/hypnotherapy-booking" element={<HypnotherapyBooking />} />
        <Route path="/naturopathy-booking" element={<NaturopathyBooking />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
