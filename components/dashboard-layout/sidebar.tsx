import { Aside } from '@stylin.js/elements';
import { FC } from 'react';

import { colors } from '@/styles/theme/colors';
import { radii } from '@/styles/theme/radii';

const Sidebar: FC = () => (
  <Aside
    py="2rem"
    my="-1rem"
    position="relative"
    width="20rem"
    bg={colors.primary}
    boxShadow="2rem 0 1rem #0003"
    borderTopRightRadius={radii.l}
    borderBottomRightRadius={radii.l}
  ></Aside>
);

export default Sidebar;
