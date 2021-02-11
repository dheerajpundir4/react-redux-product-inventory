import React from 'react';
import { Link } from 'react-router-dom';

//using bootstrap
import Button from 'react-bootstrap/Button'
import * as PropTypes from "prop-types";

export class TableHead extends React.Component {
    render() {

        let { customizationCol } = this.props;
        let IS_PRO_DESC = customizationCol.includes('Product Description')
        let IS_MANFACTURER = customizationCol.includes('Manufacturer')
        let IS_QUANTITY = customizationCol.includes('Quantity')
        return (

            <tr>
                <th>Product Name</th>

                {IS_PRO_DESC ? <th>Product Desctiption</th> : <></>}

                {IS_MANFACTURER ? <th>manufacturer</th> : <></>}

                <th>Price</th>

                {IS_QUANTITY ? <th>Quantity</th> : <></>}

                <th>Action(s)</th>
            </tr>

        )

    }
}

export class TableBody extends React.Component {
    render() {
        let { customizationCol, product } = this.props;

        let ID = product.id

        let IS_PRO_DESC = customizationCol.includes('Product Description')
        let IS_MANFACTURER = customizationCol.includes('Manufacturer')
        let IS_QUANTITY = customizationCol.includes('Quantity')

        return (
            <tr>

                <td>  {product.productName}</td>
                {IS_PRO_DESC ? <td>  {product.productDescription}</td> : <></>}
                {IS_MANFACTURER ? <td>  {product.manufacturer}</td> : <></>}
                <td>  {product.price}</td>
                {IS_QUANTITY ? <td>  {product.quantity}</td> : <></>}

                <td>

                    <Link to={"/view/" + ID} style={{ textDecoration: 'none' }}>
                        <Button variant="secondary" size="sm">View</Button>
                    </Link>
                    &nbsp;&nbsp;

                    <Link to={"/delete/" + ID} style={{ textDecoration: 'none' }}>
                        <Button variant="secondary" size="sm"> Delete</Button>
                    </Link>
                    &nbsp;&nbsp;

                    <Link to={"/edit/" + ID} style={{ textDecoration: 'none' }}>
                        <Button variant="secondary" size="sm">Edit</Button>
                    </Link>

                </td>
            </tr>
        );
    }
}

TableBody.propTypes = {
    customizationCol: PropTypes.any,
    product: PropTypes.any
}

TableHead.propTypes = {
    customizationCol: PropTypes.any   
}


