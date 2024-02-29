import { FC } from 'react';

import { SVGProps } from './svg.props';

const Circle: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 154 154"
    fill="none"
    {...props}
  >
    <circle
      cx="77"
      cy="77"
      r="75.5"
      stroke="url(#paint0_radial_417_14)"
      strokeWidth="3"
    />
    <defs>
      <radialGradient
        id="paint0_radial_417_14"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(77 38) rotate(90) scale(104)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default Circle;
