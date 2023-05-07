import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CustomButton from '../../components/base/CustomButton';
import { Event } from '../../types/event-types';

interface OwnProps {
  events: Event[];
}

const ListView: React.FC<OwnProps> = ({ events }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.eventsContainer}>
      {events.map((event: Event, index) => (
        <div
          key={`${event.title}-${event.time}`}
          className={classes.eventContainer}
          style={{ background: index % 2 === 0 ? undefined : 'white' }}
        >
          <div className={classes.item}>
            <Typography variant="title">{event.title}</Typography>
            <Typography variant="text" className={classes.location}>
              <span className="material-symbols-outlined">location_on</span>
              <span className={classes.locationText}>{event.location}</span>
            </Typography>
          </div>

          <div className={classes.item}>
            <Typography variant="text">Am {event.date}</Typography>
            <Typography variant="text">Ab {event.time}</Typography>
          </div>

          <div className={classes.item}>
            <Typography variant="text">Tickets ab</Typography>
            <Typography variant="title">{event.price} Euro</Typography>
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
    },
    eventContainer: {
      display: 'grid',
      gridTemplateColumns: '4fr 1fr 1fr 1fr',
      gap: 12,
      padding: 21,
      background: theme.palette.secondary.main,
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: '100%',
      [theme.breakpoints.up('xl')]: {
        maxHeight: 46,
      },
    },
    location: {
      display: 'flex',
      alignItems: ' center',
    },
    locationText: {
      paddingTop: '5px',
    },
    button: {
      height: 46,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  };
});

export default ListView;
