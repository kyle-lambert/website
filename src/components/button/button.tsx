import React from 'react';
import { styled } from '@stitches';

const StyledButton = styled('button', {
  fontFamily: '$system',
  color: '$red',

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

export const Button = () => {
  return <StyledButton size="3">Hello</StyledButton>;
};
