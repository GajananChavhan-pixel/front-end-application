import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <nav className="d-flex justify-content-around bg-primary">
        <h1 className="text-white text align center">Application Form</h1>
    <div className="mt-2"> 
      
      <Link className="btn btn-dark fs-5 me-2" to={'/logo'}>Logo</Link>
      <Link className="btn btn-dark fs-5 me-2" to={'/EnquiryForm'}>Enquiry</Link>
      <Link className="btn btn-dark fs-5 me-2" to={'/CibilScore'}>CibilScore</Link>
    </div>
  </nav>
  )
}

export default Header;
