import { WebPlugin } from '@capacitor/core';
import type { SunmiPrinterPlugin, PrinterModeEnum, PrinterStatusEnum, ServiceStatusEnum } from './definitions';
export declare class SunmiPrinterWeb extends WebPlugin implements SunmiPrinterPlugin {
    bindService(): Promise<void>;
    cutPaper(): Promise<void>;
    getCutPaperTimes(): Promise<{
        times: number;
    }>;
    getDeviceName(): Promise<{
        name: string;
    }>;
    getDrawerStatus(): Promise<{
        opened: boolean;
    }>;
    getFontName(): Promise<{
        font: number;
    }>;
    getForcedDouble(): Promise<{
        status: number;
    }>;
    getForcedRowHeight(): Promise<{
        height: number;
    }>;
    getOpenDrawerTimes(): Promise<{
        times: number;
    }>;
    getPrintedLength(): Promise<{
        length: number;
    }>;
    getPrinterBBMDistance(): Promise<{
        distance: number;
    }>;
    getPrinterDensity(): Promise<{
        density: number;
    }>;
    getPrinterMode(): Promise<{
        mode: PrinterModeEnum;
        code: number;
    }>;
    getPrinterModel(): Promise<{
        model: string;
    }>;
    getPrinterPaper(): Promise<{
        paper: number;
    }>;
    getPrinterSerialNo(): Promise<{
        serial_number: string;
    }>;
    getPrinterVersion(): Promise<{
        version: string;
    }>;
    getServiceStatus(): Promise<{
        status: ServiceStatusEnum;
    }>;
    getServiceVersion(): Promise<{
        version: string;
    }>;
    isForcedAntiWhite(): Promise<{
        status: boolean;
    }>;
    isForcedBold(): Promise<{
        status: boolean;
    }>;
    isForcedUnderline(): Promise<{
        status: boolean;
    }>;
    isLabelMode(): Promise<{
        label_mode: boolean;
    }>;
    labelLocate(): Promise<void>;
    labelOutput(): Promise<void>;
    lineWrap(): Promise<void>;
    openDrawer(): Promise<void>;
    print2DCode(): Promise<void>;
    printBarCode(): Promise<void>;
    printBitmap(): Promise<void>;
    printBitmapCustom(): Promise<void>;
    printColumnsString(): Promise<void>;
    printColumnsText(): Promise<void>;
    printOriginalText(): Promise<void>;
    printQRCode(): Promise<void>;
    printText(): Promise<void>;
    printTextWithFont(): Promise<void>;
    printerInit(): Promise<void>;
    printerSelfChecking(): Promise<void>;
    sendLCDAsciiBitmap(): Promise<void>;
    sendLCDBarcode(): Promise<void>;
    sendLCDBase64Bitmap(): Promise<void>;
    sendLCDClearCommand(): Promise<void>;
    sendLCDCommand(): Promise<void>;
    sendLCDDoubleString(): Promise<void>;
    sendLCDFillString(): Promise<void>;
    sendLCDHibernateCommand(): Promise<void>;
    sendLCDInitializationCommand(): Promise<void>;
    sendLCDMultiString(): Promise<void>;
    sendLCDString(): Promise<void>;
    sendLCDWakeUpCommand(): Promise<void>;
    sendRAWBase64Data(): Promise<void>;
    sendRAWData(): Promise<void>;
    setAbsolutePositionPrintStyle(): Promise<void>;
    setAlignment(): Promise<void>;
    setAntiWhitePrintStyle(): Promise<void>;
    setBold(): Promise<void>;
    setBoldPrintStyle(): Promise<void>;
    setDoubleHeightPrintStyle(): Promise<void>;
    setDoubleWidthPrintStyle(): Promise<void>;
    setFontName(): Promise<void>;
    setFontSize(): Promise<void>;
    setInvertPrintStyle(): Promise<void>;
    setItalicPrintStyle(): Promise<void>;
    setLeftSpacingPrintStyle(): Promise<void>;
    setLineSpacingPrintStyle(): Promise<void>;
    setPrinterStyle(): Promise<void>;
    setRelativePositionPrintStyle(): Promise<void>;
    setStrikethroughPrintStyle(): Promise<void>;
    setStrikethroughStylePrintStyle(): Promise<void>;
    setTextRightSpacingPrintStyle(): Promise<void>;
    setUnderlinePrintStyle(): Promise<void>;
    unBindService(): Promise<void>;
    updatePrinterState(): Promise<{
        status: PrinterStatusEnum;
        code: number;
    }>;
    commitPrinterBuffer(): Promise<void>;
    commitPrinterBufferWithCallback(): Promise<void>;
    enterPrinterBuffer(): Promise<void>;
    exitPrinterBuffer(): Promise<void>;
    exitPrinterBufferWithCallback(): Promise<void>;
}
