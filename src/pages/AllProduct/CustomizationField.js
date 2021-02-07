import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
 

const CustomizationField=(props)=>(
    <>
 
    <DropdownMultiselect
    options={["productName", "productDesctiption", "manufacturer", "price", "quantity"]}
    name="customizationField"
    placeholder="Filter"
    selected={["productName", "productDesctiption", "manufacturer", "price", "quantity"]}
    handleOnChange={(selected)=>{

      props.cusValue(selected);
     
    }

    }
  />
   </>
)

export default CustomizationField