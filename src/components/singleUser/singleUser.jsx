import React, { Component } from 'react';
import axios from 'axios'
 
class SingleUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: {}
    }
  }
  
  
  componentDidMount(){
    axios.get(`https://randomuser.me/api${window.location.pathname}`).then(res => {
      console.log(res)
      this.setState({
        user: res.data.results
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        {this.state.user.gender} - Gender
      </div>
    );
  }
}
 
export default SingleUser;