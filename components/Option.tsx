import React, { OptionHTMLAttributes } from 'react'
import { Method } from 'types/method';

type OptionProps = OptionHTMLAttributes<HTMLOptionElement> & {
  children?: React.ReactNode
  value?: Method | 'Request' | 'Response'
}

const Option = ({ children, ...rest }: OptionProps) => {
  return (
    <option {...rest}>
      {children}
    </option>
  );
}

export default Option;