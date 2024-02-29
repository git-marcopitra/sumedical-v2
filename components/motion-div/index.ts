import { Div, DivProps } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

const MotionDiv = motion(Div as FC<Omit<DivProps, 'transition'>>);

export default MotionDiv;
