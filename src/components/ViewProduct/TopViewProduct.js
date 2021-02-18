import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Container } from 'react-bootstrap';





class TopViewProduct extends React.Component {

  constructor() {
    console.log("TopViewProduct Constructor")
    super()
    this.state = {
      VALUE: 3,
      LABEL: "3"
    }

  }

  //Comparer Function    
  GetSortOrder(prop) {
    return function (a, b) {
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

    let products = this.props.products

    products.sort(this.GetSortOrder("views"));

    products = products.slice(0, this.state.VALUE)

    let productViewsArray = products.map((product) => {
      return product.views
    })

    let productNameArray = products.map((product) => {

      return product.productName
    })



    const topViewProductData = {
      labels: productNameArray,
      datasets: [
        {
          label: 'Top View Products',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: productViewsArray
        }
      ]
    };

    const options = [
      { value: 3, label: '3' },
      { value: 5, label: '5' },
      { value: 10, label: '10' },
    ];




    return (
      <> 
      <Container>
       <div className="w-auto h-auto d-inline-block">
          Top
            <Dropdown
            options={options}
            onChange={(selected) => {
              this.setState({ VALUE: selected.value, LABEL: selected.label })
            }
            }
            value={this.state.LABEL}
           />
        </div>  



        <div className="w-auto h-auto ">
          <Bar
            data={topViewProductData}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>

        <div className="w-auto h-auto d-inline-block">
          Top
            <Dropdown
            options={options}
            onChange={(selected) => {
              this.setState({ VALUE: selected.value, LABEL: selected.label })
            }
            }
            value={this.state.LABEL}
            />
        </div>
        </Container>
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