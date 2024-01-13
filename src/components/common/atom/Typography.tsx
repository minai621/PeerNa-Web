import { FontVariantsClassName } from '@constants/styles';
import { FontVariantsKeys } from '@type/styles';
import { HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  children: string;
  fontColor?: ColorTypes;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = ({
  as: Typo = 'p',
  variant = 'body01',
  fontColor = 'gray07',
  children,
  ...props
}: TypographyProps) => {
  return (
    <Typo
      className={`
        ${FontVariantsClassName[variant]} 
        leading-default 
        tracking-default 
        ${props.className}`}
    >
      {children}
    </Typo>
  );
};

export default Typography;
