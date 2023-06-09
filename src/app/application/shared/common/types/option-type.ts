import React from 'react';

export type OptionType = {
  id: string | number;
  label: string | number | React.ReactNode;
  disabled?: boolean;
  name?: string;
  value?: string;
};
