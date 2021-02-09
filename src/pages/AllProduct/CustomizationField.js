import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


class CustomizationField extends React.Component {
    render() {

        let { handleCustomizationField } = this.props
        return (
            <>
                <DropdownMultiselect
                    options={["Product Description", "Manufacturer", "Quantity"]}
                    name="customizationField"
                    placeholder="Customizable field"
                    handleOnChange={(selected) => {
                        handleCustomizationField(selected);
                    }
                    }
                />
            </>
        );
    }
}

export default CustomizationField
