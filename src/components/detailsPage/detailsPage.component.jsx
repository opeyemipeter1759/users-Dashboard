import React, {Component} from 'react';
import './detailsPage.styles.css';
import FilterComponent from '../filter/filter.component'
import CardComponent from '../cardcomponent/card.component'
import axios from 'axios'

class DetailsPage extends Component  {
  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }
  
  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=3')
    .then(res => {
      const data = res.data.results
      console.log(data)
      this.setState({
        data: data
      })})
    .catch(error => {
      console.log(error)
    })
  }


    
render(){
 return (
   <div className="detail-main">
     <FilterComponent/>
     {
       this.state.data.map(item => (
        //  <li key={item.cell}>{item.gender}</li>
         <CardComponent item={item} />
         ))
        }
   </div>
 )}
}

export default DetailsPage;