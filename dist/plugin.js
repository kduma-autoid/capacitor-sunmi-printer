var capacitorSunmiPrinter = (function (exports, core) {
    'use strict';

    /// <reference types="@capacitor/cli" />
    exports.PrinterStatusEnum = void 0;
    (function (PrinterStatusEnum) {
        PrinterStatusEnum["NORMAL_OPERATION"] = "NormalOperation";
        PrinterStatusEnum["UNDER_PREPARATION"] = "UnderPreparation";
        PrinterStatusEnum["ABNORMAL_COMMUNICATION"] = "AbnormalCommunication";
        PrinterStatusEnum["OUT_OF_PAPER"] = "OutOfPaper";
        PrinterStatusEnum["OVERHEATED"] = "Overheated";
        PrinterStatusEnum["COVER_IS_OPEN"] = "CoverIsOpen";
        PrinterStatusEnum["CUTTER_ERROR"] = "CutterError";
        PrinterStatusEnum["CUTTER_RECOVERED"] = "CutterRecovered";
        PrinterStatusEnum["BLACK_MARK_NOT_DETECTED"] = "BlackMarkNotDetected";
        PrinterStatusEnum["PRINTER_NOT_DETECTED"] = "PrinterNotDetected";
        PrinterStatusEnum["FIRMWARE_UPDATE_FAILED"] = "FirmwareUpdateFailed";
        PrinterStatusEnum["UNKNOWN"] = "Unknown";
    })(exports.PrinterStatusEnum || (exports.PrinterStatusEnum = {}));
    exports.ServiceStatusEnum = void 0;
    (function (ServiceStatusEnum) {
        ServiceStatusEnum["NO_PRINTER"] = "NoPrinter";
        ServiceStatusEnum["CHECK_PRINTER"] = "CheckPrinter";
        ServiceStatusEnum["FOUND_PRINTER"] = "FoundPrinter";
        ServiceStatusEnum["LOST_PRINTER"] = "LostPrinter";
    })(exports.ServiceStatusEnum || (exports.ServiceStatusEnum = {}));
    exports.AlignmentModeEnum = void 0;
    (function (AlignmentModeEnum) {
        AlignmentModeEnum["LEFT"] = "left";
        AlignmentModeEnum["CENTER"] = "center";
        AlignmentModeEnum["RIGHT"] = "right";
    })(exports.AlignmentModeEnum || (exports.AlignmentModeEnum = {}));
    exports.PrinterModeEnum = void 0;
    (function (PrinterModeEnum) {
        PrinterModeEnum["GENERAL"] = "General";
        PrinterModeEnum["BLACK_MARK"] = "BlackMark";
        PrinterModeEnum["LABEL"] = "Label";
        PrinterModeEnum["UNKNOWN"] = "Unknown";
    })(exports.PrinterModeEnum || (exports.PrinterModeEnum = {}));
    exports.PrinterStyleKeysEnum = void 0;
    (function (PrinterStyleKeysEnum) {
        PrinterStyleKeysEnum["ENABLE_DOUBLE_WIDTH"] = "EnableDoubleWidth";
        PrinterStyleKeysEnum["ENABLE_DOUBLE_HEIGHT"] = "EnableDoubleHeight";
        PrinterStyleKeysEnum["ENABLE_BOLD"] = "EnableBold";
        PrinterStyleKeysEnum["ENABLE_UNDERLINE"] = "EnableUnderline";
        PrinterStyleKeysEnum["ENABLE_ANTI_WHITE"] = "EnableAntiWhite";
        PrinterStyleKeysEnum["ENABLE_STRIKETHROUGH"] = "EnableStrikethrough";
        PrinterStyleKeysEnum["ENABLE_ITALIC"] = "EnableItalic";
        PrinterStyleKeysEnum["ENABLE_INVERT"] = "EnableInvert";
        PrinterStyleKeysEnum["SET_TEXT_RIGHT_SPACING"] = "SetTextRightSpacing";
        PrinterStyleKeysEnum["SET_RELATIVE_POSITION"] = "SetRelativePosition";
        PrinterStyleKeysEnum["SET_ABSOLUTE_POSITION"] = "SetAbsolutePosition";
        PrinterStyleKeysEnum["SET_LINE_SPACING"] = "SetLineSpacing";
        PrinterStyleKeysEnum["SET_LEFT_SPACING"] = "SetLeftSpacing";
        PrinterStyleKeysEnum["SET_STRIKETHROUGH_STYLE"] = "SetStrikethroughStyle";
    })(exports.PrinterStyleKeysEnum || (exports.PrinterStyleKeysEnum = {}));
    exports.PrinterStyleValuesEnum = void 0;
    (function (PrinterStyleValuesEnum) {
        PrinterStyleValuesEnum["ENABLE"] = "Enable";
        PrinterStyleValuesEnum["DISABLE"] = "Disable";
    })(exports.PrinterStyleValuesEnum || (exports.PrinterStyleValuesEnum = {}));
    exports.LcdCommandEnum = void 0;
    (function (LcdCommandEnum) {
        LcdCommandEnum["INITIALIZATION"] = "Initialization";
        LcdCommandEnum["WAKE_UP"] = "WakeUp";
        LcdCommandEnum["HIBERNATE"] = "Hibernate";
        LcdCommandEnum["CLEAR"] = "Clear";
    })(exports.LcdCommandEnum || (exports.LcdCommandEnum = {}));
    exports.LcdBarcodeFormatEnum = void 0;
    (function (LcdBarcodeFormatEnum) {
        LcdBarcodeFormatEnum["UPC_A"] = "UPC_A";
        LcdBarcodeFormatEnum["UPC_E"] = "UPC_E";
        LcdBarcodeFormatEnum["EAN_13"] = "EAN_13";
        LcdBarcodeFormatEnum["EAN_8"] = "EAN_8";
        LcdBarcodeFormatEnum["CODE_39"] = "CODE_39";
        LcdBarcodeFormatEnum["ITF"] = "ITF";
        LcdBarcodeFormatEnum["CODABAR"] = "CODABAR";
        LcdBarcodeFormatEnum["CODE_93"] = "CODE_93";
        LcdBarcodeFormatEnum["CODE_128"] = "CODE_128";
        LcdBarcodeFormatEnum["QR_CODE"] = "QR_CODE";
    })(exports.LcdBarcodeFormatEnum || (exports.LcdBarcodeFormatEnum = {}));
    exports.BarcodeSymbologyEnum = void 0;
    (function (BarcodeSymbologyEnum) {
        BarcodeSymbologyEnum["UPC_A"] = "UPC_A";
        BarcodeSymbologyEnum["UPC_E"] = "UPC_E";
        BarcodeSymbologyEnum["EAN_13"] = "EAN_13";
        BarcodeSymbologyEnum["EAN_8"] = "EAN_8";
        BarcodeSymbologyEnum["CODE_39"] = "CODE_39";
        BarcodeSymbologyEnum["ITF"] = "ITF";
        BarcodeSymbologyEnum["CODABAR"] = "CODABAR";
        BarcodeSymbologyEnum["CODE_93"] = "CODE_93";
        BarcodeSymbologyEnum["CODE_128"] = "CODE_128";
    })(exports.BarcodeSymbologyEnum || (exports.BarcodeSymbologyEnum = {}));
    exports.BarcodeTextPositionEnum = void 0;
    (function (BarcodeTextPositionEnum) {
        BarcodeTextPositionEnum["NO_TEXT"] = "NoText";
        BarcodeTextPositionEnum["ABOVE"] = "Above";
        BarcodeTextPositionEnum["BELOW"] = "Below";
        BarcodeTextPositionEnum["ABOVE_AND_BELOW"] = "AboveAndBelow";
    })(exports.BarcodeTextPositionEnum || (exports.BarcodeTextPositionEnum = {}));
    exports.Barcode2DSymbologyEnum = void 0;
    (function (Barcode2DSymbologyEnum) {
        Barcode2DSymbologyEnum["QR_CODE"] = "QR_CODE";
        Barcode2DSymbologyEnum["PDF417"] = "PDF417";
        Barcode2DSymbologyEnum["DataMatrix"] = "DATA_MATRIX";
    })(exports.Barcode2DSymbologyEnum || (exports.Barcode2DSymbologyEnum = {}));
    exports.BitmapPrintTypeEnum = void 0;
    (function (BitmapPrintTypeEnum) {
        BitmapPrintTypeEnum["DEFAULT"] = "Default";
        BitmapPrintTypeEnum["BLACK_AND_WHITE"] = "blackAndWhite";
        BitmapPrintTypeEnum["GRAYSCALE"] = "Grayscale";
    })(exports.BitmapPrintTypeEnum || (exports.BitmapPrintTypeEnum = {}));

    const SunmiPrinter = core.registerPlugin('SunmiPrinter', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SunmiPrinterWeb()),
        ios: () => Promise.resolve().then(function () { return web; }).then(m => new m.SunmiPrinterWeb()),
    });

    class SunmiPrinterWeb extends core.WebPlugin {
        bindService() {
            throw this.unimplemented('Not implemented on web.');
        }
        cutPaper() {
            throw this.unimplemented('Not implemented on web.');
        }
        getCutPaperTimes() {
            throw this.unimplemented('Not implemented on web.');
        }
        getDeviceName() {
            throw this.unimplemented('Not implemented on web.');
        }
        getDrawerStatus() {
            throw this.unimplemented('Not implemented on web.');
        }
        getFontName() {
            throw this.unimplemented('Not implemented on web.');
        }
        getForcedDouble() {
            throw this.unimplemented('Not implemented on web.');
        }
        getForcedRowHeight() {
            throw this.unimplemented('Not implemented on web.');
        }
        getOpenDrawerTimes() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrintedLength() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterBBMDistance() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterDensity() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterMode() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterModel() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterPaper() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterSerialNo() {
            throw this.unimplemented('Not implemented on web.');
        }
        getPrinterVersion() {
            throw this.unimplemented('Not implemented on web.');
        }
        getServiceStatus() {
            throw this.unimplemented('Not implemented on web.');
        }
        getServiceVersion() {
            throw this.unimplemented('Not implemented on web.');
        }
        isForcedAntiWhite() {
            throw this.unimplemented('Not implemented on web.');
        }
        isForcedBold() {
            throw this.unimplemented('Not implemented on web.');
        }
        isForcedUnderline() {
            throw this.unimplemented('Not implemented on web.');
        }
        isLabelMode() {
            throw this.unimplemented('Not implemented on web.');
        }
        labelLocate() {
            throw this.unimplemented('Not implemented on web.');
        }
        labelOutput() {
            throw this.unimplemented('Not implemented on web.');
        }
        lineWrap() {
            throw this.unimplemented('Not implemented on web.');
        }
        openDrawer() {
            throw this.unimplemented('Not implemented on web.');
        }
        print2DCode() {
            throw this.unimplemented('Not implemented on web.');
        }
        printBarCode() {
            throw this.unimplemented('Not implemented on web.');
        }
        printBitmap() {
            throw this.unimplemented('Not implemented on web.');
        }
        printBitmapCustom() {
            throw this.unimplemented('Not implemented on web.');
        }
        printColumnsString() {
            throw this.unimplemented('Not implemented on web.');
        }
        printColumnsText() {
            throw this.unimplemented('Not implemented on web.');
        }
        printOriginalText() {
            throw this.unimplemented('Not implemented on web.');
        }
        printQRCode() {
            throw this.unimplemented('Not implemented on web.');
        }
        printText() {
            throw this.unimplemented('Not implemented on web.');
        }
        printTextWithFont() {
            throw this.unimplemented('Not implemented on web.');
        }
        printerInit() {
            throw this.unimplemented('Not implemented on web.');
        }
        printerSelfChecking() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDAsciiBitmap() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDBarcode() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDBase64Bitmap() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDClearCommand() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDCommand() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDDoubleString() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDFillString() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDHibernateCommand() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDInitializationCommand() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDMultiString() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDString() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendLCDWakeUpCommand() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendRAWBase64Data() {
            throw this.unimplemented('Not implemented on web.');
        }
        sendRAWData() {
            throw this.unimplemented('Not implemented on web.');
        }
        setAbsolutePositionPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setAlignment() {
            throw this.unimplemented('Not implemented on web.');
        }
        setAntiWhitePrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setBold() {
            throw this.unimplemented('Not implemented on web.');
        }
        setBoldPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setDoubleHeightPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setDoubleWidthPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setFontName() {
            throw this.unimplemented('Not implemented on web.');
        }
        setFontSize() {
            throw this.unimplemented('Not implemented on web.');
        }
        setInvertPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setItalicPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setLeftSpacingPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setLineSpacingPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setPrinterStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setRelativePositionPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setStrikethroughPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setStrikethroughStylePrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setTextRightSpacingPrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        setUnderlinePrintStyle() {
            throw this.unimplemented('Not implemented on web.');
        }
        unBindService() {
            throw this.unimplemented('Not implemented on web.');
        }
        updatePrinterState() {
            throw this.unimplemented('Not implemented on web.');
        }
        commitPrinterBuffer() {
            throw this.unimplemented('Not implemented on web.');
        }
        commitPrinterBufferWithCallback() {
            throw this.unimplemented('Not implemented on web.');
        }
        enterPrinterBuffer() {
            throw this.unimplemented('Not implemented on web.');
        }
        exitPrinterBuffer() {
            throw this.unimplemented('Not implemented on web.');
        }
        exitPrinterBufferWithCallback() {
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SunmiPrinterWeb: SunmiPrinterWeb
    });

    exports.SunmiPrinter = SunmiPrinter;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
