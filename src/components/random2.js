// test-eslint-plugins.js
import React from 'react';

// Example component to test jsx-a11y and unicorn rules
const ExampleComponent = () => {
  // jsx-a11y rule: no-static-element-interactions
  return (
    <div
      role="button"
      onClick={() =>
        console.log('Clicked without proper role ors key event shandlers')
      }
    >
      Click me
    </div>
  );
};

export default ExampleComponent;
