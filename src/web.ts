import { WebPlugin } from '@capacitor/core';

import type { SunmiPrinterPlugin } from './definitions';

export class SunmiPrinterWeb extends WebPlugin implements SunmiPrinterPlugin {
  initPrinter(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  initLcd(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  enableLcd(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  clearLcd(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  disableLcd(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  getDeviceModel(): Promise<{ model: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterPaper(): Promise<{ paper: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterSerialNo(): Promise<{ serial: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterVersion(): Promise<{ version: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  isLabelMode(): Promise<{ label_mode: boolean }> {
    throw this.unimplemented('Not implemented on web.');
  }

  labelLocate(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  labelOutput(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  openCashBox(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendRAWData(_options: { data: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendTextToLcd(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendTextsToLcd(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setMode(_options: { bluetooth: boolean }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
