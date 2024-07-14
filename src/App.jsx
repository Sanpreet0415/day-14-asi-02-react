import React from 'react';
import useFormValidation from './useFormValidation';
import FormComponent from './FormComponent';

const App = () => {
  const { errors, validateForm } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form is valid!');
      // Handle form submission logic here (e.g., send data to server)
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <FormComponent handleSubmit={handleSubmit} errors={errors} />
    </div>
  );
};

export default App;
