import React from 'react';
import { makeStyles } from 'tss-react/mui';
import LogoImage from '../../assets/logoImage.jpg';

const HomePage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.logoContainer}>
        <img src={LogoImage} alt="Cover" className={classes.logo} />
      </div>
    </div>
  );
};

const useStyles = makeStyles()(() => {
  return {
    homePageWrapper: {
      padding: '4vh 6vw',
    },
    logoContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    logo: {
      width: 'auto',
      height: '100%',
      maxHeight: '170px',
    },
  };
});

export default HomePage;
