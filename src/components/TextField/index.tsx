import React from 'react';
import Input from '@mui/material/TextField';
import { Controller, UseFormReturn } from 'react-hook-form';

interface ITextField {
  name: string;
  label: string;
  methods: UseFormReturn<any>;
  type?: 'text' | 'number'
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
}

export default function TextField({
  name,
  label,
  type,
  required,
  autoFocus,
  disabled,
  methods,
}: ITextField) {
  return (
    <Controller
      control={methods.control}
      name={name}
      render={({ field: { onChange } }) => (
        <Input
          name={name}
          label={label}
          variant="outlined"
          size="medium"
          type={type}
          required={required}
          disabled={disabled}
          autoFocus={autoFocus}
          style={{ color: 'white', width: '100%' }}
          onChange={(item) => onChange(item)}
        />
      )}
    />
  );
}
