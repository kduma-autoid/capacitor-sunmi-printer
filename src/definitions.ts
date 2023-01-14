export interface SunmiPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  echo(options: { value: string }): Promise<{ value: string }>;
  initPrinter(): Promise<void>;
}
