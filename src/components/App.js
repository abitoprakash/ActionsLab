// test-eslint-plugins.js
import React from 'react';

// Example component to test jsx-a11y and unicorn rules
const ExampleComponent = () => {
  // unicorn rule: prefer-query-selector
  const badPractice = document.getElementById('myElement');

  // jsx-a11y rule: no-static-element-interactions
  return (
    <div
      onClick={() =>
        console.log('Clicked without propersss role or key event handlers')
      }
    >
      Click me!
    </div>
  );
};

export default ExampleComponent;
