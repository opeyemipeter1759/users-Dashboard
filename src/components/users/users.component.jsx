import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './users.styles.css'


const UserPage =() =>{
  return(
  <div className="container">
      <div className="text-white header">
        <h1 className=''>Hello, <strong>Emerald</strong></h1>
        <p>Welcome to your dashboard. Kindly sort through the user base.</p>
        
      </div>
      <div className="form-group has-search">
        <span className="form-control-feedback">
          <FontAwesomeIcon icon="search"/>
          </span>
        <input type="text" className="form-control col-md-4 text-white" placeholder="Find a user"/>
      </div>

  </div>
  )
}
  export default UserPage;

