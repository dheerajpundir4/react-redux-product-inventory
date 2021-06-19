import React from 'react';

// Using bootstrap


class ViewProductPageChild extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>

                <h3>Product Description</h3>
                <div class="card table response">


                    <table class="table table-striped">

                        <tr>
                            <td>ID#</td>
                            <td>{this.props.product.id}</td>
                        </tr>
                        <tr>
                            <td>Product Name</td>
                            <td>{this.props.product.productName}</td>
                        </tr>
                        <tr>
                            <td>
                                Product Description
                            </td>
                            <td>{this.props.product.productDescription}</td>
                        </tr>
                        <tr>
                            <td>
                                Manufacturer
                            </td>
                            <td>{this.props.product.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>
                                Price
                            </td>
                            <td>{this.props.product.price}</td>
                        </tr>
                        <tr>
                            <td>
                                Quantity
                            </td>
                            <td>{this.props.product.quantity}</td>
                        </tr>

                    </table>
                </div>
                <a href="javascript:history.go(-1)"> Back </a>

            </>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
        product: state.products.find(product => product.id == id)
    }
}

export default ViewProductPageChild;



