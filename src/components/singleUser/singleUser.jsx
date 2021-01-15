import React, { Component } from 'react';
import axios from 'axios'
 
class SingleUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }
  
  
  componentDidMount(){
    axios.get(`https://randomuser.me/api/?seed=${this.props.match.params.uuid}`).then(res => {
      this.setState({
        data: res.data.results
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div>
          - Gender
      </div>
    );
  }
}
 
export default SingleUser;