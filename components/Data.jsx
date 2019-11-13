import React, { Component } from 'react';
import axios from "axios";

class Data extends Component {


  api() {
    axios
      .get(
'http://makeup-api.herokuapp.com/api/v1/products.json'
      )
      .then(function (response) {
        // handle success
  
      })

        .catch(function (error) {
          // handle error
        
        })
        .finally(function () {
          // always executed
        })
}
 


  render() {
    return (
      <div>

      </div>
    );
  }
}



export default Data;