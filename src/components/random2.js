// test-eslint-plugins.js
import React from 'react';

const ExampleComponent = () => {
  return (
    <div
      role="button"
      onClick={() =>
        console.log('Clicked without role ors key event shandlers')
      }
    >
      Click me
    </div>
  );
};

export default ExampleComponent;
