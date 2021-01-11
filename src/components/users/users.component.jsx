import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import allUser from '../../assests/allUser.png';
import femaleUser from '../../assests/femaleUser.png';
import maleUser from '../../assests/maleUser.png';

import './users.styles.css'


const UserPage =() =>{
  return(
  <div className="container">
      <div className="text-white header">
        <p className='mt-3 heading-text'>Hello, <strong className="emerald">Emerald</strong></p>
        <p>Welcome to your dashboard. Kindly sort through the user base.</p>
        
      </div>
      <div className="form-group has-search">
        <span className="form-control-feedback pt-2">
          <FontAwesomeIcon icon="search"/>
          </span>
        <input type="text" className="form-control col-md-5 text-white" placeholder="Find a user" disabled/>
      </div>

      <div className="show-users">
        <h5 className="text-white pt-5 pb-5 mt-3">
          Show Users
        </h5>
        <div className="row">
        <div className="col-4-md mr-4">
          <a href="#">
         <img src={allUser} alt="" />
          </a>
        </div>
        <div className="col-4-md mr-4">
          <a href="#">
         <img src={maleUser} alt="" />
          </a>
        </div>
        <div className="col-4-md pb-5">
          <a href="#">
         <img src={femaleUser} className="mb-5" alt="" />
          </a>
        </div>
        </div>
        
      </div>

  </div>
  )
}
  export default UserPage;

