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
        console.log('Clicked without prosperssssss role ors key event shandlers')
      }
    >
      Click me!
    </div>
  );
};

export default ExampleComponent;
