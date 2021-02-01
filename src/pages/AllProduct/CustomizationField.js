import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
 

const CustomizationField=()=>(
    <>
  <h1>Filed Customization</h1>
    <DropdownMultiselect
    options={["productName", "productDesctiption", "manufacturer", "price", "quantity"]}
    name="customizationField"
  />
   </>
)

export default CustomizationField