import { Button, Text, Link } from './outlined-button-styles';

type Props = {
  className?: string;
  title: string;
  buttonColor?: 'primary' | 'white';
  href?: string;
  customTextColor?: string;
  customIconColor?: string;
  handleClick?: () => void;
};

const OutlinedButton: React.FC = ({
  buttonColor = 'primary',
  className,
  handleClick,
  title,
  href,
  customTextColor
}: Props) => {
  const BaseButton = (
    <Button
      buttonColor={buttonColor}
      className={className}
      onClick={handleClick}
    >
      <Text customTextColor={customTextColor} textColor={buttonColor}>
        {title}
      </Text>
    </Button>
  );

  if (href) {
    return <Link href={href}>{BaseButton}</Link>;
  }

  return BaseButton;
};

export default OutlinedButton;
