import { render } from '@testing-library/react';

import BackgroundColor from './background-color';

describe('BackgroundColor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackgroundColor />);
    expect(baseElement).toBeTruthy();
  });
});
