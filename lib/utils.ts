export const isValid = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  } else if (typeof error === 'string') {
    return error;
  } else {
    return 'Something went wrong';
  }
};
