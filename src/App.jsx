import './App.css'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import EnquiryForm from './templates/EnquiryForm'
import Header from './templates/Header'
import CibilScore from './templates/CibilScore'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className='text-center'>Front End Application Form</h1>
      <BrowserRouter>
      
      <Header></Header>



      <Routes>
        <Route path='/EnquiryForm' element={<EnquiryForm/>} />
        <Route path='/CibilScore' element={<CibilScore/>} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
