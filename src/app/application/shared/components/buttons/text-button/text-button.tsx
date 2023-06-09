import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { Button, Text, Link, Container, Line } from './text-button-styles';

type Props = {
  className?: string;
  title: string;
  buttonColor?: 'primary' | 'white';
  href?: string;
  customTextColor?: string;
  customIconColor?: string;
  textBold?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  removeLine?: boolean;
  target?: HTMLAttributeAnchorTarget;
};

export const TextButton = ({
  buttonColor = 'primary',
  className,
  onClick,
  title,
  textBold,
  href,
  customTextColor,
  icon,
  target,
  removeLine = false
}: Props) => {
  const BaseButton = (
    <Container {...{ className }}>
      <Button {...{ onClick, buttonColor }}>
        {icon}
        <Text {...{ customTextColor, textBold }} textColor={buttonColor}>
          {title}
        </Text>
      </Button>

      {!removeLine && <Line />}
    </Container>
  );

  if (href) {
    return <Link {...{ target, href }}>{BaseButton}</Link>;
  }

  return BaseButton;
};

export default TextButton;
