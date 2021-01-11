import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './users.styles.css'


const UserPage =() =>{
  return(
  <div className="container">
      <div className="text-white header">
        <p className='mt-3 heading-text'>Hello, <strong className="">Emerald</strong></p>
        <p>Welcome to your dashboard. Kindly sort through the user base.</p>
        
      </div>
      <div className="form-group has-search">
        <span className="form-control-feedback pt-2">
          <FontAwesomeIcon icon="search"/>
          </span>
        <input type="text" className="form-control col-md-5 text-white" placeholder="Find a user" disabled/>
      </div>

      

  </div>
  )
}
  export default UserPage;

