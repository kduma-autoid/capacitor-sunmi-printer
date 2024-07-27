/// <reference types="@capacitor/cli" />
export var PrinterStatusEnum;
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
})(PrinterStatusEnum || (PrinterStatusEnum = {}));
export var ServiceStatusEnum;
(function (ServiceStatusEnum) {
    ServiceStatusEnum["NO_PRINTER"] = "NoPrinter";
    ServiceStatusEnum["CHECK_PRINTER"] = "CheckPrinter";
    ServiceStatusEnum["FOUND_PRINTER"] = "FoundPrinter";
    ServiceStatusEnum["LOST_PRINTER"] = "LostPrinter";
})(ServiceStatusEnum || (ServiceStatusEnum = {}));
export var AlignmentModeEnum;
(function (AlignmentModeEnum) {
    AlignmentModeEnum["LEFT"] = "left";
    AlignmentModeEnum["CENTER"] = "center";
    AlignmentModeEnum["RIGHT"] = "right";
})(AlignmentModeEnum || (AlignmentModeEnum = {}));
export var PrinterModeEnum;
(function (PrinterModeEnum) {
    PrinterModeEnum["GENERAL"] = "General";
    PrinterModeEnum["BLACK_MARK"] = "BlackMark";
    PrinterModeEnum["LABEL"] = "Label";
    PrinterModeEnum["UNKNOWN"] = "Unknown";
})(PrinterModeEnum || (PrinterModeEnum = {}));
export var PrinterStyleKeysEnum;
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
})(PrinterStyleKeysEnum || (PrinterStyleKeysEnum = {}));
export var PrinterStyleValuesEnum;
(function (PrinterStyleValuesEnum) {
    PrinterStyleValuesEnum["ENABLE"] = "Enable";
    PrinterStyleValuesEnum["DISABLE"] = "Disable";
})(PrinterStyleValuesEnum || (PrinterStyleValuesEnum = {}));
export var LcdCommandEnum;
(function (LcdCommandEnum) {
    LcdCommandEnum["INITIALIZATION"] = "Initialization";
    LcdCommandEnum["WAKE_UP"] = "WakeUp";
    LcdCommandEnum["HIBERNATE"] = "Hibernate";
    LcdCommandEnum["CLEAR"] = "Clear";
})(LcdCommandEnum || (LcdCommandEnum = {}));
export var LcdBarcodeFormatEnum;
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
})(LcdBarcodeFormatEnum || (LcdBarcodeFormatEnum = {}));
export var BarcodeSymbologyEnum;
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
})(BarcodeSymbologyEnum || (BarcodeSymbologyEnum = {}));
export var BarcodeTextPositionEnum;
(function (BarcodeTextPositionEnum) {
    BarcodeTextPositionEnum["NO_TEXT"] = "NoText";
    BarcodeTextPositionEnum["ABOVE"] = "Above";
    BarcodeTextPositionEnum["BELOW"] = "Below";
    BarcodeTextPositionEnum["ABOVE_AND_BELOW"] = "AboveAndBelow";
})(BarcodeTextPositionEnum || (BarcodeTextPositionEnum = {}));
export var Barcode2DSymbologyEnum;
(function (Barcode2DSymbologyEnum) {
    Barcode2DSymbologyEnum["QR_CODE"] = "QR_CODE";
    Barcode2DSymbologyEnum["PDF417"] = "PDF417";
    Barcode2DSymbologyEnum["DataMatrix"] = "DATA_MATRIX";
})(Barcode2DSymbologyEnum || (Barcode2DSymbologyEnum = {}));
export var BitmapPrintTypeEnum;
(function (BitmapPrintTypeEnum) {
    BitmapPrintTypeEnum["DEFAULT"] = "Default";
    BitmapPrintTypeEnum["BLACK_AND_WHITE"] = "blackAndWhite";
    BitmapPrintTypeEnum["GRAYSCALE"] = "Grayscale";
})(BitmapPrintTypeEnum || (BitmapPrintTypeEnum = {}));
//# sourceMappingURL=definitions.js.map