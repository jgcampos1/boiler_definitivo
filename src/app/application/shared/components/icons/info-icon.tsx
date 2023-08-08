import { Info } from '@phosphor-icons/react';

interface Props {
  size?: number;
  color?: string;
}
export const InfoIcon = ({ size, color }: Props) => (
  <Info size={size || 32} color={color || '#000'} />
);
