import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
 

const CustomizationField=(props)=>(
    <>
 
    <DropdownMultiselect
    options={["productDescription", "manufacturer", "quantity"]}
    name="customizationField"
    placeholder="Customizable field"
    handleOnChange={(selected)=>{

      props.cusValue(selected);
     
    }

    }
  />
   </>
)

export default CustomizationField