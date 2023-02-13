export interface SunmiPrinterPlugin {
  isLabelMode(): Promise<{ label_mode: boolean }>;
  labelOutput(): Promise<void>;
  labelLocate(): Promise<void>;
  sendTextsToLcd(): Promise<void>;
  sendTextToLcd(options: { text: string, size?: number, fill?: boolean }): Promise<void>;
  clearLcd(): Promise<void>;
  disableLcd(): Promise<void>;
  enableLcd(): Promise<void>;
  initLcd(): Promise<void>;
  openCashBox(): Promise<void>;
  getPrinterVersion(): Promise<{ version: string }>;
  getPrinterPaper(): Promise<{ paper: string }>;
  getDeviceModel(): Promise<{ model: string }>;
  getPrinterSerialNo(): Promise<{ serial: string }>;
  sendRAWData(options: { data: string }): Promise<void>;
  setMode(options: { bluetooth: boolean }): Promise<void>;
  initPrinter(): Promise<void>;
}
