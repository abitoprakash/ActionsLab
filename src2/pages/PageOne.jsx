import React from 'react';

const PageOne = () => {
  return (
    <div
      onClick={() =>
        console.log('Clicked without propersssss role or key event handlers')
      }
    >
      <h1 onClick={() => console.log('page 1')}>Page One</h1>
    </div>
  );
}

export default PageOne;
