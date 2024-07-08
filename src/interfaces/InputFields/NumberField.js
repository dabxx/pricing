import React from "react";
import PropTypes from "prop-types";
import { NumberInput, NumberInputField } from "@chakra-ui/react";

const NumberField = ({ ...props }) => {
  return (
    <NumberInput variant={"filled"} {...props}>
      <NumberInputField
        className="!bg-[#85869833] !rounded !h-11 font-medium !border !p-0 text-center"
        _focusVisible={{ border: "1px solid #63b3ed" }}
      />
    </NumberInput>
  );
};

export default NumberField;

NumberField.defaultProps = {
  props: {},
};

NumberField.propTypes = {
  props: PropTypes.object,
};
