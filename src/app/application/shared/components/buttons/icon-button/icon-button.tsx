import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { ButtonProps } from '@mui/material';

import { Button, Container, Link } from './icon-button-styles';

type Props = ButtonProps & {
  className?: string;
  iconColor?: 'primary' | 'white';
  onClick?: () => void;
  icon: ReactNode;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
};

const IconButton = ({
  className,
  onClick,
  icon,
  iconColor,
  href,
  target
}: Props) => {
  const BaseButton = (
    <Container>
      <Button {...{ className, onClick, iconColor }}>{icon}</Button>
    </Container>
  );

  if (href) {
    return <Link {...{ href, target }}>{BaseButton}</Link>;
  }
  return BaseButton;
};

export default IconButton;
