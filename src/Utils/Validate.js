const validate = (data, schema) => {
  const { error } = schema.validate(data, { abortEarly: false });
  if (!error) return null;

  const errors = {};
  for (const detail of error.details) {
    errors[detail.path[0]] = detail.message;
  }
  return errors;
};

export default validate;