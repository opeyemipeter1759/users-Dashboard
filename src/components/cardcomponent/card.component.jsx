import React from 'react'
import {Card} from 'react-bootstrap';
import './card.styles.css'

 const CardComponent = (props) => {
  

  return (
    <Card>
      <div className="text-center row">
     <img src={props.item.picture.medium} className="rounded mr-auto ml-1 align-item-center col" alt="..."/>
     <div className="col">
      
     </div>
      </div>

    </Card>
  )
}

export default CardComponent;