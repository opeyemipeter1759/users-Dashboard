import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filter.styles.css'


function FilterComponent() {
  return (
    <div>
      <p className="">Filter by</p>
     <div className="row">
      <div className="form-group has-search col-md-3">
        <span className="form-control-feedback1">
          <FontAwesomeIcon icon="search"/>
          </span>
        <input type="text" className="form-control1  text-dark" placeholder="Find a user" disabled/>
        </div>

         <div className="form-group has-search ml-5 pl-3 col-md-3">
        {/* <span className="form-control-feedback">
          <FontAwesomeIcon icon="caret-down"/>
          </span>
        <input type="text" className="form-control1 col-md-8 text-dark" placeholder="Country" disabled/> */}
  <div className="dropdown text-dark">
  <button className="btn btn-secondary dropdown-toggle text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Country
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">France</a>
    <a className="dropdown-item" href="#"> Niger</a>
    <a className="dropdown-item" href="#">Nigeria</a>
  </div>
</div>

    </div>
    <div className="col-md-3 mt-2 mr-1 row">
      <i className=" col fa fa-2x fa-toggle-on toggle"></i> <span className="col show-country">Show Country</span> 
    </div>
     </div>
    </div>
  )
}

export default FilterComponent
