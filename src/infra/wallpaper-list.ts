import { WallpaperItem } from '@/domain';

import { sakura } from './sakura';
import { hongEunchae } from './hongEunchae';
import { huhYunjin } from './huhYunjin';
import { kazuha } from './kazuha';
import { kimChaewon } from './kimChaewon';
import { leSserafim } from './leSserafim';

export const wallpaperList: WallpaperItem[] = [
  ...sakura,
  ...hongEunchae,
  ...huhYunjin,
  ...kazuha,
  ...kimChaewon,
  ...leSserafim,
];
