import React, { useState } from 'react'

const Footer = () => {

  const[clicks,setClicks] = useState(0);

  const year = new Date().getUTCFullYear();

  const companyName = "egg education";

  const handleClick = () => {
      setClicks(clicks + 1);
  }


  return (
    <div className="container">
  <footer onClick={handleClick} className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"  >
    <p  className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} clicks={clicks}  </p>

    <span onClick={handleClick} className="col-md-4 d-flex align-items-center justify-content-center mb-3mb-md-0me-md-auto link-dark"  >
                    
                    <img
                    className="App-logo"
                    height="20" /*52*/
                    /*width="200"*/
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuxl_aNMmQmfgRw-_7QxchP1G4Wel7WQnmA&usqp=CAU"
                    alt="perro-giratorio"
      />
    </span>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer
