import React from 'react'
import UserPage from '../users/users.component';
import DetailsPage from '../detailsPage/detailsPage.component';

const ParentComponent = (props) => {
  
  return (
    <div className="row">
      <div className="col-md-6">
        <UserPage/>
      </div>
      <div className="col-md-6">
        <DetailsPage/>
      </div>
    </div>
  )
}

export default ParentComponent