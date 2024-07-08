import React from "react";
import PropTypes from "prop-types";
import { Input } from "@chakra-ui/react";

const InputField = ({ ...props }) => {
  return <Input {...props} />;
};

export default InputField;

InputField.defaultProps = {
  props: {},
};

InputField.propTypes = {
  props: PropTypes.object,
};
