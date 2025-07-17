import React from 'react';

const PageOne = () => {
  return (
    <div
      role='button'
      onClick={() =>
        console.log('Clicked without prper role or key event handlers')
      }
    >
      <h1 onClick={() => console.log('page 1')}>Page One</h1>
    </div>
  );
}

export default PageOne;
