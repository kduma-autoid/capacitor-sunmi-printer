export interface SunmiPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
