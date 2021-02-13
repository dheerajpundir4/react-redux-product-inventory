import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';




class TopViewProduct extends React.Component {

  constructor() {
    console.log("TopViewProduct Constructor")
    super()
   
  }

  //Comparer Function    
GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return -1;    
      } else if (a[prop] < b[prop]) {    
          return 1;    
      }    
      return 0;    
  }    
} 

  render() {

    console.log("TopViewProduct render");

    let prods= this.props.products
    console.log(prods)

    let products=prods.sort(this.GetSortOrder("views"));

  

    let p = products.map((product) => {
      return product.views
    })

    let q = products.map((product) => {

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
    let Top = "Top"
    const options = [
      "3", "5", "10"
    ];
    const defaultOption = options[0];




    return (
      <>

       
         
          <div className="w-auto h-auto d-inline-block">
            Top
            <Dropdown
              options={options}
              onChange={ (selected)=>
               
                console.log(selected)
                       
              }
              value={defaultOption}
              placeholder="Select an option" />



          </div>




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