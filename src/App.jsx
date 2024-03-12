import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Models from './pages/Models'
import History from './pages/History'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/models' element={<Models />}></Route>
        <Route path='/history' element={<History />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
