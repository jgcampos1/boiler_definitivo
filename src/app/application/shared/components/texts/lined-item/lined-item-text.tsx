import { Icon, Text, Wrapper } from './lined-item-text-styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  textColor?: 'gray' | 'white' | 'black';
};

const LinedItemText = ({ children, className, textColor = 'gray' }: Props) => {
  return (
    <Wrapper className={className}>
      <Icon />
      <Text textColor={textColor}>{children}</Text>
    </Wrapper>
  );
};

export default LinedItemText;
