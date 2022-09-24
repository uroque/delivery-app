import { render } from '@testing-library/react';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui),
  };
};

export default renderWithRouter;
