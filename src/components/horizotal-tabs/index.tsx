import React, { FC } from 'react';
import { Tabs, TabsProps } from '@mui/material';
import Tab from './Tab';

export type TabType = {
  value: string | number;
  Icon: string | React.ReactElement;
};

interface IOwnProps extends TabsProps {
  tabs: TabType[];
  activeTab: string | number;
  onChange: TabsProps['onChange'];
}

const HorizontalTabs: FC<IOwnProps> = ({
  tabs,
  activeTab,
  onChange,
  classes,
  ...rest
}) => {
  return (
    <Tabs
      value={activeTab}
      onChange={onChange}
      TabIndicatorProps={{ hidden: true }}
      orientation="horizontal"
      classes={classes}
      {...rest}
    >
      {tabs.map(({ value, Icon }) => (
        <Tab key={value} value={value} Icon={Icon} />
      ))}
    </Tabs>
  );
};

export default HorizontalTabs;
