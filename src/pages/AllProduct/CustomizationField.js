import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


class CustomizationField extends React.Component {
    render() {
        return (
            <>
                <DropdownMultiselect
                    options={["Product Description", "Manufacturer", "Quantity"]}
                    name="customizationField"
                    placeholder="Customizable field"
                    handleOnChange={(selected) => {
                        this.props.cusValue(selected);
                    }
                    }
                />
            </>
        );
    }
}

export default CustomizationField
