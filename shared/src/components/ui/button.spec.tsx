import { render } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        this is button
      </Button>,
    );
    expect(baseElement).toBeTruthy();
  });
});
