import React from 'react';
import { Icon, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CustomButton from '../../components/base/CustomButton';
import { Event } from '../../types/event-types';

interface OwnProps {
  events: Event[];
}

const GridView: React.FC<OwnProps> = ({ events }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.eventsContainer}>
      {events.map((event: Event) => (
        <div
          key={`${event.title}-${event.time}`}
          className={classes.eventContainer}
        >
          <div className={classes.eventInfoContainer}>
            <div className={classes.imgContainer}>
              <img
                src={event.image}
                alt={event.title}
                className={classes.img}
              />
            </div>

            <div className={classes.eventItemContainer}>
              <Typography variant="title" className={classes.title}>
                {event.title}
              </Typography>
              <Typography variant="text" className={classes.item}>
                <Icon>
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                </Icon>
                <span className={classes.itemText}>{event.date}</span>

                <span className={cx('material-symbols-outlined', classes.time)}>
                  schedule
                </span>
                <span className={classes.itemText}>{event.time}</span>
              </Typography>
              <Typography variant="text" className={classes.item}>
                <span className="material-symbols-outlined">location_on</span>
                <span className={classes.itemText}>{event.location}</span>
              </Typography>
              <Typography variant="text" className={classes.item}>
                <span className="material-symbols-outlined">payments</span>
                <span className={classes.itemText}>
                  Tickets ab {event.price}€
                </span>
              </Typography>
              {event.warning && (
                <Typography variant="text" className={classes.warningMessage}>
                  {event.warning}
                </Typography>
              )}
            </div>
          </div>

          <CustomButton
            text="Zu den Tickets"
            className={classes.button}
            icon={
              <span className="material-symbols-outlined">chevron_right</span>
            }
          />
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles()((theme) => {
  return {
    eventsContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 34,
      gap: 34,
    },
    eventContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        gap: 12,
      },
    },
    eventInfoContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '.8fr 1.2fr',
      gap: 46,
      marginRight: 34,
      [theme.breakpoints.down('lg')]: {
        marginRight: 0,
      },
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      },
    },
    imgContainer: {
      width: '100%',
      height: 228,
      overflow: 'hidden',
      borderRadius: 8,
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    eventItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    },
    title: {
      marginBottom: 16,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      height: 28,
    },
    itemText: {
      paddingTop: '5px',
      marginLeft: 14,
    },
    time: {
      marginLeft: 24,
      marginRight: '-7.5px',
    },
    warningMessage: {
      color: theme.palette.warning.main,
    },
    button: {
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
  };
});

export default GridView;
