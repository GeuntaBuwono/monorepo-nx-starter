import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import React from 'react';

import Index from '../pages/index';
const mocks = []; // We'll fill this in next

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Index />
      </MockedProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
