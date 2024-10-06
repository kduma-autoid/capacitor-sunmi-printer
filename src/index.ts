import { registerPlugin } from '@capacitor/core';

import type { SunmiPrinterPlugin } from './definitions';

const SunmiPrinter = registerPlugin<SunmiPrinterPlugin>('SunmiPrinter', {
  web: () => import('./web').then((m) => new m.SunmiPrinterWeb()),
});

export * from './definitions';
export { SunmiPrinter };
