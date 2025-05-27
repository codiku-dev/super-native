import { render } from '@testing-library/react-native';
import { Button } from 'react-native';

import { Text } from '@/components/ui/text';

describe('Button Component', () => {
  it('renders correctly a native button', () => {
    const { getByRole } = render(<Button title='Test Button' />);
    expect(getByRole('button')).toBeTruthy();
  });

  it('renders correctly a text (rnr)', () => {
    const { getByText } = render(<Text>Test Text</Text>);
    expect(getByText('Test Text')).toBeTruthy();
  });
});

