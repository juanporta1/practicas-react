import { render } from '@testing-library/react';

import ColorChanger from './color-changer';

describe('ColorChanger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorChanger />);
    expect(baseElement).toBeTruthy();
  });
});
