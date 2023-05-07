import React from 'react';
import Tab, { TabProps } from '@mui/material/Tab';
import { makeStyles } from 'tss-react/mui';

interface OwnProps extends TabProps {
  Icon: string | React.ReactElement;
}

const CustomizeTab: React.FC<OwnProps> = ({ Icon, ...rest }) => {
  const { classes } = useStyles();

  return <Tab icon={Icon} {...rest} classes={classes} />;
};

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      minWidth: 0,
      minHeight: 0,
      width: '46px',
      height: '44px',
      padding: 0,
      borderRadius: '8px',
      '& span': {
        color: theme.palette.primary.main,
      },
    },
    selected: {
      background: theme.palette.primary.main,
      '& span': {
        color: theme.palette.common.white,
      },
    },
  };
});

export default CustomizeTab;
