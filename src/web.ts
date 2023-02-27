import { WebPlugin } from '@capacitor/core';

import type { SunmiPrinterPlugin ,PrinterModeEnum, PrinterStatusEnum, ServiceStatusEnum } from './definitions';

export class SunmiPrinterWeb extends WebPlugin implements SunmiPrinterPlugin {
  bindService(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  cutPaper(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  getCutPaperTimes(): Promise<{ times: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getDeviceName(): Promise<{ name: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getDrawerStatus(): Promise<{ opened: boolean }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getFontName(): Promise<{ font: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getForcedDouble(): Promise<{ status: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getForcedRowHeight(): Promise<{ height: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getOpenDrawerTimes(): Promise<{ times: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrintedLength(): Promise<{ length: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterBBMDistance(): Promise<{ distance: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterDensity(): Promise<{ density: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterMode(): Promise<{ mode: PrinterModeEnum; code: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterModel(): Promise<{ model: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterPaper(): Promise<{ paper: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterSerialNo(): Promise<{ serial_number: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getPrinterVersion(): Promise<{ version: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getServiceStatus(): Promise<{ status: ServiceStatusEnum }> {
    throw this.unimplemented('Not implemented on web.');
  }

  getServiceVersion(): Promise<{ version: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  isForcedAntiWhite(): Promise<{ status: boolean }> {
    throw this.unimplemented('Not implemented on web.');
  }

  isForcedBold(): Promise<{ status: boolean }> {
    throw this.unimplemented('Not implemented on web.');
  }

  isForcedUnderline(): Promise<{ status: boolean }> {
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

  lineWrap(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  openDrawer(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  print2DCode(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printBarCode(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printBitmap(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printBitmapCustom(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printColumnsString(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printColumnsText(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printOriginalText(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printQRCode(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printText(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printTextWithFont(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printerInit(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  printerSelfChecking(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDAsciiBitmap(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDBarcode(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDBase64Bitmap(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDClearCommand(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDCommand(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDDoubleString(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDFillString(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDHibernateCommand(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDInitializationCommand(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDMultiString(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDString(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendLCDWakeUpCommand(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendRAWBase64Data(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  sendRAWData(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setAbsolutePositionPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setAlignment(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setAntiWhitePrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setBold(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setBoldPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setDoubleHeightPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setDoubleWidthPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setFontName(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setFontSize(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setInvertPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setItalicPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setLeftSpacingPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setLineSpacingPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setPrinterStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setRelativePositionPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setStrikethroughPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setStrikethroughStylePrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setTextRightSpacingPrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  setUnderlinePrintStyle(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  unBindService(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  updatePrinterState(): Promise<{ status: PrinterStatusEnum; code: number }> {
    throw this.unimplemented('Not implemented on web.');
  }

  commitPrinterBuffer(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  commitPrinterBufferWithCallback(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  enterPrinterBuffer(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  exitPrinterBuffer(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  exitPrinterBufferWithCallback(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
