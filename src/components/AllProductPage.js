import React from 'react'
import {Link} from 'react-router-dom'
import ProductList from './ProductList';
import {connect} from 'react-redux';



 class AllProductPage extends React.Component{   

    render(){   
        
        return(      
            <>
                <h1>Product List Using Redux</h1>
                <ProductList products={this.props.products} />
                <br/>
                <Link to="/addProduct">Add Product</Link>               

            </>
          );
    }
}


const mapStatetoProps=(state)=>{
    return {

        products:state.products
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {

    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(AllProductPage);