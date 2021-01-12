import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filter.styles.css'


function FilterComponent() {
  return (
    <div>
      <p className="">Filter by</p>
     <div className="row">
      <div className="form-group has-search col-md-3">
        <span className="form-control-feedback">
          <FontAwesomeIcon icon="search"/>
          </span>
        <input type="text" className="form-control1  text-dark" placeholder="Find a user" disabled/>
        </div>

         <div className="form-group has-search ml-5 pl-3 col-md-3">
        <span className="form-control-feedback">
          <FontAwesomeIcon icon="caret-down"/>
          </span>
        <input type="text" className="form-control1 col-md-8 text-dark" placeholder="Country" disabled/>
    </div>
    <div className="col-md-3">
      <span className="form-control-feedback">
          <FontAwesomeIcon icon="toggle-on"/>
          </span>
          <p>Show country</p>
    </div>
     </div>
    </div>
  )
}

export default FilterComponent
