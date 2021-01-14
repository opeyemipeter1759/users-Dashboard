import React from 'react'
import UserPage from '../users/users.component';
import DetailsPage from '../detailsPage/detailsPage.component';
import './parent.styles.css';

const ParentComponent = (props) => {
  
  return (
    <div className="row">
      {props.children}
    </div>
  )
}

export default ParentComponent