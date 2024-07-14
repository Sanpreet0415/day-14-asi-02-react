import React from 'react';

const FormComponent = ({ handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
