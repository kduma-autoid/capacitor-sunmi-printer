export interface SunmiPrinterPlugin {
  isLabelMode(): Promise<{ label_mode: boolean }>;
  labelOutput(): Promise<void>;
  labelLocate(): Promise<void>;
  sendTextsToLcd(): Promise<void>;
  sendTextToLcd(): Promise<void>;
  controlLcd(options: { flag: number }): Promise<void>;
  openCashBox(): Promise<void>;
  getPrinterVersion(): Promise<{ version: string }>;
  getPrinterPaper(): Promise<{ paper: string }>;
  getDeviceModel(): Promise<{ model: string }>;
  getPrinterSerialNo(): Promise<{ serial: string }>;
  sendRAWData(options: { data: string }): Promise<void>;
  setMode(options: { bluetooth: boolean }): Promise<void>;
  initPrinter(): Promise<void>;
}
