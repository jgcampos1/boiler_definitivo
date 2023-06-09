import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Colors from '~/app/application/shared/styles/colors';

type StyleProps = {
  optional?: boolean;
  labelWeight?: number;
  placeholder?: string;
  hasValue?: boolean;
  isLabelColorPrimary?: boolean;
  padding: string;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputForm: {
      width: 100
    },
    fieldName: {
      fontSize: theme.typography.pxToRem(14),
      color: ({ isLabelColorPrimary }) =>
        isLabelColorPrimary
          ? theme.palette.text.primary
          : theme.palette.text.secondary,
      marginBottom: 8,
      fontWeight: ({ labelWeight }) => labelWeight ?? 400,
      '&:after': {
        content: ({ optional }: StyleProps) =>
          optional ? '"(Optional)"' : "''",
        position: 'absolute',
        marginLeft: theme.spacing(0.5),
        marginRight: ({ optional }: StyleProps) =>
          optional ? theme.spacing(0.5) : '0',
        top: 0,
        backgroundColor: 'transparent'
      }
    },
    input: {
      '& > div > fieldset ': {
        border: '1px solid rgba(0, 0, 0, 0.1) !important'
      },
      '& .Mui-disabled': {
        background: '#efefef',
        opacity: 0.7,
        cursor: 'not-allowed'
      },
      '& .MuiOutlinedInput-root': {
        color: theme.palette.text.secondary,
        backgroundColor: '#FAFAFA',
        '&:after': {
          content: ({ placeholder, hasValue }: StyleProps) =>
            placeholder && !hasValue ? `"${placeholder}"` : '""',
          pointerEvents: 'none',
          display: 'block',
          position: 'absolute',
          left: 10,
          width: '100%',
          color: theme.palette.text.secondary,
          fontWeight: 300,
          fontSize: theme.typography.pxToRem(14)
        },
        '& > .MuiOutlinedInput-input': {
          padding: ({ padding }: StyleProps) => padding ?? '10px 10px 12px',
          minWidth: 80,
          fontSize: theme.typography.pxToRem(14),
          paddingRight: '35px'
        },
        '& fieldset': {
          color: '#404452',
          maxWidth: '100%',
          fontSize: theme.typography.pxToRem(14),
          borderRadius: 5,
          transition: 'all 0.3s ease',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          '&:focus': {
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }
        },
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    errorHelperText: {
      margin: theme.spacing(1, 0),
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.error.main
    },
    noBorder: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          boxShadow: 'none !important'
        },
        '&.Mui-focused fieldset': {
          border: '0 !important'
        }
      }
    },
    formControlTip: {
      marginLeft: 4,
      fontSize: 18,
      color: Colors.BgGray,

      '& .MuiTooltip-tooltip': {
        color: Colors.BgGray,
        backgroundColor: theme.palette.common.white
      }
    },
    actionButton: {
      display: 'flex',
      justifyContent: 'flex-start',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      marginTop: theme.spacing(-1),
      borderRadius: '5px 5px 0px 0px',
      height: theme.typography.pxToRem(40),
      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
      },
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(14),
      width: '100%',
      paddingLeft: theme.spacing(2)
    }
  })
);
