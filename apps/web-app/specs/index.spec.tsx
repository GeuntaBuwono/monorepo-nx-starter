import { render } from '@testing-library/react';
// eslint-disable-next-line no-restricted-imports
import Index from '../pages';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
