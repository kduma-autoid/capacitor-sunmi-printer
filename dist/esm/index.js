import { registerPlugin } from '@capacitor/core';
const SunmiPrinter = registerPlugin('SunmiPrinter', {
    web: () => import('./web').then(m => new m.SunmiPrinterWeb()),
    ios: () => import('./web').then(m => new m.SunmiPrinterWeb()),
});
export * from './definitions';
export { SunmiPrinter };
//# sourceMappingURL=index.js.map