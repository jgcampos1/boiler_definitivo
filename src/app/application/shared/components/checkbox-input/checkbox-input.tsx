import React from 'react';
import { Control, Controller } from 'react-hook-form';

import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Typography
} from '@material-ui/core';

import { useStyles } from './checkbox-input-styles';

type Props = Omit<CheckboxProps, 'defaultChecked'> & {
  name: string;
  label?: string;
  required?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: any) => void;
  optional?: boolean;
  control?: Control<any>;
};
const CheckboxInput = ({
  name,
  label,
  required,
  disabled,
  onChange,
  defaultChecked,
  optional,
  control,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <Controller
      defaultValue={defaultChecked}
      rules={{ required }}
      control={control}
      name={name}
      render={({ field }) => {
        const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
          onChange?.(event?.target?.checked);
          field.onChange(event?.target?.checked);
        };

        return (
          <FormControlLabel
            className={classes.formControl}
            {...{ disabled }}
            control={
              <Checkbox
                {...field}
                className={classes.checkbox}
                checked={!!field.value}
                onChange={handleChange}
                checkedIcon={<span />}
                icon={<span />}
                {...props}
              />
            }
            label={
              <Box className={classes.content}>
                <Typography className={classes.formControlLabel}>
                  {label}
                </Typography>
                {optional && (
                  <Typography className={classes.optional}>optional</Typography>
                )}
              </Box>
            }
          />
        );
      }}
    />
  );
};

export default CheckboxInput;
