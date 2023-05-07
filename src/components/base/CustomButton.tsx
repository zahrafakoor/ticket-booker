import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Button, { ButtonProps } from '@mui/material/Button';
import { Typography } from '@mui/material';

interface OwnProps extends ButtonProps {
  text: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

const CustomButton: React.FC<OwnProps> = ({ text, icon, onClick, ...rest }) => {
  const { classes } = useStyles();

  return (
    <Button {...rest} className={classes.button} onClick={onClick}>
      <Typography variant="text" className={classes.buttonText}>
        {text}
      </Typography>
      {icon && <span className={classes.icon}>{icon}</span>}
    </Button>
  );
};

const useStyles = makeStyles()((theme) => ({
  button: {
    position: 'relative',
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: 273,
    height: 55,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 8,
    textAlign: 'center',
    minWidth: 273,

    '&:hover': {
      background: theme.palette.common.white,
      color: theme.palette.primary.main,
    },
  },
  buttonText: {
    paddingTop: 3,
  },
  icon: {
    position: 'absolute',
    right: 26,
    top: '50%',
    transform: 'translateY(-50%)',
    '& span': {
      lineHeight: 'unset',
    },
  },
}));

export default CustomButton;
