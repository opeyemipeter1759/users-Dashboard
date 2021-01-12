import React from 'react'
import UserPage from '../users/users.component';
import DetailsPage from '../detailsPage/detailsPage.component';
import './parent.styles.css';

const ParentComponent = (props) => {
  
  return (
    <div className="row">
      <div className="col-md-5 ml-5 pl-5">
        <UserPage/>
      </div>
      <div className="col-md-5">
        <DetailsPage/>
      </div>
    </div>
  )
}

export default ParentComponent