import React from 'react';
import { components, InputProps } from 'react-select';
import { OptionProps } from '..';

const CustomInput = (props: InputProps<OptionProps, true>): JSX.Element => (
  <components.Input {...props} />
);

export default CustomInput;
