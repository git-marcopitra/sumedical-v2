import { FC } from 'react';

import { SVGProps } from './svg.props';

const Search: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M12.2771 9.80587H11.5559L11.3003 9.57255C12.1949 8.58743 12.7335 7.3085 12.7335 5.91723C12.7335 2.81495 10.0771 0.300293 6.79998 0.300293C3.52285 0.300293 0.866455 2.81495 0.866455 5.91723C0.866455 9.0195 3.52285 11.5342 6.79998 11.5342C8.26967 11.5342 9.62068 11.0243 10.6613 10.1775L10.9078 10.4194V11.1021L15.4721 15.4142L16.8322 14.1266L12.2771 9.80587ZM6.79998 9.80587C4.52698 9.80587 2.69215 8.06894 2.69215 5.91723C2.69215 3.76551 4.52698 2.02858 6.79998 2.02858C9.07298 2.02858 10.9078 3.76551 10.9078 5.91723C10.9078 8.06894 9.07298 9.80587 6.79998 9.80587Z"
      fill="currentColor"
    />
  </svg>
);

export default Search;