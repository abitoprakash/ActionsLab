import React from 'react';

// Example component to test jsx-a11y and unicorn rules
const ExampleComponent = () => {

  // jsx-a11y rule: no-static-element-interactions
  return (
    <div
      role="button"
      onClick={() =>
        console.log('sa without proper role or key event handlers')
      }
    >
      Click me!
    </div>
  );
};

export default ExampleComponent;
