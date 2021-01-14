import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import allUser from '../../assests/allUser.png';
import femaleUser from '../../assests/femaleUser.png';
import maleUser from '../../assests/maleUser.png';
import {Link} from 'react-router-dom'

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
          {/* <FontAwesomeIcon icon="search"/> */}
        <i className="fas fa-search search"></i>
          </span>
        <input type="text" className="form-control col-md-10 text-white" placeholder="Find a user" disabled/>
      </div>

      <div className="show-users">
        <h5 className="text-white pt-5 pb-5 mt-3">
          Show Users
        </h5>
        <div className="row text-white">
        <div className="col-4-md mr-4">
          <Link to='/'>
         <img src={allUser} alt="" />
          </Link>
          <p>All users</p>
        </div>
        <div className="col-4-md mr-4">
          <Link to='/male'>
         <img src={maleUser} alt="" />
          </Link>
          <p>Male users</p>
        </div>
        <div className="col-4-md pb-5 female">
          <Link to='/female'>
         <img src={femaleUser} className="" alt="" />
          </Link>
          <p>Female users</p>
        </div>
        </div>
        
      </div>

  </div>
  )
}
  export default UserPage;

