import React from 'react';

interface TabPanelProps {
  tabValue: number | string;
  currentValue: number | string;
  className?: string;
  children?: React.ReactNode;
}
const TabPanel: React.FC<TabPanelProps> = ({
  children,
  currentValue,
  tabValue,
  ...rest
}) => {
  return currentValue !== tabValue ? null : <div {...rest}>{children}</div>;
};

export default TabPanel;
