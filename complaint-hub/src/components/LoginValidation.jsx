const Validation = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required!";
  } else if (values.username.length < 4) {
    errors.username = "Username must be more than 4 characters";
  } else if (values.username.length > 15) {
    errors.username = "Username cannot exceed more than 15 characters";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }

  return errors;
};

export default Validation;
