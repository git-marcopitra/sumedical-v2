import { FC } from 'react';

import { SVGProps } from './svg.props';

const ArrowDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <path d="M6 9L12.5 17.5L20 9" stroke="currentColor" />
    <circle cx="13" cy="13" r="12.5" stroke="currentColor" />
  </svg>
);

export default ArrowDown;
