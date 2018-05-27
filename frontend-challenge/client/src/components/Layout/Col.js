import React from 'react';
import MediaQuery from 'react-responsive';

const Col = ({ children, laptopColumns, mobileColumns }) => {
  const mobile = `${90 / mobileColumns}%`;
  const laptop = `${90 / laptopColumns}%`;

  return (
    <MediaQuery query="(max-width: 860px)">
      {(matches) => {
        if (matches) return <div style={{ flexBasis: mobile, marginBottom: 10 }}>{children}</div>;
        return <div style={{ flexBasis: laptop }}>{children}</div>;
      }}
    </MediaQuery>
  );
};

export default Col;
