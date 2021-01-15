import React from 'react'
import {Card} from 'react-bootstrap';
import './card.styles.css'
import FilterComponent from '../filter/filter.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import {Link} from 'react-router-dom'


 class AllUsers extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }

  componentDidMount(){
    axios.get("https://randomuser.me/api/?results=3").then(res => {
      this.setState({
        data: res.data.results
      })
    }
    ).catch(error => {
        console.log(error)
      })
  }
  
// componentDidMount(){
//   axios({
//     method:"GET",
//    url:"https://randomuser.me/api/?results=3"}).then((res)=>{
// console.log("FROM THE FETCH METHOD",res.data.results.email)
//    })
// }

  render(){
  return (
    <div className="">
      <p>All Users</p>
      <FilterComponent/>

    {
      this.state.data.map(item => (

    <Card className="card mt-3 " key={item.cell}>
      <div className="text-center row">
     <img src={item.picture.medium} alt="..." className="img-thumbnail mt-3 "/>
     <div>
        <p className="mt-3 ml-4 ">
        <strong className="float-left mr-4 pr-5">{item.name.first} {item.name.last}</strong> <br/>
        <em className="address float-left mt-2">
        {item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}
      </em>
       </p>

       <div className="float-left ml-4 mail mt-2 white"> 
       <span>
         <span className="mr-2"> 
          {/* <FontAwesomeIcon icon="envelope"/> */}
          <i className="fa fa-envelope white" aria-hidden="true"></i>
          </span>
          {item.email} 
       </span>
      
          
         <span>
           <span className="mr-2 ml-3 white"> 
          {/* <FontAwesomeIcon icon="phone-alt"/> */}
          <i className="fa fa-phone-alt white" aria-hidden="true"></i>
          </span >
          {item.phone}
          </span>
          
         <span>
           <span className="mr-2 ml-3">
             <Link to={`/${item.login.username}`}>
             <button type="button" className="btn btn-color mb-2"><FontAwesomeIcon icon="arrow-right"/></button> 
            </Link>
          {/* <i class="fa fa-arrow-square-right"></i> */}
          </span>
          </span>
       
       </div>
       
      
      
    </div>
      {/*  */}
      </div>

    </Card>
      ))
    }
    </div>
  )
  }
}

export default AllUsers;