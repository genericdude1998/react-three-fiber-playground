import React from 'react';

export default function TabPanel({ index, value, children }) {
  return (
    <div>{index === value ? children : null}</div>
  );
}
