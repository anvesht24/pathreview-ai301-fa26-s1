import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ReviewPage from '../ReviewPage';

expect.extend(toHaveNoViolations);

describe('ReviewPage', () => {
  it('renders', () => {
    render(<ReviewPage />);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<ReviewPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});