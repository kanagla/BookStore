import '@testing-library/jest-dom';

// This extends Jest matchers globally
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
