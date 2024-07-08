import React from "react";
import PropTypes from "prop-types";
import { Select } from "@chakra-ui/react";

const SelectField = ({ options, ...props }) => {
  return (
    <Select {...props}>
      {options?.length > 0 &&
        options?.map((option, index) => (
          <option value={option.value} key={index}>
            {option.name}
          </option>
        ))}
    </Select>
  );
};

export default SelectField;

SelectField.defaultProps = {
  options: [],
  props: {},
};

SelectField.propTypes = {
  options: PropTypes.array,
  props: PropTypes.object,
};
