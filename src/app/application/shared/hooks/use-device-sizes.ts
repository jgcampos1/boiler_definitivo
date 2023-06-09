import { useMemo } from 'react';

import { useMediaQuery, Theme } from '@mui/material';

export const useDeviceSizes = () => {
  const isLargeDisplay = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('lg')
  );
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('md')
  );
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('sm')
  );

  return useMemo(
    () => ({
      isLargeDisplay,
      isDesktop,
      isTablet,
      isMobile
    }),
    [isLargeDisplay, isDesktop, isTablet, isMobile]
  );
};
