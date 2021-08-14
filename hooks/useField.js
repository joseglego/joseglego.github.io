import React from 'react';

const useField = (inputProps) => {
  const [value, setValue] = React.useState(inputProps.defaultValue || '');

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    ...inputProps,
    value,
    onChange
  };
};

export default useField;
