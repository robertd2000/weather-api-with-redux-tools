import React from 'react';

// type AlertType = {
//   text: string;
// };

export const Alert = ({ text }) => {
  return (
    <div className="alert alert-info" role="alert">
      {text}
    </div>
  );
};
