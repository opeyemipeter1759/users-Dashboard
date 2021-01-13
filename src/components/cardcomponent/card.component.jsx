import React from 'react'
import {Card} from 'react-bootstrap';
import './card.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 const CardComponent = (props) => {
  

  return (
    <Card className="card mt-3">
      <div className="text-center row">
     <img src={props.item.picture.medium} alt="..." className="img-thumbnail mt-3"/>
     <div>
        <p className="mt-3 ml-4">
        <strong className="float-left mr-4 pr-5">{props.item.name.first} {props.item.name.last}</strong> <br/>
        <em className="address float-left mt-2">
        {props.item.location.street.number} {props.item.location.street.name}, {props.item.location.city}, {props.item.location.state}
      </em>
       </p>

       <div className="float-left ml-4 mail mt-2"> 
       <span>
         <span className="mr-2"> 
          <FontAwesomeIcon icon="envelope"/>
          </span>
          {props.item.email} 
       </span>
      
          
         <span>
           <span className="mr-2 ml-3"> 
          <FontAwesomeIcon icon="phone-alt"/></span>
          {props.item.phone}
          </span>
          
         <span>
           <span className="mr-2 ml-3"> 
          <FontAwesomeIcon icon="arrow-right"/></span>
          </span>
       
       </div>
       
      
      
    </div>
      {/*  */}
      </div>

    </Card>
  )
}

export default CardComponent;