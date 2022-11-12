import { IconButton } from '@mui/material';
import MuiButton from '@mui/material/Button';
import React from 'react';

interface IButton {
  variant?: 'outlined' | 'outlined' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isIconButton?: boolean;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  variant, onClick, isIconButton, children, type,
}: IButton) => (
  <>
    {!isIconButton ? (
      <MuiButton variant={variant} type={type} onClick={onClick || undefined}>
        {children}
      </MuiButton>
    ) : (
      <IconButton onClick={onClick || undefined}>
        {children}
      </IconButton>
    )}
  </>

);

export default Button;
