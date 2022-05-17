import { styled } from '../stitches.config';
import { Button } from '@components';

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
    },
  },
});

export default function Home() {
  return (
    <div>
      <Text as="h1" size="4">
        Hello, from Stitches.
      </Text>
      <Button />
    </div>
  );
}
