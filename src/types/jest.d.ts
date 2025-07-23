// src/jest.d.ts
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(content: string | RegExp): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}
