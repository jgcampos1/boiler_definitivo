import { memo, ReactElement, useEffect, useMemo, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import {
  FormControl,
  FormHelperText,
  MenuItem,
  TextField,
  TextFieldProps,
  Typography,
  Box,
  Tooltip
} from '@material-ui/core';
import { Info, More } from '@mui/icons-material';
import clsx from 'clsx';

import { isEmpty } from '../../common/helpers/is-empty';
import { ValidationErrorType } from '../../common/protocols/validation';
import { OptionType } from '../../common/types/option-type';
import { useTranslation } from '../../hooks/use-translation';
import { BaseButton } from '../buttons';
import { useStyles } from './select-input-styles';

type Props = TextFieldProps & {
  label?: string;
  name: string;
  tooltip?: string;
  required?: boolean;
  options: OptionType[];
  optional?: boolean;
  noBorder?: boolean;
  control?: Control<any>;
  button?: ReactElement;
  secondaryButton?: ReactElement;
  labelWeight?: number;
  isCustomError?: boolean;
  customErrorMessage?: string;
  defaultFieldValue?: any;
  defaultValue?: any;
  noOptionsLabel?: string;
  placeholder?: string;
  actionButtonTitle?: string;
  isLabelColorPrimary?: boolean;
  padding?: string;
  dataTestId?: string;
  actionButtonClick?: () => void;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  className?: string;
};

const SelectInput = ({
  onBlur,
  onChange,
  label,
  required,
  tooltip,
  name,
  options,
  optional,
  control,
  button,
  secondaryButton,
  labelWeight,
  noBorder,
  isCustomError,
  customErrorMessage,
  defaultFieldValue,
  defaultValue,
  noOptionsLabel,
  placeholder,
  actionButtonClick,
  isLabelColorPrimary,
  padding,
  actionButtonTitle,
  dataTestId,
  className,
  ...props
}: Props) => {
  const { translate } = useTranslation();

  const [hasValue, setHasValue] = useState(false);

  const classes = useStyles({
    optional,
    labelWeight,
    placeholder,
    hasValue,
    isLabelColorPrimary,
    padding
  });

  return (
    <Controller
      defaultValue={defaultFieldValue ?? ''}
      rules={{ required }}
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => {
        const errorState = error as unknown as ValidationErrorType;

        const errorMessage = errorState?.name ?? errorState?.message ?? '';
        const errorOption = errorState?.option;
        const value = field.value ?? '';

        useEffect(() => setHasValue(!!value), [value]);

        const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
          onChange?.(event?.target?.value);
          field.onChange(event.target.value);
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
          onBlur?.(event?.target?.value);
          field.onBlur();
        };

        const classNoBorder = useMemo(() => {
          if (noBorder) return classes.noBorder;
        }, [noBorder]);

        return (
          <FormControl variant='outlined' className={className} fullWidth>
            {label && (
              <Box display='flex'>
                <Typography className={classes.fieldName}>
                  {translate(label)}
                </Typography>
                {tooltip && (
                  <Tooltip className={classes.formControlTip} title={tooltip}>
                    <Info />
                  </Tooltip>
                )}
              </Box>
            )}

            <TextField
              variant='outlined'
              data-testid={dataTestId}
              {...props}
              {...field}
              value={value}
              className={clsx(classNoBorder, classes.input, classes)}
              onChange={handleChange}
              onBlur={handleBlur}
              select
              inputProps={{ 'aria-label': label, ...props.inputProps }}
            >
              {!!secondaryButton && secondaryButton}
              {!!button && button}

              {actionButtonTitle && actionButtonClick && (
                <BaseButton
                  title={actionButtonTitle}
                  startIcon={<More />}
                  className={classes.actionButton}
                  onClick={actionButtonClick}
                />
              )}

              {defaultValue && (
                <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
              )}

              {!isEmpty(options) ? (
                options.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.id}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value='' disabled>
                  {noOptionsLabel}
                </MenuItem>
              )}
            </TextField>

            {invalid && (
              <FormHelperText className={classes.errorHelperText}>
                {translate(errorMessage, errorOption)}
              </FormHelperText>
            )}
            {isCustomError && (
              <FormHelperText className={classes.errorHelperText}>
                {customErrorMessage}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default memo(SelectInput);
