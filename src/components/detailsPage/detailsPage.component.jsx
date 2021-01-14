import React, {Component} from 'react';
import './detailsPage.styles.css';
import FilterComponent from '../filter/filter.component'
import BaseRouter from '../../routes';

class DetailsPage extends Component  {

render(){
 return (
   <div className="detail-main">
     <FilterComponent/>
     <BaseRouter/>
   </div>
 )}
}

export default DetailsPage;