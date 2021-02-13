import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {Bar} from 'react-chartjs-2';


// Using bootstrap
import Table from 'react-bootstrap/Table';


class TopViewProduct extends React.Component {
  
    constructor(){
      console.log("TopViewProduct Constructor")      
      super()
    }

  render() {

    console.log("TopViewProduct render");
 

    let p = this.props.products.map((product) => { 
      
      
    
    return product.views
  }) 

  let q = this.props.products.map((product) => { 
      
    console.log(product.productName)
  
  return product.productName
}) 

console.log("pppppppppppppppppppppp")
console.log(p)

    const data = {
     labels: q,
      datasets: [
        {
          label: 'Total Views',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: p
        }
      ]
    };
    

  
    
   

    return (
    <>
       <Bar
          data={data}
          width={100}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
    </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {

  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TopViewProduct);