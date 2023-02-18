import React, { useState } from 'react'
import '../App.css'

const Navbar = ({title , about}) => {
  const [style , setStyle] = useState('dark')

  const Changetored=()=>{
    setStyle('danger')
  }
  const Changetoprimary=()=>{
    setStyle('primary')
  }
  const Changetowarning=()=>{
    setStyle('warning')
  }
  const Changetosuccess=()=>{
    setStyle('success')
  }
  const Changetodark=()=>{
    setStyle('dark')
  }


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${style} bg-${style}`}>
  <div className='container-fluid'>
    <a className="navbar-brand" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{about}</a>
        </li>
       
      </ul>

   <div className='checkbox'>

    <div className="form-check">
       
       <button className="red"  name={1} onClick={Changetored}></button>
       <button className="primary"  name={1} onClick={Changetoprimary}></button>
       <button className="warning"  name={1} onClick={Changetowarning}></button>
       <button className="success"  name={1} onClick={Changetosuccess}></button>
       <button className="dark"  name={1} onClick={Changetodark}></button>
 
     </div>
    

     </div>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
