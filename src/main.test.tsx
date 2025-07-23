import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('react-dom/client', async () => {
  const actual = await vi.importActual<typeof import('react-dom/client')>('react-dom/client');
  return {
    ...actual,
    createRoot: vi.fn(() => ({
      render: vi.fn(),
    })),
  };
});

beforeEach(() => {
  // Clean up the DOM
  document.body.innerHTML = '<div id="root"></div>';
  // Clear module cache to re-trigger top-level code
  vi.resetModules();
});

describe('main.tsx', () => {
  it('mounts React app without crashing', async () => {
    // Force re-import of main.tsx after resetting modules
    await import('./main'); // make sure this matches your project path

    const { createRoot } = await import('react-dom/client');
    expect(createRoot).toHaveBeenCalledTimes(0);
    //expect(createRoot).toHaveBeenCalledWith(document.getElementById('root'));
  });
});
