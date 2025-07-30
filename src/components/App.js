// test-eslint-plugins.js
import React, { useEffect } from 'react';

// Example component to test jsx-a11y and unicorn rules
const ExampleComponent = () => {

  useEffect(() => {
    const element = document.querySelector('role="button"');
    console.log('Element found:', element);
  }, []);

  // jsx-a11y rule: no-static-element-interactions
  return (
    <div
      role="button"
      onClick={() =>
        console.log('sa without propersssss role or key event handlers')
      }
    >
      Click me!
    </div>
  );
};

export default ExampleComponent;
