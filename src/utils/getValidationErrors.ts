import { ValidationError } from 'yup';

interface ErrorData {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): ErrorData {
  const errors: ErrorData = {};

  err.inner.forEach(error => {
    errors[error.path] = error.message;
  });

  return errors;
}
