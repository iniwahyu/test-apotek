// src/components/Content.js
import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="flex-grow p-5">
      {children}
    </div>
  );
};

export default Content;