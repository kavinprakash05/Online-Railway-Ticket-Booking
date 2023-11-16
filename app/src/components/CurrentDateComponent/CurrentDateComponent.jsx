import React from 'react';

function CurrentDateComponent() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      Today's Date: {currentDate}
    </div>
  );
}

export default CurrentDateComponent;
