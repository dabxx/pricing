import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

const scrollBarStyle = {
  "::-webkit-scrollbar": {
    width: "12px",
  },
  "::-webkit-scrollbar-track": {
    background: "#85869833",
    borderRadius: "8px",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "8px",
    border: "1px solid #85869833",
    background: "#292A35CC",
  },
};

const Select = ({ className, components, customStyles, ...props }) => {
  return (
    <ReactSelect
      classNamePrefix="select"
      isClearable={false}
      className={`!w-72 cursor-pointer ${className}`}
      components={{
        IndicatorSeparator: null,
        ...components,
      }}
      styles={{
        menuList: (styles) => ({
          ...styles,
          ...scrollBarStyle,
        }),
        option: (styles) => ({
          ...styles,
        }),
        ...customStyles,
      }}
      classNames={{
        control: () =>
          `!bg-[#21232E] !border-[#85869833] !rounded-lg !shadow-none !cursor-pointer`,
        input: () => "!text-[#EBEBEB] !ml-8",
        placeholder: () => "!ml-8",
        valueContainer: () => "!px-4 !py-[3px]",
        dropdownIndicator: () => "!px-4 !py-2",
        singleValue: () => "!text-[#EBEBEB] !ml-8",
        menu: () => "!bg-[#21232E] !rounded-lg !py-2 !pl-3 !pr-2",
        menuList: () => "!max-h-[200px] !h-full !overflow-auto",
        option: ({ data, isDisabled, isFocused, isSelected }) =>
          `!text-base !font-medium bg-transparent !pl-3 !rounded-lg ${isFocused && "!bg-[#2c303b]"}
           ${isSelected && "!bg-gradient-to-r !from-[#3BA0E6] !to-[#3B6EF3]"}
          `,
      }}
      {...props}
    />
  );
};

export default Select;

Select.defaultProps = {
  className: "",
  components: {},
  customStyles: {},
};

Select.propTypes = {
  className: PropTypes.string,
  components: PropTypes.object,
  customStyles: PropTypes.object,
};
