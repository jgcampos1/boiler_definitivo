import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
interface Props {
  className?: string;
}

export const BoletoIcon = ({ className }: Props) => (
  <QrCodeScannerIcon className={className} />
);
