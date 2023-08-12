import { render } from '@testing-library/react';

import HomeNav from './home-nav';

describe('HomeNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeNav />);
    expect(baseElement).toBeTruthy();
  });
});
