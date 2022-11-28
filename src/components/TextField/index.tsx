import React from 'react';
import Input from '@mui/material/TextField';
import { Controller, UseFormReturn } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import Button from '../Button';

interface ITextField {
  name: string;
  label?: string;
  methods: UseFormReturn<any>;
  type?: 'text' | 'number';
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  search?: boolean;
  placeholder?: string;
  onClickButton?: any;
}

export default function TextField({
  name,
  label,
  type,
  required,
  autoFocus,
  disabled,
  methods,
  multiline,
  search,
  placeholder,
  onClickButton,
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
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoFocus={autoFocus}
          multiline={multiline}
          rows={multiline ? 5 : 0}
          style={{ color: 'white', width: '100%' }}
          onChange={(item) => onChange(item)}
          InputProps={
            search
              ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <Button isIconButton onClick={() => onClickButton}>
                      <Search style={{ color: '#494949' }} />
                    </Button>
                  </InputAdornment>
                ),
              }
              : {}
          }
        />
      )}
    />
  );
}
