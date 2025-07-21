// test-eslint-plugins.js

// Example component to test jsx-a11y
const ExampleComponent = () => {
  // unicorn rule: prefer-query-selector
  const badPractice = document.getElementById('myElement');

  // jsx-a11y rule: no-static-element-interactions
  return (
    <div
      role="button"
      aria-label="Click me"
      onClick={() =>
        console.log('Clicked without proper role or key event handlers')
      }
    >
      Click me!
    </div>
  );
};

export default ExampleComponent;
